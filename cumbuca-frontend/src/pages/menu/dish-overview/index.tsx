import { Box, Heading, Text } from '@chakra-ui/react';
import { DishDetail } from '../../../components/dish-detail';
import { GeneralNutrition } from '../../../components/general-nutrition';
import { BadgeVegan } from '../../../components/badges/vegan-badge';
import { isPromo } from '../../../utils/miscellaneous';
import { BadgePromo } from '../../../components/badges/promo-badge ';
import { Dish } from '../../../types/dish.type';
import { useEffect, useState } from 'react';
import { getDishById } from '../../../services/dish.service';
import { useParams } from 'react-router-dom';

export const DishOverviewPage = () => {
  const { id } = useParams();
  const [selectedDish, setDish] = useState<Dish>();

  useEffect(() => {
    getDishById(Number(id)).then((res) => setDish(res.data));
  }, [id]);

  return id && selectedDish ? (
    <DishDetail.Root>
      <DishDetail.Banner
        src={`https://source.unsplash.com/random/?Food&4`}
        alt=""
      />

      <Box
        px={6}
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <DishDetail.Heading
          category={selectedDish.category}
          price={selectedDish.price}
          title={selectedDish.name}
        />
        <DishDetail.Description>
          <Text
            color={'gray.700'}
            fontFamily="sans-serif"
            fontSize={{ md: 'lg' }}
          >
            {' '}
            {selectedDish.description}
          </Text>
        </DishDetail.Description>
        <DishDetail.AdditionalInformation>
          {selectedDish.isVegan && <BadgeVegan />}
          {isPromo(selectedDish) && <BadgePromo />}
        </DishDetail.AdditionalInformation>

        <Text fontWeight={600} fontSize={{ md: 'lg' }}>
          Nutrição e Alérgenos
        </Text>
        <Text color="gray.500" fontSize={{ md: 'md' }}>
          Contém: {selectedDish.allergens}
        </Text>

        {selectedDish.nutrition && (
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              mt: 5,
            }}
          >
            <GeneralNutrition nutritionInfo={selectedDish.nutrition} />
          </Box>
        )}
      </Box>
    </DishDetail.Root>
  ) : (
    <Heading>Nenhum resultado encontrado</Heading>
  );
};
