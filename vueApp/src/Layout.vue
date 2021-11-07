<template>
  <div class="layout-app">
    <h1>Remote - Vue App</h1>
    <strong>Vue count: {{ vueCount }}</strong>
    <strong>React count: {{ reactCount }}</strong>
    <label>
      <span>Show button:</span>
      <input v-model="showButton" type="checkbox" />
    </label>
    <label>
      <span>Button increment text: </span>
      <input v-model="incrementText" type="text" />
    </label>
    <label>
      <span>Button decrement text: </span>
      <input v-model="decrementText" type="text" />
    </label>
  </div>
  <vue-button
    v-if="showButton"
    :text="incrementText"
    @click="changeCount('increase')"
  />
  <vue-button
    v-if="showButton"
    :text="decrementText"
    @click="changeCount('decrease')"
  />
</template>

<script>
import { ref, reactive, toRefs } from "vue";
import { BroadcastChannel } from "broadcast-channel";
import { CHANNEL_NAME } from "../../channelName";
import VueButton from "./Button.vue";

export default {
  name: "Layout",
  components: { VueButton },
  setup() {
    const channel = new BroadcastChannel(CHANNEL_NAME);
    const templateVars = reactive({
      vueCount: 0,
      reactCount: 0,
      showButton: true,
      incrementText: "Increase Vue count",
      decrementText: "Decrease Vue count",
    });

    const templateFuncs = reactive({
      changeCount: (action) => {
        const count =
          action === "increase"
            ? templateVars.vueCount + 1
            : templateVars.vueCount - 1;
        templateVars.vueCount = count;
        channel.postMessage(count);
      },
    });

    channel.onmessage = (msg) => {
      templateVars.reactCount = msg;
    };

    return {
      ...toRefs(templateFuncs),
      ...toRefs(templateVars),
    };
  },
};
</script>

<style scoped>
.layout-app {
  display: flex;
  flex-direction: column;
}

.layout-app > * {
  margin-bottom: 10px;
}
</style>
