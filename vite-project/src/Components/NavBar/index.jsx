import { useContext } from 'react'
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from '../../Context'

const Navbar = () => {

  const context = useContext(ShoppingCartContext)
  const activeStyle = "underline underline-offset-4";

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">Mahora</NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Todos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Shonen"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Shonen
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Shoujo"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Shoujo
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Gore"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Gore
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Otros"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Otros
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">miguelAngel@gmail.com</li>
        <li>
          <NavLink
            to="/Mis-Pedidos"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Mis Pedidos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Mi-Cuenta"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Mi Cuenta
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Inicio-Sesion"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Inicia Sesión
          </NavLink>
        </li>
        <li>
          🛒 {context.count} 
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
