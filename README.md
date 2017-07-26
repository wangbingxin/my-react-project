#### 创建项目

安装react的脚手架工具create-react-app
  
    npm install -g create-react-app

创建应用程序

    create-react-app my-react-project

进入项目，启动应用

    cd my-react-project
    npm start


#### 配置sass的css预处理器

暴露配置文件

    npm run eject

安装sass的相关包

    npm install sass-loader node-sass -D

修改配置文件

> 开发环境中修改webpack.config.dev.js文件，生产环境中对webpack.config.prod.js文件做同样的修改
> 配置修改该完成后需重新启动项目才能生效
   
   	 exclude: [
      /\.html$/,
      /\.(js|jsx)$/,
      /\.(css|scss)$/,      //第一处修改
      /\.json$/,
      /\.bmp$/,
      /\.gif$/,
      /\.jpe?g$/,
      /\.png$/
    ]

    {
        test: /\.(css|scss)$/,                  //第二处修改
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              // Necessary for external CSS imports to work
              // https://github.com/facebookincubator/create-react-app/issues/2677
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9', // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009',
                }),
              ],
            },
          }
        ],
      }

#### 路由配置

安装react-router包

	npm install react-router-dom -S


引入react-router包

	import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

> 安装的为4.0版本，引入方式及使用与2.0版本有所不同，详情请参考：http://www.jianshu.com/p/e3adc9b5f75c/