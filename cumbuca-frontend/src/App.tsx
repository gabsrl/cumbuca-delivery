import theming from './theme';

import { Box, ChakraProvider } from '@chakra-ui/react';
import { AppRoutes } from './routes/routes';

function App() {
  return (
    <ChakraProvider theme={theming}>
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <AppRoutes />
      </Box>
    </ChakraProvider>
  );
}

export default App;
{
  /* <Button backgroundColor="goldenYellow.800">teste</Button> */
}
