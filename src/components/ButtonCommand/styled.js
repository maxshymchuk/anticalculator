import { StyledRoot as BaseButtonStyledRoot } from '../BaseButton';
import { withStyle } from 'styletron-react';

export const StyledRoot = withStyle(BaseButtonStyledRoot, {
    backgroundColor: '#a5a5a5',
    color: '#000000',
    fontSize: '4vh',
});