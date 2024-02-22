import { Nutrition } from './Nutrition.type';

export type Dish = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  enable: boolean;
  image: File | string;
  isVegan?: boolean;
  servings?: number;
  weight: number;
  nutrition?: Nutrition;
  allergens: string;
};

export type CreateDishDto = Omit<Dish, 'id'>;
