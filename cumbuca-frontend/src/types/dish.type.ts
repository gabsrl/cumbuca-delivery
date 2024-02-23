/* eslint-disable @typescript-eslint/no-explicit-any */
import { Nutrition } from './Nutrition.type';

export type Dish = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  enable: '1' | '0';
  image: any;
  isVegan: '1' | '0';
  servings: number;
  weight: number;
  nutrition: Nutrition;
  allergens: string;
};

export type CreateDishDto = Omit<Dish, 'id'>;
