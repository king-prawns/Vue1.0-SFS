import Vue from 'vue'
import Router from 'vue-router'
import I18n from 'vue-i18n'
import VueResource from 'vue-resource'

import App from './App'
import UserView from './view/UserView'
import UserDetailView from './view/User-detailView'
import UserTodosView from './view/UserTodosView'
import PostsView from './view/PostsView'

import Locales from './translate/translate.js'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css' 
 
//install i18n
Vue.use(I18n);
Vue.config.lang = 'en';

Object.keys(Locales).forEach(function (lang) {
    Vue.locale(lang, Locales[lang])
});

//install vue resource
Vue.use(VueResource);

//vue resource interceptors for loader
Vue.http.interceptors.push((request, next)  => {
    // modify request
    //console.log("start http");
    NProgress.start();
    // continue to next interceptor
    next((response) => {
        // modify response
        //console.log("stop http");
        NProgress.done();
    });
});

// install router
Vue.use(Router)

// routing
var router = new Router()

router.map({
    '/users': {
        component: UserView
    },
    '/user/:id': {
        name: 'userDetails',
        component: UserDetailView
    },
    '/user/:id/todos': {
        name: 'userTodos',
        component: UserTodosView
    },
    '/posts': {
        component: PostsView
    }
})


router.redirect({
  '*': '/users'
})

router.start(App, '#app')

