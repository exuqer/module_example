export default {
  name: 'MySidebarHeader',

  cssModule: {
    type: Object,
    default: null,
  },

  computed: {
    currentModule() {
      const theme = this.$globals.theme.SidebarHeader;
      return this.cssModule || theme;
    },
  },

  render() {
    return <div class={this.currentModule.header}>
      <h2>
        {this.$slots.default()}
      </h2>
    </div>;
  },
};
