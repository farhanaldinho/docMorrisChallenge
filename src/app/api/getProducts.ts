import { Product } from '../models/Product'

export const getProducts = (): Product[] => {
	return require('../assets/mock/products.json')
}
