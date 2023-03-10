import React from 'react'
import { Container, Main, LeftSide, RightSide, RepoCard, HeadingCalendar } from './styles';
import ProfileData from '../../components/ProfileData/ProfileData';
import RepositoryCard from '../../components/RepositoryCard/RepositoryCard';
import CommitsCalendar from '../../components/CommitsCalendar/CommitsCalendar';



const Profile: React.FC = () => {
    const data = [1, 2, 3, 4, 5, 6];

    return (
        <Container>
            <Main>
                <LeftSide>
                    <ProfileData
                        username={'baggiovictor'}
                        name={'Victor Baggio'}
                        avatarUrl={'https://avatars.githubusercontent.com/u/65255655?v=4'}
                        followers={200}
                        following={10}
                        company={'Totvs'}
                        location={'Joinville, Brazil'}
                        email={'baggiobaggiovictor@gmail.com'}
                        blog={'linkedin.com/in/victorbaggio'}
                    />
                </LeftSide>
                <RightSide>
                    <RepoCard>
                        <h2>Random repos</h2>

                        <div>

                            {data.map((n) => {
                                return <RepositoryCard
                                    key={n}
                                    username={'baggiovictor'}
                                    reponame={'angular-apps'}
                                    description={'Repositorio criado para armazenar meus projetos angular'}
                                    language={n % 3 === 0 ? 'Javascript' : 'Typescript'}
                                    stars={18}
                                    forks={10}

                                />
                            })}
                        </div>
                    </RepoCard>

                    {/* TODO: (Esses dados só vem a v4 da api que é consumida com GRAHPQL) */}
                    <HeadingCalendar>
                        Contribuições no último ano
                    </HeadingCalendar>

                    <CommitsCalendar />
                </RightSide>
            </Main>
        </Container>
    );
}

export default Profile;