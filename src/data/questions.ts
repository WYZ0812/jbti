/** JBTI 测试题目 — 31题，每题3选项 */

import type { PersonalityType } from "./types";

export interface QuestionOption {
  label: string; // A / B / C
  text: string;
  /** 选此选项 → 对应人格 +1 分 */
  typeCode: PersonalityType["code"];
}

export interface Question {
  id: number;
  text: string;
  options: QuestionOption[];
}

export const questions: Question[] = [
  {
    id: 1,
    text: "周一早上的闹钟响了，你的第一反应是？",
    options: [
      { label: "A", text: "按掉继续睡，迟到？那也要睡够了再说", typeCode: "SLEPY" },
      { label: "B", text: "挣扎起床，然后在地铁上继续睡", typeCode: "BATRE" },
      { label: "C", text: "早就醒了，已经在想这周要加几天班", typeCode: "OVTM" },
    ],
  },
  {
    id: 2,
    text: "朋友约你周末出去玩，你怎么回？",
    options: [
      { label: "A", text: "好啊好啊！然后当天临时说「抱歉突然有事」", typeCode: "PIGEN" },
      { label: "B", text: "心里不想去但还是回复「好呀好呀」", typeCode: "SOCIX" },
      { label: "C", text: "「都行，看你们安排，我都可」", typeCode: "BUDHA" },
    ],
  },
  {
    id: 3,
    text: "正在认真工作的时候，你通常在做什么？",
    options: [
      { label: "A", text: "刷微博/小红书/抖音，这是「灵感采集」", typeCode: "SLACK" },
      { label: "B", text: "在脑子里排练下班后的精彩人生", typeCode: "DRAMA" },
      { label: "C", text: "确实在工作——因为再不干活 deadline 就过了", typeCode: "DELAY" },
    ],
  },
  {
    id: 4,
    text: "看到同事被领导表扬了，你会？",
    options: [
      { label: "A", text: "「哇他也太厉害了吧——不过我觉得他那方案其实一般」", typeCode: "LEMON" },
      { label: "B", text: "内心毫无波动，反正跟我没关系", typeCode: "BUDHA" },
      { label: "C", text: "「恕我直言，这有什么好表扬的？」", typeCode: "DEBTR" },
    ],
  },
  {
    id: 5,
    text: "午饭时间到了，你选择？",
    options: [
      { label: "A", text: "打开外卖APP刷半小时，最后点了上周吃过的那家", typeCode: "NOMER" },
      { label: "B", text: "泡面解决一切，省钱最重要", typeCode: "POORR" },
      { label: "C", text: "还在加班中，让同事帮忙带，有得吃就行", typeCode: "OVTM" },
    ],
  },
  {
    id: 6,
    text: "收到一条微信消息，你的反应是？",
    options: [
      { label: "A", text: "看到但不回，假装自己没看到，等想起来再说", typeCode: "PIGEN" },
      { label: "B", text: "看到是语音消息，直接崩溃，转文字后慢慢回复", typeCode: "SOCIX" },
      { label: "C", text: "秒回——因为正好在摸鱼刷手机", typeCode: "SLACK" },
    ],
  },
  {
    id: 7,
    text: "下班前5分钟，领导走过来说「有个急事……」，你？",
    options: [
      { label: "A", text: "脸上笑容凝固，心里已经开始问候全世界", typeCode: "OVTM" },
      { label: "B", text: "「好的没问题」——其实已经在想怎么偷偷溜走", typeCode: "SLACK" },
      { label: "C", text: "认命地打开电脑，心想「果然如此」", typeCode: "DELAY" },
    ],
  },
  {
    id: 8,
    text: "你办了一张健身卡，结果是？",
    options: [
      { label: "A", text: "去了两次，拍了几张自拍，从此卡在钱包里吃灰", typeCode: "QUITR" },
      { label: "B", text: "健身？不存在的，我办了卡就当我已经健身了", typeCode: "SLEPY" },
      { label: "C", text: "去主要是为了洗澡和吹空调，顺便看看别人练", typeCode: "POORR" },
    ],
  },
  {
    id: 9,
    text: "在电梯里遇到了不太熟的同事，你会？",
    options: [
      { label: "A", text: "疯狂刷手机，假装在看很重要的消息", typeCode: "SOCIX" },
      { label: "B", text: "尬聊天气和工作，内心祈祷电梯再快一点", typeCode: "BATRE" },
      { label: "C", text: "内心已经开始给这场电梯偶遇写剧本了", typeCode: "DRAMA" },
    ],
  },
  {
    id: 10,
    text: "朋友圈里有人发「这个月又花了3万，心疼」，你？",
    options: [
      { label: "A", text: "默默截图发给朋友：「看看这是什么凡尔赛」", typeCode: "LEMON" },
      { label: "B", text: "看看自己的余额，流下了贫穷的泪水", typeCode: "POORR" },
      { label: "C", text: "微微一笑划过，我佛慈悲，众生皆苦", typeCode: "BUDHA" },
    ],
  },
  {
    id: 11,
    text: "老板说「这个方案还需要再优化一下」，你的理解是？",
    options: [
      { label: "A", text: "「又要重做了」——打开文档，然后开始摸鱼", typeCode: "SLACK" },
      { label: "B", text: "老板不懂我，这个方案明明已经很完美了（在心里杠）", typeCode: "DEBTR" },
      { label: "C", text: "行吧，反正离 deadline 还有时间……对吧？", typeCode: "DELAY" },
    ],
  },
  {
    id: 12,
    text: "你的手机相册里最多的是什么？",
    options: [
      { label: "A", text: "食物照片，每顿都要拍，不然这顿饭白吃了", typeCode: "NOMER" },
      { label: "B", text: "各种表情包和沙雕截图，数量远超正常照片", typeCode: "DRAMA" },
      { label: "C", text: "自拍很少，大部分是猫猫狗狗和风景", typeCode: "BATRE" },
    ],
  },
  {
    id: 13,
    text: "朋友跟你借了500块钱，一周还没还，你会？",
    options: [
      { label: "A", text: "心里很在意但打死也不开口要，只在心里默默记下", typeCode: "SOCIX" },
      { label: "B", text: "500块？我现在自己都只剩200了……", typeCode: "POORR" },
      { label: "C", text: "没事没事，下次一定提醒——然后永远不提", typeCode: "PIGEN" },
    ],
  },
  {
    id: 14,
    text: "周六下午三点，你一般在做什么？",
    options: [
      { label: "A", text: "还在睡觉，或者刚从床上挪到沙发上", typeCode: "SLEPY" },
      { label: "B", text: "在外面大快朵颐，周末就是用来觅食的", typeCode: "NOMER" },
      { label: "C", text: "雄心壮志地开始了一件新爱好——但可能明天就放弃了", typeCode: "QUITR" },
    ],
  },
  {
    id: 15,
    text: "有人说「我觉得MBTI挺准的」，你心里想？",
    options: [
      { label: "A", text: "「呵呵，那你知道还有JBTI吗？那个更准」", typeCode: "DEBTR" },
      { label: "B", text: "「随便吧，什么人格不人格的，我就是个废物」", typeCode: "LEMON" },
      { label: "C", text: "「都行吧，反正都是娱乐，开心就好」", typeCode: "BUDHA" },
    ],
  },
  {
    id: 16,
    text: "凌晨12点了，你在做什么？",
    options: [
      { label: "A", text: "还在公司，键盘敲得比白天还响", typeCode: "OVTM" },
      { label: "B", text: "躺在床上刷手机，明明很困就是不肯睡", typeCode: "SLEPY" },
      { label: "C", text: "文思如泉涌，灵感大爆发——明天早上肯定起不来", typeCode: "DRAMA" },
    ],
  },
  {
    id: 17,
    text: "年度计划你写了10条，到了年底？",
    options: [
      { label: "A", text: "一条都没完成，甚至忘了自己写过年度计划", typeCode: "QUITR" },
      { label: "B", text: "完成了0.5条，但已经很满意了——随缘嘛", typeCode: "BUDHA" },
      { label: "C", text: "计划赶不上变化，我明年一定再写一份更好的", typeCode: "DELAY" },
    ],
  },
  {
    id: 18,
    text: "有人在群里说了一句「有谁懂这个吗？」，你会？",
    options: [
      { label: "A", text: "明明很懂但装死，等人回答了再默默点头", typeCode: "SOCIX" },
      { label: "B", text: "火速出来回答，展现自己的专业素养（虽然也不太懂）", typeCode: "DEBTR" },
      { label: "C", text: "扫一眼，跟自己无关就继续摸鱼", typeCode: "SLACK" },
    ],
  },
  {
    id: 19,
    text: "你的购物车里现在有什么？",
    options: [
      { label: "A", text: "一大堆好吃的，零食、速食、各种饮料", typeCode: "NOMER" },
      { label: "B", text: "加了一堆东西但一件都没下单，在等满减和优惠券", typeCode: "POORR" },
      { label: "C", text: "全是健身器材和学习资料——已经放了半年了", typeCode: "QUITR" },
    ],
  },
  {
    id: 20,
    text: "朋友分手了找你吐槽，你的反应是？",
    options: [
      { label: "A", text: "「我早就觉得那个人不靠谱了，你看我说什么来着」", typeCode: "DEBTR" },
      { label: "B", text: "表面安慰，心里在想「至少你还有恋爱可以分」", typeCode: "LEMON" },
      { label: "C", text: "二话不说带朋友去吃火锅，吃是最好的疗愈", typeCode: "NOMER" },
    ],
  },
  {
    id: 21,
    text: "你参加了一个线上会议，你的状态是？",
    options: [
      { label: "A", text: "摄像头关着，话筒关着，人在干别的——但随时能接上一句", typeCode: "SLACK" },
      { label: "B", text: "一边开会一边在群里疯狂吐槽会议内容", typeCode: "DRAMA" },
      { label: "C", text: "全程静音，只在最后说一句「好的收到谢谢」", typeCode: "SOCIX" },
    ],
  },
  {
    id: 22,
    text: "你对「内卷」这个词怎么看？",
    options: [
      { label: "A", text: "「你们卷吧，我躺平了，反正也卷不过」", typeCode: "BUDHA" },
      { label: "B", text: "「嘴上说着不卷，身体却在凌晨三点的办公室」", typeCode: "OVTM" },
      { label: "C", text: "「每次想卷的时候，身体自动进入省电模式」", typeCode: "BATRE" },
    ],
  },
  {
    id: 23,
    text: "有人跟你说「我昨天梦到你了」，你回？",
    options: [
      { label: "A", text: "「啊？我在你梦里干了什么？」（已经开始脑补剧情了）", typeCode: "DRAMA" },
      { label: "B", text: "「那你一定睡得很好，毕竟我都是躺着的」", typeCode: "SLEPY" },
      { label: "C", text: "「下次梦到我请先预约」", typeCode: "DEBTR" },
    ],
  },
  {
    id: 24,
    text: "明天就是项目截止日期了，你现在？",
    options: [
      { label: "A", text: "刚打开文档，喝了一口咖啡，准备迎接一个不眠之夜", typeCode: "DELAY" },
      { label: "B", text: "已经加班三天了，眼睛红得像兔子，但这很正常", typeCode: "OVTM" },
      { label: "C", text: "项目？什么项目？哦对……那个啊，算了不想了", typeCode: "QUITR" },
    ],
  },
  {
    id: 25,
    text: "你的收入分配方式接近哪种？",
    options: [
      { label: "A", text: "30%吃饭，30%房租，30%其他，10%也不知道花哪了", typeCode: "NOMER" },
      { label: "B", text: "50%吃饭，50%还花呗——没错我是个月光族", typeCode: "POORR" },
      { label: "C", text: "发了工资先存一半，然后月底发现存的又取出来了", typeCode: "LEMON" },
    ],
  },
  {
    id: 26,
    text: "朋友约你明天早上8点一起去晨跑，你？",
    options: [
      { label: "A", text: "「好啊！」——然后第二天手机关机继续睡", typeCode: "PIGEN" },
      { label: "B", text: "「8点？早上？这两个词能放在一起吗？」", typeCode: "SLEPY" },
      { label: "C", text: "真的很想去但是起不来，对自己感到深深的失望", typeCode: "QUITR" },
    ],
  },
  {
    id: 27,
    text: "在公共场合你突然发现自己裤子拉链没拉，你？",
    options: [
      { label: "A", text: "瞬间面红耳赤，快速拉上后假装什么都没发生", typeCode: "SOCIX" },
      { label: "B", text: "内心已经尴尬到爆炸，但脸上继续保持淡定微笑", typeCode: "DRAMA" },
      { label: "C", text: "淡定拉上，心想「反正也没人注意到……吧？」", typeCode: "BUDHA" },
    ],
  },
  {
    id: 28,
    text: "公司要团建了，你的第一反应是？",
    options: [
      { label: "A", text: "「能不能不去？」心中开始编造各种请假理由", typeCode: "PIGEN" },
      { label: "B", text: "已经在查目的地附近有什么好吃的了", typeCode: "NOMER" },
      { label: "C", text: "一想到要和同事待一整天，电量瞬间掉到1%", typeCode: "BATRE" },
    ],
  },
  {
    id: 29,
    text: "你看到一只蟑螂，你会？",
    options: [
      { label: "A", text: "冷静地拿起拖鞋——然后发现蟑螂飞起来了直接崩溃", typeCode: "DRAMA" },
      { label: "B", text: "「对不起打扰了，这个家送给你」转头就走", typeCode: "SLEPY" },
      { label: "C", text: "尖叫着跳到沙发上，然后发朋友圈求助", typeCode: "SOCIX" },
    ],
  },
  {
    id: 30,
    text: "你对自己目前的人生状态怎么看？",
    options: [
      { label: "A", text: "「还行吧，凑合过呗，还能死咋的」", typeCode: "BUDHA" },
      { label: "B", text: "「别人的人生是高速路，我的是乡村土路还带坑」", typeCode: "LEMON" },
      { label: "C", text: "「每天都在内耗，感觉身体被掏空」", typeCode: "BATRE" },
    ],
  },
  {
    id: 31,
    text: "做完这31道题，你现在什么感觉？",
    options: [
      { label: "A", text: "「这就完了？我还以为后面有大反转呢」", typeCode: "DEBTR" },
      { label: "B", text: "「好了我要去看看自己是什么人格了，好紧张（并没有）」", typeCode: "DRAMA" },
      { label: "C", text: "「不管什么结果，先截图发个朋友圈再说」", typeCode: "SLACK" },
    ],
  },
];
