import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import Cookies from 'js-cookie';

interface Morador {
  id: number;
  email: string;
  senha: string;
  nome_completo: string;
  residencia: string;
  telefone: string;
  id_condominio: number;
  createdAt: Date;
  updatedAt: Date;
}

let morador: Morador;

const setCookie = (name: string, value: Morador) => {
  Cookies.set(name, JSON.stringify(value), { expires: 7 });
}

const getCookie = (name: string): Morador | null => {
  const storedMoradorString = Cookies.get(name);

  if (storedMoradorString) {
    try {
      // Parse a string JSON para um objeto JavaScript
      const storedMorador = JSON.parse(storedMoradorString) as Morador;
      return storedMorador;
    } catch (error) {
      console.error('Erro ao fazer parsing do cookie:', error);
      return null;
    }
  }
  return null;
}

const initializeVariablesFromCookies = () => {
  const storedMorador = getCookie('Morador');

  if (storedMorador) {
    morador = storedMorador;
  }
}

export function App() {
  initializeVariablesFromCookies();
  return <RouterProvider router={router} />;
}

export function setMorador(data: Morador) {
  morador = data;
  setCookie("Morador", morador);
}

export function getMorador(): Morador {
  if (!morador) {
    morador = {
      id: -1,
      email: "",
      senha: "",
      nome_completo: "",
      residencia: "",
      telefone: "",
      id_condominio: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }
  return morador;
}

