import React from 'react'
import { Container, Main, LeftSide, RightSide } from './styles';
import ProfileData from '../../components/ProfileData/ProfileData';



const Profile: React.FC = () => {
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
                <RightSide></RightSide>
            </Main>
        </Container>
    );
}

export default Profile;