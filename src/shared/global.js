import { createGlobalStyle, css } from 'styled-components';

import { color, typography } from './styles';



export const bodyStyles = css`
  background-color: pink;
`;

export const GlobalStyle = createGlobalStyle`
 body {
   ${bodyStyles}
 }`;