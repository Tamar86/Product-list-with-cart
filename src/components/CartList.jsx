import styled from 'styled-components';
import { useEffect } from 'react';
import { useProducts } from '../context/ProductsContext';
import Button from './Button';

const StyledList = styled.ul`
	border-bottom: 0.5px solid hsl(14, 25%, 72%);
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const ListItem = styled.li`
	display: grid;
	gap: 0.5rem;
	list-style: none;
	font-weight: 600;

	padding-bottom: 1rem;
`;

const ListContainer = styled.div`
	display: flex;
	gap: 0.9rem;
`;
const PriceContainer = styled.div`
	display: flex;
	gap: 0.4rem;
`;

const Name = styled.p`
	color: hsl(14, 65%, 9%);
`;

const ProductAmount = styled.span`
	color: hsl(14, 86%, 42%);
`;
const Price = styled.span`
	color: hsl(14, 25%, 72%);
`;
const ProductTotalPrice = styled.span`
	color: hsl(12, 20%, 44%);
`;

function CartList({ name, price, numPerProduct, id }) {
	const { dispatch, cart } = useProducts();
	const product = cart.find(item => item.id === id);
	const productPriceTotal = product.productPriceTotal || 0;
	console.log('cart', cart);

	useEffect(() => {
		const storedCart = localStorage.getItem('cart');

		if (storedCart && JSON.parse(storedCart).length > 0 && cart.length === 0) {
			dispatch({ type: 'stored/cart', payload: JSON.parse(storedCart) });
		}
	}, [cart, dispatch]);

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart]);

	useEffect(() => {
		dispatch({ type: 'productPrice/total', payload: { id } });
		dispatch({ type: 'order/total' });
	}, [dispatch, id, numPerProduct]);

	function handleDeleteProduct() {
		dispatch({ type: 'cart/delete', payload: { id } });

		if (cart.length === 1) localStorage.clear('cart');
	}

	return (
		<StyledList>
			<ListItem>
				<Name>{name}</Name>
				<ListContainer>
					<ProductAmount>{numPerProduct}x</ProductAmount>
					<PriceContainer>
						<Price>@ ${Number(price).toFixed(2)}</Price>
						<ProductTotalPrice>
							${Number(productPriceTotal).toFixed(2)}
						</ProductTotalPrice>
					</PriceContainer>
				</ListContainer>
			</ListItem>
			<Button size='small' onClick={handleDeleteProduct}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='8'
					height='8'
					fill='none'
					viewBox='0 0 10 10'
				>
					<path
						fill='#CAAFA7'
						d='M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z'
					/>
				</svg>
			</Button>
		</StyledList>
	);
}

export default CartList;
