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
	font-size: 100%;


@media (max-width: 1440px) {
	padding: 1rem 4rem;
}
@media (max-width: 1265px) {
	font-size: 90%;
}
@media (max-width: 1173px) {
	font-size: 80%;
}
@media (max-width: 1182px) {
	font-size: 75%;
}
@media (max-width: 1140px) {
	font-size: 70%;
}

@media (max-width: 1024px) {
	font-size: 100%;
	padding: 1rem 2rem;
}
@media (max-width: 850px) {
	font-size: 90%;
	
}
@media (max-width: 790px) {
	font-size: 85%;
	
}
@media (max-width: 767px) {
	font-size: 200%;
	padding: 0;
	padding-bottom: 1rem;
}
	}

`;

export default GlobalStyles;
