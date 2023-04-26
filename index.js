import { createRoot } from 'react-dom/client';
import { Provider as StyletronProvider, DebugEngine } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic'
import App from './src/App';

const engine = new Styletron();

const root = createRoot(document.getElementById('content'));

root.render(
    <StyletronProvider value={engine}>
        <App />
    </StyletronProvider>
);