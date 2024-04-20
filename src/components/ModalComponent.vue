<template>
  <Teleport to="body">
    <div @click.self="$emit('handleModal', false)" id="container">
      <div :class="{ 'sale-bg sale-color': theme === 'sale' }" class="modal-component">
        <h1>{{ title }}</h1>
        <p :class="{ 'sale-color': theme === 'sale' }">{{ content }}</p>
        <slot>Default Slot Text</slot>
        <slot name="links"></slot>
      </div>
    </div>
  </Teleport>
</template>

<script>
export default {
  props: ["title", "content", "theme"],
  emits:["handleModal"]
};
</script>

<style>
#container {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
}

.modal-component {
  width: max-content;
  height: max-content;
  margin: auto;
  background-color: white;
  padding: 2rem 1rem;
  border-radius: 0.3rem;
  position: absolute;
  inset: 0;
  text-align: center;
  cursor: default;
  color: #40b4ac;
}

.sale-bg {
  background-color: #ec283a;
}

.sale-color {
  color: white;
}

h1 {
  margin-bottom: 2rem;
}
</style>