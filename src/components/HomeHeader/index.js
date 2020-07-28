import style from './index.less'
import { Link } from 'dva/router'
import classNames from 'classnames'
import logo from '../../assets/img/yay.jpg'

const HomeHeader = () => {

  console.log(style)

  return (<div className={classNames(style['c-home-header'])} flex-row="between">
    <Link to={'/'} className={classNames(style['logo'], 'select-none pointer')} flex-row="center">
      <img className={classNames(style['logo-icon'])} src={logo} alt="logo" />
      <div className={classNames(style['logo-text'])}>魔都书城</div>
    </Link>
    <div>
      00
    </div>
  </div>)
}

export default HomeHeader
