import { store } from 'react-easy-state';

const config = store({
  theme: 'mirror', // TODO: pre-fill from list
  set currentTheme(name) {
    // TODO: grab from themes
  },
  get themeAttrs() {
    return { isApple: true };
  }
});

export default config;
