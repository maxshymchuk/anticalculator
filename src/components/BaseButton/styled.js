import { styled } from 'styletron-react';
import { BUTTON_SIZE } from '../../constants/sizes';

export const StyledRoot = styled('button', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: `calc(${BUTTON_SIZE} / 2)`,
    textAlign: 'center',
    fontSize: '5vh',
    backgroundColor: '#343434',
    userSelect: 'none',
    cursor: 'pointer',
    color: '#FFF',
    width: '100%',
    height: '100%',
    border: 'none',
    appearance: 'none',
    padding: '0',
    overflow: 'visible',
    outline: 'none',
    boxShadow: 'none',
});