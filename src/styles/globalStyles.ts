import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { color } from './theme';

const GlobalStyles = createGlobalStyle` 


  ${reset} 

    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;  
        font-family: Euclid, Roboto, Helvetica, Arial, sans-serif;
        color : ${color.BLACK};
    }

    input, textarea { 
      -moz-user-select: auto;
      -webkit-user-select: auto;
      -ms-user-select: auto;
      user-select: auto;
    }

    input:focus {
      outline: none;
    }

    button {
      border: none;
      background: none;
      padding: 0;
      cursor: pointer;
    }

    @font-face {
    font-family: Euclid;
    src: url("./fonts/font.otf");
    }
   
`;

export default GlobalStyles;
