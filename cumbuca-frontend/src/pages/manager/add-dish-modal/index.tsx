import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
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
  Grid,
  GridItem,
  Box,
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
            <Grid templateColumns="repeat(3, 1fr)" gap={4}>
              <GridItem>
                <FormControl isInvalid={!!errors.name}>
                  <FormLabel>Nome</FormLabel>
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => <Input {...field} />}
                  />
                  <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl isInvalid={!!errors.description}>
                  <FormLabel>Descrição</FormLabel>
                  <Controller
                    name="description"
                    control={control}
                    render={({ field }) => <Input {...field} />}
                  />
                  <FormErrorMessage>
                    {errors.description?.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl isInvalid={!!errors.price}>
                  <FormLabel>Preço</FormLabel>
                  <Controller
                    name="price"
                    control={control}
                    render={({ field }) => <Input {...field} type="number" />}
                  />
                  <FormErrorMessage>{errors.price?.message}</FormErrorMessage>
                </FormControl>
              </GridItem>

              <GridItem>
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
                  <FormErrorMessage>
                    {errors.category?.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl isInvalid={!!errors.servings}>
                  <FormLabel>Porções (g)</FormLabel>
                  <Controller
                    name="servings"
                    control={control}
                    render={({ field }) => <Input {...field} type="number" />}
                  />
                  <FormErrorMessage>
                    {errors.servings?.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl isInvalid={!!errors.weight}>
                  <FormLabel>Peso (g)</FormLabel>
                  <Controller
                    name="weight"
                    control={control}
                    render={({ field }) => <Input {...field} type="number" />}
                  />
                  <FormErrorMessage>{errors.weight?.message}</FormErrorMessage>
                </FormControl>
              </GridItem>
            </Grid>

            <Grid templateColumns="repeat(3, 1fr)" gap={4} mt={8}>
              <GridItem>
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
              </GridItem>

              <GridItem>
                <FormControl isInvalid={!!errors.nutrition?.fatCalories}>
                  <FormLabel>Calorias de Gordura</FormLabel>
                  <Controller
                    name="nutrition.fatCalories"
                    control={control}
                    render={({ field }) => <Input {...field} type="number" />}
                  />
                  <FormErrorMessage>
                    {errors.nutrition?.fatCalories?.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>

              <GridItem>
                <FormControl isInvalid={!!errors.nutrition?.totalFat}>
                  <FormLabel>Gorduras Totais (g)</FormLabel>
                  <Controller
                    name="nutrition.totalFat"
                    control={control}
                    render={({ field }) => <Input {...field} type="number" />}
                  />
                  <FormErrorMessage>
                    {errors.nutrition?.totalFat?.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>

              <GridItem>
                <FormControl isInvalid={!!errors.nutrition?.saturatedFat}>
                  <FormLabel>Gorduras Sat. (g)</FormLabel>
                  <Controller
                    name="nutrition.saturatedFat"
                    control={control}
                    render={({ field }) => <Input {...field} type="number" />}
                  />
                  <FormErrorMessage>
                    {errors.nutrition?.saturatedFat?.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>

              <GridItem>
                <FormControl isInvalid={!!errors.nutrition?.transFat}>
                  <FormLabel>Gorduras Trans (g)</FormLabel>
                  <Controller
                    name="nutrition.transFat"
                    control={control}
                    render={({ field }) => <Input {...field} type="number" />}
                  />
                  <FormErrorMessage>
                    {errors.nutrition?.transFat?.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl isInvalid={!!errors.nutrition?.sugar}>
                  <FormLabel>Açucar (g)</FormLabel>
                  <Controller
                    name="nutrition.sugar"
                    control={control}
                    render={({ field }) => <Input {...field} type="number" />}
                  />
                  <FormErrorMessage>
                    {errors.nutrition?.sugar?.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>
            </Grid>

            <Grid templateColumns="repeat(2, 1fr)" gap={4} mt={8}>
              <GridItem>
                <FormControl isInvalid={!!errors.allergens}>
                  <FormLabel>Alergênios</FormLabel>
                  <Controller
                    name="allergens"
                    control={control}
                    render={({ field }) => <Input {...field} />}
                  />
                  <FormErrorMessage>
                    {errors.allergens?.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl isInvalid={!!errors.image}>
                  <FormLabel>Imagem</FormLabel>
                  <Controller
                    name="image"
                    control={control}
                    render={({ field }) => <Input {...field} />}
                  />
                  <FormErrorMessage>
                    {errors.allergens?.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem></GridItem>
            </Grid>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
              }}
              mt={2}
            >
              <FormControl isInvalid={!!errors.enable}>
                <FormLabel>Ativo</FormLabel>
                <Controller
                  name="enable"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <RadioGroup
                      onChange={onChange}
                      value={value}
                      defaultValue="1"
                    >
                      <Stack direction="row">
                        <Radio value="1">Sim</Radio>
                        <Radio value="0">Não</Radio>
                      </Stack>
                    </RadioGroup>
                  )}
                />
                <FormErrorMessage>{errors.enable?.message}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.isVegan}>
                <FormLabel>Vegano</FormLabel>
                <Controller
                  name="isVegan"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <RadioGroup
                      onChange={onChange}
                      value={value}
                      defaultValue="0"
                    >
                      <Stack direction="row">
                        <Radio value="1">Sim</Radio>
                        <Radio value="0">Não</Radio>
                      </Stack>
                    </RadioGroup>
                  )}
                />
                <FormErrorMessage>{errors.isVegan?.message}</FormErrorMessage>
              </FormControl>
            </Box>
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
