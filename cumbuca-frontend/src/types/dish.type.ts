export type Dish = {
    id: number;
    name: string;
    description: string;
    price: number
    category: string;
    enable: boolean;
    image: File;
    isVegan?: boolean;
    servings?: number;
}


export type CreateDishDto = Omit<Dish, "id"> & {

}