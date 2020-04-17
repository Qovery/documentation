import React from 'react';

function Empty({text}) {
    return (
        <section className="empty">
            <div className="icon"><img src="/img/logo-square.svg" alt="The Qovery Logo"/></div>
            <div className="text">{text}</div>
        </section>
    );
}

export default Empty;
