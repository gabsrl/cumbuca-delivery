import { Box } from '@chakra-ui/react';
import { CategoryList } from '../../../components/category-list';
import { CategoryItem } from '../../../components/category-item';

import { DishItem } from '../../../components/dish-item';
import { DISHES_MOCK } from '../../../mocks/dishes';
import { Dish } from '../../../types/dish.type';

export const Dishes = () => {
  const dishesFetched: Dish[] = DISHES_MOCK;

  return (
    <Box>
      <CategoryList>
        <CategoryItem>Kitchen</CategoryItem>
      </CategoryList>

      <Box>
        {dishesFetched.map((item) => (
          <DishItem.Root>
            <DishItem.Body>
              <DishItem.Content>
                <DishItem.Title>{item.name}</DishItem.Title>
                <DishItem.Subtitles>
                  {item.price} {item.servings}{' '}
                </DishItem.Subtitles>
                <DishItem.Description>
                  {item.description}
                </DishItem.Description>
              </DishItem.Content>
              <DishItem.DetailImage alt="" src="" />
            </DishItem.Body>
            <DishItem.PlusInfo>
              {' '}
              {item.isVegan && 'Vegano'}{' '}
              {item.servings && `Serve ${item.servings}`}
            </DishItem.PlusInfo>
          </DishItem.Root>
        ))}
      </Box>
    </Box>
  );
};
