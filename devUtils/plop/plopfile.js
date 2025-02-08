module.exports = function (plop) {
    plop.setGenerator('React component', {
        description: 'React Compontent',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'componenet name will be?',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/Components/{{name}}/{{name}}.jsx',
                templateFile: './devUtils/plop/template/component.hbs',
            },
            {
                type: 'add',
                path: 'src/Components/{{name}}/index.js',
                templateFile: './devUtils/plop/template/index.hbs',
            },
            {
                type: 'add',
                path: 'src/Components/{{name}}/styles.css',
                templateFile: './devUtils/plop/template/styles.hbs',
            },
        ],
    });
};
