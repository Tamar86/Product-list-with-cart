import styled from 'styled-components';
import { useProducts } from '../context/ProductsContext';
import Button from './Button';

const StyledMenuItem = styled.div`
	display: grid;
	gap: 2.5rem;
`;

const ImgBtnContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Image = styled.img`
	max-width: 100%;
	width: 15.5rem;
	border-radius: 0.5rem;

	@media (max-width: 767px) {
		width: 30.5rem;
	}
`;

const ImageActive = styled.img`
	max-width: 100%;
	width: 15.5rem;
	border-radius: 0.5rem;
	border: 3px solid hsl(14, 86%, 42%);

	@media (max-width: 767px) {
		width: 30.5rem;
	}
`;

const ProductsContainer = styled.div`
	display: grid;
	gap: 2px;
`;

const ProductsName = styled.p`
	font-size: 1rem;
	font-weight: 600;

	@media (max-width: 1300px) {
		font-size: 0.8rem;
	}

	@media (max-width: 1180px) {
		font-size: 0.7rem;
	}
	@media (max-width: 1055px) {
		font-size: 0.65rem;
	}

	@media (max-width: 1024px) {
		font-size: 1rem;
	}

	@media (max-width: 835px) {
		font-size: 0.8rem;
	}

	@media (max-width: 767px) {
		font-size: 2rem;
	}

	@media (max-width: 440px) {
		font-size: 1.5rem;
	}

	@media (max-width: 340px) {
		font-size: 1.2rem;
	}
`;

const ProductsCategory = styled.p`
	font-size: 0.8rem;
	font-weight: 600;
	color: hsl(7, 20%, 60%);

	@media (max-width: 1246px) {
		font-size: 0.6rem;
	}

	@media (max-width: 1024px) {
		font-size: 0.8rem;
	}

	@media (max-width: 835px) {
		font-size: 0.6rem;
	}

	@media (max-width: 767px) {
		font-size: 1.6rem;
	}

	@media (max-width: 440px) {
		font-size: 1.2rem;
	}
	@media (max-width: 340px) {
		font-size: 1rem;
	}
`;

const ProductsPrice = styled.p`
	font-size: 1rem;
	color: hsl(14, 86%, 42%);
	font-weight: 600;

	@media (max-width: 767px) {
		font-size: 2rem;
	}
	@media (max-width: 440px) {
		font-size: 1.5rem;
	}
	@media (max-width: 340px) {
		font-size: 1.2rem;
	}
`;

const SvgCartIcon = styled.svg`
	@media (max-width: 767px) {
		width: 1.9rem;
		height: 1.8rem;
	}

	@media (max-width: 480px) {
		width: 1.8rem;
		height: 1.6rem;
	}
	@media (max-width: 340px) {
		width: 1.3rem;
		height: 1.25rem;
	}
`;
const BtnSvg = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 1.4rem;
	height: 1.4rem;
	border: 1px solid hsl(20, 50%, 98%);
	background-color: transparent;
	border-radius: 50%;
	color: hsl(20, 50%, 98%);
	&:hover {
		cursor: pointer;
		background-color: hsl(20, 50%, 98%);
		color: hsl(14, 86%, 42%);
	}
	&:focus-visible {
		outline: 1px solid hsl(14, 65%, 9%);
		border: 1px solid hsl(14, 65%, 9%);
	}

	@media (max-width: 1240px) {
		width: 1rem;
		height: 1rem;
	}
	@media (max-width: 767px) {
		width: 2rem;
		height: 2rem;
	}
`;

const SvgBtnDecrement = styled.svg`
	width: 10px;
	height: 2.5px;

	@media (max-width: 1024px) {
		width: 8px;
		height: 2px;
	}

	@media (max-width: 767px) {
		width: 16px;
		height: 4px;
	}
	@media (max-width: 480px) {
		width: 12px;
		height: 3px;
	}
`;

const SvgBtnIncrement = styled.svg`
	width: 0.7rem;
	height: 0.7rem;

	@media (max-width: 1024px) {
		width: 0.6rem;
		height: 0.6rem;
	}

	@media (max-width: 767px) {
		width: 1rem;
		height: 1rem;
	}
	@media (max-width: 480px) {
		width: 0.8rem;
		height: 0.8rem;
	}
`;

function MenuItem({ image, name, category, price, id }) {
	const { dispatch, cart } = useProducts();
	const productItem = cart?.find(item => item?.id === id);
	const buttonActive = productItem?.buttonActive || false;
	const numPerProduct = productItem?.numPerProduct || 0;

	function handleAddToCart() {
		const product = { id, name, price, image };
		if (!productItem) {
			// Add the product to the cart and activate the button
			dispatch({ type: 'cart/add', payload: { product } });
		}
	}

	function incrementNumItems() {
		dispatch({ type: 'increment/item', payload: { id } });
	}

	function decrementNumItems() {
		if (numPerProduct > 1) {
			dispatch({ type: 'decrement/item', payload: { id } });
		}
		if (numPerProduct <= 1) {
			dispatch({ type: 'cart/delete', payload: { id } });
		}

		dispatch({ type: 'order/total' });

		if (cart.length === 1 && numPerProduct === 1) localStorage.clear('cart');
	}

	return (
		<StyledMenuItem>
			<ImgBtnContainer>
				<picture>
					<source media='(min-width: 1140px)' srcSet={image.desktop} />
					<source media='(max-width: 767px)' srcSet={image.mobile} />
					<source media='(min-width: 768px)' srcSet={image.tablet} />
					{buttonActive ? (
						<ImageActive src={image.desktop} />
					) : (
						<Image src={image.desktop} />
					)}
				</picture>
				{buttonActive ? (
					<Button size='medium' variant='btnAction'>
						<BtnSvg tabIndex='0' onClick={decrementNumItems}>
							<SvgBtnDecrement
								xmlns='http://www.w3.org/2000/svg'
								width='8'
								height='2'
								fill='currentColor'
								viewBox='0 0 10 2'
							>
								<path fill='currentColor' d='M0 .375h10v1.25H0V.375Z' />
							</SvgBtnDecrement>
						</BtnSvg>
						<span>{numPerProduct}</span>
						<BtnSvg tabIndex='0' onClick={incrementNumItems}>
							<SvgBtnIncrement
								xmlns='http://www.w3.org/2000/svg'
								width='8'
								height='8'
								fill='currentColor'
								viewBox='0 0 10 10'
							>
								<path
									fill='currentColor'
									d='M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z'
								/>
							</SvgBtnIncrement>
						</BtnSvg>
					</Button>
				) : (
					<Button variant='btnPrimary' size='medium' onClick={handleAddToCart}>
						<SvgCartIcon
							xmlns='http://www.w3.org/2000/svg'
							width='21'
							height='20'
							fill='currentColor'
							viewBox='0 0 21 20'
						>
							<g fill='#C73B0F' clipPath='url(#a)'>
								<path d='M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z' />
								<path d='M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z' />
							</g>
							<defs>
								<clipPath id='a'>
									<path fill='#fff' d='M.333 0h20v20h-20z' />
								</clipPath>
							</defs>
						</SvgCartIcon>

						<span>Add to cart</span>
					</Button>
				)}
			</ImgBtnContainer>
			<ProductsContainer>
				<ProductsCategory>{category}</ProductsCategory>
				<ProductsName>{name}</ProductsName>
				<ProductsPrice>${price}</ProductsPrice>
			</ProductsContainer>
		</StyledMenuItem>
	);
}

export default MenuItem;
