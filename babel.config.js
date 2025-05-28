module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          // Only alias to react-native-web when platform is web
          ...(process.env.PLATFORM === 'web' && {
            'react-native': 'react-native-web'
          })
        }
      }
    ]
  ]
};