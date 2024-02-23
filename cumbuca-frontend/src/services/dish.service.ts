import { CreateDishDto, Dish } from '../types/dish.type';
import { api } from './config.service';

const endpointUrl = 'dishes';
export const getAllDishes = () => api.get<Dish[]>(endpointUrl);

export const createDish = (dishInput: CreateDishDto) =>
  api.post(endpointUrl, {
    ...dishInput,
    id: Math.floor(Math.random() * (10000 - 20 + 1)) + 20,
  });