import LyEmpty from "@/layouts/LyEmpty";
import LyDashboard from "@/layouts/LyDashboard";

import VwHome from "@/views/VwHome";
import VwDashboardHome from "@/views/VwDashboardHome";

const routes = [{
    path: "/",
    component: LyEmpty,
    children: [{
      path: "",
      name: "Welcome",
      component: VwHome
    }]
  },
  {
    path: "/dashboard",
    component: LyDashboard,
    children: [{
        path: "",
        name: "DashboardHome",
        component: VwDashboardHome
      },
    ]
  }
];

export default routes;