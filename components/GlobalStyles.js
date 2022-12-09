import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 @font-face{
    font-family:"DMSans";
    src: url("./fonts/DMSans-Regular.ttf")  ;
 }  
 @font-face{
    font-family:"DMSans-Bold";
    src: url("./fonts/DMSans-Bold.ttf")  ;
 }    

:root {
    --primary-color: #E3E5F9;
    --secondary-color:  #ffffff;
    --third-color: #111111;
    --font-color: #111111;
    --second-font-color: #ffffff;
    --primary-font: "DMSans";
    --secondary-font: "DMSans-Bold";

}

html,
    body {
        margin:0;
        margin-bottom: 40px; 
        font-family:var(--primary-font) ,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    min-width: 450px;
        background-color: var(--primary-color);

    }
    h1 {
        font-size: 2.1rem;
        font-family: var(--secondary-font); 
    }
    h2 {
        font-size: 1.2rem;
        font-family: var(--secondary-font); 
    }
    h3 {font-size: 1.6rem;
        margin: 0;
    }
    p {
        font-size: 1.2rem; 
    }

    * {
        box-sizing: border-box;
    }
   
    main{
        margin-bottom: 95px; 
    }
`;

export default GlobalStyles;
