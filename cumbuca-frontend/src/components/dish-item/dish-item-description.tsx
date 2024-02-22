import { Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface IDishDetailDescriptionProps {
  children: ReactNode;
}

export const Description = ({ children }: IDishDetailDescriptionProps) => {
  return <Text>{children}</Text>;
};
