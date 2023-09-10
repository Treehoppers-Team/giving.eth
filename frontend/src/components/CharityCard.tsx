import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Progress } from './ui/progress';

interface CharityCardProps {
  title: string;
  preview: string;
  fundedAmount: number;
  goalAmount: number;
}

const CharityCard: React.FC<CharityCardProps> = ({
  title,
  preview,
  fundedAmount,
  goalAmount,
}) => {
  const progressValue = (fundedAmount / goalAmount) * 100;
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{preview}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-400 font-semibold text-xs">
          {fundedAmount} / {goalAmount} funded
        </p>
      </CardContent>
      <CardFooter>
        <Progress value={progressValue} />
      </CardFooter>
    </Card>
  );
};

export default CharityCard;
