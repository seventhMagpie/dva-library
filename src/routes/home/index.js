
import { Switch, Route } from 'dva/router'
import { HomeHeader, HomeSidebar } from '../../components'
import Home from './dash'
import BookBorrow from '../book-borrow'
import BookReturn from '../book-return'

import style from './index.less'

const homeRoute = () => {
  return (<div className={style.home}>
    <div className={style.header}>
      <HomeHeader></HomeHeader>
    </div>
    <div className="full-box, flex-row">
      <div className={style.sidebar}>
        <HomeSidebar></HomeSidebar>
      </div>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/book/borrow">
          <BookBorrow />
        </Route>
        <Route path="/book/return">
          <BookReturn />
        </Route>
      </Switch>
    </div>
  </div>)
}

export default homeRoute
