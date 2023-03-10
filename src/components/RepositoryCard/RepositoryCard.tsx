import React from "react";
import { Link } from "react-router-dom";

import { Container, AboutSide, RepoIcon, InfosSide, StarIcon, ForkIcon } from './styles'

interface Props {
    username: string;
    reponame: string;
    description?: string;
    language?: string;
    stars: number;
    forks: number;
}

const RepositoryCard: React.FC<Props> = ({
    username,
    reponame,
    description,
    language,
    stars,
    forks,
}) => {
    const languageClass = language ? language.toLowerCase() : 'other';

    return (
        <Container>
            <AboutSide>
                <header>
                    <RepoIcon />
                    <Link to={`/${username}/${reponame}`}>{reponame}</Link>
                </header>

                <p>{description}</p>
            </AboutSide>
            <InfosSide>
                <ul>
                    <li>
                        <div className={`language ${languageClass}`} />
                        <span>{language}</span>
                    </li>
                    <li>
                        <StarIcon />
                        <span>{stars}</span>
                    </li>
                    <li>
                        <ForkIcon />
                        <span>{forks}</span>
                    </li>
                </ul>
            </InfosSide>
        </Container>
    );
};

export default RepositoryCard;
