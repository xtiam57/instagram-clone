import { BareLayout, SidebarLayout } from 'components/Layouts';
import About from 'pages/About';
import Home from 'pages/Home';

export const routes = [
  {
    id: 'about',
    component: About,
    path: '/about',
    exact: true,
    layout: SidebarLayout,
  },
  {
    id: 'home',
    component: Home,
    path: '/',
    exact: true,
    layout: BareLayout,
  },
];
