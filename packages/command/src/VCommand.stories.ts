import { VBtn } from '@morpheme/button';
import type {StoryFn, Meta} from '@storybook/vue3';
import VCommand from './VCommand.vue';
import {ref} from 'vue';

const items = [
  {
    label: 'Recents',
    items: [
      { value: 'add-project', text: 'Add new project' },
      { value: 'open-project', text: 'Open project' },
      { value: 'open-recent', text: 'Open recent' },
    ],
  },
  {
    label: 'Projects',
    items: [
      { value: 'add-project', text: 'Add new project' },
      { value: 'open-project', text: 'Open project' },
      { value: 'open-recent', text: 'Open recent' },
    ],
  },
  {
    label: 'Teams',
    items: [
      { value: 'add-team', text: 'Add new team' },
      { value: 'open-team', text: 'Open team' },
    ],
  },
  {
    divider: true,
  },
  { value: 'format-document', text: 'Format Document' },
  { value: 'format-selection', text: 'Format Selection' },
]

export default {
  title: 'Components/Command',
  component: VCommand,
  args: {
    items
  }
} as Meta;

export const Default: StoryFn = (args) => ({
  setup() {
    const selected = ref()
    return {args, selected};
  },
  components: {
    VCommand,
  },
  template: `
    <VCommand
      v-bind="args"
      v-model:selected="selected"
    />
    
    <div>Press CMD+K or Control+K to open the menu</div>
    <pre>Selected: {{selected}}</pre>
  `,
});

export const WithButtonTrigger: StoryFn = (args) => ({
  setup() {
    const isOpen = ref(false)
    const selected = ref()
    return {args, selected, isOpen};
  },
  components: {
    VCommand,
    VBtn
  },
  template: `
    <VBtn @click="isOpen = true">Open</VBtn>

    <VCommand
      v-bind="args"
      v-model="isOpen"
      v-model:selected="selected"
    />
    
    <pre>Selected: {{selected}}</pre>
  `,
});