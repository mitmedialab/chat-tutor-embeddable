import type { Meta, StoryObj } from '@storybook/svelte';
import OpenMe from '../lib/OpenMe.svelte';

const meta = {
    title: "Open Me",
    component: OpenMe,
    tags: ['autodocs'],
} satisfies Meta<OpenMe>;

export default meta;

type Story = StoryObj<typeof meta>;

export const base: Story = {

};

