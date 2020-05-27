import Vue from "vue";

import Datepicker from "vuejs-datepicker";
import Loading from "@/components/Loading.vue";
import AwesomeTable from "@/components/AwesomeTable.vue";
import AwesomeForm from "@/components/AwesomeForm.vue";
import SideNav from "@/components/SideNav.vue";
import TopBar from "@/components/TopBar.vue";

Vue.component("datepicker", Datepicker);
Vue.component("loading", Loading);
Vue.component("awesome-table", AwesomeTable);
Vue.component("awesome-form", AwesomeForm);
Vue.component("side-nav", SideNav);
Vue.component("top-bar", TopBar);
