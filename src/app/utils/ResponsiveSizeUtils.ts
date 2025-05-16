import {Dimensions} from 'react-native'

const designWidth = 375 // design width
const designHeight = 937 // design height

const {width, height} = Dimensions.get('window')

export const size = (size: number) => {
    const widthRatio = width / designWidth
    const heightRatio = height / designHeight
    const ratio = Math.min(widthRatio, heightRatio) // to stay within bounds

    return Math.ceil(size * ratio)
}

const ResponsiveSizeUtils = {
    size
}

export default ResponsiveSizeUtils
