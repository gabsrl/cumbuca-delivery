import { Box, Image } from '@chakra-ui/react';
interface IDishDetailBannerProps {
  src: string;
  alt: string;
}
export const Banner = ({ src, alt }: IDishDetailBannerProps) => {
  return (
    <Box>
      <Image src={src} alt={alt} />
    </Box>
  );
};
