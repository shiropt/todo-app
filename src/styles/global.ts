import { createGlobalStyle } from "styled-components";
import "@radix-ui/themes/styles.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

export const GlobalStyle = createGlobalStyle`
  :root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
}

body {
  padding:0 !important;
  margin:0;
  box-sizing: border-box;
}

li{
  list-style: none;
}
ul{
  padding: 0;
}

`;
