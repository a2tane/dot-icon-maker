import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Contents } from ".";

export default {
  component: Contents,
} as ComponentMeta<typeof Contents>;

const Temlate: ComponentStory<typeof Contents> = () => <Contents></Contents>;

export const Default = Temlate.bind({});
