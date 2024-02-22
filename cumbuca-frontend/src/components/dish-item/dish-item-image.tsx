import { Box, Image } from '@chakra-ui/react';

interface IDishDetailDetailImageProps {
  src: string;
  alt: string;
}

export const DetailImage = ({ src, alt }: IDishDetailDetailImageProps) => {
  return (
    <Box>
      <Image borderRadius={4} width={100} height={100} src={src} alt={alt} />
    </Box>
  );
};
