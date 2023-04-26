import { styled } from "styletron-react";

export const StyledRoot = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10vh',
    textAlign: 'center',
    fontSize: '4vh',
    backgroundColor: '#343434',
    userSelect: 'none',
    cursor: 'pointer'
});

export default function Button({ Root = StyledRoot, children, ...props }) {
    return (
        <Root data-type='symbol' {...props}>
            {children}
        </Root>
    );
}