import { Badge, BadgeProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface IBadgeBaseProps extends BadgeProps {
  text: string;
  icon: ReactNode;
}
export const BadgeBase = ({ text, icon, ...rest }: IBadgeBaseProps) => {
  return (
    <Badge
      sx={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}
      {...rest}
    >
      {icon}
      {text}
    </Badge>
  );
};
