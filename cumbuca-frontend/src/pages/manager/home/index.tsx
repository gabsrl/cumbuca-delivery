import DishFormModal from '../add-dish-modal';
import { useEffect, useState } from 'react';

import { CompactTable } from '@table-library/react-table-library/compact';
import { useTheme } from '@table-library/react-table-library/theme';
import {
  DEFAULT_OPTIONS,
  getTheme,
} from '@table-library/react-table-library/chakra-ui';

import { useSort } from '@table-library/react-table-library/sort';
import { usePagination } from '@table-library/react-table-library/pagination';

import {
  Box,
  HStack,
  InputGroup,
  InputLeftElement,
  Input,
  IconButton,
  Button,
  useToast,
} from '@chakra-ui/react';
import {
  FaSearch,
  FaChevronRight,
  FaChevronDown,
  FaChevronUp,
  FaChevronLeft,
} from 'react-icons/fa';
import { CreateDishDto, Dish } from '../../../types/dish.type';
import { MdOutlineAdd } from 'react-icons/md';
import { COLUMNS_DISHES, COLUMNS_NAME, SortKeys } from './table-helpers';
import {
  createDish,
  getAllDishes,
  updateDish,
} from '../../../services/dish.service';
import { MenuFilterColumns } from './menu-table-columns';

export const Home = () => {
  const toastChakraHook = useToast();

  const [data, setData] = useState<{ nodes: Dish[] }>({ nodes: [] });
  const [pageInput, setPageInput] = useState(5);

  const [isOpenAddDish, setIsOpenAddDish] = useState(false);
  const [concreteColumns, setConcreteColumns] = useState(COLUMNS_NAME);

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

  const theme = useTheme([
    chakraTheme,
    {
      Table: `
      --data-table-library_grid-template-columns:  64px repeat(5, minmax(0, 1fr));

      margin: 16px 0px;
    `,
    },
  ]);

  const pagination = usePagination(data, {
    state: {
      page: 0,
      size: pageInput,
    },
  });

  const [search, setSearch] = useState('');

  const handleActive = async (id: number, payload: Dish) => {
    try {
      await updateDish(id, payload);
      await loadDishes();
      toastChakraHook({
        title: 'Prato atualizado',
        description: `O prato foi atualizado`,
        status: 'success',
      });
    } catch (err) {
      toastChakraHook({
        title: 'Erro',
        description: `Ocorreu um erro ao atualizar o prato`,
        status: 'success',
      });
    }
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

  const COLUMNS = COLUMNS_DISHES(concreteColumns, handleActive);

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
    <Box p={8}>
      <DishFormModal
        isOpen={isOpenAddDish}
        onClose={() => setIsOpenAddDish(false)}
        onSubmit={addNewDish}
      />

      <HStack w="100%" justifyContent="center" mb={8}>
        <InputGroup w="50%">
          <InputLeftElement
            pointerEvents="none"
            children={<FaSearch style={{ color: '#4a5568' }} />}
          />
          <Input
            placeholder="Procure por nome de pratos"
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
        <MenuFilterColumns
          columns={concreteColumns}
          setColumns={setConcreteColumns}
        />
      </HStack>

      <Box p={3} borderWidth="2px" borderRadius="xl">
        <CompactTable
          columns={COLUMNS}
          data={{ ...data, nodes: modifiedNodes }}
          theme={theme}
          layout={{ concreteColumns }}
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
