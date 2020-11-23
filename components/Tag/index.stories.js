import Tag from "./";
import { SIZES, ICONS } from "./constants";

export default {
  title: "Components/Tag",
  parameters: {
    escapeHTML: false
  },
  argTypes: {
    tag: {
      type: "string",
      control: {
        type: "text"
      },
      required: true,
      table: {
        category: "Tag"
      },
      description: "Label of Tag"
    },
    isClickable: {
      type: "boolean",
      control: {
        type: "boolean"
      },
      table: {
        category: "Tag",
        defaultValue: {
          summary: false
        }
      },
      defaultValue: false,
      description: "Enable click event for tag"
    },
    icon: {
      control: {
        type: "select",
        options: ICONS,
        table: {
          category: "Tag"
        }
      },
      description: "Icon for tag"
    },
    size: {
      control: {
        type: "select",
        options: SIZES
      },
      table: {
        category: "Tag Styles",
        defaultValue: {
          summary: "xs"
        }
      },
      defaultValue: "xs",
      description: "Size of the tag"
    },
    border: {
      type: "string",
      name: "styles.border",
      control: {
        type: "text"
      },
      description: "Border color, according to TailwindCSS syntax",
      table: {
        category: "Tag Styles"
      }
    },
    background: {
      type: "string",
      name: "styles.background",
      control: {
        type: "text"
      },
      description: "Background color, according to TailwindCSS syntax",
      table: {
        category: "Tag Styles",
        defaultValue: "prismui-500"
      },
      defaultValue: "prismui-500"
    },
    textColor: {
      type: "string",
      name: "styles.textColor",
      control: {
        type: "text"
      },
      description: "Text color, according to TailwindCSS syntax",
      table: {
        category: "Tag Styles",
        defaultValue: "white"
      },
      defaultValue: "white"
    },
    roundCorners: {
      name: "styles.roundCorners",
      control: {
        type: "select",
        options: ["sm", "md", "lg", "2xl", "3xl", "full"]
      },
      description: "Round corner, according to TailwindCSS syntax",
      table: {
        category: "Tag Styles",
        defaultValue: "full"
      },
      defaultValue: "full"
    },
    invertedIcon: {
      name: "styles.invertedIcon",
      type: "boolean",
      control: {
        type: "boolean"
      },
      defaultValue: false,
      description: "Display icon from the right",
      table: {
        category: "Tag Styles",
        defaultValue: false
      }
    },
    tagClicked: {
      action: "clicked "
    }
  }
};

const Template = (args, { argTypes }) => ({
  components: { Tag },
  props: Object.keys(argTypes),
  template: `
    <div>
      <tag
        :tag="tag" 
        :isClickable="isClickable" 
        :icon="icon" 
        :size="size"
        :styles="{ border, textColor, background, roundCorners, invertedIcon }"
        @tag-clicked="tagClicked" />
    </div>
  `
});

export const Basic = Template.bind({});

Basic.args = {
  tag: "Tag"
};

export const WithIcon = Template.bind({});

WithIcon.args = {
  icon: "heart-fill",
  tag: "Tag with love"
};

export const WithIconInverted = Template.bind({});

WithIconInverted.args = {
  icon: "heart-fill",
  invertedIcon: true,
  tag: "Inverted"
};

export const Clickable = Template.bind({});

Clickable.args = {
  isClickable: true,
  tag: "I'm clickable"
};
