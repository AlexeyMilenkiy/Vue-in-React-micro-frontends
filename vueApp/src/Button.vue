<template>
  <button @click="handleClick">{{ text || "default text" }}</button>
</template>

<script>
import { reactive, toRefs } from "vue";
import { onMounted } from "@vue/runtime-core";

export default {
  props: {
    text: {
      type: String,
    },
    onClick: {
      type: Function,
    },
  },
  setup(props) {
    const handleClick = reactive({
      handleClick() {
        console.log("CLICK ON VUE-BUTTON");
        props?.onClick();
      },
    });
    onMounted(() => {
      console.log("MOUNTED VUE-BUTTON :>> ");
    });
    return {
      ...toRefs(handleClick),
    };
  },
};
</script>

<style scoped>
button {
  background: #42b983;
  color: #fff;
  border-radius: 9999px;
  letter-spacing: 0.05em;
  border: 1px solid #42b983;
  text-transform: uppercase;
  margin-right: 10px;
  padding: 0.5rem 1.5rem;
  white-space: nowrap;
  font-weight: 700;
}
</style>
