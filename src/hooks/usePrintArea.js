import { useRef } from 'react';

let counter = 0;
const modes = { iframe: 'iframe', popup: 'popup' };
const standards = { strict: 'strict', loose: 'loose', html5: 'html5' };
const defaults = {
  mode: modes.iframe,
  standard: standards.html5,
  popWidth: 1024,
  popHeight: 768,
  popX: 100,
  popY: 100,
  popTitle: '',
  popClose: false,
  extraCss: '',
  extraHead: '<meta charset="utf-8" />,<meta http-equiv="X-UA-Compatible" content="IE=edge"/>',
  retainAttr: ['class', 'id', 'style', 'on'],
};

const PrintAreaService = {
  print(PrintAreaWindow, settings) {
    const paWindow = PrintAreaWindow.win;

    paWindow.focus();
    paWindow.print();

    if (settings.mode === modes.popup && settings.popClose) {
      setTimeout(() => {
        paWindow.close();
      }, 2000);
    }

    // PrintAreaWindow.doc.addEventListener(
    //   'DOMContentLoaded',
    //   () => {
    //     console.log('DOM fully loaded and parsed!!!');
    //     paWindow.focus();
    //     paWindow.print();

    //     if (settings.mode === modes.popup && settings.popClose) {
    //       setTimeout(function () {
    //         paWindow.close();
    //       }, 2000);
    //     }
    //   },
    //   false
    // );
  },

  write(PADocument, element, settings) {
    const docType = this.getDocType(settings);
    const head = this.getHead(settings);
    const body = this.getBody(element, settings);

    PADocument.open();
    PADocument.write(`${docType}<html>${head} ${body}</html>`);
    PADocument.close();
  },

  getDocType({ mode, standard }) {
    if (mode === modes.iframe) {
      return '';
    }

    if (standard === standards.html5) {
      return '<!DOCTYPE html>';
    }

    const transitional = standard === standards.loose ? ' Transitional' : '';
    const dtd = standard === standards.loose ? 'loose' : 'strict';

    return `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01${transitional}//EN" "http://www.w3.org/TR/html4/${dtd}.dtd">`;
  },

  getHead({ popTitle, extraHead, extraCss }) {
    let head = '';

    if (extraHead) {
      extraHead.replace(/([^,]+)/g, (m) => {
        head += m;
      });
    }

    // Getting CSS
    const styleTags = [...document.getElementsByTagName('style')];
    const styles = styleTags.map(({ innerText }) => `<style type="text/css">${innerText}</style>`).join('');

    // Getting Links
    const linkTags = [...document.getElementsByTagName('link')];
    let links = linkTags
      .filter(({ rel }) => {
        // Requirement: <link> element MUST have rel="stylesheet" to be considered in print document
        return typeof rel !== 'undefined' && rel.toLowerCase() === 'stylesheet';
      })
      .filter(({ media }) => {
        // Include if media is undefined, empty, print or all
        return (
          typeof media === 'undefined' ||
          media === '' ||
          media.toLowerCase() === 'print' ||
          media.toLowerCase() === 'all'
        );
      })
      .map(({ href }) => `<link type="text/css" rel="stylesheet" href="${href}" />`)
      .join('');

    if (extraCss) {
      extraCss.replace(/([^,\s]+)/g, (m) => {
        links += `<link type="text/css" rel="stylesheet" href="${m}">`;
      });
    }

    return `<head><title>${popTitle}</title>${head} ${styles} ${links}</head>`;
  },

  getBody(element, settings) {
    // let html = '';

    // const attrs = settings.retainAttr;
    // const ele = this.getFormData(element);
    // element.each(function ($scope, index) {
    //   const ele = getBodyScope.getFormData(element);
    //   let attributes = '';
    //   for (let x = 0; x < attrs.length; x++) {
    //     const eleAttr = $(ele).attr(attrs[x]);
    //     if (eleAttr) {
    //       attributes += (attributes.length > 0 ? ' ' : '') + attrs[x] + '=\'' + eleAttr + '\'';
    //     }
    //   }
    //   html += '<div ' + attributes + '>' + $(ele).html() + '</div>';
    // });

    return `<body>${element.innerHTML}</body>`;
  },

  // getFormData(element) {
  //   const copy = element.clone();
  //   const copiedInputs = $('input,select,textarea', copy);

  //   $('input,select,textarea', element).each(function (i) {
  //     let typeInput = $(this).attr('type');

  //     if ($.type(typeInput) === 'undefined') {
  //       typeInput = $(this).is('select') ? 'select' : $(this).is('textarea') ? 'textarea' : '';
  //     }

  //     const copiedInput = copiedInputs.eq(i);

  //     if (typeInput === 'radio' || typeInput === 'checkbox') {
  //       copiedInput.attr('checked', $(this).is(':checked'));
  //     } else if (typeInput === 'text') {
  //       copiedInput.attr('value', $(this).val());
  //     } else if (typeInput === 'select') {
  //       // tslint:disable-next-line:no-shadowed-variable
  //       $(this).find('option').each(function(i) {
  //         if ($(this).is(':selected')) {
  //           $('option', copiedInput).eq(i).attr('selected', true);
  //         }
  //       });
  //     } else if (typeInput === 'textarea') {
  //       copiedInput.text($(this).val());
  //     }
  //   });

  //   return copy;
  // },

  iframe({ id }) {
    let iframe;
    try {
      iframe = document.createElement('iframe');
      document.body.appendChild(iframe);

      iframe.setAttribute('style', 'border:0;position:absolute;width:0px;height:0px;right:0px;top:0px;');
      iframe.setAttribute('id', id);
      iframe.setAttribute('src', `#${new Date().getTime()}`);
      iframe.doc = null;
      iframe.doc = iframe.contentDocument
        ? iframe.contentDocument
        : iframe.contentWindow
        ? iframe.contentWindow.document
        : iframe.document;
    } catch (e) {
      throw new Error(e + '. iframes may not be supported in this browser.');
    }
    if (iframe.doc === null) {
      throw new Error('Cannot find document.');
    }
    return iframe;
  },

  popup({ popWidth, popHeight, popX, popY }) {
    const windowAttr = `location=yes,statusbar=no,directories=no,menubar=no,titlebar=no,toolbar=no,dependent=no,personalbar=no,scrollbars=yes,resizable=yes,width=${popWidth},height=${popHeight},screenX=${popX},screenY=${popY}`;
    const newWin = window.open('', '_blank', windowAttr);
    newWin.doc = newWin.document;
    return newWin;
  },

  getPrintWindow(settings) {
    switch (settings.mode) {
      case modes.popup:
        const p = this.popup(settings);
        return { win: p, doc: p.doc };
      default:
        const f = this.iframe(settings);
        return { win: f.contentWindow || f, doc: f.doc };
    }
  },
};

const printArea = (areaElement, options) => {
  const settings = { ...defaults, ...options };
  const idPrefix = 'printArea_';

  // Delete previous element used for printing
  const element = document.querySelector(`[id^="${idPrefix}"]`);
  if (element) {
    element.parentNode.removeChild(element);
  }

  settings.id = `${idPrefix}${counter++}`;

  const areaWindow = PrintAreaService.getPrintWindow(settings);
  PrintAreaService.write(areaWindow.doc, areaElement, settings);

  setTimeout(function () {
    PrintAreaService.print(areaWindow, settings);
  }, 1000);
};

export default function usePrintArea(settings = defaults) {
  const areaRef = useRef();

  const onPrint = (event) => {
    event.preventDefault();
    printArea(areaRef.current, settings);
  };

  return { onPrint, areaRef };
}
