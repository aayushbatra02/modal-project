<template>
  <Teleport to="body">
    <div @click="$emit('modalHandler', false)" id="container">
      <div :class="['sale-theme']" @click.stop="" id="signup-modal">
        <h1>{{ title }}</h1>
        <p>{{ content }}</p>
        <slot>Default Slot Text</slot>
        <slot name="links"></slot>
      </div>
    </div>
  </Teleport>
</template>

<script>
export default {
  props: ["title", "content", "theme"],
  data() {
    return {};
  },
  methods:{
    //ec283a
  }
};
</script>

<style scoped>
#container {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
}

#container #signup-modal {
  width: max-content;
  height: max-content;
  margin: auto;
  background-color: white;
  padding: 2rem 1rem;
  border-radius: 0.3rem;
  position: absolute;
  inset: 0;
  text-align: center;
  cursor:default
}

#container #signup-modal h1 {
  color:#40B4AC;
  margin-bottom: 2rem;
}

#container #signup-modal p {
  color: #81898C
}

</style>