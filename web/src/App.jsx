import {
	BrowserRouter,
	// createBrowserRouter,
	Route,
	// RouterProvider,
	Routes,
} from "react-router-dom";

import {Login} from "./pages/login/login.jsx";
import {AdminPage} from "./pages/admin-page/admin-page.jsx";
import {InventoryPage} from "./pages/inventory/inventory.jsx";
import {CommandsPage} from "./pages/command-page/commands.jsx";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/home" element={<AdminPage />} />
				<Route path="/inventory" element={<InventoryPage />} />
				<Route path="/commands" element={<CommandsPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
