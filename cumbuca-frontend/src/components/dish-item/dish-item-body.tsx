import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface IDishDetailBodyProps {
  children: ReactNode;
}

export const Body = ({ children }: IDishDetailBodyProps) => {
  return <Box>{children}</Box>;
};
