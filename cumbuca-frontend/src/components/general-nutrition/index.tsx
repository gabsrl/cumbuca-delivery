import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import { Nutrition } from '../../types/Nutrition.type';

export interface IGeneralNutrition {
  nutritionInfo: Nutrition;
}
export const GeneralNutrition = ({ nutritionInfo }: IGeneralNutrition) => {
  const { fatCalories, saturedFat, sugar, totalCalories, transFat, totalFat } =
    nutritionInfo;
  return (
    <SimpleGrid columns={3} spacing={10}>
      <Box bg="tomato" height="80px">
        <Text>{totalCalories}</Text>
        <Text>Calorias totais</Text>
      </Box>

      <Box bg="tomato" height="80px">
        <Text>{fatCalories}</Text>
        <Text>Calorias de gordura</Text>
      </Box>

      <Box bg="tomato" height="80px">
        <Text>{totalFat}g</Text>
        <Text>Gorduras totais</Text>
      </Box>

      <Box bg="tomato" height="80px">
        <Text>{saturedFat}g</Text>
        <Text>Gordura saturada</Text>
      </Box>

      <Box bg="tomato" height="80px">
        <Text>{transFat}g</Text>
        <Text>Gordura trans</Text>
      </Box>

      <Box bg="tomato" height="80px">
        <Text>{sugar}g</Text>
        <Text>Açucar</Text>
      </Box>
    </SimpleGrid>
  );
};
