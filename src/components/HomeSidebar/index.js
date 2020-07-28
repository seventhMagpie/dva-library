import { Link } from 'dva/router'
import classNames from 'classnames'
import style from './index.less'

const HomeSidebar = () => {
  
  const menuList = [
    {
      to: '/book/borrow',
      text: '看书'
    }, {
      to: '/book/return',
      text: '还书'
    }
  ]

  return (<div className={classNames('full-box', style['c-home-sidebar'])}>
    <div className={classNames(style['sidebar-title'])}></div>
    <div flex-col="start">
      {
        menuList.map((curr) => {
        return (<Link to={curr.to} key={curr.to}>{curr.text}</Link>)
        })
      }
    </div>
  </div>)
}

export default HomeSidebar
