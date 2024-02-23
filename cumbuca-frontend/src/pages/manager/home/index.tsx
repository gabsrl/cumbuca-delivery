// import { Box } from '@chakra-ui/react';
import DishFormModal from '../add-dish-modal';
// import DishTable from '../../../components/table';
// import { DISHES_MOCK } from '../../../mocks/dishes';

// export const Home = () => {
//   return (
//     <Box>
//       <DishTable data={DISHES_MOCK} />
//       {/* <Button></Button> */}

//     </Box>
//   );
// };
import * as React from 'react';

import { useCustom } from '@table-library/react-table-library/table';
import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from '@table-library/react-table-library/theme';
import {
  DEFAULT_OPTIONS,
  getTheme,
} from '@table-library/react-table-library/chakra-ui';
import { useRowSelect } from '@table-library/react-table-library/select';
import {
  useTree,
  TreeExpandClickTypes,
} from '@table-library/react-table-library/tree';
import { useSort } from '@table-library/react-table-library/sort';
import { usePagination } from '@table-library/react-table-library/pagination';
import {
  fromTreeToList,
  findNodeById,
  insertNode,
} from '@table-library/react-table-library/common';
import {
  Text,
  Box,
  HStack,
  InputGroup,
  InputLeftElement,
  Input,
  Checkbox,
  IconButton,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import {
  FaPen,
  FaSearch,
  FaChevronRight,
  FaChevronDown,
  FaChevronUp,
  FaChevronLeft,
} from 'react-icons/fa';
import { DISHES_MOCK } from '../../../mocks/dishes';
import { CreateDishDto, Dish } from '../../../types/dish.type';

const nodes = DISHES_MOCK;

enum SortKeys {
  NAME = 'NAME',
  PRICE = 'PRICE',
  ACTIVE = 'ACTIVE',
  CATEGORY = 'CATEGORY',
  PORTION = 'PORTION',
  VEGAN = 'VEGAN',
  TOTAL_CALORIES = 'TOTAL_CALORIES',
  FAT_CALORIES = 'FAT_CALORIES',
  TOTAL_FAT = 'TOTAL_FAT',
  SATURATED_FAT = 'SATURATED_FAT',
  TRANS_FAT = 'TRANS_FAT',
  SUGAR = 'SUGAR',
}

export const Home = () => {
  const [data, setData] = React.useState({ nodes });

  //* Theme *//

  const chakraTheme = getTheme({
    ...DEFAULT_OPTIONS,
    striped: true,
  });
  const customTheme = {
    Table: `
      --data-table-library_grid-template-columns:  64px repeat(5, minmax(0, 1fr));

      margin: 16px 0px;
    `,
  };
  const theme = useTheme([chakraTheme, customTheme]);

  //* Resize *//

  const resize = { resizerHighlight: '#dee2e6' };

  //* Pagination *//

  const pagination = usePagination(data, {
    state: {
      page: 0,
      size: 4,
    },
    onChange: onPaginationChange,
  });

  function onPaginationChange(action, state) {
    console.log(action, state);
  }

  //* Search *//

  const [search, setSearch] = React.useState('');

  useCustom('search', data, {
    state: { search },
    onChange: onSearchChange,
  });

  function onSearchChange(action, state) {
    console.log(action, state);
    pagination.fns.onSetPage(0);
  }

  //* Filter *//

  const [isHide, setHide] = React.useState(false);

  useCustom('filter', data, {
    state: { isHide },
    onChange: onFilterChange,
  });

  function onFilterChange(action, state) {
    console.log(action, state);
    pagination.fns.onSetPage(0);
  }

  //* Select *//

  const select = useRowSelect(data, {
    onChange: onSelectChange,
  });

  function onSelectChange(action, state) {
    console.log(action, state);
  }

  //* Tree *//

  const tree = useTree(
    data,
    {
      onChange: onTreeChange,
    },
    {
      clickType: TreeExpandClickTypes.ButtonClick,
      treeYLevel: 1,
      treeIcon: {
        margin: '4px',
        iconDefault: null,
        iconRight: <FaChevronRight />,
        iconDown: <FaChevronDown />,
      },
    },
  );

  function onTreeChange(action, state) {
    console.log(action, state);
  }

  //* Sort *//

  const sort = useSort(
    data,
    {
      onChange: onSortChange,
    },
    {
      sortIcon: {
        iconDefault: null,
        iconUp: <FaChevronUp />,
        iconDown: <FaChevronDown />,
      },
      sortFns: {
        TASK: (array) => array.sort((a, b) => a.name.localeCompare(b.name)),
        DEADLINE: (array) => array.sort((a, b) => a.deadline - b.deadline),
        TYPE: (array) => array.sort((a, b) => a.type.localeCompare(b.type)),
        COMPLETE: (array) => array.sort((a, b) => a.isComplete - b.isComplete),
        TASKS: (array) =>
          array.sort((a, b) => (a.nodes || []).length - (b.nodes || []).length),
      },
    },
  );

  function onSortChange(action, state) {
    console.log(action, state);
  }

  let modifiedNodes = data.nodes;

  // search
  modifiedNodes = modifiedNodes.filter((node) =>
    node.name.toLowerCase().includes(search.toLowerCase()),
  );

  // filter
  modifiedNodes = isHide
    ? modifiedNodes.filter((node) => !node.enable)
    : modifiedNodes;

  const COLUMNS = [
    {
      label: 'Nome',
      renderCell: (item: Dish) => item.name,
      resize,
      sort: { sortKey: SortKeys.NAME },
      select: {
        renderHeaderCellSelect: () => (
          <Checkbox
            colorScheme="teal"
            isChecked={select.state.all}
            isIndeterminate={!select.state.all && !select.state.none}
            onChange={select.fns.onToggleAll}
          />
        ),
      },
      tree: true,
    },
    {
      label: 'Descrição',
      renderCell: (item: Dish) => item.description,
      resize,
    },
    {
      label: 'Preço',
      renderCell: (item: Dish) => item.price.toFixed(2),
      resize,
      sort: { sortKey: SortKeys.PRICE },
    },

    {
      label: 'Ativo',
      renderCell: (item: Dish) => (item.enable ? 'Sim' : 'Não'),
      resize,
      sort: { sortKey: SortKeys.ACTIVE },
    },

    {
      label: 'Categoria',
      renderCell: (item: Dish) => item.category,
      resize,
      sort: { sortKey: SortKeys.CATEGORY },
    },
    {
      label: 'Porção(g)',
      renderCell: (item: Dish) => item.weight,
      resize,
      sort: { sortKey: SortKeys.PORTION },
    },
    {
      label: 'Vegano',
      renderCell: (item: Dish) => (item.isVegan ? 'Sim' : 'Não'),
      resize,
      sort: { sortKey: SortKeys.VEGAN },
    },
    {
      label: 'Serve',
      renderCell: (item: Dish) => `${item.servings} pessoa(s)`,
      resize,
    },
    {
      label: 'Cal. Totais ',
      renderCell: (item: Dish) => item.nutrition.totalCalories,
      resize,
      sort: { sortKey: SortKeys.TOTAL_CALORIES },
    },
    {
      label: 'Cal. de Gordura ',
      renderCell: (item: Dish) => item.nutrition.fatCalories,
      resize,
      sort: { sortKey: SortKeys.FAT_CALORIES },
    },
    {
      label: 'Gorduras Totais(g)',
      renderCell: (item: Dish) => item.nutrition.totalCalories,
      resize,
      sort: { sortKey: SortKeys.TOTAL_FAT },
    },
    {
      label: 'Gorturas Saturadas(g)',
      renderCell: (item: Dish) => item.nutrition.saturatedFat,
      resize,
      sort: { sortKey: SortKeys.SATURATED_FAT },
    },
    {
      label: 'Gorturas Trans(g)',
      renderCell: (item: Dish) => item.nutrition.transFat,
      resize,
      sort: { sortKey: SortKeys.TRANS_FAT },
    },
    {
      label: 'Açucar',
      renderCell: (item: Dish) => item.nutrition.sugar,
      resize,
      sort: { sortKey: SortKeys.SUGAR },
    },
  ];

  console.log(
    COLUMNS.filter((item) => item.sort).map((item) => item.sort?.sortKey),
  );

  const addNewDish = (input: CreateDishDto) => {
    console.log('input', input);
  };
  return (
    <Box px={4}>
      <DishFormModal isOpen onClose={() => 0} onSubmit={addNewDish} />
      {/* Form */}

      <HStack m={3}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<FaSearch style={{ color: '#4a5568' }} />}
          />
          <Input
            placeholder="Search Task"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </InputGroup>
      </HStack>

      {/* Table */}

      <Box p={3} borderWidth="2px" borderRadius="xl">
        <CompactTable
          columns={COLUMNS}
          data={{ ...data, nodes: modifiedNodes }}
          theme={theme}
          layout={{ custom: true }}
          // select={select}
          tree={tree}
          sort={sort}
          pagination={pagination}
        />
      </Box>

      <br />
      <HStack justify="flex-end">
        <IconButton
          aria-label="previous page"
          icon={<FaChevronLeft />}
          colorScheme="teal"
          variant="ghost"
          disabled={pagination.state.page === 0}
          onClick={() => pagination.fns.onSetPage(pagination.state.page - 1)}
        />

        {pagination.state.getPages(modifiedNodes).map((_, index) => (
          <Button
            key={index}
            colorScheme="teal"
            variant={pagination.state.page === index ? 'solid' : 'ghost'}
            onClick={() => pagination.fns.onSetPage(index)}
          >
            {index + 1}
          </Button>
        ))}
        <IconButton
          aria-label="next page"
          icon={<FaChevronRight />}
          colorScheme="teal"
          variant="ghost"
          disabled={
            pagination.state.page + 1 ===
            pagination.state.getTotalPages(data.nodes)
          }
          onClick={() => pagination.fns.onSetPage(pagination.state.page + 1)}
        />
      </HStack>
    </Box>
  );
};
