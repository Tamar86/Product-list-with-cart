import styled from 'styled-components';

const StyledFooter = styled.footer`
	font-size: 11px;
	text-align: center;
`;
const Link = styled.a`
	color: hsl(228, 45%, 44%);
`;

function Footer() {
	return (
		<StyledFooter className='attribution'>
			Challenge by{' '}
			<Link href='https://www.frontendmentor.io?ref=challenge'>
				Frontend Mentor
			</Link>
			. Coded by <Link href='#'>Tamara K.C</Link>.
		</StyledFooter>
	);
}

export default Footer;
