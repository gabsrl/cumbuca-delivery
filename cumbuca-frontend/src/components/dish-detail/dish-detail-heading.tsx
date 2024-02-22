import { Box, Text, Heading as HeadingChakraUi } from '@chakra-ui/react';

interface IDishDetailHeadingProps {
  title: string;
  price: number;
  category: string;
}
export const Heading = ({
  title,
  price,
  category,
}: IDishDetailHeadingProps) => {
  return (
    <Box
      as="header"
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <HeadingChakraUi>{title}</HeadingChakraUi>
        <Text>{price}</Text>
      </Box>
      <Text>{category}</Text>
    </Box>
  );
};
