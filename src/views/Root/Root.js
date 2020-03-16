import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Button } from '../../components/atoms/Button/Button';
import { GlobalStyle } from '../../theme/GlobalStyle';
import { theme } from "../../theme/mainTheme";

export const Root = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <h1>Root</h1>
        <Button>Close / Save</Button>
        <Button secondary>Remove</Button>
      </>
    </ThemeProvider>
  </div>
);
