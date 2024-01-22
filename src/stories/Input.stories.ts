import type { Meta, StoryObj } from '@storybook/svelte';
import Input from '../lib/Input.svelte';

const meta = {
    title: "Input",
    component: Input,
    tags: ['autodocs'],
    parameters: {
        layout: "fullscreen",
    }
} satisfies Meta<Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const base: Story = {
};