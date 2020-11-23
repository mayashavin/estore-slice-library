import { STORAGE_TYPES } from "cloudinary-build-url";
import CImage from "./";
import {
  RGBAToHexA,
  CROPMODE,
  GRAVITY,
  PLACEHOLDER_TRANSFORMATIONS
} from "./helpers";

export default {
  title: "Components/CImage",
  argTypes: {
    src: {
      control: "text",
      name: "src",
      description: "Public Id or Image URL",
      type: {
        required: true
      },
      table: {
        category: "Image"
      },
      defaultValue: "kitten"
    },
    cloudName: {
      type: "string",
      control: {
        type: "text"
      },
      name: "cloud.cloudName",
      description: "Cloudinary cloud name - Required if not set globally",
      table: {
        category: "Cloud Configuration"
      },
      defaultValue: "demo"
    },
    storageType: {
      name: "cloud.storageType",
      description: "How the image was stored in Cloudinary",
      control: {
        type: "select",
        options: Object.values(STORAGE_TYPES)
      },
      table: {
        category: "Cloud Configuration",
        defaultValue: {
          summary: "upload"
        }
      },
      defaultValue: "upload"
    },
    placeholder: {
      control: {
        type: "select",
        options: Object.keys(PLACEHOLDER_TRANSFORMATIONS)
      },
      description: "Placeholder type for image",
      name: "placeholder",
      table: {
        category: "Image",
        defaultValue: {
          summary: "blur"
        }
      },
      defaultValue: "blur"
    },
    width: {
      type: "string",
      control: {
        type: "text"
      },
      name: "transformations.resize.width",
      description: "Width to resize the image to",
      table: {
        category: "Transformations/Resize"
      },
      defaultValue: "500"
    },
    height: {
      type: "string",
      control: {
        type: "text"
      },
      name: "transformations.resize.height",
      description: "Height to resize the image to",
      table: {
        category: "Transformations/Resize"
      },
      defaultValue: "500"
    },
    type: {
      name: "transformations.resize.type",
      description: "Crop mode",
      control: {
        type: "select",
        options: CROPMODE
      },
      table: {
        category: "Transformations/Resize",
        defaultValue: {
          summary: "thumb"
        }
      },
      defaultValue: "thumb"
    },
    aspectRatio: {
      name: "transformations.resize.aspectRatio",
      description: "Aspect ratio of the resizing",
      control: {
        type: "text"
      },
      table: {
        category: "Transformations/Resize",
        defaultValue: {
          summary: "1"
        }
      },
      defaultValue: "1"
    },
    gravity: {
      name: "transformations.gravity",
      description: "Focus position to resize around",
      control: {
        type: "select",
        options: GRAVITY
      },
      table: {
        category: "Transformations/Resize",
        defaultValue: {
          summary: "thumb"
        }
      },
      defaultValue: "center"
    },
    radius: {
      name: "transformations.radius",
      description:
        "Number of pixels or a mode for making the corner of the image rounded.",
      control: {
        type: "text"
      },
      table: {
        category: "Transformations"
      }
    },
    rotate: {
      name: "transformations.rotate",
      type: "number",
      description: "How much degree to rotate the image.",
      control: {
        type: "range",
        min: -180,
        max: 180,
        step: 10
      },
      table: {
        category: "Transformations",
        defaultValue: {
          summary: 0
        }
      },
      defaultValue: 0
    },
    effect: {
      name: "transformations.effect",
      description: "Effect to apply on the image",
      control: {
        type: "text"
      },
      table: {
        category: "Transformations"
      }
    },
    dpr: {
      name: "transformations.dpr",
      description: "Target device pixel ratio",
      control: {
        type: "text"
      },
      table: {
        category: "Transformations"
      }
    },
    borderWidth: {
      name: "transformations.border.width",
      description: "Width of border to apply to image",
      type: {
        required: true
      },
      table: {
        category: "Transformations"
      },
      control: {
        type: "number"
      }
    },
    borderColor: {
      type: "string",
      name: "transformations.border.color",
      description: "Color of border to apply to image",
      table: {
        category: "Transformations",
        defaultColor: {
          summary: "black"
        }
      },
      control: {
        type: "color"
      },
      defaultValue: "black"
    },
    format: {
      name: "transformations.format",
      description: "Target format to serve on delivery",
      control: {
        type: "text"
      },
      table: {
        category: "Transformations",
        defaultValue: "auto"
      },
      defaultValue: "auto"
    },
    opacity: {
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 10
      },
      table: {
        category: "Transformations",
        defaultValue: 100
      },
      name: "transformations.opacity",
      description: "Opacity of the image",
      defaultValue: 100
    }
  }
};

export const Basic = (args, { argTypes }) => ({
  components: { CImage },
  props: Object.keys(argTypes),
  computed: {
    transformations() {
      const {
        opacity,
        format,
        dpr,
        effect,
        rotate,
        gravity,
        radius,
        width,
        height,
        type,
        borderWidth,
        borderColor,
        aspectRatio
      } = this;
      return {
        opacity,
        format,
        dpr,
        effect,
        rotate,
        gravity,
        radius,
        resize: {
          width,
          height,
          type,
          aspectRatio
        },
        border: {
          width: borderWidth,
          color: borderColor.startsWith("rgba(")
            ? RGBAToHexA(borderColor)
            : borderColor
        }
      };
    },
    cloud() {
      const cloud = {
        storageType: this.storageType
      };

      if (this.cloudName) cloud.cloudName = this.cloudName;

      return cloud;
    }
  },
  template:
    '<c-image :src="src" :cloud="cloud" :transformations="transformations" :placeholder="placeholder" />'
});
