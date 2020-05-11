// 专门用来处理权限
import router from '@/router'
router.beforeEach(function (to, from, next) {
  if (to.path.startsWith('/home')) {
    const token = window.localStorage.getItem('use-token')

    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})
