import { Link } from 'dva/router'
import classNames from 'classnames'
import style from './index.less'

const HomeSidebar = () => {
  
  const menuList = [
    {
      to: '/book/borrow',
      text: '书籍管理',
      children: [
        {
          to: '/book/up',
          text: '新书上架'
        }, {
          to: '/book/down',
          text: '书籍下架'
        }
      ]
    }, {
      to: '/book/return',
      text: '借阅管理'
    }
  ]

  return (<div className={classNames('full-box', style['c-home-sidebar'])}>
    <div className={classNames(style['sidebar-title'])}></div>
    <div flex-col="start">
      {
        menuList.map((curr) => {
          if (curr.children && curr.children instanceof Array) {
            return [
              <div>{curr.text}</div>
            ].concat(
              curr.children.map(c => {
                return (<Link to={c.to} key={c.to}>{c.text}</Link>)
              })
            )
          } else {
            return (<Link to={curr.to} key={curr.to}>{curr.text}</Link>)
          }
        })
      }
    </div>
  </div>)
}

export default HomeSidebar
