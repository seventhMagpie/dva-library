import { connect } from 'dva'

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

  return (<div>
    <button onClick={onClick}>获取model数据</button>
  </div>)
}

// 连接model
export default connect((state) => {
  console.log(state)
  return {
    header: state['home'].header
  }
})(Home)
