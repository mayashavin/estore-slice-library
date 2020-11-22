<template>
  <section class="section inline-flex font-rail">
    <div class="rounded-full border-4 self-center">
      <c-image v-bind="avatar"/>
    </div>
    <div class="px-3 pt-1 flex flex-col justify-start" :class="sizeClass" v-if="withDetails">
      <h3 class="title capitalize truncate" :class="nameClass" :title="name">{{name}}</h3>
      <p class="truncate text-gray-700" :class="emailClass" :title="slice.primary.email">{{slice.primary.email}}</p>
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
        return {
          primary: {}
        }
      }
    },
    size: {
      type: Number,
      default: 55
    },
    showEmail: {
      type: Boolean,
      default: true
    },
    avatarCorner: {
      type: [String, Number],
      default: 'max'
    },
    withDetails: {
      type: Boolean,
      default: true,
    }
  },
  data() {
    return {
      avatar: {
        src: this.slice.primary.avatar.url,
        transformations: {
          resize: {
            width: this.size,
            height: this.size,
            type: 'thumb'
          },
          gravity: 'auto',
          radius: this.avatarCorner
        },
      },
      name: `${this.$prismic.asText(this.slice.primary.fname)} ${this.$prismic.asText(this.slice.primary.lname)}`,
      sizeClass: this.getSizeClass(this.size),
      nameClass: {
        'text-lg': this.size >=50,
        'text-sm': this.size < 40
      },
      emailClass: {
        'text-sm': this.size >=50,
        'text-xs': this.size < 40
      }
    }
  },
  methods: {
    getSizeClass(size) {
      return {
        'w-56': size >= 50,
        'w-48': size >=30 && size < 50,
        'w-32': size < 30     
      }
    },
  }
}
</script>
<style scoped>
</style>

