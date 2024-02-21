import { Box, Image } from '@chakra-ui/react';

interface IDishDetailDetailImageProps {
  src: string;
  alt: string;
}

export const DetailImage = ({ src, alt }: IDishDetailDetailImageProps) => {
  return (
    <Box>
      <Image src={src} alt={alt} />
    </Box>
  );
};
