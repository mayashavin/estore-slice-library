import Slice from "./";
import model from "./model";
import mocks from "./mocks.json";
import SliceZone from "vue-slicezone";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { HORIZONTAL_POSITION } from "../ProductGallery/helpers";

export default {
  title: `Product/${model.name}`,
  decorators: [withKnobs],
  parameters: {
    //Disable docsPage since $prismic got lost
    docs: {
      page: () =>
        "Doc page for this component is currently not available due to a bug between $prismic and storybook"
    },
    controls: {
      disabled: true
    }
  }
};
const getMock = (initials = {}) => {
  const _mock = { ...mocks[0] };
  const primary = _mock.primary;

  primary.title[0].text = text("Title", _mock.primary.title[0].text, "Data");
  primary.description[0].text = text(
    "Description",
    _mock.primary.description[0].text,
    "Data"
  );

  primary.imagePos = select(
    "Image position",
    HORIZONTAL_POSITION,
    initials.imagePos || "left",
    "Layout"
  );

  return _mock;
};

// TODO: Update to loop over mocks.json
export const Basic = () => ({
  components: {
    Slice,
    SliceZone
  },
  props: {
    mock: {
      default: () => getMock()
    }
  },
  data() {
    return {
      resolver() {
        return Slice;
      }
    };
  },
  template: '<slice-zone :slices="[ mock ]" :resolver="resolver" />'
});

export const Inverted = () => ({
  components: {
    Slice,
    SliceZone
  },
  props: {
    mock: {
      default: () => getMock({ imagePos: "right" })
    }
  },
  data() {
    return {
      resolver() {
        return Slice;
      }
    };
  },
  template: '<slice-zone :slices="[ mock ]" :resolver="resolver" />'
});
