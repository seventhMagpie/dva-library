
import { Switch, Route } from 'dva/router'
import { MailOutlined, MacCommandOutlined } from '@ant-design/icons'
import classNames from 'classnames'
import { HomeHeader, HomeSidebar } from '../$components'

import BookSystemUp from '../../components/BookSystem/BookSystemUp'
import BookSystemDown from '../../components/BookSystem/BookSystemDown'
import style from './index.less'

const homeRouteConf = [
  {
    to: '/book-system',
    icon: <MailOutlined />,
    text: '书籍管理',
    children: [
      {
        to: '/book-system/up',
        exact: true,
        component: BookSystemUp,
        text: '新书上架'
      }, {
        to: '/book-system/down',
        component: BookSystemDown,
        text: '书籍下架'
      }
    ]
  }, {
    to: '/borrow-system',
    icon: <MacCommandOutlined />,
    component: BookSystemUp,
    text: '借阅管理'
  }
]

const homeRoute = () => {
  return (<div className={style.home} flex-col="start">
    <div className={style.header}>
      <HomeHeader></HomeHeader>
    </div>
    <div className={classNames("full-box", style['home-body'])} flex-row="start">
      <div className={classNames(style['home-body'], style.sidebar)}>
        <HomeSidebar></HomeSidebar>
      </div>
      <div className={classNames(style['home-view'])} flex-item="1">
        <Switch>
          {
            homeRouteConf.map(curr=> {
              if (curr.children) {
                return (
                  curr.children.map(c => (
                    <Route exact={c.exact} path={c.to} component={c.component} key={c.to}></Route>)
                  )// .concat((<Route exact={curr.exact} path={curr.to} component={curr.component} key={curr.to}></Route>))
                )
              } else {
                return (<Route exact={curr.exact} path={curr.to} component={curr.component} key={curr.to}></Route>)
              }
            })
          }
        </Switch>
      </div>
    </div>
  </div>)
}

export { homeRouteConf }
export default homeRoute
