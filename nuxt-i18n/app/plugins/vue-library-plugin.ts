import {setLibraryLocale} from "vue-library";

export default defineNuxtPlugin((nuxtApp) => {
    setLibraryLocale(useNuxtApp().$i18n.locale.value);
    nuxtApp.hook('i18n:localeSwitched', ({ newLocale }) => {
        setLibraryLocale(newLocale);
    });
});