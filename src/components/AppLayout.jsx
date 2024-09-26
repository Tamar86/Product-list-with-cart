import styled from 'styled-components';
import Cart from './Cart';
import DessertsMenu from './DessertsMenu';
import Footer from './Footer';

const StyledAppLayout = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 100%;
	gap: 3rem;
`;

const Layout = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr;
	background-color: hsl(13, 31%, 94%);
	padding: 4.5rem;
	gap: 2rem;

	//Tablet
	@media (max-width: 1024px) {
		display: flex;
		flex-direction: column;
	}

	//Mobile
	@media (max-width: 767px) {
		padding: 3.8rem;
	}

	@media (max-width: 635px) {
		padding: 3.5rem;
	}

	@media (max-width: 550px) {
		padding: 3.2rem;
	}

	@media (max-width: 480px) {
		padding: 3rem;
	}
	@media (max-width: 320px) {
		padding: 2.5rem;
	}
`;

function AppLayout() {
	return (
		<StyledAppLayout>
			<Layout>
				<DessertsMenu />
				<Cart />
			</Layout>
			<Footer />
		</StyledAppLayout>
	);
}

export default AppLayout;
