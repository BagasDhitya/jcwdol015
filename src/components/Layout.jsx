import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../store";

function Layout({ children }) {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  console.log("dark mode : ", darkMode);

  return (
    <main
      className={`w-screen h-screen bg-white flex flex-col justify-center items-center ${
        darkMode === false ? "bg-white" : "bg-black"
      }`}
    >
      <button
        onClick={() => dispatch(toggleTheme())}
        className={`w-40 h-20 p-2 ${
          darkMode === false ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        {darkMode === false ? "Light Mode" : "Dark Mode"}
      </button>
      {children}
    </main>
  );
}

export default Layout;
