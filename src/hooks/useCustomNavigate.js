import { useNavigate } from "react-router-dom";

function useCustomNavigate() {
  const navigate = useNavigate();

  function navigateTo(path) {
    navigate(path);
  }

  return { navigateTo };
}

export default useCustomNavigate;
