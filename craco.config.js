const CracoAntDesignPlugin = require('craco-antd');
const path = require('path');

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        // customizeTheme: {
        //   '@primary-color': '#476dda',
        //   '@link-color': '#476dda'
        // }
        customizeThemeLessPath: path.join(__dirname, 'src/style/antdCustomTheme.less')
      }
    }
  ]
};
