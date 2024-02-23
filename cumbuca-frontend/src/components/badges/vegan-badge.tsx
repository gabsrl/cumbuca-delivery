import { BadgeProps } from '@chakra-ui/react';
import { PiFlowerTulipFill } from 'react-icons/pi';

import { BadgeBase } from './badge-base';
import { THEMING_COLORS } from '../../theme/foundations/colors';

export const BadgeVegan = ({ ...rest }: BadgeProps) => {
  return (
    <BadgeBase
      text="Vegano"
      icon={
        <PiFlowerTulipFill
          fontSize="1rem"
          color={THEMING_COLORS.darkerGreen[800]}
        />
      }
      {...rest}
    />
  );
};
