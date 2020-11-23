import Slice from "./";
import model from "./model";
import mocks from "./mocks.json";
import { withKnobs, text, color } from "@storybook/addon-knobs";
import SliceZone from "vue-slicezone";

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

export const Basic = () => ({
  components: {
    Slice,
    SliceZone
  },
  props: {
    mock: {
      default: () => {
        const _mock = { ...mocks[0] };

        _mock.items = (_mock.items.length > 3
          ? _mock.items.slice(0, 3)
          : _mock.items
        ).map((item, index) => ({
          cover: {
            ...item.cover,
            url: text(
              `Item ${index + 1} Cover:`,
              item.cover.url,
              "Featured Data"
            )
          },
          title: [
            {
              ...item.title[0],
              text: text(
                `Item ${index + 1} Title:`,
                item.title[0].text,
                "Featured Data"
              )
            }
          ],
          description: [
            {
              ...item.description[0],
              text: text(
                `Item ${index + 1} Short Description:`,
                item.description[0].text,
                "Featured Data"
              )
            }
          ],
          link: {
            ...item.link,
            url: text(`Item ${index + 1} Link:`, item.link.url, "Featured Data")
          },
          background: color(
            `Item ${index + 1} Background:`,
            "white",
            "Featured Data"
          )
        }));

        _mock.primary.callToAction = text(
          "Action Label",
          _mock.primary.reviewerName,
          "Featured Item Layout"
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
