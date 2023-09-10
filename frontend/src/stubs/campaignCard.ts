export interface CampaignCardProps {
  title: string;
  preview: string;
  fundedAmount: number;
  goalAmount: number;
}

export const campaignsStub = [
  {
    title: 'Rainforest Protection Initiative',
    preview:
      'Support us in our endeavor to protect the rainforests and preserve biodiversity.',
    fundedAmount: 150000,
    goalAmount: 500000,
  },
  {
    title: 'Clean Oceans Campaign',
    preview:
      'Join our campaign to clean the oceans and save marine life from plastic pollution.',
    fundedAmount: 300000,
    goalAmount: 1000000,
  },
  {
    title: 'Educate Every Child',
    preview:
      'Help us provide quality education to every child, regardless of their socioeconomic background.',
    fundedAmount: 75000,
    goalAmount: 250000,
  },
  {
    title: 'Homeless Shelter Support',
    preview:
      'Contribute to our mission of providing shelter and basic amenities to homeless individuals.',
    fundedAmount: 50000,
    goalAmount: 200000,
  },
];
