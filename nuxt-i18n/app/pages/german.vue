<template>
  <h1>{{ $t('hello') }}</h1>
  <HelloComponent></HelloComponent>
  <Linechart></Linechart>
</template>

<script setup lang="ts">
import HelloComponent from '~/components/HelloComponent.vue';
import { Linechart } from 'vue-library'

definePageMeta({i18n: {locales: ['de']}})
useI18n();
</script>
