import { BadgeProps } from '@chakra-ui/react';
import { BadgeBase } from './badge-base';

export const BadgeVegan = ({ ...rest }: BadgeProps) => {
  return (
    <BadgeBase text="Vegano" icon={<span>Icone vegano aqui</span>} {...rest} />
  );
};
