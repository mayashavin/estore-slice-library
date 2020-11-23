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
        :placeholder="placeholder.toString()"
        title="Email address"
        required
        class="md:w-1/3 py-2 px-3 rounded-md border-2 border-gray-400 bg-transparent"
      />
      <div style="position: absolute; left: -5000px;" aria-hidden="true">
        <input type="text" name="hidden-field" tabindex="-1" value="" />
      </div>
      <button
        class="px-6 md:w-1/3 mt-4 md:mt-0 py-2 font-semibold rounded-md text-center"
        :class="buttonStyles"
        type="submit"
      >
        {{actionLabel}}
      </button>
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
      action: this.slice.primary.action.url,
    }
  },
  computed: {
    buttonStyles() {
      const order = this.slice.primary.invertedButton ? 'md:order-first md:mr-4' :  'md:ml-4 md:mr-3'
      const background = this.slice.primary.actionBg ? `bg-${this.slice.primary.actionBg}` : ''
      const color = this.slice.primary.actionColor ? `text-${this.slice.primary.actionColor}` : ''
      const border = this.slice.primary.withBorder ? `border-2 border-${this.slice.primary.actionColor}` : ''

      return [order, background, color, border].filter(Boolean).join(' ')
    }
  }
}
</script>
<style scoped>
</style>

