import type { Preview } from '@storybook/react';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { initialize, mswLoader } from 'msw-storybook-addon';

initialize();

import '../src/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByDataAttribute({
      defaultTheme: 'light',
      themes: {
        light: 'light',
        dark: 'dark',
      },
      attributeName: 'data-mode',
    }),
  ],
  loaders: [mswLoader],
};

export default preview;
