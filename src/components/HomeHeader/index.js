import style from './index.less'
import classNames from 'classnames'

import Logo from './Logo'
import UserCenter from './UserCenter'

const HomeHeader = () => {

  console.log(style)

  return (<div className={classNames(style['c-home-header'])} flex-row="between">
    <div>
      <Logo />
    </div>
    <div>
      <UserCenter />
    </div>
  </div>)
}

export default HomeHeader
