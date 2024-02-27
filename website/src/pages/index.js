import React from 'react';

import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import MailingListForm from '@site/src/components/MailingListForm';

const AnchoredH2 = Heading('h2');

function Home() {
    return (
        <Layout title="Qovery Hub | Documentation, Guides, Tutorials" description="Qovery is an Internal Developer Platform Helping Platform Engineers and Developers To Ship Faster.">
            <header className="hero">
                <div className="container container--fluid">
                    <h1>Qovery Hub Resources</h1>
                    <MailingListForm buttonClass="highlight" description="Qovery is an Internal Developer Platform Helping Platform Engineers and Developers To Ship Faster." center={true} size="lg"/>
                </div>
            </header>
            <main>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <a href="docs" className="panel panel--link text--center">
                                    <div className="panel--icon">
                                        <i className="feather icon-book"></i>
                                    </div>
                                    <div className="panel--title">Documentation</div>
                                    <div className="panel--description">Read our product documentation</div>
                                </a>
                            </div>
                            <div className="col">
                                <a href="guides" className="panel panel--link text--center">
                                    <div className="panel--icon">
                                        <i className="feather icon-layers"></i>
                                    </div>
                                    <div className="panel--title">Guides</div>
                                    <div className="panel--description">Get started using Qovery smoothly</div>
                                </a>
                            </div>
                            <div className="col">
                                <a href="guides/tutorial" className="panel panel--link text--center">
                                    <div className="panel--icon">
                                        <i className="feather icon-bookmark"></i>
                                    </div>
                                    <div className="panel--title">Tutorials</div>
                                    <div className="panel--description">Check out our community tutorials</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="container" style={{marginTop: "10px"}}>
                        <div className="row">
                            <div className="col">
                                <a href="https://roadmap.qovery.com" target="_blank" className="panel panel--link text--center">
                                    <div className="panel--icon">
                                        <i className="feather icon-flag"></i>
                                    </div>
                                    <div className="panel--title">Roadmap</div>
                                    <div className="panel--description">Check out our public Roadmap</div>
                                </a>
                            </div>

                            <div className="col">
                                <a href="https://discuss.qovery.com" target="_blank" className="panel panel--link text--center">
                                    <div className="panel--icon">
                                        <i className="feather icon-message-circle"></i>
                                    </div>
                                    <div className="panel--title">Forum</div>
                                    <div className="panel--description">Join our community on Discourse</div>
                                </a>
                            </div>
                            <div className="col">
                                <a href="https://github.com/Qovery" target="_blank" className="panel panel--link text--center">
                                    <div className="panel--icon">
                                        <i className="feather icon-github"></i>
                                    </div>
                                    <div className="panel--title">Github</div>
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

export default Home;
