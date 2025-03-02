import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser, logout } from "../redux/slices/profileSlice";

const useAuth = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.user);

  useEffect(() => {
    if (!user) {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        dispatch(setUser(JSON.parse(storedUser)));
      }
    }
  }, [user, dispatch]);

  const login = (linkedinData) => {
    dispatch(setUser(linkedinData));
    localStorage.setItem("user", JSON.stringify(linkedinData));
  };

  const logoutUser = () => {
    dispatch(logout());
    localStorage.removeItem("user");
  };

  return { user, login, logoutUser };
};

export default useAuth;
