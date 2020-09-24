import React, { useState } from 'react';

const LayoutContext = React.createContext();

function LayoutProvider({ children }) {
  const [headerDark, setHeaderDark] = useState(false);

  return (
    <LayoutContext.Provider value={{ headerDark, setHeaderDark }}>
      {children}
    </LayoutContext.Provider>
  );
}

export { LayoutProvider, LayoutContext };
