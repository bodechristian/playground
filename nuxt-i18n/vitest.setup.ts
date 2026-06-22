import i18nConfig from './i18n/i18n.config';
import { createI18n } from 'vue-i18n';
import { config } from '@vue/test-utils';

export const testI18n = createI18n({
  ...i18nConfig(),
});

config.global.plugins.push(testI18n);
