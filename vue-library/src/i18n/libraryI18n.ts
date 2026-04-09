import {createI18n} from "vue-i18n";

const messages = {
    de: {
        hello: 'Hallo aus der Bibliothek!',
    },
    en: {
        hello: 'Hello from the library!',
    }
}

type LibraryLocale = keyof typeof messages;

const libraryI18n = createI18n({
    legacy: false,
    globalInjection: false,
    locale: 'en',
    messages: messages
})

export function useLibraryI18n() {
    return libraryI18n.global
}

export function setLibraryLocale(locale: LibraryLocale) {
    libraryI18n.global.locale.value = locale
}