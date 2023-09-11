export interface CampaignCardProps {
  title: string;
  preview: string;
  fundedAmount: number;
  goalAmount: number;
}

export async function generateStub() {
  const response = await fetch("/api/campaigns")
  console.log(response)
  const campaignsData = await response.json();
  
  return campaignsData
}

// export const campaignsStub = generateStub();

export const campaignsStub = [
  {
    charity: 'Save the Rainforest',
    title: 'Rainforest Protection Initiative',
    description:
      'Support us in our endeavor to protect the rainforests and preserve biodiversity.',
    currentAmount: 150000,
    targetAmount: 500000,
    commitment: [{"Supplier A": "50%"}, {"Supplier B": "50%"}],
    start: '2021-09-01',
    end: '2021-12-31',
    image: '/rainforest.jpg'
  },
  {
    charity: 'Ocean Rescue',
    title: 'Clean Oceans Campaign',
    description:
      'Join our campaign to clean the oceans and save marine life from plastic pollution.',
    currentAmount: 300000,
    targetAmount: 1000000,
    commitment: [],
    start: '2021-09-01',
    end: '2021-12-31',
    image: '/ocean.jpg'
  },
  {
    charity: 'Educate Every Child',
    title: 'Educate Every Child',
    description: 'Help us provide quality education to every child, regardless of their socioeconomic background.',
    currentAmount: 75000,
    targetAmount: 250000,
    commitment: [],
    start: '2021-09-01',
    end: '2021-12-31',
    image: '/children.jpg'
  },
  {
    charity: 'Homeless Heroes',
    title: 'Homeless Shelter Support',
    description: 'Contribute to our mission of providing shelter and basic amenities to homeless individuals.',
    currentAmount: 50000,
    targetAmount: 200000,
    commitment: [],
    start: '2021-09-01',
    end: '2021-12-31',
    image: '/homeless.jpg'
  }
];