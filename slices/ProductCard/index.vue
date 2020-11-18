<template>
  <article class="shadow-lg rounded-md w-64 font-rail border relative">
    <img :src="slice.primary.image.url" :alt="slice.primary.image.alt || slice.primary.title" class="rounded-t-md">
    <div class="p-4 relative">
      <prismic-rich-text :field="slice.primary.title" class="text-lg font-semibold capitalize" />
      <prismic-rich-text :field="slice.primary.description" class="text-xs text-gray-700 mb-3" />
      <p class="font-semibold text-green-600">{{price}}</p>
      <button class="card--add-to-cart bg-green-500">
        <svg-icon name="add-to-cart" class="w-6 h-6 fill-current" />
      </button>
    </div>
    <button class="text-red-500 absolute top-0 right-0 m-3" @click.stop="toggleFavorite">
      <svg-icon :name="favoriteIcon" class="w-8 h-8 fill-current"/>
    </button>
  </article>
</template>
<script>
export default {
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      }
    },
    favorite: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isFavorite: this.favorite,
    }
  },
  computed: {
    price() {
      //convert tp the right currency
      return `${this.slice.primary.price}${this.slice.primary.currency}`
    },
    favoriteIcon() {
      return this.isFavorite ? 'heart-fill' : 'heart-line'
    }
  },
  methods: {
    toggleFavorite() {
      this.isFavorite = !this.isFavorite
    }
  }
}
</script>
<style scoped>
.card--add-to-cart {
  @apply absolute right-0 rounded-full w-12 h-12 text-white text-sm p-1 mr-2 shadow-md flex justify-center items-center;
  top: -1.5rem;
}
</style>

