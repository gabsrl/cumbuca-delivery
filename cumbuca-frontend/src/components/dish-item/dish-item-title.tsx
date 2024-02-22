import { Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface IDishDetailTitleProps {
  children: ReactNode;
}

export const Title = ({ children }: IDishDetailTitleProps) => {
  return (
    <Text
      fontFamily="sans-serif"
      color="darkerGreen.900"
      fontSize={{ md: '2xl' }}
      fontWeight="700"
    >
      {children}
    </Text>
  );
};
