export default (componentName, options) => ({
  ...options,
  name: `My${componentName}`,
  props: {
    cssModule: {
      type: Object,
      default: null,
    },

    ...options.props,
  },

  computed: {
    currentModule() {
      const theme = this.$globals.theme[componentName];
      return this.cssModule || theme;
    },

    ...options.computed,
  },
});
