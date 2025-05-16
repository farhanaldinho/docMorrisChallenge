import {action, makeObservable, observable} from 'mobx'

import i18next from '../assets/locales/I18next/i18next'

class AppStore {
    currentLanguage: string = i18next.language
    isLanguageChanged: boolean = false

    constructor() {
        makeObservable(this, {
            currentLanguage: observable,
            isLanguageChanged: observable,
            updateLanguage: action
        }, {autoBind: true})
    }

    updateLanguage = (lng: string) => {
        this.currentLanguage = lng
        this.isLanguageChanged = !this.isLanguageChanged
        i18next.changeLanguage(lng)
    }
}

const appStore = new AppStore()
export default appStore
