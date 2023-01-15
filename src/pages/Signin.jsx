import { PaperPlaneTilt } from "phosphor-react";

export const Signin = () => {
  return (
    <div className="h-screen container m-auto flex items-center justify-center p-3">
      <div className="bg-polar-night-20 shadow w-full rounded-md p-3 max-w-lg md:p-5 h-[452px]">
        <h1
          className={`font-serif text-3xl my-5 text-center bg-gradient-to-b from-brand-primary to-brand-secondary bg-clip-text text-transparent`}
        >
          Criar Conta
        </h1>
        <div className="flex flex-col gap-5">
          <form>
            <label htmlFor="email">
              Criar com link mágico
            </label>
            <div className="flex items-center">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Digite seu email..."
                className="flex-1 rounded-l-md p-2 bg-snow-storm-20 text-polar-night-30"
              />
              <button className="p-2 bg-brand-primary md:hover:opacity-80 rounded-r-md">
                <PaperPlaneTilt
                  className="text-2xl text-snow-storm-30"
                  weight="bold"
                />
              </button>
            </div>
          </form>
          <button className="w-full">
            <a
              href="#"
              className="w-full flex items-center justify-center gap-3 py-2 bg-[#5865F2] rounded-md hover:opacity-80"
            >
              <img src="/discord.svg" alt="Discord Logo" className="w-6" />
              Continuar com Discord
            </a>
          </button>
          <form>
            <fieldset className="flex flex-col gap-3">
              <div>
                <label htmlFor="" className="block">
                  Email
                </label>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="email"
                  className="w-full p-2 bg-snow-storm-20 text-polar-night-30 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="" className="block">
                  Senha
                </label>
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="senha"
                  className="w-full p-2 bg-snow-storm-20 text-polar-night-30 rounded-md"
                />
              </div>
              <button className="p-2 bg-brand-primary rounded-md font-bold text-snow-storm-30 hover:opacity-80">
                Cadastrar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};
