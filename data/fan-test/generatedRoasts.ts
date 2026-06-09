import { nationalTeams } from "./nationalTeams";
import { fanPersonaList } from "./personas";
import type { FanPersonaCode } from "./types";

export type GeneratedFanRoast = {
  headline: string;
  roast: string;
  shareCopy: string;
  xiaohongshuCaption: string;
  shortVideoScript: string;
};

export type GeneratedFanRoastCache = Partial<
  Record<FanPersonaCode, Partial<Record<string, GeneratedFanRoast>>>
>;

const personaAngles: Record<
  FanPersonaCode,
  {
    hook: string;
    pressure: string;
    receipt: string;
  }
> = {
  HSEL: {
    hook: "嘴上已经在退票窗口排队，心里还给下一场留了前排",
    pressure: "最受不了低级失误和无人负责",
    receipt: "骂得越响，投入越深",
  },
  HSEW: {
    hook: "人生不一定封神，但评论区必须有你的名场面",
    pressure: "最怕没人接梗，气氛突然被踢成闷平",
    receipt: "成绩可以普通，记忆点不能普通",
  },
  HSIL: {
    hook: "你不是没赢过，你只是太熟悉差一步圆满",
    pressure: "最怕希望已经出现，现实突然补时绝平",
    receipt: "相信过程，也反复回看每一个如果",
  },
  HSIW: {
    hook: "失误也要保持镜头感，尴尬不能丑着发生",
    pressure: "最怕所有人都绷太紧，把松弛误会成摆烂",
    receipt: "完成度可以波动，状态必须在线",
  },
  HTEL: {
    hook: "比赛输不输另说，赛后解释一定要逆转",
    pressure: "最怕别人只看比分，不听周期、伤病和历史贡献",
    receipt: "你不是不反思，只是先保护叙事",
  },
  HTEW: {
    hook: "任务还没推进，启动仪式已经踢满全场",
    pressure: "最怕别人要求你直接有效，不给任何表演空间",
    receipt: "效率不是唯一指标，节目效果也算资产",
  },
  HTIL: {
    hook: "前面九成都到位，最后一下交给玄学部门",
    pressure: "最怕临门一脚突然背叛你的全部准备",
    receipt: "过程经得起复盘，结果偶尔需要闭眼",
  },
  HTIW: {
    hook: "话不多，但一句保持谦逊能让对面复盘人生",
    pressure: "最怕低效表演被包装成浪漫过程",
    receipt: "强度、效率和结果是你的三件套",
  },
  CSEL: {
    hook: "表面祝好，内心已经剪好告别混剪",
    pressure: "最怕老搭档散场，默契突然变成回忆杀",
    receipt: "不常表达，但很难体面放下并肩过的人",
  },
  CSEW: {
    hook: "机会可以浪费，快乐不能缺席",
    pressure: "最怕所有快乐都被完成率审判",
    receipt: "你不保证最优解，但保证有名场面",
  },
  CSIL: {
    hook: "你不迷信，但很想站在好运来的那条边路",
    pressure: "最怕精心选择的路线没有开光，反而一路堵车",
    receipt: "看似冷静，实际很吃人生爽文",
  },
  CSIW: {
    hook: "上半场可以安静，下半场必须把镜头给你",
    pressure: "最怕剧情点还没到，别人已经开始质疑你离线",
    receipt: "你不刷存在感，只负责关键上线",
  },
  CTEL: {
    hook: "被开会不代表被判死刑，尊重有时会迟到",
    pressure: "最怕锅精准飞来，而真正的问题没人看见",
    receipt: "你靠时间和稳定输出慢慢把评分拉回来",
  },
  CTEW: {
    hook: "第一眼看不懂，过几个月可能要补道歉信",
    pressure: "最怕长期价值还没兑现，评论区已经提前清算",
    receipt: "你相信趋势、位置和时间会帮你说话",
  },
  CTIL: {
    hook: "群里不说话，心里已经开完三次赛后会",
    pressure: "最怕大家只骂单点失误，不看整体结构",
    receipt: "沉默不是没意见，是懂球滤镜太厚",
  },
  CTIW: {
    hook: "配置看着很强，命运偶尔像没装对版本",
    pressure: "最怕刚加入稳定局，局势立刻开始玄学卡顿",
    receipt: "不是没实力，是有时和公式不兼容",
  },
};

const teamVerbs = [
  "把滤镜调成淘汰赛强度",
  "给你的精神状态加了一层转播字幕",
  "让这份人格多了点大赛味",
  "把普通破防升级成世界杯版本",
];

export const generatedFanRoasts: GeneratedFanRoastCache = Object.fromEntries(
  fanPersonaList.map((persona, personaIndex) => [
    persona.code,
    Object.fromEntries(
      nationalTeams.map((team, teamIndex) => {
        const angle = personaAngles[persona.code];
        const teamVerb = teamVerbs[(personaIndex + teamIndex) % teamVerbs.length];
        const keyword = team.keywords[(personaIndex + teamIndex) % team.keywords.length];

        return [
          team.id,
          {
            headline: `${persona.title}，叠上${team.roastTitle}`,
            roast: `你的底层人格是【${persona.title}】：${angle.hook}。世界杯滤镜一切到【${team.roastTitle}】，${teamVerb}。你看似在看${team.name}，其实是在用${keyword}给自己的情绪找合法出口。${angle.pressure}，但${angle.receipt}。`,
            shareCopy: `我是【${persona.title}】+【${team.roastTitle}】。世界杯期间别问我冷不冷静，我只是暂时把理智租给了${team.name}。`,
            xiaohongshuCaption: `测完发现我是【${persona.title}】+【${team.roastTitle}】。本来只是想看个世界杯，结果人格、情绪、主队滤镜一起上场。${team.warningLabel}，而我本人负责把每一场都看成精神体检。`,
            shortVideoScript: `如果你测出【${persona.title}】再叠【${team.roastTitle}】，说明你看世界杯不是单纯看球。你是在用${team.name}这层滤镜，把生活里的上头、复盘和破防全部合理化。`,
          } satisfies GeneratedFanRoast,
        ];
      }),
    ),
  ]),
) as GeneratedFanRoastCache;
