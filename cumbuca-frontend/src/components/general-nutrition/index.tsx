import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import { Nutrition } from '../../types/Nutrition.type';

const boxStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '80px',
  borderStyle: 'solid',
  borderBottomWidth: '1px',
  borderColor: 'gray.300',
  paddingLeft: 2,
  paddingRight: 2,
  textAlign: 'center',
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
  const {
    fatCalories,
    saturatedFat,
    sugar,
    totalCalories,
    transFat,
    totalFat,
  } = nutritionInfo;
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
        <Text sx={textStyle}>{saturatedFat}g</Text>
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
      <Box
        sx={{
          ...boxStyle,
          ...borderSeparator,
          borderBottomWidth: 0,
          height: '40px',
        }}
      />
      <Box
        sx={{
          ...boxStyle,
          ...borderSeparator,
          borderBottomWidth: 0,
          height: '40px',
        }}
      />
    </SimpleGrid>
  );
};
