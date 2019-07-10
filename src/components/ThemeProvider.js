import React, { createContext, useContext } from 'react';
import { view } from 'react-easy-state';

import config from '../stores/config';

export const ThemeContext = createContext();
export const ThemeProvider = view(({ children }) => (
  <ThemeContext.Provider value={{ theme: config.themeAttrs }}>
    {children}
  </ThemeContext.Provider>
));
export const useTheme = () => useContext(ThemeContext);
