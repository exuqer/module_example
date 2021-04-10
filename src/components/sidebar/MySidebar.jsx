import MySidebarHeader from '@/components/sidebar/MySidebarHeader';

export default {
  name: 'MySidebar',
  props: {
    caption: {
      type: String,
      default: 'Сайдбар',
    },

    cssModule: {
      type: Object,
      default: null,
    },
  },

  computed: {
    currentModule() {
      const theme = this.$globals.theme.Sidebar;
      return this.cssModule || theme;
    },
  },

  render() {
    return <aside class={this.currentModule?.aside}>
      <MySidebarHeader>{this.caption}</MySidebarHeader>
      <section class={this.currentModule?.contentWrapper}>
        {this.$slots.default()}
      </section>
    </aside>;
  },
};
