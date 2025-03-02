import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProfile, updateProfile } from "../redux/features/profileSlice";

export default function Profile() {
  const dispatch = useDispatch();
  const {
    data: profile,
    status,
    error,
  } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <h1>{profile?.name}</h1>
      <p>{profile?.skills.join(", ")}</p>
    </div>
  );
}
