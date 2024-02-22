import { Badge, BadgeProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface IBadgeBaseProps extends BadgeProps {
  text: string;
  icon: ReactNode;
}
export const BadgeBase = ({ text, icon, ...rest }: IBadgeBaseProps) => {
  return (
    <Badge
      p={2}
      sx={{
        gap: 1,
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        borderRadius: 'full',
      }}
      {...rest}
    >
      {icon}
      {text}
    </Badge>
  );
};
