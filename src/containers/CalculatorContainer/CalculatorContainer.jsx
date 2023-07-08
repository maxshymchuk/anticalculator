import { ButtonsPanel } from '../../components/ButtonsPanel';
import { Textarea } from '../../components/Textarea';
import { StyledCentralSection, StyledRoot } from './styled';
import { useState } from 'react';
import Calculator from '../../utils/Calculator';
import { COMMANDS, OPERATIONS, TYPE } from '../../constants/enums';
import { formatOutput, toNumber, toString } from './utils';

const calculator = new Calculator();

export default function CalculatorContainer() {
    const [result, setResult] = useState('0');
    const [currentOperation, setCurrentOperation] = useState();
    const [toReset, setToReset] = useState(false);

    const handleClick = (e) => {
        if (!e.target.dataset['type']) return;

        if (e.target.dataset['type'] === TYPE.Symbol) {
            const newResult = formatOutput(toReset ? e.target.innerText : result + e.target.innerText);
            setToReset(false);
            setResult(newResult);
        }

        if (e.target.dataset['type'] === TYPE.Command) {
            calculator.result = toNumber(result);
            switch (e.target.innerText) {
                case COMMANDS.Clear: {
                    calculator.clear();
                    setCurrentOperation(undefined);
                    break;
                }
                case COMMANDS.Reverse: calculator.reverse(); break;
                case COMMANDS.Percentage: calculator.percentage(); break;
            }
            const newResult = toString(calculator.result);
            setResult(newResult);
        }

        if (e.target.dataset['type'] === TYPE.Operation) {
            if (currentOperation === e.target.innerText) {
                setCurrentOperation(undefined);
                return;
            }

            if (!currentOperation) {
                calculator.result = toNumber(result);
                setCurrentOperation(e.target.innerText);
                setToReset(true);
                return;
            }

            if (currentOperation === OPERATIONS.Add) {
                calculator.add(toNumber(result))
            }

            if (currentOperation === OPERATIONS.Sub) {
                calculator.subtract(toNumber(result))
            }

            if (currentOperation === OPERATIONS.Mul) {
                calculator.multiply(toNumber(result))
            }

            if (currentOperation === OPERATIONS.Div) {
                calculator.divide(toNumber(result))
            }

            if (e.target.innerText === OPERATIONS.Equ) {
                setCurrentOperation(undefined);
                setToReset(true);
                const newResult = toString(calculator.result);
                setResult(newResult);
                return;
            }

            setCurrentOperation(e.target.innerText);
            setToReset(true);
            const newResult = toString(calculator.result);
            setResult(newResult);
        }
    };

    return (
        <StyledRoot>
            <StyledCentralSection onClick={handleClick}>
                <Textarea value={result} />
                <ButtonsPanel currentOperation={currentOperation} />
            </StyledCentralSection>
        </StyledRoot>
    );
}