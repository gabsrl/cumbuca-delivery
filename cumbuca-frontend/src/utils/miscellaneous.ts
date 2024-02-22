import { Dish } from '../types/Dish.type';

export function isPromo(dish: Dish) {
  return dish.price <= 20;
}
