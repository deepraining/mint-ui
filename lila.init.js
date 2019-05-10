/* eslint-disable import/no-extraneous-dependencies, prefer-destructuring */
import tasksPlugin from 'lila-tasks';
import webpackPlugin from 'lila-webpack';
import { forVue as vueWebpackConfigPlugin } from 'lila-webpack-config';

export default lila => {
  const { setSetting } = lila;

  setSetting('src', 'view');

  tasksPlugin(lila);
  webpackPlugin(lila);
  vueWebpackConfigPlugin(lila);

  return () => ({
    babelPlugins: [['component', { libraryName: 'mint-ui', style: true }]],
  });
};
