import Main from "@/views/Main";
import formLogin from "@/views/formLogin";
import Dashboard from "@/views/Dashboard"
import RouterView from "@/views/RouterView";

const routes = [
  {
    path: "/",
    name: "root",
    meta: {
      requiresAuth: false
    },
    component: Main,
  },
  {
    path: "/formLogin",
    name: "",
    meta: {
      requiresAuth: false
    },
    component: formLogin,
  },
  {
    path: "/dashboard",
    name: "",
    meta: {
      requiresAuth: false
    },
    component: Dashboard,
  },
  {
    path: '**',
    redirect: "/"
  },
];

export { routes };
