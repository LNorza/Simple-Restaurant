import {
    BrowserRouter,
    // createBrowserRouter,
    Route,
    // RouterProvider,
    Routes,
} from "react-router-dom";

import {Login} from "./pages/login/login.jsx";
import {AdminPage} from "./pages/admin-page/admin-page.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<AdminPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
