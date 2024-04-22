<template>
  <Teleport to="body">
    <div
      @click.self="$emit('handleModal', false)"
      class="absolute inset-0 flex justify-center align-center bg-black bg-opacity-70 cursor-pointer"
    >
      <div
        :class="getThemeBgClass"
        class="my-auto flex flex-col align-center justify-center p-10 text-customBlue cursor-default"
      >
        <h1 class="text-center font-bold text-2xl mb-4">{{ title }}</h1>
        <p
          class="text-center"
          :class="[theme === 'sale' ? 'text-white' : 'text-grey']"
        >
          {{ content }}
        </p>
        <slot>Default Slot Text</slot>
        <slot name="links"></slot>
      </div>
    </div>
  </Teleport>
</template>

<script>
export default {
  props: ["title", "content", "theme"],
  emits: ["handleModal"],
  computed: {
    getThemeBgClass() {
      return this.theme === "sale"
        ? "bg-customRed text-white"
        : "bg-white text-black";
    },
  },
};
</script>
