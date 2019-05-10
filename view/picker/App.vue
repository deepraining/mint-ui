<template>
  <div class="pd-t-20">
    <div class="t-a-center">
      <mt-button @click="show(1)">
        one level
      </mt-button>
    </div>
    <div class="t-a-center mg-t-20">
      <mt-button @click="show(2)">
        two levels
      </mt-button>
    </div>
    <div class="t-a-center mg-t-20">
      <mt-button @click="show(3)">
        three levels
      </mt-button>
    </div>
    <div class="t-a-center mg-t-20">
      <mt-button @click="showPicker2 = !0">
        custom
      </mt-button>
    </div>
    <div class="t-a-center mg-t-20">result: {{ result }}</div>
    <st-mt-picker
      v-model="showPicker"
      :items="items"
      :onSubmit="onSubmit"
      :onCancel="onCancel"
    />
    <st-mt-picker
      v-model="showPicker2"
      :items="twoLevels"
      :onSubmit="onSubmit"
      :onCancel="onCancel"
      :visibleItemsCount="7"
      ok-text="确定"
      cancel-text="取消"
      divider
    />
  </div>
</template>

<script>
/* eslint-disable import/no-extraneous-dependencies */
import { Toast } from 'mint-ui';

const oneLevel = [{ value: '1' }, { value: '2' }, { value: '3' }];
const twoLevels = [
  {
    value: '1',
    children: [{ value: '1-1' }, { value: '1-2' }, { value: '1-3' }],
  },
  {
    value: '2',
    children: [{ value: '2-1' }, { value: '2-2' }, { value: '2-3' }],
  },
];
const threeLevels = [
  {
    value: '1',
    children: [
      {
        value: '1-1',
        children: [{ value: '1-1-1' }, { value: '1-1-2' }, { value: '1-1-3' }],
      },
      {
        value: '1-2',
        children: [{ value: '1-2-1' }, { value: '1-2-2' }, { value: '1-2-3' }],
      },
    ],
  },
  {
    value: '2',
    children: [
      {
        value: '2-1',
        children: [{ value: '2-1-1' }, { value: '2-1-2' }, { value: '2-1-3' }],
      },
      {
        value: '2-2',
        children: [{ value: '2-2-1' }, { value: '2-2-2' }, { value: '2-2-3' }],
      },
    ],
  },
];

export default {
  name: 'App',
  data() {
    return {
      showPicker: !1,
      showPicker2: !1,
      items: [],
      twoLevels,
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
    show(sequence) {
      if (sequence === 1) this.items = oneLevel;
      else if (sequence === 2) this.items = twoLevels;
      else if (sequence === 3) this.items = threeLevels;

      this.showPicker = !0;
    },
  },
};
</script>
