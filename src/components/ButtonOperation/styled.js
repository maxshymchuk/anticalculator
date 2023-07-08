import { StyledRoot as BaseButtonStyledRoot } from '../BaseButton';
import { withStyle } from 'styletron-react';

export const StyledRoot = withStyle(BaseButtonStyledRoot, ({ $selected }) => ({
    backgroundColor: $selected ? '#fff' : '#f2a33c',
    color: $selected ? '#000' : '#fff'
}));