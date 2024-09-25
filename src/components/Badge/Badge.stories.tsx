import { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';


const meta={
    title:'components/Badge',
    component: Badge,
    args:{
        text:'Comfort food'
    },
    parameters: {
        design: {
          type: "figspec",
          url: "https://www.figma.com/design/sOfkw8blGH6Ag1xClHWLaG/Mealdrop-github?node-id=1906-3469&t=M5q50hh2IRP88O2j-4",
        },
      },    
} satisfies Meta<typeof Badge>;

export default meta;

type Story= StoryObj<typeof Badge>

export const Primary:Story={
    args:{
        text:'Primary Comfort food'
    }
}


