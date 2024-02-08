export enum ModelType {
  RACKS = 'racks',
}

export const types: ModelType[] = [ModelType.RACKS];

export interface Model {
  id: string;
  name: string;
  description: string;
  strengths?: string;
  type: ModelType;
}

export const models: Model[] = [
  {
    id: '1',
    name: 'racks-t3-7B',
    description:
      'A model specifically trained for fullstack development with the t3 stack.',
    type: ModelType.RACKS,
    strengths: 'react/nextjs, trpc, next-auth, prisma',
  },
  {
    id: '2',
    name: 'racks-shadcn-7B',
    description:
      'A model specifically trained for to generate frontend code using tailwindcss and shadcn components.',
    type: ModelType.RACKS,
    strengths: 'react/nextjs, shadcn, tailwindcss',
  },
];
