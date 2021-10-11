import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
      background: ${({ theme }) => theme.colors.cOrange};
      color: hsl(192, 100%, 9%);
      font-size: 1.15em;
      margin: 0;
    }
`