<template>
    <button @click="handleClick">{{ text || 'default text'}}</button>
</template>

<script>
import {reactive, toRefs} from 'vue';
import { onMounted } from '@vue/runtime-core';

export default {
  props: {
    text: {
      type: String,
    },
    onClick: {
      type: Function
    }
  },
  setup(props) {
    const handleClick = reactive({
      handleClick() {
        console.log("CLICK ON VUE-BUTTON");
        props?.onClick();
      } 
    })
      onMounted(() => {
        console.log('MOUNTED VUE-BUTTON :>> ');
      })
    return {
      ...toRefs(handleClick)
    }
  }
}
</script>

<style>

</style>