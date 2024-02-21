import { Box, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface ICategoryItemProps {
  children: ReactNode;
}

export const CategoryItem = ({ children }: ICategoryItemProps) => {
  return (
    <Box>
      <Text>{children}</Text>
    </Box>
  );
};
