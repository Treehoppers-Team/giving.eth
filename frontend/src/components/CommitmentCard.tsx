import React from 'react';
import {
  Card,
  CardContent,
} from './ui/card';
import { Button } from "./ui/button";

interface CommitmentCardProps {
    supplier: string;
    percentage: string;
  }
  
  const CommitmentCard: React.FC<CommitmentCardProps> = ({
    supplier,
    percentage,
  }) => {
    return (
      // Add an onClick event to the Card div to handle the click event
      <div style={{ cursor: 'pointer' }}>
        <Card>
          <CardContent>
            {supplier}: {percentage}
          </CardContent>
          <Button>Fulfill</Button>
        </Card>
      </div>
    );
  };
  
  export default CommitmentCard;
  