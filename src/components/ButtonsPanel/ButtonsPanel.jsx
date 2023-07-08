import { BaseButton } from '../BaseButton';
import { ButtonCommand } from '../ButtonCommand';
import { ButtonOperation } from '../ButtonOperation';
import { COMMANDS, NUMS, OPERATIONS } from '../../constants/enums';
import { StyledRoot, ZeroButtonWrapper } from './styled';
import { memo } from 'react';

const ButtonsPanel = memo(({ currentOperation }) => {
    return (
        <StyledRoot>
            <ButtonCommand>{COMMANDS.Clear}</ButtonCommand>
            <ButtonCommand>{COMMANDS.Reverse}</ButtonCommand>
            <ButtonCommand>{COMMANDS.Percentage}</ButtonCommand>

            <ButtonOperation selected={currentOperation === OPERATIONS.Div}>{OPERATIONS.Div}</ButtonOperation>

            <BaseButton>{NUMS[7]}</BaseButton>
            <BaseButton>{NUMS[8]}</BaseButton>
            <BaseButton>{NUMS[9]}</BaseButton>

            <ButtonOperation selected={currentOperation === OPERATIONS.Mul}>{OPERATIONS.Mul}</ButtonOperation>

            <BaseButton>{NUMS[4]}</BaseButton>
            <BaseButton>{NUMS[5]}</BaseButton>
            <BaseButton>{NUMS[6]}</BaseButton>

            <ButtonOperation selected={currentOperation === OPERATIONS.Sub}>{OPERATIONS.Sub}</ButtonOperation>

            <BaseButton>{NUMS[1]}</BaseButton>
            <BaseButton>{NUMS[2]}</BaseButton>
            <BaseButton>{NUMS[3]}</BaseButton>

            <ButtonOperation selected={currentOperation === OPERATIONS.Add}>{OPERATIONS.Add}</ButtonOperation>

            <ZeroButtonWrapper>
                <BaseButton>{NUMS[0]}</BaseButton>
            </ZeroButtonWrapper>
            <BaseButton>{NUMS[',']}</BaseButton>

            <ButtonOperation>{OPERATIONS.Equ}</ButtonOperation>
        </StyledRoot>
    );
});

export default ButtonsPanel;