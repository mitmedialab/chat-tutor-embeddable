import type { Meta, StoryObj } from '@storybook/svelte';
import Message from '../lib/Message.svelte';
import type { Message as MessageType } from '../lib/types';

const meta = {
    title: "Message",
    component: Message,
    tags: ['autodocs'],
    argTypes: {
        content: { control: 'text' },
        role: {
            control: { type: 'select' },
            options: ['assistant', 'user'] satisfies MessageType['role'][],
        },
        timestamp: { control: 'text' },
    },
    parameters: {
        layout: "fullscreen",
    }
} satisfies Meta<Message>;

export default meta;

type Story = StoryObj<typeof meta>;

export const base: Story = {
    args: {
        content: 'Hello World',
        role: 'assistant',
    },
}