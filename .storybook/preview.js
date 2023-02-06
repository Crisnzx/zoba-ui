import "../src/styles/reset.scss";
import "../src/components/accordion/styles.scss";
import "../src/components/alert/styles.scss";
import "../src/components/button/styles.scss";
import "../src/components/carousel/styles.scss";
import "../src/components/countdown/styles.scss";
import "../src/components/text/styles.scss";
import "../src/components/form-components/switch/styles.scss";
import "../src/components/form-components/inputs/autocomplete/styles.scss";
import "../src/components/form-components/inputs/input/styles.scss";
import "../src/components/form-components/inputs/pin-input/styles.scss";
import "../src/components/form-components/inputs/textarea/styles.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
