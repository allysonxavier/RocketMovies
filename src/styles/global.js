import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
body{
    background-color: ${({ theme }) => theme.COLORS.background800};
-webkit-font-smoothing: antialiased;
}
body, input, button, textarea{
    font-family: 'Roboto Slab', sans-serif;
    font-size: 16px;
    outline: none;
}

h1,strong,p{
    font-family: 'Roboto Slab', sans-serif;
 }
a{
    text-decoration:none;
}

    button, a {
        cursor: pointer;
        transition: filter 0.2s ;
    }
    button:hover, a:hover {filter: brightness(0.9)}`;
