import { withKnobs, text, color, select, number } from "@storybook/addon-knobs";
import CImage from './'
import { RGBAToHexA, CROPMODE, GRAVITY, PLACEHOLDER_TRANSFORMATIONS } from "./helpers";

export default {
  title: 'Components/CImage',
  decorators: [withKnobs],
  parameters: {
    escapeHTML: false,
  },
  argTypes: {
    src: { 
      control: 'text',
      name: 'src',
      description: 'Public Id or Image URL',
      
      type: {
        required: true,
      },
      table: {
        category: 'Image'
      }
    },
    cloud: {
      control: 'object',
      name: 'cloud',
      description: 'Cloudinary configuration options',
      table: {
        category: 'Configuration'
      }
    },
    placeholder: {
      control: {
        type: 'select',
        options: Object.keys(PLACEHOLDER_TRANSFORMATIONS),
      },
      description: 'Placeholder type for image',
      name: 'placeholder',
      table: {
        category: 'Image',
        defaultValue: {
          summary: 'blur'
        }
      }
    },
    
  }
}

export const Basic = () => ({
  components: { CImage },
  props: {
    src: {
      default: text('Image path','kitten', 'Image source')
    },
    cloud: {
      default: (() => ({
        cloudName: text('Cloud name', 'demo', 'Cloudinary'),
        storageType: 'upload'
      }))()
    },
    transformations: {
      default: () => ({
        resize: {
          width: number('Width', 500, {}, 'Resize'),
          height: number('Height', 500, {}, 'Resize'),
          type: select('Resize type', CROPMODE, 'thumb', 'Resize'),
          aspectRatio: text('Aspect ratio', '1', 'Resize')
        },
        gravity: select('Gravity', GRAVITY, 'center', 'Resize'),
        radius: text('Round corner', '', 'Other transformations'),
        rotate: number('Rotate', 0, {
          range: true,
          min: -180,
          max: 180,
          step: 10
        }, 'Other transformations'),
        effect: text('Effect', '', 'Other transformations'),
        dpr: number('DPR', 1, {
          step: 0.1
        }, 'Other transformations'),
        zoom: number('Zoom', 1, {
          step: 0.1,
          range: true,
          min: 0,
          max: 1
        }, "Other transformations"),
        border: {
          width: number('Border width', 0, {
            min: 0
          }, 'Border'),
          type: 'solid',
          color: (() => {
            const selectedColor = color('Color', 'black', 'Border')

            if (selectedColor.startsWith('rgba(')) {
              const rgba = RGBAToHexA(selectedColor)
              return rgba
            }

            return selectedColor
          })()
        },
        format: text('Format', 'auto', 'Other transformations'),
        opacity:number('Opacity', 100, {
          range: true,
          min: 0,
          max: 100,
          step: 10
        }, 'Other transformations')
      }),
      placeholder: select('Placeholder', Object.keys(PLACEHOLDER_TRANSFORMATIONS), 'blur', 'Placeholder')
    }
  },
  template: '<c-image :src="src" :cloud="cloud" :transformations="transformations" />',
})
