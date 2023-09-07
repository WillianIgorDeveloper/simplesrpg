import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./contexts/Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./app/Layout";
import { Home } from "./app/Home";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider>
			<BrowserRouter>
				<Routes>
					<Route path="" element={<Layout />}>
						<Route index element={<Home />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>
);
