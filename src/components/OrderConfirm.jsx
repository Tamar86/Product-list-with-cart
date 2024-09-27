import styled from 'styled-components';
import { useState } from 'react';
import { useProducts } from '../context/ProductsContext';
import Button from './Button';
import ConfirmModal from './ConfirmModal';

const StyledOrderConfirm = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const ConfirmOrder = styled.div`
	max-width: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;

	@media (max-width: 1024px) {
		width: 80%;
		gap: 4rem;
	}
	@media (max-width: 767px) {
		width: 100%;
	}
`;

const OrderTotalContainer = styled.div`
	max-width: 100%;
	width: 100%;
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
const DeliveryInfo = styled.p`
	width: 100%;
	background-color: hsl(13, 31%, 94%);
	border-radius: 0.5rem;
	padding: 3% 9%;
	font-size: 0.8rem;
	justify-content: center;
	display: flex;
	align-items: center;
	gap: 0.5rem;

	@media (max-width: 360px) {
		font-size: 0.6rem;
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
		<StyledOrderConfirm>
			<ConfirmOrder>
				<OrderTotalContainer>
					<OrderTotal>Order Total</OrderTotal>
					<OrderTotalAmount>${orderTotal.toFixed(2)}</OrderTotalAmount>
				</OrderTotalContainer>
				<DeliveryInfo>
					<span>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='21'
							height='20'
							fill='none'
							viewBox='0 0 21 20'
						>
							<path
								fill='#1EA575'
								d='M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z'
							/>
							<path
								fill='#1EA575'
								d='M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z'
							/>
						</svg>
					</span>
					<span>
						This is a <CarbonNeutral>carbon-neutral</CarbonNeutral> delivery
					</span>
				</DeliveryInfo>
				<Button size='large' variant='btnConfirm' onClick={handleModalOpen}>
					Confirm Order
				</Button>

				{openModal && <ConfirmModal cart={cart} orderTotal={orderTotal} />}
			</ConfirmOrder>
		</StyledOrderConfirm>
	);
}

export default OrderConfirm;
