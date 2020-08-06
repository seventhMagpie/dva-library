import classNames from 'classnames'
import BookSystemCrumb from '../BookSystemCrumb'

import style from '../index.less'

const Dashboard = () => {
  return (<div className={classNames(style['book-system-up'], 'full-box')} flex-col="start">
    <div flex-item="shirnk" style={{ width: '100%' }}>
      <BookSystemCrumb />
    </div>
    <div className={classNames(style['view'], 'full-box')} flex-item="1">13213132121</div>
  </div>)
}

export default Dashboard
