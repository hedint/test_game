var Moment = require('moment');
var momentLocalizer = require('react-widgets/lib/localizers/moment');
momentLocalizer(Moment);

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { syncHistoryWithStore} from 'react-router-redux'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import createMyStore from './App/store';
import ChildrenPageCont from './Childs/Containers/ChildrenPageCont';
import ChildTestsPageCont from './ChildTest/Containers/ChildTestsPageCont';
import MedExaminationsPageCont from './MedExamination/Containers/MedExaminationsPageCont';
import ProductsPageCont from './Product/Containers/ProductsPageCont';
//import DailyDietPageWrap from './Product/Containers/DailyDietPageWrap';
import * as actions from './Childs/actions';
import App from './App/Components/App.js';

let store = createMyStore();

const history = syncHistoryWithStore(browserHistory, store);

const Root = () => (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <Route path="children" component={ChildrenPageCont}/>
                <Route path="child_tests" component={ChildTestsPageCont}/>
                <Route path="med_examinations" component={MedExaminationsPageCont}/>
                <Route path="products" component={ProductsPageCont}/>
                <Route path="daily_diet" component={ProductsPageCont}/>
            </Route>
        </Router>
    </Provider>
);
render(
   <Root />, document.getElementById('root')
);
//store.dispatch(actions.loadChildrenApi());