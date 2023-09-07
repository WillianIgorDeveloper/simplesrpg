import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./contexts/Theme";
import { SupabaseProvider } from "./contexts/Supabase";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./app/Layout";
import { Home } from "./app/Home";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider>
			<SupabaseProvider>
				<BrowserRouter>
					<Routes>
						<Route path="" element={<Layout />}>
							<Route index element={<Home />} />
							<Route path="busque-por-aventuras" element={<Home />} />
							<Route path="sobre" element={<Home />} />
							<Route path="apoie" element={<Home />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</SupabaseProvider>
		</ThemeProvider>
	</React.StrictMode>
);
