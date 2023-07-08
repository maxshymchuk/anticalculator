import { StyledRoot } from './styled';
import { TYPE } from '../../constants/enums';
import { memo } from 'react';

const BaseButton = memo(({ children }) => (
    <StyledRoot data-type={TYPE.Symbol}>
        {children}
    </StyledRoot>
));

export default BaseButton