import React from "react";
import { useRoutes, BrowserRouter } from "react-router-dom";
import HomePage from "../Home";
import { ShoppingCartProvider } from "../../Context";

import InicioSesion from "../InicioSesion";
import MiCuenta from "../MiCuenta";
import MiPedido from "../MiPedido";
import MisPedidos from "../MisPedidos";

import "./App.css";
import Navbar from "../../Components/NavBar";

const AppRoutes = () => {
  let Routes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/Inicio-Sesion", element: <InicioSesion /> },
    { path: "/Mi-Cuenta", element: <MiCuenta /> },
    { path: "/Mi-Pedido", element: <MiPedido /> },
    { path: "/Mis-Pedidos", element: <MisPedidos /> },
  ]);
  return Routes;
};

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;
