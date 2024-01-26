import type { Meta, StoryObj } from '@storybook/svelte';
import Message from '../lib/Message.svelte';
import type { Message as MessageType } from '../lib/types';
import { resetStore } from '../lib/messageStore';

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
    },
    play: resetStore
} satisfies Meta<Message>;

export default meta;

type Story = StoryObj<typeof meta>;

export const base: Story = {
    args: {
        content: 'Hello World',
        role: 'assistant',
    },
}