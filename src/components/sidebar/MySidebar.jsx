import createComponent from '@/utils/createComponent';
import MySidebarHeader from '@/components/sidebar/MySidebarHeader';

export default createComponent('Sidebar', {
  props: {
    caption: {
      type: String,
      default: 'Сайдбар',
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
});
