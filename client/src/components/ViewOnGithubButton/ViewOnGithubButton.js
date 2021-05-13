import React from 'react';

import Button from '../Button/Button';
import Icon from '../Icon/Icon';

const ViewOnGithubButton = () => (
  <a
    style={{ textDecoration: 'none' }}
    href="https://github.com/trancker/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        background: 'linear-gradient(to right, #AA076B 0%, #61045F  51%, #AA076B  100%)',
        color: 'white',
        marginBottom: '5rem',
        padding: '1.5rem 2rem;',
        fontSize: 'medium',
      }}
      inverted
    >
      <Icon style={{ marginRight: '1rem', color: 'white', }} icon="logo-github" />
      View on GitHub
    </Button>
  </a>
);

export default ViewOnGithubButton;
