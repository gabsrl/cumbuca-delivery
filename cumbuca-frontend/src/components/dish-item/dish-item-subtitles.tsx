import { Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface IDishDetailSubtitlesProps {
  children: ReactNode;
}

export const Subtitles = ({ children }: IDishDetailSubtitlesProps) => {
  return <Text fontFamily="sans-serif">{children}</Text>;
};
