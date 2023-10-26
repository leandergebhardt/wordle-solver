export const configureWebpack = {
  module: {
    rules: [
      {
        test: /\.txt/,
        type: 'asset/source'
      }
    ]
  }
}
