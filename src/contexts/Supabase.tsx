import { createContext, useContext } from "react";

type SupabaseContextType = {};

type SupabaseProviderType = {
	children: React.ReactNode;
};

const SupabaseContext = createContext({} as SupabaseContextType);
export const SupabaseProvider = ({ children }: SupabaseProviderType) => {
	return <SupabaseContext.Provider value={{}}>{children}</SupabaseContext.Provider>;
};
export const useSupabase = () => useContext(SupabaseContext);
