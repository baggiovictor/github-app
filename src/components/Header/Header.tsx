import React from 'react';

import { Container, GithubLogo, SearchForm } from './styles';

const Header: React.FC = () => {
    return (
        <Container>
            <GithubLogo data-testid="github-logo" />
            <SearchForm>
                <input placeholder="Digite um nome de usuário ou repositório" />
            </SearchForm>
        </Container>
    );
}

export default Header