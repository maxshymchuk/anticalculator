import { styled } from 'styletron-react';
import { BUTTON_SIZE, BUTTONS_GAP } from '../../constants/sizes';

export const StyledRoot = styled('section', {
    // outline: '2px solid yellow',
    display: 'grid',
    gap: BUTTONS_GAP,
    gridTemplateColumns: `repeat(4, ${BUTTON_SIZE})`,
    gridTemplateRows: `repeat(5, ${BUTTON_SIZE})`,
});

export const ZeroButtonWrapper = styled('div', {
    gridColumn: '1 / span 2',
    justifyContent: 'flex-start'
})