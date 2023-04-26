import { styled } from 'styletron-react';
import ResultArea from './ResultArea';
import Buttons from './buttons/Buttons';

const Root = styled('section', {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
})

export default function Container() {

    const handleClick = (e) => {
        if (!e.target.dataset['type']) return;
        console.log(e.target.dataset['type'], e.target.innerText);
    };

    return (
        <Root onClick={handleClick}>
            <ResultArea />
            <Buttons />
        </Root>
    );
}