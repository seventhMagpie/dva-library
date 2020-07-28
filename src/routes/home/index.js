
import { Switch, Route } from 'dva/router'
import classNames from 'classnames'
import { HomeHeader, HomeSidebar } from '../../components'
import Home from './dash'
import BookBorrow from '../book-borrow'
import BookReturn from '../book-return'

import style from './index.less'

const homeRoute = () => {
  return (<div className={style.home} flex-col="start">
    <div className={style.header}>
      <HomeHeader></HomeHeader>
    </div>
    <div className={classNames("full-box", style['home-body'])} flex-row="start">
      <div className={classNames(style['home-body'], style.sidebar)}>
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
