import './App.scss';
// eslint-disable-next-line import/extensions
import MainLayout from '@/layouts/main-layout/MainLayout.jsx';

export default {
  name: 'App',
  render() {
    return [
      <MainLayout>
        {{
          header: () => [
            <div id="nav">
              <router-link to="/">Home</router-link>
              <router-link to="/about">About</router-link>
            </div>,
          ],
          default: () => [<router-view/>],
        }}
      </MainLayout>,
    ];
  },
};
