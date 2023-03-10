import React from 'react'
import { Link } from 'react-router-dom';

import { Container, Breadcrumb, RepoIcon, Stats, LinkButton, StartIcon, ForkIcon, GithubIcon } from './styles';

const Repositories: React.FC = () => {
    return (
        <Container>
            <Breadcrumb>
                <RepoIcon />

                <Link className={'username'} to={'/baggiovictor'}>
                    baggiovictor
                </Link>

                <span>/</span>

                <Link className={'reponame'} to={'/baggiovictor/themoviesdb-app'}>
                    themoviesdb-app
                </Link>
            </Breadcrumb>

            <p>Fun app for list movies</p>

            <Stats>
                <li>
                    <StartIcon />
                    <b>9</b>
                    <span>Stars</span>
                </li>
                <li>
                    <ForkIcon />
                    <b>9</b>
                    <span>Forks</span>
                </li>
            </Stats>

            <LinkButton href={'https://github.com/baggiovictor/themoviesdb-app'} >
                <GithubIcon />
                <span> Visualizar no Github </span>
            </LinkButton>
        </Container>

    );
}

export default Repositories;