import React from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Header from './Header';
import Meta from './Meta';
import Nav from './Nav';

const theme = {
  darkBlue: '#093C64',
  regularBlue: '#476b97',
  orange: '#dda01d',
  lightBlue: '#dcf2ff',
  black: '#232323',
  offWhite: '#fefefe',
};

const StyledPage = styled.div`
  background: ${props => props.theme.offWhite};
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

injectGlobal`
	html {
		box-sizing: border-box;
	}
	*, *:before, *:after {
		box-sizing: inherit;
	}

	body {
		padding: 0;
		margin: 0;
	}
`;

const Page = props => (
  <ThemeProvider theme={theme}>
    <StyledPage>
      <Meta />
      <Header />
      <Inner>{props.children}</Inner>
    </StyledPage>
  </ThemeProvider>
);

export default Page;
