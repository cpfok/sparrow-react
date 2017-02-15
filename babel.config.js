module.exports = {
  resolve: {
    modules: ['node_modules', path.join(__dirname, '../node_modules')],
    extensions: ['', '.web.tsx', '.web.ts', '.web.jsx', '.web.js', '.ts', '.tsx', '.js', '.jsx', '.json'],
  },

  resolveLoader: {
    modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
  }
}
