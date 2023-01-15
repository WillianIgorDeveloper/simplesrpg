import { Navbar } from "../components/Navbar";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <main>
        <section className="py-16 md:py-36 container m-auto text-center md:flex md:items-center md:justify-center">
          <img
            src="/icon.svg"
            alt="Simples RPG Logo"
            className="w-2/3 m-auto md:w-44 md:m-0"
          />
          <div>
            <h1
              className={`font-serif text-4xl px-1 my-5 lg:mr-5 bg-gradient-to-b from-brand-primary to-brand-secondary bg-clip-text text-transparent`}
            >
              Simples RPG
            </h1>
            <p className="w-3/4 text-lg m-auto">
              O seu aplicativo para encontrar e publicar mesas de RPG
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};
