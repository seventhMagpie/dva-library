import classNames from 'classnames'

import style from './index.less'
import avatarDef from '../../../assets/img/yay.jpg'

const UserCenter = () => {
  return (<div className={classNames(style['user-center'])}>
    <img className={classNames(style.avatar, 'pointer')} src={avatarDef} alt="用户头像" />
  </div>)
}

export default UserCenter
