const nextJest = require("next/jest");

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
    coverageProvider: 'v8',
    testEnvironment: 'jsdom',
    // Add more setup options before each test is run
    // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1"
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    // Configurar para apenas executar testes dentro do diretório __tests__
    testMatch: [
        // "<rootDir>/__tests__/**/*.?(m)js?(x)", // Para arquivos JS e JSX
        // "<rootDir>/__tests__/**/*.?(m)ts?(x)", // Para arquivos TS e TSX
        "<rootDir>/**/*.test.(js|jsx|ts|tsx)", // Para arquivos com sufixo .test
        "<rootDir>/**/*.spec.(js|jsx|ts|tsx)", // Para arquivos com sufixo .spec
    ],
    // Excluir o diretório e2e
    testPathIgnorePatterns: [
        "<rootDir>/e2e/",
    ],
    collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx}', // Inclua todos os arquivos na pasta src
        '!src/**/*.d.ts',           // Exclua arquivos de tipos (TypeScript)
        '!src/**/index.{js,ts}',    // Exclua arquivos de entrada (opcional)
        '!src/types/*.ts',           // Exclua arquivos de tipos (TypeScript)
        '!src/services/interface/*.ts',           // Exclua as interfaces
    ],

    transformIgnorePatterns: [
        "node_modules/(?!@prisma)" // Evitar problemas com pacotes relacionados ao Prisma
    ],
    modulePathIgnorePatterns: [
        "<rootDir>/src/app/generated/prisma"
    ],



}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
