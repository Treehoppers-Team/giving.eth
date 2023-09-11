// CommitmentsSection.tsx
import React from "react";
import CommitmentCard from '@/components/CommitmentCard';


interface CommitmentsSectionProps {
  commitment: any[];
}

const CommitmentsSection: React.FC<CommitmentsSectionProps> = ({ commitment }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Commitments</h2>
      <ul className="list-disc list-inside">
        {commitment.map((item, index) => (
          <CommitmentCard
            key={index}
            supplier={item.supplier}
            percentage={item.percentage}
            fulfilled={item.fulfilled}
          />
        ))}
      </ul>
    </div>
  );
};

export default CommitmentsSection;
