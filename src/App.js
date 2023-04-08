import Card from "./Components/Card";
import Head from "./Components/Header/Head";
import Products from "./Components/Header/Products";
import { Provider } from "react-redux";
import store from "./Store/Store";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import ShoppingCartThree from "./Components/ShoppingCartThree "

function App() {
	return (
		<>
			<Provider store={store}>
			<BrowserRouter>
			<Head/>
				<Routes>
			
					<Route path="/" element={<Card/>}> </Route>
					<Route path="/cart" element={<ShoppingCartThree/>}> </Route>

				</Routes>
			</BrowserRouter>
		
				
			</Provider>
		</>
	);
}

export default App;
