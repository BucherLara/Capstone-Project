import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 @font-face{
    font-family:"DMSans";
    src: url("./fonts/DMSans-Regular.ttf")  ;
 }   

:root {
    --primary-color: #E3E5F9;
    --secondary-color:  #ffffff;
    --font-color: #111111

}

html,
    body {
        margin:0;
        margin-bottom: 40px; 
         
        
        font-family: "DMSans",-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
       
        min-width: 450px;
        
        background-color: var(--primary-color);

    }
    h1 {
        font-size: 34px;
        font-weight: bold;
    }
    h2 {
        font-size: 18px;
        font-weight: bold;
    }
    h3 {font-size: 25px;
        margin: 0;

    }

    * {
        box-sizing: border-box;
    }
   
    
`;

export default GlobalStyles;
