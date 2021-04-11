import createComponent from '@/utils/createComponent';

export default createComponent('Layout', {
  render() {
    return (
      <main
        class={this.currentModule?.main }
      >
        { this.$slots.default() }
      </main>
    );
  },
});
