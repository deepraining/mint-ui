<template>
  <div class="st-mt-picker st-mt-multi-select">
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
      <div class="st-mt-content">
        <mt-checklist :options="options" v-model="result" />
      </div>
    </mt-popup>
  </div>
</template>

<script>
export default {
  name: 'StMtMultiSelect',
  props: {
    value: {
      type: Boolean,
      required: !0,
      default: !1,
    },
    options: {
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
  },
  data() {
    return {
      result: [],
      visible: false,
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
    options() {
      this.result = [];
    },
  },
  methods: {
    submit() {
      this.visible = !1;
      this.onSubmit(this.result);
    },
    cancel() {
      this.visible = !1;
      if (this.onCancel) this.onCancel();
    },
  },
};
</script>
