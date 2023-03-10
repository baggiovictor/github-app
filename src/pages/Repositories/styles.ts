import styled, { css } from "styled-components";
import { RiBookMarkLine, RiStarLine } from "react-icons/ri";
import { AiOutlineFork } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { iconCss } from "../../styles/icons";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  align-items: center;

  > p {
    font-size: 16px;
  }
`;

export const Breadcrumb = styled.div`
  margin-bottom: 16px;

  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  white-space: nowrap;

  font-size: 18px;

  > a {
    color: var(--link);
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }

    &.username {
      margin-left: 8px;
    }

    &.reponame {
      font-weight: 600;
    }
  }

  > span {
    padding: 0 5px;
  }
`;

export const Stats = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;

  > li {
    display: flex;
    align-items: center;
    margin-right: 9px;

    > * {
      margin-right: 7px;
      color: var(--gray);
    }
  }
`;

export const LinkButton = styled.a`
  text-decoration: none;
  margin-top: 24px;
  background: var(--gray-dark);

  padding: 12px 17px;

  border-radius: 24px;
  width: max-content;

  display: flex;
  align-items: center;

  > span {
    color: var(--primary);
  }

  > svg {
    fill: var(--primary);
    margin-right: 10px;
  }
`;

export const RepoIcon = styled(RiBookMarkLine)`
  ${iconCss}
`;

export const StarsIcon = styled(RiStarLine)`
  ${iconCss}
`;

export const ForkIcon = styled(AiOutlineFork)`
  ${iconCss}
`;

export const GithubIcon = styled(FaGithub)`
  ${iconCss}
`;
