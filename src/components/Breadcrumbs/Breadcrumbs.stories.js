import { Breadcrumbs } from ".";

export default {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  argTypes: {
    separator: {
      options: ["text", "icon"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    icon: true,
    separator: "text",
    collapsed: true,
    className: {},
    linkLink: "Link",
    linkDivClassName: {},
    linkLink1: "Link",
    linkDivClassNameOverride: {},
  },
};
