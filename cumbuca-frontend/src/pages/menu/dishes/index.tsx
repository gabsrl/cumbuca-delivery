import {
  Badge,
  Box,
  Button,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  NumberInput,
  NumberInputField,
  Text,
} from '@chakra-ui/react';
import { LuFilter } from 'react-icons/lu';

import { PiBowlFoodFill } from 'react-icons/pi';
import { MdSearch } from 'react-icons/md';

import { FaFilter } from 'react-icons/fa6';

import { DishItem } from '../../../components/dish-item';

import { Dish } from '../../../types/dish.type';
import {
  BRLCurrency,
  isPromo,
  isVegan,
  WeightFormmater,
} from '../../../utils/miscellaneous';
import { BadgeVegan } from '../../../components/badges/vegan-badge';
import { BadgePromo } from '../../../components/badges/promo-badge ';
import { useEffect, useState } from 'react';
import { getAllDishes } from '../../../services/dish.service';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES_MOCK } from '../../../mocks/categories';

export const Dishes = () => {
  const navigateHook = useNavigate();
  const [selectedFilterCategory, setSelectedFilterCategory] =
    useState<string>('');
  const [dishesList, setDishesList] = useState<Dish[]>([]);
  const [filteredDishList, setFilteredDishList] = useState<Dish[]>([]);
  const [searchDish, setSearchDish] = useState('');

  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageInput, setPageInput] = useState(5);

  const listLength = () => Math.ceil(filteredDishList.length / itemsPerPage);
  const isLastPage = () => currentPage + 1 >= listLength();
  const isFirstPage = () => currentPage === 0;

  const nextPage = () => {
    if (isLastPage()) return;
    setCurrentPage((v) => v + 1);
  };

  const previousPage = () => {
    if (isFirstPage()) return;
    setCurrentPage((v) => v - 1);
  };

  const paginateData = (v: Dish[], page: number, size: number) => {
    const start = page * size;
    return v.slice(start, start + size);
  };

  const findByFilters = () => {
    setCurrentPage(0);
    let dishUpdates = dishesList;
    if (selectedFilterCategory !== '')
      dishUpdates = dishesList.filter(
        (dishItem) => dishItem.category === selectedFilterCategory,
      );
    if (searchDish.length !== 0)
      dishUpdates = dishUpdates.filter((dishItem) =>
        dishItem.name.includes(searchDish),
      );

    setFilteredDishList(dishUpdates);
  };

  const navigate = (id: number) => {
    navigateHook('/dish/' + id);
  };

  useEffect(() => {
    getAllDishes().then((dishesData) => {
      const dishesEnabled = dishesData.data.filter((i) => i.enable);
      setDishesList(dishesEnabled);
      setFilteredDishList(dishesEnabled);
    });
  }, []);

  useEffect(() => {
    findByFilters();
  }, [selectedFilterCategory]);

  return (
    <Box
      width={{ sm: '80%', md: '70%', lg: '50%', xl: '60%' }}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'cennter',
        justifyContent: 'center',
      }}
    >
      <Box>
        <HStack spacing={3} my={4}>
          <InputGroup>
            <Input
              borderWidth="2px"
              variant="outline"
              placeholder="Pesquiser por nome de pratos..."
              value={searchDish}
              onChange={(ev) => setSearchDish(ev.target.value)}
            />
            <InputRightAddon>
              <Button onClick={findByFilters} rightIcon={<MdSearch />} />
            </InputRightAddon>
          </InputGroup>

          <Menu>
            <MenuButton aria-label="Botão para exibir filtros de categorias de pratos.">
              {selectedFilterCategory ? <FaFilter /> : <LuFilter />}
            </MenuButton>

            <MenuList>
              <MenuOptionGroup
                type="radio"
                title="Categoria para filtrar"
                onChange={(value) => setSelectedFilterCategory(value as string)}
              >
                <MenuItemOption key={'limpar'} value={''}>
                  Sem filtros aplicados
                </MenuItemOption>
                {CATEGORIES_MOCK.map((itemCat) => (
                  <MenuItemOption key={itemCat} value={itemCat}>
                    {itemCat}
                  </MenuItemOption>
                ))}
              </MenuOptionGroup>
            </MenuList>
          </Menu>
        </HStack>
        {selectedFilterCategory && (
          <Badge borderRadius="lg" p={2} ml={4}>
            Filtro: {selectedFilterCategory}
          </Badge>
        )}

        {paginateData(filteredDishList, currentPage, itemsPerPage).map(
          (item) => (
            <DishItem.Root>
              <DishItem.Body>
                <DishItem.Content>
                  <DishItem.Title onClick={() => navigate(item.id)}>
                    {item.name}
                  </DishItem.Title>
                  <DishItem.Subtitles>
                    <Text fontWeight="600" color="gray.700">
                      {BRLCurrency(item.price)}
                    </Text>{' '}
                    |
                    <Text
                      color="gray.500"
                      display={'flex'}
                      alignItems="center"
                      gap={1}
                    >
                      <PiBowlFoodFill color="" />
                      {WeightFormmater(item.weight).toString()}
                    </Text>
                  </DishItem.Subtitles>
                  <Box>
                    <DishItem.Description>
                      {item.description}
                    </DishItem.Description>
                  </Box>
                </DishItem.Content>
                <DishItem.DetailImage
                  alt=""
                  src={`https://source.unsplash.com/random/?Food&${item.id}`}
                />
              </DishItem.Body>
              <DishItem.PlusInfo>
                {isVegan(item) && <BadgeVegan />}
                {isPromo(item) && <BadgePromo />}
              </DishItem.PlusInfo>
            </DishItem.Root>
          ),
        )}
      </Box>

      <HStack mt={8} mb={4}>
        <Box>
          <NumberInput
            borderWidth="1px"
            value={itemsPerPage}
            onChange={(value) => {
              setItemsPerPage(Number(value ? value : 1));
            }}
            min={1}
          >
            <NumberInputField />
          </NumberInput>
        </Box>

        {!isFirstPage() && (
          <IconButton
            onClick={previousPage}
            aria-label="página anterior"
            icon={<FaChevronLeft />}
          />
        )}

        {Array(Math.round(filteredDishList.length / itemsPerPage))
          .fill(0)
          .map((_, index) => (
            <Button
              onClick={() => setCurrentPage(index)}
              variant={currentPage === index ? 'solid' : 'ghost'}
            >
              {index + 1}
            </Button>
          ))}
        {!isLastPage() && (
          <IconButton
            onClick={nextPage}
            aria-label="próxima página"
            icon={<FaChevronRight />}
          />
        )}
      </HStack>
    </Box>
  );
};
