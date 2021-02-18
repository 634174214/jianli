// 初始化页面的各项DOM
var initPage = {
    // 顶部轮播
    infoBgTurn: function() {
        var $infoBgs = $('#info-bg span');
        var fadeTime = 600;
        $infoBgs.eq(0).fadeIn(fadeTime);
        var infoTimer = setInterval(function() {
            $infoBgs.each(function(index, item) {
                if($(item).is(':visible')) {
                    $(item).fadeOut(fadeTime);
                    if(index ===  $infoBgs.length - 1) {
                        $infoBgs.eq(0).fadeIn(fadeTime);
                    } else {
                        $(item).next().fadeIn(fadeTime)
                    }
                    return false;
                }
            });
        }, 5000);
    },
    // 计算微信二维码显示位置
    setErwePlace: function(ispc, el) {
        if(ispc) {
            var left = Math.floor(el.offset().left),
                top = Math.floor(el.offset().top);
            $('#erwe-wrapper').css({
                'left': left + 180,
                // 由于添加css动画导致top值计算错误 这里使用固定值
                'top': 187
            });
        }
    },
    // 向skill-ul中插入li
    addSkillItem: function() {
        // 定义结构模板
        var template = function(label, color) {
            return $('<li class="item"><div class="label" style="color: ' + color +';">' + label +'</div><span class="progress" style="background-color: ' + color + ';"></span><span class="percent"></span></li>');
        };
        $.each(skillCode, function(index) {
            var $li = template(skillCode[index].label, skillCode[index].color);
            $('#skill-code').append($li);
        });
        $.each(skillDesign, function(index) {
            var $li = template(skillDesign[index].label, skillDesign[index].color);
            $('#skill-design').append($li);
        });
    },
    // 前端全部项目向其中插入dom结构 每4个去除margin-left
    setAllWorksItem: function() {
        // ul外部的结构
        var templateWrap = function(label, inhtml, qrboxshow) {
            // 如果二维码不需要开始就显示 做一个字段判断 专门为小程序展示特定的
            var qrshow = qrboxshow ? 'qrshow' : '';
            return '<aside class="row"><h4 class="works-headline">' + label + '</h4><ul class="works-list ' + qrshow + '" id="allworks-list">' + inhtml + '</ul></aside>'
        };
        // li的结构
        var templateInner = function(opt, nomargLeft) {
            return '<li class="' + nomargLeft + '"><a href="' + opt.href +'" target="_blank" class="linkto"><div class="imgbox"><img src="' + opt.src + '" class="allwork-pic"><em class="QRcode"><cite class="work-qr"><img src="' + opt.qr + '"></cite><cite class="text">扫码 / 点击 查看详情</cite></em></div><p class="name">' + opt.name + '</p></a></li>'
        };
        var $worksInner = $('#all-webworks-inner');
        // 全部结构字符串
        var allHtml = '';
        $.each(webALLWorks, function(index, workItem) {
            var _innerHtml = '';
            $.each(workItem.data, function(j, item) {
                var hasnoLeft = '';
                if ( j % 4 === 0) {
                    hasnoLeft = 'nomargLeft';
                }
                // 构建每个data中的字符串
                _innerHtml = _innerHtml + templateInner(item, hasnoLeft);
            });
            // 构建包含外部aside的字符串
            allHtml = allHtml + templateWrap(workItem.label, _innerHtml, workItem.qrclickShow,);
        });
        // 将整体插入
        $worksInner.append($(allHtml));
    },
    // 设计作品dom动态插入
    setDesignItem: function() {
        var template = function(opt) {
            return '<li class="white-panel"><img src="' + opt.show + '" class="thumb"><h1>' + opt.label + '</h1><p>' + opt.desc + '</p></li>';
        }
        var inHtml = '';
        var $gallery = $('#gallery-wrapper');
        $.each(designWorks, function(index, designItem) {
            inHtml = inHtml + template(designItem);
        });
        $gallery.append($(inHtml));
    }
} 
// 生成一个随机的区间整数值
var getRandomNum = function(min, max) {
    var num = parseInt(Math.random() * (max - min) + min);
    return num;
};

// 技能条增长动画执行
$.fn.barGrow = function(options) {
    var config = $.extend({
        speed: 2000,   // 动画执行时间
        maxWidth: 300, // 最长
        percent: 100   // 变化的百分比值
    }, options);
    var $progress = $('.progress', this);
    var $percent = $('.percent', this);
    var progressWidth = Math.floor(config.maxWidth * (config.percent / 100));
    $progress.animate(
        {
            // 动画变化的属性
            width: progressWidth
        },
        {
            // 动画的持续时间
            duration: config.speed,
            // 记录动画进度没完成一次返回一个值
            step: function(currentWidth) {
                var nowPercent = Math.ceil(currentWidth / config.maxWidth * 100);
                // isNaN检测值是否是数值
                if(isNaN(nowPercent)) {
                    nowPercent = 0;
                }
                $percent[0].innerHTML = nowPercent + '%';
            }
        }
    );
};
// 执行技能值增长的动画
var skillBarGrow = function(ispc) {
    var $codeItems = $('.item', '#skill-code');
    var $designItems = $('.item', '#skill-design');
    var progressMaxWidth = ispc ? 315 : (function() {
        var itemWidth = $codeItems.eq(0).width();
        // 标签名：HTML与百分比的宽度是70与50在手机版上 这里直接计算就好，注意结尾要加()直接执行函数
        var retWidth = itemWidth - 70 - 50;
        return retWidth;
    })();
    this.codeGrow = function() {
        $codeItems.each(function(index, codeitem) {
            // 生成执行1000ms-2000ms随机时间
            var durationTime = getRandomNum(1000, 2000);
            $(codeitem).barGrow({
                speed: durationTime,
                maxWidth: progressMaxWidth,
                percent: skillCode[index].percent
            });
        });
    }
    this.designGrow = function() {
        $designItems.each(function(index, designitem) {
            // 生成执行随机时间
            var durationTime = getRandomNum(1000, 2000);
            $(designitem).barGrow({
                speed: durationTime,
                maxWidth: progressMaxWidth,
                percent: skillDesign[index].percent
            });
        });
    }
}

// 获取每一个section的高度
var getSectionsTop = function(arr, scrollOffset, ispc) {
    var ret = [];
    // 根据是否是pc做不同调整
    var litescroll = ispc ? 150 : 500;
    $.each(arr, function(index, item) {
        var itemTop = Math.ceil($(item).offset().top) + scrollOffset;
        // 对前端、设计作品的距离顶部距离单独做调整
        switch(true) {
            case index === 3:
                itemTop = itemTop + litescroll;
                break;
            case index === 4:
                itemTop = itemTop + litescroll;
                // 对最后一个手机做调整
                itemTop = ispc ? itemTop : (itemTop + 200);
                break;
        }
        ret.push(itemTop);
    });
    return ret;
};

// 判断pc手机
var browser = function() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ['Android', 'iPhone',
        'SymbianOS', 'Windows Phone',
        'iPad', 'iPod'
    ];
    var flag = true;
    for (var i = 0; i < Agents.length; i++) {
        if (userAgentInfo.indexOf(Agents[i]) != -1) {
            flag = false;
            break;
        }
    }
    return flag;
};
// 获取nav每一个li距离父元素左边的距离
var getNavListItemsLeft = function($navlis) {
    var ret = [];
    $navlis.each(function(index, item) {
        var left = item.offsetLeft;
        ret.push(left);
    });
    return ret;
};

// 前端开发展示-所有相关方法
var frontendMethods = function() {
    var $wrap = $('#Frontend-content');
    var $spans = $('#tabs-bar span');
    var $slides = $wrap.find('.swiper-slide');
    var _self = this;
    var containerHeight = $('FrontendShow').height();
    // 初始化时，渲染初始数据
    this.first = function() {
        // https://segmentfault.com/q/1010000004474036 JQ中实现一次性渲染
        var contents = webBetter[0].data,
            qrclickShow = webBetter[0].qrclickShow;
        this.setSlide(contents, $slides, qrclickShow);
    }
    // 切换tabs选项卡
    this.tabsClick = function($this, swiper, ispc) {
        if ($this.hasClass('active')) {
            return;
        }
        // 这里的this指向这个构造函数，
        var index = $this.index();
        // 对应点击的下标 找到webbetter数组中对应的data数组，否则这里需要用for-in
        var contents = webBetter[index];
        var contentval = contents.data,
            qrclickShow = contents.qrclickShow,
            contentKey = contents.label;
        
        $this.siblings().removeAttr('class');
        $this.addClass('active');
        // 开启动画
        $('#FrontendShow').fadeOut(500 , function() {
            $(this).fadeIn(500);
        });
        // 如果手机启动swiper情况下,因为替换元素会有闪屏bug，这里用透明度优化，延迟450ms执行替换元素
        setTimeout(function() {
            if (swiper) {
                $.each(contentval, function(j, item) {
                    var sildeHtml = _self.template(item, qrclickShow);
                    swiper.getSlide(j).html(sildeHtml);
                    // 回到第一帧
                    swiper.swipeTo(0, 800, false);
                });
            } else {
                $slides.empty();
                // 这里避免作用域的问题 这里this指向构造函数
                _self.setSlide(contentval, $slides, qrclickShow);
            }
            // 必须再每次切换之后执行一次组织默认事件的点击 未完成
            _self.hrefStop(ispc);
        },450);
    }
    // pc-计算前端开发块选项卡总宽
    this.setTabsWidth = function() {
        var tabsWidth = 0;
        $spans.each(function(index, item) {
            // 为兼容IE 在IE上使用获取宽度的方法不奏效，所以采用去掉padding 在根本元素宽度上加上一个值60，撑起宽度，再计算
            var _width = Math.ceil(item.clientWidth) + 60;
            $(item).css('width', _width);
            // 左右border = 2px
            tabsWidth = tabsWidth + _width + 2;
        });
        // 因为margin-left =15
        tabsWidth = tabsWidth + ($spans.length - 1) * 15;
        $('#tabs-bar').css('width', tabsWidth);
    },
    // pc鼠标移动
    this.detailhover = function() {
        $('.linkto').hover(
            function() {
                $('.QRcode', this).fadeIn(400);
                $(this).addClass('active');
            },function() {
                $('.QRcode', this).fadeOut(400);
                $(this).removeClass('active');
            }
        );
    }
    // 手机左右箭头的点击
    this.arrowClick = function(FrontendWorks) {
        $('#Frontend-left').on('click', function(e) {
            e.preventDefault();
            FrontendWorks.swipePrev();
        });
        $('#Frontend-right').on('click', function(e) {
            e.preventDefault();
             FrontendWorks.swipeNext();
        });
    }
    // 阻止a标签跳转
    this.hrefStop = function(ispc) {
        // 当为小程序时候 点击阻止a标签跳转并显示二维码
        $('.hrefstop-hook').on('click', function() {
            if (!ispc) {
                var $qrbox = $(this).find('.QRcode');
                $qrbox.fadeIn();
            }
            return false;
        });
        $('.close').on('click', function() {
            $(this).parent().fadeOut();
            return false;
        });
    }
}
frontendMethods.prototype = {
    init: function(ispc) {
        var _self = this;
        var frontendSwiper = null;
        this.first();
        if (ispc) {
            this.setTabsWidth();
            this.detailhover();
        } else {
            // 手机-启动swiper
            frontendSwiper = $('#FrontendShow').swiper({
                pagination: '.pagination',
                autoplay : false,
                calculateHeight:true,
                loop: false
            });
            // 需要传启动的swiper做参数
            this.arrowClick(frontendSwiper);
        }
        $('#tabs-bar').on('click', 'span', function() {
            var $this = $(this);
            // 注意这里this指向问题，必须传入$this指向点击的元素
            // 不同于$('#tabs-bar').on('click', 'span', this.tabsClick)，这样函数中this指向点击元素，而不是构造函数
            _self.tabsClick($this, frontendSwiper, ispc);
            if (ispc) {
                // 点击tab的时候dom更新设置了一个450ms的延迟，所以这里也要加一个延迟，否则鼠标移动没反映
                setTimeout(_self.detailhover, 500);
            }
        });
    },
    // 定义结构模板
    template: function(opt, qrclickShow) {
        // 如果手机版点击出现二维码不跳转的情况 
        var hrefStopCls = qrclickShow ? 'hrefstop-hook' : '';
        return '<a href="'+ opt.href + '" target="_blank" class="linkto ' + hrefStopCls + '"><dl class="detail"><dt class="imgbox"><img src="'+ opt.src + '" class="work-pic"><em class="QRcode"><cite class="work-qr"><img src="'+ opt.qr +'"></cite><cite class="text">扫码 / 点击 查看详情</cite><cite class="icon close"></cite></em></dt><dd class="name">'+ opt.name + '</dd></dl></a>';
    },
    // 设置slide中内容,仅用于pc版
    setSlide: function(contents, $slides, qrclickShow) {
        var _self = this;
        $.each(contents, function(index, obj) {
            var item = _self.template(obj, qrclickShow);
            $slides.eq(index).append($(item));
        });
    }
}

// 开启设计作品的瀑布流
var designWaterfall = function(ispc) {
    // 插入元素
    initPage.setDesignItem();
    var $lis = $('#gallery-wrapper li'),
        $gallery = $('#gallery-wrapper');
    var colCount;   //定义列数
    var colHeightArry= [];   //定义列高度数组
    // 这里要计算好每个li的宽度 从而确定列数
    var itemWidth = $lis.outerWidth(true);   //单张图片的宽度

    colCount = parseInt($gallery.width() / itemWidth);  //计算出列数
    // 根据列数对数组进行赋值
    for(var i = 0 ; i < colCount; i ++){
        colHeightArry[i] = 0
    }
    //[0,0,0,0]
    // 当其中图片都加载完时
    $('#gallery-wrapper img').on('load',function(){
        var $li = $(this).parent();
        var minValue = colHeightArry[0]  //定义最小的高度
        var minIndex = 0  //定义最小高度的下标
        for(var i = 0 ; i < colCount; i ++){
            if(colHeightArry[i] < minValue){   //如果最小高度组数中的值小于最小值
                minValue = colHeightArry[i]   //那么认为最小高度数组中的值是真正的最小值
                minIndex = i  //最小下标为当前下标
            }
        }
        $li.css({
            left: minIndex * itemWidth,
            top: minValue
        });
        colHeightArry[minIndex] += $li.outerHeight(true);
        // console.log(colHeightArry);
        // 求出数组中最大值 并设置高度，这个必须在load事件中执行，如果在之外会先执行高度赋值
        var max = Math.max.apply(null,colHeightArry)
        $gallery.css('height', max)
    });
};

// 实例化设计作品
var designWorksMethods = function() {
    var $title = $('.design-works-title', '#design-works');
    var $desc = $('.desc', '#design-works');
    var $swiperWrap = $('.design-swiper', '#design-works');
    var $designWorks = $('#design-works');
    var $close = $('.close-hook', '#design-works');
    // 这里仅仅初始化一次swiper即可 使用swiper2自带的方法增减元素
    var designSwiper = $('#design-swiper').swiper({
        pagination : '.design-pagination',
        calculateHeight: false,
        noSwiping : true,
        noSwipingClass : 'stop-swiping',
        loop: true
        
    }); 

    this.template = function(opt) {
        var imgCls = opt.isvertical ? 'imgis-vertical' : 'imgis-horizontal';
        return '<img src="' + opt.src + '" class="' + imgCls + '">'
    }
    // 展示设计类作品
    this.designWorkShow = function(index) {
        // 这里要先显示否则在手机浏览器上无法运行，待测试用visibility：hidden
        $designWorks.fadeIn();
        // 这里this指代designWorksMethods
        var _self = this;
        var worksItem = designWorks[index];
        $title.text(worksItem.label);
        $desc.text(worksItem.desc);
        // 遍历图片数组
        $.each(worksItem.images, function(index, imgitem) {
            // 创建slide时要添加的class
            var slideCls = 'swiper-slide';
            // 当仅有一张图片时，给slide添加不可拖动的样式
            if (worksItem.images.length <= 1) {
                $swiperWrap.addClass('onlyone');
                slideCls = 'swiper-slide stop-swiping'
            } 
            var slide = _self.template(imgitem);
            // 创建slide收添加class名
            var newSlide = designSwiper.createSlide(slide, slideCls);
            newSlide.append();
        });
        // 添加完元素重新初始化一下
        designSwiper.reInit();
        // 配置为loop必须手动控制滚动到0页
        designSwiper.swipeTo(0, 0, false);
        // console.log(designSwiper)
    }
    // 关闭
    $close.on('click', function() {
        // 关闭时删除所有slide
        designSwiper.removeAllSlides();
        if ($swiperWrap.hasClass('onlyone')) {
            // 避免单张图片关闭时 会出现箭头情况，使用定时器延迟执行,fadeout默认400ms
            setTimeout(function() {
                $swiperWrap.removeClass('onlyone');
            }, 400);
        }
    });
    // 箭头点击
    $('#design-left').on('click', function(e) {
        e.preventDefault();
        designSwiper.swipePrev();
    });
    $('#design-right').on('click', function(e) {
        e.preventDefault();
        designSwiper.swipeNext();
    });
};
AOS.init({
    easing: 'ease-out-back',
    duration: 500
});

$(function() {
     // 判断浏览器
    var isPc = browser();
    // 滚动值偏移量，根据pc或者手机有所区别
    var scrollOffset = isPc ? 350 : 100;
    var $navContact = $('#navicon-content li');
    var $addwexin = $('.addwexin').eq(0);
    var $cover = $('#cover');
    // 导航当前的索引
    var navActiveIndex = 0;
    // 所有的主要块
    var sections = ['#info', '#works', '#skill', '#Frontend', '#design'];
    // 每个主要块距离页面顶部距离的数组
    var sectionsTop = getSectionsTop(sections, scrollOffset, isPc);
    // 菜单是否打开
    var navOpened = false;
    // 获取全部的导航的li
    var $navLis = $('#nav-list li');
    // 获取导航下面的移动横线
    var $navline = $('#navline');
    var $nav = $('#nav');
    // 获取nav距离顶部的高度
    var navTop = $nav.offset().top;
    // nav-list每个li距离左边的距离
    var navListItemsLeft = getNavListItemsLeft($navLis);
    // 获取skill到顶部的距离
    var skillTop = {
        code: $('#skill-code').offset().top,
        design: $('#skill-design').offset().top
    };
    // 屏幕高度
    var screenHeight = $(window).height();
    initPage.infoBgTurn();
    initPage.setErwePlace(isPc, $addwexin);
    initPage.addSkillItem();
    initPage.setAllWorksItem();
    // info 微信项目 鼠标移动
    $addwexin.hover(
        function() {
            if(isPc) {
                $('#erwe-wrapper').fadeIn();
                $(this).addClass('active');
            }
        },
        function() {
            if(isPc) {
                $('#erwe-wrapper').fadeOut();
                $(this).removeClass('active');
            }
        }
    );
    // 手机二维码点击显示
    $('.addwexin-hook').on('click', function() {
        if(isPc) {
            return;
        }
        $('#erwe-wrapper').addClass('moveIn');
        // 隐藏菜单按钮,如果使用hide无论样式还是style 恢复时都会触发一遍动画所以使用透明度
        $('#navbtn').css('opacity', 0);
        return false;
    });
    // 二维码点击关闭
    $('#erwe-wrapper').on('click', function() {
        if(!isPc) {
            $('#erwe-wrapper').removeClass('moveIn');
            $('#navbtn').css('opacity', 1);
        }
    });
    // pc-nav 右侧图标鼠标移动
    $('#nav-icon li').hover(
        function(e) {
            navActiveIndex = $(event.target).index();
            $navContact.eq(navActiveIndex).fadeIn()
            $(this).addClass('active');
        },
        function() { 
            $(this).removeClass('active');
            $navContact.hide()
        }
    );
    // 在其中移动鼠标不会隐藏掉内容框
    $('#navicon-content').hover(
        function() {
            $navContact.eq(navActiveIndex).show();
        },
        function() {
            $navContact.eq(navActiveIndex).hide();
        }
    );
    // 导航点击
    $navLis.on('click', function() {
        var index = $(this).index();
        var left = navListItemsLeft[index];
        var scrollTo = sectionsTop[index];
        // pc 手机分别处理
        var scrollY = scrollTo - scrollOffset;
        // 因为使用滚动驱动active的样式赋值以及横线的移动，所以这里就不需要再给单独添加点击事件了，点击只需要驱动window滚动即可
        // $(this).addClass('active').siblings('li').removeClass('active');
        // $navline.css('transform', 'translate(' + left +'px,0)');
        $('html,body').animate({scrollTop: scrollY});
    });
    // 手机菜单按钮点击
    $('#navbtn').on('click', function() {
        var $that = $(this);
        if(!navOpened) {
            $nav.addClass('moveIn');
            $cover.fadeIn();
            $that.attr('class', 'navbtn m-nav-close');
            navOpened = true;
        } else {
            $nav.removeClass('moveIn');
            $cover.fadeOut();
            $that.attr('class', 'navbtn m-nav-gonormal');
            // 动画执行1s 所以等1s的时候执行更换样式，这里用监听动画执行结束不合适
            setTimeout(function() {
                $that.attr('class', 'navbtn m-nav-normal');
            }, 700);
            navOpened = false;
        }
    });
    
    // 启动前端开发所有操作
    var  frontend= new frontendMethods().init(isPc);
    // 点击关闭按钮 前端作品&设计作品用到
    $('.close-hook').on('click', function() {
        $(this).parent().fadeOut();
    });
    // 查看全部前端作品
    $('#Frontend-lookall').on('click', function() {
        $('#all-webworks').fadeIn();
    });
    // 启动设计作品的瀑布流
    designWaterfall(isPc);
    // 设计作品展示
    var designworks = new designWorksMethods();
    $('#gallery-wrapper').on('click', 'li', function() {
        var index = $(this).index();
        designworks.designWorkShow(index)
    });
    // skill技巧滚动触发
    var skillGrow = new skillBarGrow(isPc);
    // 向下滚动监听
    $(window).on('scroll', function() {
        // html body高度不能设置为100%否则滚动不起作用
        var scrollTop = $(window).scrollTop();
        $.each(sectionsTop, function(index, item) {
            if (item > scrollTop) {
                var left = navListItemsLeft[index];
                $navLis.removeClass('active');
                $navLis.eq(index).addClass('active');
                $navline.css('transform', 'translate(' + left +'px,0)');
                return false;
            }
        });
        // 如果在pc下， 对nav进行固定
        if (isPc) {
            if(scrollTop >= navTop && !$nav.hasClass('fixed')) {
                $nav.addClass('fixed');
                $('#works').addClass('navFixTop');
            } else if(scrollTop < navTop && $nav.hasClass('fixed')) {
                $nav.removeClass('fixed');
                $('#works').removeClass('navFixTop');
            }
        }
        // 为配合手机分别对skill下progress做滚动监测
        if ( (scrollTop + screenHeight) > skillTop.code && !$('#skill-code').hasClass('hasgrowed') ) {
            skillGrow.codeGrow();
            $('#skill-code').addClass('hasgrowed');
        }
        if ( (scrollTop + screenHeight + 100) > skillTop.design && !$('#skill-design').hasClass('hasgrowed') ) {
            skillGrow.designGrow();
            $('#skill-design').addClass('hasgrowed');
        }
    });

});