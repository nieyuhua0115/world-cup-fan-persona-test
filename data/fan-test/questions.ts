import type { FanQuestion } from "./types";

export const fanQuestions: FanQuestion[] = [
  {
    id: "group_chat_matchday",
    text: "群聊突然 99+，像赛后评分区炸了，你第一反应是？",
    subtitle: "这题测你是冲进评论区，还是先看完整回放。",
    options: [
      {
        id: "rush_to_comments",
        label: "立刻进场，先看谁被开会、谁在逆风输出",
        scoreEffects: { H: 5, E: 5, W: 3 },
      },
      {
        id: "read_full_thread",
        label: "先爬楼，从首发阵容看到补时冲突",
        scoreEffects: { C: 5, T: 4, I: 2 },
      },
      {
        id: "find_hot_comment",
        label: "找热评和名场面，看看有没有懂球帝味儿",
        scoreEffects: { S: 5, W: 4, E: 2 },
      },
      {
        id: "silent_scout",
        label: "继续潜水，但默默把所有战犯名单记下",
        scoreEffects: { I: 6, C: 3, L: 2 },
      },
    ],
  },
  {
    id: "friend_late",
    text: "朋友迟到 40 分钟，你最像哪种赛后反应？",
    options: [
      {
        id: "stoppage_rage",
        label: "直接补时心梗：这都能迟到？裁判你看看表！",
        scoreEffects: { H: 6, E: 4 },
      },
      {
        id: "check_xg",
        label: "先问交通、路线和出门时间，分析迟到 xG",
        scoreEffects: { C: 6, T: 5 },
      },
      {
        id: "dramatic_wait",
        label: "把等待脑补成绝杀前摇：主角总是最后登场",
        scoreEffects: { S: 5, I: 2, H: 2 },
      },
      {
        id: "switch_plan",
        label: "算了，我先转会去奶茶店，快乐不能等",
        scoreEffects: { W: 6, C: 2 },
      },
    ],
  },
  {
    id: "plan_changed",
    text: "原定计划突然被改，你会怎么处理这次“临场换人”？",
    options: [
      {
        id: "coach_yelling",
        label: "当场开麦：这个换人我看不懂，主帅下课",
        scoreEffects: { H: 6, E: 5, T: 2 },
      },
      {
        id: "new_shape",
        label: "迅速重排路线、预算和时间，改踢三中卫",
        scoreEffects: { C: 5, T: 6 },
      },
      {
        id: "new_storyline",
        label: "觉得剧情突然有意思了，伟大的转会来了",
        scoreEffects: { S: 4, W: 5 },
      },
      {
        id: "old_plan_loyal",
        label: "嘴上配合，心里还在怀念原计划的黄金时代",
        scoreEffects: { I: 4, L: 5, S: 2 },
      },
    ],
  },
  {
    id: "someone_questions_you",
    text: "别人问你“你懂这个吗？”，你会触发哪种球盲过滤器？",
    options: [
      {
        id: "three_min_press",
        label: "立刻高位逼抢，三分钟输出到对方想换边",
        scoreEffects: { H: 4, E: 6, T: 3 },
      },
      {
        id: "show_receipts",
        label: "不急，先摆数据、案例、时间线和裁判报告",
        scoreEffects: { C: 6, T: 6 },
      },
      {
        id: "vibes_expert",
        label: "我不一定懂战术，但我懂谁有主角相",
        scoreEffects: { S: 6, W: 2 },
      },
      {
        id: "quietly_knows",
        label: "不说话，心里已经把 TA 开除懂球籍",
        scoreEffects: { I: 6, C: 3, L: 2 },
      },
    ],
  },
  {
    id: "posting_after_event",
    text: "一件事刚结束，你的朋友圈像哪种赛后内容？",
    options: [
      {
        id: "instant_reaction",
        label: "哨响立刻发：我宣布这就是年度名场面",
        scoreEffects: { H: 5, E: 6, W: 2 },
      },
      {
        id: "long_analysis",
        label: "等十分钟，写一篇赛后复盘小作文",
        scoreEffects: { C: 4, T: 5, I: 2 },
      },
      {
        id: "slow_motion",
        label: "配图、BGM、滤镜都要像慢镜头回放",
        scoreEffects: { S: 6, E: 2 },
      },
      {
        id: "archive_only",
        label: "不发，默默收藏，等多年后当青春素材",
        scoreEffects: { I: 6, L: 4 },
      },
    ],
  },
  {
    id: "shopping_window",
    text: "买东西时，你更像哪类转会窗操作？",
    options: [
      {
        id: "highlight_scout",
        label: "看集锦上头：它太有主角气质了，拿下",
        scoreEffects: { S: 6, H: 3 },
      },
      {
        id: "data_department",
        label: "参数、口碑、价格全拉表，拒绝溢价引援",
        scoreEffects: { C: 5, T: 6 },
      },
      {
        id: "deadline_deal",
        label: "临门一脚冲动下单，转会截止日的神",
        scoreEffects: { H: 4, W: 6 },
      },
      {
        id: "renew_contract",
        label: "老牌子续约，虽然有短板但有感情基础",
        scoreEffects: { L: 6, C: 2, I: 2 },
      },
    ],
  },
  {
    id: "favorite_life_script",
    text: "你最吃哪种人生剧本？",
    options: [
      {
        id: "last_dance_life",
        label: "最后一舞：老朋友、旧梦想、终于等到你",
        scoreEffects: { S: 5, L: 6, H: 2 },
      },
      {
        id: "dark_horse_life",
        label: "黑马逆袭：谁都不看好，偏偏一路爆冷",
        scoreEffects: { W: 7, H: 4 },
      },
      {
        id: "chosen_one_life",
        label: "天选主角：一登场就像自带金球奖滤镜",
        scoreEffects: { S: 7, W: 2 },
      },
      {
        id: "system_win_life",
        label: "体系碾压：计划清楚、执行稳定、赢得体面",
        scoreEffects: { T: 7, C: 4 },
      },
    ],
  },
  {
    id: "pressure_high_press",
    text: "压力突然高位逼抢，你会怎么出球？",
    options: [
      {
        id: "carry_through",
        label: "硬带过去，边破防边推进",
        scoreEffects: { H: 6, L: 3 },
      },
      {
        id: "calm_build_up",
        label: "先控一下，拆任务，别被节奏带乱",
        scoreEffects: { C: 6, T: 5 },
      },
      {
        id: "call_teammate",
        label: "立刻找队友连线，不说出来会炸",
        scoreEffects: { E: 6, H: 3 },
      },
      {
        id: "park_bus",
        label: "先摆大巴，消失一会儿，活下来再说",
        scoreEffects: { I: 6, C: 3 },
      },
    ],
  },
  {
    id: "protect_favorite",
    text: "你喜欢的东西被群嘲，你会？",
    options: [
      {
        id: "defend_badge",
        label: "直接护队徽：可以输，不能被这么说",
        scoreEffects: { H: 6, E: 4, L: 4 },
      },
      {
        id: "explain_context",
        label: "解释背景：你们只看比分，不看过程",
        scoreEffects: { T: 5, C: 4, L: 2 },
      },
      {
        id: "main_character_defense",
        label: "替主角说话：你们不懂 TA 的宿命感",
        scoreEffects: { S: 6, H: 2, L: 2 },
      },
      {
        id: "find_new_fun",
        label: "算了，先去隔壁看新乐子，别影响心情",
        scoreEffects: { W: 7, C: 2 },
      },
    ],
  },
  {
    id: "watching_live",
    text: "一起看直播/综艺/比赛时，你是哪种解说席？",
    options: [
      {
        id: "human_barrage",
        label: "人形弹幕，5 秒一句：这都不吹？",
        scoreEffects: { E: 7, H: 4 },
      },
      {
        id: "tactical_camera",
        label: "战术镜头，专看谁站位不对、谁在摸鱼",
        scoreEffects: { T: 6, C: 4 },
      },
      {
        id: "star_camera",
        label: "主角镜头，谁有高光谁就是今天封面",
        scoreEffects: { S: 6, W: 3 },
      },
      {
        id: "inner_commentary",
        label: "表面安静，内心已经刷满弹幕",
        scoreEffects: { I: 7, S: 2 },
      },
    ],
  },
  {
    id: "old_favorite_decline",
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
        scoreEffects: { T: 6, C: 4 },
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
    id: "party_role",
    text: "朋友聚会里，你最像哪种球队角色？",
    options: [
      {
        id: "captain_hype",
        label: "更衣室队长，负责把气氛喊起来",
        scoreEffects: { E: 7, H: 3, L: 2 },
      },
      {
        id: "midfield_organizer",
        label: "中场调度，时间地点流程都得顺",
        scoreEffects: { T: 6, C: 4 },
      },
      {
        id: "highlight_editor",
        label: "赛后剪辑师，专门记住好笑名场面",
        scoreEffects: { S: 4, W: 5 },
      },
      {
        id: "bench_observer",
        label: "替补席观察员，不多说但全都看见了",
        scoreEffects: { I: 6, C: 3 },
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
    id: "friend_asks_advice",
    text: "朋友找你咨询感情/工作/人生，你会怎么当无证主帅？",
    options: [
      {
        id: "protective_manager",
        label: "先护短：谁让你难受，我先给 TA 红牌",
        scoreEffects: { H: 5, L: 5, E: 2 },
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
        id: "quiet_assistant",
        label: "认真听完，最后像助教一样给一句准的",
        scoreEffects: { I: 5, C: 3, L: 2 },
      },
    ],
  },
  {
    id: "work_before_off",
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
    id: "being_roasted",
    text: "别人调侃你“你这也太戏多了”，你会？",
    options: [
      {
        id: "press_conference",
        label: "开新闻发布会：我这是激情，不是戏多",
        scoreEffects: { H: 5, E: 5, S: 2 },
      },
      {
        id: "analysis_defense",
        label: "展示回放：我每一步推理都有依据",
        scoreEffects: { T: 6, C: 4 },
      },
      {
        id: "own_storyline",
        label: "承认，但我的人生剧情确实比 0:0 好看",
        scoreEffects: { S: 6, W: 4 },
      },
      {
        id: "silent_grudge",
        label: "不解释，默默记入赛后评分",
        scoreEffects: { I: 6, L: 3, C: 2 },
      },
    ],
  },
];
