import {
  Button,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from '@chakra-ui/react';
import { BiColumns } from 'react-icons/bi';
import { COLUMNS_NAME } from './table-helpers';

interface MenuFilterColumns {
  columns: string[];
  setColumns: (v: string[]) => void;
}

export const MenuFilterColumns = ({
  columns,
  setColumns,
}: MenuFilterColumns) => {
  return (
    <Menu>
      <MenuButton as={Button}>
        <BiColumns />
      </MenuButton>
      {/* fix para evitar header da tabela ficar a frente do menu*/}
      <MenuList zIndex={99999}>
        <MenuOptionGroup
          value={columns}
          title="Exibir colunas"
          type="checkbox"
          onChange={(v) => {
            setColumns(v as string[]);
          }}
        >
          {COLUMNS_NAME.map((item) => (
            <MenuItemOption isChecked={columns.includes(item)} value={item}>
              {item}
            </MenuItemOption>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};
