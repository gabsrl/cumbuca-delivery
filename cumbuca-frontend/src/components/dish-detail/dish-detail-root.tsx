import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface IDishDetailRootProps {
  children: ReactNode;
}
export const Root = ({ children }: IDishDetailRootProps) => {
  return <Box sx={{ width: '80%' }}>{children}</Box>;
};
