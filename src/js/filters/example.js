function ExampleFilter() {
  return (input) => input.replace(/keyboard/ig, 'leopard');
}

export default {
  name: 'ExampleFilter',
  fn: ExampleFilter
};