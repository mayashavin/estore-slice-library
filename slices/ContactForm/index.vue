<template>
  <form
    :action="action"
    method="post"
    target="_blank"
    class="mx-auto contact-form--wrapper font-rail"
  >
    <prismic-rich-text :field="slice.primary.title" class="text-2xl capitalize my-3 text-left" />
    <div class="mx-auto flex md:flex-row flex-col justify-center my-3">
      <div>
        <label for="name" class="mb-2 text-sm">{{}}</label>      
        <input
          id="contact-form--name"
          type="text"
          value=""
          name="name"
          :placeholder="namePlaceholder"
          title="Full name"
          required
          class="md:w-1/3 py-2 px-3 rounded-md border-2 border-gray-400 bg-transparent"
        />
      </div>
      <div>
        <label for="email" class="mb-2 text-sm">{{}}</label>      
        <input
          id="contact-form--email"
          type="text"
          value=""
          name="email"
          :placeholder="emailPlaceholder"
          title="Email address"
          required
          class="md:w-1/3 py-2 px-3 rounded-md border-2 border-gray-400 bg-transparent"
        />
      </div>
      <div>
        <label for="subject" class="mb-2 text-sm">{{}}</label>      
        <input
          id="contact-form--subject"
          type="text"
          value=""
          name="subject"
          :placeholder="subjectPlaceholder"
          title="Subject of ticket"
          required
          class="md:w-1/3 py-2 px-3 rounded-md border-2 border-gray-400 bg-transparent"
        />
      </div>
      <div>
      <!--Select dropdown-->
        <label for="email" class="mb-2 text-sm">{{}}</label>      
        <input
          id="contact-form--name"
          type="text"
          value=""
          name="name"
          :placeholder="namePlaceholder"
          title="Full name"
          required
          class="md:w-1/3 py-2 px-3 rounded-md border-2 border-gray-400 bg-transparent"
        />
      </div>
      <div>
        <label for="order" class="mb-2 text-sm">{{}}</label>      
        <input
          id="contact-form--order"
          type="text"
          value=""
          name="name"
          :placeholder="orderPlaceholder"
          title="Order number"
          required
          class="md:w-1/3 py-2 px-3 rounded-md border-2 border-gray-400 bg-transparent"
        />
      </div>      
      <div style="position: absolute; left: -5000px;" aria-hidden="true">
        <input type="text" name="hidden-field" tabindex="-1" value="" />
      </div>
      <div class="flex">
        <button class="px-6 md:w-1/3 mb-4 md:mb-0 py-2 md:ml-4 md:mr-3 border-2 font-semibold border-green-500 text-green-500 rounded-md text-center">{{actionLabel}}</button>
        <button class="px-6 md:w-1/3 mb-4 md:mb-0 py-2 md:ml-4 md:mr-3 border-2 font-semibold bg-green-500 text-white rounded-md text-center">{{actionLabel}}</button>
      </div>
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
}
</script>
<style scoped>
.section {
  position: relative;
  background: #F7F7F7;
  color: #111;
  padding: 4em;
  text-align: center;
}
a {
  color: #111;
}
.title {
  margin-bottom: 2em;
}
</style>

