import TheHome from './components/TheHome';
import TheSignup from './components/TheSignup';
import TheLogin from './components/TheLogin';
import TheUpdate from './components/TheUpdate';
import TheCart from './components/TheCart';

const routes = [
    {
        path: '/',
        name: 'TheHome',
        component: TheHome,
    },
    {
        path: '/signup',
        name: 'TheSignup',
        component: TheSignup,
    },
    {
        path: '/login',
        name: 'TheLogin',
        component: TheLogin,
    },
    {
        path: '/update/:id',
        name: 'TheUpdate',
        component: TheUpdate,
    },
    {
        path: '/cart/:id',
        name: 'TheCart',
        component: TheCart,
    }
];

export default routes;
