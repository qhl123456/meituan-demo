module.exports = {
  lintOnSave: false,
  // devServer: {
  //   //设置代理
  //   proxy: {
  //     //代理是从指定的target后面开始匹配的，不是任意位置；配置pathRewrite可以做替换
  //     "/api": {
  //       //axios访问 /api ==  target + /api
  //       target: "http://180.76.121.47",
  //       changeOrigin: true, //创建虚拟服务器
  //       pathRewrite: {
  //         "^/api": "", //重写接口，去掉/api， 在代理过程中是否替换掉/api/路径
  //       },
  //     },
  //   },
  // },
  devServer: {
    host: "0.0.0.0",
    public: "localhost:8080",
  },
  configureWebpack: {
    resolve: {
      alias: {
        //配置别名,修改后需要重新编译才能生效
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        network: "@/network",
        views: "@/views",
      },
    },
  },
  publicPath:'./',
};
