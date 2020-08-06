import style from './index.less'
import { Link } from 'dva/router'
import classNames from 'classnames'
import logo from '../../../assets/img/yay.jpg'

const HomeHeader = () => {

  return (<div className={classNames(style['logo'])} flex-row="between">
    <Link to={'/'} className={classNames(style['logo-link'], 'select-none pointer')} flex-row="center">
      <img className={classNames(style['logo-icon'])} src={logo} alt="logo" />
      <div className={classNames(style['logo-text'])}>魔都书城</div>
    </Link>
  </div>)
}

export default HomeHeader
