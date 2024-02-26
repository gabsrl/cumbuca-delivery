/* eslint-disable @typescript-eslint/no-explicit-any */
import { TrueOrFalse } from './miscellaneous.types';
import { Nutrition } from './Nutrition.type';

export type Dish = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  enable: TrueOrFalse;
  image: any;
  isVegan: TrueOrFalse;
  servings: number;
  weight: number;
  nutrition: Nutrition;
  allergens: string;
};

export type CreateDishDto = Omit<Dish, 'id'>;
