import Main from "@/views/Main";
import FormLogin from "@/views/FormLogin";
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
    component: FormLogin
  },
    {
    path: '**',
    redirect: "/"
  },
];

export { routes };
