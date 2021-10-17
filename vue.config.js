module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pages: {
    index: {
      title: "Портфолио",
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
  }
}
