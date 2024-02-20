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
import {AnalitycsPage} from "./pages/analitycs/analitycs.jsx";
import {PersonalPage} from "./pages/personal/personal.jsx";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/home" element={<AdminPage />} />
				<Route path="/inventory" element={<InventoryPage />} />
				<Route path="/commands" element={<CommandsPage />} />
				<Route path="/personal" element={<PersonalPage />} />
				<Route path="/analitycs" element={<AnalitycsPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
