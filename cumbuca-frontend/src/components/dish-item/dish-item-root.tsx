import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface IDishRootDetailProps {
  children: ReactNode;
}

export const Root = ({ children }: IDishRootDetailProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        border: '1px solid red',
      }}
    >
      {children}
    </Box>
  );
};
