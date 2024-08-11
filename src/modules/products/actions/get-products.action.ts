import { tesloApi } from '@/api/tesloApi';
import type { Product } from '../interfaces/product.interface';

// Obtener los productos
export const getProductsAction = async (page: number = 1, limit: number = 10) => {
  try {
    const { data } = await tesloApi.get<Product[]>(
      `/products?limit=${limit}&offset=${page * limit}`,
    );

    console.log('data:', data);

    return data;
  } catch (error) {
    console.log(error);
    throw new Error('Error getting products');
  }
};
