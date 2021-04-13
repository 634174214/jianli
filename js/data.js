// 前端技能配置
var skillCode = [
    {
        'label': 'HTML',
        'percent': 95,
        'color': '#676969'
    },
    {
        'label': 'CSS',
        'percent': 90,
        'color': '#DB5C0F'
    },
    {
        'label': 'JS',
        'percent': 80,
        'color': '#D4D02E'
    },
    {
        'label': 'JQ',
        'percent': 85,
        'color': '#7acef4'
    },
    {
        'label': 'VUE',
        'percent': 80,
        'color': '#4fc08d'
    },
    {
        'label': 'STYLUS',
        'percent': 90,
        'color': '#D64747'
    },
    {
        'label': 'WXML',
        'percent': 95,
        'color': '#07c160'
    },
    {
        'label': 'LAYUI',
        'percent': 70,
        'color': '#abacaf'
    }
];
// 设计技能配置
var skillDesign = [
    {
        'label': 'PS',
        'percent': 95,
        'color': '#2f2585'
    },
    {
        'label': 'AI',
        'percent': 90,
        'color': '#d37617'
    },
    {
        'label': 'ID',
        'percent': 85,
        'color': '#842150'
    },
    {
        'label': 'CDR',
        'percent': 70,
        'color': '#83c327'
    },
    {
        'label': 'XD',
        'percent': 85,
        'color': '#f22dc1'
    },
    {
        'label': 'FIGMA',
        'percent': 80,
        'color': '#4c4d4d'
    },
    {
        'label': 'FLASH',
        'percent': 80,
        'color': '#bb1b20'
    },
    {
        'label': 'OFFICE',
        'percent': 95,
        'color': '#1385c4'
    }
];
// 未上线项目二维码显示
var notline = 'images/notline.jpg';
// 前端推荐作品 数量<=3,要保证与tabs中的项目一一对应
var webBetterPath = 'images/webbetter/';
var webBetter = [
    {
        'label': 'H5', // 项目标签名
        'qrclickShow': false, // 手机版点击时，是否显示显示二维码， false=跳转到默认连接 true点击出现二维码
        'data': [
            {
                'src': webBetterPath + '1-yantai.jpg', // 作品图片
                'qr': webBetterPath + '1-yantai-qr.png', // 作品上线二维码
                'name': '2019世界工业设计大会',            // 作品名称
                'href': 'http://vip.qdxin.cn/h5/2019/yantaidesign1016/'     // 作品链接
            },
            {
                'src': webBetterPath + '1-vrqd.jpg',
                'qr': webBetterPath + '1-vrqd-qr.png',
                'name': '全景青岛，时尚走进生活',
                'href': 'http://vr.qdxin.cn/topic/1904/'
            },
            {
                'src': webBetterPath + '1-bainian.jpg',
                'qr': webBetterPath + '1-bainian-qr.png',
                'name': '百年青岛沧桑巨变',
                'href': 'http://vip.qdxin.cn/h5/2019/qdhistory/'
            }
        ],
    },
    {
        'label': '微信开发',
        'qrclickShow': false,
        'data': [
            {
                'src': webBetterPath + '2-ruiyuanxing.jpg',
                'qr': webBetterPath + '2-ruiyuanxing-qr.png',
                'name': '瑞源兴微信商城（前后台）',
                'href': 'http://mp2.qdxin.cn/ps/ryx/index.php'
            },
            {
                'src': webBetterPath + '2-xinxin.jpg',
                'qr': webBetterPath + '2-xinxin-qr.png',
                'name': '信新相映微信公益平台',
                'href': 'http://mp2.qdxin.cn/gongyi/index.php'
            },
            {
                'src': webBetterPath + '2-xinshop.jpg',
                'qr': webBetterPath + '2-xinshop-qr.png',
                'name': '信新相映积分商城（前后台）',
                'href': 'http://mp2.qdxin.cn/gongyi/change.php'
            }
        ],
    },
    {
        'label': '响应式网站',
        'qrclickShow': false,
        'data': [
            {
                'src': webBetterPath + '3-xinziyuan.jpg',
                'qr': webBetterPath + '3-xinziyuan-qr.png',
                'name': '信网资源',
                'href': 'http://www.qdxin.cn/ziyuan/'
            },
            {
                'src': webBetterPath + '3-dazong.jpg',
                'qr': webBetterPath + '3-dazong-qr.png',
                'name': '大宗新闻网',
                'href': 'http://www.dazongnews.com/'
            },
            {
                'src': webBetterPath + '3-yanyijituan.jpg',
                'qr': webBetterPath + '3-yanyijituan-qr.png',
                'name': '青岛演艺集团官方网站',
                'href': 'http://www.qdyyjt.com/'
            }
        ],
    },
    {
        'label': 'vue案例',
        'qrclickShow': false,
        'data': [
            {
                'src': webBetterPath + '4-elme.jpg',
                'qr': webBetterPath + '4-elme-qr.png',
                'name': 'Vue高仿饿了么（自制）',
                'href': 'http://634174214.gitee.io/myself-vue-elme/#/goods'
            },
            {
                'src': webBetterPath + '4-music.jpg',
                'qr': webBetterPath + '4-music-qr.jpg',
                'name': 'Vue制作炸鸡音乐（自制）',
                'href': 'http://634174214.gitee.io/vue-music/'
            },
            {
                'src': webBetterPath + '4-yiqing.jpg',
                'qr': webBetterPath + '4-yiqing-qr.png',
                'name': '青岛肺炎疫情实时数据平台',
                'href': 'http://vip.qdxin.cn/h5/2020/yiqing/?show'
            }
        ],
    },
    {
        'label': '微信小程序',
        'qrclickShow': true,
        'data': [
            {
                'src': webBetterPath + '5-xinnewsmini.jpg',
                'qr': webBetterPath + '5-xinnewsmini-qr.jpg',
                'name': '信网资讯小程序',
                'href': 'javascript:;'
            },
            {
                'src': webBetterPath + '5-piyaomini.jpg',
                'qr': webBetterPath + '5-piyaomini-qr.jpg',
                'name': '青岛网络辟谣平台小程序',
                'href': 'javascript:;'
            },
            {
                'src': webBetterPath + '5-weichenmini.jpg',
                'qr': webBetterPath + '5-weichenmini-qr.jpg',
                'name': '微尘公益基金小程序',
                'href': 'javascript:;'
            }
        ],
    }
]

// 全部前端作品
var webWorksPath = 'images/allwebworks/';
var webALLWorks = [
    // h5类别
    {
        'label': 'H5',   // 标题标签
        // 点击是否显示二维码
        'qrclickShow': false,
        'data': [  // 数据
            {                        
                'src': webWorksPath + 'h5-yantai.jpg',    // 展示图片
                'qr': webWorksPath + 'h5-yantai-qr.png',  // 作品二维码
                'name': '2019世界工业设计大会',                      // 作品名称
                'href': 'http://vip.qdxin.cn/h5/2019/yantaidesign1016/'               // 作品链接
            },
            {
                'src': webWorksPath + 'h5-vrqd.jpg',
                'qr': webWorksPath + 'h5-vrqd-qr.png',
                'name': '全景青岛，时尚走进生活',
                'href': 'http://vr.qdxin.cn/topic/1904/'
            },
            {
                'src': webWorksPath + 'h5-bainian.jpg',
                'qr': webWorksPath + 'h5-bainian-qr.png',
                'name': '百年青岛沧桑巨变',
                'href': 'http://vip.qdxin.cn/h5/2019/qdhistory/'
            },
            {
                'src': webWorksPath + 'h5-meiliqd.jpg',
                'qr': webWorksPath + 'h5-meiliqd-qr.png',
                'name': '美丽青岛 迎新春',
                'href': 'http://vip.qdxin.cn/h5/2018/meiliqd2018/'
            },
            {
                'src': webWorksPath + 'h5-2019year.jpg',
                'qr': webWorksPath + 'h5-2019year-qr.png',
                'name': '2019新春贺卡',
                'href': 'http://vip.qdxin.cn/2019/newyear2019/'
            },
            {
                'src': webWorksPath + 'h5-piyao2019.jpg',
                'qr': webWorksPath + 'h5-piyao2019-qr.png',
                'name': '青岛辟谣2019年度总结',
                'href': 'http://vip.qdxin.cn/h5/2019/piyao2019/'
            },
            {
                'src': webWorksPath + 'h5-fangzhan2020.jpg',
                'qr': webWorksPath + 'h5-fangzhan2020-qr.png',
                'name': '2020信网线上房展',
                'href': 'http://vip.qdxin.cn/h5/2020/qdfangzhan0303/'
            },
            {
                'src': webWorksPath + 'h5-laoshanvideo.jpg',
                'qr': webWorksPath + 'h5-laoshanvideo-qr.png',
                'name': '崂山城区·城载人文 ',
                'href': 'http://vr.qdxin.cn/18/lsvideovr/'
            },
            {
                'src': webWorksPath + 'h5-qyifight.jpg',
                'qr': webWorksPath + 'h5-qyifight-qr.png',
                'name': '青医医疗队出征宣言',
                'href': 'http://vip.qdxin.cn/h5/2020/qingyi0207/'
            },
            {
                'src': webWorksPath + 'h5-wenhuaVR.jpg',
                'qr': webWorksPath + 'h5-wenhuaVR-qr.png',
                'name': '青岛文化产业园全景地图 ',
                'href': 'http://vr.qdxin.cn/topic/map-vr-1905/'
            },
            {
                'src': webWorksPath + 'h5-xihaian.jpg',
                'qr': webWorksPath + 'h5-xihaian-qr.png',
                'name': '西海岸新区三周年连环画',
                'href': 'http://vip.qdxin.cn/h5/2018/ephoto/index/'
            },
            {
                'src': webWorksPath + 'h5-jiaozhou.jpg',
                'qr': webWorksPath + 'h5-jiaozhou-qr.png',
                'name': '预见2020年的胶州(hype制作)',
                'href': 'http://vip.qdxin.cn/h5/2017/jzh5-2020-17/'
            },
            {
                'src': webWorksPath + 'h5-qdwater.jpg',
                'qr': webWorksPath + 'h5-qdwater-qr.png',
                'name': '让市民喝上放心水',
                'href': 'http://vip.qdxin.cn/h5/2019/qdwater/'
            },
            {
                'src': webWorksPath + 'h5-qdcharity.jpg',
                'qr': webWorksPath + 'h5-qdcharity-qr.png',
                'name': '怡善青岛 脱贫攻坚',
                'href': 'http://vip.qdxin.cn/h5/2019/qdcharity/'
            },
            {
                'src': webWorksPath + 'h5-suning.jpg',
                'qr': webWorksPath + 'h5-suning-qr.png',
                'name': '奔向苏宁不能停',
                'href': 'http://act.qd.sina.com.cn/8815/mobile'
            },
            {
                'src': webWorksPath + 'h5-changee.jpg',
                'qr': webWorksPath + 'h5-changee-qr.png',
                'name': '全民射嫦娥',
                'href': 'http://qd.sina.com.cn/iframe/6/_490.html'
            },
            {
                'src': webWorksPath + 'h5-maikaile.jpg',
                'qr': webWorksPath + 'h5-maikaile-qr.png',
                'name': '奔向麦凯乐',
                'href': 'http://act.qd.sina.com.cn/8318/mobile?from=timeline&isappinstalled=0'
            },
            {
                'src': webWorksPath + 'h5-iphone6s.jpg',
                'qr': webWorksPath + 'h5-iphone6s-qr.png',
                'name': '如何2000元用上iPhone6s',
                'href': 'http://qd.sina.com.cn/iframe/6/_530.html?amp;amp;isappinstalled=0&amp;from=timeline&from=timeline&isappinstalled=0'
            },
            {
                'src': webWorksPath + 'h5-onroad.jpg',
                'qr': webWorksPath + 'h5-onroad-qr.png',
                'name': '在路上 他们最美',
                'href': 'http://vip.qdxin.cn/h5/2018/onroad/'
            },
            {
                'src': webWorksPath + 'h5-lshandbook.jpg',
                'qr': webWorksPath + 'h5-lshandbook-qr.png',
                'name': '青岛崂山区旅游指南',
                'href': 'http://vip.qdxin.cn/h5/2018/lshandbook/'
            },
            {
                'src': webWorksPath + 'h5-dongjiqd.jpg',
                'qr': webWorksPath + 'h5-dongjiqd-qr.png',
                'name': '人情味·体验青岛海滨冬游',
                'href': 'http://qd.sina.com.cn/qddjlv/index.html'
            }
        ]
    },
    // pc/m响应式网站
    {
        'label': '响应式网站', 
        'qrclickShow': false,
        'data': [
            {
                'src': webWorksPath + 'pc-gongyizt.jpg',
                'qr': webWorksPath + 'pc-gongyizt-qr.png',
                'name': '信新相映公益服务 | 专题',
                'href': 'http://vip.qdxin.cn/2020/gongyi0413/'
            },
            {
                'src': webWorksPath + 'pc-xinziyuan.jpg',
                'qr': webWorksPath + 'pc-xinziyuan-qr.png',
                'name': '信网资源',
                'href': 'http://www.qdxin.cn/ziyuan/'
            },
            {
                'src': webWorksPath + 'pc-dazong.jpg',
                'qr': webWorksPath + 'pc-dazong-qr.png',
                'name': '大宗新闻网',
                'href': 'http://www.dazongnews.com/'
            },
            {
                'src': webWorksPath + 'pc-yanyijituan.jpg',
                'qr': webWorksPath + 'pc-yanyijituan-qr.png',
                'name': '青岛演艺集团官方网站',
                'href': 'http://www.qdyyjt.com/'
            },
            {
                'src': webWorksPath + 'pc-xxindata.jpg',
                'qr': webWorksPath + 'pc-xxindata-qr.png',
                'name': '信新相映大数据可视化平台',
                'href':  'http://vip.qdxin.cn/h5/2020/xinxindata/'
            },
            {
                'src': webWorksPath + 'pc-weichen.jpg',
                'qr': webWorksPath + 'pc-weichen-qr.png',
                'name': '微尘公益官网',
                'href':  'https://www.weichenfoundation.com/'
            },
            {
                'src': webWorksPath + 'pc-chuanboli.jpg',
                'qr': webWorksPath + 'pc-chuanboli-qr.png',
                'name': '信网传播力',
                'href': 'http://www.qdxin.cn/about/chuanboli/'
            },
            {
                'src': webWorksPath + 'pc-piyao.jpg',
                'qr': webWorksPath + 'pc-piyao-qr.png',
                'name': '信网青岛辟谣频道',
                'href': 'http://piyao.qdxin.cn/'
            },
            {
                'src': webWorksPath + 'pc-xinfa.jpg',
                'qr': webWorksPath + 'pc-xinfa-qr.png',
                'name': '青岛信法网',
                'href': 'http://law.qdxin.cn/'
            },
            {
                'src': webWorksPath + 'pc-final2019.jpg',
                'qr': webWorksPath + 'pc-final2019-qr.png',
                'name': '信网2019年终总结',
                'href': 'http://vip.qdxin.cn/2020/xfinal2019/'
            },
            {
                'src': webWorksPath + 'pc-xinlive.jpg',
                'qr': webWorksPath + 'pc-xinlive-qr.png',
                'name': '信网直播频道',
                'href': 'http://live.qdxin.cn/'
            },
            {
                'src': webWorksPath + 'pc-xinlivenei.jpg',
                'qr': webWorksPath + 'pc-xinlivenei-qr.png',
                'name': '信网实时直播（回放）',
                'href': 'http://mp.qdxin.cn/public/xwqmt/live/html/104.html'
            },
            {
                'src': webWorksPath + 'pc-xinvr.jpg',
                'qr': webWorksPath + 'pc-xinvr-qr.png',
                'name': '信网VR频道',
                'href': 'http://vr.qdxin.cn/'
            },
            {
                'src': webWorksPath + 'pc-xinhouse.jpg',
                'qr': webWorksPath + 'pc-xinhouse-qr.png',
                'name': '信网房产频道',
                'href': 'http://house.qdxin.cn/'
            },
            {
                'src': webWorksPath + 'pc-lookqd.jpg',
                'qr': webWorksPath + 'pc-lookqd-qr.png',
                'name': '瞰青岛 改革开发40年',
                'href': 'http://vip.qdxin.cn/2018/seeqd1225/'
            },
            {
                'src': webWorksPath + 'pc-xindangjian.jpg',
                'qr': webWorksPath + 'pc-xindangjian-qr.png',
                'name': '信网党建频道',
                'href': 'http://dangjian.qdxin.cn/'
            },
            {
                'src': webWorksPath + 'pc-qdwenming.jpg',
                'qr': webWorksPath + 'pc-qdwenming-qr.png',
                'name': '青岛文明细节',
                'href': 'http://vip.qdxin.cn/2018/qdwenming/'
            },
            {
                'src': webWorksPath + 'pc-xinxin.jpg',
                'qr': webWorksPath + 'pc-xinxin-qr.png',
                'name': '信新相映公益平台',
                'href': 'http://gongyi.qdxin.cn/'
            },
            {
                'src': webWorksPath + 'pc-xinlian.jpg',
                'qr': webWorksPath + 'pc-xinlian-qr.png',
                'name': '信链网',
                'href': 'http://b.qdxin.cn/'
            },
            {
                'src': webWorksPath + 'pc-xinchuangtou.jpg',
                'qr': webWorksPath + 'pc-xinchuangtou-qr.png',
                'name': '信网创投青岛频道',
                'href': 'http://b.qdxin.cn/'
            },
            {
                'src': webWorksPath + 'pc-xinvideo.jpg',
                'qr': webWorksPath + 'pc-xinvideo-qr.png',
                'name': '信网视频频道',
                'href': 'http://v.qdxin.cn/'
            },
            {
                'src': webWorksPath + 'pc-wangshi.jpg',
                'qr': webWorksPath + 'pc-wangshi-qr.png',
                'name': '网事如歌专题',
                'href': 'http://www.qdxin.cn/special/2016/0509qdgoodstory/'
            }
        ]
    },
    // Vue案例
    {
        'label': 'VUE案例', 
        'qrclickShow': false,
        'data': [
            {
                'src': webWorksPath + 'vue-elme.jpg',
                'qr': webWorksPath + 'vue-elme-qr.png',
                'name': 'Vue高仿饿了么（自制）',
                'href': 'http://634174214.gitee.io/myself-vue-elme/#/goods'
            },
            {
                'src': webWorksPath + 'vue-music.jpg',
                'qr': webWorksPath + 'vue-music-qr.png',
                'name': 'Vue制作炸鸡音乐（自制）',
                'href': 'http://634174214.gitee.io/vue-music/'
            },
            {
                'src': webWorksPath + 'vue-yiqing.jpg',
                'qr': webWorksPath + 'vue-yiqing-qr.png',
                'name': '青岛肺炎疫情平台',
                'href': 'http://vip.qdxin.cn/h5/2020/yiqing/?show'
            },
            {
                'src': webWorksPath + 'vue-hospitals.jpg',
                'qr': webWorksPath + 'vue-hospitals-qr.png',
                'name': '青岛出征湖北医疗队宣言',
                'href': 'http://vip.qdxin.cn/h5/2020/hospital-fight/'
            },
            {
                'src': webWorksPath + 'vue-xintuku.jpg',
                'qr': webWorksPath + 'vue-xintuku-qr.png',
                'name': '信网图库(仅支持PC)',
                'href': 'http://vip.qdxin.cn/vip/anli/pro/imgmove2/'
            }
        ]
    },
    // 微信小程序
    {
        'label': '微信小程序', 
        'qrclickShow': true,
        'data': [
            {
                'src': webWorksPath + 'mini-xinnews.jpg',
                'qr': webWorksPath + 'mini-xinnews-qr.png',
                'name': '信网资讯小程序',
                'href': 'javascript:;'
            },
            {
                'src': webWorksPath + 'mini-piyao.jpg',
                'qr': webWorksPath + 'mini-piyao-qr.png',
                'name': '青岛网络辟谣平台小程序',
                'href': 'javascript:;'
            },
            {
                'src': webWorksPath + 'mini-weichen.jpg',
                'qr': webWorksPath + 'mini-weichen-qr.jpg',
                'name': '微尘公益基金小程序',
                'href': 'javascript:;'
            }
        ]
    },
    // 微信开发
    {
        'label': '微信开发',
        'qrclickShow': false, 
        'data': [
            {
                'src': webWorksPath + 'wx-ruiyuanxing.jpg',
                'qr': webWorksPath + 'wx-ruiyuanxing-qr.png',
                'name': '瑞源兴微信商城（前后台）',
                'href': 'http://mp2.qdxin.cn/ps/ryx/index.php'
            },
            {
                'src': webWorksPath + 'wx-xinxin.jpg',
                'qr': webWorksPath + 'wx-xinxin-qr.png',
                'name': '信新相映微信公益平台',
                'href': 'http://mp2.qdxin.cn/gongyi/index.php'
            },
            {
                // 暂未上线 待改链接
                'src': webWorksPath + 'wx-xinshop.jpg',
                'qr': webWorksPath + 'wx-xinshop-qr.png',
                'name': '信新相映积分商城（前后台）',
                'href': 'http://mp2.qdxin.cn/gongyi/change.php'
            }
        ]
    },
    // 其他
    {
        'label': '其他项目', 
        'qrclickShow': false,
        'data': [
            {
                'src': webWorksPath + 'other-faxianqd.jpg',
                'qr': webWorksPath + 'other-faxianqd-qr.png',
                'name': '发现青岛数字版',
                'href': 'http://faxian.qdxin.cn/'
            },
            {
                'src': webWorksPath + 'other-yidaiyilu.jpg',
                'qr': webWorksPath + 'other-yidaiyilu-qr.png',
                'name': '信网一代一路频道',
                'href': 'http://vip.qdxin.cn/2018/yidaiyilu0609/'
            },
            {
                'src': webWorksPath + 'other-yuanzi.jpg',
                'qr': webWorksPath + 'other-yuanzi-qr.png',
                'name': '中国院子网',
                'href': 'http://vip.qdxin.cn/2017/vip/yzchina/'
            },
            {
                'src': webWorksPath + 'other-qdgongyi.jpg',
                'qr': webWorksPath + 'other-qdgongyi-qr.png',
                'name': '以爱之名-青岛公益行',
                'href': 'http://qd.sina.com.cn/zt/qdgyx01/index.shtml'
            }
        ]
    },
];

// 设计作品
var designPath = 'images/design/';
var designWorks = [
{
        'label':   '信网专题设计',   
        'desc':    '信网单页专题设计（前台界面）',   
        'show': designPath + 'xin-vuezt-1.jpg',
        'images':  [
            {
                'src': designPath + 'xin-vuezt-1.jpg',
                'isvertical' : true          
            },
            {
                'src': designPath + 'xin-vuezt-2.jpg', 
                'isvertical' : true          
            },
            {
                'src': designPath + 'xin-vuezt-3.jpg',
                'isvertical' : true          
            },
            {
                'src': designPath + 'xin-vuezt-4.jpg', 
                'isvertical' : true          
            },
            {
                'src': designPath + 'xin-vuezt-5.jpg',
                'isvertical' : true          
            },
            {
                'src': designPath + 'xin-vuezt-6.jpg', 
                'isvertical' : true          
            }
        ] 
    },
 {
        'label':   '一介武夫网站 | 前台',   
        'desc':    '一介武夫网站前台页面设计',   
        'show': designPath + 'my-blog-2.jpg',
        'images':  [
            {
                'src': designPath + 'my-blog-1.jpg',
                'isvertical' : true          
            },
            {
                'src': designPath + 'my-blog-2.jpg', 
                'isvertical' : true          
            },
            {
                'src': designPath + 'my-blog-3.jpg',
                'isvertical' : true          
            },
            {
                'src': designPath + 'my-blog-4.jpg', 
                'isvertical' : true          
            },
            {
                'src': designPath + 'my-blog-5.jpg',
                'isvertical' : false          
            },
            {
                'src': designPath + 'my-blog-6.jpg', 
                'isvertical' : true          
            },
            {
                'src': designPath + 'my-blog-7.jpg',
                'isvertical' : false          
            },
            {
                'src': designPath + 'my-blog-8.jpg', 
                'isvertical' : false          
            },
            {
                'src': designPath + 'my-blog-9.jpg', 
                'isvertical' : false          
            }
        ] 
    },
    {
        'label':   '一介武夫网站 | 后台',   
        'desc':    '一介武夫网站后台界面peice-ui设计',   
        'show': designPath + 'my-pieceui-1.jpg',
        'images':  [
            {
                'src': designPath + 'my-pieceui-1.jpg',
                'isvertical' : true          
            },
            {
                'src': designPath + 'my-pieceui-2.jpg', 
                'isvertical' : true          
            },
            {
                'src': designPath + 'my-pieceui-3.jpg',
                'isvertical' : true          
            },
            {
                'src': designPath + 'my-pieceui-4.jpg', 
                'isvertical' : true          
            },
            {
                'src': designPath + 'my-pieceui-5.jpg',
                'isvertical' : true          
            },
            {
                'src': designPath + 'my-pieceui-6.jpg', 
                'isvertical' : true          
            }
        ] 
    },
    {
        // 作品名称
        'label':   '台湾展会邀请函',   
        // 作品描述
        'desc':    '台湾医疗器械展邀请函',   
        // 瀑布流展示图
        'show': designPath + 'yao-taiwan-1.jpg',
        'images':  [
            {
                // 图片src
                'src': designPath + 'yao-taiwan-1.jpg',
                // 图片是否纵向 是true
                'isvertical' : false          
            },
            {
                // 图片src
                'src': designPath + 'yao-taiwan-2.jpg', 
                // 图片是否纵向 是true 
                'isvertical' : false          
            }
        ] 
    },
    {
        'label':   '极地海洋世界广告',                
        'desc':    '2020年国庆节期间极地海洋世界广告设计',  
        'show': designPath + '2020jidi-h.jpg',    
        'images':  [
            {
                'src': designPath + '2020jidi-h.jpg',  
                'isvertical' : false           
            }
            
        ] 
    },
    {
        'label':   '2012深圳会邀请函',                
        'desc':    '2012年深圳第67届医疗器械展会邀请函',  
        'show': designPath + 'yao-shenzhen-1.jpg',    
        'images':  [
            {
                'src': designPath + 'yao-shenzhen-1.jpg',  
                'isvertical' : true           
            },
            {
                'src': designPath + 'yao-shenzhen-2.jpg',  
                'isvertical' : true          
            }
            
        ] 
    },
    {
        'label':   '济南医疗展会邀请函',                
        'desc':    '2011济南第26届秋季医疗器械展会邀请函',    
        'show': designPath + 'jinan201107-y.jpg',   
        'images':  [
            {
                'src': designPath + 'jinan201107-y.jpg',  
                'isvertical' : true           
            }
        ] 
    },
    {
        'label':   '济南医疗展会会刊跨页广告、喷绘',                
        'desc':    '2011年济南秋季医疗展会会刊跨页广告、展会装饰喷绘',
        'show': designPath + 'jinan201107-c-1.jpg',       
        'images':  [
            {
                'src': designPath + 'jinan201107-c-1.jpg',  
                'isvertical' : true           
            },
            {
                'src': designPath + 'jinan201107-c-2.jpg',  
                'isvertical' : true          
            },
            {
                'src': designPath + 'jinan201107-p-1.jpg',  
                'isvertical' : false          
            }
        ] 
    },
    {
        'label':   '2012济南医疗器械展-邀请函',                
        'desc':    '2012年第28届济南医疗器械展邀请函',      
        'show': designPath + 'jinan201209-y-1.jpg', 
        'images':  [
            {
                'src': designPath + 'jinan201209-y-1.jpg',  
                'isvertical' : false           
            },
            {
                'src': designPath + 'jinan201209-y-2.jpg',  
                'isvertical' : false          
            }
        ] 
    },
    {
        'label':   '2012济南医疗器械展喷绘',                
        'desc':    '2012年第28届济南医疗器械展展位以及展位装饰喷绘',
        'show': designPath + 'jinan201209-p-1.jpg', 
        'images':  [
            {
                'src': designPath + 'jinan201209-p-1.jpg',  
                'isvertical' : false           
            },
            {
                'src': designPath + 'jinan201209-p-2.jpg',  
                'isvertical' : false          
            },
            {
                'src': designPath + 'jinan201209-p-3.jpg',  
                'isvertical' : false          
            }
        ] 
    },
    {
        'label':   'HOLOGIC乳腺X光机广告',                
        'desc':    'HOLOGIC乳腺X光机展会KT板',      
        'show': designPath + 'yantai2012-p-2.jpg', 
        'images':  [
            {
                'src': designPath + 'yantai2012-p-2.jpg',  
                'isvertical' : true           
            }
        ] 
    },
    {
        'label':   '烟台西门子新品发布会',                
        'desc':    '邀请函、喷绘、晚宴抽奖券等',     
        'show': designPath + 'yantai2012-c-1.jpg',  
        'images':  [
            {
                'src': designPath + 'yantai2012-c-1.jpg',  
                'isvertical' : false           
            },
            {
                'src': designPath + 'yantai2012-p-1.jpg',  
                'isvertical' : false           
            },
            {
                'src': designPath + 'yantai2012-y.jpg',  
                'isvertical' : false           
            }
            
        ] 
    },
    {
        'label':   '日立靶中心CT产品发布会',                
        'desc':    '会议引导牌、发布会幕布、晚宴幕布、会议效果图',
        'show': designPath + 'rili2012-c-1.jpg',       
        'images':  [
            {
                'src': designPath + 'rili2012-c-1.jpg',  
                'isvertical' : true           
            },
            {
                'src': designPath + 'rili2012-p-1.jpg',  
                'isvertical' : false          
            },
            {
                'src': designPath + 'rili2012-p-2.jpg',  
                'isvertical' : false          
            },
            {
                'src': designPath + 'rili2012-p-3.jpg',  
                'isvertical' : false          
            }
        ] 
    },
    {
        'label':   '日立ECLOS靶中心CT-X展架',                
        'desc':    '日立CT-X展架设计（设计需要遵循日立公司既有的设计规范）',
        'show': designPath + 'riliECLOS-c-1.jpg',       
        'images':  [
            {
                'src': designPath + 'riliECLOS-c-1.jpg',  
                'isvertical' : true           
            },
            {
                'src': designPath + 'riliECLOS-c-2.jpg',  
                'isvertical' : true          
            },
            {
                'src': designPath + 'riliECLOS-c-3.jpg',  
                'isvertical' : true          
            }
        ] 
    },
    {
        'label':   '日立靶中心CT产品发布会',                
        'desc':    '日立靶中心CT产品发布会-邀请函',   
        'show': designPath + 'rili2012-y-1.jpg',    
        'images':  [
            {
                'src': designPath + 'rili2012-y-1.jpg',  
                'isvertical' : true           
            },
            {
                'src': designPath + 'rili2012-y-2.jpg',  
                'isvertical' : true          
            }
        ] 
    },
    {
        'label':   '日立广州会-邀请函',                
        'desc':    '2013年8月广州弧形臂平板胃肠机技术研讨会-邀请函', 
        'show': designPath + 'riligzhou-y-1.jpg',      
        'images':  [
            {
                'src': designPath + 'riligzhou-y-1.jpg',  
                'isvertical' : true           
            },
            {
                'src': designPath + 'riligzhou-y-2.jpg',  
                'isvertical' : true          
            }
        ] 
    },
    {
        'label':   '日立广州会-喷绘',                
        'desc':    '2013年8月广州弧形臂平板胃肠机技术研讨会-喷绘（茶歇、签到、晚宴）',      
        'show': designPath + 'riligzhou-p-3.jpg', 
        'images':  [
            {
                'src': designPath + 'riligzhou-p-3.jpg',  
                'isvertical' : false           
            },
            {
                'src': designPath + 'riligzhou-p-2.jpg',  
                'isvertical' : false          
            },
            {
                'src': designPath + 'riligzhou-x-1.jpg',  
                'isvertical' : true          
            },
            {
                'src': designPath + 'riligzhou-p-1.jpg',  
                'isvertical' : false          
            },
            {
                'src': designPath + 'riligzhou-x-2.jpg',  
                'isvertical' : true          
            }
        ] 
    },
    {
        'label':   '日立广州会-其他物料',                
        'desc':    '2013年8月广州弧形臂平板胃肠机技术研讨会-午餐券、入住券、矿泉水瓶贴、入住欢迎卡',      
        'show': designPath + 'riligzhou-c-2.jpg', 
        'images':  [
            {
                'src': designPath + 'riligzhou-c-2.jpg',  
                'isvertical' : true           
            },
            {
                'src': designPath + 'riligzhou-c-3.jpg',  
                'isvertical' : false          
            },
            {
                'src': designPath + 'riligzhou-c-4.jpg',  
                'isvertical' : false          
            },
            {
                'src': designPath + 'riligzhou-c-5.jpg',  
                'isvertical' : false          
            },
            {
                'src': designPath + 'riligzhou-c-1.jpg',  
                'isvertical' : true          
            },
            {
                'src': designPath + 'riligzhou-x-4.jpg',  
                'isvertical' : true          
            }
        ] 
    },
    {
        'label':   '2013摄情画意挂历',                
        'desc':    '曾任青岛市摄影家协会副主席孙其光先生-2013年摄影集挂历', 
        'show': designPath + '2013guali-c-1.jpg',      
        'images':  [
            {
                'src': designPath + '2013guali-c-1.jpg',  
                'isvertical' : true           
            },
            {
                'src': designPath + '2013guali-c-2.jpg',  
                'isvertical' : true          
            },
            {
                'src': designPath + '2013guali-c-3.jpg',  
                'isvertical' : true          
            }
        ] 
    },
    {
        'label':   '厦门医疗展会邀请函',                
        'desc':    '2013年11月第70届中国国际医疗器械（秋季）博览会邀请函',   
        'show': designPath + 'xiamen2013-y-1.jpg',    
        'images':  [
            {
                'src': designPath + 'xiamen2013-y-1.jpg',  
                'isvertical' : true           
            }
        ] 
    },
    {
        'label':   '飞利浦磁共振宣传册',                
        'desc':    '安丘中心医院飞利浦核磁共振产品宣传册，其中设备图片均为实景拍摄',     
        'show': designPath + 'anqiuci-show.jpg',  
        'images':  [
            {
                'src': designPath + 'anqiuci-c-1.jpg',  
                'isvertical' : true           
            },
            {
                'src': designPath + 'anqiuci-c-2.jpg',  
                'isvertical' : true          
            },
            {
                'src': designPath + 'anqiuci-c-3.jpg',  
                'isvertical' : true          
            },
            {
                'src': designPath + 'anqiuci-c-4.jpg',  
                'isvertical' : true          
            }
        ] 
    },
    {
        'label':   '安丘中心医院MRI宣传册',                
        'desc':    '安丘市中心医院MRI宣传册内容更新、设计更换',    
        'show': designPath + 'anqiuci2-show.jpg',   
        'images':  [
            {
                'src': designPath + 'anqiuci2-c-5.jpg',  
                'isvertical' : false           
            },
            {
                'src': designPath + 'anqiuci2-c-1.jpg',  
                'isvertical' : false          
            },
            {
                'src': designPath + 'anqiuci2-c-2.jpg',  
                'isvertical' : true          
            },
            {
                'src': designPath + 'anqiuci2-c-3.jpg',  
                'isvertical' : false          
            },
            {
                'src': designPath + 'anqiuci2-c-4.jpg',  
                'isvertical' : false          
            }
        ] 
    },
    {
        'label':   '安丘中心医院MRI物料',                
        'desc':    '安丘市中心医院磁共振科室灯箱、胶片袋、引导牌等',    
        'show': designPath + 'anqiuci-show2.jpg',   
        'images':  [
            {
                'src': designPath + 'anqiuci-p-1.jpg',  
                'isvertical' : true           
            },
            {
                'src': designPath + 'anqiuci-p-5.jpg',  
                'isvertical' : true          
            },
            {
                'src': designPath + 'anqiuci-p-2.jpg',  
                'isvertical' : false          
            },
            {
                'src': designPath + 'anqiuci-p-3.jpg',  
                'isvertical' : false          
            },
            {
                'src': designPath + 'anqiuci-p-4.jpg',  
                'isvertical' : false          
            },
            {
                'src': designPath + 'anqiuci-c-5.jpg',  
                'isvertical' : false          
            }
        ] 
    },
    {
        'label':   '城阳北后楼摄影集',                
        'desc':    '城阳北后楼社区摄影集设计',    
        'show': designPath + 'beihoulou-c-2.jpg',   
        'images':  [
            {
                'src': designPath + 'beihoulou-c-1.jpg',  
                'isvertical' : true           
            },
            {
                'src': designPath + 'beihoulou-c-2.jpg',  
                'isvertical' : false          
            },
            {
                'src': designPath + 'beihoulou-c-3.jpg',  
                'isvertical' : false          
            },
            {
                'src': designPath + 'beihoulou-c-4.jpg',  
                'isvertical' : false          
            }
        ] 
    },
    {
        'label':   '崂山养生茶包装设计',                
        'desc':    '奇光溢彩文化有限公司出品的崂山养生茶包装设计方案',    
        'show': designPath + 'lscha-show.jpg',   
        'images':  [
            {
                'src': designPath + 'lscha-c-1.jpg',  
                'isvertical' : false           
            },
            {
                'src': designPath + 'lscha-c-2.jpg',  
                'isvertical' : false          
            },
            {
                'src': designPath + 'lscha-c-3.jpg',  
                'isvertical' : false          
            },
            {
                'src': designPath + 'lscha-c-4.jpg',  
                'isvertical' : false          
            },
            {
                'src': designPath + 'lscha-c-5.jpg',  
                'isvertical' : false           
            },
            {
                'src': designPath + 'lscha-c-6.jpg',  
                'isvertical' : false          
            },
            {
                'src': designPath + 'lscha-c-7.jpg',  
                'isvertical' : false          
            },
            {
                'src': designPath + 'lscha-c-8.jpg',  
                'isvertical' : false          
            }
        ] 
    },
    {
        'label':   '崂山养生茶包装方案2',                
        'desc':    '奇光溢彩文化有限公司出品的崂山养生茶包装设计方案2',    
        'show': designPath + 'lscha-c-9.jpg',   
        'images':  [
            {
                'src': designPath + 'lscha-c-9.jpg',  
                'isvertical' : true           
            }
        ] 
    },
    {
        'label':   '成都医疗展会邀请函',                
        'desc':    '2012年第68届中国国际医疗器械秋季博览会（成都）邀请函设计',    
        'show': designPath + 'chengdu2012-y-1.jpg',   
        'images':  [
            {
                'src': designPath + 'chengdu2012-y-1.jpg',  
                'isvertical' : true           
            }
        ] 
    },
    {
        'label':   '程云阁香品堂三折页',                
        'desc':    '程云阁香品堂三折页设计,净尺寸28.5cm * 21cm',    
        'show': designPath + 'chengyunge-c-1.jpg',   
        'images':  [
            {
                'src': designPath + 'chengyunge-c-1.jpg',  
                'isvertical' : true           
            },
            {
                'src': designPath + 'chengyunge-c-2.jpg',  
                'isvertical' : true           
            }
        ] 
    },
    {
        'label':   '程云阁香品堂VI设计',                
        'desc':    '程云阁香品堂VI设计，包括品牌logo、名片、信封信纸、香品包装设计等',    
        'show': designPath + 'chengyunge-showv.jpg',   
        'images':  [
            {
                'src': designPath + 'chengyunge-v-1.jpg',  
                'isvertical' : true           
            },
            {
                'src': designPath + 'chengyunge-v-2.jpg',  
                'isvertical' : true           
            },
            {
                'src': designPath + 'chengyunge-v-3.jpg',  
                'isvertical' : true           
            },
            {
                'src': designPath + 'chengyunge-v-4.jpg',  
                'isvertical' : true           
            },
            {
                'src': designPath + 'chengyunge-v-5.jpg',  
                'isvertical' : true           
            },
            {
                'src': designPath + 'chengyunge-v-6.jpg',  
                'isvertical' : true           
            },
            {
                'src': designPath + 'chengyunge-v-7.jpg',  
                'isvertical' : true           
            }
        ] 
    },
    {
        'label':   '新浪年度风尚温度H5设计',                
        'desc':    '新浪“风尚温度”主题晚会H5,涵盖了如微博八点档等等年度多个主题项目',    
        'show': designPath + 'wendu-show.jpg',   
        'images':  [
            {
                'src': designPath + 'wendu-h-1.jpg',  
                'isvertical' : true           
            },
            {
                'src': designPath + 'wendu-h-2.jpg',  
                'isvertical' : true           
            },
            {
                'src': designPath + 'wendu-h-3.jpg',  
                'isvertical' : true           
            },
            {
                'src': designPath + 'wendu-h-4.jpg',  
                'isvertical' : true           
            },
            {
                'src': designPath + 'wendu-h-5.jpg',  
                'isvertical' : true           
            },
            {
                'src': designPath + 'wendu-h-6.jpg',  
                'isvertical' : true           
            },
            {
                'src': designPath + 'wendu-h-7.jpg',  
                'isvertical' : true           
            }
        ] 
    },
    {
        'label':   '福建淘宝旅游线路四折页',                
        'desc':    '福建摄影、探索、休闲、收藏四条旅游线路进行介绍、推荐',    
        'show': designPath + 'fujian2011-c-1.jpg',   
        'images':  [
            {
                'src': designPath + 'fujian2011-c-1.jpg',  
                'isvertical' : false           
            },
            {
                'src': designPath + 'fujian2011-c-2.jpg',  
                'isvertical' : false           
            }
        ] 
    },
    {
        'label':   '日立平板胃肠研讨会邀请函',                
        'desc':    '日立弧形臂平板胃肠CUREVISTA技术研讨会邀请函,采用上下对折的设计',    
        'show': designPath + 'huangdao2011-y-1.jpg',   
        'images':  [
            {
                'src': designPath + 'huangdao2011-y-1.jpg',  
                'isvertical' : true           
            },
            {
                'src': designPath + 'huangdao2011-y-2.jpg',  
                'isvertical' : true           
            }
        ] 
    },
    {
        'label':   '日立平板胃肠研讨会物料',                
        'desc':    '日立弧形臂平板胃肠CUREVISTA技术研讨会现场会议幕布喷绘、以及晚宴抽奖券的设计',    
        'show': designPath + 'huangdao2011-p-1.jpg',   
        'images':  [
            {
                'src': designPath + 'huangdao2011-p-1.jpg',  
                'isvertical' : false           
            },
            {
                'src': designPath + 'huangdao2011-p-2.jpg',  
                'isvertical' : false           
            },
            {
                'src': designPath + 'huangdao2011-c-1.jpg',  
                'isvertical' : false           
            }
        ] 
    },
    {
        'label':   '优耐特超市logo设计',                
        'desc':    '古早文化城优耐特超市logo设计',    
        'show': designPath + 'younaite-c-1.jpg',   
        'images':  [
            {
                'src': designPath + 'younaite-c-1.jpg',  
                'isvertical' : false           
            }
        ] 
    },
    {
        'label':   '德国烤瓷牙宣传册',                
        'desc':    '霍特曼恒晖（青岛）烤瓷牙宣传册设计，包括宣传册中的烤瓷牙产品拍摄到后期产品图片处理设计',    
        'show': designPath + 'jiaya-show.jpg',   
        'images':  [
            {
                'src': designPath + 'jiaya-c-1.jpg',  
                'isvertical' : true           
            },
            {
                'src': designPath + 'jiaya-c-2.jpg',  
                'isvertical' : true           
            },
            {
                'src': designPath + 'jiaya-c-3.jpg',  
                'isvertical' : true           
            },
            {
                'src': designPath + 'jiaya-c-4.jpg',  
                'isvertical' : true           
            },
            {
                'src': designPath + 'jiaya-c-5.jpg',  
                'isvertical' : true           
            }
        ] 
    },
    {
        'label':   '海云庵、糖球会明信片',                
        'desc':    '海云庵、糖球会明信片设计展示老青岛的人文风貌,一套12张仅取部分展示',    
        'show': designPath + 'mingxinp-show.jpg',   
        'images':  [
            {
                'src': designPath + 'mingxinp-c-1.jpg',  
                'isvertical' : false           
            },
            {
                'src': designPath + 'mingxinp-c-2.jpg',  
                'isvertical' : false           
            },
            {
                'src': designPath + 'mingxinp-c-3.jpg',  
                'isvertical' : true           
            },
            {
                'src': designPath + 'mingxinp-c-4.jpg',  
                'isvertical' : true           
            },
            {
                'src': designPath + 'mingxinp-c-5.jpg',  
                'isvertical' : true           
            }
        ] 
    },
    {
        'label':   '青岛记忆水彩画明信片',                
        'desc':    '青岛记忆-老青岛水彩画明信片，采用孙其光先生描绘老青岛各个景点的画作，领略老青岛的魅力,这里展示明信片的包装、明信片的正反面设计',    
        'show': designPath + 'qdjiyi-show.jpg',   
        'images':  [
            {
                'src': designPath + 'qdjiyi-c-1.jpg',  
                'isvertical' : true           
            },
            {
                'src': designPath + 'qdjiyi-c-2.jpg',  
                'isvertical' : false           
            },
            {
                'src': designPath + 'qdjiyi-c-3.jpg',  
                'isvertical' : false          
            },
            {
                'src': designPath + 'qdjiyi-c-4.jpg',  
                'isvertical' : false         
            }
        ] 
    },
    {
        'label':   '孙其光水彩画册',                
        'desc':    '负责孙其光先生水彩画集装帧设计、画册排版',    
        'show': designPath + 'sqghuace-show.jpg',   
        'images':  [
            {
                'src': designPath + 'sqghuace-c-1.jpg',  
                'isvertical' : false           
            },
            {
                'src': designPath + 'sqghuace-c-2.jpg',  
                'isvertical' : true           
            },
            {
                'src': designPath + 'sqghuace-c-3.jpg',  
                'isvertical' : true          
            },
            {
                'src': designPath + 'sqghuace-c-4.jpg',  
                'isvertical' : true         
            }
        ] 
    },
    {
        'label':   '红木缘宣传单页',                
        'desc':    '崂山红木文化街初期宣传单页',    
        'show': designPath + 'hongmudm-c-1.jpg',   
        'images':  [
            {
                'src': designPath + 'hongmudm-c-1.jpg',  
                'isvertical' : false           
            },
            {
                'src': designPath + 'hongmudm-c-2.jpg',  
                'isvertical' : true           
            }
        ] 
    },
    {
        'label':   '红木文化街一期宣传单',                
        'desc':    '红木文化街宣传初期的宣传单',    
        'show': designPath + 'guzaodm-c-3.jpg',   
        'images':  [
            {
                'src': designPath + 'guzaodm-c-3.jpg',  
                'isvertical' : true           
            }
        ] 
    },
    {
        'label':   '红木文化街一期宣传单',                
        'desc':    '红木文化街宣传初期的宣传单',    
        'show': designPath + 'guzaodm-c-2.jpg',   
        'images':  [
            {
                'src': designPath + 'guzaodm-c-2.jpg',  
                'isvertical' : true           
            }
        ] 
    },
    {
        'label':   '红木文化街一期登报广告',                
        'desc':    '红木文化街一期宣传时于青岛晚报投放的广告',    
        'show': designPath + 'guzaobz-c-1.jpg',   
        'images':  [
            {
                'src': designPath + 'guzaobz-c-1.jpg',  
                'isvertical' : true           
            }
        ] 
    },
    {
        'label':   '古早文化艺术节设计',                
        'desc':    '古早文化艺术节邀请函、礼品券、宣传海报、参观券等设计',    
        'show': designPath + 'guzaojie-c-1.jpg',   
        'images':  [
            {
                'src': designPath + 'guzaojie-c-1.jpg',  
                'isvertical' : true           
            },
            {
                'src': designPath + 'guzaojie-c-2.jpg',  
                'isvertical' : false           
            },
            {
                'src': designPath + 'guzaojie-c-3.jpg',  
                'isvertical' : false           
            },
            {
                'src': designPath + 'guzaojie-c-4.jpg',  
                'isvertical' : false           
            },
            {
                'src': designPath + 'guzaojie-c-5.jpg',  
                'isvertical' : false           
            },
            {
                'src': designPath + 'guzaojie-c-6.jpg',  
                'isvertical' : false           
            }
        ] 
    },
    {
        'label':   '古早文化城晚报广告',                
        'desc':    '古早文化城晚报投放广告设计',    
        'show': designPath + 'guzaobz-c-2.jpg',   
        'images':  [
            {
                'src': designPath + 'guzaobz-c-2.jpg',  
                'isvertical' : true           
            },
            {
                'src': designPath + 'guzaobz-c-7.jpg',  
                'isvertical' : true           
            }
        ] 
    },
    {
        'label':   '古早文化城画报广告（一）',                
        'desc':    '古早文化城画报广告一期投放',    
        'show': designPath + 'guzaobz-c-3.jpg',   
        'images':  [
            {
                'src': designPath + 'guzaobz-c-3.jpg',  
                'isvertical' : true           
            }
        ] 
    },
    {
        'label':   '古早文化城画报广告（二）',                
        'desc':    '古早文化城画报广告二期投放',    
        'show': designPath + 'guzaobz-c-4.jpg',   
        'images':  [
            {
                'src': designPath + 'guzaobz-c-4.jpg',  
                'isvertical' : true           
            }
        ] 
    },
    {
        'label':   '古早文化城画报广告（三）',                
        'desc':    '古早文化城画报广告三期投放',    
        'show': designPath + 'guzaobz-c-5.jpg',   
        'images':  [
            {
                'src': designPath + 'guzaobz-c-5.jpg',  
                'isvertical' : true           
            }
        ] 
    },
    {
        'label':   '古早文化城画报广告（四）',                
        'desc':    '古早文化城画报广告四期投放，跨页广告',    
        'show': designPath + 'guzaobz-c-6.jpg',   
        'images':  [
            {
                'src': designPath + 'guzaobz-c-6.jpg',  
                'isvertical' : true          
            }
        ] 
    },
    {
        'label':   '古早文化城招商海报',                
        'desc':    '古早文化城招商海报（正反面）',    
        'show': designPath + 'guzaodm-c-5.jpg',   
        'images':  [
            {
                'src': designPath + 'guzaodm-c-4.jpg',  
                'isvertical' : true          
            },
            {
                'src': designPath + 'guzaodm-c-5.jpg',  
                'isvertical' : true          
            }
        ] 
    },
    {
        'label':   '古早文化城宣传单页',                
        'desc':    '古早文化城宣传四折单页，采用斜切式设计，在正面进行折叠时，可以显示出目录',    
        'show': designPath + 'guzaodm-c-6-show.jpg',   
        'images':  [
            {
                'src': designPath + 'guzaodm-c-6.jpg',  
                'isvertical' : true          
            },
            {
                'src': designPath + 'guzaodm-c-7.jpg',  
                'isvertical' : true          
            }
        ] 
    },
    {
        'label':   '古早文化城招商手册',                
        'desc':    '古古早文化城招商手册，封面采用特殊纸张（红色）+ 烫金，内容为介绍文化城内各个业态，以及提供的服务项目等，篇幅原因此处仅取个别页进行展示',    
        'show': designPath + 'hmuce-c-1.jpg',   
        'images':  [
            {
                'src': designPath + 'hmuce-c-1.jpg',  
                'isvertical' : true          
            },
            {
                'src': designPath + 'hmuce-c-2.jpg',  
                'isvertical' : false         
            },
            {
                'src': designPath + 'hmuce-c-3.jpg',  
                'isvertical' : false          
            },
            {
                'src': designPath + 'hmuce-c-4.jpg',  
                'isvertical' : false          
            },
            {
                'src': designPath + 'hmuce-c-5.jpg',  
                'isvertical' : true          
            },
            {
                'src': designPath + 'hmuce-c-6.jpg',  
                'isvertical' : true          
            }
        ] 
    },
    {
        'label':   '古早文化城VI（一）',                
        'desc':    '古古早文化城VI设计-基本组合',    
        'show': designPath + 'guzao-v-show1.jpg',   
        'images':  [
            {
                'src': designPath + 'guzao-v-logo.jpg',  
                'isvertical' : false          
            },
            {
                'src': designPath + 'guzao-v-1.jpg',  
                'isvertical' : true         
            },
            {
                'src': designPath + 'guzao-v-2.jpg',  
                'isvertical' : true          
            },
            {
                'src': designPath + 'guzao-v-3.jpg',  
                'isvertical' : true          
            }
        ] 
    },
    {
        'label':   '古早文化城VI（二）',                
        'desc':    '古古早文化城VI设计-衍生产品',    
        'show': designPath + 'guzao-v-show2.jpg',   
        'images':  [
            {
                'src': designPath + 'guzao-v-4.jpg',  
                'isvertical' : true          
            },
            {
                'src': designPath + 'guzao-v-5.jpg',  
                'isvertical' : true         
            },
            {
                'src': designPath + 'guzao-v-6.jpg',  
                'isvertical' : true          
            },
            {
                'src': designPath + 'guzao-v-7.jpg',  
                'isvertical' : true          
            }
        ] 
    },
    {
        'label':   '古早文化城VI（三）',                
        'desc':    '古古早文化城VI设计-商场标识',    
        'show': designPath + 'guzao-v-show3.jpg',   
        'images':  [
            {
                'src': designPath + 'guzao-v-8.jpg',  
                'isvertical' : true          
            },
            {
                'src': designPath + 'guzao-v-9.jpg',  
                'isvertical' : true         
            },
            {
                'src': designPath + 'guzao-v-10.jpg',  
                'isvertical' : true          
            },
            {
                'src': designPath + 'guzao-v-11.jpg',  
                'isvertical' : true          
            },
            {
                'src': designPath + 'guzao-v-12.jpg',  
                'isvertical' : true          
            }
        ] 
    },
    {
        'label':   '枇杷派H5-被炒风险检测',                
        'desc':    '枇杷派H5-被炒风险设计文件，通过疯狂点击左右图片按键来进行游戏',    
        'show': designPath + 'pipapai-h-show1.jpg',   
        'images':  [
            {
                'src': designPath + 'pipapai-h-1.jpg',  
                'isvertical' : true          
            },
            {
                'src': designPath + 'pipapai-h-2.jpg',  
                'isvertical' : true         
            },
            {
                'src': designPath + 'pipapai-h-3.jpg',  
                'isvertical' : true          
            },
            {
                'src': designPath + 'pipapai-h-4.jpg',  
                'isvertical' : true          
            }
        ] 
    },
    {
        'label':   '孤独症患者',                
        'desc':    '枇杷派H5-孤独症患者，选择检测类H5设计，对即将毕业的大学生进行就业检测，推荐枇杷派招聘APP,仅截取部分页面展示',    
        'show': designPath + 'pipapai-h-show2.jpg',   
        'images':  [
            {
                'src': designPath + 'pipapai-h-5.jpg',  
                'isvertical' : false          
            },
            {
                'src': designPath + 'pipapai-h-6.jpg',  
                'isvertical' : false         
            },
            {
                'src': designPath + 'pipapai-h-7.jpg',  
                'isvertical' : false          
            },
            {
                'src': designPath + 'pipapai-h-8.jpg',  
                'isvertical' : false          
            }
        ] 
    },
    {
        'label':   '枇杷派全国校园行',                
        'desc':    '枇杷派全国校园行邀请函设计',    
        'show': designPath + 'pipapai-y-1.jpg',   
        'images':  [
            {
                'src': designPath + 'pipapai-y-1.jpg',  
                'isvertical' : true          
            }
        ] 
    },
    {
        'label':   '车阵吧公众号宣传',                
        'desc':    '微信车阵吧公众号活动旗帜、公众号引导图',    
        'show': designPath + 'chezhen-c-1.jpg',   
        'images':  [
            {
                'src': designPath + 'chezhen-c-1.jpg',  
                'isvertical' : false          
            },
            {
                'src': designPath + 'chezhen-c-2.jpg',  
                'isvertical' : false          
            }
        ] 
    },
    {
        'label': '青岛眼科医院专题',                
        'desc':  '新浪青岛-青岛眼科医院专题头图、专题设计',    
        'show': designPath + 'yanke-h-1.jpg',   
        'images':  [
            {
                'src': designPath + 'yanke-h-1.jpg',  
                'isvertical' : false          
            }
        ] 
    },
    {
        'label': '金家岭互联网金融高峰论坛',                
        'desc':  '第二届金家岭互联网金融高峰论坛专题宣传长图设计,篇幅所限仅节选部分展示',    
        'show': designPath + 'ejinrong-h-1.jpg',   
        'images':  [
            {
                'src': designPath + 'ejinrong-h-1.jpg',  
                'isvertical' : true          
            },
            {
                'src': designPath + 'ejinrong-h-2.jpg',  
                'isvertical' : true          
            },
            {
                'src': designPath + 'ejinrong-h-3.jpg',  
                'isvertical' : true          
            },
            {
                'src': designPath + 'ejinrong-h-4.jpg',  
                'isvertical' : true          
            },
            {
                'src': designPath + 'ejinrong-h-5.jpg',  
                'isvertical' : true          
            }
        ] 
    },
    {
        'label': '奔向麦凯乐H5游戏',                
        'desc':  '奔向麦凯乐H5游戏界面设计、以及进行开发,游戏中素材均做切图处理，此处不做展示',    
        'show': designPath + 'maikaile-h-1.jpg',   
        'images':  [
            {
                'src': designPath + 'maikaile-h-1.jpg',  
                'isvertical' : true          
            },
            {
                'src': designPath + 'maikaile-h-2.jpg',  
                'isvertical' : true          
            },
            {
                'src': designPath + 'maikaile-h-3.jpg',  
                'isvertical' : true          
            }
        ] 
    },
    {
        'label': '麦凯乐潮人之夜',                
        'desc':  '麦凯乐潮人之夜活动报名页面设计、开发、活动喷绘幕布设计',    
        'show': designPath + 'chaoren-h-1.jpg',   
        'images':  [
            {
                'src': designPath + 'chaoren-h-1.jpg',  
                'isvertical' : true          
            },
            {
                'src': designPath + 'chaoren-p-1.jpg',  
                'isvertical' : false          
            }
        ] 
    },
    {
        'label': '城阳旅游美食攻略',                
        'desc':  '城阳旅游美食浅攻略专题设计',    
        'show': designPath + 'chengyang-h-1.jpg',   
        'images':  [
            {
                'src': designPath + 'chengyang-h-1.jpg',  
                'isvertical' : false          
            }
        ] 
    },
    {
        'label': '逛青岛专题头图',                
        'desc':  '逛青岛专题头图设计',    
        'show': designPath + 'guangqd-h-1.jpg',   
        'images':  [
            {
                'src': designPath + 'guangqd-h-1.jpg',  
                'isvertical' : false          
            }
        ] 
    },
    {
        'label': '青岛啤酒节专题',                
        'desc':  '第25届青岛国际啤酒节专题封面（手机版）、PC版头图、车贴',    
        'show': designPath + 'pijiujie-h-1.jpg',   
        'images':  [
            {
                'src': designPath + 'pijiujie-h-1.jpg',  
                'isvertical' : true          
            },
            {
                'src': designPath + 'pijiujie-h-2.jpg',  
                'isvertical' : false          
            },
            {
                'src': designPath + 'pijiujie-h-3.jpg',  
                'isvertical' : false          
            }
        ] 
    },
    {
        'label': '青岛说-政务发声平台',                
        'desc':  '政务机构第一发声平台-青岛说专题头图设计',    
        'show': designPath + 'qdshuo-h-1.jpg',   
        'images':  [
            {
                'src': designPath + 'qdshuo-h-1.jpg',  
                'isvertical' : false          
            }
        ] 
    },
    {
        'label': '山东路路面维修长图',                
        'desc':  '懂事说青岛-山东路路面维修长图,此处切开显示',    
        'show': designPath + 'shigong-h-1.jpg',   
        'images':  [
            {
                'src': designPath + 'shigong-h-1.jpg',  
                'isvertical' : true          
            },
            {
                'src': designPath + 'shigong-h-2.jpg',  
                'isvertical' : true          
            },
            {
                'src': designPath + 'shigong-h-3.jpg',  
                'isvertical' : true          
            }
        ] 
    },
    {
        'label': '周末去哪里旅游专题',                
        'desc':  '周末去哪里旅游路线规划-旅游专题',    
        'show': designPath + 'zhoumo-h-1.jpg',   
        'images':  [
            {
                'src': designPath + 'zhoumo-h-1.jpg',  
                'isvertical' : false          
            },
            {
                'src': designPath + 'zhoumo-h-2.jpg',  
                'isvertical' : false          
            }
        ] 
    },
    {
        'label': '中国国际石墨烯创新大会',                
        'desc':  '2015中国国际石墨烯创新大会PC专题设计,展示内容进行切图展示',    
        'show': designPath + 'shimoxi-show.jpg',   
        'images':  [
            {
                'src': designPath + 'shimoxi-h-1.jpg',  
                'isvertical' : false          
            },
            {
                'src': designPath + 'shimoxi-h-2.jpg',  
                'isvertical' : false          
            }
        ] 
    },
    {
        'label': '韩国青岛周旅游专题',                
        'desc':  '中韩旅游年，韩国青岛周旅游专题设计',    
        'show': designPath + 'zhonghan-h-1.jpg',   
        'images':  [
            {
                'src': designPath + 'zhonghan-h-1.jpg',  
                'isvertical' : false          
            }
        ] 
    },
    {
        'label': '新浪青岛介绍单页',                
        'desc':  '新浪青岛介绍单页设计',    
        'show': designPath + 'xinlangdm-c-1.jpg',   
        'images':  [
            {
                'src': designPath + 'xinlangdm-c-1.jpg',  
                'isvertical' : true          
            }
        ] 
    },
    {
        'label': '新浪青岛文化墙设计',                
        'desc':  '新浪青岛各个部门文化墙设计，部门较多，此处仅展示个别案例',    
        'show': designPath + 'wenhuaq-p-1.jpg',   
        'images':  [
            {
                'src': designPath + 'wenhuaq-p-1.jpg',  
                'isvertical' : false          
            },
            {
                'src': designPath + 'wenhuaq-p-2.jpg',  
                'isvertical' : false          
            },
            {
                'src': designPath + 'wenhuaq-p-3.jpg',  
                'isvertical' : false          
            },
            {
                'src': designPath + 'wenhuaq-p-4.jpg',  
                'isvertical' : false          
            }
        ] 
    },
    {
        'label': '2014新浪温度晚宴',                
        'desc':  '新浪青岛2014“温度”答谢晚宴邀请函设计',    
        'show': designPath + 'wendu-y-1.jpg',   
        'images':  [
            {
                'src': designPath + 'wendu-y-1.jpg',  
                'isvertical' : true          
            },
            {
                'src': designPath + 'wendu-y-2.jpg',  
                'isvertical' : true          
            },
            {
                'src': designPath + 'wendu-y-3.jpg',  
                'isvertical' : true          
            }
        ] 
    },
    {
        'label': '微电影大赛专题设计',                
        'desc':  '澳柯玛杯青岛市第二届微电影大赛专题设计',    
        'show': designPath + 'wemovie-h-1.jpg',   
        'images':  [
            {
                'src': designPath + 'wemovie-h-1.jpg',  
                'isvertical' : false          
            }
        ] 
    },
    {
        'label': '新浪2015年台历设计',                
        'desc':  '新浪青岛2015年台历设计，篇幅原因只展示部分月份，尺寸为24CM * 12CM,设计时根据12生肖给每个月份均赋予特点，并且每个月份都关联介绍一个对应的频道项目',    
        'show': designPath + 'taili2015-c-1.jpg',   
        'images':  [
            {
                'src': designPath + 'taili2015-c-1.jpg',  
                'isvertical' : true          
            },
            {
                'src': designPath + 'taili2015-c-2.jpg',  
                'isvertical' : true          
            },
            {
                'src': designPath + 'taili2015-c-3.jpg',  
                'isvertical' : true          
            },
            {
                'src': designPath + 'taili2015-c-4.jpg',  
                'isvertical' : true          
            },
            {
                'src': designPath + 'taili2015-c-5.jpg',  
                'isvertical' : true          
            }
        ] 
    },
    {
        'label': '同城美食频道推荐专题汇总',                
        'desc':  '新浪青岛-同城美食频道（顺德小院、秀江南、时光纪、食界呗等）推荐专题设计',    
        'show': designPath + 'tongcheng-show.jpg',   
        'images':  [
            {
                'src': designPath + 'tongcheng-h-3.jpg',  
                'isvertical' : false         
            },
            {
                'src': designPath + 'tongcheng-h-4.jpg',  
                'isvertical' : false         
            },
            {
                'src': designPath + 'tongcheng-h-1.jpg',  
                'isvertical' : false         
            },
            {
                'src': designPath + 'tongcheng-h-5.jpg',  
                'isvertical' : false         
            },
            {
                'src': designPath + 'tongcheng-h-2.jpg',  
                'isvertical' : false         
            }
        ] 
    },
    {
        'label': '新闻中心频道专题汇总',                
        'desc':  '新浪青岛-新闻中心频道（顺风车、辟谣青岛、映像市南等）推荐专题设计，篇幅原因整理部分展示',    
        'show': designPath + 'xinwen-show.jpg',   
        'images':  [
            {
                'src': designPath + 'xinwen-h-4.jpg',  
                'isvertical' : false         
            },
            {
                'src': designPath + 'xinwen-h-3.jpg',  
                'isvertical' : false         
            },
            {
                'src': designPath + 'xinwen-h-2.jpg',  
                'isvertical' : false         
            },
            {
                'src': designPath + 'xinwen-h-1.jpg',  
                'isvertical' : false         
            }
        ] 
    },
    {
        'label': '顺风车活动微博长图',                
        'desc':  '新浪青岛-2015顺风车活动微博长图',    
        'show': designPath + 'shunfengche-show.jpg',   
        'images':  [
            {
                'src': designPath + 'shunfengche-h-1.png',  
                'isvertical' : true         
            },
            {
                'src': designPath + 'shunfengche-h-2.png',  
                'isvertical' : true         
            },
            {
                'src': designPath + 'shunfengche-h-3.png',  
                'isvertical' : true         
            },
            {
                'src': designPath + 'shunfengche-h-4.png',  
                'isvertical' : true         
            }
        ] 
    },
    {
        'label': '联通6s手机推介H5',                
        'desc':  '联通6s手机推荐套餐办理，赠送手机的H5系列，篇幅原因仅展示部分，具体请至作品分类-H5中查看',    
        'show': designPath + 'liantong6s-show.jpg',   
        'images':  [
            {
                'src': designPath + 'liantong6s-h-1.jpg',  
                'isvertical' : true         
            },
            {
                'src': designPath + 'liantong6s-h-2.jpg',  
                'isvertical' : true         
            },
            {
                'src': designPath + 'liantong6s-h-3.jpg',  
                'isvertical' : true         
            },
            {
                'src': designPath + 'liantong6s-h-4.jpg',  
                'isvertical' : true         
            },
            {
                'src': designPath + 'liantong6s-h-9.jpg',  
                'isvertical' : true         
            }
        ] 
    },
    {
        'label': '移动过年套餐推广H5',                
        'desc':  '新浪青岛-移动过年异地流量套餐办理推广H5',    
        'show': designPath + 'yidong-show.jpg',   
        'images':  [
            {
                'src': designPath + 'yidong-h-1.jpg',  
                'isvertical' : true         
            },
            {
                'src': designPath + 'yidong-h-2.jpg',  
                'isvertical' : true         
            },
            {
                'src': designPath + 'yidong-h-3.jpg',  
                'isvertical' : true         
            },
            {
                'src': designPath + 'yidong-h-4.jpg',  
                'isvertical' : true         
            },
            {
                'src': designPath + 'yidong-h-5.jpg',  
                'isvertical' : true         
            }
        ] 
    },
    {
        'label': '冬季乡宴专题',                
        'desc':  '新浪青岛-冬季乡宴专题设计',    
        'show': designPath + 'xiangyan-h-1.jpg',   
        'images':  [
            {
                'src': designPath + 'xiangyan-h-1.jpg',  
                'isvertical' : true         
            }
        ] 
    },
    {
        'label': '青岛信网招聘H5',                
        'desc':  '青岛信网招聘H5界面设计,因篇幅原因，仅做部分展示',    
        'show': designPath + 'xinzhaopin-show.jpg',   
        'images':  [
            {
                'src': designPath + 'xinzhaopin-h-1.jpg',  
                'isvertical' : true         
            },
            {
                'src': designPath + 'xinzhaopin-h-2.jpg',  
                'isvertical' : true         
            },
            {
                'src': designPath + 'xinzhaopin-h-3.jpg',  
                'isvertical' : true         
            },
            {
                'src': designPath + 'xinzhaopin-h-4.jpg',  
                'isvertical' : true         
            },
            {
                'src': designPath + 'xinzhaopin-h-5.jpg',  
                'isvertical' : true         
            },
            {
                'src': designPath + 'xinzhaopin-h-6.jpg',  
                'isvertical' : true         
            }
        ] 
    },
    {
        'label': '海尔净水机宣传单页',                
        'desc':  '海尔施特劳斯U5净水机宣传单页-正反面',    
        'show': designPath + 'haierjingshui-h-1.jpg',   
        'images':  [
            {
                'src': designPath + 'haierjingshui-h-1.jpg',  
                'isvertical' : true         
            },
            {
                'src': designPath + 'haierjingshui-h-2.jpg',  
                'isvertical' : true         
            }
        ] 
    },
    {
        'label': '屈臣氏吃喝玩乐H5游戏',                
        'desc':  '屈臣氏吃喝玩乐-玩转青岛H5游戏设计、协作开发,通过点击商家logo，计算出找到多少个商家',    
        'show': designPath + 'quchenshi-h-1.jpg',   
        'images':  [
            {
                'src': designPath + 'quchenshi-h-1.jpg',  
                'isvertical' : true         
            },
            {
                'src': designPath + 'quchenshi-h-2.jpg',  
                'isvertical' : true         
            },
            {
                'src': designPath + 'quchenshi-h-3.jpg',  
                'isvertical' : true         
            }
        ] 
    },
    {
        'label': '微尘网站设计',                
        'desc':  '青岛微尘网站设计、开发（首页、列表页、详细页等）以及小程序页面的设计与开发，详情请见作品分类',    
        'show': designPath + 'weichenweb-h-1.jpg',   
        'images':  [
            {
                'src': designPath + 'weichenweb-h-1.jpg',  
                'isvertical' : true         
            },
            {
                'src': designPath + 'weichenweb-h-2.jpg',  
                'isvertical' : true         
            },
            {
                'src': designPath + 'weichenweb-h-3.jpg',  
                'isvertical' : true         
            }
        ] 
    },
    {
        'label': '新型肺炎疫情攻坚战"疫"',                
        'desc':  '新型冠状病毒肺炎疫情专题微信宣传引导图片',    
        'show': designPath + 'zhanyi-h-1.jpg',   
        'images':  [
            {
                'src': designPath + 'zhanyi-h-1.jpg',  
                'isvertical' : true         
            }
        ] 
    }
];