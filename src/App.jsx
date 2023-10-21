import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./pages/Home"
function App() {
	return (
	<>
		<Home />
	// <Routes>
	// <Route
		index
		element={<Home />}
		/>
	<Route path='otra-ubicacion' />
		</Routes>
	</>
	)
}

export default App;
