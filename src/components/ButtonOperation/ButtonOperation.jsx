import { StyledRoot } from './styled';
import { TYPE } from '../../constants/enums';
import { memo } from 'react';

const ButtonOperation = memo(({ children, selected }) => (
    <StyledRoot data-type={TYPE.Operation} $selected={selected}>
        {children}
    </StyledRoot>
));

export default ButtonOperation;