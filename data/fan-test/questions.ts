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
    id: "bad_project_start",
    text: "你负责一个项目，开局就烂了，你第一反应是？",
    options: [
      {
        id: "chelsea_north",
        label: "蓝军北伐：现在第 11 名而已，伟大征程刚开始",
        scoreEffects: { H: 3, S: 3, W: 6 },
      },
      {
        id: "ten_hag_positive",
        label: "发布会逆转：数据不重要，过程是积极的",
        scoreEffects: { T: 5, E: 5, H: 3 },
      },
      {
        id: "arsenal_93",
        label: "93% 冠军：我已经提前看到最后崩盘了",
        scoreEffects: { I: 5, L: 5, S: 3 },
      },
      {
        id: "benzema_fault",
        label: "都赖本泽马：先找一个万能背锅位续命",
        scoreEffects: { H: 4, W: 5, E: 3 },
      },
    ],
  },
  {
    id: "message_not_replied",
    text: "你喜欢的人没回消息，你会？",
    options: [
      {
        id: "rashford_memory",
        label: "19 岁的拉什福德：开始回忆过去那些高光瞬间",
        scoreEffects: { S: 5, I: 4, L: 5 },
      },
      {
        id: "haaland_humble",
        label: "哈兰德 Stay humble：保持冷静，保持谦逊，保持不秒回",
        scoreEffects: { C: 6, T: 4, I: 2 },
      },
      {
        id: "lingard_meme",
        label: "林皇模式：发个抽象表情包，灵魂无限猖狂",
        scoreEffects: { H: 4, E: 6, W: 5 },
      },
      {
        id: "leao_already_smiling",
        label: "莱奥模式：人家还没回，你已经脑补到笑了",
        scoreEffects: { S: 6, H: 3, W: 2 },
      },
    ],
  },
  {
    id: "empty_goal_miss",
    text: "打游戏/踢球/做事空门没进，你会？",
    options: [
      {
        id: "sterling_happy",
        label: "快乐足球：没事，快乐第一，进球第二",
        scoreEffects: { H: 4, S: 4, E: 3, W: 5 },
      },
      {
        id: "werner_scout",
        label: "金色侦察机：跑位到了，射门玄学另说",
        scoreEffects: { T: 5, C: 3, W: 3 },
      },
      {
        id: "antony_spin",
        label: "圆神启动：先转两圈，姿势必须先进集锦",
        scoreEffects: { S: 6, H: 3, E: 3 },
      },
      {
        id: "maguire_return",
        label: "马奎尔反转：被笑完之后默默等下次打回来",
        scoreEffects: { C: 3, T: 3, I: 4, L: 6 },
      },
    ],
  },
  {
    id: "bad_state",
    text: "朋友问你为什么最近状态不好，你会？",
    options: [
      {
        id: "two_year_two_titles",
        label: "两年两冠：我有历史成绩，不接受清算",
        scoreEffects: { H: 4, T: 4, E: 5, L: 2 },
      },
      {
        id: "mourinho_third_year",
        label: "穆三年：周期到了，爆炸正常",
        scoreEffects: { C: 3, T: 5, I: 3, L: 4 },
      },
      {
        id: "alonso_well",
        label: "龙哥许愿池：没事，我准备去接好运",
        scoreEffects: { C: 4, S: 5, W: 4 },
      },
      {
        id: "chelsea_life",
        label: "车迷的命也是命：别问，问就是 PTSD",
        scoreEffects: { H: 3, I: 5, L: 5 },
      },
    ],
  },
  {
    id: "social_status",
    text: "你最像哪种社交状态？",
    options: [
      {
        id: "lingard_center",
        label: "林皇：到哪都是评论区中心，抽象但有流量",
        scoreEffects: { H: 5, S: 4, E: 7, W: 4 },
      },
      {
        id: "leao_relaxed",
        label: "莱奥：一出现氛围就松了，失误也不内耗",
        scoreEffects: { C: 3, S: 5, E: 3, W: 3 },
      },
      {
        id: "haaland_pressure",
        label: "哈兰德：话不多，但压迫感很强",
        scoreEffects: { C: 5, T: 5, I: 3 },
      },
      {
        id: "palmer_slapback",
        label: "帕尔默：一开始被低估，后面直接打脸全网",
        scoreEffects: { S: 4, T: 3, W: 6 },
      },
    ],
  },
  {
    id: "decision_style",
    text: "你做选择时更像？",
    options: [
      {
        id: "antony_ritual",
        label: "安东尼：先转一圈，仪式感必须有",
        scoreEffects: { H: 3, S: 6, E: 2 },
      },
      {
        id: "sterling_choice",
        label: "斯特林：选择不一定对，但一定快乐",
        scoreEffects: { H: 4, W: 6, E: 3 },
      },
      {
        id: "benzema_burden",
        label: "本泽马：出问题我先背着，反正都赖我",
        scoreEffects: { C: 3, T: 3, L: 6, I: 2 },
      },
      {
        id: "ten_hag_spin",
        label: "滕帅：无论结果如何，赛后我能圆回来",
        scoreEffects: { T: 6, E: 5, H: 2 },
      },
    ],
  },
  {
    id: "annoying_teammate",
    text: "你最讨厌团队里哪种人？",
    options: [
      {
        id: "no_dribble_no_pass",
        label: "要突没突，要传没传，还觉得自己是核心",
        scoreEffects: { H: 5, T: 4, E: 3 },
      },
      {
        id: "conference_goat",
        label: "活没干完，但发布会逆转能力封神",
        scoreEffects: { T: 5, C: 4, H: 2 },
      },
      {
        id: "bottle_93",
        label: "93% 冠军：快赢了开始松，最后全队心碎",
        scoreEffects: { H: 4, L: 5, I: 2 },
      },
      {
        id: "nine_princes",
        label: "九子夺嫡：人人都是太子，没人干脏活",
        scoreEffects: { C: 4, T: 5, W: 2 },
      },
    ],
  },
  {
    id: "low_point",
    text: "遇到低谷，你会？",
    options: [
      {
        id: "north_campaign",
        label: "蓝军北伐：从倒数开始往上打，先喊口号再说",
        scoreEffects: { H: 5, E: 4, W: 5 },
      },
      {
        id: "maguire_endure",
        label: "马奎尔：笑梗不笑人，我迟早证明自己",
        scoreEffects: { C: 4, T: 3, L: 6 },
      },
      {
        id: "rashford_flashback",
        label: "拉什福德：陷入青春回忆杀，想起自己也曾未来可期",
        scoreEffects: { S: 5, I: 5, L: 4 },
      },
      {
        id: "lingard_deify",
        label: "林皇：低谷？那正是封神的开始",
        scoreEffects: { H: 5, S: 5, E: 4, W: 4 },
      },
    ],
  },
  {
    id: "social_media_persona",
    text: "你的朋友圈/小红书人格更像？",
    options: [
      {
        id: "leao_feed",
        label: "莱奥型：运动、笑容、松弛感，球未进人先笑",
        scoreEffects: { S: 6, E: 3, W: 3 },
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
    id: "incoming_pressure",
    text: "压力突然高位逼抢，你会怎么出球？",
    options: [
      {
        id: "rnm_breakdown",
        label: "RNM 退钱：先破防，先骂一句，血压先越位",
        scoreEffects: { H: 7, E: 5 },
      },
      {
        id: "rodri_control",
        label: "先控节奏，拆任务，像后腰一样把局面稳住",
        scoreEffects: { C: 6, T: 6 },
      },
      {
        id: "hero_ball",
        label: "相信个人能力，准备来一脚人生世界波",
        scoreEffects: { H: 4, S: 6, W: 2 },
      },
      {
        id: "park_the_bus",
        label: "先摆大巴，消失一会儿，活下来再说",
        scoreEffects: { I: 6, C: 3, L: 2 },
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
        id: "post_match_board",
        label: "冷静开会：问题在管理层、阵容和执行",
        scoreEffects: { T: 7, C: 4 },
      },
      {
        id: "transfer_out",
        label: "体面告别，火速转会去快乐更稳定的地方",
        scoreEffects: { W: 7, C: 2 },
      },
      {
        id: "quiet_grief",
        label: "不骂了，只是像老队长退场一样难过",
        scoreEffects: { I: 6, L: 5, S: 2 },
      },
    ],
  },
  {
    id: "late_night_var",
    text: "深夜睡不着时，你脑内 VAR 在回放什么？",
    options: [
      {
        id: "emotional_offside",
        label: "我今天那句话是不是越位了？",
        scoreEffects: { I: 5, S: 3, L: 2 },
      },
      {
        id: "life_tactics_board",
        label: "未来三个月战术板：怎么出球、怎么推进",
        scoreEffects: { T: 6, C: 4 },
      },
      {
        id: "new_project_fc",
        label: "突然想开新坑，明天组建新俱乐部",
        scoreEffects: { H: 5, W: 5 },
      },
      {
        id: "message_not_sent",
        label: "想发消息，但怕被判干扰门将",
        scoreEffects: { I: 5, H: 2, S: 2 },
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
    id: "new_task_before_off",
    text: "快下班/睡觉前突然来新任务，你是什么补时状态？",
    options: [
      {
        id: "added_time_meltdown",
        label: "补时 8 分钟？我宣布裁判今天有问题",
        scoreEffects: { H: 6, E: 5 },
      },
      {
        id: "manage_clock",
        label: "先看能不能控节奏，哪些今天必须做",
        scoreEffects: { C: 6, T: 5 },
      },
      {
        id: "hero_moment",
        label: "突然燃起来：这不就是我的绝杀剧本吗",
        scoreEffects: { S: 5, H: 4 },
      },
      {
        id: "save_energy",
        label: "能拖进明天就拖，保级队也要保存体力",
        scoreEffects: { I: 4, W: 4, C: 2 },
      },
    ],
  },
  {
    id: "team_low_errors",
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
        id: "wait_savior",
        label: "先别死，说不定人民的球王会来救一下",
        scoreEffects: { W: 5, C: 3, S: 2 },
      },
    ],
  },
  {
    id: "being_roasted",
    text: "别人调侃你“你这也太戏多了”，你会？",
    options: [
      {
        id: "press_conference_defense",
        label: "开发布会：我这是激情，不是戏多",
        scoreEffects: { H: 5, E: 5, S: 2 },
      },
      {
        id: "var_evidence",
        label: "展示 VAR 回放：我每一步推理都有依据",
        scoreEffects: { T: 6, C: 4 },
      },
      {
        id: "own_storyline",
        label: "承认，但我的人生剧情确实比 0:0 好看",
        scoreEffects: { S: 6, W: 4 },
      },
      {
        id: "post_match_rating",
        label: "不解释，默默记入赛后评分",
        scoreEffects: { I: 6, L: 3, C: 2 },
      },
    ],
  },
];
