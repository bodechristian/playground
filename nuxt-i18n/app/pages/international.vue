<template>
  <h1>{{ $t('hello') }}</h1>
  <LibraryComponent></LibraryComponent>
  <button @click="switchLibLang">
    switch library lang
  </button>
  <button @click="switchLang">
    switch library lang
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
