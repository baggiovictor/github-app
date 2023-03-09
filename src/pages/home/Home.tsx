import React, { useEffect, useState } from 'react'
import { useApiData } from '../../hooks/useApi'
import { BASE_URL } from '../../utils/url';
import { UserProps } from '../../interfaces/user';
import axios from 'axios';
import { fetchGithubUsers } from '../../api/github';
import { HomeContainer } from './styles';
import { CardUser } from '../../components/card/CardUser';

function Home() {
    const [users, setUsers] = useState<UserProps[]>([]);

    useEffect(() => {
        fetchGithubUsers().then((data) => {
            setUsers(data);
        });
    }, []);

    return (
        <HomeContainer>
            {users.map((user) => (
                <CardUser
                    key={user.id}
                    name={user.name}
                    login={user.login}
                    avatar_url={user.avatar_url}
                />
            ))}
        </HomeContainer>
    );
}

export default Home