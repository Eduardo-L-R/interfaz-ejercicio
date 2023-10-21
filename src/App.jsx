import { Routes, Route, Outlet, Link, createRoutesFromElements, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About";
import RootLayout from "./layout/index";
function App() {
	return (
		<Routes>
			<Route
				path='/'
				element={<RootLayout />}>
				<Route
					index
					element={<Home />}
				/>
				<Route path='/About' element={<About />} />
			</Route>
		</Routes>
	)
}

export default App;
