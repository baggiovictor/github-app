import React, { useState } from 'react';

import { Container, GithubLogo, SearchForm } from './styles';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        navigate('/' + search.toLowerCase().trim());
    }


    return (
        <Container>
            <GithubLogo />
            <SearchForm onSubmit={handleSubmit}>
                <input
                    placeholder="Digite um nome de usuário ou repositório"
                    value={search}
                    onChange={(e) => setSearch(e.currentTarget.value)}
                />
            </SearchForm>
        </Container>
    );
}

export default Header