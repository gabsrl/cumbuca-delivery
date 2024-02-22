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
  weight: number; // Peso em gramas
  nutrition?: {
    totalCalories: number; // Calorias totais
    fatCalories: number; // Calorias de gordura
    totalFat: number; // Gordura total em gramas
    saturedFat: number; // Gordura saturada em gramas
    transFat: number; // Gordura trans em gramas
    sugar: number; // Açúcar em gramas
  };
  allergens: string; // Alergênicos presentes
};

export type CreateDishDto = Omit<Dish, 'id'>;
