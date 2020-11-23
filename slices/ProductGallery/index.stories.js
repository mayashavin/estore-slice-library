import Slice from "./";
import model from "./model";
import mocks from "./mocks.json";
import SliceZone from "vue-slicezone";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { POSITIONS } from "./helpers";

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

// TODO: Update to loop over mocks.json
export const DefaultSlice = () => ({
  components: {
    Slice
  },
  props: {
    mock: {
      default: () => {
        const _mock = { ...mocks[0] };

        _mock.items = _mock.items.map((item, index) => ({
          image: {
            ...item.image,
            url: text(
              `Item ${index + 1} Cover:`,
              item.image.url,
              `Item ${index + 1} Data`
            )
          }
        }));

        _mock.primary.mainImage.url = text(
          "Main Image Url",
          _mock.primary.mainImage.url,
          "Main Image"
        );

        return _mock;
      }
    },
    enabledZoom: boolean("Enable Zoom?", true, "Gallery Options"),
    thumbnailPos: select(
      "Position of thumbnails",
      Object.values(POSITIONS),
      "GalleryOptions"
    )
  },
  data() {
    return {};
  },
  template:
    '<Slice :slice="mock" :enabled-zoom="enabledZoom" :thumbnail-pos="thumbnailPos"/>'
});
