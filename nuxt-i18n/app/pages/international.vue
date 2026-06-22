<template>
  <h1 data-testid="main-heading">{{ $t('hello') }}</h1>
  <LibraryComponent data-testid="lib-component"></LibraryComponent>
  <button data-testid="switchLang__lib" @click="switchLibLang">
    switch library lang
  </button>
  <button data-testid="switchLang__fe" @click="switchLang">
    switch frontend lang
  </button>
</template>

<script setup lang="ts">
import {LibraryComponent, setLibraryLocale, useLibraryI18n} from 'vue-library'

const { locale, locales, setLocale } = useI18n();
const { locale: libLocale } = useLibraryI18n();

const switchLibLang = () => {
  setLibraryLocale(locales.value.find((l) => l.code !== libLocale.value)?.code ?? 'de');
}

const switchLang = () => {
  setLocale(locales.value.find((l) => l.code !== locale.value)?.code ?? 'de');
}
</script>
