import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCandidates } from "../redux/features/candidatesSlice";

export default function CompanyPage() {
  const dispatch = useDispatch();
  const {
    list: candidates,
    status,
    error,
  } = useSelector((state) => state.candidates);

  useEffect(() => {
    dispatch(fetchCandidates());
  }, [dispatch]);

  if (status === "loading") return <p>Loading candidates...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold">Available Candidates</h1>
      {candidates.map((candidate) => (
        <div key={candidate.id} className="border p-4 mt-2">
          <h2 className="text-xl">{candidate.name}</h2>
          <p>Skills: {candidate.skills.join(", ")}</p>
          <p>Experience: {candidate.experience} years</p>
          <a href={candidate.linkedin} className="text-blue-600">
            LinkedIn Profile
          </a>
        </div>
      ))}
    </div>
  );
}
