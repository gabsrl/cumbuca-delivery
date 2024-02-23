import { BadgeProps } from '@chakra-ui/react';
import { BadgeBase } from './badge-base';
import { MdAttachMoney } from 'react-icons/md';
import { THEMING_COLORS } from '../../theme/foundations/colors';

export const BadgePromo = ({ ...rest }: BadgeProps) => {
  return (
    <BadgeBase
      text="Econômico"
      icon={
        <MdAttachMoney
          fontSize="1rem"
          color={THEMING_COLORS.goldenYellow[300]}
        />
      }
      {...rest}
    />
  );
};
