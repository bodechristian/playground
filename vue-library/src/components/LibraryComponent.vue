<template>
  <h1>{{ t('hello') }}</h1>
</template>

<script setup lang="ts">
import {useLibraryI18n} from "@/i18n/libraryI18n";

const { t } = useLibraryI18n()
</script>
