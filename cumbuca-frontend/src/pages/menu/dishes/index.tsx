import { Box } from '@chakra-ui/react';
import { CategoryList } from '../../../components/category-list';
import { CategoryItem } from '../../../components/category-item';

import { DishItem } from '../../../components/dish-item';
import { DISHES_MOCK } from '../../../mocks/dishes';
import { Dish } from '../../../types/dish.type';
import {
  BRLCurrency,
  isPromo,
  isVegan,
  WeightFormmater,
} from '../../../utils/miscellaneous';
import { BadgeVegan } from '../../../components/badges/vegan-badge';
import { BadgePromo } from '../../../components/badges/promo-badge ';

export const Dishes = () => {
  const dishesFetched: Dish[] = DISHES_MOCK;

  return (
    <Box sx={{ width: '80%' }}>
      {/* <CategoryList>
        <CategoryItem>Kitchen</CategoryItem>
      </CategoryList> */}

      <Box>
        {dishesFetched.map((item) => (
          <DishItem.Root>
            <DishItem.Body>
              <DishItem.Content>
                <DishItem.Title>{item.name}</DishItem.Title>
                <DishItem.Subtitles>
                  {BRLCurrency(item.price)} {WeightFormmater(item.weight).value}{' '}
                  {WeightFormmater(item.weight).unit}
                </DishItem.Subtitles>
                <DishItem.Description>{item.description}</DishItem.Description>
              </DishItem.Content>
              <DishItem.DetailImage
                alt=""
                src={`https://source.unsplash.com/random/?Food&${item.id}`}
              />
            </DishItem.Body>
            <DishItem.PlusInfo>
              {isVegan(item) && <BadgeVegan />}
              {isPromo(item) && <BadgePromo />}
            </DishItem.PlusInfo>
          </DishItem.Root>
        ))}
      </Box>
    </Box>
  );
};
