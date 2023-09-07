import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import discordLogo from "../../assets/discord.svg";
import { ArrowLeft, CircleNotch, WarningCircle } from "@phosphor-icons/react";
import { useSupabase } from "../../contexts/Supabase";

export const SingUp = () => {
	const navigate = useNavigate();
	const { signInWithDiscord, signUpWithEmailAndPassword, session } = useSupabase();
	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState(false);
	const [password, setPassword] = useState("");
	const [passwordError, setPasswordError] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	if (session) {
		navigate("/");
		return null;
	}

	return (
		<div className="h-screen container m-auto flex items-center justify-center p-3">
			<div className="bg-snow-storm-30 dark:bg-polar-night-20 shadow w-full rounded-md p-3 max-w-lg md:p-5 relative">
				{loading && (
					<div className="flex items-center justify-center absolute w-full h-full top-0 left-0 rounded bg-snow-storm-20 dark:bg-polar-night-20 z-30">
						<CircleNotch
							size={48}
							className="animate-spin text-polar-night-20 dark:text-snow-storm-10"
						/>
					</div>
				)}
				<Link
					to={"/"}
					className="inline-flex items-center gap-3 lg:hover:opacity-90 lg:active:opacity-80"
				>
					<ArrowLeft /> Início
				</Link>
				<h1
					className={`font-serif text-3xl my-2 text-center bg-gradient-to-b from-brand-primary to-brand-secondary bg-clip-text text-transparent`}
				>
					Criar conta
				</h1>
				<div className="flex flex-col gap-5">
					<form
						onSubmit={(e) => {
							if (email === "") {
								setEmailError(true);
							}
							if (password === "") {
								setPasswordError(true);
							}
							signUpWithEmailAndPassword(
								e,
								email,
								password,
								setLoading,
								setError,
								setErrorMessage
							);
						}}
					>
						<fieldset className="flex flex-col gap-3">
							<div>
								<label htmlFor="email" className="block">
									Email
								</label>
								<input
									type="email"
									name="email"
									id="email"
									placeholder="email"
									className={`w-full p-2 bg-snow-storm-20 text-polar-night-30 rounded-md focus:outline-0 focus:ring focus:ring-brand-primary ${
										emailError &&
										"ring-2 ring-aurora-red ring-opacity-70 dark:ring-opacity-100"
									}`}
									onChange={(e) => {
										setEmail(e.target.value);
										setEmailError(false);
									}}
								/>
							</div>
							<div>
								<label htmlFor="password" className="block">
									Senha
								</label>
								<input
									type="password"
									name="password"
									id="password"
									placeholder="senha"
									className={`w-full p-2 bg-snow-storm-20 text-polar-night-30 rounded-md focus:outline-0 focus:ring focus:ring-brand-primary ${
										passwordError &&
										"ring-2 ring-aurora-red ring-opacity-70 dark:ring-opacity-100"
									}`}
									onChange={(e) => {
										setPassword(e.target.value);
										setPasswordError(false);
									}}
								/>
							</div>
							<button className="p-2 bg-gradient-to-l from-brand-primary to-brand-secondary rounded-md font-medium text-snow-storm-30 hover:opacity-90 active:opacity-80">
								Entrar
							</button>
						</fieldset>
					</form>
					<div className="w-full h-[2px] bg-polar-night-10 dark:bg-snow-storm-30 bg-opacity-20 dark:bg-opacity-50 rounded" />
					<button
						onClick={signInWithDiscord}
						className="w-full flex items-center justify-center gap-3 py-2 bg-[#5865F2] rounded-md hover:opacity-90 active:opacity-80 text-snow-storm-20"
					>
						<img src={discordLogo} alt="Discord Logo" className="w-6" />
						Continuar com Discord
					</button>
					<Link to={"/entrar"} className="text-center underline text-sm">
						Já tem uma conta? Clique aqui para entrar
					</Link>
					{error && (
						<div className="p-3 bg-aurora-red bg-opacity-20 rounded border border-aurora-red text-polar-night-10 dark:text-snow-storm-30">
							<span className="flex items-center gap-3 justify-center">
								<WarningCircle /> {errorMessage}
							</span>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
