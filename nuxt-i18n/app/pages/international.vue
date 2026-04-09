<template>
  <h1>{{ $t('hello') }}</h1>
  <LibraryComponent></LibraryComponent>
</template>

<script setup lang="ts">
import {LibraryComponent} from 'vue-library'

useI18n();
</script>