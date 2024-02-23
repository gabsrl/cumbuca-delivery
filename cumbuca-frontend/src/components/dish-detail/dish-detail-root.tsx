import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface IDishDetailRootProps {
  children: ReactNode;
}
export const Root = ({ children }: IDishDetailRootProps) => {
  return (
    <Box
      width={{ xl: '1024px', lg: '768px', md: '100%' }}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // border: '1px solid red',
        paddingBottom: 5,
      }}
    >
      {children}
    </Box>
  );
};
