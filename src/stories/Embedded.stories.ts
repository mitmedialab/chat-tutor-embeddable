import type { Meta, StoryObj } from '@storybook/svelte';
import Emedded from './Embedded.svelte';

const meta = {
    title: "Embedded",
    component: Emedded,
    tags: ['autodocs'],
} satisfies Meta<Emedded>;

export default meta;

type Story = StoryObj<typeof meta>;

export const base: Story = {

};

