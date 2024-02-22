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
    <Box as="header">
      <Box>
        <HeadingChakraUi>{title}</HeadingChakraUi>
        <Text>{price}</Text>
      </Box>
      <Text>{category}</Text>
    </Box>
  );
};
