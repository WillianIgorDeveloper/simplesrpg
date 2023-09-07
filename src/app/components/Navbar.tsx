import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CaretDown, CaretUp, Gift } from "@phosphor-icons/react";

export const Navbar = () => {
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
			className={`bg-snow-storm-10 dark:bg-polar-night-10 fixed w-full z-30 ${
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
						${isMenuOpen ? "h-[305px]" : "h-0"} 
					`}
				>
					<ul className="lg:flex lg:items-center">
						<li>
							<NavLink
								className={({ isActive }) =>
									`p-3 flex items-center gap-3 lg:border-none lg:bg-inherit lg:py lg:hover:opacity-90 lg:active:opacity-80
									${isActive && "border-l-4 border-brand-primary bg-polar-night-20 lg:text-brand-primary"}
									`
								}
								to={"/"}
								onClick={() => {
									setIsMenuOpen(!isMenuOpen);
								}}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) =>
									`p-3 flex items-center gap-3 lg:border-none lg:bg-inherit lg:py lg:hover:opacity-90 lg:active:opacity-80
									${isActive && "border-l-4 border-brand-primary bg-polar-night-20 lg:text-brand-primary"}
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
									`p-3 flex items-center gap-3 lg:border-none lg:bg-inherit lg:py lg:hover:opacity-90 lg:active:opacity-80
									${isActive && "border-l-4 border-brand-primary bg-polar-night-20 lg:text-brand-primary"}
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
									`p-3 flex items-center gap-3 lg:border-none lg:bg-inherit lg:py lg:hover:opacity-90 lg:active:opacity-80
									${isActive && "border-l-4 border-brand-primary bg-polar-night-20 lg:text-brand-primary"}
									`
								}
								to={"/apoie"}
								onClick={() => {
									setIsMenuOpen(!isMenuOpen);
								}}
							>
								<Gift className="text-xl text-aurora-yellow" /> Apoie
							</NavLink>
						</li>
					</ul>
					<div className="flex gap-5 justify-center m-5">
						<button className="lg:hover:opacity-90 lg:active:opacity-80">
							<NavLink
								className="rounded-md py-2 px-3 border border-brand-primary text-brand-primary font-medium lg:transition-colors lg:duration-200"
								to={"/"}
							>
								Entrar
							</NavLink>
						</button>
						<button className="lg:hover:opacity-90 lg:active:opacity-80">
							<NavLink
								className="rounded-md py-2 px-3 bg-brand-secondary font-medium"
								to={"/"}
							>
								Criar conta
							</NavLink>
						</button>
					</div>
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
