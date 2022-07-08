import * as React from 'react';
import { ThemeProvider, useTheme, createTheme } from '@mui/material/styles';
import { getDesignTokens, getThemedComponents } from './brandingTheme';
import { deepmerge } from '@mui/utils';
import CssBaseline from '@mui/material/CssBaseline';

export const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

export default function BrandingProvider({ children, mode: modeProp }) {

  const [mode, setMode] = React.useState('light');

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(() => {
    const designTokens = getDesignTokens(mode);
    let newTheme = createTheme(designTokens);
    newTheme = deepmerge(newTheme, getThemedComponents(newTheme));
    return newTheme;
  }, [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {<CssBaseline />}
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
