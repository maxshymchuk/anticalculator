import { createRoot } from 'react-dom/client';
import { Provider as StyletronProvider } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic'
import { CalculatorContainer } from './src/containers/CalculatorContainer';

const engine = new Styletron();

const root = createRoot(document.getElementById('content'));

root.render(
    <StyletronProvider value={engine}>
        <CalculatorContainer />
    </StyletronProvider>
);