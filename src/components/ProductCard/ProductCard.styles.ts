import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 0.25rem;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.02);
  color: #4a4a4a;
  max-width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .card-image {
    width: 100%;
    padding-top: 75%;
    overflow: hidden;
    position: relative;
  }

  .card-image img {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .card-content {
    padding: 1.5rem;
  }

  .cart-buttons {
    display: flex;
    justify-content: space-between;

    .button {
      width: 49%;
    }
  }
`;
