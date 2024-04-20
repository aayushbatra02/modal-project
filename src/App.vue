<template>
  <div id="app">
    <h1>MODAL PROJECT</h1>
    <input type="text" ref="input" />
    <button @click="focusInput">Focus</button>
    <br />
    <button @click="modalHandler(true)">Open Modal</button>
    <signup-modal
      v-if="showModal"
      :title="`Sign up for the Giveaway!`"
      :content="`Grab your ninga swag for half price!`"
      :theme="theme"
      @modalHandler="modalHandler"
    >
      <p :class="{'sale-color' : theme === 'sale'}">Do It Fast!!!</p>
      <template #links
        ><a :class="{'sale-btn' : theme === 'sale'}" class="link">SignUp</a><a :class="{'sale-btn' : theme === 'sale'}" class="link">Log In</a></template
      >
    </signup-modal>
  </div>
</template>

<script>
import SignupModal from "./components/SignupModal.vue";

export default {
  components: { SignupModal },
  data() {
    return {
      showModal: false,
      theme: "sale",
    };
  },
  methods: {
    focusInput() {
      this.$refs.input.focus();
    },
    modalHandler(value) {
      this.showModal = value;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  width: max-content;
  margin: 5rem auto;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

input {
  margin-top: 1rem;
  height: 2rem;
  display: block;
  border: 1px solid;
  border-radius: 0.3rem;
  padding: 0.5rem;
}

button {
  cursor: pointer;
  background: none;
  margin-top: 1rem;
  border: 1px solid;
  padding: 0.3rem 0.6rem;
  border-radius: 0.3rem;
}

button:hover {
  background-color: black;
  color: white;
}

p {
  margin: 1rem 0;
  color: #81898c;
}

.link {
  border: 1px solid #40b4ac;
  margin: 2rem 1rem 1rem 0;
  padding: 0.5rem 0.8rem;
  border-radius: 0.3rem;
  cursor: pointer;
  color: #40b4ac;
}

.link:hover {
  background-color: #40b4ac;
  color: white;
}

.sale-btn{
  color: white;
  border: 1px solid white;
}

.sale-btn:hover {
  background-color: white;
  color: #ec283a;
}

</style>

