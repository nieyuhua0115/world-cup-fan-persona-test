import type { FanPersona, FanPersonaCode } from "./types";

type FanPersonaCopy = Omit<FanPersona, "image">;

const fanPersonaCopy: Record<FanPersonaCode, FanPersonaCopy> = {
  HSEL: {
    code: "HSEL",
    title: "朋友圈热血保安",
    subtitle: "谁动你在乎的人和事，你先替全世界上头。",
    keywords: ["上头", "长情", "开麦", "主角感", "护短"],
    description:
      "你不是单纯情绪大，你是把喜欢的人、喜欢的事和自己的精神秩序绑在一起。别人说一句不好，你脑内已经拉响警报。你嘴上说算了，手已经在输入框里替它写辩护词。",
    footballQuote: "我不是玻璃心，我只是太有参与感。",
    breakdownMoment: "熟人被误解、喜欢的东西被群嘲、你认真维护的东西被轻飘飘一句否定。",
    friendCircleCopy:
      "我是【朋友圈热血保安】。我不是容易上头，我只是很难对在乎的东西装冷漠。",
    ratings: { passion: 5, tactics: 3, memeEnergy: 4, loyalty: 5, chaos: 4 },
  },
  HSEW: {
    code: "HSEW",
    title: "人间发疯吗喽",
    subtitle: "你的人生宗旨：来都来了，先热闹一下。",
    keywords: ["吗喽", "气氛组", "名场面", "上头", "快乐第一"],
    description:
      "你不一定每次都知道自己在支持什么，但你一定知道哪里有热闹。你是群聊氧气瓶、饭局点火器、朋友圈临时发疯委员会常任理事。无聊是你最大的人生敌人。",
    footballQuote: "我不站队，我站好玩。",
    breakdownMoment: "所有人都很理性、很冷静、很体面，场面安静得像周一早会。",
    friendCircleCopy:
      "我是【人间发疯吗喽】。平时还算正常，遇到名场面不保证。",
    ratings: { passion: 5, tactics: 1, memeEnergy: 5, loyalty: 2, chaos: 5 },
  },
  HSIL: {
    code: "HSIL",
    title: "悲情主角守墓人",
    subtitle: "你爱的不是圆满，是差一点就圆满。",
    keywords: ["悲情", "主角滤镜", "沉默", "长情", "意难平"],
    description:
      "你表面很安静，实际已经在心里给每段遗憾剪完了三分钟混剪。你容易被旧人、旧事、旧歌和一句没说出口的话击中。别人看热闹，你看命运。",
    footballQuote: "人生最狠的地方，是它真的不给所有故事一个售后。",
    breakdownMoment: "老朋友渐行渐远、熟悉的东西变味、你等了很久但没有等到回应。",
    friendCircleCopy: "我是【悲情主角守墓人】。我不是爱难过，我只是对宿命感过敏。",
    ratings: { passion: 4, tactics: 2, memeEnergy: 2, loyalty: 5, chaos: 3 },
  },
  HSIW: {
    code: "HSIW",
    title: "高冷氛围捕手",
    subtitle: "嘴上随便看看，心里已经给人家配好 BGM。",
    keywords: ["氛围感", "主角感", "高冷", "内心戏", "混剪"],
    description:
      "你不一定主动表达喜欢，但你的雷达很灵。一个眼神、一句台词、一张照片，你就能判断谁有主角气质。你看人不是看条件，是看有没有能被命运打光的瞬间。",
    footballQuote: "真正的主角，连沉默都像伏笔。",
    breakdownMoment: "你看好的氛围突然塌了，或者对方一开口把滤镜震碎。",
    friendCircleCopy: "我是【高冷氛围捕手】。我不是颜控，我是在识别主角气质。",
    ratings: { passion: 3, tactics: 1, memeEnergy: 3, loyalty: 2, chaos: 3 },
  },
  HTEL: {
    code: "HTEL",
    title: "沙发区无证总监",
    subtitle: "你距离接管全局只差别人肯听你说完。",
    keywords: ["无证总监", "开会", "复盘", "开麦", "长情"],
    description:
      "你最痛苦的不是事情出问题，而是所有人都不按你脑内流程走。你能一边上头一边指出问题结构，情绪很满，方案也很满。你不是爱管闲事，你是真的觉得这事可以更好。",
    footballQuote: "这事为什么会这样？听我给你复盘。",
    breakdownMoment: "你提醒过的坑，别人还是精准踩进去，还回头问你怎么办。",
    friendCircleCopy: "我是【沙发区无证总监】。不懂的人在看结果，懂的人已经开始复盘流程。",
    ratings: { passion: 5, tactics: 5, memeEnergy: 4, loyalty: 5, chaos: 4 },
  },
  HTEW: {
    code: "HTEW",
    title: "策略型发疯指挥官",
    subtitle: "你不是不理性，你只是理性得很激动。",
    keywords: ["复盘", "发疯", "开麦", "乐子", "指挥欲"],
    description:
      "你能分析局势，也能当场爆炸。上一秒还在讲问题模型，下一秒就因为别人执行离谱开始血压升高。你不是纯情绪型，你是带着逻辑一起发疯。",
    footballQuote: "专业分析是我的底色，激情破防是我的表达。",
    breakdownMoment: "明明有更优解，但大家选择了最离谱、最绕远、最让你心梗的那个。",
    friendCircleCopy: "我是【策略型发疯指挥官】。我懂道理，但我也要骂。",
    ratings: { passion: 5, tactics: 5, memeEnergy: 5, loyalty: 2, chaos: 5 },
  },
  HTIL: {
    code: "HTIL",
    title: "阴暗复盘老登",
    subtitle: "表面不说话，心里已经开完三次会。",
    keywords: ["老登", "复盘", "内心戏", "长情", "阴暗开会"],
    description:
      "你很少当场爆发，因为你忙着在心里画因果图。别人骂表面问题，你已经看到系统漏洞。你的社交风险是：你越沉默，心里的会议纪要越长。",
    footballQuote: "热闹是他们的，因果链是我的。",
    breakdownMoment: "所有人都在骂最显眼的人，但真正的问题明明在前面三步。",
    friendCircleCopy: "我是【阴暗复盘老登】。不吵不闹，但我真的看懂了。",
    ratings: { passion: 3, tactics: 5, memeEnergy: 2, loyalty: 5, chaos: 2 },
  },
  HTIW: {
    code: "HTIW",
    title: "冷脸趋势赌徒",
    subtitle: "你嘴上冷静分析，心里已经切到下一个版本。",
    keywords: ["趋势", "冷脸", "预判", "版本答案", "内心戏"],
    description:
      "你不太沉迷情怀，也不太相信人设永恒。你擅长闻风向、看趋势、提前换赛道。别人说你薄情，你说自己只是拒绝在错误版本里硬撑。",
    footballQuote: "感情会骗人，趋势不会。",
    breakdownMoment: "你刚看好的方向，下一秒被现实打脸，还打得很响。",
    friendCircleCopy: "我是【冷脸趋势赌徒】。我不冲动，我只是提前布局。",
    ratings: { passion: 3, tactics: 5, memeEnergy: 3, loyalty: 1, chaos: 4 },
  },
  CSEL: {
    code: "CSEL",
    title: "情怀型老朋友",
    subtitle: "你看的是现在，也是自己的旧存档。",
    keywords: ["情怀", "长情", "冷静", "主角", "青春"],
    description:
      "你不一定大喊大叫，但你记得很多年前的歌、路、聊天记录和那种回不去的感觉。你嘴上说看淡了，真碰到旧人旧事，心里还是会轻轻一紧。",
    footballQuote: "我不是还在等谁，我是在等青春给我回个消息。",
    breakdownMoment: "熟悉的人变陌生，熟悉的东西变商业，熟悉的日子只剩截图。",
    friendCircleCopy: "我是【情怀型老朋友】。有些喜欢不是选择，是命。",
    ratings: { passion: 3, tactics: 2, memeEnergy: 2, loyalty: 5, chaos: 1 },
  },
  CSEW: {
    code: "CSEW",
    title: "快乐版本流浪汉",
    subtitle: "你不是变心，你是在升级精神生活。",
    keywords: ["快乐", "流浪", "主角", "爽感", "灵活站队"],
    description:
      "你很务实：哪里好玩、哪里好看、哪里能让人心情变好，你就先住一下。别人说你墙头草，你说自己是开放式快乐。忠诚可以有，但别耽误你找乐子。",
    footballQuote: "我不是背叛，我只是追求更高质量的快乐。",
    breakdownMoment: "你刚宣布入坑，它立刻塌了、糊了、无聊了。",
    friendCircleCopy: "我是【快乐版本流浪汉】。我的精神归属随快乐浓度实时更新。",
    ratings: { passion: 2, tactics: 2, memeEnergy: 4, loyalty: 1, chaos: 4 },
  },
  CSIL: {
    code: "CSIL",
    title: "主角滤镜鉴赏家",
    subtitle: "你不是想太多，你是在研究命运如何打光。",
    keywords: ["主角滤镜", "安静", "氛围", "故事", "内心戏"],
    description:
      "你看起来很淡，但你很会捕捉故事感。一个动作、一次沉默、一个小习惯，你就能判断这个人适不适合成为某段人生的主角。你不一定说，但你看得很准。",
    footballQuote: "有些人一出现，空气里就有伏笔。",
    breakdownMoment: "你看好的主角突然变普通，或者全世界都没看出你看到的东西。",
    friendCircleCopy: "我是【主角滤镜鉴赏家】。我的眼光可能比算法还毒。",
    ratings: { passion: 2, tactics: 1, memeEnergy: 3, loyalty: 3, chaos: 2 },
  },
  CSIW: {
    code: "CSIW",
    title: "安静追星型破防人",
    subtitle: "表面淡淡的，心里已经为 TA 写完小作文。",
    keywords: ["追星", "安静", "破防", "主角", "爽感"],
    description:
      "你平时看起来很理智，但只要喜欢的人或东西一出现，你的精神状态就开始不稳定。你不一定公开发疯，但会默默截图、收藏、反复看，然后假装自己只是路过。",
    footballQuote: "我没有入坑，我只是暂时被命运击中。",
    breakdownMoment: "喜欢的人被误解、喜欢的东西没高光，或者你珍藏的滤镜被现实打碎。",
    friendCircleCopy: "我是【安静追星型破防人】。我没疯，我只是喜欢的东西太会发光。",
    ratings: { passion: 3, tactics: 1, memeEnergy: 3, loyalty: 2, chaos: 3 },
  },
  CTEL: {
    code: "CTEL",
    title: "理性长情受害者",
    subtitle: "你知道问题在哪，但你还是舍不得走。",
    keywords: ["理性", "长情", "复盘", "受害者", "放不下"],
    description:
      "你不是盲目坚持，你清楚哪里不对、哪里消耗、哪里早该止损。但最惨的是，你全都知道，还是会给一次机会。你是理性和情怀共同折磨下的成熟受害者。",
    footballQuote: "我已经看穿了问题，但我还没看开。",
    breakdownMoment: "你分析过的所有隐患，最后全部应验，而你还在原地。",
    friendCircleCopy: "我是【理性长情受害者】。我不是不懂，我只是放不下。",
    ratings: { passion: 2, tactics: 5, memeEnergy: 2, loyalty: 5, chaos: 1 },
  },
  CTEW: {
    code: "CTEW",
    title: "懂事但不装的乐子人",
    subtitle: "能讲逻辑，也能为离谱剧情快乐三分钟。",
    keywords: ["懂事", "乐子人", "复盘", "开麦", "快乐"],
    description:
      "你能看懂问题结构，但你也允许自己快乐。你是少数既能认真分析，也能真心玩梗的人。专业可以有，快乐不能少；成熟可以有，发疯也不能完全戒。",
    footballQuote: "严肃分析到此为止，接下来开始看乐子。",
    breakdownMoment: "事情既没有逻辑，也没有乐子，只剩纯尴尬。",
    friendCircleCopy: "我是【懂事但不装的乐子人】。我懂，但我不端着。",
    ratings: { passion: 3, tactics: 5, memeEnergy: 5, loyalty: 1, chaos: 4 },
  },
  CTIL: {
    code: "CTIL",
    title: "生活审计潜水员",
    subtitle: "你在群里不说话，但心里已经把流程审完了。",
    keywords: ["潜水", "复盘", "老登", "内心戏", "冷静"],
    description:
      "你很少发言，因为你知道一开口就会显得大家不太严谨。你喜欢观察动机、节奏和因果，不喜欢无效激情。你最大的问题是太冷静，冷静到像在给生活写审计报告。",
    footballQuote: "热闹是他们的，问题清单是我的。",
    breakdownMoment: "所有人都在讨论表情包，但真正的问题明明是流程失控。",
    friendCircleCopy: "我是【生活审计潜水员】。我不发言，不代表我没在心里判案。",
    ratings: { passion: 1, tactics: 5, memeEnergy: 2, loyalty: 4, chaos: 1 },
  },
  CTIW: {
    code: "CTIW",
    title: "冷静版本答案猎人",
    subtitle: "你不是墙头草，你只是比别人更早发现趋势。",
    keywords: ["版本答案", "冷静", "秩序", "爽感", "理性投资"],
    description:
      "你看生活像看版本更新。谁靠谱、谁高效、哪条路更顺，你很快就能闻到味。你不沉迷情怀，也不盲目追主角，你只想站在正确的一边。",
    footballQuote: "感情会骗人，版本不会。",
    breakdownMoment: "你选中的版本答案突然整活，稳定人设当场崩盘。",
    friendCircleCopy: "我是【冷静版本答案猎人】。我不是墙头草，我是数据驱动型快乐用户。",
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
