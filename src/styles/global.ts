import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
}

body {
  padding:0 !important;
  box-sizing: border-box;
}

li{
  list-style: none;
}
ul{
  padding: 0;
}


`;
