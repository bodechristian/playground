import {setLibraryLocale} from "vue-library";
import type {Composer} from "vue-i18n";

export default defineNuxtPlugin((nuxtApp) => {
  const i18n = nuxtApp.$i18n as Composer
  const locale = i18n.locale

  watch(locale, (newLocale) => {
    setLibraryLocale(newLocale)
  }, { immediate: true });
});
