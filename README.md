# @senntyou/mint-ui

[mint-ui](https://github.com/ElemeFE/mint-ui) extensions.

Official `mint-ui` repository misses some functionality, and is unmaintained now, so I add some components here.

```
npm install @senntyou/mint-ui --save
```

```
import {
  Picker,
} from '@senntyou/mint-ui';
```

## Picker: popup picker

![](./preview/picker.png)

```
import Vue from 'vue';
import { Popup, Picker, DatetimePicker } from 'mint-ui';
import { Picker as StPicker } from '@senntyou/mint-ui';
import '@senntyou/mint-ui/es/styles.css';

// here should be loaded at first
Vue.component(Popup.name, Popup);
Vue.component(Picker.name, Picker);
Vue.component(DatetimePicker.name, DatetimePicker);
// then here
Vue.component(StPicker.name, StPicker);
```

```
<template>
  <st-mt-picker
    v-model="showPicker"
    :items="items"
    :onSubmit="onSubmit"
  />
</template>

<script>
export default {
  data() {
    return {
      // show picker or not
      showPicker: !1,
      // items to select
      items: [ ... ],
    };
  },
  methods: {
    // submit callback
    onSubmit(values) {},
  },
};
</script>
```

- `model`: `bool` `required` show picker or not
- `items`: `array` `required` items to select
- `onSubmit`: `function` `required` submit callback, `values => { ... }`
- `onCancel`: `function` cancel callback, `() => { ... }`
- `okText`: `string` `default: OK` ok btn text
- `cancelText`: `string` `default: Cancel` cancel btn text
- `divider`: `bool` `default: false` show divider or not
- `visibleItemsCount`: `number` `default: 5` visible items count

#### items

One level:

```
[{ value: '1' }, { value: '2' }, { value: '3' }]
```

Two levels:

```
[
  {
    value: '1',
    children: [{ value: '1-1' }, { value: '1-2' }, { value: '1-3' }],
  },
  {
    value: '2',
    children: [{ value: '2-1' }, { value: '2-2' }, { value: '2-3' }],
  },
]
```

Three levels:

```
[
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
]
```

#### onSubmit

```
values => { ... }
```

- One level: `values: ['1']`
- Two levels: `values: ['1', '1-1']`
- Three levels: `values: ['1', '1-1', '1-1-1']`

#### examples

[view/picker/App.vue](./view/picker/App.vue)
