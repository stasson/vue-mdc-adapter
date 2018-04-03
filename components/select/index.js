import { BasePlugin } from '../base';
import mdcSelect from './mdc-select.vue';
import mdcOption from './mdc-option.vue';
import mdcOptgroup from './mdc-optgroup.vue';

export { mdcSelect, mdcOption, mdcOptgroup };

export default BasePlugin({
  mdcSelect,
  mdcOption,
  mdcOptgroup,
});
