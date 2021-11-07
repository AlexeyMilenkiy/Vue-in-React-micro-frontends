<template>
  <div class="layout-app">
    <h1>Remote - Vue App</h1>
    <div>
      <strong>Vue count: {{ vueCount }}</strong>
    </div>
    <div>
      <strong>React count: {{ reactCount }}</strong>
    </div>
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
</template>

<script>
import { ref } from "vue";
import { BroadcastChannel } from "broadcast-channel";
import { CHANNEL_NAME } from "../../channelName";
import VueButton from "./Button.vue";

export default {
  name: "Layout",
  components: { VueButton },
  setup() {
    const channel = new BroadcastChannel(CHANNEL_NAME);
    const showButton = ref(true);
    const buttonText = ref("Vue button");
    const vueCount = ref(0);
    const reactCount = ref(0);
    const incrementCount = () => {
      const count = vueCount.value + 1;
      vueCount.value = count;
      channel.postMessage(count);
    };

    channel.onmessage = (msg) => {
      reactCount.value = msg;
    };

    return { showButton, buttonText, vueCount, incrementCount, reactCount };
  },
};
</script>

<style scoped>
.layout-app {
  font-family: "Open Sans", Inter, Roboto, Oxygen, "Fira Sans", "Helvetica Neue",
    sans-serif;
}

.layout-app > * {
  margin-bottom: 10px;
}
</style>
