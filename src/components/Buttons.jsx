import { styled, withStyle } from "styletron-react";
import Button, { StyledRoot } from "./common/Button";
import { CMDS, NUMS, OPS } from "../constants/types";

const Root = styled('section', {
    // outline: '2px solid yellow',
    display: 'grid',
    gap: '10px',
    gridTemplateColumns: 'repeat(4, 10vh)',
    gridTemplateRows: 'repeat(5, 10vh)',
});

const StyledButtonCommand = withStyle(StyledRoot, {
    backgroundColor: '#a5a5a5',
    color: '#000000'
})

const StyledButtonOperation = withStyle(StyledRoot, {
    backgroundColor: '#f2a33c',
})

const ButtonCommand = (props) => <Button Root={StyledButtonCommand} data-type='command' {...props} />;
const ButtonOperation = (props) => <Button Root={StyledButtonOperation} data-type='operation' {...props} />;

export default function Buttons({ children, ...props }) {
    return (
        <Root {...props}>
            <ButtonCommand>{CMDS.Clear}</ButtonCommand>
            <ButtonCommand>{CMDS.Reverse}</ButtonCommand>
            <ButtonCommand>{CMDS.Percentage}</ButtonCommand>

            <ButtonOperation>{OPS.Div}</ButtonOperation>

            <Button>{NUMS[7]}</Button>
            <Button>{NUMS[8]}</Button>
            <Button>{NUMS[9]}</Button>

            <ButtonOperation>{OPS.Mul}</ButtonOperation>

            <Button>{NUMS[4]}</Button>
            <Button>{NUMS[5]}</Button>
            <Button>{NUMS[6]}</Button>

            <ButtonOperation>{OPS.Sub}</ButtonOperation>

            <Button>{NUMS[1]}</Button>
            <Button>{NUMS[2]}</Button>
            <Button>{NUMS[3]}</Button>

            <ButtonOperation>{OPS.Add}</ButtonOperation>

            <Button $style={{ gridColumn: '1 / span 2' }}>{NUMS[0]}</Button>
            <Button>{NUMS[',']}</Button>

            <ButtonOperation>{OPS.Equ}</ButtonOperation>
        </Root>
    );
}