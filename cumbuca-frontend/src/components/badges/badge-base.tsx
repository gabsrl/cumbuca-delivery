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
      fontSize={{ md: 'xs' }}
      sx={{
        fontFamily: 'sans-serif',
        gap: 1,
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        borderRadius: 'full',
        textTransform: 'capitalize',
        fontWeight: 600,
        color: 'gray.600',
      }}
      {...rest}
    >
      {icon}
      {text}
    </Badge>
  );
};
