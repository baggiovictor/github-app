import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Header from './Header';

describe('Header component', () => {
  it('should render without errors', () => {
    render(<Header />);
  });

  it('should render the GitHub logo', () => {
    render(<Header />);
    const githubLogo = screen.getByTestId('github-logo');
    expect(githubLogo).toBeInTheDocument();
  });

  it('should render the search input', () => {
    render(<Header />);
    const searchInput = screen.getByPlaceholderText('Digite um nome de usuário ou repositório');
    expect(searchInput).toBeInTheDocument();
  });

  it('should update the input value when typing', () => {
    render(<Header />);
    const searchInput = screen.getByPlaceholderText('Digite um nome de usuário ou repositório');
    fireEvent.change(searchInput, { target: { value: 'react' } });
    expect(searchInput).toHaveValue('react');
  });
});
