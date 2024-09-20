import { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta={
    title:'components/Badge',
    component: Badge,
    args:{
        text:'Comfort food'
    }
} satisfies Meta;

export default meta;

type Story= StoryObj<typeof Badge>

export const Primary:Story={
    args:{
        text:'Primary Comfort food'
    }
}

