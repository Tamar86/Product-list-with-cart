import styled from 'styled-components';
import { useState } from 'react';
import { useProducts } from '../context/ProductsContext';
import Button from './Button';
import ConfirmModal from './ConfirmModal';

const StyledOrder = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2rem;

	@media (max-width: 1024px) {
		gap: 4rem;
	}

	@media (max-width: 375px) {
		width: 18rem;
	}
	@media (max-width: 350px) {
		width: 16rem;
	}
`;

const OrderTotalContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 11rem;

	@media (max-width: 1024px) {
		width: 40rem;
	}
	@media (max-width: 767px) {
		width: 30rem;
	}

	@media (max-width: 540px) {
		width: 25rem;
	}

	@media (max-width: 480px) {
		width: 20rem;
		gap: 5rem;
	}
	@media (max-width: 375px) {
		width: 15rem;
	}
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
const DeliveryInfo = styled.p`
	background-color: hsl(13, 31%, 94%);
	border-radius: 0.5rem;
	padding: 1rem 3rem;
	font-size: 0.8rem;
	justify-content: center;
	display: flex;
	align-items: center;
	gap: 0.5rem;

	@media (max-width: 1024px) {
		width: 40rem;
		font-size: 1rem;
	}

	@media (max-width: 767px) {
		width: 30rem;
		font-size: 1rem;
	}
	@media (max-width: 540px) {
		width: 25rem;
	}
	@media (max-width: 480px) {
		width: 20rem;
		font-size: 0.8rem;
	}
	@media (max-width: 375px) {
		width: 20rem;
	}
`;

const CarbonNeutral = styled.span`
	font-weight: 600;
	color: hsl(14, 65%, 9%);
`;

function OrderConfirm() {
	const [openModal, setOpenModal] = useState(false);
	const { orderTotal } = useProducts();
	const { cart } = useProducts();

	function handleModalOpen() {
		setOpenModal(true);
	}
	return (
		<StyledOrder>
			<OrderTotalContainer>
				<OrderTotal>Order Total</OrderTotal>
				<OrderTotalAmount>${orderTotal.toFixed(2)}</OrderTotalAmount>
			</OrderTotalContainer>
			<DeliveryInfo>
				<span>
					<img src='../../public/images/icon-carbon-neutral.svg' />
				</span>
				<span>
					This is a <CarbonNeutral>carbon-neutral</CarbonNeutral> delivery
				</span>
			</DeliveryInfo>
			<Button size='large' variant='btnConfirm' onClick={handleModalOpen}>
				Confirm Order
			</Button>

			{openModal && <ConfirmModal cart={cart} orderTotal={orderTotal} />}
		</StyledOrder>
	);
}

export default OrderConfirm;
