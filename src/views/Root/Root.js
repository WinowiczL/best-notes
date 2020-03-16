import React from 'react';
import { Button } from '../../components/Button/Button';
import { GlobalStyle } from '../../theme/GlobalStyle';

export const Root = () => (
  <div>
    <GlobalStyle />
    <h1>Root</h1>
    <Button>Close / Save</Button>
    <Button secondary>Remove</Button>
  </div>
);
