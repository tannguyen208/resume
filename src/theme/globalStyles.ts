import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body,
  html {
    margin: 0;
    padding: 0;
    height: 100%;
    color: var(--primary-color);
    font-family: Virgil;
    font-size: 1rem;
  }

  /* Hide scrollbar for Chrome, Safari and Opera */
  body::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  body {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  #root {
    margin: 0 auto;
    /* padding: 2rem;
    text-align: center; */
  }

  .flex {
    display: flex;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }

  .flex-1 {
    flex: 1;
  }

  .text-tiny {
    font-size: 0.8rem;
  }

  .pointer {
    cursor: pointer;
  }
`

export default GlobalStyle
