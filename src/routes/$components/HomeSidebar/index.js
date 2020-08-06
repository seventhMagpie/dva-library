import { useEffect } from 'react'
import { Menu } from 'antd'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'
import { homeRouteConf } from '../../home'
import classNames from 'classnames'
import style from './index.less'

const { SubMenu } = Menu

const HomeSidebar = ({ dispatch }) => {
  const handleClick = ({ key }) => {
    // 路由导航
    dispatch(routerRedux.push(key))
  }

  let selectedKeys = ''
  let openKeys = []

  console.log(homeRouteConf, selectedKeys)
  useEffect(() => {
    selectedKeys = window.location.hash.replace('#', '')
    // openKeys = [ '/book-system' ]
    console.log(homeRouteConf, selectedKeys)
  }, [ selectedKeys, openKeys ])
  return (<div className={classNames('full-box', style['c-home-sidebar'])}>
    <div className={classNames(style['sidebar-title'])}></div>
    <div flex-col="start">
      <Menu
        onClick={handleClick}
        defaultOpenKeys={[ '/book-system' ]}
        mode="inline"
      >
        {
          homeRouteConf.map((curr => {
            if (Object.prototype.hasOwnProperty.call(curr, 'children')) {
              return (<SubMenu
                key={curr.to}
                title={
                  <span>
                    {curr.icon ? curr.icon : <span></span>}
                    <span>{curr.text}</span>
                  </span>
                }
              >
                {
                  curr.children.map((c) => {
                    return (<Menu.Item key={c.to} icon={c?.icon}>
                      <span>{c.text}</span>
                    </Menu.Item>)
                  })
                }
              </SubMenu>)
            } else {
              return (<Menu.Item key={curr.to} icon={curr?.icon}>
                <span>{curr.text}</span>
              </Menu.Item>)
            }
          }))
        }
      </Menu>
    </div>
  </div>)
}

export default connect()(HomeSidebar)
