import React from "react";

const Message = ( {messageText, removeMessage} ) => {

    return (
        <div className="message">
            <p>
                {messageText}
                <span className="close-message" onClick={removeMessage}>X</span>
            </p>
        </div>
    )
};

export default Message;