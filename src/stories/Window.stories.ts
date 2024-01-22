import type { Meta, StoryObj } from '@storybook/svelte';
import Window from '../lib/Window.svelte';
import { dummyConfiguration } from './utils';

const meta = {
    title: "Window",
    component: Window,
    tags: ['autodocs'],
    argTypes: {
    },
    parameters: {
        layout: "fullscreen",
    }
} satisfies Meta<Window>;

export default meta;

type Story = StoryObj<typeof meta>;

export const base: Story = {
    args: {
        initialMessage: "Welcome to ChatTutor, feel free to ask any questions about this lesson.",
        configuration: dummyConfiguration
    }
}