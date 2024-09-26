import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useProducts } from '../context/ProductsContext';
import CartList from './CartList';
import OrderConfirm from './OrderConfirm';

const StyledCart = styled.div`
	display: grid;
	gap: 1.2rem;
	background-color: hsl(20, 50%, 98%);
	border-radius: 0.8rem;
	padding: 1.5rem;
	gap: 3rem;
	max-width: 100%;
	height: fit-content;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4rem;
	align-items: center;
`;

const Heading = styled.h1`
	color: hsl(14, 86%, 42%);
	font-size: 1.5rem;

	@media (max-width: 767px) {
		font-size: 2rem;
	}
`;

const Image = styled.img``;

const Paragraph = styled.p`
	font-size: 0.8rem;
	font-weight: 600;
	color: hsl(7, 20%, 60%);

	@media (max-width: 767px) {
		font-size: 1.4rem;
	}
	@media (max-width: 440px) {
		font-size: 1rem;
	}
	@media (max-width: 340px) {
		font-size: 0.8rem;
	}
`;

function Cart() {
	const { cart, orderTotal } = useProducts();
	const [productAmount, setProductAmount] = useState(0);

	useEffect(() => {
		const storedAmount = localStorage.getItem('productAmount');
		if (storedAmount) {
			setProductAmount(parseInt(storedAmount, 10));
		}
	}, []);

	useEffect(() => {
		if (cart.length > 0) {
			const totalProducts = cart.reduce(
				(total, product) => total + product.numPerProduct,
				0
			);
			setProductAmount(totalProducts);
			localStorage.setItem('productAmount', productAmount.toString());
		} else {
			localStorage.removeItem('productAmount');

			setProductAmount(0);
		}
	}, [cart, productAmount, orderTotal]);

	return (
		<StyledCart>
			<Heading>Your Cart ({productAmount})</Heading>

			{cart.length > 0 ? (
				cart.map(product => (
					<CartList
						name={product.name}
						price={product.price}
						numPerProduct={product.numPerProduct}
						key={product.id}
						id={product.id}
						Image={product.image}
					/>
				))
			) : (
				<Container>
					<Image src='/images/illustration-empty-cart.svg' />
					<Paragraph>Your added items will appear here</Paragraph>
				</Container>
			)}
			{cart.length > 0 && <OrderConfirm />}
		</StyledCart>
	);
}

export default Cart;
