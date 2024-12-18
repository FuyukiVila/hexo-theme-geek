try {
    const path = 'https://cdn.jsdelivr.net/gh/fuyukivila/live2d_demo@master/'
    $("<link>").attr({ href: path + "assets/waifu.min.css?v=1.4.2", rel: "stylesheet", type: "text/css" }).appendTo('head');
    $('body').append('<div class="waifu"><div class="waifu-tips"></div><canvas id="live2d" class="live2d"></canvas><div class="waifu-tool"><span class="fui-home"></span> <span class="fui-chat"></span> <span class="fui-eye"></span> <span class="fui-user"></span> <span class="fui-photo"></span> <span class="fui-info-circle"></span> <span class="fui-cross"></span></div></div>');
    $.ajax({
        url: path + "assets/waifu-tips.min.js?v=1.4.2", dataType: "script", cache: true, success: function () {
            $.ajax({
                url: path + "assets/live2d.min.js?v=1.0.5", dataType: "script", cache: true, success: function () {
                    /* 可直接修改部分参数 */
                    live2d_settings['hitokotoAPI'] = "hitokoto.cn";  // 一言 API
                    live2d_settings['modelId'] = 1;                  // 默认模型 ID
                    live2d_settings['modelTexturesId'] = Math.floor(Math.random() * 87) + 1;          // 默认材质 ID
                    live2d_settings['modelStorage'] = false;         // 不储存模型 ID
                    live2d_settings['waifuSize'] = '336x300';
                    live2d_settings['waifuFontSize'] = '14px';
                    live2d_settings['showToolMenu'] = false;
                    /* 在 initModel 前添加 */
                    initModel(waifu_tips);
                }
            });
        }
    });
} catch (err) { console.log("[Error] JQuery is not defined.") }

waifu_tips = {
    "waifu": {
        "console_open_msg": ["哈哈，你打开了控制台，是想要看看我的秘密吗？"],
        "copy_message": ["你都复制了些什么呀，转载要记得加上出处哦"],
        "screenshot_message": ["照好了嘛，是不是很可爱呢？"],
        "hidden_message": ["我们还能再见面的吧…"],
        "load_rand_textures": ["我还没有其他衣服呢", "我的新衣服好看嘛"],
        "hour_tips": {
            "t5-7": ["早上好！一日之计在于晨，美好的一天就要开始了"],
            "t7-11": ["上午好！工作顺利嘛，不要久坐，多起来走动走动哦！"],
            "t11-14": ["中午了，工作了一个上午，现在是午餐时间！"],
            "t14-17": ["午后很容易犯困呢，今天的运动目标完成了吗？"],
            "t17-19": ["傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红~"],
            "t19-21": ["晚上好，今天过得怎么样？"],
            "t21-23": ["已经这么晚了呀，早点休息吧，晚安~"],
            "t23-5": ["你是夜猫子呀？这么晚还不睡觉，明天起的来嘛"],
            "default": ["嗨~ 快来逗我玩吧！"]
        },
        "referrer_message": {
            "localhost": ["欢迎阅读<span style=\"color:#0099cc;\">『", "』</span>", " - "],
            "baidu": ["Hello! 来自 百度搜索 的朋友<br>你是搜索 <span style=\"color:#0099cc;\">", "</span> 找到的我吗？"],
            "so": ["Hello! 来自 360搜索 的朋友<br>你是搜索 <span style=\"color:#0099cc;\">", "</span> 找到的我吗？"],
            "google": ["Hello! 来自 谷歌搜索 的朋友<br>欢迎阅读<span style=\"color:#0099cc;\">『", "』</span>", " - "],
            "default": ["Hello! 来自 <span style=\"color:#0099cc;\">", "</span> 的朋友"],
            "none": ["欢迎阅读<span style=\"color:#0099cc;\">『", "』</span>", " - "]
        },
        "referrer_hostname": {
            "example.com": ["示例网站"]
        },
        "model_message": {
            "1": ["来自 Potion Maker 的 Pio 酱 ~"],
            "2": ["来自 Potion Maker 的 Tia 酱 ~"]
        },
        "hitokoto_api_message": {
            "lwl12.com": ["这句一言来自 <span style=\"color:#0099cc;\">『{source}』</span>", "，是 <span style=\"color:#0099cc;\">{creator}</span> 投稿的", "。"],
            "fghrsh.net": ["这句一言出处是 <span style=\"color:#0099cc;\">『{source}』</span>，是 <span style=\"color:#0099cc;\">FGHRSH</span> 在 {date} 收藏的！"],
            "jinrishici.com": ["这句诗词出自 <span style=\"color:#0099cc;\">《{title}》</span>，是 {dynasty}诗人 {author} 创作的！"],
            "hitokoto.cn": ["这句一言来自 <span style=\"color:#0099cc;\">『{source}』</span>，是 <span style=\"color:#0099cc;\">{creator}</span> 在 hitokoto.cn 投稿的。"]
        }
    },
    "mouseover": [
        { "selector": ".postname", "text": ["要看看 <span style=\"color:#0099cc;\">{text}</span> 么？"] },
        { "selector": ".post-content a[href^='http']", "text": ["要看看 <span style=\"color:#0099cc;\">{text}</span> 么？"] },

        { "selector": ".fui-home", "text": ["点击前往首页，想回到上一页可以使用浏览器的后退功能哦"] },
        { "selector": ".fui-chat", "text": ["一言一语，一颦一笑。一字一句，一颗赛艇。"] },
        { "selector": ".fui-eye", "text": ["嗯··· 要切换 看板娘 吗？"] },
        { "selector": ".fui-user", "text": ["喜欢换装 Play 吗？"] },
        { "selector": ".fui-photo", "text": ["要拍张纪念照片吗？"] },
        { "selector": ".fui-info-circle", "text": ["这里有关于我的信息呢"] },
        { "selector": ".fui-cross", "text": ["你不喜欢我了吗..."] },

        { "selector": "a.ba[href='/']", "text": ["要回到首页吗？"] },
        { "selector": "a.ba[href='/archives']", "text": ["这里都有些什么呢？"] },
        { "selector": "a.ba[href='/about']", "text": ["想知道有关本站的信息吗？"] },
        { "selector": "a.ba[href='https://github.com/fuyukivila']", "text": ["要逛逛我的GitHub吗？"] },
        { "selector": "a.ba[href='https://space.bilibili.com/23772649']", "text": ["要逛逛我的B站主页吗？"] },

        { "selector": ".vedit", "text": ["要吐槽些什么呢？"] },
        { "selector": ".vnick", "text": ["该怎么称呼你呢？"] },
        { "selector": ".vmail", "text": ["留下你的邮箱，不然就是无头像人士了"] },
        { "selector": ".vlink", "text": ["你的家在哪里呢，好让我去参观参观"] },

        { "selector": "#bodyx.bg_black .el-switch", "text": ["要变亮了，注意了哦~"] },
        { "selector": "#bodyx:not(.bg_black) .el-switch", "text": ["深夜时要爱护眼睛呀"] },
        { "selector": ".back-to-top", "text": ["biu！直达顶部"] },
        { "selector": ".my-face", "text": ["网站的版权信息，还会动呢"] },
        { "selector": ".author", "text": ["这是网站的作者 <span style=\"color:#0099cc;\">{text}</span> 哦~"] },

        { "selector": ".waifu #live2d", "text": ["干嘛呢你，快把手拿开", "鼠…鼠标放错地方了！", "你想干什么呀？"] }
    ],
    "click": [
        {
            "selector": ".waifu #live2d",
            "text": [
                "是…是不小心碰到了吧",
                "萝莉控是什么呀",
                "你看到我的小熊了吗",
                "再摸的话我可要报警了！⌇●﹏●⌇",
                "110吗，这里有个变态一直在摸我(ó﹏ò｡)"
            ]
        }
    ],
    "seasons": [
        { "date": "01/01", "text": ["<span style=\"color:#0099cc;\">元旦</span>了呢，新的一年又开始了，今年是{year}年~"] },
        { "date": "02/14", "text": ["又是一年<span style=\"color:#0099cc;\">情人节</span>，{year}年找到对象了嘛~"] },
        { "date": "03/08", "text": ["今天是<span style=\"color:#0099cc;\">妇女节</span>！"] },
        { "date": "03/12", "text": ["今天是<span style=\"color:#0099cc;\">植树节</span>，要保护环境呀"] },
        { "date": "04/01", "text": ["悄悄告诉你一个秘密~<span style=\"background-color:#34495e;\">今天是愚人节，不要被骗了哦~</span>"] },
        { "date": "05/01", "text": ["今天是<span style=\"color:#0099cc;\">五一劳动节</span>，计划好假期去哪里了吗~"] },
        { "date": "06/01", "text": ["今天是<span style=\"color:#0099cc;\">儿童节</span>了呢，快活的时光总是短暂，要是永远长不大该多好啊…"] },
        { "date": "09/03", "text": ["今天是<span style=\"color:#0099cc;\">中国人民抗日战争胜利纪念日</span>，铭记历史、缅怀先烈、珍爱和平、开创未来。"] },
        { "date": "09/10", "text": ["今天是<span style=\"color:#0099cc;\">教师节</span>，在学校要给老师问声好呀~"] },
        { "date": "10/01", "text": ["今天是<span style=\"color:#0099cc;\">国庆节</span>，假期打算怎么过啊？"] },
        { "date": "10/24", "text": ["今天是<span style=\"color:#0099cc;\">程序员节</span>，写了多少行代码啊？"]},
        { "date": "10/31", "text": ["<span style=\"color:#0099cc;\">万圣节</span>快乐！不给糖就捣蛋！"]},
        { "date": "11/05-11/12", "text": ["这几天是<span style=\"color:#0099cc;\">双十一</span>主人肯定又去剁手买买买了~"] },
        { "date": "12/20-12/31", "text": ["今年的<span style=\"color:#0099cc;\">圣诞节</span>，是和谁一起过的呢~"] }
    ]
}