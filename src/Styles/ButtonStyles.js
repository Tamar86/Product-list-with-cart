import styled, { css } from 'styled-components';

//Base button styles

const breakpoint = {
	desktop: '1940px',
	tablet: '1024px',
	mobile: '767px',
	smallMobile: '480px',
};

export const ButtonBase = styled.button`
	max-width: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 2rem;
	font-size: 100%;

	&:hover {
		cursor: pointer;
	}
`;

//variants

export const btnPrimary = css`
	position: absolute;
	bottom: -1rem;
	background-color: hsl(20, 50%, 98%);
	border: 1px solid hsl(7, 20%, 60%);
	font-size: 0.8rem;
	font-weight: 600;
	gap: 7px;
`;

export const btnAction = css`
	position: absolute;
	bottom: -1rem;
	gap: 20%;
	background-color: hsl(14, 86%, 42%);
	color: hsl(20, 50%, 98%);
	border: none;

	&:focus {
		outline: none;
	}
`;

export const btnConfirm = css`
	background-color: hsl(14, 86%, 42%);
	color: hsl(20, 50%, 98%);
	border: none;

	&:hover {
		background-color: hsl(15, 64.6%, 28.8%);
	}

	@media (max-width: 767px) {
		font-size: 80%;
	}
	@media (max-width: 480px) {
		font-size: 60%;
	}
`;

export const btnNewOrder = css`
	background-color: hsl(14, 86%, 42%);
	color: hsl(20, 50%, 98%);
	border: none;
	&:hover {
		background-color: hsl(15, 64.6%, 28.8%);
	}
`;

export const small = css`
	width: 1.1rem;
	height: 1.1rem;
	border: 2px solid hsl(7, 20%, 60%);
	background-color: transparent;
`;

export const medium = css`
	//Desktop

	@media (max-width: ${breakpoint.desktop}) {
		width: 11.25rem;
		height: 3rem;
		font-size: 1rem;
	}

	@media (max-width: 1540px) {
		width: 9.25rem;
		height: 2.5rem;
		font-size: 0.9rem;
	}

	@media (max-width: 1440px) {
		width: 9rem;
		height: 2.5rem;
		font-size: 0.8rem;
	}
	@media (max-width: 1340px) {
		width: 8rem;
		height: 2.4rem;
		font-size: 0.75rem;
	}
	@media (max-width: 1240px) {
		width: 7rem;
		height: 2.2rem;
		font-size: 0.65rem;
	}
	@media (max-width: 1140px) {
		width: 6rem;
		height: 2rem;
		font-size: 0.6rem;
	}

	//tablet
	@media (max-width: ${breakpoint.tablet}) {
		width: 9rem;
		height: 2.5rem;
		font-size: 0.8rem;
	}

	@media (max-width: 840px) {
		width: 8rem;
		height: 2.4rem;
		font-size: 0.75rem;
	}
	//Mobile
	@media (max-width: ${breakpoint.mobile}) {
		width: 18.25rem;
		height: 3.5rem;
		font-size: 1.5rem;
	}

	@media (max-width: 667px) {
		width: 16.25rem;
		height: 3.2rem;
		font-size: 1.2rem;
	}

	@media (max-width: ${breakpoint.smallMobile}) {
		width: 14.25rem;
		height: 3rem;
		font-size: 1rem;
	}

	@media (max-width: 440px) {
		width: 12.25rem;
		height: 2.8rem;
		font-size: 1rem;
	}
`;

export const large = css`
	max-width: 100%;
	width: 100%;
	padding: 1rem 3rem;
`;

export const xLarge = css`
	width: 30rem;
	border: none;

	@media (max-width: 767px) {
		width: 18.5rem;
	}
`;
