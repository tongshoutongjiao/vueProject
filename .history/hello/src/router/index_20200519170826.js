import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index.vue'
import Login from '../components/login.vue'
import Foo from '../components/foo.vue'
import Bar from '../components/bar.vue'
import User from '../components/user.vue'

Vue.use(Router);
export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'index',
            component: {
                default: index,
                a: Bar,
                b: Foo
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/foo',
            name: 'foo',
            component: Foo
        },
        {
            path: '/bar',
            name: 'bar',
            component: Bar
        }, {
            path: '/user/:id',
            name: 'user',
            component: User
        }
    ]
})