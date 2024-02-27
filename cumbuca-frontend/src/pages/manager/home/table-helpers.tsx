/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dish } from '../../../types/dish.type';
import { Stack, Switch } from '@chakra-ui/react';
import { TrueOrFalse } from '../../../types/miscellaneous.types';

interface ISwitchEnableProps {
  status: Dish;
  onChange: (value: Dish) => void;
}
export const SwitchEnable = ({ status, onChange }: ISwitchEnableProps) => {
  return (
    <Stack alignItems="center" direction="row">
      <Switch
        isChecked={status.enable === '1'}
        value={status.enable}
        onChange={({ target }) =>
          onChange(
            (target.value as TrueOrFalse) === '1'
              ? { ...status, enable: '0' }
              : { ...status, enable: '1' },
          )
        }
      />
    </Stack>
  );
};

export const TABLE_LABELS_COLUMN_MAPPER = {
  name: 'Nome',
  description: 'Descrição',
  price: 'Preço',
  active: 'Ativo',
  category: 'Categoria',
  portion: 'Porção(g)',
  vegan: 'Vegano',
  serving: 'Serve',
  totalCalories: 'Cal. Totais',
  fatCalories: 'Cal. de Gordura',
  totalFat: 'Gorduras Totais(g)',
  saturatedFat: 'Gorduras Saturadas(g)',
  transFat: 'Gorduras Trans(g)',
  sugar: 'Açúcar',
};

export const SortKeys = {
  NAME: {
    column: 'NAME',
    sort: (items: Dish[] | any[]) =>
      items.sort((a, b) => a.name.localeCompare(b.name)),
  },
  PRICE: {
    column: 'PRICE',
    sort: (items: any[]) => items.sort((a, b) => a.price - b.price),
  },
  ACTIVE: {
    column: 'ACTIVE',
    sort: (items: any[]) =>
      items.sort((a, b) => a.enable.localeCompare(b.enable)),
  },
  CATEGORY: {
    column: 'CATEGORY',
    sort: (items: any[]) =>
      items.sort((a, b) => a.category.localeCompare(b.name)),
  },
  PORTION: {
    column: 'PORTION',
    sort: (items: any[]) => items.sort((a, b) => a.weight - b.weight),
  },
  VEGAN: {
    column: 'VEGAN',
    sort: (items: any[]) =>
      items.sort((a, b) => a.isVegan.localeCompare(b.isVegan)),
  },
  TOTAL_CALORIES: {
    column: 'TOTAL_CALORIES',
    sort: (items: any[]) =>
      items.sort(
        (a, b) => a.nutrition.totalCalories - b.nutrition.totalCalories,
      ),
  },
  FAT_CALORIES: {
    column: 'FAT_CALORIES',
    sort: (items: any[]) =>
      items.sort((a, b) => a.nutrition.fatCalories - b.nutrition.fatCalories),
  },
  TOTAL_FAT: {
    column: 'TOTAL_FAT',
    sort: (items: any[]) =>
      items.sort((a, b) => a.nutrition.totalFat - b.nutrition.totalFat),
  },
  SATURATED_FAT: {
    column: 'SATURATED_FAT',
    sort: (items: any[]) =>
      items.sort((a, b) => a.nutrition.saturatedFat - b.nutrition.saturatedFat),
  },
  TRANS_FAT: {
    column: 'TRANS_FAT',
    sort: (items: any[]) =>
      items.sort((a, b) => a.nutrition.transFat - b.nutrition.transFat),
  },
  SUGAR: {
    column: 'SUGAR',
    sort: (items: any[]) =>
      items.sort((a, b) => a.nutrition.sugar - b.nutrition.sugar),
  },
};

export const COLUMNS_DISHES = (
  displayingColumns: string[],
  handleActive: (dishId: number, updateStatus: Dish) => Promise<void>,
) => {
  return [
    {
      label: TABLE_LABELS_COLUMN_MAPPER.name,
      hide: !displayingColumns.includes(TABLE_LABELS_COLUMN_MAPPER.name),
      renderCell: (item: Dish) => item.name,
      sort: { sortKey: SortKeys.NAME },
    },
    {
      label: TABLE_LABELS_COLUMN_MAPPER.description,
      hide: !displayingColumns.includes(TABLE_LABELS_COLUMN_MAPPER.description),
      renderCell: (item: Dish) => item.description,
    },
    {
      label: TABLE_LABELS_COLUMN_MAPPER.price,
      hide: !displayingColumns.includes(TABLE_LABELS_COLUMN_MAPPER.price),
      renderCell: (item: Dish) => item.price.toFixed(2),
      sort: { sortKey: SortKeys.PRICE.column },
    },

    {
      label: TABLE_LABELS_COLUMN_MAPPER.active,
      hide: !displayingColumns.includes(TABLE_LABELS_COLUMN_MAPPER.active),
      renderCell: (item: Dish) => (
        <SwitchEnable
          status={item}
          onChange={(v) => handleActive(item.id, v)}
        />
      ),
      sort: { sortKey: SortKeys.ACTIVE.column },
    },

    {
      label: TABLE_LABELS_COLUMN_MAPPER.category,
      hide: !displayingColumns.includes(TABLE_LABELS_COLUMN_MAPPER.category),
      renderCell: (item: Dish) => item.category,
      sort: { sortKey: SortKeys.CATEGORY.column },
    },
    {
      label: TABLE_LABELS_COLUMN_MAPPER.portion,
      hide: !displayingColumns.includes(TABLE_LABELS_COLUMN_MAPPER.portion),
      renderCell: (item: Dish) => item.weight,
      sort: { sortKey: SortKeys.PORTION.column },
    },
    {
      label: TABLE_LABELS_COLUMN_MAPPER.vegan,
      hide: !displayingColumns.includes(TABLE_LABELS_COLUMN_MAPPER.vegan),
      renderCell: (item: Dish) => (item.isVegan ? 'Sim' : 'Não'),
      sort: { sortKey: SortKeys.VEGAN.column },
    },
    {
      label: TABLE_LABELS_COLUMN_MAPPER.serving,
      hide: !displayingColumns.includes(TABLE_LABELS_COLUMN_MAPPER.serving),
      renderCell: (item: Dish) => `${item.servings} pessoa(s)`,
    },
    {
      label: TABLE_LABELS_COLUMN_MAPPER.totalCalories,
      hide: !displayingColumns.includes(
        TABLE_LABELS_COLUMN_MAPPER.totalCalories,
      ),
      renderCell: (item: Dish) => item.nutrition.totalCalories,
      sort: { sortKey: SortKeys.TOTAL_CALORIES.column },
    },
    {
      label: TABLE_LABELS_COLUMN_MAPPER.fatCalories,
      hide: !displayingColumns.includes(TABLE_LABELS_COLUMN_MAPPER.fatCalories),
      renderCell: (item: Dish) => item.nutrition.fatCalories,
      sort: { sortKey: SortKeys.FAT_CALORIES.column },
    },
    {
      label: TABLE_LABELS_COLUMN_MAPPER.totalFat,
      hide: !displayingColumns.includes(TABLE_LABELS_COLUMN_MAPPER.totalFat),
      renderCell: (item: Dish) => item.nutrition.totalFat,
      sort: { sortKey: SortKeys.TOTAL_FAT.column },
    },
    {
      label: TABLE_LABELS_COLUMN_MAPPER.saturatedFat,
      hide: TABLE_LABELS_COLUMN_MAPPER.saturatedFat,
      renderCell: (item: Dish) => item.nutrition.saturatedFat,
      sort: { sortKey: SortKeys.SATURATED_FAT.column },
    },
    {
      label: TABLE_LABELS_COLUMN_MAPPER.transFat,
      hide: !displayingColumns.includes(TABLE_LABELS_COLUMN_MAPPER.transFat),
      renderCell: (item: Dish) => item.nutrition.transFat,
      sort: { sortKey: SortKeys.TRANS_FAT.column },
    },
    {
      label: TABLE_LABELS_COLUMN_MAPPER.sugar,
      hide: !displayingColumns.includes(TABLE_LABELS_COLUMN_MAPPER.sugar),
      renderCell: (item: Dish) => item.nutrition.sugar,
      sort: { sortKey: SortKeys.SUGAR.column },
    },
  ];
};

export const COLUMNS_NAME = Object.values(TABLE_LABELS_COLUMN_MAPPER);
