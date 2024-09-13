module.exports = {
    apps: [
        {
            name: 'NextAppName',
            exec_mode: 'cluster',
            instances: 'max', // Or a number of instances
            script: 'node_modules/next/dist/bin/next',
            args: 'start',
            env_local: {
                APP_ENV: 'local' // APP_ENV=local
            },
            env_dev: {
                APP_ENV: 'dev' // APP_ENV=dev
            },
            env_prod: {
                APP_ENV: 'prod' // APP_ENV=prod
            }
        }
    ],
    "scripts": {
        "dev": "vite",
        "build": "vite build",
        "start": "run dev",
        "deploy:local": "next build && pm2 startOrRestart ecosystem.config.js --env local",
        "deploy:dev": "next build && pm2 startOrRestart ecosystem.config.js --env dev",
        "deploy:prod": "next build && pm2 startOrRestart ecosystem.config.js --env prod",
    },
}

Running