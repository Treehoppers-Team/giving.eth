import React from 'react';
import {
  Card,
  CardContent,
} from './ui/card';
import { Button } from "./ui/button";

interface CommitmentCardProps {
    supplier: string;
    percentage: string;
    fulfilled: string;
  }
  
  const CommitmentCard: React.FC<CommitmentCardProps> = ({
    supplier,
    percentage,
    fulfilled,
  }) => {
    return (
      // Add an onClick event to the Card div to handle the click event
      <div style={{ cursor: 'pointer' }}>
        <Card>
          <CardContent>
            {supplier}: {percentage}
            Fulfilled: {fulfilled}
          </CardContent>
          <Button>
            {fulfilled === 'true' ? 'Fulfilled!' : 'Fulfill Now'}
            </Button>
        </Card>
      </div>
    );
  };
  
  export default CommitmentCard;
  