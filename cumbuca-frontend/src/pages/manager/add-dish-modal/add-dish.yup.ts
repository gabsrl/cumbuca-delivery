import * as yup from 'yup';

export const ADD_DISH_SCHEMA = yup.object().shape({
  name: yup.string().required('Nome do campo é obrigatório.'),
  description: yup.string().required('Descrição é obrigatória.'),
  price: yup
    .number()
    .required('Preço é obrigatório.')
    .positive('O preço deve ser um número positivo.'),
  category: yup.string().required('Categoria é obrigatória.'),
  enable: yup.string().oneOf(['1', '0']).required('Ativação é obrigatória.'),
  image: yup.mixed().required('Imagem é obrigatória.'),
  isVegan: yup
    .string()
    .oneOf(['1', '0'])
    .required('Informe se o produto é vegano ou não.'),
  servings: yup
    .number()
    .required('Número de porções é obrigatório.')
    .positive('O número de porções deve ser um número positivo.')
    .integer('O número de porções deve ser um número inteiro.'),
  weight: yup
    .number()
    .required('Peso é obrigatório.')
    .positive('O peso deve ser um número positivo.'),
  nutrition: yup.object().shape({
    totalCalories: yup
      .number()
      .required('Total de calorias é obrigatório.')
      .positive('O total de calorias deve ser um número positivo.'),
    fatCalories: yup
      .number()
      .required('Calorias de gordura é obrigatório.')
      .positive('As calorias de gordura devem ser um número positivo.'),
    totalFat: yup
      .number()
      .required('Total de gordura é obrigatório.')
      .positive('O total de gordura deve ser um número positivo.'),
    saturatedFat: yup
      .number()
      .required('Gordura saturada é obrigatória.')
      .positive('A gordura saturada deve ser um número positivo.'),
    transFat: yup
      .number()
      .required('Gordura trans é obrigatória.')
      .positive('A gordura trans deve ser um número positivo.'),
    sugar: yup
      .number()
      .required('Açúcar é obrigatório.')
      .positive('O açúcar deve ser um número positivo.'),
  }),
  allergens: yup.string().required('Alergênico é obrigatório.'),
});
