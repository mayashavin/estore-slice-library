<template>
  <section class="section text-center flex flex-col justify-center items-center mx-20 py-5">
    <img :src="slice.primary.logo.url"/>
    <prismic-rich-text :field="slice.primary.title" class="text-2xl font-semibold text-prismui-600 my-5" />
    <prismic-rich-text :field="slice.primary.description" class="text-lg text-gray-700"/>
    <div class="flex my-5">
      <a :href="slice.primary.github.url" aria-lable="Github Link" class="mx-4">
        <svg-icon name="github" class="w-8 h-8"/>
      </a>
      <a :href="slice.primary.twitter.url" aria-lable="Github Link" class="mx-4">
        <svg-icon name="twitter"  class="w-8 h-8 fill-current text-blue-500"/>
      </a>
      <a :href="slice.primary.facebook.url" aria-lable="Github Link" class="mx-4">
        <svg-icon name="facebook"  class="w-8 h-8 fill-current text-blue-700"/>
      </a>
    </div>
  </section>
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
    }
  },
}
</script>
<style scoped>
</style>

