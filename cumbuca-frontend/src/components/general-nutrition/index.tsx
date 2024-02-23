import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import { Nutrition } from '../../types/Nutrition.type';

const boxStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '60px',
  borderStyle: 'solid',
  borderBottomWidth: '1px',
  borderColor: 'gray.300',
  paddingLeft: 2,
  paddingRight: 2,
};

const borderSeparator = {
  borderStyle: 'solid',
  borderRightWidth: '1px',
  borderColor: 'gray.300',
};

const textStyle = { fontWeight: 700, color: 'gray.700' };

export interface IGeneralNutrition {
  nutritionInfo: Nutrition;
}
export const GeneralNutrition = ({ nutritionInfo }: IGeneralNutrition) => {
  const { fatCalories, saturedFat, sugar, totalCalories, transFat, totalFat } =
    nutritionInfo;
  return (
    <SimpleGrid columns={3} spacing={0}>
      <Box sx={{ ...boxStyle, ...borderSeparator }}>
        <Text sx={textStyle}>{totalCalories}</Text>
        <Text>Calorias totais</Text>
      </Box>

      <Box sx={{ ...boxStyle, ...borderSeparator }}>
        <Text sx={textStyle}>{fatCalories}</Text>
        <Text>Calorias de gordura</Text>
      </Box>

      <Box sx={boxStyle}>
        <Text sx={textStyle}>{totalFat}g</Text>
        <Text>Gorduras totais</Text>
      </Box>

      <Box sx={{ ...boxStyle, ...borderSeparator }}>
        <Text sx={textStyle}>{saturedFat}g</Text>
        <Text>Gordura saturada</Text>
      </Box>

      <Box sx={{ ...boxStyle, ...borderSeparator }}>
        <Text sx={textStyle}>{transFat}g</Text>
        <Text>Gordura trans</Text>
      </Box>

      <Box sx={boxStyle}>
        <Text sx={textStyle}>{sugar}g</Text>
        <Text>Açucar</Text>
      </Box>
    </SimpleGrid>
  );
};
