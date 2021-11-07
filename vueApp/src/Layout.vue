<template>
  <div class="layout-app">
    <div>
      <h1>Remote - Vue App</h1>
      <div>
        <label>
          <span>Show button:</span>
          <input v-model="showButton" type="checkbox" />
        </label>
      </div>
      <div>
        <label>
          <span>Button text:</span>
          <input v-model="buttonText" type="text" />
        </label>
      </div>
      <div>
        <label>
          <span>Times button clicked: </span>
          <input disabled type="number" :value="clickedCount" />
        </label>
      </div>
    </div>
    <div>
      <div class="remote-component">
        <vue-button
          v-if="showButton"
          :text="buttonText"
          :onClick="incrementCount"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import VueButton from "./Button.vue";

export default {
  name: "Layout",
  components: { VueButton },
  setup() {
    const showButton = ref(true);
    const buttonText = ref("Vue button");
    const clickedCount = ref(0);
    const incrementCount = () => (clickedCount.value += 1);

    return { showButton, buttonText, clickedCount, incrementCount };
  },
};
</script>

<style scoped>
.layout-app {
  font-family: "Open Sans", Inter, Roboto, Oxygen, "Fira Sans", "Helvetica Neue",
    sans-serif;
}
</style>
