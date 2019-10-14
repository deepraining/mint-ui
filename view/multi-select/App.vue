<template>
  <div class="pd-t-20">
    <div class="t-a-center">
      <mt-button @click="show">
        Show
      </mt-button>
    </div>
    <div class="t-a-center mg-t-20">result: {{ result }}</div>
    <st-mt-multi-select
      v-model="showPicker"
      :options="options"
      :onSubmit="onSubmit"
      :onCancel="onCancel"
    />
  </div>
</template>

<script>
/* eslint-disable import/no-extraneous-dependencies */
import { Toast } from 'mint-ui';

export default {
  name: 'App',
  data() {
    return {
      showPicker: !1,
      options: '.'
        .repeat(20)
        .split('')
        .map((i, index) => `Selection ${index}`),
      result: false,
    };
  },
  methods: {
    // submit callback
    onSubmit(values) {
      this.result = values;
    },
    // cancel callback
    onCancel() {
      Toast('cancel');
    },
    show() {
      this.showPicker = !0;
    },
  },
};
</script>
