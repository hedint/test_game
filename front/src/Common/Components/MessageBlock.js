import React from 'react';
var classNames = require('classnames');

const MessageBlock = ({text, type}) => {
    let class_names = classNames({
        'message-block': true,
        ['message-block_'+type]: true

    });
    return (
        <div className={class_names}>{text}</div>
    );
};
export default MessageBlock;