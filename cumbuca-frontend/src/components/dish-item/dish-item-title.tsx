import { Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface IDishDetailTitleProps {
  children: ReactNode;
}

export const Title = ({ children }: IDishDetailTitleProps) => {
  return <Text>{children}</Text>;
};
