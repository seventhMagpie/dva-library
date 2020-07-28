import { connect } from 'dva'
import classNames from 'classnames'

import DashBoard from '../../../components/Home/DashBoard'
import DashChart from '../../../components/Home/DashChart'
import style from './index.less'

const Home = (props) => {

  console.log(props)

  return (<div>
    <div className={classNames(style['title'])}>home</div>
    <div>
      <DashBoard />
    </div>
    <div>
      <DashChart />
    </div>
  </div>)
}

// 连接model
export default connect((state) => {
  console.log(state)
  return {
    header: state['home'].header
  }
})(Home)
