import React from "react";

const Message = ( {messageText, removeText} ) => {

    return (
        <div className="message">
            <p>
                <span className="close-message">X</span>
            </p>
        </div>
    )
};

export default Message;