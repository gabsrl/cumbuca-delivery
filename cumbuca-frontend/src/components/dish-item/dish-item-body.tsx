import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface IDishDetailBodyProps {
  children: ReactNode;
}

export const Body = ({ children }: IDishDetailBodyProps) => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      {children}
    </Box>
  );
};
