import { styled } from 'styletron-react';
import Container from './components/Container';
import FontPragmatica from 'url:/static/Pragmatica-ExtraLight.ttf';

const Wrapper = styled('div', {
    fontFamily: {
        src: `url(${FontPragmatica})`,
        fontWeight: 'normal',
        fontStyle: 'normal',
    },
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    backgroundColor: '#000000',
    position: 'relative'
})

export default function App() {
    return (
        <Wrapper>
            <Container />
        </Wrapper>
    );
}