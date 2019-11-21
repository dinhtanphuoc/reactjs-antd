const service_A = [
  {
    path: 'abc',
    component: null,
    role: 'ABC'
  },
  {
    path: 'def',
    component: null,
    role: 'ABC'
  }
];

const service_B = [
  {
    path: '123',
    component: null,
    role: 'ABC'
  },
  {
    path: '456',
    component: null,
    role: 'ABC'
  }
];


export const privateRoutes = [
  ...service_A,
  ...service_B
];