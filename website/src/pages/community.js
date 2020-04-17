import React from 'react';

import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import MailingListForm from '@site/src/components/MailingListForm';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const AnchoredH2 = Heading('h2');

function Community() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    const {metadata: {team}} = siteConfig.customFields;

    return (
        <Layout title="Community" description="Join the Qovery community. Connect with the core Qovery team and other Qovery users.">
            <header className="hero">
                <div className="container container--fluid">
                    <h1>Qovery Community</h1>
                    <MailingListForm buttonClass="highlight" center={true} size="lg"/>
                </div>
            </header>
            <main>
                <section>
                    <div className="container">
                        <AnchoredH2 id="connect">Connect</AnchoredH2>

                        <div className="row">
                            <div className="col">
                                <a href="https://discord.qovery.com" target="_blank" className="panel panel--link text--center">
                                    <div className="panel--icon">
                                        <i className="feather icon-message-circle"></i>
                                    </div>
                                    <div className="panel--title">Chat</div>
                                    <div className="panel--description">Ask questions and get help</div>
                                </a>
                            </div>
                            <div className="col">
                                <a href="https://twitter.com/qoverydotdev" target="_blank" className="panel panel--link text--center">
                                    <div className="panel--icon">
                                        <i className="feather icon-twitter" title="Twitter"></i>
                                    </div>
                                    <div className="panel--title">@qoverydotdev</div>
                                    <div className="panel--description">Follow us in real-time</div>
                                </a>
                            </div>
                            <div className="col">
                                <a href="https://github.com/qovery" target="_blank" className="panel panel--link text--center">
                                    <div className="panel--icon">
                                        <i className="feather icon-github"></i>
                                    </div>
                                    <div className="panel--title">Github qovery</div>
                                    <div className="panel--description">Issues, code, and development</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <AnchoredH2 id="contribute">Contribute</AnchoredH2>

                        <p>
                            Qovery is <a href="https://github.com/qovery">open-source</a> and welcomes contributions. A few guidelines to
                            help you get started:
                        </p>
                        <ol>
                            <li>Read our <a href="https://github.com/qovery/documentation/blob/master/CONTRIBUTING.md">contribution
                                guide</a>.
                            </li>
                            <li>Start with <a href="https://github.com/qovery/documentation/contribute">good first issues</a>.</li>
                            <li>Join our <a href="https://discord.qovery.com">chat</a> if you have any questions.</li>
                        </ol>
                    </div>
                </section>
            </main>
        </Layout>
    );
}

export default Community;
