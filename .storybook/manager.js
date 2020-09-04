import { addons } from "@storybook/addons";
import { create } from "@storybook/theming/create";

const theme = create({
  base: "light",
  brandTitle: "dhtmlxDiagram",
  brandUrl: "https://dhtmlx.github.io/angular-pivot-demo/?path=/story",
  brandImage: "./logo.svg",
});

addons.setConfig({
  showPanel: false,
  enableShortcuts: false,
  theme,
});
