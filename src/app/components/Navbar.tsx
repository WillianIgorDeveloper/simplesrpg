import { useEffect, useState } from "react";
import { Link, NavLink, useResolvedPath } from "react-router-dom";
import { CaretDown, CaretUp, DiscordLogo, Gift } from "@phosphor-icons/react";

export const Navbar = () => {
	const { pathname } = useResolvedPath();

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
			className={`bg-snow-storm-10 fixed w-full z-50 ${isScrolled && "shadow"}`}
		>
			<div className="lg:container lg:m-auto lg:flex lg:items-center">
				<div className="p-3 flex justify-between items-center">
					<h1
						className={`
            font-serif text-2xl px-1 lg:mr-5 bg-gradient-to-b from-brand-primary to-brand-secondary bg-clip-text text-transparent relative transition-all duration-200
            ${isScrolled || isMenuOpen ? "top-0" : "-top-16"}
            `}
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
					className={`
						${isMenuOpen ? "h-[305px]" : "h-0"} 
						transition-all duration-300 overflow-hidden text-center
						lg:flex lg:items-center lg:flex-1 lg:h-auto lg:justify-end
					`}
				>
					<ul className="lg:flex lg:items-center">
						<li>
							<NavLink
								className={({ isActive }) => {
									`p-3 flex items-center gap-3 
									${pathname === "/" && "border-l-4 border-brand-primary bg-polar-night-20"}
									lg:border-none lg:bg-inherit lg:py lg:hover:opacity-80`;
								}}
								to={"/"}
								onClick={() => {
									setIsMenuOpen(!isMenuOpen);
								}}
							>
								Home
							</NavLink>
						</li>
						<li>
							<Link
								className={`
                  p-3 flex items-center gap-3 
                  ${
						pathname === "/busque-por-aventuras" &&
						"border-l-4 border-brand-primary bg-polar-night-20"
					}
                  lg:border-none lg:bg-inherit lg:py lg:hover:opacity-80
                `}
								to={"/busque-por-aventuras"}
								onClick={() => {
									setIsMenuOpen(!isMenuOpen);
								}}
							>
								Busque por Aventuras
							</Link>
						</li>
						<li>
							<Link
								className={`
                  p-3 flex items-center gap-3 
                  ${
						pathname === "/sobre" &&
						"border-l-4 border-brand-primary bg-polar-night-20"
					}
                  lg:border-none lg:bg-inherit lg:py lg:hover:opacity-80
                `}
								to={"/sobre"}
								onClick={() => {
									setIsMenuOpen(!isMenuOpen);
								}}
							>
								Sobre
							</Link>
						</li>
						<li>
							<Link
								className={`
                  p-3 flex items-center gap-3 
                  ${
						pathname === "/apoie" &&
						"border-l-4 border-brand-primary bg-polar-night-20"
					}
                  lg:border-none lg:bg-inherit lg:py lg:hover:opacity-80
                `}
								to={"/apoie"}
								onClick={() => {
									setIsMenuOpen(!isMenuOpen);
								}}
							>
								<Gift className="text-xl text-aurora-yellow" /> Apoie
							</Link>
						</li>
						<li>
							<a
								className={`p-3 flex items-center gap-3 lg:hover:opacity-80`}
								href="#"
								onClick={() => {
									setIsMenuOpen(!isMenuOpen);
								}}
							>
								<DiscordLogo className="text-xl" weight="fill" /> Discord
							</a>
						</li>
					</ul>
					<div className="flex gap-5 justify-center m-5">
						<button className="lg:hover:opacity-80">
							<Link
								className="rounded-md py-2 px-3 bg-brand-secondary text-snow-storm-30 font-bold lg:transition-colors lg:duration-200"
								to={"/entrar"}
							>
								Entrar
							</Link>
						</button>
						<button className="lg:hover:opacity-80">
							<Link
								className="rounded-md py-2 px-3 bg-brand-primary text-snow-storm-30 font-bold"
								to={"/criar-conta"}
							>
								Criar conta
							</Link>
						</button>
					</div>
				</nav>
			</div>
		</header>
	);
};
