module.exports = {
  components: ['src/components/**/index.tsx'],
  ignore: ['src/components/index.ts', 'src/components/**/style.ts'],
  propsParser: require('react-docgen-typescript').withDefaultConfig({
    propFilter: (prop) => {
      if (prop.parent) {
        return !prop.parent.fileName.includes('node_modules');
      }

      return true;
    },
  }).parse,
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
  },
  styles: {
    StyleGuide: {
      content: {
        maxWidth: 1300,
      },
    },
  },
};
