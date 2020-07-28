const { Link } = require("dva/router")

const HomeHeader = () => {

  const menuList = [
    {
      to: '/book/borrow',
      text: '看书'
    }, {
      to: '/book/return',
      text: '还书'
    }
  ]

  return (<div className="c-home-header">
    <div>
      {
        menuList.map((curr) => {
        return (<Link to={curr.to}>{curr.text}</Link>)
        })
      }
    </div>
  </div>)
}

export default HomeHeader
