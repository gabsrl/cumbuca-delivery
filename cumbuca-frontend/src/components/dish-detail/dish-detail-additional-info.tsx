import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface IDishDetailAdditionalInformationProps {
  children: ReactNode;
}
export const AdditionalInformation = ({
  children,
}: IDishDetailAdditionalInformationProps) => {
  return <Box>{children}</Box>;
};
