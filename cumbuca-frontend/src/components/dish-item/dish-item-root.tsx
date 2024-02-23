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
        borderStyle: 'solid',
        borderBottomWidth: '1px',
        borderColor: 'gray.200',
        mb: 4,
        py: 4,
      }}
    >
      {children}
    </Box>
  );
};
