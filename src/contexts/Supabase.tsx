import { createContext, useContext } from "react";
import { createClient } from "@supabase/supabase-js";

type SupabaseContextType = {};

type SupabaseProviderType = {
	children: React.ReactNode;
};

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const SupabaseContext = createContext({} as SupabaseContextType);
export const SupabaseProvider = ({ children }: SupabaseProviderType) => {
	return <SupabaseContext.Provider value={{}}>{children}</SupabaseContext.Provider>;
};
export const useSupabase = () => useContext(SupabaseContext);
