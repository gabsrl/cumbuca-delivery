import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface IDishDetailPlusInfoProps {
  children: ReactNode;
}

export const PlusInfo = ({ children }: IDishDetailPlusInfoProps) => {
  return <Box>{children}</Box>;
};
