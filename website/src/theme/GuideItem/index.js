import React from 'react';
import Link from '@docusaurus/Link';
import SVG from 'react-inlinesvg';
import Tags from '@site/src/components/Tags';
import {enrichTags} from '@site/src/exports/tags';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useThemeContext from '@theme/hooks/useThemeContext';

import './styles.css';

function GuideItem(props) {
    const {
        frontMatter,
        metadata,
        isGuidePage = false,
    } = props;
    const {isDarkTheme} = useThemeContext();
    const {categories, description, permalink, readingTime, seriesPosition, tags} = metadata;
    const {author_github, cover_label: coverLabel, last_modified_on: lastModifiedOn, title} = frontMatter;
    const enrichedTags = enrichTags(tags, 'guides');
    const domainTag = enrichedTags.find(tag => tag.category == 'domain');
    const domainBG = domainTag ? domainTag.value : 'default';
    const languageTag = enrichedTags.find(tag => tag.category == 'language');
    const languageName = languageTag ? languageTag.value : null;
    const frameworkTag = enrichedTags.find(tag => tag.category == 'framework');
    const frameworkName = frameworkTag ? frameworkTag.value : null;
    const technologyTag = enrichedTags.find(tag => tag.category == 'technology');
    const technologyName = technologyTag ? technologyTag.value : null;
    const platformTag = enrichedTags.find(tag => tag.category == 'platform');
    const platformName = platformTag ? platformTag.value : null;
    const sourceTag = enrichedTags.find(tag => tag.category == 'source');
    const sourceName = sourceTag ? sourceTag.value : null;
    const sinkTag = enrichedTags.find(tag => tag.category == 'sink');
    const sinkName = sinkTag ? sinkTag.value : null;

    const {siteConfig} = useDocusaurusContext();
    const {metadata: {installation, sources, sinks, languages, frameworks, technologies}} = siteConfig.customFields;
    const {platforms} = installation;
    const platform = platformName && platforms[platformName];
    const source = sourceName && sources[sourceName];
    const sink = sinkName && sinks[sinkName];
    const language = languageName && languages.find(language => language.name === languageName);
    const framework = frameworkName && frameworks.find(framework => framework.name === frameworkName);
    const technology = technologyName && technologies.find(framework => framework.name === technologyName);
    const sourceIcon = (platform || source) !== null;
    const sinkIcon = sink != null;

    let sourceLogoPath = null;

    if (framework) {
        if (isDarkTheme) {
            sourceLogoPath = framework.dark_logo_path;
        } else {
            sourceLogoPath = framework.logo_path;
        }
    } else if (technology) {
        if (isDarkTheme) {
            sourceLogoPath = technology.dark_logo_path;
        } else {
            sourceLogoPath = technology.logo_path;
        }
    } else if (language) {
        if (isDarkTheme) {
            sourceLogoPath = language.dark_logo_path;
        } else {
            sourceLogoPath = language.logo_path;
        }
    } else if (platform) {
        sourceLogoPath = platform.logo_path;
    } else if (source) {
        sourceLogoPath = source.logo_path;
    }

    let sinkLogoPath = null;

    if (sink) {
        sinkLogoPath = sink.logo_path;
    }

    return (
        <Link to={permalink + '/'} className={`guide-item`}>
            <article>
                <div className={`domain-bg domain-bg--${domainBG} domain-bg--hover`}>
                    <header>
                        <div className="category">{categories[0].name}</div>
                        <h2 title={title}>{seriesPosition && (seriesPosition + '. ')}{coverLabel || title}</h2>
                    </header>
                    <footer>
                        {sourceLogoPath && <SVG src={sourceLogoPath} className="logo"/>}
                        {!sourceLogoPath && sourceIcon && <div className="logo"><i className="feather icon-server"/></div>}
                        {sinkLogoPath && <SVG src={sinkLogoPath} className="logo"/>}
                        {!sinkLogoPath && sinkIcon && <div className="logo"><i className="feather icon-server"/></div>}
                        {!sourceLogoPath && !sinkLogoPath && !sourceIcon && !sinkIcon && <Tags colorProfile="guides" tags={tags}/>}
                        <div className="action">read now</div>
                    </footer>
                </div>
            </article>
        </Link>
    );
}

export default GuideItem;
