<template>
  <form
    :action="action"
    method="post"
    target="_blank"
    class="mx-auto subscribe-form--wrapper font-rail"
  >
    <prismic-rich-text :field="slice.primary.title" class="text-2xl capitalize my-3 text-center" />
    <div class="mx-auto flex md:flex-row flex-col justify-center my-3">
      <input
        id="subcribe-form--email-input"
        type="email"
        value=""
        name="email"
        :placeholder="placeholder"
        title="Email address"
        required
        class="md:w-1/3 py-2 px-3 rounded-md border-2 border-gray-400 bg-transparent"
      />
      <div style="position: absolute; left: -5000px;" aria-hidden="true">
        <input type="text" name="hidden-field" tabindex="-1" value="" />
      </div>
      <button class="px-6 md:w-1/3 mb-4 md:mb-0 py-2 md:ml-4 md:mr-3 border-2 font-semibold border-green-500 text-green-500 rounded-md text-center">{{actionLabel}}</button>
    </div>
  </form>
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
  data() {
    return {
      placeholder: this.slice.primary.placeholder || 'Enter email address',
      actionLabel: this.slice.primary.subscribe || 'Subscribe',
      action: this.slice.primary.action,
    }
  }
}
</script>
<style scoped>
</style>

