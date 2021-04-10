export default {
  name: 'MyButton',
  emits: {
    // No validation
    click: null,
  },

  props: {
    cssModule: {
      type: Object,
      default: null,
    },
  },

  computed: {
    currentModule() {
      const theme = this.$globals.theme.Button;
      return this.cssModule || theme;
    },
  },

  render() {
    return <button
      class={this.currentModule?.Button }
      onClick={() => this.$emit('click')}
    >
      { this.$slots.default() }
    </button>;
  },
};
