import createComponent from '@/utils/createComponent';

export default createComponent('Button', {
  emits: {
    // No validation
    click: null,
  },

  render() {
    return <button
      class={this.currentModule?.Button }
      onClick={() => this.$emit('click')}
    >
      { this.$slots.default() }
    </button>;
  },
});
