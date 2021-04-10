import MySidebar from '@/components/sidebar/MySidebar';
import './Home.scss';
import MyButton from '@/components/button/MyButton';
import MoonlightTheme from '@/themes/moonlight/Moonlight';
import DefaultTheme from '@/themes/default/Default';

// examples local component change
// import MoonlightSidebar from '@/themes/moonlight/modules/Sidebar.module.scss';
// import SidebarContentWrapper from './SidebarContentWrapper.module.scss';

export default {
  name: 'Home',
  methods: {
    toggleTheme() {
      if (this.$globals.theme.name === 'Default') {
        this.$globals.theme = MoonlightTheme;
      } else if (this.$globals.theme.name === 'Moonlight') {
        this.$globals.theme = DefaultTheme;
      }
    },
  },
  render() {
    return <>
        <MySidebar // cssModule={{ ...MoonlightSidebar, ...SidebarContentWrapper }}
        >
          aasdasdasdasd12
          <MyButton onClick={this.toggleTheme}>
              Сменить тему
          </MyButton>
        </MySidebar>
      </>;
  },
};
