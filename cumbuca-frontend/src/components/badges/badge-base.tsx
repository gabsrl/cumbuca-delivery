import { Badge, BadgeProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface IBadgeBaseProps extends BadgeProps {
  text: string;
  icon: ReactNode;
}
export const BadgeBase = ({ text, icon, ...rest }: IBadgeBaseProps) => {
  return (
    <Badge {...rest}>
      {' '}
      {text} {icon}
    </Badge>
  );
};
