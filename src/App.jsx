import { styled } from 'styletron-react';
import Container from './components/Container';

const Wrapper = styled('div', {
    width: '100vw',
    height: '100vh',
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