module.exports = function (api) {
    api.cache(true);

    const presets = [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'
                }
            }
        ],
        '@babel/preset-typescript'
    ];
    const plugins = [
        [
            'module-resolver', {
                alias: {
                    "@data": "./src/data",
                    "@domain": "./src/domain",
                    "@infra": "./src/infra",
                    "@main": "./src/main",
                    "@presentation": "./src/presentation",
                    "@validation": "./src/validation",
                }
            }
        ]
    ];
    const ignore = [
        '**/*.spec.ts'
    ]

    return {
        presets,
        plugins,
        ignore
    };
}
