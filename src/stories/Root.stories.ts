import type { Meta, StoryObj } from '@storybook/svelte';
import Root from '../lib/Root.svelte';
import { dummyConfiguration } from './utils';
import { resetStore } from '../lib/messageStore';

const meta = {
    title: "Root",
    component: Root,
    tags: ['autodocs'],
    play: resetStore
} satisfies Meta<Root>;

export default meta;

type Story = StoryObj<typeof meta>;

export const base: Story = {
    args: {
        configuration: dummyConfiguration
    }
};

