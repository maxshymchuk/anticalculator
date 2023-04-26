import { styled } from "styletron-react";

const Root = styled('div', {
    height: '20vh',
    textAlign: 'right',
    fontSize: '18vh',
    color: '#ffffff',
    lineHeight: '20vh',
    // outline: '2px solid red',
});

export default function ResultArea({ children, ...props }) {
    return (
        <Root {...props}>
            0
        </Root>
    );
}