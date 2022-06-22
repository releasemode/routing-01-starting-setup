import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue';
import store from '@/store/store.js'
import TeamsList from '@/components/teams/TeamsList.vue';
import UsersList from '@/components/users/UsersList.vue';
import UsersFooter from '@/components/users/UsersFooter.vue';
import TeamMembers from '@/components/teams/TeamMembers.vue';
import TeamsFooter from '@/components/teams/TeamsFooter.vue';
import NotFound from '@/components/NotFound.vue';

const app = createApp(App)

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:"/", redirect:"/teams"},
        {
            name:'teams',
            path:"/teams", 
            components:{default:TeamsList,footer:TeamsFooter},
            children:[
                { name:'teamMembers',path:":teamId", component:TeamMembers},
            ]
        },
        {path:"/users", components:{default:UsersList,footer:UsersFooter},alias:'/members'},
      
        {path:"/:notFound(.*)", component:NotFound}
    ],
    scrollBehavior(savedPosition){
            console.log(savedPosition);
            var body = document.body,
            html = document.documentElement;
            var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
            var div =      document.getElementById('teamMembersDiv')     
            if(div){
                var offsets = div.getBoundingClientRect();
                var devHeight = offsets.height;
                return {left:0,top:(height/2)-(devHeight/2)};
            }
    }
})

router.beforeEach(function(to,from,next){
    console.log("Global beforeEach",from,to);
    next();
});
    


app.use(router);
app.use(store);
app.mount('#app');
