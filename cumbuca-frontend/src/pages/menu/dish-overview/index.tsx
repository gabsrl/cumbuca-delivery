import { Text } from '@chakra-ui/react';
import { DishDetail } from '../../../components/dish-detail';
import { GeneralNutrition } from '../../../components/general-nutrition';
import { DISHES_MOCK } from '../../../mocks/dishes';
import { BadgeVegan } from '../../../components/badges/vegan-badge';
import { isPromo } from '../../../utils/miscellaneous';
import { BadgePromo } from '../../../components/badges/promo-badge ';

export const DishOverviewPage = () => {
  const selectedDish = DISHES_MOCK[0];
  return (
    <DishDetail.Root>
      <DishDetail.Banner src="" alt="" />
      <DishDetail.Heading
        category={selectedDish.category}
        price={selectedDish.price}
        title={selectedDish.name}
      />
      <DishDetail.Description>
        {selectedDish.description}
      </DishDetail.Description>
      <DishDetail.AdditionalInformation>
        {selectedDish.isVegan && <BadgeVegan />}
        {isPromo(selectedDish) && <BadgePromo />}
      </DishDetail.AdditionalInformation>

      <Text>Nutrição e alergenos</Text>
      <Text>Contém {selectedDish.allergens}</Text>

      {selectedDish.nutrition && (
        <GeneralNutrition nutritionInfo={selectedDish.nutrition} />
      )}
    </DishDetail.Root>
  );
};
