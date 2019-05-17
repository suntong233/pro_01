import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';

const routes = [
    {//导航主页面
        path: "/",
        models: () => [import('./models/example')],
        component: () => import('./routes/IndexPage')
    },
    {//静态页面
        path: "/MyPage",
        models: () => [import('./models/mypage')],
        component: () => import('./routes/MyPage')
    },
    {//动态页面
        path: "/CrudPage",
        models: () => [import('./models/crudpage')],
        component: () => import('./routes/CrudPage')
    },
    {//尝试
        path: "/tryPage",
        models: () => [import('./models/tryList')],
        component: () => import('./routes/TryPage')
    },
];

function RouterConfig({history,app}) {
    return (
        <Router history={history}>
            <Switch>
                {
                    routes.map(({ path, ...dynamics }, key)=>(
                        <Route 
                            key={key}
                            exact
                            path={path}
                            component={dynamic({
                                app,
                                ...dynamics,
                            })}
                        />
                    ))
                }
            </Switch>
        </Router>
    );
}

export default RouterConfig;
