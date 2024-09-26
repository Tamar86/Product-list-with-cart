import AppLayout from './components/AppLayout';
import { ProductsProvider } from './context/ProductsContext';
import GlobalStyles from './Styles/GlobalStyles';

function App() {
	return (
		<ProductsProvider>
			<GlobalStyles />
			<AppLayout />
		</ProductsProvider>
	);
}

export default App;
