// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";


//configuração para não exibir de parse de CSS no Jest com jsdom,
const originalConsoleError = console.error;


console.error = (...args) => {
    if (/Could not parse CSS stylesheet/.test(args[0])) {
        return;
    }

    originalConsoleError(...args);
};
