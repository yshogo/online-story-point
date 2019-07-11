import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import RoomList from "./views/RoomList.vue";
import InputName from "./views/InputName"

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/create_room",
            name: "create_room",
            component: () =>
                import ( /* webpackChunkName: "about" */ "./views/CreateRoom.vue")
        },
        {
            path: "/room_list",
            name: "room_list",
            component: () =>
                import ( /* webpackChunkName: "about" */ "./views/RoomList.vue")
        },
        {
            path: "/input_name",
            name: "input_name",
            component: () =>
                import ( /* webpackChunkName: "about" */ "./views/InputName.vue")
        },
    ]
});