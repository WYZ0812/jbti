/** JBTI 人格类型定义 — 社畜/躺平风 */

export interface PersonalityType {
  /** 英文代号 4-6 字母全大写 */
  code: string;
  /** 中文名称 */
  name: string;
  /** emoji */
  emoji: string;
  /** 一句话人设 */
  tagline: string;
  /** 详细特征 (3-4条) */
  traits: string[];
  /** 主题色 */
  color: string;
  /** 背景渐变 */
  bgGradient: string;
  /** 适合你的工作 */
  idealJob: string;
}

export const personalityTypes: PersonalityType[] = [
  {
    code: "SLACK",
    name: "摸鱼者",
    emoji: "🐟",
    tagline: "上班8小时，摸鱼7.5，剩下的0.5小时在计划明天怎么摸",
    traits: [
      "精通各大社交平台的隐身术，工位就是最好的掩体",
      "Alt+Tab 切换速度超过全国99%的用户",
      "能准确分辨领导的脚步声，误差不超过0.5米",
      "对「带薪拉屎」有深刻的理论研究和丰富的实践经验",
    ],
    color: "#4ECDC4",
    bgGradient: "linear-gradient(135deg, #4ECDC4 0%, #44D7B6 100%)",
    idealJob: "自由职业者（最好是不用干活的那种）",
  },
  {
    code: "OVTM",
    name: "加班狗",
    emoji: "🐶",
    tagline: "你见过凌晨四点的公司吗？我天天见",
    traits: [
      "生物钟已经完全适应了晚上11点的下班铃",
      "对加班餐的品质有独到见解，能评出附近50家外卖的前三名",
      "朋友圈深夜鸡汤高产户，实际只是想让人知道自己还在加班",
      "口头禅是「这个需求很简单」，说完就开始想辞职信怎么写",
    ],
    color: "#FF6B6B",
    bgGradient: "linear-gradient(135deg, #FF6B6B 0%, #FF4757 100%)",
    idealJob: "还是早点转行吧",
  },
  {
    code: "PIGEN",
    name: "鸽王",
    emoji: "🕊️",
    tagline: "下次一定，下次一定——这已经是第38次了",
    traits: [
      "放鸽子的理由库库存充足，从不重复，创意无限",
      "说「我出门了」的时候，实际还在被窝里刷手机",
      "擅长在最后一刻用「临时有事」取消一切安排",
      "手机里存着大量对不起表情包，使用频率远超其他表情",
    ],
    color: "#A29BFE",
    bgGradient: "linear-gradient(135deg, #A29BFE 0%, #7C6FF7 100%)",
    idealJob: "自由职业（没有人催你出门）",
  },
  {
    code: "SLEPY",
    name: "睡神",
    emoji: "😴",
    tagline: "能躺着绝不坐着，能睡着绝不醒着，床是我的本体",
    traits: [
      "一天24小时，有25小时都很困",
      "闹钟设置7个，每个间隔5分钟，最后全部按掉继续睡",
      "周末的午餐=下午4点的第一顿饭",
      "对各类枕头、眼罩、耳塞有深入研究，是睡眠装备党",
    ],
    color: "#6C5CE7",
    bgGradient: "linear-gradient(135deg, #6C5CE7 0%, #4834D4 100%)",
    idealJob: "床垫测评师 / 睡衣模特",
  },
  {
    code: "SOCIX",
    name: "社恐战士",
    emoji: "🙈",
    tagline: "电话响了——世界末日来了",
    traits: [
      "能发文字绝不发语音，能发表情绝不打字",
      "在电梯里祈祷每一层都不要有人进来",
      "外卖备注写得极其详尽，只为避免和骑手沟通",
      "心里有一万句话，说出口只剩「嗯嗯好的」",
    ],
    color: "#74B9FF",
    bgGradient: "linear-gradient(135deg, #74B9FF 0%, #4A90D9 100%)",
    idealJob: "远程办公 / 深山护林员",
  },
  {
    code: "NOMER",
    name: "吃货",
    emoji: "🍜",
    tagline: "没有什么是一顿火锅解决不了的，如果有，就两顿",
    traits: [
      "在吃上花的钱永远比在穿上花的多，且认为这是「刚需消费」",
      "手机相册80%是食物照片，另外20%是食物+自己",
      "能准确说出城市里每家好吃的店的地址，比导航还准",
      "心情不好？吃。心情好？庆祝一下，吃。",
    ],
    color: "#FDCB6E",
    bgGradient: "linear-gradient(135deg, #FDCB6E 0%, #F39C12 100%)",
    idealJob: "美食博主 / 大众点评终身VIP",
  },
  {
    code: "DRAMA",
    name: "戏精",
    emoji: "🎭",
    tagline: "奥斯卡欠我一座奖杯，金鸡百花一个都跑不了",
    traits: [
      "内心戏极其丰富，对方说一句「在吗」，脑子里已经演完一部80集连续剧",
      "一个人的时候自言自语，两个角色来回切换毫无违和感",
      "朋友圈配文反复斟酌半小时，只为找到一个最「不经意」的措辞",
      "洗澡的时候就是个人的大型演唱会现场",
    ],
    color: "#E056A0",
    bgGradient: "linear-gradient(135deg, #E056A0 0%, #BE2EDD 100%)",
    idealJob: "演员 / 脱口秀演员 / 短视频编剧",
  },
  {
    code: "DEBTR",
    name: "杠精",
    emoji: "🤓",
    tagline: "你说的都对——但我要杠一下",
    traits: [
      "每一句话听到耳朵里，都会自动触发「但是……」机制",
      "明明赞同对方，也要找一个刁钻的角度反驳一下",
      "深夜在微博和别人就一个无关紧要的问题论战300条",
      "口头禅是「恕我直言」「不是我说」「客观来讲」",
    ],
    color: "#636E72",
    bgGradient: "linear-gradient(135deg, #636E72 0%, #2D3436 100%)",
    idealJob: "律师 / 产品经理 / 弹幕评论员",
  },
  {
    code: "POORR",
    name: "贫穷者",
    emoji: "💸",
    tagline: "钱包比脸还干净，但精神世界比谁都富有",
    traits: [
      "淘宝购物车常年99+，但只买9.9包邮的东西",
      "对各大平台的优惠券、满减规则了如指掌，是省钱达人",
      "发工资当天的朋友圈最活跃，三天后开始转发「穷也是一种态度」",
      "坚信「钱不是省出来的是赚出来的」——然后既没省出来也没赚出来",
    ],
    color: "#E17055",
    bgGradient: "linear-gradient(135deg, #E17055 0%, #D63031 100%)",
    idealJob: "薅羊毛专业户 / 省钱博主",
  },
  {
    code: "DELAY",
    name: "拖延大师",
    emoji: "⏰",
    tagline: "Deadline 是第一生产力，没有 deadline 就没有生产力",
    traits: [
      "接到任务的第一反应是「还有时间，先休息一下」",
      "可以在1小时内完成一周的工作——前提是 deadline 在59分钟后",
      "拖延的时候效率极高：房间收拾了，游戏段位升了，就是不干正事",
      "每次都发誓「下次一定早点开始」，然后继续循环",
    ],
    color: "#FAB1A0",
    bgGradient: "linear-gradient(135deg, #FAB1A0 0%, #E17055 100%)",
    idealJob: "自由职业（但可能什么也做不出来）",
  },
  {
    code: "BUDHA",
    name: "佛系青年",
    emoji: "🧘",
    tagline: "都行，可以，没关系；算了，随便，无所谓",
    traits: [
      "人生的三大哲学问题：中午吃什么？随便。周末去哪？都行。你来吗？算了吧。",
      "面对升职加薪内心毫无波澜，觉得随缘就好",
      "别人内卷你旁观，内心默念「阿弥陀佛，一切随缘」",
      "朋友圈一年发两次：一次过年，一次被朋友逼的",
    ],
    color: "#55A3AB",
    bgGradient: "linear-gradient(135deg, #55A3AB 0%, #3D7D85 100%)",
    idealJob: "寺庙义工 / 茶馆老板",
  },
  {
    code: "QUITR",
    name: "退堂鼓手",
    emoji: "🥁",
    tagline: "三分钟热血是我的超能力，放弃是我的舒适区",
    traits: [
      "健身房办卡时热血沸腾，去过两次后再也没出现",
      "买了全套画具决定学画画，画完一个苹果后器材全部吃灰",
      "每年1月1日的年度计划永远只停留在1月1日",
      "口头禅是「算了」「要不还是」「其实也还行」",
    ],
    color: "#B2BEC3",
    bgGradient: "linear-gradient(135deg, #B2BEC3 0%, #7F8C8D 100%)",
    idealJob: "职业体验师（每种工作做三天）",
  },
  {
    code: "BATRE",
    name: "充电宝",
    emoji: "🔋",
    tagline: "社交5分钟，需要独处2小时来充电，续航能力约等于零",
    traits: [
      "参加完聚会后需要静养三天才能恢复元气",
      "电量从100%到1%只需要一次超过3人的聚餐",
      "周末的完美计划是：不！出！门！",
      "被人说「你好内向」，你只是累了而已",
    ],
    color: "#00CEC9",
    bgGradient: "linear-gradient(135deg, #00CEC9 0%, #00B894 100%)",
    idealJob: "图书管理员 / 森林小屋守护者",
  },
  {
    code: "LEMON",
    name: "柠檬精",
    emoji: "🍋",
    tagline: "别人的生活总是香的，我的生活总是酸的",
    traits: [
      "刷朋友圈的时候——「这个人又去旅游了酸了酸了」",
      "嘴上说着「不羡慕」，心里已经在写1000字小作文了",
      "看到别人秀恩爱的第一反应是截图发给闺蜜/兄弟吐槽",
      "虽然很酸，但依然是朋友圈点赞最积极的那个",
    ],
    color: "#FFEAA7",
    bgGradient: "linear-gradient(135deg, #FFEAA7 0%, #FDCB6E 100%)",
    idealJob: "弹幕吐槽员 / 社交媒体评论家",
  },
];

/** 根据代号获取人格类型 */
export function getTypeByCode(code: string): PersonalityType | undefined {
  return personalityTypes.find((t) => t.code === code);
}
