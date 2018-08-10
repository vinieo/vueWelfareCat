import Vue from 'vue'
import Router from 'vue-router'
import about from '@/components/about'
import denglu from '@/components/denglu'
import zhuce from '@/components/zhuce'
import wangji from '@/components/wangji'
import index from '@/components/index'
import community from '@/components/community'
import diary from '@/components/diary'
import push from '@/components/push'
import me from '@/components/me'
import top from '@/components/top'
import body from '@/components/body'
import bottom from '@/components/bottom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'about',
      component: about
    },
    {
      path: '/denglu',
      name: 'denglu',
      component: denglu
    },
    {
      path: '/zhuce',
      name: 'zhuce',
      component: zhuce
    },
    {
      path: '/wangji',
      name: 'wangji',
      component: wangji
    },{
      path: '/index',
      name: 'index',
      components:{
        top: top,
        main: index,
        bottom: bottom
      }
},{
  path: '/community',
  name: 'community',
  components:{
    top: top,
    main: community,
    bottom: bottom
  }
},{
  path: '/diary',
  name: 'diary',
  components:{
    top: top,
    main: diary,
    bottom: bottom
  }
},{
  path: '/push',
  name: 'push',
  components:{
    top: top,
    main: push,
    bottom: bottom
  }
},{
  path: '/me',
  name: 'me',
  components:{
    top: top,
    main: me,
    bottom: bottom
  }
}
  ]
})
