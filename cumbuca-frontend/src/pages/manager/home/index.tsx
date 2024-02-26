import DishFormModal from '../add-dish-modal';

import { useEffect, useState } from 'react';

import { useCustom } from '@table-library/react-table-library/table';
import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from '@table-library/react-table-library/theme';
import {
  DEFAULT_OPTIONS,
  getTheme,
} from '@table-library/react-table-library/chakra-ui';

import { useSort } from '@table-library/react-table-library/sort';
import { usePagination } from '@table-library/react-table-library/pagination';

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
} from '@chakra-ui/react';
import {
  FaSearch,
  FaChevronRight,
  FaChevronDown,
  FaChevronUp,
  FaChevronLeft,
} from 'react-icons/fa';
import { DISHES_MOCK } from '../../../mocks/dishes';
import { CreateDishDto, Dish } from '../../../types/dish.type';
import { MdOutlineAdd } from 'react-icons/md';
import {
  COLUMNS_DISHES,
  SortKeys,
  TABLE_LABELS_COLUMN_MAPPER,
} from './table-helpers';
import {
  createDish,
  getAllDishes,
  updateDish,
} from '../../../services/dish.service';
import { TrueOrFalse } from '../../../types/miscellaneous.types';

const nodes = DISHES_MOCK;

export const Home = () => {
  const [data, setData] = useState<{ nodes: Dish[] }>({ nodes: [] });
  const [pageInput, setPageInput] = useState(5);

  const [isOpenAddDish, setIsOpenAddDish] = useState(false);
  const [hiddenColumns, setHiddenColumns] = useState(['']);

  const toggleColumn = (column: string) => {
    if (hiddenColumns.includes(column)) {
      setHiddenColumns(hiddenColumns.filter((v) => v !== column));
    } else {
      setHiddenColumns(hiddenColumns.concat(column));
    }
  };

  const loadDishes = async () => {
    const result = await getAllDishes();
    setData({ nodes: result.data });
  };

  useEffect(() => {
    loadDishes();
  }, []);

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

  const pagination = usePagination(data, {
    state: {
      page: 0,
      size: pageInput,
    },
  });

  const [search, setSearch] = useState('');

  useCustom('search', data, {
    state: { search },
    onChange: onSearchChange,
  });

  function onSearchChange(action, state) {
    pagination.fns.onSetPage(0);
  }

  const [isHide, setHide] = useState(false);

  useCustom('filter', data, {
    state: { isHide },
    onChange: onFilterChange,
  });

  function onFilterChange(action, state) {
    pagination.fns.onSetPage(0);
  }

  const handleActive = async (id: number, payload: Dish) => {
    const res = await updateDish(id, payload);
    console.log('res', res);
  };

  const sort = useSort(
    data,
    {
      onChange: () => ({}),
    },
    {
      sortIcon: {
        iconDefault: null,
        iconUp: <FaChevronUp />,
        iconDown: <FaChevronDown />,
      },
      sortFns: {
        NAME: SortKeys.NAME.sort,
        PRICE: SortKeys.PRICE.sort,
        ACTIVE: SortKeys.ACTIVE.sort,
        CATEGORY: SortKeys.CATEGORY.sort,
        PORTION: SortKeys.PORTION.sort,
        VEGAN: SortKeys.VEGAN.sort,
        TOTAL_CALORIES: SortKeys.TOTAL_CALORIES.sort,
        FAT_CALORIES: SortKeys.FAT_CALORIES.sort,
        TOTAL_FAT: SortKeys.TOTAL_FAT.sort,
        SATURATED_FAT: SortKeys.SATURATED_FAT.sort,
        TRANS_FAT: SortKeys.TRANS_FAT.sort,
        SUGAR: SortKeys.SUGAR.sort,
      },
    },
  );

  let modifiedNodes = data.nodes;

  modifiedNodes = modifiedNodes.filter((node) =>
    node.name.toLowerCase().includes(search.toLowerCase()),
  );

  const COLUMNS = COLUMNS_DISHES(hiddenColumns, handleActive);

  const addNewDish = async (input: CreateDishDto) => {
    try {
      const response = await createDish(input);
      await loadDishes();
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box px={4}>
      <DishFormModal
        isOpen={isOpenAddDish}
        onClose={() => setIsOpenAddDish(false)}
        onSubmit={addNewDish}
      />

      <HStack>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<FaSearch style={{ color: '#4a5568' }} />}
          />
          <Input
            placeholder="Procure nome de pratos"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </InputGroup>

        <Button
          onClick={() => setIsOpenAddDish(true)}
          leftIcon={<MdOutlineAdd />}
        >
          Novo prato
        </Button>
      </HStack>

      <HStack gap={4} px={4} mt={4} mb={10}>
        <Text fontWeight={700}>Colunas:</Text>
        {Object.values(TABLE_LABELS_COLUMN_MAPPER).map((item) => (
          <Checkbox
            isChecked={!hiddenColumns.includes(item)}
            onChange={() => toggleColumn(item)}
          >
            {item}
          </Checkbox>
        ))}
      </HStack>

      <Box p={3} borderWidth="2px" borderRadius="xl">
        <CompactTable
          columns={COLUMNS}
          data={{ ...data, nodes: modifiedNodes }}
          theme={theme}
          layout={{ hiddenColumns }}
          sort={sort}
          pagination={pagination}
        />
      </Box>

      <br />
      <HStack justify="flex-end " align="center">
        <Box sx={{ display: 'flex' }}>
          <Input
            placeholder="Qtd. de itens por página"
            value={pageInput}
            onChange={(ev) => setPageInput(Number(ev.target.value))}
          />
        </Box>
        <Box>
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
        </Box>
      </HStack>
    </Box>
  );
};
