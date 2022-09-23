import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CanvasArea } from ".";

export default {
  component: CanvasArea,
} as ComponentMeta<typeof CanvasArea>;

const Temlate: ComponentStory<typeof CanvasArea> = () => (
  <CanvasArea></CanvasArea>
);

export const Default = Temlate.bind({});
