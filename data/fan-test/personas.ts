import type { FanPersona, FanPersonaCode } from "./types";

type FanPersonaCopy = Omit<FanPersona, "image">;

const fanPersonaCopy: Record<FanPersonaCode, FanPersonaCopy> = {
  HSEL: {
    code: "HSEL",
    title: "国足型 RNM 退钱真爱粉",
    subtitle: "骂得最狠，回来得也最快。",
    keywords: ["RNM退钱", "脸都不要了", "真爱粉", "破防", "精神股东"],
    description:
      "你不是不爱，你是爱得太投入，投入到每次翻车都像买票进场被喂了 90 分钟低级失误。你会骂，会破防，会喊退钱，但下一次开赛你还是会坐回电视机前。你的人生 bug 是：嘴上已经开除球籍，心里还在续季票。",
    footballQuote: "RNM，退钱。但下场几点？",
    breakdownMoment: "精心投入的事情烂尾，团队低级失误连环出现，还没人出来负责。",
    friendCircleCopy:
      "我是【国足型 RNM 退钱真爱粉】。骂归骂，主队真有事我还是第一个破防。",
    ratings: { passion: 5, tactics: 3, memeEnergy: 4, loyalty: 5, chaos: 4 },
  },
  HSEW: {
    code: "HSEW",
    title: "林皇型评论区球王",
    subtitle: "灵魂无限猖狂，普通人生也能整成名场面。",
    keywords: ["林皇", "无限猖狂", "抽象", "评论区球王", "小人物封神"],
    description:
      "你不一定是最强的，但你最能让场面活过来。低谷不影响你整活，质疑越多你越抽象。别人靠成绩封神，你靠梗图、气质和离谱精神状态占领评论区。你的人生目标不是金球奖，是让大家多年后还记得那句：你的林皇，无限猖狂。",
    footballQuote: "年少不知林皇好，错把梅罗当成宝。",
    breakdownMoment: "没有人接梗、没人懂你的抽象，场面沉默得像 0:0 闷平。",
    friendCircleCopy:
      "我是【林皇型评论区球王】。我不是最强的，但我最会让评论区活过来。",
    ratings: { passion: 5, tactics: 1, memeEnergy: 5, loyalty: 2, chaos: 5 },
  },
  HSIL: {
    code: "HSIL",
    title: "阿森纳型 93% 冠军",
    subtitle: "差点成功，比没开始更让人意难平。",
    keywords: ["93%冠军", "意难平", "相信过程", "长情", "温差签"],
    description:
      "你最怕的不是失败，是明明已经看到奖杯影子，最后突然被现实绝平。你会相信过程，也会相信如果当年那个人来了、那个机会抓住了、那次没有松，结局会完全不同。你的人格里住着一套最己阵，现实买不到，但你每年都会再排一次。",
    footballQuote: "我们阿森纳是不可战胜的，至少在希望破灭前是。",
    breakdownMoment: "领先很久后崩盘，差一步圆满，或者脑内最强阵容永远只停留在脑内。",
    friendCircleCopy:
      "我是【阿森纳型 93% 冠军】。我不是没赢过，我只是太熟悉差一点。",
    ratings: { passion: 4, tactics: 2, memeEnergy: 2, loyalty: 5, chaos: 3 },
  },
  HSIW: {
    code: "HSIW",
    title: "莱奥型松弛天才",
    subtitle: "球未进人先笑，失误也要有镜头感。",
    keywords: ["莱奥", "球未进人先笑", "勤笑公", "松弛感", "天赋流"],
    description:
      "你有一种很难被生活完全按住的松弛感。事情还没成，你已经能笑出主角镜头；结果有点离谱，你也能把尴尬踢成花活。别人看重完成度，你看重状态和氛围。你可能会失误，但你不会轻易内耗。",
    footballQuote: "球未进，人先笑。",
    breakdownMoment: "所有人都绷得太紧，或者你的松弛被误解成不认真。",
    friendCircleCopy:
      "我是【莱奥型松弛天才】。我不是不努力，我只是连失误都不想丑着失误。",
    ratings: { passion: 3, tactics: 1, memeEnergy: 3, loyalty: 2, chaos: 3 },
  },
  HTEL: {
    code: "HTEL",
    title: "滕哈格型发布会逆转大师",
    subtitle: "比赛可以输，发布会必须赢。",
    keywords: ["发布会逆转", "两年两冠", "藤甲军", "嘴硬", "KPI防御"],
    description:
      "你是典型的发布会型人格。事情办砸了没关系，重点是你能把过程讲得积极，把困难讲成建设性，把历史成绩搬出来续命。你不是不会反思，只是反思之前必须先保住更衣室和自己的藤甲军。",
    footballQuote: "数据不重要，过程是积极的。",
    breakdownMoment: "别人只看结果，不听你讲周期、贡献、伤病名单和两年两冠。",
    friendCircleCopy:
      "我是【滕哈格型发布会逆转大师】。你可以赢我，但赛后我一定能逆转。",
    ratings: { passion: 5, tactics: 5, memeEnergy: 4, loyalty: 5, chaos: 4 },
  },
  HTEW: {
    code: "HTEW",
    title: "安东尼型圆神启动",
    subtitle: "输出可以没有，动作必须先行。",
    keywords: ["圆神启动", "转圈", "花活", "仪式感", "集锦型人格"],
    description:
      "你做事很讲究启动仪式。别人拿到球先传，你拿到任务先转两圈找感觉。你不是完全没逻辑，你只是认为人生不能只有效率，还得有镜头语言。你一旦上头，就会把简单问题踢成集锦素材。",
    footballQuote: "圆神，启动。",
    breakdownMoment: "别人要求你直接推进，不给你任何姿势和表演空间。",
    friendCircleCopy:
      "我是【安东尼型圆神启动】。我不一定最快解决问题，但我一定让问题看起来很有节目效果。",
    ratings: { passion: 5, tactics: 5, memeEnergy: 5, loyalty: 2, chaos: 5 },
  },
  HTIL: {
    code: "HTIL",
    title: "维尔纳型金色侦察机",
    subtitle: "跑到位了，临门一脚看命。",
    keywords: ["金色侦察机", "跑位满分", "临门随缘", "复盘", "努力型离谱"],
    description:
      "你不是不努力，甚至经常提前出现在正确位置。你的问题是最后一步总有点玄学：材料准备好了，话术想好了，机会也来了，结果临门一脚突然飞向角旗区。你的人生看起来很有过程，结果偶尔像被射门键背叛。",
    footballQuote: "跑位到了，射门另说。",
    breakdownMoment: "你前面 90% 都做对了，最后一步却把自己送上赛后开会。",
    friendCircleCopy:
      "我是【维尔纳型金色侦察机】。我不是没到位，我只是最后一下随机生成。",
    ratings: { passion: 3, tactics: 5, memeEnergy: 2, loyalty: 5, chaos: 2 },
  },
  HTIW: {
    code: "HTIW",
    title: "哈兰德型冷面杀手",
    subtitle: "话不多，但一开口就是保持谦逊。",
    keywords: ["Stay humble", "保持谦逊", "压迫感", "效率", "杀人诛心"],
    description:
      "你不爱无效热闹，更相信效率、强度和结果。你看起来冷静，实际上内心已经完成高位逼抢。你不需要讲很多，偶尔一句话就能让对面开始复盘人生。你最讨厌别人把低效包装成浪漫。",
    footballQuote: "Stay humble.",
    breakdownMoment: "别人整活半天没有产出，还要求你欣赏他的过程。",
    friendCircleCopy:
      "我是【哈兰德型冷面杀手】。我不太说话，但我的存在感会自己进球。",
    ratings: { passion: 3, tactics: 5, memeEnergy: 3, loyalty: 1, chaos: 4 },
  },
  CSEL: {
    code: "CSEL",
    title: "凯孙型深情告别",
    subtitle: "亲爱的孙，爱你的凯。",
    keywords: ["凯孙", "分别文学", "兄弟情", "长情", "遗憾感"],
    description:
      "你是很会珍惜旧关系的人。你不一定天天表达，但一到分别、转会、散场、各奔东西，你心里那封小作文就自动生成。你最吃的是陪伴多年后不得不告别的剧情，表面祝好，内心已经配好《天下足球》BGM。",
    footballQuote: "亲爱的孙，爱你的凯。",
    breakdownMoment: "老搭档散伙，熟悉的人走远，曾经的默契变成回忆杀。",
    friendCircleCopy:
      "我是【凯孙型深情告别】。我不是矫情，我只是对并肩作战过的人很难体面放下。",
    ratings: { passion: 3, tactics: 2, memeEnergy: 2, loyalty: 5, chaos: 1 },
  },
  CSEW: {
    code: "CSEW",
    title: "斯特林型快乐足球",
    subtitle: "机会可以浪费，快乐不能缺席。",
    keywords: ["快乐足球", "快乐男孩", "乐子人", "浪射", "快乐第一"],
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
    title: "龙哥型人生许愿池",
    subtitle: "去哪哪成功，像被命运精准开光。",
    keywords: ["龙哥许愿池", "爽文男主", "优雅", "好运", "精准踩点"],
    description:
      "你不吵不闹，但你很会观察谁站在正确的人生路径上。你羡慕那种球员时代、教练时代都踩点成功的人，也希望自己每一步选择都有点命运偏爱。你看起来冷静，其实很吃人生爽文。",
    footballQuote: "有些人不是转会，是去正确的地方接好运。",
    breakdownMoment: "你精心选择的路线没有开光，反而一路堵车。",
    friendCircleCopy:
      "我是【龙哥型人生许愿池】。我不迷信，但我想站在好运来的那条边路。",
    ratings: { passion: 2, tactics: 1, memeEnergy: 3, loyalty: 3, chaos: 2 },
  },
  CSIW: {
    code: "CSIW",
    title: "贝林厄姆型关键上线",
    subtitle: "平时寻人启事，关键时刻天神下凡。",
    keywords: ["寻人启事", "贝林厄姆", "关键先生", "主角命", "突然上线"],
    description:
      "你不一定全程在线，甚至有时候会被人怀疑是不是隐身了。但关键节点一到，你会突然出现在最该出现的位置。你不是时时刻刻刷存在感的人，你更像剧情后半段才上线的主角，专门负责让前面的质疑变成铺垫。",
    footballQuote: "别找了，我关键时刻会自己出现。",
    breakdownMoment: "你还没等到自己的剧情点，别人已经开始贴寻人启事。",
    friendCircleCopy:
      "我是【贝林厄姆型关键上线】。我可以上半场安静，但下半场请把镜头给我。",
    ratings: { passion: 3, tactics: 1, memeEnergy: 3, loyalty: 2, chaos: 3 },
  },
  CTEL: {
    code: "CTEL",
    title: "马奎尔型硬汉反转",
    subtitle: "被全网开会之后，还是能等到迟来的尊重。",
    keywords: ["马奎尔", "抗压", "背锅", "反转", "沉默证明"],
    description:
      "你不是没被误解过，也不是没被开过会。但你真正厉害的地方是，哪怕舆论已经把你放进战犯名单，你仍然能咬牙把下一场踢完。你不靠嘴上翻盘，靠时间和稳定输出慢慢把评分拉回来。",
    footballQuote: "笑梗不笑人，下一场见。",
    breakdownMoment: "明明不是全怪你，但锅已经精准飞到你头上。",
    friendCircleCopy:
      "我是【马奎尔型硬汉反转】。我不是没有低谷，我只是低谷里还在防空。",
    ratings: { passion: 2, tactics: 5, memeEnergy: 2, loyalty: 5, chaos: 1 },
  },
  CTEW: {
    code: "CTEW",
    title: "哈弗茨型伟大转会",
    subtitle: "一开始看不懂，后来越黑越香。",
    keywords: ["伟大的转会", "越黑越香", "回旋镖", "长期主义", "先质疑后理解"],
    description:
      "你不太吃短期情绪，更愿意看趋势、位置和长期价值。别人第一眼看不懂你，你也不急着解释。你相信很多选择需要时间验货：先质疑，后理解，最后可能还得道歉。",
    footballQuote: "这不是冲动，这是提前布局。",
    breakdownMoment: "你押注的版本答案迟迟不开胡，评论区开始提前清算。",
    friendCircleCopy:
      "我是【哈弗茨型伟大转会】。你可以先质疑我，但记得留好道歉模板。",
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
    title: "姆巴佩型反向锦鲤",
    subtitle: "越努力越玄学，一来一走都能改命。",
    keywords: ["姆巴佩公式", "反向锦鲤", "欧姆定律", "命运反噬", "版本错位"],
    description:
      "你不是不强，甚至很多时候配置很豪华。但你的人生偶尔会出现一种离谱玄学：你一走，原单位起飞；你一来，新单位开始卡顿。你越想靠近目标，目标越像被命运写了反向公式。",
    footballQuote: "有时候不是你不行，是公式不站你这边。",
    breakdownMoment: "你刚加入一个看起来很稳的局，局势突然开始玄学崩盘。",
    friendCircleCopy:
      "我是【姆巴佩型反向锦鲤】。我不是没实力，我只是偶尔和命运版本不兼容。",
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
