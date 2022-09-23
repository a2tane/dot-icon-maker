import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyAppBar } from ".";

export default {
    component: MyAppBar,
} as ComponentMeta<typeof MyAppBar>;

const Temlate: ComponentStory<typeof MyAppBar> = () => <MyAppBar></MyAppBar>;

export const Default = Temlate.bind({});