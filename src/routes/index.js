import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history', // # 값 제거
    routes: [
        {
            path: '/',
            redirect: '/news',
        },
        {
            //url
            path: '/news',
            // component (page)
            component: NewsView,
        },
        {
            //url
            path: '/jobs',
            // component (page)
            component: JobsView,
        },
        {
            //url
            path: '/ask',
            // component (page)
            component: AskView,
        },
        {
            path: '/item',
            component: ItemView,
        },
        {
            path: '/user',
            component: UserView,
        },
    ]
});
