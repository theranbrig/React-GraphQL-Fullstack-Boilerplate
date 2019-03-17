import Router from 'next/router';
import NProgress from 'nprogress';
import styled from 'styled-components';
import Nav from './Nav';

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const Logo = styled.div`
  position: relative;
  z-index: 2;
  padding: 5px 0 0 5px;
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

const StyledHeader = styled.header`
  .bar {
    border-bottom: 5px solid ${props => props.theme.darkBlue};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .bar img {
    width: 100px;
    @media (max-width: 1300px) {
      width: 150px;
    }
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${props => props.theme.darkBlue};
  }
`;

const Header = () => (
  <StyledHeader>
    <Logo className="bar">
      <div>
        <a>
          <h1>React BoilerPlate</h1>
        </a>
      </div>
      <Nav />
    </Logo>
  </StyledHeader>
);

export default Header;
