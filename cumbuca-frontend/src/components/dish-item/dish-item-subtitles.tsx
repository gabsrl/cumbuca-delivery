import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface IDishDetailSubtitlesProps {
  children: ReactNode;
}

export const Subtitles = ({ children }: IDishDetailSubtitlesProps) => {
  return (
    <Box
      fontFamily="sans-serif"
      sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
    >
      {children}
    </Box>
  );
};
