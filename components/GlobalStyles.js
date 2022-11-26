import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html,
    body {
        padding: 10px;;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        max-width: 1280px;
        min-width: 450px;
        
        
    }

    * {
        box-sizing: border-box;
    }
   
`;

export default GlobalStyles;
