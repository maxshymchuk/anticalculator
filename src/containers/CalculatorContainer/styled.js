import { styled } from 'styletron-react';
import { BUTTON_SIZE, BUTTONS_GAP } from '../../constants/sizes';

export const StyledRoot = styled('div', {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    backgroundColor: '#000000',
    position: 'relative',
})

export const StyledCentralSection = styled('section', {
    width: `calc(${BUTTON_SIZE} * 4 + ${BUTTONS_GAP} * 3)`,
    display: 'flex',
    flexDirection: 'column',
    gap: BUTTONS_GAP,
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
});