import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root{
    height: 100%;
  }
  body{
    background-color: var(--bg);
  }
  *, button, input{
    border: 0;
    outline: 0;
    font-family: 'Ubuntu', sans-serif;
  }
  h1 {
    font-size: 19px;
    letter-spacing: 1.5px;
  }
  :root{
    --primary: #E6724B;
    --sections: #242526;
    --bg: #18191a;
    --text: #343A40;
  }
`
