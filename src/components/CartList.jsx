import styled from 'styled-components';
import { useEffect } from 'react';
import { useProducts } from '../context/ProductsContext';
import Button from './Button';

const StyledList = styled.ul`
	max-width: 100%;
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

const Img = styled.img`
	width: 0.7rem;
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
				<Img src='/images/icon-remove-item.svg' />
			</Button>
		</StyledList>
	);
}

export default CartList;
