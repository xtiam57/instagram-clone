import React, { useEffect } from 'react';

import { useLayout } from 'hooks/useLayout';

export default function PageWrapper({
  children,
  headerDark = false,
  footerDark = false,
}) {
  const { setHeaderDark } = useLayout();

  useEffect(() => {
    setHeaderDark(headerDark);
  }, [headerDark, setHeaderDark]);

  return <>{children}</>;
}
