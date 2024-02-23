import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface IDishDetailAdditionalInformationProps {
  children: ReactNode;
}
export const AdditionalInformation = ({
  children,
}: IDishDetailAdditionalInformationProps) => {
  return <Box sx={{ display: 'flex', gap: 3, mb: 4 }}>{children}</Box>;
};
