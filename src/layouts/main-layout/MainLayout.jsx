import './MainLayout.module.scss';

export default {
  name: 'MainLayout',

  props: {
    cssModule: {
      type: Object,
      default: () => ({}),
    },
  },

  render() {
    return (
      <>
        {
          this.$slots.default
          && <main>
            {this.$slots.default({
              cssModule: this.cssModule,
            })}
          </main>
        }
      </>
    );
  },
};
