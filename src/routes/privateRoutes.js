import App from '../App';
import Demo from '../Demo';

const service_A = [
  {
    path: '/',
    component: App,
    exact: true,
    role: 'ABC'
  },
  {
    path: '/chuyen-trang',
    component: Demo,
    role: 'DEF'
  }
];

const service_B = [];


export const privateRoutes = [
  ...service_A,
  ...service_B
];