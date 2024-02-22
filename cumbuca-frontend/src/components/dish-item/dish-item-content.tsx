import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface IDishDetailContentProps {
  children: ReactNode;
}

export const Content = ({ children }: IDishDetailContentProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      }}
    >
      {children}
    </Box>
  );
};
