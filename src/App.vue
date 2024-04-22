<template>
  <div class="flex flex-col items-center gap-6 mt-20 mx-auto w-max">
    <h1 class="text-2xl font-bold">MODAL PROJECT</h1>
    <input
      class="border border-gray-700 w-60 rounded-md py-1 px-3"
      type="text"
      ref="input"
    />
    <div class="flex gap-6">
      <button
        class="w-max bg-white text-black hover:bg-black hover:text-white rounded px-3 py-1 border border-black"
        @click="focusInput"
      >
        Focus
      </button>
      <button
        class="w-max bg-white text-black hover:bg-black hover:text-white rounded px-3 py-1 border border-black"
        @click="handleModal(true)"
      >
        Open Modal
      </button>
      <button
        class="w-max bg-white text-black hover:bg-black hover:text-white rounded px-3 py-1 border border-black"
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
      <p
        :class="[theme === 'sale' ? 'text-white' : 'text-grey']"
        class="text-center mb-4"
      >
        Do It Fast!!!
      </p>
      <template #links>
        <div class="flex justify-center gap-6">
          <div
            :class="getThemeButtonClass"
            class="border text-center px-3 py-1 rounded cursor-pointer hover:text-white"
          >
            <a>SignUp</a>
          </div>
          <div
            :class="getThemeButtonClass"
            class="border text-center px-3 py-1 rounded cursor-pointer hover:text-white"
          >
            <a>LogIn</a>
          </div>
          <button
            :class="getThemeButtonClass"
            class="border text-center px-3 py-1 rounded cursor-pointer hover:text-white"
            @click="changeTheme"
          >
            {{ theme === "sale" ? "Normal" : "Sale" }} Theme
          </button>
        </div>
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
    getThemeButtonClass() {
      return this.theme === "sale"
        ? "hover:bg-white hover:text-customRed"
        : "border-customBlue hover:bg-customBlue";
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
</style>

