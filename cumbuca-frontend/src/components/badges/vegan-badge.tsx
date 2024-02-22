import { BadgeProps } from '@chakra-ui/react';
import { PiFlowerTulipFill } from 'react-icons/pi';

import { BadgeBase } from './badge-base';

export const BadgeVegan = ({ ...rest }: BadgeProps) => {
  return <BadgeBase text="Vegano" icon={<PiFlowerTulipFill />} {...rest} />;
};
