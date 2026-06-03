import type { FanPersona, FanPersonaCode } from "./types";

type FanPersonaCopy = Omit<FanPersona, "image">;

const fanPersonaCopy: Record<FanPersonaCode, FanPersonaCopy> = {
  HSEL: {
    code: "HSEL",
    title: "护队徽型热血队长",
    subtitle: "可以输，但不能被这么说。",
    keywords: ["护短", "开麦", "长情", "精神股东", "血压越位"],
    description:
      "你的人格底色是“我的主队我能骂，别人不能骂”。你不是不懂问题在哪，但谁敢轻飘飘否定你在乎的人和事，你就会立刻从观众席冲到发布会。你对感情、朋友和旧爱好的忠诚度很高，高到有时像在替一支保级队买季票。",
    footballQuote: "烂归烂，这是我的主队。",
    breakdownMoment: "喜欢的东西被群嘲、朋友被误解、你认真维护的东西被人一句话开除球籍。",
    friendCircleCopy:
      "我是【护队徽型热血队长】。我不是玻璃心，我只是精神股东持股比例太高。",
    ratings: { passion: 5, tactics: 3, memeEnergy: 4, loyalty: 5, chaos: 4 },
  },
  HSEW: {
    code: "HSEW",
    title: "林皇型无限猖狂",
    subtitle: "低谷不影响你整活，普通人生也能踢成流量中心。",
    keywords: ["林皇", "无限猖狂", "整活", "评论区中心", "小人物封神"],
    description:
      "你不一定是最强的，但你一定是最能让评论区活过来的。越是低谷，你越能整出一种“年少不知林皇好”的抽象气质。别人靠实力服众，你靠场面、表情包和精神状态让大家不得不记住你。",
    footballQuote: "你的林皇，无限猖狂。",
    breakdownMoment: "全场都很无聊、没人接梗、你抛出去的名场面没有人懂。",
    friendCircleCopy:
      "我是【林皇型无限猖狂】。我不是最强的，但我最会让评论区沸腾。",
    ratings: { passion: 5, tactics: 1, memeEnergy: 5, loyalty: 2, chaos: 5 },
  },
  HSIL: {
    code: "HSIL",
    title: "阿森纳型 93% 冠军",
    subtitle: "你最懂什么叫差一点就圆满。",
    keywords: ["93%冠军", "意难平", "长情", "相信过程", "青春疼痛"],
    description:
      "你不是喜欢失败，你是太容易相信那个“这次真的有戏”的剧本。你会为一个几乎成功的故事反复心碎，也会在下一季、下一次、下一段关系里继续相信过程。你的问题不是不清醒，是太擅长把希望坚持到最后十分钟。",
    footballQuote: "我们阿森纳是不可战胜的，至少在希望破灭前是。",
    breakdownMoment: "领先很久后崩盘、期待很久后落空、差一步圆满却被现实绝平。",
    friendCircleCopy:
      "我是【阿森纳型 93% 冠军】。我不是没赢过，我只是太熟悉意难平。",
    ratings: { passion: 4, tactics: 2, memeEnergy: 2, loyalty: 5, chaos: 3 },
  },
  HSIW: {
    code: "HSIW",
    title: "莱奥型松弛天才",
    subtitle: "球未进人先笑，事情没成你先有氛围。",
    keywords: ["莱奥", "勤笑公", "松弛感", "主角滤镜", "快乐天赋"],
    description:
      "你有一种很难被生活完全按住的松弛感。事情还没成，你已经能笑出镜头感；结果有点离谱，你也能把尴尬踢成花活。别人看重完成度，你看重状态和氛围。你可能会失误，但你不会轻易内耗。",
    footballQuote: "球未进，人先笑。",
    breakdownMoment: "所有人都绷得太紧，或者你的松弛被误解成不认真。",
    friendCircleCopy:
      "我是【莱奥型松弛天才】。我不是不努力，我只是连失误都不想丑着失误。",
    ratings: { passion: 3, tactics: 1, memeEnergy: 3, loyalty: 2, chaos: 3 },
  },
  HTEL: {
    code: "HTEL",
    title: "滕帅型发布会逆转大师",
    subtitle: "场上可以输，嘴上绝不能输。",
    keywords: ["发布会逆转", "两年两冠", "开会", "嘴硬", "KPI防御"],
    description:
      "你是典型的赛后发布会人格。事情办砸了没关系，重点是你能把过程讲得积极、把困难讲成建设性、把历史成绩搬出来续命。你不是不会反思，只是反思之前必须先保住更衣室。",
    footballQuote: "数据不重要，过程是积极的。",
    breakdownMoment: "别人只看结果，不听你讲过程、周期和历史贡献。",
    friendCircleCopy:
      "我是【滕帅型发布会逆转大师】。我不是嘴硬，我是在维护项目军心。",
    ratings: { passion: 5, tactics: 5, memeEnergy: 4, loyalty: 5, chaos: 4 },
  },
  HTEW: {
    code: "HTEW",
    title: "圆神型花活指挥官",
    subtitle: "输出可以没有，动作必须有。",
    keywords: ["圆神启动", "仪式感", "花活", "指挥欲", "先转两圈"],
    description:
      "你做事很讲究气势和启动仪式。别人拿到球先传，你拿到任务先转两圈找感觉。你不是完全没逻辑，你只是认为人生不能只有效率，还得有镜头语言。你一旦上头，就会把简单问题踢成集锦素材。",
    footballQuote: "圆神，启动。",
    breakdownMoment: "别人要求你直接推进，不给你任何表演空间。",
    friendCircleCopy:
      "我是【圆神型花活指挥官】。我不一定最快解决问题，但我一定让问题看起来很有节目效果。",
    ratings: { passion: 5, tactics: 5, memeEnergy: 5, loyalty: 2, chaos: 5 },
  },
  HTIL: {
    code: "HTIL",
    title: "穆三年型阴暗复盘师",
    subtitle: "你不是悲观，你只是太懂周期。",
    keywords: ["穆三年", "复盘", "老登", "体系崩盘", "内心开会"],
    description:
      "你很少被表面热闹骗到。别人还在庆祝第一年甜蜜、第二年争冠，你已经开始担心第三年更衣室爆炸。你看问题喜欢看周期、结构和人心变化，冷静得像一份赛季总结报告。",
    footballQuote: "不是突然崩的，是周期早就写好了。",
    breakdownMoment: "你提前看出的隐患没人信，最后全部应验。",
    friendCircleCopy:
      "我是【穆三年型阴暗复盘师】。我不是扫兴，我只是比你们早两轮看到崩盘。",
    ratings: { passion: 3, tactics: 5, memeEnergy: 2, loyalty: 5, chaos: 2 },
  },
  HTIW: {
    code: "HTIW",
    title: "哈兰德型冷脸压迫者",
    subtitle: "话不多，但一开口就是 Stay humble。",
    keywords: ["保持谦逊", "冷脸", "压迫感", "效率", "杀人诛心"],
    description:
      "你不爱无效热闹，更相信效率和结果。你看起来冷静，实际上内心已经完成了强度拉满的高位逼抢。你不需要讲很多，偶尔一句话就能让对面开始复盘人生。",
    footballQuote: "Stay humble.",
    breakdownMoment: "你看好的版本答案突然整活，或者别人把低效当浪漫。",
    friendCircleCopy:
      "我是【哈兰德型冷脸压迫者】。我不太说话，但我的存在感会自己进球。",
    ratings: { passion: 3, tactics: 5, memeEnergy: 3, loyalty: 1, chaos: 4 },
  },
  CSEL: {
    code: "CSEL",
    title: "拉什福德型回忆前锋",
    subtitle: "永远未来可期，也永远带着青春滤镜。",
    keywords: ["19岁的拉什福德", "回忆型前锋", "青春", "长情", "滤镜"],
    description:
      "你很容易记住一个人、一件事、一个阶段最闪光的样子。哪怕后来状态起伏，你心里仍然保留那句“他当年真的可以”。你不是不看现实，只是现实很难完全打败你的青春滤镜。",
    footballQuote: "年少时的高光，真的会变成一生的滤镜。",
    breakdownMoment: "你怀念的东西被现实反复打脸，但你还是舍不得清仓。",
    friendCircleCopy:
      "我是【拉什福德型回忆前锋】。我不是恋旧，我只是见过它最好的样子。",
    ratings: { passion: 3, tactics: 2, memeEnergy: 2, loyalty: 5, chaos: 1 },
  },
  CSEW: {
    code: "CSEW",
    title: "斯特林型快乐足球",
    subtitle: "机会很多，快乐更多。",
    keywords: ["快乐足球", "快乐男孩", "乐子人", "灵活站队", "快乐第一"],
    description:
      "你的人生哲学很清楚：可以不完美，但不能不快乐。你不一定每次选择都最合理，但总能把过程踢得很有节目效果。别人纠结成败，你更在意这场有没有笑点、有没有名场面。",
    footballQuote: "快乐第一，进球第二。",
    breakdownMoment: "所有机会都变成 KPI，快乐被人用完成度审判。",
    friendCircleCopy:
      "我是【斯特林型快乐足球】。我可能错失空门，但我不会错失快乐。",
    ratings: { passion: 2, tactics: 2, memeEnergy: 4, loyalty: 1, chaos: 4 },
  },
  CSIL: {
    code: "CSIL",
    title: "龙哥型爽文许愿池",
    subtitle: "你相信路径选择，也相信命运打光。",
    keywords: ["龙哥许愿池", "优雅", "好运", "主角路线", "精准踩点"],
    description:
      "你不吵不闹，但你很会观察谁站在正确的人生路径上。你羡慕那种球员时代、教练时代都踩点成功的人，也希望自己每一步选择都有点命运偏爱。你看起来冷静，其实很吃人生爽文。",
    footballQuote: "有些人不是转会，是去正确的地方接好运。",
    breakdownMoment: "你精心选择的路线没有开光，反而一路堵车。",
    friendCircleCopy:
      "我是【龙哥型爽文许愿池】。我不迷信，但我想站在好运来的那条边路。",
    ratings: { passion: 2, tactics: 1, memeEnergy: 3, loyalty: 3, chaos: 2 },
  },
  CSIW: {
    code: "CSIW",
    title: "主角镜头捕手",
    subtitle: "你不一定懂战术，但你懂谁适合被剪 BGM。",
    keywords: ["主角脸", "镜头感", "混剪", "安静追星", "高光样本"],
    description:
      "你看世界自带慢镜头。一个眼神、一次庆祝、一个背影，你就能判断这个人有没有主角气质。你不一定公开发疯，但会默默截图、收藏、反复看，然后说自己只是路过。",
    footballQuote: "真正的主角，连沉默都像伏笔。",
    breakdownMoment: "你看好的主角没有高光，或者一开口把滤镜震碎。",
    friendCircleCopy:
      "我是【主角镜头捕手】。我不是颜控，我是在识别人类高光样本。",
    ratings: { passion: 3, tactics: 1, memeEnergy: 3, loyalty: 2, chaos: 3 },
  },
  CTEL: {
    code: "CTEL",
    title: "马奎尔型抗压反转",
    subtitle: "被全网开会之后，还是能等到迟来的尊重。",
    keywords: ["马奎尔", "抗压", "背锅", "反转", "沉默证明"],
    description:
      "你不是没被误解过，也不是没被开过会。但你真正厉害的地方是，哪怕舆论已经把你放进战犯名单，你仍然能咬牙把下一场踢完。你不靠嘴上翻盘，靠时间和稳定输出慢慢把评分拉回来。",
    footballQuote: "笑梗不笑人，下一场见。",
    breakdownMoment: "明明不是全怪你，但锅已经精准飞到你头上。",
    friendCircleCopy:
      "我是【马奎尔型抗压反转】。我不是没有低谷，我只是低谷里还在防空。",
    ratings: { passion: 2, tactics: 5, memeEnergy: 2, loyalty: 5, chaos: 1 },
  },
  CTEW: {
    code: "CTEW",
    title: "帕尔默型回旋镖大腿",
    subtitle: "要突没突，要传没传？最后全网道歉。",
    keywords: ["回旋镖", "被低估", "打脸", "乐子人", "新大腿"],
    description:
      "你不急着在开局证明自己。别人早早下判断，说你不行、没特点、撑不起场面，你反而能在后半程突然接管比赛。你是那种越被低估，越适合把评论区做成回旋镖展览的人。",
    footballQuote: "先别急着开会，等我踢完。",
    breakdownMoment: "你还没进入状态，别人已经开始给你写失败总结。",
    friendCircleCopy:
      "我是【帕尔默型回旋镖大腿】。你可以先质疑我，但记得留好道歉模板。",
    ratings: { passion: 3, tactics: 5, memeEnergy: 5, loyalty: 1, chaos: 4 },
  },
  CTIL: {
    code: "CTIL",
    title: "战术区潜水老登",
    subtitle: "群里不说话，心里已经开完三次赛后会。",
    keywords: ["潜水", "战术板", "老登", "球盲过滤器", "冷静开会"],
    description:
      "你看热闹很少只看热闹。别人刷表情包，你在看问题结构；别人骂单点失误，你在看整个体系怎么出球。你最大的问题是太冷静，冷静到像懂球帝评论区里那个没人敢回复的长评老哥。",
    footballQuote: "热闹是他们的，站位图是我的。",
    breakdownMoment: "所有人都在骂前锋，但真正的问题明明是中场失控。",
    friendCircleCopy:
      "我是【战术区潜水老登】。我不发言，不代表我没把你们开除懂球籍。",
    ratings: { passion: 1, tactics: 5, memeEnergy: 2, loyalty: 4, chaos: 1 },
  },
  CTIW: {
    code: "CTIW",
    title: "哈弗茨型伟大转会",
    subtitle: "一开始看不懂，后面发现可能真有说法。",
    keywords: ["伟大的转会", "版本答案", "理性投资", "长期主义", "先质疑后理解"],
    description:
      "你不太吃短期情绪，更愿意看趋势、位置和长期价值。别人第一眼看不懂你，你也不急着解释。你相信很多选择需要时间验货：先质疑，后理解，最后可能还得道歉。",
    footballQuote: "这不是冲动，这是提前布局。",
    breakdownMoment: "你押注的版本答案迟迟不开胡，评论区开始提前清算。",
    friendCircleCopy:
      "我是【哈弗茨型伟大转会】。我不是墙头草，我是在等市场证明我。",
    ratings: { passion: 1, tactics: 5, memeEnergy: 3, loyalty: 1, chaos: 3 },
  },
};

export const fanPersonas = Object.fromEntries(
  Object.entries(fanPersonaCopy).map(([code, persona]) => [
    code,
    {
      ...persona,
      image: {
        src: `/personas/${code}.svg`,
        alt: `${persona.title} 人格插画`,
      },
    },
  ]),
) as Record<FanPersonaCode, FanPersona>;

export const fanPersonaList = Object.values(fanPersonas);
