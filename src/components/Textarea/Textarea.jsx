import { StyledRoot } from './styled';
import { memo } from 'react';

const Textarea = memo(({ value }) => {
    return (
        <>
            <StyledRoot value={value} readOnly />
        </>
    );
});

export default Textarea;