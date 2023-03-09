import React from "react";
import { UserProps } from "../../interfaces/user";
import { Avatar, CardContainer, DetailsButton, UserInfo, UserLogin } from "./styles";

export const CardUser = ({ name, login, avatar_url }: UserProps) => {
    return (
        <CardContainer>
            <Avatar src={avatar_url} alt={name} />
            <UserInfo>
                <div>
                    <UserLogin>{login}</UserLogin>
                </div>
                <DetailsButton>Detalhes</DetailsButton>
            </UserInfo>
        </CardContainer>
    );
};





