import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface IDishDetaiDescriptionProps {
  children: ReactNode;
}
export const Description = ({ children }: IDishDetaiDescriptionProps) => {
  return <Box>{children}</Box>;
};
