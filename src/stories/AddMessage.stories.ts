import type { Meta, StoryObj } from '@storybook/svelte';
import AddMessage, { type Case } from './AddMessage.svelte';

const meta = {
    title: "AddMesssage",
    component: AddMessage,
    tags: ['autodocs'],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {
        testcase: {
            control: { type: 'select' },
            options: ['chatting', 'scroll'] satisfies Case[],
        }
    }
} satisfies Meta<AddMessage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const chatting: Story = {
    args: {
        testcase: 'chatting'
    },
};

export const scroll: Story = {
    args: {
        testcase: 'scroll'
    },
};