import { Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface IDishDetailDescriptionProps {
  children: ReactNode;
}

export const Description = ({ children }: IDishDetailDescriptionProps) => {
  return (
    <Text fontFamily="sans-serif" width="100%" fontSize={{ md: 'lg' }}>
      {children}
    </Text>
  );
};
