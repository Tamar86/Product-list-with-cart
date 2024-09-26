import styled from 'styled-components';
import { useProducts } from '../context/ProductsContext';
import MenuItem from './MenuItem';

const StyledDessertsMenu = styled.div`
	max-width: 100%;
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

const Menu = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	max-width: 100%;
	gap: 1rem;

	@media (max-width: 767px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 100%;
	}
`;
const Heading = styled.h1`
	color: hsl(14, 65%, 9%);

	@media (max-width: 767px) {
		font-size: 4rem;
	}
`;

function DessertsMenu() {
	const { dessertsData } = useProducts();
	return (
		<StyledDessertsMenu>
			<Heading>Desserts</Heading>
			<Menu>
				{dessertsData.map(dessert => (
					<MenuItem
						id={dessert.id}
						image={dessert.image}
						name={dessert.name}
						category={dessert.category}
						price={dessert.price}
						key={dessert.name}
					/>
				))}
			</Menu>
		</StyledDessertsMenu>
	);
}

export default DessertsMenu;
