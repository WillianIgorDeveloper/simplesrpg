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
import { SeekAdventure } from "./app/SeekAdventure";
import { About } from "./app/About";
import { Donate } from "./app/Donate";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider>
			<BrowserRouter>
				<SupabaseProvider>
					<Routes>
						<Route path="" element={<AppLayout />}>
							<Route index element={<Home />} />
							<Route
								path="busque-por-aventuras"
								element={<SeekAdventure />}
							/>
							<Route path="sobre" element={<About />} />
							<Route path="apoie" element={<Donate />} />
						</Route>
						<Route path="entrar" element={<SingIn />} />
						<Route path="criar-conta" element={<SingUp />} />
					</Routes>
				</SupabaseProvider>
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>
);
