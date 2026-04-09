<template>
  <h1>{{ $t('hello') }}</h1>
  <HelloComponent></HelloComponent>
</template>

<script setup lang="ts">
import HelloComponent from '~/components/HelloComponent.vue';

definePageMeta({i18n: {locales: ['de']}})
useI18n();
</script>