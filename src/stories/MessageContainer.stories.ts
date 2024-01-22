import type { Meta, StoryObj } from '@storybook/svelte';
import MessageContainer from '../lib/MessageContainer.svelte';
import type { Message as MessageType } from '../lib/types';
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
});

const meta = {
    title: "MessageContainer",
    component: MessageContainer,
    tags: ['autodocs'],
    argTypes: {
        messages: { control: 'array' },
    },
    parameters: {
        layout: "fullscreen",
    }
} satisfies Meta<MessageContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const base: Story = {
    args: {
        messages: [
            {
                role: 'assistant',
                content: lorem.generateSentences(1),
            },
            {
                role: 'user',
                content: lorem.generateSentences(2),
            },
        ] satisfies MessageType[],
    },
    play: async (x) => {

    },
}