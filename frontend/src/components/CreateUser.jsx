import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { registerUser } from "../Service";

const CreateUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      Swal.fire({
        title: "Las contraseñas no coinciden",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }
    const userData = {
      email,
      password,
    };
    try {
      const { status } = await registerUser(userData);
      if (status === 200) {
        // Logica de éxito
        localStorage.setItem("token-info", JSON.stringify(userData));
        navigate("/login");
        Swal.fire({
          title: "Usuario creado con éxito",
          icon: "success",
          confirmButtonText: "Ok",
        });
        navigate("/login");
      }
    } catch (err) {
      // Logica de error
      Swal.fire({
        title: "Error al crear usuario",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  return (
    <div class="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
      <div class="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-3.5 cursor-pointer shrink-0 fill-[#333] hover:fill-red-500 float-right"
          viewBox="0 0 320.591 320.591"
        >
          <path
            d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
            data-original="#000000"
          ></path>
          <path
            d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
            data-original="#000000"
          ></path>
        </svg>
        <div class="my-6 text-center">
          <h4 class="text-3xl text-[#333] font-extrabold">Registrate</h4>
          <p class="text-sm text-gray-400 mt-4">Crea tu cuenta con nosotros</p>
        </div>
        <form class="space-y-4">
          <div class="relative flex items-center">
            <input
              type="email"
              placeholder="Ingresa tu Email"
              class="px-4 py-3 bg-white text-[#333] w-full text-sm border-2 outline-[#007bff] rounded-lg"
              name = "email"
              required
              id = "email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#bbb"
              stroke="#bbb"
              class="w-[18px] h-[18px] absolute right-4"
              viewBox="0 0 682.667 682.667"
            >
              <defs>
                <clipPath id="a" clipPathUnits="userSpaceOnUse">
                  <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                </clipPath>
              </defs>
              <g
                clip-path="url(#a)"
                transform="matrix(1.33 0 0 -1.33 0 682.667)"
              >
                <path
                  fill="none"
                  stroke-miterlimit="10"
                  stroke-width="40"
                  d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                  data-original="#000000"
                ></path>
                <path
                  d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                  data-original="#000000"
                ></path>
              </g>
            </svg>
          </div>
          <div class="relative flex items-center">
            <input
              name= "password"
              type="password"
              required
              id = "password"
              placeholder="Ingresa tu contraseña"
              class="px-4 py-3 bg-white text-[#333] w-full text-sm border-2 outline-[#007bff] rounded-lg"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#bbb"
              stroke="#bbb"
              class="w-[18px] h-[18px] absolute right-4 cursor-pointer"
              viewBox="0 0 128 128"
            >
              <path
                d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                data-original="#000000"
              ></path>
            </svg>
          </div>
          <div class="relative flex items-center">
            <input
              name="confirmPassword"
              id="confirmPassword"
              required
              type="password"
              placeholder="Confirma tu contraseña"
              class="px-4 py-3 bg-white text-[#333] w-full text-sm border-2 outline-[#007bff] rounded-lg"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#bbb"
              stroke="#bbb"
              class="w-[18px] h-[18px] absolute right-4 cursor-pointer"
              viewBox="0 0 128 128"
            >
              <path
                d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                data-original="#000000"
              ></path>
            </svg>
          </div>
          <div class="flex">
            <input type="checkbox" class="w-4" />
            <label class="text-sm ml-4 text-[#333]">
              He leído y acepto los{" "}
              <a
                href="javascript:void(0)"
                class="text-sm text-blue-600 font-semibold"
              >
                Términos y Condiciones
              </a>
            </label>
          </div>
          <button
            type="button"
            class="px-6 py-3 !mt-12 w-full font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-full"
          >
            Crear Cuenta
          </button>
        </form>
        <hr class="my-6" />
        <p class="text-sm text-center text-[#333]">
          ¿Ya tienes una cuenta?{" "}
          <Link
            href="javascript:void(0)"
            class="text-sm text-blue-600 font-semibold"
            to="/login"
          >
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CreateUser;
