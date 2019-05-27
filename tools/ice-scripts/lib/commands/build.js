const fse = require('fs-extra');
const webpack = require('webpack');
const { collectDetail } = require('@alifd/fusion-collector');
const iceScriptsPkgData = require('../../package.json');
const goldlog = require('../utils/goldlog');
const log = require('../utils/log');
const validationSassAvailable = require('../utils/validationSassAvailable');
const checkDepsInstalled = require('../utils/checkDepsInstalled');

/**
 * 构建项目：cli 调用；云构建方法调用
 *
 * 因为 build 方法有可能被直接调用，因此需要保证自身功能的完整性
 *
 * @param {Object} options 命令行参数
 */
module.exports = async function (context) {
  const { applyHook, commandArgs, rootDir, userConfig, webpackConfig } = context;
  goldlog('version', {
    version: iceScriptsPkgData.version,
  });
  goldlog('build', commandArgs);
  log.verbose('build cliOptions', commandArgs);
  await applyHook('beforeBuild');

  const installedDeps = checkDepsInstalled(rootDir);
  if (!installedDeps) {
    log.error('项目依赖未安装，请先安装依赖。');
    process.exit(1);
  }

  if (userConfig.type === 'project') {
    validationSassAvailable();

    try {
      collectDetail({
        rootDir, // 项目根地址
        basicPackage: ['@alifd/next', '@icedesign/base', '@alife/next'], // 主体包名称
        kit: 'ice-scripts', // 统计的来源
      });
    } catch (err) {
      log.warn('collectDetail error', err);
    }
  }

  // empty output path
  fse.emptyDirSync(webpackConfig.output.path);
  webpack(webpackConfig, (error, stats) => {
    if (error) {
      throw error;
    } else {
      console.log(
        stats.toString({
          colors: true,
          chunks: false,
          children: false,
          modules: false,
          chunkModules: false,
        })
      );
      if (stats.hasErrors()) {
        throw new Error('webpack compiled failed.');
      } else {
        log.info('ICE build finished');
      }
    }

    applyHook('afterBuild', stats);
  });
};