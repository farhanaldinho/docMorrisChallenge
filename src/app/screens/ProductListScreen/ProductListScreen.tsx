import ProductList from '@components/product/productList/ProductList'
import ProductSearchInput from '@components/product/productSearchInput/ProductSearchInput'
import {ScreenNavigationProp, ScreenParamList, ScreenRouteProp} from '@navigation/types'
import debounce from 'lodash.debounce'
import {observer} from 'mobx-react'
import React, {useState} from 'react'
import {SafeAreaView} from 'react-native'

import {getProducts} from '../../api/getProducts'
import {Product} from '../../models/Product'
import AppStore from '../../store/AppStore'
import styles from './styles'

export type ProductListScreenParamList = ScreenParamList<'ProductListScreen'>

interface ProductListScreenProps {
    navigation: ScreenNavigationProp<ProductListScreenParamList>
    route: ScreenRouteProp<ProductListScreenParamList>
}

interface ProductListScreenState {
    data: Product[]
    keyword: string
    currentPage: number
    loading: boolean
    isListEndReached: boolean
    isLanguageChanged: boolean
}

class ProductListScreen extends React.Component<ProductListScreenProps, ProductListScreenState> {

    constructor(props: ProductListScreenProps) {
        super(props)
        this.state = {
            data: [],
            keyword: '',
            currentPage: 1,
            loading: false,
            isListEndReached: false,
            isLanguageChanged: AppStore.isLanguageChanged,
        }

        this.onChangeText = debounce(this.onChangeText, 600)
    }

    handleLanguageChange = () => {
        AppStore.updateLanguage(this.state.isLanguageChanged ? 'de' : 'en')
        this.setState({isLanguageChanged: !this.state.isLanguageChanged})
    }

    componentDidMount() {
        this.getData()
    }

    filterProducts = () => {
        return getProducts().filter(item =>
            item?.productName?.toLowerCase().includes(this.state.keyword.toLowerCase())
        )
    }

    currentProducts = () => {
        const pageSize = 10
        const startIndex = (this.state.currentPage - 1) * pageSize
        const endIndex = startIndex + pageSize

        return this.filterProducts().slice(startIndex, endIndex)
    }

    getData = () => {
        this.setState({loading: true})
        setTimeout(() => {
            this.setState(prevState => ({
                loading: false,
                data: prevState.data.concat(this.currentProducts()),
                currentPage: prevState.currentPage + 1,
                isListEndReached: this.currentProducts().length < 10
            }))
        }, 1000)
    }

    onChangeText = (value: string) => {
        this.setState({keyword: value, data: [], currentPage: 1}, () => {
            this.getData()
        })
    }

    renderSearchInputContainer() {
        return (
            <ProductSearchInput handleLanguageChange={this.handleLanguageChange} onChangeText={this.onChangeText}/>
        )
    }

    onProductItemClick = (product: Product | undefined) => {
        this.props.navigation.navigate('ProductDetailScreen', {product})
    }

    renderProductList = () => {
        const {data, isListEndReached, loading} = this.state

        return (
            <ProductList
                getData={this.getData}
                isListEndReached={isListEndReached}
                loading={loading} productList={data}
                onProductItemClick={this.onProductItemClick}
            />
        )
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                {this.renderSearchInputContainer()}
                {this.renderProductList()}
            </SafeAreaView>
        )
    }
}

export default observer(ProductListScreen)
