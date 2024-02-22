import { Dish } from '../types/dish.type';


const BRL_CURRENCY_FORMATTER = Intl.NumberFormat('pt-BR', {
  currency: 'BRL', style: 'currency', minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

export function isPromo(dish: Dish) {
  return dish.price <= 20;
}

export function isVegan(dish: Dish) {
  return dish.isVegan;
}


export function BRLCurrency(value: number) {
  return BRL_CURRENCY_FORMATTER.format(value);
}

export const WeightFormmater = (weight: number) => {


  if (weight >= 1000) return { value: `${Math.round(weight / 1000)}`, unit: 'kg', toString: () => `${Math.round(weight / 1000)}` }

  return { value: `${Math.round(weight)}`, unit: 'g', toString: () => `${Math.round(weight)}g` }

}