function ExampleCtrl() {
  // ViewModel
  const vm = this;

  vm.title = 'AngularJS, Gulp, and Browserify.';
  vm.number = 12121234;
}

export default {
  name: 'ExampleCtrl',
  fn: ExampleCtrl
};
