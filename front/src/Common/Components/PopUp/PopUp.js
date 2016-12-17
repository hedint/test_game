import React from 'react';
var classNames = require('classnames');
const PopUp = ({item, visible, children, hidePopup}) => {
    let classnames = classNames({
        'popup-container' : true,
        'popup-container__visible' : visible
    });
    return (
        <div className={classnames}>
            <div className='popup-modal'>
                <div className='popup-modal__close' onClick={hidePopup}><i className="fa fa-times fa-fw" aria-hidden="true"></i></div>
                {children}
            </div>
        </div>
    );
};
export default PopUp;