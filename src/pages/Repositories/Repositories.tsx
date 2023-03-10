import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

import { Container, Breadcrumb, RepoIcon, Stats, LinkButton, StarsIcon, ForkIcon, GithubIcon } from './styles';
import { APIRepo } from '../../interfaces/user';
import { BASE_URL_REPO } from '../../utils/url';

interface Data {
    repo?: APIRepo;
    error?: string;
}

const Repositories: React.FC = () => {
    const { username, reponame } = useParams();
    const [data, setData] = useState<Data>();

    useEffect(() => {
        fetch(`${BASE_URL_REPO}/${username}/${reponame}`).then(

            async (response) => {
                console.log(response);
                setData(
                    response.status === 404
                        ? { error: 'Repository not found!' }
                        : { repo: await response.json() }
                );
            }
        );
    }, [reponame, username]);


    if (data?.error) {
        return <h1>{data.error}</h1>;
    }

    if (!data?.repo) {
        return <h1>Loading...</h1>;
    }


    return (
        <Container>
            <Breadcrumb>
                <RepoIcon />

                <Link className={'username'} to={`/${username}`}>
                    {username}
                </Link>
                <span>/</span>

                <Link className={'reponame'} to={`/${username}/${reponame}`}>
                    {reponame}
                </Link>
            </Breadcrumb>

            <p>{data.repo.description}</p>

            <Stats>
                <li>
                    <StarsIcon />
                    <b>{data.repo.stargazers_count}</b>
                    <span>stars</span>
                </li>
                <li>
                    <ForkIcon />
                    <b>{data.repo.forks}</b>
                    <span>forks</span>
                </li>
            </Stats>

            <LinkButton href={data.repo.html_url}>
                <GithubIcon />
                <span>View on GitHub</span>
            </LinkButton>
        </Container>

    );
}

export default Repositories;