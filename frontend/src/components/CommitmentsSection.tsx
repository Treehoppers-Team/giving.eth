// CommitmentsSection.tsx
import React from "react";

interface CommitmentsSectionProps {
  commitment: string[];
}

const CommitmentsSection: React.FC<CommitmentsSectionProps> = ({ commitment }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Commitments</h2>
      <ul className="list-disc list-inside">
        {commitment.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommitmentsSection;
