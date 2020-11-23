import Slice from "./";
import model from "./model";
import mocks from "./mocks.json";
import SliceZone from "vue-slicezone";
import { withKnobs, text, date, number } from "@storybook/addon-knobs";

export default {
  title: `Page/${model.name}`,
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
    Slice,
    SliceZone
  },
  props: {
    mock: {
      default: () => {
        const _mock = { ...mocks[0] };

        _mock.items = _mock.items.map((item, index) => ({
          cover: {
            ...item.cover,
            url: text(
              `Item ${index + 1} Cover:`,
              item.cover.url,
              `Item ${index + 1} Data`
            )
          },
          title: [
            {
              ...item.title[0],
              text: text(
                `Item ${index + 1} Title:`,
                item.title[0].text,
                `Item ${index + 1} Data`
              )
            }
          ],
          description: [
            {
              ...item.description[0],
              text: text(
                `Item ${index + 1} Short Description:`,
                item.description[0].text,
                `Item ${index + 1} Data`
              )
            }
          ]
        }));

        _mock.primary.buttonLabel = text(
          "Call to Action Label",
          "Learn more",
          "Slider Action"
        );

        return _mock;
      }
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
