export interface Pets {
  id: string
  name: string,
  age: string,
  type: string,
  description: string,
  characteristics: string[],
  photo: string
};

export type PetsWithoutId = Omit<Pets, 'id'>;
