import { StyledRoot } from './styled';
import { TYPE } from '../../constants/enums';
import { memo } from 'react';

const ButtonCommand = memo(({ children }) => (
    <StyledRoot data-type={TYPE.Command}>
        {children}
    </StyledRoot>
));

export default ButtonCommand;