import React, {Fragment} from 'react'
import Login from './pages/login'
import Home from './pages/home'
import IOT from './pages/iot'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

function App() {
  return (
    <Fragment>
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/iot" component={IOT} />
          <Route exact path="/" component={IOT} />  {/* exact表示是否精确匹配 */}
          <Redirect to={"/home"} /> {/*Redirect表示 以上都没有匹配成功的会，默认跳转的路由 */}
        </Switch>
      </HashRouter>
    </Fragment>
  )
}

export default App