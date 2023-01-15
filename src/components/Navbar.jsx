import { useEffect, useState } from "react";
import { Link, useResolvedPath } from "react-router-dom";
import { CaretDown, CaretUp, DiscordLogo, Gift } from "phosphor-react";

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
    <header className={`bg-polar-night-10 fixed w-full ${isScrolled && "shadow"}`}>
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
              <Link
                className={`
                  p-3 flex items-center gap-3 
                  ${
                    pathname === "/" &&
                    "border-l-4 border-brand-primary bg-polar-night-20"
                  }
                  lg:border-none lg:bg-inherit lg:py lg:hover:scale-105 lg:hover:text-snow-storm-30 lg:transition-all lg:duration-100
                `}
                to={"/"}
                onClick={()=>{setIsMenuOpen(!isMenuOpen)}}
              >
                Home
              </Link>
            </li>
            {/* <li>
              <Link
                className={`
                  p-3 flex items-center gap-3 
                  ${
                    pathname === "/crie-sua-fucha" &&
                    "border-l-4 border-brand-primary bg-polar-night-20"
                  }
                  lg:border-none lg:bg-inherit lg:py-0 lg:hover:scale-105 lg:hover:text-snow-storm-30 lg:transition-all lg:duration-100
                `}
                to={"/crie-sua-fucha"}
                onClick={()=>{setIsMenuOpen(!isMenuOpen)}}
              >
                Crie Sua Ficha
              </Link>
            </li> */}
            <li>
              <Link
                className={`
                  p-3 flex items-center gap-3 
                  ${
                    pathname === "/busque-por-aventuras" &&
                    "border-l-4 border-brand-primary bg-polar-night-20"
                  }
                  lg:border-none lg:bg-inherit lg:py lg:hover:scale-105 lg:hover:text-snow-storm-30 lg:transition-all lg:duration-100
                `}
                to={"/busque-por-aventuras"}
                onClick={()=>{setIsMenuOpen(!isMenuOpen)}}
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
                  lg:border-none lg:bg-inherit lg:py lg:hover:scale-105 lg:hover:text-snow-storm-30 lg:transition-all lg:duration-100
                `}
                to={"/sobre"}
                onClick={()=>{setIsMenuOpen(!isMenuOpen)}}
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
                  lg:border-none lg:bg-inherit lg:py lg:hover:scale-105 lg:hover:text-snow-storm-30 lg:transition-all lg:duration-100
                `}
                to={"/apoie"}
                onClick={()=>{setIsMenuOpen(!isMenuOpen)}}
              >
                <Gift className="text-xl text-aurora-yellow" /> Apoie
              </Link>
            </li>
            <li>
              <a
                className={`p-3 flex items-center gap-3 lg:hover:scale-105 lg:hover:text-snow-storm-30`}
                href="#"
                onClick={()=>{setIsMenuOpen(!isMenuOpen)}}
              >
                <DiscordLogo className="text-xl" weight="fill" /> Discord
              </a>
            </li>
          </ul>
          <div className="flex gap-5 justify-center m-5">
            <button className="lg:hover:scale-105 lg:transition-all lg:duration-100">
              <Link
                className="rounded-md py-2 px-3 bg-brand-secondary text-snow-storm-30 font-bold lg:transition-colors lg:duration-200"
                to={"/login"}
              >
                Entrar
              </Link>
            </button>
            <button className="lg:hover:scale-105 lg:transition-all lg:duration-100">
              <Link
                className="rounded-md py-2 px-3 bg-brand-primary text-snow-storm-30 font-bold"
                to={"/signin"}
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
