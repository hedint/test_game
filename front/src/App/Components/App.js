import React from 'react';
import Navigation from './Navigation';
const App = ({children}) => (
    <div className="wrapper">
       <Navigation/>
        <div className="main-wrapper">
            {children}
        </div>
    </div>
);
export default App;