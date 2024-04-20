<template>
  <Teleport to="body">
    <div @click.self="$emit('modalHandler', false)" id="container">
      <div :class="{ 'sale-bg': theme === 'sale' }" id="modal-component">
        <h1 :class="{ 'sale-color': theme === 'sale' }">{{ title }}</h1>
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

#container #modal-component {
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
}

.sale-bg {
  background-color: #ec283a !important;
}

.sale-color {
  color: white !important;
}

#container #modal-component h1 {
  color: #40b4ac;
  margin-bottom: 2rem;
}

#container #modal-component p {
  color: #81898c;
}
</style>