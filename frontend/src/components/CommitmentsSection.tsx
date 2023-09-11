// CommitmentsSection.tsx
import React from "react";
import CommitmentCard from '@/components/CommitmentCard';


interface CommitmentsSectionProps {
  commitment: string[];
}

const CommitmentsSection: React.FC<CommitmentsSectionProps> = ({ commitment }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Commitments</h2>
      <ul className="list-disc list-inside">
      {commitment.map((item, index) => (
          // Assuming item is an object with a single key-value pair
          Object.entries(item).map(([supplier, percentage]) => (
              <CommitmentCard
                supplier={supplier}
                percentage={percentage}
              />
          ))
        ))}
      </ul>
    </div>
  );
};

export default CommitmentsSection;
