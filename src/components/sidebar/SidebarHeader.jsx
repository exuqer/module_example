import SidebarDefaultModule from './Sidebar.module.scss';

export default {
  name: 'SidebarHeader',
  props: {
    cssModule: {
      type: Object,
      default: () => SidebarDefaultModule,
    },
  },
  render() {
    return <div class={this.cssModule.header}>

      {this.$slots.default()}
    </div>;
  },
};
