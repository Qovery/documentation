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
                                    <div className="panel--title">Discord</div>
                                    <div className="panel--description">Join our community on Discord</div>
                                </a>
                            </div>
                            <div className="col">
                                <a href="https://community.qovery.com" target="_blank" className="panel panel--link text--center">
                                    <div className="panel--icon">
                                        <i className="feather icon-globe"></i>
                                    </div>
                                    <div className="panel--title">Forum</div>
                                    <div className="panel--description">Join our community on Discourse</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <a href="https://twitter.com/Qovery_" target="_blank" className="panel panel--link text--center">
                                    <div className="panel--icon">
                                        <i className="feather icon-twitter" title="Twitter"></i>
                                    </div>
                                    <div className="panel--title">@Qovery</div>
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

            </main>
        </Layout>
    );
}

export default Community;
