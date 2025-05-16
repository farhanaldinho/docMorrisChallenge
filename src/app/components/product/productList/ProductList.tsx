import EmptyList from '@components/EmptyList'
import ProductListItem from '@components/product/productListItem/ProductListItem'
import Separator from '@components/Separator'
import {t} from 'i18next'
import React from 'react'
import {ActivityIndicator, FlatList, Text, View} from 'react-native'

import {theme} from '../../../assets/themes/ThemeProvider'
import {Product} from '../../../models/Product'
import styles from './styles'

const ProductList: React.FC<{
    productList: Product[]
    onProductItemClick: (product: Product | undefined) => void
    loading: boolean
    isListEndReached: boolean
    getData: () => void
}> = ({
          productList,
          onProductItemClick,
          loading,
          isListEndReached,
          getData
      }) => {

    const renderProductListItem = ({item}: { item: Product }) => (
        <ProductListItem item={item} onClick={onProductItemClick}/>
    )

    const renderSeparator = () => <Separator/>

    const renderProductListHeader = () => {
        const numberOfResults = productList.length > 0 ? productList?.length : null

        return numberOfResults ? (
            <View>
                <View style={styles.searchResultsContainer}>
                    <Text style={styles.searchResults}>{numberOfResults} {t('results')}</Text>
                </View>
                {renderSeparator()}
            </View>
        ) : <></>
    }

    const renderFooter = () => {
        if (!loading) {
            return null
        }

        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color={theme.colors.brandTertiary}/>
            </View>
        )
    }

    const renderEmptyList = () => !loading ? (
        <EmptyList/>
    ) : <></>

    const onEndReached = () => !isListEndReached && getData()

    return (
        <FlatList
            stickyHeaderIndices={[0]}
            data={productList}
            renderItem={renderProductListItem}
            ListHeaderComponent={renderProductListHeader}
            ListFooterComponent={renderFooter}
            ItemSeparatorComponent={renderSeparator}
            ListEmptyComponent={renderEmptyList}
            onEndReached={onEndReached}
            onEndReachedThreshold={0.1}
            keyExtractor={(item, index) => item?.code + '' + index.toString()}
        />
    )
}

export default ProductList


