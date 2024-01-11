import React from "react";

const Message = ( {messageText, removeText} ) => {

    return (
        <div className="message">
            <p>
                {messageText}
                <span className="close-message" onClick={removeText}>X</span>
            </p>
        </div>
    )
};

export default Message;