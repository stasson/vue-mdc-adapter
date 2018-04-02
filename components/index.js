//
// vue PlugIn
//
import VueMDCCommon from './common';
import VueMDCButton from './button';
import VueMDCCard from './card';
import VueMDCCheckbox from './checkbox';
import VueMDCChipSet from './chips';
import VueMDCDialog from './dialog';
import VueMDCDrawer from './drawer';
import VueMDCElevation from './elevation';
import VueMDCFab from './fab';
import VueMDCGridList from './grid-list';
import VueMDCIcon from './icon';
import VueMDCIconToggle from './icon-toggle';
import VueMDCLayoutApp from './layout-app';
import VueMDCLayoutGrid from './layout-grid';
import VueMDCLinearProgress from './linear-progress';
import VueMDCList from './list';
import VueMDCMenu from './menu';
import VueMDCRadio from './radio';
import VueMDCRipple from './ripple';
import VueMDCSelect from './select';
import VueMDCSlider from './slider';
import VueMDCSnackbar from './snackbar';
import VueMDCSwitch from './switch';
import VueMDCTabs from './tabs';
import VueMDCTextfield from './textfield';
import VueMDCTheme from './theme';
import VueMDCToolbar from './toolbar';
import VueMDCTopAppBar from './top-app-bar';
import VueMDCTypography from './typography';

export default {
  version: '__VERSION__',
  install(vm) {
    vm.use(VueMDCCommon);
    vm.use(VueMDCButton);
    vm.use(VueMDCCard);
    vm.use(VueMDCCheckbox);
    vm.use(VueMDCChipSet);
    vm.use(VueMDCDialog);
    vm.use(VueMDCDrawer);
    vm.use(VueMDCElevation);
    vm.use(VueMDCFab);
    vm.use(VueMDCGridList);
    vm.use(VueMDCIcon);
    vm.use(VueMDCIconToggle);
    vm.use(VueMDCLayoutApp);
    vm.use(VueMDCLayoutGrid);
    vm.use(VueMDCLinearProgress);
    vm.use(VueMDCList);
    vm.use(VueMDCMenu);
    vm.use(VueMDCRadio);
    vm.use(VueMDCRipple);
    vm.use(VueMDCSelect);
    vm.use(VueMDCSlider);
    vm.use(VueMDCSnackbar);
    vm.use(VueMDCSwitch);
    vm.use(VueMDCTabs);
    vm.use(VueMDCTextfield);
    vm.use(VueMDCTheme);
    vm.use(VueMDCToolbar);
    vm.use(VueMDCTopAppBar);
    vm.use(VueMDCTypography);
  },
};
