import { Box, Text, Heading as HeadingChakraUi } from '@chakra-ui/react';
import { BRLCurrency } from '../../utils/miscellaneous';

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
      mb={15}
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
        <HeadingChakraUi color="darkerGreen.800">{title}</HeadingChakraUi>
        <Text color="gray.700" fontWeight={600} fontSize={{ md: 'xl' }}>
          {BRLCurrency(price)}
        </Text>
      </Box>
      <Text>{category}</Text>
    </Box>
  );
};
