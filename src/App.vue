<template>
  <div class="mt-20 mx-auto w-max" id="main-container">
    <h1 class="text-2xl font-bold">MODAL PROJECT</h1>
    <input
      class="border border-gray-700 w-60 rounded-md my-4"
      type="text"
      ref="input"
    />
    <div class="flex gap-4">
      <button
        class="w-max bg-black hover:bg-white text-white hover:text-black rounded px-3 py-1 border border-black"
        @click="focusInput"
      >
        Focus
      </button>
      <button
        class="w-max bg-black hover:bg-white text-white hover:text-black rounded px-3 py-1 border border-black"
        @click="handleModal(true)"
      >
        Open Modal
      </button>
      <button
        class="w-max bg-black hover:bg-white text-white hover:text-black rounded px-3 py-1 border border-black"
        @click="changeTheme"
      >
        {{ theme === "sale" ? "Normal" : "Sale" }} Theme
      </button>
    </div>

    <modal-component
      v-if="showModal"
      :title="`Sign up for the Giveaway!`"
      :content="`Grab your ninja swag for half price!`"
      :theme="theme"
      @handleModal="handleModal"
    >
      <p :class="{ 'sale-color': theme === 'sale' }">Do It Fast!!!</p>
      <template #links>
        <a :class="getThemeBtnClass" class="link">SignUp</a>
        <a :class="getThemeBtnClass" class="link">Log In</a>
        <button @click="changeTheme" :class="getThemeBtnClass" class="link">
          {{ theme === "sale" ? "Normal" : "Sale" }} Theme
        </button>
      </template>
    </modal-component>
  </div>
</template>

<script>
import ModalComponent from "./components/ModalComponent.vue";

export default {
  components: { ModalComponent },
  data() {
    return {
      showModal: false,
      theme: "normal",
    };
  },
  methods: {
    focusInput() {
      this.$refs.input.focus();
    },
    handleModal(value) {
      this.showModal = value;
    },
    changeTheme() {
      this.theme = this.theme === "sale" ? "normal" : "sale";
    },
  },
  computed: {
    getThemeBtnClass() {
      return this.theme === "sale" ? "sale-btn" : null;
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
/* 
#main-container {
  width: max-content;
  margin: 5rem auto;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
} */
/* 
input {
  margin-top: 1rem;
  height: 2rem;
  display: block;
  border: 1px solid;
  border-radius: 0.3rem;
  padding: 0.5rem;
}

.button {
  cursor: pointer;
  background: none;
  margin-top: 1rem;
  border: 1px solid;
  padding: 0.3rem 0.6rem;
  border-radius: 0.3rem;
  display: block;
}

.button:hover {
  background-color: black;
  color: white;
}

p {
  color: #81898c;
  margin: 1rem 0;
}

.link {
  border: 1px solid #40b4ac;
  background-color: transparent;
  margin: 1rem 1rem 1rem 0;
  padding: 0.5rem 0.8rem;
  border-radius: 0.3rem;
  cursor: pointer;
  color: #40b4ac;
}

.link:hover {
  background-color: #40b4ac;
  color: white;
}

.sale-btn {
  color: white;
  border: 1px solid white;
}

.sale-btn:hover {
  background-color: white;
  color: #ec283a;
} */
</style>

