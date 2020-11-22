<template>
  <article class="flex flex-col md:flex-row font-rail text-sm">
    <div class="mb-3 flex md:flex-col justify-between items-center md:items-start md:justify-start">
      <sf-rating
        :max="max" 
        :score="review.score"
        :icon="starIcon"
        :color="starColor"
        class="mb-3"
      />
      <div class="review-item--reviewer flex items-center w-48 order-first md:order-last">
        <img 
          class="mr-4 rounded-full w-6 h-6"
          :src="review.reviewerAvatar.url"
          :alt="review.reviewerAvatar.alt || review.reviewerName"
          v-if="review.reviewerAvatar.url"
        />
        <p class="font-semibold text-md">{{review.reviewerName}}</p>
      </div>
    </div>
    <div class="flex-1 md:ml-5 text-gray-800">      
      <prismic-rich-text :field="review.title" class="font-semibold mb-1" />
      <prismic-rich-text :field="review.description" />
      <!-- TODO: link to readmore-->
      <div class="mt-1 mb-3">
        <p class="text-right italic text-xs">{{review.date}}</p>
      </div>
    </div>
  </article>
</template>
<script>
import { SfRating } from '@storefront-ui/vue'

export default {
  components: { SfRating},
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {
          primary: {}
        }
      }
    },
    max: {
      type: Number,
      default: 5,
    },
    starColor: {
      type: String,
    }
  },
  data() {
    return {
      review: this.slice.primary,
      starIcon: "M17.562 21.56a1.003 1.003 0 0 1-.465-.115L12 18.765l-5.097 2.68a1 1 0 0 1-1.451-1.054l.973-5.676l-4.123-4.02a1 1 0 0 1 .554-1.705l5.699-.828l2.548-5.164a1.042 1.042 0 0 1 1.794 0l2.548 5.164l5.699.828a1 1 0 0 1 .554 1.706l-4.123 4.019l.973 5.676a1 1 0 0 1-.986 1.169z"
    }
  }
}
</script>
<style scoped>
</style>

