import TheHome from './components/TheHome';
import TheSignup from './components/TheSignup';
import TheLogin from './components/TheLogin';
import TheUpdate from './components/TheUpdate';


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
];

export default routes;
