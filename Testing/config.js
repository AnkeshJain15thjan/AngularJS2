System.config({
    transpiler: 'typescript'
    , typescriptOptions: {
        emitDecoratorMetadata: true
    }
    , map: {
        app: './test'
    }
    , packages: {
        app: {
            main: './main.ts'
            , defaultExtension: 'ts'
        }
    }
});