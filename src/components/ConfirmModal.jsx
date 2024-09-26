import styled from 'styled-components';
import { useProducts } from '../context/ProductsContext';
import Button from './Button';

const StyledModal = styled.div`
	display: grid;
	gap: 2rem;
	background-color: hsl(20, 50%, 98%);
	border-radius: 0.8rem;
	padding: 1.5rem;
	max-width: 100%;
	width: 35.5rem;
	padding-bottom: 3rem;
	height: fit-content;

	@media (max-width: 767px) {
		width: 32.5rem;
	}
`;
const Overlay = styled.div`
	display: flex;
	align-items: baseline;
	justify-content: center;
	position: fixed;
	padding-top: 5rem;
	padding-bottom: 5rem;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: rgb(0, 0, 0, 0.4);
	/* backdrop-filter: blur(1px); */
	z-index: 1000;
	transition: all 0.5s;
	overflow-y: scroll;
`;

const Header = styled.h1`
	color: hsl(14, 65%, 9%);
	font-size: 2.5rem;
`;

const Paragraph = styled.p`
	color: hsl(12, 20%, 44%);
`;

const List = styled.ul`
	border-radius: 0.8rem;
	background-color: hsl(13, 31%, 94%);
`;

const ListItem = styled.li`
	list-style: none;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem;

	@media (max-width: 425px) {
		font-size: smaller;
	}
`;

const ProductContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

const ProductsDetails = styled.div`
	display: grid;
	gap: 1rem;
`;

const ProductName = styled.p`
	color: hsl(14, 65%, 9%);
	font-weight: 700;
`;

const ProductAmount = styled.span`
	color: hsl(14, 86%, 42%);
`;
const ProductPrice = styled.span`
	color: hsl(14, 25%, 72%);
	font-weight: 600;
	display: flex;
	gap: 1rem;
`;
const ProductTotalPrice = styled.span`
	color: hsl(14, 65%, 9%);
	font-weight: 700;
`;

const OrderTotalContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const OrderTotal = styled.span`
	font-size: 0.8rem;
	font-weight: 600;
	color: hsl(12, 20%, 44%);
`;
const OrderTotalAmount = styled.span`
	font-size: 1.5rem;
	font-weight: 700;
	color: hsl(14, 65%, 9%);
`;

const ListImg = styled.img`
	border-radius: 5px;
`;

const ButtonContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

function ConfirmModal({ orderTotal, cart }) {
	const { dispatch } = useProducts();

	function handleClick() {
		dispatch({ type: 'start/newOrder' });
		localStorage.clear();
	}
	return (
		<Overlay>
			<StyledModal>
				<img src='/images/icon-order-confirmed.svg' />
				<Header>Order Confirmed</Header>

				<Paragraph>We hope you enjoy your food!</Paragraph>
				<List>
					{cart.map(product => (
						<ListItem key={product.id}>
							<ProductContainer>
								<ListImg src={product.image.thumbnail} />

								<ProductsDetails>
									<div>
										<ProductName>{product.name}</ProductName>
									</div>

									<ProductPrice>
										<ProductAmount>{product.numPerProduct}x</ProductAmount>

										<span>@ ${Number(product.price).toFixed(2)}</span>
									</ProductPrice>
								</ProductsDetails>
							</ProductContainer>

							<ProductTotalPrice>
								${Number(product.productPriceTotal).toFixed(2)}
							</ProductTotalPrice>
						</ListItem>
					))}
				</List>

				<OrderTotalContainer>
					<OrderTotal>Order Total</OrderTotal>
					<OrderTotalAmount>${orderTotal.toFixed(2)}</OrderTotalAmount>
				</OrderTotalContainer>
				<ButtonContainer>
					<Button size='xLarge' variant='btnConfirm' onClick={handleClick}>
						Start New Order
					</Button>
				</ButtonContainer>
			</StyledModal>
		</Overlay>
	);
}

export default ConfirmModal;
