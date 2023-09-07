import { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";

type SupabaseContextType = {
	session: any;
	signInWithDiscord: () => void;
	signInWithEmailAndPassword: (
		e: any,
		email: string,
		password: string,
		setLoading: any,
		setError: any,
		setErrorMessage: any
	) => void;
	signUpWithEmailAndPassword: (
		e: any,
		email: string,
		password: string,
		setLoading: any,
		setError: any,
		setErrorMessage: any
	) => void;
	singOut: () => void;
};

type SupabaseProviderType = {
	children: React.ReactNode;
};

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const SupabaseContext = createContext({} as SupabaseContextType);
export const SupabaseProvider = ({ children }: SupabaseProviderType) => {
	const navigate = useNavigate();
	const [session, setSession] = useState(null);
	console.log(supabase);

	const getSession = () => {
		supabase.auth.getSession().then(({ data: { session } }) => {
			setSession(session as any);
		});
	};

	const signInWithEmailAndPassword = async (
		e: any,
		email: string,
		password: string,
		setLoading: any,
		setError: any,
		setErrorMessage: any
	) => {
		e.preventDefault();
		if (email === "" || password === "") {
			return;
		}
		setLoading(true);
		const { error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});
		if (error) {
			setError(true);
			if (error.status === 400) {
				setErrorMessage("Email ou senha incorretos");
			} else {
				setErrorMessage("Algo deu errado, tente novamente mais tarde");
			}
		} else {
			navigate("/");
			getSession();
		}
		setLoading(false);
	};

	const signInWithDiscord = () => {
		supabase.auth.signInWithOAuth({ provider: "discord" });
	};

	const signUpWithEmailAndPassword = async (
		e: any,
		email: string,
		password: string,
		setLoading: any,
		setError: any,
		setErrorMessage: any
	) => {
		e.preventDefault();
		if (email === "" || password === "") {
			return;
		}
		setLoading(true);
		const { error } = await supabase.auth.signUp({
			email,
			password,
		});
		if (error) {
			setError(true);
			if (error.status === 422) {
				setErrorMessage("Senha deve ter no mínimo 6 caracteres");
			} else {
				setErrorMessage("Algo deu errado, tente novamente mais tarde");
			}
		} else {
			navigate("/");
			getSession();
		}
		setLoading(false);
	};

	const singOut = async () => {
		const { error } = await supabase.auth.signOut();
		if (error) {
			console.log(error);
		} else {
			navigate("/");
			getSession();
		}
	};

	useEffect(() => {
		getSession();
	}, []);

	return (
		<SupabaseContext.Provider
			value={{
				session,
				signInWithDiscord,
				signInWithEmailAndPassword,
				signUpWithEmailAndPassword,
				singOut,
			}}
		>
			{children}
		</SupabaseContext.Provider>
	);
};
export const useSupabase = () => useContext(SupabaseContext);
