import React from "react";
import { FaLinkedin } from "react-icons/fa";

const CandidateCard = ({ candidate }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
      <div className="flex items-center gap-4">
        <img
          src={candidate.picture || "/default-avatar.png"}
          alt={candidate.name}
          className="w-16 h-16 rounded-full object-cover border border-gray-300"
        />
        <div>
          <h3 className="text-lg font-semibold">{candidate.name}</h3>
          <p className="text-sm text-gray-600">
            {candidate.experience} years of experience
          </p>
          <p className="text-sm text-gray-600">
            Skills: {candidate.skills.join(", ")}
          </p>
        </div>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <a
          href={candidate.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-blue-600 hover:underline"
        >
          <FaLinkedin size={20} /> View Profile
        </a>
      </div>
    </div>
  );
};

export default CandidateCard;
