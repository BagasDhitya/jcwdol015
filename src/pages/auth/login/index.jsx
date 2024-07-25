import useCustomNavigate from "../../../hooks/useCustomNavigate";
import Layout from "../../../components/Layout";

function Login() {
  const { navigateTo } = useCustomNavigate();

  return (
    <Layout>
      <button
        onClick={() => navigateTo("/")}
        className="bg-blue-900 text-white font-bold p-3 flex justify-center items-center"
      >
        Login
      </button>
    </Layout>
  );
}

export default Login;
