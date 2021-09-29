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
                    '@models': './src/models',
                    '@controllers': './src/controllers'
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