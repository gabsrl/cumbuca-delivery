import { Text, TextProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface IDishDetailTitleProps extends TextProps {
  children: ReactNode;
}

export const Title = ({ children, ...rest }: IDishDetailTitleProps) => {
  return (
    <Text
      fontFamily="sans-serif"
      color="darkerGreen.800"
      fontSize={{ md: '2xl' }}
      fontWeight="700"
      cursor="pointer"
      {...rest}
    >
      {children}
    </Text>
  );
};
