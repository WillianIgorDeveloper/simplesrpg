import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CaretDown, CaretUp, Gift, Moon, Sun } from "@phosphor-icons/react";
import { useSupabase } from "../../contexts/Supabase";
import { useTheme } from "../../contexts/Theme";

export const Navbar = () => {
	const { session, singOut } = useSupabase();
	const { theme, setThemeToDark, setThemeToLight } = useTheme();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	const handleScroll = () => {
		if (window.scrollY < 300) {
			setIsScrolled(false);
		} else {
			setIsScrolled(true);
		}
	};

	useEffect(() => {
		document.addEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`bg-snow-storm-20 dark:bg-polar-night-10 fixed w-full z-30 ${
				isScrolled && "shadow"
			}`}
		>
			<div className="lg:container lg:m-auto lg:flex lg:items-center">
				<div className="p-3 flex justify-between items-center">
					<h1
						className={`font-serif text-2xl px-1 lg:mr-5 bg-gradient-to-b from-brand-primary to-brand-secondary bg-clip-text text-transparent relative transition-all duration-200 ${
							isScrolled ? "top-0" : "-top-16"
						} ${isMenuOpen ? "top-0" : "-top-16"}`}
					>
						Simples RPG
					</h1>
					{isMenuOpen ? (
						<CaretUp
							onClick={() => {
								setIsMenuOpen(!isMenuOpen);
							}}
							className="text-2xl lg:hidden hover:cursor-pointer"
						/>
					) : (
						<CaretDown
							onClick={() => {
								setIsMenuOpen(!isMenuOpen);
							}}
							className="text-2xl lg:hidden hover:cursor-pointer"
						/>
					)}
				</div>
				<nav
					className={`transition-all duration-300 overflow-hidden text-center lg:flex lg:items-center lg:flex-1 lg:h-auto lg:justify-end
						${isMenuOpen ? "h-[260px]" : "h-0"} 
					`}
				>
					<ul className="lg:flex lg:items-center">
						<li>
							<NavLink
								className={({ isActive }) =>
									`p-3 flex items-center gap-3 lg:border-none lg:bg-inherit lg:dark:bg-inherit lg:py lg:hover:opacity-90 lg:active:opacity-80
									${
										isActive &&
										"border-l-4 border-brand-primary bg-snow-storm-10 dark:bg-polar-night-20 lg:text-brand-primary"
									}
									`
								}
								to={"/"}
								onClick={() => {
									setIsMenuOpen(!isMenuOpen);
								}}
							>
								Início
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) =>
									`p-3 flex items-center gap-3 lg:border-none lg:bg-inherit lg:dark:bg-inherit lg:py lg:hover:opacity-90 lg:active:opacity-80
									${
										isActive &&
										"border-l-4 border-brand-primary bg-snow-storm-10 dark:bg-polar-night-20 lg:text-brand-primary"
									}
									`
								}
								to={"/busque-por-aventuras"}
								onClick={() => {
									setIsMenuOpen(!isMenuOpen);
								}}
							>
								Busque por Aventuras
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) =>
									`p-3 flex items-center gap-3 lg:border-none lg:bg-inherit lg:dark:bg-inherit lg:py lg:hover:opacity-90 lg:active:opacity-80
									${
										isActive &&
										"border-l-4 border-brand-primary bg-snow-storm-10 dark:bg-polar-night-20 lg:text-brand-primary"
									}
									`
								}
								to={"/sobre"}
								onClick={() => {
									setIsMenuOpen(!isMenuOpen);
								}}
							>
								Sobre
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) =>
									`p-3 flex items-center gap-3 lg:border-none lg:bg-inherit lg:dark:bg-inherit lg:py lg:hover:opacity-90 lg:active:opacity-80
									${
										isActive &&
										"border-l-4 border-brand-primary bg-snow-storm-10 dark:bg-polar-night-20 lg:text-brand-primary"
									}
									`
								}
								to={"/apoie"}
								onClick={() => {
									setIsMenuOpen(!isMenuOpen);
								}}
							>
								<Gift
									weight="bold"
									size={24}
									className="text-aurora-yellow"
								/>{" "}
								Apoie
							</NavLink>
						</li>
					</ul>
					{session ? (
						<div className="flex gap-5 items-center justify-center m-5">
							<span>
								{session.user.user_metadata.custom_claims.global_name}
							</span>
							<button
								className="bg-aurora-red py-1 px-3 rounded text-snow-storm-20"
								onClick={singOut}
							>
								Sair
							</button>
							{theme === "light" ? (
								<Moon
									size={22}
									className="cursor-pointer lg:hover:scale-110"
									onClick={setThemeToDark}
								/>
							) : (
								<Sun
									size={22}
									className="cursor-pointer lg:hover:scale-110"
									onClick={setThemeToLight}
								/>
							)}
						</div>
					) : (
						<div className="flex gap-5 justify-center m-5 items-center">
							<button className="lg:hover:opacity-90 lg:active:opacity-80">
								<NavLink
									className="rounded-md py-2 px-3 border border-brand-primary text-brand-primary font-medium lg:transition-colors lg:duration-200"
									to={"/entrar"}
								>
									Entrar
								</NavLink>
							</button>
							<button className="lg:hover:opacity-90 lg:active:opacity-80">
								<NavLink
									className="rounded-md py-2 px-3 bg-gradient-to-l from-brand-primary to-brand-secondary font-medium text-snow-storm-30"
									to={"/criar-conta"}
								>
									Criar conta
								</NavLink>
							</button>
							{theme === "light" ? (
								<Moon
									size={22}
									className="cursor-pointer lg:hover:scale-110"
									onClick={setThemeToDark}
								/>
							) : (
								<Sun
									size={22}
									className="cursor-pointer lg:hover:scale-110"
									onClick={setThemeToLight}
								/>
							)}
						</div>
					)}
				</nav>
			</div>
		</header>
	);
};

/* <a
		className={`p-3 flex items-center gap-3 lg:hover:opacity-90 lg:active:opacity-80`}
		href="#"
		onClick={() => {
			setIsMenuOpen(!isMenuOpen);
		}}
	>
		<DiscordLogo className="text-xl" weight="fill" /> Discord
</a> */
