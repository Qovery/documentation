import React, { useState } from 'react';

import classnames from 'classnames';
import addToMailchimp from '@site/src/exports/mailchimp'

import './styles.css';

const MailingListForm = ({ block, buttonClass, center, description, size, width }) => {

  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [err, setErr] = useState(false)

  const handleSubmit = e => {
    console.log(email)
    e.preventDefault();
    addToMailchimp(email)
      .then(res => {
        if (res.result === 'success') {
          setSubscribed(true)
          if (err) {
            setErr(false)
          }
        } else {
            setErr(true)
        }
      })
      .catch(e => {
        setErr(true)
      })
  }

  return (
    <div className={classnames('mailing-list', { 'mailing-list--block': block, 'mailing-list--center': center, [`mailing-list--${size}`]: size })}>
      {description !== false && (
        <div className="mailing-list--description">
          The easiest way to stay up-to-date. One email on the 1st of every month. No spam, ever.
        </div>
      )}
      {!subscribed &&
        <form onSubmit={e => handleSubmit(e)} className={classnames("mailing-list--form")}>
          <input onChange={e => setEmail(e.target.value)} className={classnames('input', `input--${size}`)} name="email" placeholder="you@email.com" type="email" style={{ width: width }} />
          <button className={classnames('button', `button--${buttonClass || 'primary'}`, `button--${size}`)} type="submit">Subscribe</button>
        </form>}
        {err && <span className="badge badge--secondary">Something went wrong :(</span>}
      <div style={{ textAlign: 'center' }}>
        {subscribed && <span className="badge badge--primary">Subscribed!</span>}
      </div>
    </div>
  );
}

export default MailingListForm;
