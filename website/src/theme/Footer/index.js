import React from 'react';

import Link from '@docusaurus/Link';
import SVG from 'react-inlinesvg';

import classnames from 'classnames';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import useThemeContext from '@theme/hooks/useThemeContext';

function FooterLink({to, href, label, ...props}) {
    const toUrl = useBaseUrl(to);
    return (
        <Link
            className="footer__link-item"
            {...(href
                ? {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    href,
                }
                : {
                    to: toUrl,
                })}
            {...props}>
            {label}
        </Link>
    );
}

const FooterLogo = ({url, alt}) => (
    <SVG className="footer__logo" alt={alt} src={url}/>
);

function Footer() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    const {themeConfig = {}} = siteConfig;
    const {footer} = themeConfig;
    const {isDarkTheme} = useThemeContext();

    const {copyright, links = [], logo = {}} = footer || {};
    const logoUrl = useBaseUrl(logo.src);

    if (!footer) {
        return null;
    }

    let srcLogo = "/img/logo-light.svg";
    if (isDarkTheme) {
        srcLogo = "/img/logo-dark.svg";
    }

    return (
        <footer
            className={classnames('footer', {
                'footer--dark': footer.style === 'dark',
            })}>
            <div className="container">
                {links && links.length > 0 && (
                    <div className="row footer__links">
                        <div className="col col--5 footer__col">
                            <div className="margin-bottom--md">
                                <SVG className="navbar__logo" src={srcLogo} alt="Qovery" width="150" height="auto"/>
                            </div>
                            <div className="margin-bottom--md">
                                {/*<MailingListForm description={true} width="150px"/>*/}
                                <p>
                                   Qovery is the Next-Gen DevOps Platform to Build and Scale Your Apps on AWS
                                </p>
                            </div>
                            <div>
                                <a href="https://github.com/qovery" target="_blank"><i className="feather icon-github" alt="Qovery's Github Repo"></i></a>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <a href="https://www.linkedin.com/company/qovery/" target="_blank"><i className="feather icon-rss" alt="Qovery's Linkedin"></i></a>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <a href="https://twitter.com/qovery_" target="_blank"><i className="feather icon-twitter" alt="Qovery's Twitter"></i></a>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <a href="https://discord.qovery.com" target="_blank"><i className="feather icon-message-circle" alt="Qovery's Discord"></i></a>
                            </div>
                        </div>
                        {links.map((linkItem, i) => (
                            <div key={i} className="col footer__col">
                                {linkItem.title != null ? (
                                    <h4 className="footer__title">{linkItem.title}</h4>
                                ) : null}
                                {linkItem.items != null &&
                                Array.isArray(linkItem.items) &&
                                linkItem.items.length > 0 ? (
                                    <ul className="footer__items">
                                        {linkItem.items.map((item, key) =>
                                            item.html ? (
                                                <li
                                                    key={key}
                                                    className="footer__item"
                                                    dangerouslySetInnerHTML={{
                                                        __html: item.html,
                                                    }}
                                                />
                                            ) : (
                                                <li key={item.href || item.to} className="footer__item">
                                                    <FooterLink {...item} />
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                ) : null}
                            </div>
                        ))}
                    </div>
                )}
                {(logo || copyright) && (
                    <div className="text--center">
                        {logo && logo.src && (
                            <div className="margin-bottom--sm">
                                {logo.href ? (
                                    <a
                                        href={logo.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.footerLogoLink}>
                                        <FooterLogo alt={logo.alt} url={logoUrl}/>
                                    </a>
                                ) : (
                                    <FooterLogo alt={logo.alt} url={logoUrl}/>
                                )}
                            </div>
                        )}
                        <small>{copyright}</small><br/>
                        {/*<small>
                            <a href="https://github.com/qovery/documentation/security/policy">Security Policy</a>&nbsp;&bull;&nbsp;
                            <a href="https://github.com/qovery/documentation/blob/master/PRIVACY.md">Privacy Policy</a>
                        </small>*/}
                    </div>
                )}
            </div>
        </footer>
    );
}

export default Footer;
