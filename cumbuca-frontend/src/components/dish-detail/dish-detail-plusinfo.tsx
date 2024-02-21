import { Box } from '@chakra-ui/react';

interface IDishDetailPlusInfoProps {
  vegan: boolean;
  servings?: number;
}

export const PlusInfo = ({ vegan, servings = 0 }: IDishDetailPlusInfoProps) => {
  return (
    <Box>
      {vegan && 'vegano'} {servings > 0 && `serve ${servings} pessoas`}
    </Box>
  );
};
