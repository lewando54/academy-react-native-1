/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
  clearDecorators,
} from "@storybook/react-native";

global.STORIES = [
  {
    titlePrefix: "",
    directory: "./src/components",
    files: "**/*.stories.?(ts|tsx|js|jsx)",
    importPathMatcher:
      "^\\.[\\\\/](?:src[\\\\/]components(?:[\\\\/](?!\\.)(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/]|[\\\\/]|$)(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(?:ts|tsx|js|jsx)?)$",
  },
];

import "@storybook/addon-ondevice-controls/register";
import "@storybook/addon-ondevice-actions/register";

import { argsEnhancers } from "@storybook/addon-actions/dist/modern/preset/addArgs";

import { decorators, parameters } from "./preview";

if (decorators) {
  if (__DEV__) {
    // stops the warning from showing on every HMR
    require("react-native").LogBox.ignoreLogs([
      "`clearDecorators` is deprecated and will be removed in Storybook 7.0",
    ]);
  }
  // workaround for global decorators getting infinitely applied on HMR, see https://github.com/storybookjs/react-native/issues/185
  clearDecorators();
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

try {
  argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));
} catch {}

const getStories = () => {
  return {
    "./src/components/atoms/Button/Button.stories.tsx": require("../src/components/atoms/Button/Button.stories.tsx"),
    "./src/components/atoms/Checkbox/Checkbox.stories.tsx": require("../src/components/atoms/Checkbox/Checkbox.stories.tsx"),
    "./src/components/atoms/Divider/Divider.stories.tsx": require("../src/components/atoms/Divider/Divider.stories.tsx"),
    "./src/components/atoms/Heading/Heading.stories.tsx": require("../src/components/atoms/Heading/Heading.stories.tsx"),
    "./src/components/atoms/SocialButton/SocialButton.stories.tsx": require("../src/components/atoms/SocialButton/SocialButton.stories.tsx"),
    "./src/components/atoms/TextInputField/TextInputField.stories.tsx": require("../src/components/atoms/TextInputField/TextInputField.stories.tsx"),
    "./src/components/atoms/TextWithLink/TextWithLink.stories.tsx": require("../src/components/atoms/TextWithLink/TextWithLink.stories.tsx"),
    "./src/components/molecules/CheckboxWithLabel/CheckboxWithLabel.stories.tsx": require("../src/components/molecules/CheckboxWithLabel/CheckboxWithLabel.stories.tsx"),
    "./src/components/molecules/InputWithLabel/InputWithLabel.stories.tsx": require("../src/components/molecules/InputWithLabel/InputWithLabel.stories.tsx"),
    "./src/components/molecules/SocialButtonList/SocialButtonList.stories.tsx": require("../src/components/molecules/SocialButtonList/SocialButtonList.stories.tsx"),
    "./src/components/organisms/LoginForm/LoginForm.stories.tsx": require("../src/components/organisms/LoginForm/LoginForm.stories.tsx"),
    "./src/components/organisms/RegisterForm/RegisterForm.stories.tsx": require("../src/components/organisms/RegisterForm/RegisterForm.stories.tsx"),
    "./src/components/templates/LoginTemplate/LoginTemplate.stories.tsx": require("../src/components/templates/LoginTemplate/LoginTemplate.stories.tsx"),
    "./src/components/templates/RegisterTemplate/RegisterTemplate.stories.tsx": require("../src/components/templates/RegisterTemplate/RegisterTemplate.stories.tsx"),
  };
};

configure(getStories, module, false);
