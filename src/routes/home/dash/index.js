import { useEffect } from 'react'
import { connect } from 'dva'
import echarts from 'echarts'
import classNames from 'classnames'

import style from './index.less'

const Home = (props) => {

  const { 
    dispatch
  } = props

  const onClick = () => {
    // console.log(props)
    dispatch({
      type: 'text',
      payload: {
        value: 1
      }
    })
  }
  useEffect(() => {
    const echartDash1 = document.getElementById('echarts-dash-1')
    echarts.init(echartDash1).setOption({
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
      }]
    })
  }, [])

  return (<div>
    <div onClick={onClick}>home</div>
    <div id="echarts-dash-1" className={classNames(style['echarts-dash-1'])}></div>
  </div>)
}

// 连接model
export default connect((state) => {
  console.log(state)
  return {
    header: state['home'].header
  }
})(Home)
