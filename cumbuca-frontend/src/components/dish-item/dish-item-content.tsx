import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface IDishDetailContentProps {
  children: ReactNode;
}

export const Content = ({ children }: IDishDetailContentProps) => {
  return <Box>{children}</Box>;
};
