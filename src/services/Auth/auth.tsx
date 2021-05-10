import { createContext, ReactNode, useContext } from "react";

interface IAuthProviderProps {
  children: ReactNode;
}

interface IAuthProps {
  email: string;
  password: string;
}

interface IAuthContextData {
  signIn(credentials: IAuthProps): Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const isAuthenticated = false;

  const signIn = async ({ email, password }: IAuthProps) => {
    const data = {
      email,
      password,
    };

    console.log(data);

    const response = await fetch("http://localhost:3333/sessions", {
      method: "POST",
      body: JSON.stringify(data),
    });

    console.log(response);
  };
  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};
