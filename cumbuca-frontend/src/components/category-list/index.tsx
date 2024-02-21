import { Box, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface ICategoryListProps {
  children: ReactNode;
}

export const CategoryList = ({ children }: ICategoryListProps) => {
  return <Box>{children}</Box>;
};
