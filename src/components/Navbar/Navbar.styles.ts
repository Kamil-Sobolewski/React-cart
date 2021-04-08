import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  height: 56px;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: darkcyan;

  .site-logo {
    a {
      color: #fff;
    }
  }
`;

export const NavLink = styled(Link)``;
