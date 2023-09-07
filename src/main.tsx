import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./contexts/Theme";
import { SupabaseProvider } from "./contexts/Supabase";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "./app/AppLayout";
import { Home } from "./app/Home";
import { SingIn } from "./app/Login/SingIn";
import { SingUp } from "./app/Login/SingUp";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider>
			<BrowserRouter>
				<SupabaseProvider>
					<Routes>
						<Route path="" element={<AppLayout />}>
							<Route index element={<Home />} />
							<Route path="busque-por-aventuras" element={<Home />} />
							<Route path="sobre" element={<Home />} />
							<Route path="apoie" element={<Home />} />
						</Route>
						<Route path="entrar" element={<SingIn />} />
						<Route path="criar-conta" element={<SingUp />} />
					</Routes>
				</SupabaseProvider>
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>
);
