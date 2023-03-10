import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import {
    Container,
    Main,
    LeftSide,
    RightSide,
    RepoCard,
    HeadingCalendar,
    RepoIcon,
    Tab,
} from "./styles";
import ProfileData from "../../components/ProfileData/ProfileData";
import RepositoryCard from "../../components/RepositoryCard/RepositoryCard";
import CommitsCalendar from "../../components/CommitsCalendar/CommitsCalendar";
import { BASE_URL } from '../../utils/url';
import { APIUser, APIRepo } from '../../interfaces/user';

interface Data {
    user?: APIUser,
    repos?: APIRepo[] | undefined,
    error?: string;
}

const Profile: React.FC = () => {
    const { userName = 'owitor' } = useParams();
    const [data, setData] = useState<Data>()

    // useApiData(`${BASE_URL}/${userName}`);
    // useApiData(`${BASE_URL}/${userName}/repos`)


    useEffect(() => {
        Promise.all([
            fetch(`${BASE_URL}/${userName}`),
            fetch(`${BASE_URL}/${userName}/repos`)
        ]).then(async (responses) => {
            const [userResponse, respoResponse] = responses;

            if (userResponse.status === 404) {
                return setData({ error: 'Usuário não encontrado' });
            }

            const user = await userResponse.json();
            const repos = await respoResponse.json();

            const shuffledRepos = repos.sort(() => 0.50 - Math.random())


            setData({
                user,
                repos: shuffledRepos.slice(0, 6)
            })
        })
    }, [userName])


    if (data?.error) <div>{data.error}</div>;
    if (!data?.user || !data.repos) <h1>Caregando...</h1>;

    // TODO: extrair para componente separado
    const TabContent = () => {
        return (
            <div className="content">
                <RepoIcon />
                <span className="label">Repositorios</span>
                <span className="number">{data?.user?.public_repos}</span>
            </div>
        );
    };

    return (
        <Container>

            <Tab className="desktop">
                <div className="wrapper">
                    <span className="offset"></span>
                    <TabContent />
                </div>
                <span className="line"></span>
            </Tab>
            <Main>
                <LeftSide>
                    <ProfileData
                        username={data?.user?.login}
                        name={data?.user?.name}
                        avatarUrl={data?.user?.avatar_url}
                        followers={data?.user?.followers}
                        following={data?.user?.following}
                        company={data?.user?.company}
                        location={data?.user?.location}
                        email={data?.user?.email}
                        blog={data?.user?.blog}
                    />
                </LeftSide>
                <RightSide>
                    <Tab className="mobile">
                        <TabContent />
                        <span className="line" />
                    </Tab>
                    <RepoCard>
                        <h2>Random repos</h2>

                        <div>
                            {data?.repos?.map((repo) => {
                                return (
                                    <RepositoryCard
                                        key={repo.name}
                                        username={repo.owner.login}
                                        reponame={repo.name}
                                        description={
                                            repo.description
                                        }
                                        language={repo.language}
                                        stars={repo.stargazers_count}
                                        forks={repo.forks}
                                    />
                                );
                            })}
                        </div>
                    </RepoCard>

                    {/* TODO: (Esses dados só vem a v4 da api que é consumida com GRAHPQL) */}
                    <HeadingCalendar>Contribuições no último ano</HeadingCalendar>

                    <CommitsCalendar />
                </RightSide>
            </Main>
        </Container>
    );
};

export default Profile;
