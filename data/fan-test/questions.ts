import type { FanQuestion } from "./types";

export const fanQuestions: FanQuestion[] = [
  {
    id: "late_arrival",
    text: "聚会迟到了，你会怎么进场？",
    subtitle: "迟到不可怕，可怕的是你还想踢出赛后名场面。",
    options: [
      {
        id: "leao_smile",
        label: "“球未到，人先笑”，先笑着挥手，气氛到位就算进球",
        scoreEffects: { H: 3, S: 5, E: 4, W: 2 },
      },
      {
        id: "lingard_show",
        label: "“你的林皇，无限猖狂”，一进门直接开始整活",
        scoreEffects: { H: 5, S: 4, E: 6, W: 4 },
      },
      {
        id: "press_conference",
        label: "发布会逆转：解释得像自己根本没迟到",
        scoreEffects: { C: 3, T: 5, E: 4 },
      },
      {
        id: "rnm_refund",
        label: "RNM 退钱：怪导航、怪天气、怪本泽马",
        scoreEffects: { H: 6, E: 4, L: 2 },
      },
    ],
  },
  {
    id: "project_flop",
    text: "你精心准备了一件事，结果全场翻车，你第一反应是？",
    options: [
      {
        id: "ten_hag_process",
        label: "发布会逆转：数据不好看，但过程是积极的",
        scoreEffects: { H: 3, T: 5, E: 5 },
      },
      {
        id: "benzema_fault",
        label: "都 TM 赖本泽马：先找一个万能背锅位",
        scoreEffects: { H: 4, W: 5, E: 3 },
      },
      {
        id: "rnm_investment",
        label: "RNM 退钱：我的投入必须有人负责",
        scoreEffects: { H: 6, E: 4, L: 3 },
      },
      {
        id: "leao_laugh",
        label: "球未进人先笑：算了，先笑一下再说",
        scoreEffects: { C: 3, S: 5, W: 4 },
      },
    ],
  },
  {
    id: "team_role",
    text: "你在团队里最像哪种人？",
    options: [
      {
        id: "teng_army",
        label: "藤甲军：我是嫡系，状态不好也有人保",
        scoreEffects: { H: 3, L: 5, E: 3 },
      },
      {
        id: "nine_princes",
        label: "九子夺嫡：我必须当核心，别让我干脏活",
        scoreEffects: { H: 4, S: 4, W: 4 },
      },
      {
        id: "werner_position",
        label: "金色侦察机：我跑位很好，但最后一步随缘",
        scoreEffects: { C: 3, T: 5, I: 2 },
      },
      {
        id: "alonso_luck",
        label: "龙哥许愿池：我来了，事情就会变顺",
        scoreEffects: { C: 4, S: 5, W: 3 },
      },
    ],
  },
  {
    id: "facing_doubt",
    text: "面对质疑，你的默认反应是？",
    options: [
      {
        id: "two_titles",
        label: "两年两冠：翻旧账证明我以前赢过",
        scoreEffects: { H: 3, T: 5, E: 5, L: 2 },
      },
      {
        id: "palmer_boomerang",
        label: "要突没突，要传没传：先忍着，后面打脸",
        scoreEffects: { C: 3, T: 4, W: 6 },
      },
      {
        id: "arsenal_almost",
        label: "93% 冠军：我差点就赢了，你懂不懂含金量",
        scoreEffects: { H: 3, S: 4, L: 5 },
      },
      {
        id: "lingard_more",
        label: "你的林皇，无限猖狂：质疑越多，我越抽象",
        scoreEffects: { H: 5, E: 6, W: 4 },
      },
    ],
  },
  {
    id: "no_reply",
    text: "喜欢的人突然不回消息，你会？",
    options: [
      {
        id: "dear_son",
        label: "亲爱的孙，爱你的凯：开始写离别小作文",
        scoreEffects: { S: 5, I: 5, L: 6 },
      },
      {
        id: "mbappe_formula",
        label: "姆巴佩公式：越想靠近，越离谱",
        scoreEffects: { C: 3, T: 4, I: 3, W: 3 },
      },
      {
        id: "sterling_happy",
        label: "快乐足球：没事，继续快乐生活",
        scoreEffects: { H: 3, S: 3, E: 3, W: 6 },
      },
      {
        id: "tempo_control",
        label: "发布会逆转：TA 不回不是冷淡，是节奏控制",
        scoreEffects: { C: 5, T: 5, E: 2 },
      },
    ],
  },
  {
    id: "empty_goal",
    text: "空门没进，或者一个特别简单的事被你搞砸了，你会？",
    options: [
      {
        id: "happy_football",
        label: "快乐足球：没事，快乐第一，进球第二",
        scoreEffects: { H: 4, S: 3, E: 3, W: 6 },
      },
      {
        id: "golden_scout",
        label: "金色侦察机：跑位到了，射门玄学另说",
        scoreEffects: { C: 3, T: 6, I: 2 },
      },
      {
        id: "antony_spin",
        label: "圆神启动：先进集锦再说，实用性以后再聊",
        scoreEffects: { H: 4, S: 6, E: 3 },
      },
      {
        id: "maguire_respect",
        label: "马奎尔反转：被笑完之后默默下次打回来",
        scoreEffects: { C: 4, T: 3, L: 6 },
      },
    ],
  },
  {
    id: "bad_state",
    text: "朋友问你为什么最近状态不好，你会？",
    options: [
      {
        id: "mourinho_cycle",
        label: "穆三年：周期到了，爆炸正常",
        scoreEffects: { C: 3, T: 5, I: 3, L: 4 },
      },
      {
        id: "chelsea_life",
        label: "车迷的命也是命：别问，问就是 PTSD",
        scoreEffects: { H: 3, I: 5, L: 5 },
      },
      {
        id: "stay_humble",
        label: "保持谦逊：不解释，直接把强度拉上去",
        scoreEffects: { C: 5, T: 5, I: 3 },
      },
      {
        id: "north_campaign",
        label: "蓝军北伐：从低谷开始反攻，嘴上先赢",
        scoreEffects: { H: 5, E: 4, W: 5 },
      },
    ],
  },
  {
    id: "social_media_style",
    text: "你的朋友圈/小红书人格更像？",
    options: [
      {
        id: "leao_feed",
        label: "莱奥型：运动、笑容、松弛感，球未进人先笑",
        scoreEffects: { C: 2, S: 6, E: 3, W: 3 },
      },
      {
        id: "lingard_feed",
        label: "林皇型：抽象、整活、流量体质，无限猖狂",
        scoreEffects: { H: 5, E: 6, W: 5 },
      },
      {
        id: "haaland_feed",
        label: "哈兰德型：少说话，直接上强度，保持谦逊",
        scoreEffects: { C: 5, T: 5, I: 3 },
      },
      {
        id: "arsenal_feed",
        label: "阿森纳型：自黑、自洽、永远相信下一场",
        scoreEffects: { S: 3, L: 6, I: 2 },
      },
    ],
  },
  {
    id: "standards",
    text: "你对别人和自己的标准更像？",
    options: [
      {
        id: "onana_standard",
        label: "我对后卫要求很高的哦：自己也晃，但要求别人稳",
        scoreEffects: { H: 4, T: 5, E: 4 },
      },
      {
        id: "rodri_standard",
        label: "后腰控场：先把自己站稳，再要求体系稳定",
        scoreEffects: { C: 6, T: 6 },
      },
      {
        id: "main_character_standard",
        label: "主角标准：可以犯错，但镜头感不能丢",
        scoreEffects: { S: 6, H: 2, W: 3 },
      },
      {
        id: "maguire_standard",
        label: "抗压标准：被开会也别退，下一场继续顶",
        scoreEffects: { C: 3, L: 6, I: 2 },
      },
    ],
  },
  {
    id: "career_plan",
    text: "你对人生规划的真实状态是？",
    options: [
      {
        id: "wenger_missed",
        label: "温差签：差点拥有全世界，现实一个没来",
        scoreEffects: { S: 5, I: 4, L: 3 },
      },
      {
        id: "best_xi",
        label: "最己阵：脑内阵容豪华，执行预算为零",
        scoreEffects: { T: 5, C: 3, I: 3 },
      },
      {
        id: "great_transfer",
        label: "伟大的转会：现在看不懂，三个月后越看越香",
        scoreEffects: { C: 4, T: 5, W: 4 },
      },
      {
        id: "loan_ballon",
        label: "小熊贷款金球：结果还没来，香槟已经开了",
        scoreEffects: { H: 5, S: 6, E: 3 },
      },
    ],
  },
  {
    id: "deadline",
    text: "deadline 前，你是什么状态？",
    options: [
      {
        id: "time_not_much",
        label: "留给中国队的时间不多了：焦虑但还想搏一脚",
        scoreEffects: { H: 6, L: 3 },
      },
      {
        id: "clock_manage",
        label: "控节奏大师：哪些必须做，哪些可以拖到加时",
        scoreEffects: { C: 6, T: 6 },
      },
      {
        id: "bellingham_late",
        label: "寻人启事：前面隐身，最后十分钟突然上线",
        scoreEffects: { S: 6, W: 4 },
      },
      {
        id: "bus_low_block",
        label: "摆大巴：先活下来，明天再说",
        scoreEffects: { I: 5, C: 3, L: 2 },
      },
    ],
  },
  {
    id: "evaluation",
    text: "别人给你打分，你最像哪种评分区人格？",
    options: [
      {
        id: "score_warrior",
        label: "评分区战神：场上表现其次，评分区必须赢",
        scoreEffects: { H: 5, E: 6, L: 2 },
      },
      {
        id: "k77_control",
        label: "7.7 控分：永远稳定在一个微妙评价",
        scoreEffects: { C: 5, T: 4, I: 2 },
      },
      {
        id: "le_havre_three",
        label: "勒阿弗尔三杰：冷门但有死忠粉宠爱",
        scoreEffects: { S: 4, L: 5, I: 3 },
      },
      {
        id: "palmer_receipt",
        label: "帕尔默回旋镖：先低分，后面让大家补作业",
        scoreEffects: { T: 4, W: 6, C: 2 },
      },
    ],
  },
  {
    id: "favorite_declines",
    text: "你喜欢很久的东西开始走下坡路，你像哪类球迷？",
    options: [
      {
        id: "season_ticket",
        label: "继续买季票：烂归烂，这是我的主队",
        scoreEffects: { L: 7, H: 2 },
      },
      {
        id: "board_review",
        label: "冷静开会：问题在管理层、阵容和执行",
        scoreEffects: { T: 7, C: 4 },
      },
      {
        id: "transfer_out",
        label: "体面告别，火速转会去快乐更稳定的地方",
        scoreEffects: { W: 7, C: 2 },
      },
      {
        id: "dear_son_again",
        label: "亲爱的孙，爱你的凯：祝好，但我真的会难过",
        scoreEffects: { I: 5, S: 4, L: 6 },
      },
    ],
  },
  {
    id: "life_var",
    text: "深夜睡不着时，你脑内 VAR 在回放什么？",
    options: [
      {
        id: "offside_sentence",
        label: "我今天那句话是不是越位了？",
        scoreEffects: { I: 5, S: 3, L: 2 },
      },
      {
        id: "eu_m_bappe",
        label: "欧姆定律：为什么我努力和目标永远不相交？",
        scoreEffects: { C: 4, T: 5, I: 3 },
      },
      {
        id: "ningde_era",
        label: "宁德时代：突然觉得自己也能土味封神",
        scoreEffects: { H: 5, W: 5, E: 2 },
      },
      {
        id: "zombie_monday",
        label: "周一维：明天又是抽象工作日，人生有点离谱",
        scoreEffects: { I: 4, W: 3, C: 2 },
      },
    ],
  },
  {
    id: "advice_manager",
    text: "朋友找你咨询感情/工作/人生，你会怎么当无证主帅？",
    options: [
      {
        id: "red_card_friend",
        label: "先护短：谁让你难受，我先给 TA 红牌",
        scoreEffects: { H: 5, L: 5, E: 3 },
      },
      {
        id: "tactics_session",
        label: "画战术板：问题、资源、风险、下一步",
        scoreEffects: { T: 7, C: 5 },
      },
      {
        id: "drama_scout",
        label: "先判断这段关系有没有年度狗血名场面",
        scoreEffects: { S: 5, W: 4 },
      },
      {
        id: "assistant_coach",
        label: "认真听完，最后像助教一样给一句准的",
        scoreEffects: { I: 5, C: 3, L: 2 },
      },
    ],
  },
  {
    id: "low_errors",
    text: "团队连续犯低级错误，你最像哪句破防名言？",
    options: [
      {
        id: "face_gone",
        label: "脸都不要了：这还能继续踢？",
        scoreEffects: { H: 6, E: 5, L: 2 },
      },
      {
        id: "structural_issue",
        label: "不是某个人的问题，是整个体系出球有问题",
        scoreEffects: { C: 5, T: 7 },
      },
      {
        id: "worst_script",
        label: "输完泰国输越南：我已经开始脑补最坏剧本",
        scoreEffects: { H: 3, S: 4, I: 5 },
      },
      {
        id: "hassan_savior",
        label: "先别死，说不定人民的球王会来救一下",
        scoreEffects: { W: 5, C: 3, S: 2 },
      },
    ],
  },
];
