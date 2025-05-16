import {ScreenNavigationProp, ScreenParamList, ScreenRouteProp} from '@navigation/types'
import {isAndroid, isIOS} from '@utils/PlatformUtils'
import React from 'react'

import AppStore from '../store/AppStore'
import CartStore from '../store/CartStore'

export interface ScreenProps {
    navigation?: ScreenNavigationProp<ScreenParamList<'Screen'>>
    route?: ScreenRouteProp<ScreenParamList<'Screen'>>
    item?: ScreenRouteProp<ScreenParamList<'Screen'>>
    isProductWithPrescription?: ScreenRouteProp<ScreenParamList<'Screen'>>
}

class Screen extends React.Component<ScreenProps> {
    constructor(props: ScreenProps) {
        super(props)
    }

    get product() {
        return {}
    }

    get cartStore() {
        return CartStore
    }

    get appStore() {
        return AppStore
    }

    get isIos() {
        return isIOS
    }

    get isAndroid() {
        return isAndroid
    }

}

export default Screen
