import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  #root {
    height: 100vh;
  }

  .App {
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }

  .main {
    padding: 40px 16px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    gap: 20px
  }

  footer {
    background-color: seagreen;
    height: 100px;
  }

  @media (max-width: 768px){
    .grid {
      grid-template-columns: repeat(2, 1fr)
    }
  }

  @media (max-width: 576px){
    .grid {
      grid-template-columns: 1fr
    }
  }

  .cart-items {
    div:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  .cart-item {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100px;
    padding: 10px 15px;
    box-shadow: 0 0 20px -10px;

    img {
      max-width: 80px;
      object-fit: contain;
    }

    .buttons {
      width: 150px;
      display: flex;
      justify-content: space-between;

      button {
        width: 40px;
        height: 30px;
      }
    }
  }
`;

export default GlobalStyle;
