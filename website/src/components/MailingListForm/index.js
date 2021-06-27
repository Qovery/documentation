import React, { useState } from 'react';

import classnames from 'classnames';
import addToMailchimp from '@site/src/exports/mailchimp'

import './styles.css';

const DEFAULT_ERROR_MSG = "Could not subscribe :("

const MailingListForm = ({ block, buttonClass, center, description, subscriptionEnabled, size, width }) => {

  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [err, setErr] = useState(false)
  const [errMsg, setErrMsg] = useState(DEFAULT_ERROR_MSG)

  const handleSubmit = e => {
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
            if (res.msg.includes(email + ' is already subscribed')) {
              setErrMsg("This email is already subscribed to the newsletter")
            } else {
              setErrMsg(DEFAULT_ERROR_MSG)
            }
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
            {description}
        </div>
      )}
      {subscriptionEnabled && !subscribed &&
        <form onSubmit={e => handleSubmit(e)} className={classnames("mailing-list--form")}>
          <input onChange={e => setEmail(e.target.value)} className={classnames('input', `input--${size}`)} name="email" placeholder="you@email.com" type="email" style={{ width: width }} />
          <button className={classnames('button', `button--${buttonClass || 'primary'}`, `button--${size}`)} type="submit">Subscribe</button>
        </form>}
        {err && <span className="badge badge--secondary">{errMsg}</span>}
      <div style={{ textAlign: 'center' }}>
        {subscriptionEnabled && subscribed && <span className="badge badge--primary">Subscribed!</span>}
      </div>
    </div>
  );
}

export default MailingListForm;
