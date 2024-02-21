import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface IDishRootDetailProps {
  children: ReactNode;
}

export const Root = ({ children }: IDishRootDetailProps) => {
  return <Box>{children}</Box>;
};
