import React from 'react';

import classnames from 'classnames';

import './styles.css';

function MailingListForm({block, buttonClass, center, description, size, width}) {
  return (
    <div className={classnames('mailing-list', {'mailing-list--block': block, 'mailing-list--center': center, [`mailing-list--${size}`]: size})}>
      {description !== false && (
        <div className="mailing-list--description">
          The easiest way to stay up-to-date. One email on the 1st of every month. No spam, ever.
        </div>
      )}
      <form action="https://qovery.us4.list-manage.com/subscribe/post?u=3c76e7a2087d5bc4020348c46&amp;id=63bd993879" method="post" className="mailing-list--form">
        <input className={classnames('input', `input--${size}`)} name="email" placeholder="you@email.com" type="email" style={{width: width}} />
        <button className={classnames('button', `button--${buttonClass || 'primary'}`, `button--${size}`)} type="submit">Subscribe</button>
      </form>
    </div>
  );
}

export default MailingListForm;
