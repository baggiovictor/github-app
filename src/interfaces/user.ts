export interface UserProps {
    id?: string,
    avatar_url: string,
    login: string,
    name: string,
    public_repos?: number,
    location?: string,
    followers?: number,
    following?: number,
    created_at?: string,
    html_url?: string,
    bio?: string;
}