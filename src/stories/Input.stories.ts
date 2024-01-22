import type { Meta, StoryObj } from '@storybook/svelte';
import type { Message as MessageType } from '../lib/types';
import Input from '../lib/Input.svelte';

const meta = {
    title: "Input",
    component: Input,
    parameters: {
        layout: "fullscreen",
    }
} satisfies Meta<Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const base: Story = {
};