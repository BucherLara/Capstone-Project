import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 @font-face{
    font-family:"DMSans";
    src: url("./fonts/DMSans-Regular.ttf")  ;
 }   

:root {
    --primary-color: orange;

}
html,
    body {
         
        margin: 0;
        font-family: "DMSans",-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
       
        min-width: 450px;
        
        background-color: var(--primary-color);
    }
    

    * {
        box-sizing: border-box;
    }
    
`;

export default GlobalStyles;
