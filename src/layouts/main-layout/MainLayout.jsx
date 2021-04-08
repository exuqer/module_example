import './MainLayout.module.scss';

export default {
  name: 'MainLayout',
  render() {
    return (
      <>
        {
          this.$slots.header
          && <header>
            {this.$slots.header()}
          </header>
        }

        {
          this.$slots.nav
          && <nav>
            <slot name='nav'/>
          </nav>
        }

        {
          this.$slots.contentLeft
          && <aside>
            {this.$slots.contentLeft()}
          </aside>
        }

        {
          this.$slots.default
          && <main>
            {this.$slots.default()}
          </main>
        }

        {
          this.$slots.contentRight
          && <aside>
            {this.$slots.contentRight()}
          </aside>
        }

        {
          this.$slots.footer
          && <footer>
            {this.$slots.footer()}
          </footer>
        }
      </>
    );
  },
};
