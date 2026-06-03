import type { FanQuestion } from "./types";

export const fanQuestions: FanQuestion[] = [
  {
    id: "group_chat_ping",
    text: "群聊突然 99+，你第一反应是？",
    subtitle: "不是世界杯也一样，你的人格会先动。",
    options: [
      {
        id: "rush_in",
        label: "立刻点进去，先看谁又破防了",
        scoreEffects: { H: 5, E: 5, W: 3 },
      },
      {
        id: "observe_context",
        label: "先爬楼，搞清楚事情起因经过结果",
        scoreEffects: { C: 5, T: 4, I: 2 },
      },
      {
        id: "find_main_character",
        label: "看有没有名场面、主角发言和截图素材",
        scoreEffects: { S: 6, W: 4 },
      },
      {
        id: "mute_but_read",
        label: "继续静音，但一条不落全看完",
        scoreEffects: { I: 6, C: 3, L: 2 },
      },
    ],
  },
  {
    id: "weekend_plan",
    text: "周末临时有人约你出去，你会？",
    options: [
      {
        id: "go_now",
        label: "走，人生就是要临时发疯",
        scoreEffects: { H: 5, E: 5, W: 4 },
      },
      {
        id: "check_energy",
        label: "先看体力、时间、地点和明天有没有事",
        scoreEffects: { C: 6, T: 4 },
      },
      {
        id: "who_is_going",
        label: "看谁去，有喜欢的人/有趣的人就去",
        scoreEffects: { S: 5, W: 3 },
      },
      {
        id: "prefer_home",
        label: "嘴上说考虑一下，其实已经想好在家躺平",
        scoreEffects: { I: 6, C: 3 },
      },
    ],
  },
  {
    id: "argument_style",
    text: "和朋友意见不合时，你更像？",
    options: [
      {
        id: "instant_output",
        label: "立刻开麦，三句话内把观点打出去",
        scoreEffects: { H: 5, E: 6 },
      },
      {
        id: "logic_table",
        label: "开始列逻辑、证据、前提和反例",
        scoreEffects: { C: 5, T: 6 },
      },
      {
        id: "feel_story",
        label: "更在意这件事背后的态度和故事",
        scoreEffects: { S: 5, H: 2, L: 2 },
      },
      {
        id: "silent_replay",
        label: "当场没说什么，回家后在脑内复盘 3 小时",
        scoreEffects: { I: 6, T: 3, C: 2 },
      },
    ],
  },
  {
    id: "hot_take",
    text: "刷到一个很离谱的热搜，你会？",
    options: [
      {
        id: "comment_now",
        label: "忍不了，马上输出一句",
        scoreEffects: { H: 6, E: 5 },
      },
      {
        id: "wait_more",
        label: "先别急，等反转和完整信息",
        scoreEffects: { C: 6, T: 4 },
      },
      {
        id: "enjoy_drama",
        label: "不站队，先看大型连续剧怎么演",
        scoreEffects: { W: 6, S: 3 },
      },
      {
        id: "send_private",
        label: "不公开发，只私聊给懂的人吐槽",
        scoreEffects: { I: 5, L: 2, H: 2 },
      },
    ],
  },
  {
    id: "buying_choice",
    text: "买东西时你最容易被什么打动？",
    options: [
      {
        id: "main_character_aura",
        label: "质感、故事、氛围感，感觉它属于我",
        scoreEffects: { S: 6, H: 2 },
      },
      {
        id: "best_value",
        label: "参数、评价、价格，综合最优才下单",
        scoreEffects: { T: 6, C: 4 },
      },
      {
        id: "everyone_likes",
        label: "最近很火，朋友也说好，那我试试",
        scoreEffects: { W: 5, E: 3 },
      },
      {
        id: "old_favorite",
        label: "用惯了就继续买，别来打扰我的舒适区",
        scoreEffects: { L: 6, I: 2, C: 2 },
      },
    ],
  },
  {
    id: "posting_moment",
    text: "你最可能在什么情况下发朋友圈？",
    options: [
      {
        id: "emotion_peak",
        label: "情绪到位了，不发会憋死",
        scoreEffects: { H: 5, E: 6 },
      },
      {
        id: "perfect_scene",
        label: "画面、文案、BGM 都有内味了",
        scoreEffects: { S: 6, E: 3 },
      },
      {
        id: "after_thinking",
        label: "想清楚了，发一句很准的",
        scoreEffects: { I: 4, C: 4, T: 3 },
      },
      {
        id: "almost_never",
        label: "很少发，但每次发都像阶段性总结",
        scoreEffects: { I: 6, L: 3, C: 2 },
      },
    ],
  },
  {
    id: "favorite_plot",
    text: "你最吃哪种人生剧情？",
    options: [
      {
        id: "long_love",
        label: "多年坚持终于等到一个结果",
        scoreEffects: { L: 7, S: 4 },
      },
      {
        id: "sudden_comeback",
        label: "低谷逆袭，爽文一样翻盘",
        scoreEffects: { W: 7, H: 4 },
      },
      {
        id: "chosen_one",
        label: "天选主角登场，所有伏笔都对上了",
        scoreEffects: { S: 6, W: 3 },
      },
      {
        id: "clean_execution",
        label: "计划清晰、执行稳定、结果漂亮",
        scoreEffects: { T: 6, C: 4 },
      },
    ],
  },
  {
    id: "stress_response",
    text: "压力突然砸下来时，你更像？",
    options: [
      {
        id: "fight_mode",
        label: "先顶上去，边崩边干",
        scoreEffects: { H: 6, L: 3 },
      },
      {
        id: "split_tasks",
        label: "拆任务、排优先级、做计划",
        scoreEffects: { C: 6, T: 5 },
      },
      {
        id: "talk_it_out",
        label: "必须找人说说，不然脑子会炸",
        scoreEffects: { E: 6, H: 3 },
      },
      {
        id: "quiet_shutdown",
        label: "先消失一会儿，自己缓过来",
        scoreEffects: { I: 6, C: 3 },
      },
    ],
  },
  {
    id: "follow_someone",
    text: "你会因为什么对一个人上头？",
    options: [
      {
        id: "star_quality",
        label: "有主角感，出现就自带镜头",
        scoreEffects: { S: 7, H: 2 },
      },
      {
        id: "reliable_system",
        label: "靠谱、稳定、做事有章法",
        scoreEffects: { T: 6, C: 4, L: 2 },
      },
      {
        id: "fun_energy",
        label: "有趣，会整活，和 TA 在一起不无聊",
        scoreEffects: { E: 4, W: 5 },
      },
      {
        id: "long_time_trust",
        label: "认识很久，越看越觉得踏实",
        scoreEffects: { L: 6, I: 2 },
      },
    ],
  },
  {
    id: "decision_logic",
    text: "做选择时，你最常用哪套逻辑？",
    options: [
      {
        id: "feel_right",
        label: "我感觉对了，那就对了",
        scoreEffects: { H: 4, S: 5 },
      },
      {
        id: "compare_options",
        label: "列优缺点，比较风险和收益",
        scoreEffects: { C: 6, T: 6 },
      },
      {
        id: "try_new",
        label: "没试过的更香，人生需要新鲜感",
        scoreEffects: { W: 6, H: 3 },
      },
      {
        id: "stay_with_it",
        label: "我知道旧选择的坑，但我懒得换",
        scoreEffects: { L: 6, I: 2 },
      },
    ],
  },
  {
    id: "watching_with_people",
    text: "一群人一起看综艺/比赛/直播时，你是？",
    options: [
      {
        id: "live_barrage",
        label: "人形弹幕，看到哪吐槽到哪",
        scoreEffects: { E: 7, H: 4 },
      },
      {
        id: "plot_detective",
        label: "剧情侦探，提前分析谁会翻车",
        scoreEffects: { T: 5, C: 4, E: 2 },
      },
      {
        id: "screenshot_collector",
        label: "截图收藏家，专抓名场面",
        scoreEffects: { S: 5, W: 4 },
      },
      {
        id: "silent_feeler",
        label: "表面安静，内心弹幕比谁都密",
        scoreEffects: { I: 7, S: 2 },
      },
    ],
  },
  {
    id: "old_favorite_changes",
    text: "你喜欢很久的东西变味了，你会？",
    options: [
      {
        id: "keep_defending",
        label: "还会替它说两句，毕竟陪我很久",
        scoreEffects: { L: 7, S: 2 },
      },
      {
        id: "write_reason",
        label: "冷静分析它到底哪里变了",
        scoreEffects: { T: 6, C: 4 },
      },
      {
        id: "move_on_fast",
        label: "体面告别，立刻找新快乐",
        scoreEffects: { W: 7, C: 2 },
      },
      {
        id: "quiet_sad",
        label: "不骂不闹，但会偷偷难过",
        scoreEffects: { I: 6, L: 4 },
      },
    ],
  },
  {
    id: "party_role",
    text: "朋友聚会里，你通常是什么功能？",
    options: [
      {
        id: "energy_engine",
        label: "气氛发动机，冷场我会难受",
        scoreEffects: { E: 7, H: 3 },
      },
      {
        id: "order_keeper",
        label: "隐形组织者，时间地点流程都要稳",
        scoreEffects: { T: 5, C: 4, L: 2 },
      },
      {
        id: "story_watcher",
        label: "观察人类，回家能讲三段小剧场",
        scoreEffects: { S: 5, I: 3 },
      },
      {
        id: "where_fun_goes",
        label: "哪里热闹去哪，快乐优先",
        scoreEffects: { W: 6, E: 4 },
      },
    ],
  },
  {
    id: "late_night_brain",
    text: "深夜睡不着时，你脑子里最容易出现？",
    options: [
      {
        id: "emotional_replay",
        label: "今天那句话我是不是说重了",
        scoreEffects: { I: 5, S: 3, L: 2 },
      },
      {
        id: "life_strategy",
        label: "未来三个月人生路线图",
        scoreEffects: { T: 5, C: 4 },
      },
      {
        id: "random_excited",
        label: "突然想开一个新坑，明天就开始",
        scoreEffects: { H: 5, W: 5 },
      },
      {
        id: "send_message",
        label: "想找人说话，但又怕打扰",
        scoreEffects: { I: 4, E: 3, H: 2 },
      },
    ],
  },
  {
    id: "friend_asks_advice",
    text: "朋友找你咨询感情/工作/人生，你会？",
    options: [
      {
        id: "protect_friend",
        label: "先站朋友，谁让 TA 难受我先记一笔",
        scoreEffects: { H: 5, L: 5, E: 2 },
      },
      {
        id: "structure_issue",
        label: "先把问题拆清楚，再谈怎么办",
        scoreEffects: { T: 6, C: 5 },
      },
      {
        id: "dramatic_reading",
        label: "先判断这段关系有没有狗血剧情潜力",
        scoreEffects: { S: 5, W: 4 },
      },
      {
        id: "listen_quietly",
        label: "认真听完，最后给一句很准的",
        scoreEffects: { I: 5, C: 3, L: 2 },
      },
    ],
  },
  {
    id: "being_questioned",
    text: "别人说“你是不是想太多了”，你会？",
    options: [
      {
        id: "defend_loudly",
        label: "我这是敏锐，不是想太多",
        scoreEffects: { H: 5, E: 5, S: 2 },
      },
      {
        id: "show_logic",
        label: "把推理链路完整展示给 TA 看",
        scoreEffects: { T: 6, C: 4, E: 2 },
      },
      {
        id: "own_the_drama",
        label: "对，我就是会脑补，但我脑补得很精彩",
        scoreEffects: { S: 5, W: 4 },
      },
      {
        id: "quietly_correct",
        label: "不解释，反正最后你们会发现我说得对",
        scoreEffects: { I: 6, C: 3, L: 2 },
      },
    ],
  },
];
