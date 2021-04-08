import SidebarHeader from '@/components/sidebar/SidebarHeader';
import SidebarDefaultModule from './Sidebar.module.scss';

export default {
  name: 'SidebarHeader',
  props: {
    cssModule: {
      type: Object,
      default: () => SidebarDefaultModule,
    },
    caption: {
      type: String,
      default: 'Сайдбар',
    },
  },
  render() {
    return <aside class={this.cssModule.header}>
      <SidebarHeader>{this.caption}</SidebarHeader>
      {this.$slots.default()}
    </aside>;
  },
};
