import useCustomNavigate from "../../../hooks/useCustomNavigate";

function Login() {
  const { navigateTo } = useCustomNavigate();

  return (
    <main className="bg-white w-screen h-screen flex flex-col justify-center items-center">
      <button
        onClick={() => navigateTo("/")}
        className="bg-blue-900 text-white font-bold p-3 flex justify-center items-center"
      >
        Login
      </button>
    </main>
  );
}

export default Login;
