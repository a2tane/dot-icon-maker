import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ToolsArea } from ".";

export default {
  component: ToolsArea,
} as ComponentMeta<typeof ToolsArea>;

const Temlate: ComponentStory<typeof ToolsArea> = () => <ToolsArea></ToolsArea>;

export const Default = Temlate.bind({});
