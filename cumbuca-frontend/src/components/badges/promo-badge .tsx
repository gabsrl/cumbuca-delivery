import { BadgeProps } from '@chakra-ui/react';
import { BadgeBase } from './badge-base';

export const BadgePromo = ({ ...rest }: BadgeProps) => {
  return (
    <BadgeBase
      text="Econômico"
      icon={<span>Icone econômico aqui</span>}
      {...rest}
    />
  );
};
