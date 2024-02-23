import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  RadioGroup,
  Stack,
  Radio,
  Select,
} from '@chakra-ui/react';
import { CreateDishDto } from '../../../types/dish.type';
import { ADD_DISH_SCHEMA } from './add-dish.yup';
import { CATEGORIES_MOCK } from '../../../mocks/categories';

type DishFormProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: SubmitHandler<CreateDishDto>;
};

const schema = ADD_DISH_SCHEMA;

export const DishFormModal = ({ isOpen, onClose, onSubmit }: DishFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateDishDto>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Cadastrar Prato</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <FormControl isInvalid={!!errors.name}>
              <FormLabel>Nome</FormLabel>
              <Controller
                name="name"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
              <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.description}>
              <FormLabel>Descrição</FormLabel>
              <Controller
                name="description"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
              <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.price}>
              <FormLabel>Preço</FormLabel>
              <Controller
                name="price"
                control={control}
                render={({ field }) => <Input {...field} type="number" />}
              />
              <FormErrorMessage>{errors.price?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.category}>
              <FormLabel>Categoria</FormLabel>
              <Controller
                name="category"
                control={control}
                render={({ field }) => (
                  <Select {...field}>
                    {CATEGORIES_MOCK.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </Select>
                )}
              />
              <FormErrorMessage>{errors.category?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.isVegan}>
              <FormLabel>Ativar</FormLabel>
              <Controller
                name="enable"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <RadioGroup onChange={onChange} value={value}>
                    <Stack direction="row">
                      <Radio value="1">Sim</Radio>
                      <Radio value="0">Não</Radio>
                    </Stack>
                  </RadioGroup>
                )}
              />
              <FormErrorMessage>{errors.isVegan?.message}</FormErrorMessage>
            </FormControl>

            {/* Input for image upload would go here */}

            <FormControl isInvalid={!!errors.isVegan}>
              <FormLabel>Vegano</FormLabel>
              <Controller
                name="isVegan"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <RadioGroup onChange={onChange} value={value}>
                    <Stack direction="row">
                      <Radio value="1">Sim</Radio>
                      <Radio value="0">Não</Radio>
                    </Stack>
                  </RadioGroup>
                )}
              />
              <FormErrorMessage>{errors.isVegan?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.servings}>
              <FormLabel>Porções</FormLabel>
              <Controller
                name="servings"
                control={control}
                render={({ field }) => <Input {...field} type="number" />}
              />
              <FormErrorMessage>{errors.servings?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.weight}>
              <FormLabel>Peso</FormLabel>
              <Controller
                name="weight"
                control={control}
                render={({ field }) => <Input {...field} type="number" />}
              />
              <FormErrorMessage>{errors.weight?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.nutrition?.totalCalories}>
              <FormLabel>Calorias Totais</FormLabel>
              <Controller
                name="nutrition.totalCalories"
                control={control}
                render={({ field }) => <Input {...field} type="number" />}
              />
              <FormErrorMessage>
                {errors.nutrition?.totalCalories?.message}
              </FormErrorMessage>
            </FormControl>

            {/* Repeat for other nutrition fields */}

            <FormControl isInvalid={!!errors.allergens}>
              <FormLabel>Alergênios</FormLabel>
              <Controller
                name="allergens"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
              <FormErrorMessage>{errors.allergens?.message}</FormErrorMessage>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} type="submit">
              Salvar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default DishFormModal;
