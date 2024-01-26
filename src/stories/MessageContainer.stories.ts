import type { Meta, StoryObj } from '@storybook/svelte';
import MessageContainer from '../lib/MessageContainer.svelte';
import type { Message as MessageType } from '../lib/types';
import { LoremIpsum } from "lorem-ipsum";
import { addMessageToStore } from '../lib/messageStore';
import { nowStamp } from '../lib';

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
    argTypes: {},
    parameters: {
        layout: "fullscreen",
    },
    play: () => {
        addMessageToStore({
            role: 'assistant',
            content: lorem.generateSentences(1),
            sender: 'Assistant',
            timestamp: nowStamp(),
        });
        addMessageToStore({
            role: 'user',
            content: lorem.generateSentences(1),
            sender: 'Student',
            timestamp: nowStamp(),
        });
    }
} satisfies Meta<MessageContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const base: Story = {}