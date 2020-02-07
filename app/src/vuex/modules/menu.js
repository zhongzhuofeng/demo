const state = {
  items: [{
      path: '/',
      redirect: {
        name: 'home'
      }
    }, {
      path: "/home",
      name: "home",
      component: () => import("@/views/Home")
    },
    {
      path: "/goodsList",
      name: "goodsList",
      component: () => import("@/views/goodsList")
    }
  ]
};

export default state;
