module.exports = {
    apps: [
      {
        name: 'nuxt-app',
        port: '85',
        exec_mode: 'fork',
        instances: '1',
        script: '.output/server/index.mjs'
      }
    ]
  }