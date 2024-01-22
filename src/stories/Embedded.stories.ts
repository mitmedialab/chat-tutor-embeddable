import type { Meta, StoryObj } from '@storybook/svelte';
import Emedded from './Embedded.svelte';

const meta = {
    title: "Embedded",
    tags: ['autodocs'],
    component: Emedded,
} satisfies Meta<Emedded>;

export default meta;

type Story = StoryObj<typeof meta>;

export const base: Story = {

};

