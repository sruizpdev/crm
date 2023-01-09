import { useNavigate } from "react-router-dom";
import Formulario from "../components/Formulario";

const NuevoCliente = () => {
  const navigate = useNavigate();
  console.log(navigate);
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
      <p className="pt-3">
        Llena todos los campos para registrar un nuevo cliente
      </p>

      <div className="flex justify-end">
        <button
          onClick={() => navigate("/")}
          className="bg-blue-800 font-bold uppercase text-white px-3 py-1"
        >
          Volver
        </button>
      </div>
      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10">
        <form>
          <Formulario />
          <input
            type="submit"
            className="mt-5 w-full bg-blue-800 p-3 uppercase text-white font-bold"
            value="Registrar Cliente"
          />
        </form>
      </div>
    </>
  );
};

export default NuevoCliente;
