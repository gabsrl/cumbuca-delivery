import { BadgeProps } from '@chakra-ui/react';
import { BadgeBase } from './badge-base';
import { MdAttachMoney } from 'react-icons/md';

export const BadgePromo = ({ ...rest }: BadgeProps) => {
  return <BadgeBase text="Econômico" icon={<MdAttachMoney />} {...rest} />;
};
