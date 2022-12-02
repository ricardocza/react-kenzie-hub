import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    ::-ms-reveal {
        display: none;
    }
    :root {
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;
        --color-grey0: #F8F9FA;
        --color-grey1: #868E96;
        --color-grey2: #343B41;
        --color-grey3: #212529;
        --color-grey4: #121214;
        --color-success: #3FE864;
        --color-negative: #E83F5B;
    }
    * {
    font-family: 'Inter', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;        
        list-style: none;
    }
    body {
        
        background-color: var(--color-grey4);
        color: var(--color-grey0);
    }
    h1 {
        font-size: 1.125rem;
        font-weight: 700;
        color: var(--color-primary);
        text-align: center;
        margin: 81px 0 20px ;
    }
    h2 {
        font-size: 1rem;
        font-weight: 500;
    }
    h3 {
        font-size: 0.875rem;
        font-weight: 700;
    }

    p {
        font-size: 0.75rem;
        font-weight: 500;
    }
    button {
        width: 100%;
        height: 38.5px;
        color: var(--color-grey0);
        border-radius: 4px;
        cursor: pointer;
    }
   
    a {
        color: unset;
    width: 100%;
    text-decoration: none;
    }
    label {
    font-size: 12px;
  }

    
`;

export default GlobalStyle;
