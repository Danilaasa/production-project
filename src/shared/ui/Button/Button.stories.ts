import { Meta, StoryObj } from "@storybook/react";
import { Button, ThemeButton } from "shared/ui/Button/Button";

const meta:Meta<typeof Button> = {
    component: Button,
    title: "shared/button",
    tags: ["autodocs"]
}

export default meta
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: "Кнопка",
    },
};

export const Clear: Story = {
    args: {
        children: "Кнопка",
        theme: ThemeButton.CLEAR
    },
};

export const Outline: Story = {
    args: {
        children: "Кнопка",
        theme: ThemeButton.OUTLINE
    },
};


