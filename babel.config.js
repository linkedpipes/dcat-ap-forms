module.exports = (api) => {

    api.cache.using(() => process.env.NODE_ENV);

    const presets = [
        [
            "@babel/preset-env",
            {
                "targets": {
                    "ei": 11,
                    "chrome": 41
                }
            }
        ]
    ];

    const plugins = [];

    const ignore = [];

    return {
        "presets": presets,
        "plugins": plugins,
        "ignore": ignore
    }
};