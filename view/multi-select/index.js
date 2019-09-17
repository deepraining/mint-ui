/* eslint-disable import/no-extraneous-dependencies, prefer-destructuring */
import 'normalize.css/normalize.css';
import '@senntyou/shortcut.css';
import '../styles/base.less';

import Vue from 'vue';
import { Popup, DatetimePicker, Checklist, Button } from 'mint-ui';
import { MultiSelect as StMultiSelect } from '../../src';
import '../../src/styles/index.less';
// import { Picker as StPicker } from '../../es';
// import '../../es/styles.css';

import App from './App';

Vue.component(Popup.name, Popup);
// Vue.component(Picker.name, Picker);
Vue.component(DatetimePicker.name, DatetimePicker);
Vue.component(Checklist.name, Checklist);
Vue.component(StMultiSelect.name, StMultiSelect);

Vue.component(Button.name, Button);

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App),
});
