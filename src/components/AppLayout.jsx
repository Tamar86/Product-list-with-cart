import styled from 'styled-components';
import Cart from './Cart';
import DessertsMenu from './DessertsMenu';
import Footer from './Footer';

const StyledAppLayout = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 100%;
	width: 100%;
	gap: 3rem;
`;

const Layout = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr;
	background-color: hsl(13, 31%, 94%);
	padding: 8%;
	gap: 2rem;

	//Tablet
	@media (max-width: 1024px) {
		display: flex;
		flex-direction: column;
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
