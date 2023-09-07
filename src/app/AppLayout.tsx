import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";

export const AppLayout = () => {
	return (
		<>
			<Navbar />
			<main>
				<Outlet />
			</main>
		</>
	);
};
