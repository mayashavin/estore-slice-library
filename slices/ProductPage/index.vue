<template>
  <section class="font-rail md:flex">
    <ProductGallery :slice="gallery" />
    <div class="md:ml-10">
      <prismic-rich-text :field="slice.primary.title" class="text-xl font-semibold mb-3 capitalize" />
      <sf-rating
        :max="max" 
        :score="slice.primary.score"
        :icon="starIcon"
        class="mb-3"
        />
      <prismic-rich-text :field="slice.primary.description" class="text-gray-700 my-3 text-sm" />
      <ul class="flex flex-wrap">
        <li
          v-for="tag in tags" 
          :key="tag" 
          class="mr-2 my-2 product-page--tag" 
        >
          <tag :tag="tag" />
        </li>
      </ul>
      <p class="text-green-700 uppercase font-bold mt-3 text-lg">{{price}}</p>
      <button class="rounded-lg bg-green-700 text-white py-2 px-5 font-semibold my-4 shadow-lg capitalize product-page--call-btn">{{callToAction}}</button>
      <div class="my-5">
        <accordion-item
          v-for="(section, index) in sections"
          :key="index"
          :slice="section"
          class="my-4"
        />
      </div>
    </div>
  </section>
</template>
<script>
import { SfRating } from '@storefront-ui/vue'
import ProductGallery from '../ProductGallery/'
import { convert } from '../../helpers/currency.js'
import Tag from '../../components/Tag'
import AccordionItem from '../AccordionItem'

export default {
  components: { SfRating, ProductGallery, Tag, AccordionItem },
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      }
    },
    max: {
      type: Number,
      default: 5
    },
    callToAction: {
      type: String,
      default: 'Add to Cart'
    },
    targetCurrency: {
      type: String,
      default: 'EUR'
    }
  },
  data() {
    return {
      starIcon: "M17.562 21.56a1.003 1.003 0 0 1-.465-.115L12 18.765l-5.097 2.68a1 1 0 0 1-1.451-1.054l.973-5.676l-4.123-4.02a1 1 0 0 1 .554-1.705l5.699-.828l2.548-5.164a1.042 1.042 0 0 1 1.794 0l2.548 5.164l5.699.828a1 1 0 0 1 .554 1.706l-4.123 4.019l.973 5.676a1 1 0 0 1-.986 1.169z",
      tags: this.slice.primary.tags.split(','),
      gallery: {
        primary: {
          mainImage: this.slice.primary.cover
        },
        items: this.slice.items
      },
      rates: {},
      sections: this.slice.items.map(item => ({ 
        primary: { 
          title: item.sectionTitle, 
          description: item.sectionDescription, 
        }
      })),
    }
  },
  methods: {
    getCurrencyFormat(currency, value) {
      return Intl.NumberFormat('en-EN', { style: 'currency', currency }).format(value)
    },
    getExpandIcon(isExpanded) {
      return isExpanded ? 'chevron-down' : 'chevron-up'
    },
    toggleExpand(section) {
      section.expanded = !section.expanded
    }
  },
  computed: {
    price() {
      const currency = this.slice.primary.currency
      const price = this.slice.primary.price

      if (this.targetCurrency === currency || !this.rates[this.targetCurrency]) return this.getCurrencyFormat(currency, price)

      return this.getCurrencyFormat(this.targetCurrency, this.rates[this.targetCurrency])
    }
  },
  async mounted() {
    const rates = await convert(this.slice.primary.price, this.slice.primary.currency)

    this.rates = rates
  }
}
</script>
<style scoped>
</style>