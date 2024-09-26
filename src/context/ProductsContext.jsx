import { useContext, useReducer } from 'react';
import { createContext } from 'react';
import dessertsData from '../data.json';

const initialState = {
	cart: JSON.parse(localStorage.getItem('cart')) || [],
	dessertsData,
	orderTotal: 0,
};

function productsReducer(state, action) {
	switch (action.type) {
		case 'cart/add': {
			const { product } = action.payload;
			const productExists = state.cart.find(item => item.id === product.id);
			if (productExists) {
				return state;
			}
			return {
				...state,

				cart: [
					...state.cart,
					{ ...product, buttonActive: true, numPerProduct: 1 },
				],
			};
		}
		case 'increment/item': {
			const { id } = action.payload;

			return {
				...state,
				cart: state.cart.map(item =>
					item.id === id
						? {
								...item,
								numPerProduct: item.numPerProduct + 1,
						  }
						: item
				),
			};
		}

		case 'decrement/item': {
			const { id } = action.payload;

			return {
				...state,
				cart: state.cart.map(item =>
					item.id === id
						? { ...item, numPerProduct: item.numPerProduct - 1 }
						: item
				),
			};
		}

		case 'productPrice/total': {
			const { id } = action.payload;

			return {
				...state,
				cart: state.cart.map(product =>
					product.id === id
						? {
								...product,
								productPriceTotal: product.price * product.numPerProduct,
						  }
						: product
				),
			};
		}
		case 'order/total': {
			return {
				...state,
				orderTotal: state.cart.reduce((total, product) => {
					return total + product.productPriceTotal;
				}, 0),
			};
		}

		case 'cart/delete': {
			const { id } = action.payload;

			return {
				...state,
				cart: state.cart.filter(product => product.id !== id),
			};
		}

		case 'start/newOrder': {
			return {
				...state,
				cart: [],
			};
		}

		case 'stored/cart': {
			return {
				...state,
				cart: action.payload,
			};
		}

		default:
			return state;
	}
}

const ProductsContext = createContext();

function ProductsProvider({ children }) {
	const [{ cart, dessertsData, orderTotal }, dispatch] = useReducer(
		productsReducer,
		initialState
	);

	return (
		<ProductsContext.Provider
			value={{ dispatch, cart, dessertsData, orderTotal }}
		>
			{children}
		</ProductsContext.Provider>
	);
}

function useProducts() {
	const context = useContext(ProductsContext);
	if (context === undefined)
		throw new Error('ProductsContext was used outside ProductsProvider');
	return context;
}

export { ProductsContext, ProductsProvider, useProducts };
