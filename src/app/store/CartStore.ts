import {action, makeObservable, observable} from 'mobx'

import {Product} from '../models/Product'

class CartStore {
    cartItems: Product[] = []
    cartItemsWithPrescription: Product[] = []
    cartItemsWithoutPrescription: Product[] = []
    productQuantities: { [code: string]: number } = {}

    constructor() {
        makeObservable(this, {
            cartItems: observable,
            cartItemsWithPrescription: observable,
            cartItemsWithoutPrescription: observable,
            productQuantities: observable,
            addItemToCart: action,
            removeItemFromCart: action,
            totalPrice: action
        }, {autoBind: true})
    }

    addItemToCart = (product: Product, isProductWithPrescription: boolean) => {
        // Add item to the cart
        this.cartItems.push(product)

        if (isProductWithPrescription) {
            this.cartItemsWithPrescription.push(product)
        } else {
            this.cartItemsWithoutPrescription.push(product)
        }

        this.incrementProductQuantity(product?.code)
    }

    removeItemFromCart = (productCode: string) => {
        // Remove items from the cart
        this.removeItem(this.cartItems, productCode)
        this.removeItem(this.cartItemsWithPrescription, productCode)
        this.removeItem(this.cartItemsWithoutPrescription, productCode)

        this.decrementProductQuantity(productCode)
    }

    removeItem = (list: Product[], productCode: string) => {
        const indexWithPrescription = list.findIndex(item => item.code === productCode)

        if (indexWithPrescription !== -1) {
            list.splice(indexWithPrescription, 1)
            return
        }
    }

    decrementProductQuantity = (productCode: string) => {
        if (this.productQuantities[productCode]) {
            this.productQuantities[productCode] -= 1

            if (this.productQuantities[productCode] <= 0) {
                delete this.productQuantities[productCode]
            }
        }
    }

    incrementProductQuantity = (productCode: string) => {
        if (!this.productQuantities[productCode]) {
            this.productQuantities[productCode] = 0
        }

        this.productQuantities[productCode] += 1
    }

    totalPrice = () => {
        return this.cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)
    }
}

const cartStore = new CartStore()
export default cartStore
