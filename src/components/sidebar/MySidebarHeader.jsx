import createComponent from '@/utils/createComponent';

export default createComponent('SidebarHeader', {
  render() {
    return <div class={this.currentModule.header}>
      <h2>
        {this.$slots.default()}
      </h2>
    </div>;
  },
});
