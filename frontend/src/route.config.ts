import Home from "./pages/Home";
import Login from "./pages/Login";
import MostrarOldman from "./oldMen/MostrarOldman";

const rutas = [
   { path: "/oldMen/mostrar", element: MostrarOldman },
   { path: "/", element: Home },
   { path: "/Login", element: Login },
];
export default rutas;
