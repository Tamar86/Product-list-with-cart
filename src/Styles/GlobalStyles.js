import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

body {
	max-width: 100%;
	position: relative;
	background-color: hsl(20, 50%, 98%);
	display: flex;
	flex-direction: column;
	align-items: center;
  padding: 2rem 7rem;
	font-family: "Red Hat Text", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;

	@media (max-width: 1440px) {
	padding: 1rem 4rem;
}

	@media (max-width: 1124px) {
	padding: 1rem 2rem;
}

	@media (max-width: 767px) {
		padding: 0;
	padding-bottom: 1rem;

}
	}

`;

export default GlobalStyles;
