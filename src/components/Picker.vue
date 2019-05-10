<template>
  <div class="st-mt-picker">
    <mt-popup v-model="visible" position="bottom" class="c-mint-popup">
      <div class="picker-toolbar">
        <span
          @click="cancel"
          class="mint-datetime-action mint-datetime-cancel"
          >{{ cancelText }}</span
        >
        <span
          @click="submit"
          class="mint-datetime-action mint-datetime-confirm"
          >{{ okText }}</span
        >
      </div>
      <mt-picker
        :slots="slots"
        :visible-item-count="visibleItemsCount"
        @change="onChange"
      />
    </mt-popup>
  </div>
</template>

<script>
/* eslint-disable prefer-destructuring */
import { makePickerSlots } from '../util';

export default {
  name: 'StMtPicker',
  props: {
    value: {
      type: Boolean,
      required: !0,
      default: !1,
    },
    items: {
      type: Array,
      required: !0,
      default: () => [],
    },
    onSubmit: {
      type: Function,
      required: !0,
      default: () => {},
    },
    onCancel: {
      type: Function,
      required: !1,
      default: () => {},
    },
    okText: {
      type: String,
      required: !1,
      default: 'OK',
    },
    cancelText: {
      type: String,
      required: !1,
      default: 'Cancel',
    },
    divider: {
      type: Boolean,
      required: !1,
      default: !1,
    },
    visibleItemsCount: {
      type: Number,
      required: !1,
      default: 5,
    },
  },
  data() {
    return {
      result: [],
      visible: false,
      slots: [],
      // picker instance
      picker: undefined,
    };
  },
  watch: {
    visible(val) {
      this.$emit('input', val);
    },
    value(val) {
      this.visible = val;
    },
    items() {
      this.makeSlots();
    },
  },
  created() {
    this.makeSlots();
  },
  methods: {
    makeSlots() {
      const { slots, initResult } = makePickerSlots({
        items: this.items,
        divider: this.divider,
      });
      this.slots = slots;
      this.result = initResult;

      if (this.picker) {
        if (initResult[0]) this.picker.setSlotValue(0, initResult[0]);
        if (initResult[1]) this.picker.setSlotValue(1, initResult[1]);
        if (initResult[2]) this.picker.setSlotValue(2, initResult[2]);
      }
    },
    onChange(picker, values) {
      if (!this.picker) this.picker = picker;

      // first value changed
      if (values[0] !== this.result[0]) {
        const { valuesCollection, initResult } = makePickerSlots({
          items: this.items,
          divider: this.divider,
          firstValue: values[0],
        });
        if (valuesCollection[1]) {
          picker.setSlotValues(1, valuesCollection[1]);
          picker.setSlotValue(1, initResult[1]);
          this.result[1] = initResult[1];
        }
        if (valuesCollection[2]) {
          picker.setSlotValues(2, valuesCollection[2]);
          picker.setSlotValue(2, initResult[2]);
          this.result[2] = initResult[2];
        }
      }
      // second value changed
      else if (values[1] !== this.result[1]) {
        const { valuesCollection, initResult } = makePickerSlots({
          items: this.items,
          divider: this.divider,
          firstValue: values[0],
          secondValue: values[1],
        });
        if (valuesCollection[2]) {
          picker.setSlotValues(2, valuesCollection[2]);
          picker.setSlotValue(2, initResult[2]);
          this.result[2] = initResult[2];
        }
      }

      this.result = [...values];
    },
    submit() {
      this.visible = !1;
      this.onSubmit([...this.result]);
    },
    cancel() {
      this.visible = !1;
      if (this.onCancel) this.onCancel();
    },
  },
};
</script>
