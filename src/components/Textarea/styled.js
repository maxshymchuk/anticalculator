import { styled } from 'styletron-react';

export const StyledRoot = styled('input', ({ $size }) => ({
    display: 'block',
    width: '100%',
    height: '20vh',
    textAlign: 'right',
    fontSize: '18vh',
    color: '#FFF',
    boxSizing: 'border-box',
    border: 'none',
    appearance: 'none',
    backgroundColor: 'transparent',
    padding: '0',
    overflow: 'hidden',
    boxShadow: 'none',
    // outline: '2px solid red',
}));