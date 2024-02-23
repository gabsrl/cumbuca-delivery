import { Box, Image } from '@chakra-ui/react';
interface IDishDetailBannerProps {
  src: string;
  alt: string;
}
export const Banner = ({ src, alt }: IDishDetailBannerProps) => {
  return (
    // <Box width={{ xl: '1024px', lg: '768px', md: '100%' }}>
    <Image
      w="100%"
      height={{ xl: '600px', lg: '480px', md: '320px' }}
      objectFit="contain"
      src={src}
      alt={alt}
    />
  );
};
