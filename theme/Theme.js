import { createGlobalStyle } from "styled-components";
export const lightTheme = {
  body: "rgb(32, 32, 35)",
  fontColor: "#ddd",
};
export const darkTheme = {
  body: "rgb(240, 231, 219)",
  fontColor: "#000",
};
export const GlobalStyles = createGlobalStyle`
body{
 background-color: ${(props) => props.theme.body};
 color: ${(props) => props.theme.fontColor};
 transition: .3s ;
}
`;
