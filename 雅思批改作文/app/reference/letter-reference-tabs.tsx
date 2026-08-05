"use client";

import { useState } from "react";

type LetterTemplate = {
  id: string;
  name: string;
  includes: string;
  tone: string;
  prompt: string;
  goal: string;
  targetWords: string;
  copyFromQuestion: string[];
  connectors: string[];
  paragraphs: Array<{
    name: string;
    target: string;
    function: string;
    template: string;
  }>;
  variants: Array<{
    name: string;
    trigger: string;
    replacements: string[];
  }>;
  checks: string[];
};

const tones = [
  {
    name: "正式信",
    recipient: "陌生人、商店、酒店、机构",
    greeting: "Dear Sir or Madam,",
    closing: "Yours faithfully,",
    style: "礼貌、明确；不用缩写和聊天表达。",
  },
  {
    name: "半正式信",
    recipient: "经理、老师、房东等认识但不亲近的人",
    greeting: "Dear Mr/Ms [Surname],",
    closing: "Yours sincerely,",
    style: "保持礼貌，可以比正式信稍自然。",
  },
  {
    name: "非正式信",
    recipient: "朋友、家人或很熟悉的同事",
    greeting: "Dear [First name],",
    closing: "Best wishes,",
    style: "自然友好，可以使用 I’m、can’t 等缩写。",
  },
];

const templates: LetterTemplate[] = [
  {
    id: "complaint",
    name: "投诉 / 解决问题",
    includes: "产品故障 · 服务不佳 · 住宿或设施问题",
    tone: "通常为正式信",
    prompt: "complain · unhappy · problem · what you want the company to do",
    goal: "把问题、影响和希望对方采取的行动说清楚，语气礼貌但不能含糊。",
    targetWords: "完成填空后约 165—185 词",
    copyFromQuestion: [
      "找出投诉对象：[产品 / 服务 / 地点]，再补充时间和地点。",
      "把前两个任务点整理为 [具体问题] 和 [造成的影响]。",
      "把最后一个任务点改成明确行动：[维修 / 更换 / 退款 / 调查]。",
    ],
    connectors: ["Unfortunately", "In addition", "As a result", "I would like you to"],
    paragraphs: [
      {
        name: "称呼",
        target: "固定格式",
        function: "不知道姓名时使用正式称呼",
        template: "Dear Sir or Madam,",
      },
      {
        name: "第 1 段｜写信目的",
        target: "20—30 词",
        function: "投诉对象 + 时间地点",
        template:
          "I am writing to complain about [产品或服务] that I [购买或使用] on [日期] at [地点]. Unfortunately, it has not met the standard I expected.",
      },
      {
        name: "第 2 段｜描述问题",
        target: "35—45 词",
        function: "问题一 + 问题二 + 已经尝试过什么",
        template:
          "The main problem is that [问题 1]. In addition, [问题 2]. These problems started [何时开始], and they have continued even though I [你已经尝试的处理办法].",
      },
      {
        name: "第 3 段｜说明影响",
        target: "35—45 词",
        function: "直接影响 + 具体例子 + 后果",
        template:
          "Because of these problems, I am unable to [受到影响的工作或生活安排]. For example, [具体场景]. As a result, [进一步后果], which has caused me considerable inconvenience.",
      },
      {
        name: "第 4 段｜提出要求",
        target: "35—45 词",
        function: "首选方案 + 备选方案 + 时间",
        template:
          "I would like you to [维修 / 更换 / 退款 / 调查]. If this is not possible, please [备选解决办法]. I would be grateful if this could be arranged by [时间].",
      },
      {
        name: "结尾与落款",
        target: "15—20 词",
        function: "礼貌等待处理结果",
        template:
          "I look forward to receiving your reply and having this matter resolved soon.\n\nYours faithfully,\n[Name]",
      },
    ],
    variants: [
      {
        name: "写给认识的房东或经理",
        trigger: "题目给出对方姓名",
        replacements: [
          "称呼改为：Dear Mr/Ms [Surname],",
          "落款改为：Yours sincerely,",
        ],
      },
      {
        name: "题目只要求处理问题",
        trigger: "没有出现 complain，但要求描述故障和解决办法",
        replacements: [
          "开头可以改为：I am writing about a problem with [设备 / 设施].",
          "仍然保留“问题 → 影响 → 希望采取的行动”三个主体段。",
        ],
      },
    ],
    checks: [
      "不要只写东西 bad 或 broken；至少说明两个具体表现。",
      "不要使用命令或威胁，使用 I would like you to... 更合适。",
      "解决办法必须能执行，并与前面的问题直接对应。",
    ],
  },
  {
    id: "request",
    name: "请求 / 咨询",
    includes: "询问信息 · 请求帮助 · 预订或确认安排",
    tone: "正式或半正式",
    prompt: "ask for information · request help · find out · give details",
    goal: "说明为什么需要信息，并把三个问题问得具体、礼貌、容易回答。",
    targetWords: "完成填空后约 165—185 词",
    copyFromQuestion: [
      "找出咨询对象：[课程 / 住宿 / 活动 / 服务]。",
      "把三个任务点各改写成一个具体问题，不要只写 I want more information。",
      "补充你为什么需要这些信息，以及希望何时得到回复。",
    ],
    connectors: ["Firstly", "Regarding", "I would also like to know", "Finally"],
    paragraphs: [
      {
        name: "称呼",
        target: "固定格式",
        function: "写给陌生机构",
        template: "Dear Sir or Madam,",
      },
      {
        name: "第 1 段｜写信目的",
        target: "20—30 词",
        function: "咨询对象 + 你的计划",
        template:
          "I am writing to ask for some information about [课程 / 服务 / 活动], as I am planning to [你的计划] in [时间].",
      },
      {
        name: "第 2 段｜第一个问题",
        target: "35—45 词",
        function: "直接询问 + 具体细节 + 原因",
        template:
          "Firstly, I would like to know [问题 1]. In particular, could you please tell me [更具体的问题]? This is important because [你需要这项信息的原因].",
      },
      {
        name: "第 3 段｜第二个问题",
        target: "35—45 词",
        function: "转换方面 + 询问两个细节",
        template:
          "Regarding [问题 2 的方面], I would also like to know [具体问题]. Please let me know whether [另一个相关细节], as this will help me [作出的安排或决定].",
      },
      {
        name: "第 4 段｜第三个问题",
        target: "35—45 词",
        function: "最后询问 + 需要的材料或回复时间",
        template:
          "Finally, could you please confirm [问题 3]? I would be grateful if you could [发送 / 提供 / 确认] the information by [时间], so that I can [下一步行动].",
      },
      {
        name: "结尾与落款",
        target: "10—15 词",
        function: "感谢并等待回复",
        template:
          "Thank you for your assistance. I look forward to your reply.\n\nYours faithfully,\n[Name]",
      },
    ],
    variants: [
      {
        name: "只请求帮助",
        trigger: "题目不是咨询，而是请经理、老师或邻居帮忙",
        replacements: [
          "开头改为：I am writing to ask if you could help me with [事情].",
          "三个主体段写“背景 → 为什么需要帮助 → 希望对方具体做什么”。",
        ],
      },
      {
        name: "写给朋友",
        trigger: "收信人是熟悉的朋友",
        replacements: [
          "把 could you please 改成 can you，并使用自然语气。",
          "落款使用 Best wishes,，不要使用 Yours faithfully,。",
        ],
      },
    ],
    checks: [
      "题目出现 details、questions 或 information 时，通常不能只问一件事。",
      "避免 Tell me...、Send me... 这样的直接命令。",
      "每个问句后补一个原因，内容会更完整，也更容易达到字数。",
    ],
  },
  {
    id: "application",
    name: "申请 / 许可",
    includes: "工作调动 · 请假 · 参加课程 · 申请职位",
    tone: "通常为半正式或正式信",
    prompt: "ask for permission · apply for · work away · attend a course",
    goal: "清楚说明申请内容、申请理由和可行安排，再礼貌请求批准或协助。",
    targetWords: "完成填空后约 165—190 词",
    copyFromQuestion: [
      "把申请内容写完整：[做什么]、[在哪里]、[从何时到何时]。",
      "准备两个好处：一个对自己，一个对工作、公司或课程。",
      "把题目中的安排要点改成实际方案，再明确需要对方提供什么帮助。",
    ],
    connectors: ["because", "In addition", "While I am away", "I would be grateful if"],
    paragraphs: [
      {
        name: "称呼",
        target: "固定格式",
        function: "写给认识的经理或负责人",
        template: "Dear Mr/Ms [Surname],",
      },
      {
        name: "第 1 段｜写信目的",
        target: "20—30 词",
        function: "申请内容 + 时间",
        template:
          "I am writing to ask whether it would be possible for me to [申请的事情] from [开始时间] to [结束时间].",
      },
      {
        name: "第 2 段｜解释理由",
        target: "35—45 词",
        function: "个人好处 + 对工作或机构的好处",
        template:
          "I would like to do this because [主要理由]. It would give me an opportunity to [个人收获]. In addition, this experience would help me [对工作、公司或课程的好处].",
      },
      {
        name: "第 3 段｜说明安排",
        target: "40—50 词",
        function: "主要任务如何完成 + 谁来协助 + 提前准备",
        template:
          "While I am away, [主要工作或责任] could be [处理办法]. I could also ask [同事或相关人员] to [具体任务]. Before I leave, I would [培训 / 准备说明 / 完成交接], so there should be little disruption.",
      },
      {
        name: "第 4 段｜请求帮助",
        target: "30—40 词",
        function: "批准 + 需要对方采取的行动",
        template:
          "I would be grateful if you could [批准 / 讨论] this request and help me [办理文件或安排]. Please let me know if you need any further information from me.",
      },
      {
        name: "结尾与落款",
        target: "10—15 词",
        function: "感谢对方考虑",
        template:
          "Thank you for considering my request.\n\nYours sincerely,\n[Name]",
      },
    ],
    variants: [
      {
        name: "写给不认识的招聘人员",
        trigger: "申请工作、课程或志愿者职位",
        replacements: [
          "开头改为：I am writing to apply for [职位 / 课程] advertised [地点或日期].",
          "第二段写相关经验和能力，第三段写可工作时间或其他条件。",
          "不知道姓名时使用 Dear Sir or Madam, / Yours faithfully,。",
        ],
      },
    ],
    checks: [
      "申请内容必须包含具体时间、地点或持续时间。",
      "不要只写对自己有帮助，也要说明对工作或机构的好处。",
      "主动提供可行安排，会让请求更完整、更有说服力。",
    ],
  },
  {
    id: "apology",
    name: "道歉 / 解释",
    includes: "缺席 · 延误 · 损坏物品 · 计划改变",
    tone: "半正式或非正式",
    prompt: "apologise · explain why · unable to attend · change of plan",
    goal: "先真诚道歉，再简短解释原因，最后提出具体补救办法。",
    targetWords: "完成填空后约 160—180 词",
    copyFromQuestion: [
      "找出需要道歉的事情：[缺席 / 迟到 / 失约 / 损坏]。",
      "准备一个可信但不冗长的原因，并说明给对方造成的影响。",
      "把最后一个任务点写成具体补救：[重新安排 / 赔偿 / 提供帮助]。",
    ],
    connectors: ["Unfortunately", "because", "As a result", "To make up for this"],
    paragraphs: [
      {
        name: "称呼",
        target: "根据关系选择",
        function: "示例为写给认识的人",
        template: "Dear [Name],",
      },
      {
        name: "第 1 段｜直接道歉",
        target: "20—30 词",
        function: "道歉对象 + 表明态度",
        template:
          "I am writing to apologise for [需要道歉的事情]. I am very sorry that I was unable to [原本答应做的事情].",
      },
      {
        name: "第 2 段｜解释原因",
        target: "35—45 词",
        function: "发生了什么 + 为什么无法避免",
        template:
          "Unfortunately, [发生的情况]. This happened because [具体原因]. I tried to [你尝试的处理办法], but [为什么仍然没有解决], so I could not [原计划].",
      },
      {
        name: "第 3 段｜承认影响",
        target: "30—40 词",
        function: "对方遇到的不便 + 你的感受",
        template:
          "I understand that this may have caused you [不便、失望或额外工作]. As a result, you had to [对方被迫做的事情], and I feel very sorry about this.",
      },
      {
        name: "第 4 段｜提出补救",
        target: "35—45 词",
        function: "实际补救 + 新安排 + 防止再次发生",
        template:
          "To make up for this, I would like to [补救办法]. We could [新的时间或安排] if this is convenient for you. I will also [防止再次发生的行动].",
      },
      {
        name: "结尾与落款",
        target: "10—15 词",
        function: "再次道歉",
        template:
          "Please accept my sincere apologies. I hope you can understand.\n\nBest wishes,\n[Name]",
      },
    ],
    variants: [
      {
        name: "写给经理或老师",
        trigger: "关系是半正式",
        replacements: [
          "称呼使用 Dear Mr/Ms [Surname],。",
          "落款使用 Yours sincerely,。",
          "避免过于随意的表达，例如 Sorry about that。",
        ],
      },
      {
        name: "只要求解释情况",
        trigger: "题目没有明确要求 apologise",
        replacements: [
          "开头改为：I am writing to explain why [事情发生或计划改变].",
          "如果事情确实给对方造成不便，仍可在结尾礼貌道歉。",
        ],
      },
    ],
    checks: [
      "原因写清楚即可，不要整封信都在为自己找借口。",
      "必须承认给对方造成的影响，才能体现合适的语气。",
      "补救办法应包含具体行动、时间或替代方案。",
    ],
  },
  {
    id: "suggestion-feedback",
    name: "建议 / 反馈",
    includes: "改进设施 · 课程反馈 · 活动或服务评价",
    tone: "通常为正式或半正式信",
    prompt: "suggest · improve · feedback · what you enjoyed · recommend",
    goal: "先交代背景或优点，再说明需要改善的地方，最后给出对应的具体建议。",
    targetWords: "完成填空后约 165—190 词",
    copyFromQuestion: [
      "找出反馈对象：[课程 / 酒店 / 接待区 / 活动 / 服务]。",
      "把题目中的优点或现状写成具体细节，不要只用 good、nice。",
      "准备两个一一对应的建议，并说明改进后会带来什么好处。",
    ],
    connectors: ["Firstly", "However", "In addition", "This would help"],
    paragraphs: [
      {
        name: "称呼",
        target: "根据是否知道姓名选择",
        function: "示例为写给陌生机构",
        template: "Dear Sir or Madam,",
      },
      {
        name: "第 1 段｜写信目的",
        target: "20—30 词",
        function: "反馈对象 + 总体态度",
        template:
          "I am writing to provide feedback on [课程 / 活动 / 服务] that I recently [参加或使用] and to suggest several possible improvements.",
      },
      {
        name: "第 2 段｜优点或现状",
        target: "35—45 词",
        function: "具体优点 + 细节 + 积极影响",
        template:
          "Firstly, I was pleased with [优点 1]. In particular, [具体细节]. I also appreciated [优点 2], because this helped [你或其他人] to [积极结果].",
      },
      {
        name: "第 3 段｜需要改善之处",
        target: "35—45 词",
        function: "问题一 + 问题二 + 为什么重要",
        template:
          "However, there were some problems with [需要改善的方面]. For example, [问题 1]. In addition, [问题 2]. This is important because [对访客、学生、员工或顾客的影响].",
      },
      {
        name: "第 4 段｜提出建议",
        target: "35—45 词",
        function: "两个措施 + 预期好处",
        template:
          "I suggest that [负责人或机构] should [建议 1]. It would also be helpful to [建议 2]. These changes would [预期好处] and make [课程 / 地点 / 服务] more suitable for [相关人群].",
      },
      {
        name: "结尾与落款",
        target: "10—15 词",
        function: "希望对方考虑",
        template:
          "I hope you will consider these suggestions.\n\nYours faithfully,\n[Name]",
      },
    ],
    variants: [
      {
        name: "题目只要求建议",
        trigger: "没有要求评价优点",
        replacements: [
          "第二段改为描述现状和为什么需要改善。",
          "第三、四段分别提出建议 1 和建议 2，并各自解释好处。",
        ],
      },
      {
        name: "题目只要求积极反馈",
        trigger: "感谢、表扬或描述喜欢的内容",
        replacements: [
          "第三段不要强行投诉，可以写这段经历后来怎样帮助了你。",
          "只有题目要求时才加入改进建议。",
        ],
      },
    ],
    checks: [
      "每个问题后都要有对应建议，不能只列问题。",
      "建议至少写清谁来做、做什么，以及能带来什么结果。",
      "如果题目要求反馈优点，必须先写具体优点再转入建议。",
    ],
  },
  {
    id: "invitation",
    name: "邀请 / 安排",
    includes: "邀请参加活动 · 朋友来访 · 确认旅行安排",
    tone: "通常为非正式信",
    prompt: "invite · visit · event · stay · arrangements",
    goal: "把活动的时间地点、具体安排和希望对方参加的原因写完整。",
    targetWords: "完成填空后约 160—180 词",
    copyFromQuestion: [
      "找出活动或来访的基本信息：[什么活动]、[日期]、[地点]。",
      "准备两个实际安排，例如交通、住宿、活动内容或需要携带的物品。",
      "说明为什么特别希望对方参加，并请求对方确认。",
    ],
    connectors: ["First of all", "During the event", "Afterwards", "I really hope"],
    paragraphs: [
      {
        name: "称呼",
        target: "固定格式",
        function: "写给熟悉的朋友",
        template: "Dear [First name],",
      },
      {
        name: "第 1 段｜发出邀请",
        target: "20—30 词",
        function: "活动 + 日期 + 表达期待",
        template:
          "I am writing to invite you to [活动] on [日期]. It has been a long time since we met, so it would be great to see you there.",
      },
      {
        name: "第 2 段｜时间地点",
        target: "35—45 词",
        function: "开始时间 + 地点 + 到达方式",
        template:
          "The event will begin at [时间] and will be held at [地点]. You can get there by [交通方式]. If you arrive at [地点], I can [接送或带路的安排].",
      },
      {
        name: "第 3 段｜具体安排",
        target: "35—45 词",
        function: "活动内容 + 参加者 + 住宿或物品",
        template:
          "During the event, we plan to [活动 1] and [活动 2]. [参加者] will also be there. Afterwards, you can [住宿或后续安排], so you will not need to worry about [实际问题].",
      },
      {
        name: "第 4 段｜请求确认",
        target: "30—40 词",
        function: "为什么希望参加 + 回复时间",
        template:
          "I really hope you can come because [特别希望对方参加的原因]. Please let me know by [时间] whether you are available, and tell me if you need any help with [安排].",
      },
      {
        name: "结尾与落款",
        target: "10—15 词",
        function: "自然友好的结尾",
        template:
          "I am really looking forward to seeing you.\n\nBest wishes,\n[Name]",
      },
    ],
    variants: [
      {
        name: "半正式活动邀请",
        trigger: "邀请同事、客户或不太熟悉的人",
        replacements: [
          "开头可以使用：I am writing to invite you to attend [活动].",
          "避免过于口语化，并根据姓名使用 Yours sincerely,。",
        ],
      },
      {
        name: "只确认安排",
        trigger: "对方已经同意来访或旅行",
        replacements: [
          "开头改为：I am writing to confirm the arrangements for [来访 / 旅行].",
          "三个主体段依次写“到达 → 住宿 → 活动或离开安排”。",
        ],
      },
    ],
    checks: [
      "日期、时间、地点和交通方式要明确，不能只写 come to my party。",
      "描述尚未发生的安排时注意使用 will、be going to 或 plan to。",
      "朋友信可以自然，但不能写成短信或使用网络缩写。",
    ],
  },
  {
    id: "personal",
    name: "感谢 / 个人建议",
    includes: "感谢帮助或礼物 · 给朋友建议 · 推荐地点或活动",
    tone: "通常为非正式信",
    prompt: "thank · advice · recommend · tell a friend · help",
    goal: "使用自然友好的语气，把事情、感受和下一步安排写具体。",
    targetWords: "完成填空后约 160—180 词",
    copyFromQuestion: [
      "先确认核心目的：[感谢 / 给建议 / 推荐 / 告知消息]。",
      "三个任务点分别补充人物、时间、地点或个人经历。",
      "结尾加入下一次见面、回报帮助或继续联系的安排。",
    ],
    connectors: ["First of all", "Also", "Because of this", "Anyway"],
    paragraphs: [
      {
        name: "称呼",
        target: "固定格式",
        function: "写给朋友",
        template: "Dear [First name],",
      },
      {
        name: "第 1 段｜说明目的",
        target: "20—30 词",
        function: "感谢对象 + 总体感受",
        template:
          "I am writing to thank you for [帮助 / 礼物 / 招待]. It was very kind of you, and I really appreciated what you did for me.",
      },
      {
        name: "第 2 段｜具体细节",
        target: "35—45 词",
        function: "发生了什么 + 最喜欢或最有用的部分",
        template:
          "What I appreciated most was [具体事情]. You also [另一个细节], which made [经历或事情] much easier and more enjoyable for me.",
      },
      {
        name: "第 3 段｜说明影响",
        target: "35—45 词",
        function: "帮助带来的结果 + 具体例子",
        template:
          "Because of your help, I was able to [积极结果]. For example, [具体例子]. This has made me feel [感受], and I will remember your kindness for a long time.",
      },
      {
        name: "第 4 段｜下一步",
        target: "30—40 词",
        function: "回报对方 + 未来安排",
        template:
          "I would love to return the favour by [回报方式]. Perhaps we could [见面或活动] on [时间]. Let me know if this would be convenient for you.",
      },
      {
        name: "结尾与落款",
        target: "10—15 词",
        function: "再次感谢",
        template:
          "Thanks again, and I hope to see you soon.\n\nBest wishes,\n[Name]",
      },
    ],
    variants: [
      {
        name: "给朋友建议",
        trigger: "题目要求 advise 或 suggest",
        replacements: [
          "开头改为：You asked me for advice about [事情], so I am writing to share a few ideas.",
          "第二段写：First of all, I think you should [建议 1] because [原因].",
          "第三段写：Another useful idea would be to [建议 2]. For example, [具体例子].",
          "第四段写：Finally, you could [建议 3]. I hope these ideas will help you [结果].",
        ],
      },
      {
        name: "推荐地点或活动",
        trigger: "题目要求 recommend",
        replacements: [
          "按照“推荐对象 → 推荐原因 → 交通、费用或时间 → 个人体验”展开。",
          "使用 I think you would enjoy...，不要使用过于正式的 I strongly recommend that you...。",
        ],
      },
    ],
    checks: [
      "非正式不等于随便；仍需完整句子和清楚分段。",
      "不要只写 Thanks a lot，要说明具体感谢什么以及带来的影响。",
      "建议必须有原因或例子，不能只连续使用 You should...。",
    ],
  },
];

function getFullTemplate(template: LetterTemplate) {
  return template.paragraphs.map((paragraph) => paragraph.template).join("\n\n");
}

export default function LetterReferenceTabs() {
  const [activeId, setActiveId] = useState(templates[0].id);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const activeTemplate =
    templates.find((template) => template.id === activeId) ?? templates[0];

  const copyTemplate = async (id: string, content: string) => {
    try {
      await navigator.clipboard.writeText(content);
      setCopiedId(id);
      window.setTimeout(() => {
        setCopiedId((current) => (current === id ? null : current));
      }, 1600);
    } catch {
      setCopiedId(null);
    }
  };

  const moveTab = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex =
      (index + direction + templates.length) % templates.length;
    const nextTemplate = templates[nextIndex];
    setActiveId(nextTemplate.id);
    document.getElementById(`letter-framework-tab-${nextTemplate.id}`)?.focus();
  };

  return (
    <article className="letter-framework-reference">
      <header className="letter-framework-title">
        <span>GENERAL TRAINING · WRITING TASK 1</span>
        <h1>G 类书信 7 组快速框架</h1>
        <p>
          面向小分稳定 5.5、冲 6 分：先判断正式、半正式或非正式，再把题目的三个任务点分别填入对应段落。
          官方没有固定的“书信题型表”，这里把常见用途合并成 7 组，方便记忆和快速套用。
        </p>
        <div className="framework-summary" aria-label="书信框架概要">
          <div>
            <strong>3</strong>
            <span>需要判断的语气</span>
          </div>
          <div>
            <strong>7</strong>
            <span>合并记忆的常见用途</span>
          </div>
          <div>
            <strong>165—190</strong>
            <span>练习时的目标词数</span>
          </div>
        </div>
      </header>

      <section className="letter-framework-card" aria-labelledby="letter-tone-title">
        <div className="letter-section-heading">
          <span>第一步</span>
          <h2 id="letter-tone-title">先判断语气，再选称呼和落款</h2>
          <p>
            看你和收信人的关系，不是只看写信内容。题目已经给出开头时，必须直接使用题目给出的称呼。
          </p>
        </div>
        <div className="tone-cards">
          {tones.map((tone) => (
            <article key={tone.name}>
              <header>
                <strong>{tone.name}</strong>
                <span>{tone.recipient}</span>
              </header>
              <code>{tone.greeting}</code>
              <code>{tone.closing}</code>
              <p>{tone.style}</p>
            </article>
          ))}
        </div>
        <p className="letter-rule-note">
          <strong>固定记忆：</strong>Dear Sir or Madam → Yours faithfully；
          Dear Mr/Ms + 姓 → Yours sincerely；Dear + 名 → Best wishes。
          考试不需要写地址。
        </p>
      </section>

      <section className="letter-framework-card" aria-labelledby="letter-types-title">
        <div className="letter-section-heading">
          <span>第二步</span>
          <h2 id="letter-types-title">现在只按这 7 组常见用途练习</h2>
          <p>
            一道题可能同时包含两种功能，例如“先反馈，再提出建议”。选择最接近主要写信目的的一组，再按题目三个要点调整。
          </p>
        </div>
        <div className="letter-type-finder">
          {templates.map((template) => (
            <button
              key={template.id}
              type="button"
              onClick={() => {
                setActiveId(template.id);
                document
                  .getElementById("letter-frameworks-title")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              <strong>{template.name}</strong>
              <span>{template.prompt}</span>
              <small>{template.includes}</small>
            </button>
          ))}
        </div>
      </section>

      <section className="letter-template-section" aria-labelledby="letter-frameworks-title">
        <div className="letter-section-heading">
          <span>第三步</span>
          <h2 id="letter-frameworks-title">选择用途，填入三个题目要点</h2>
          <p>
            每套都保留称呼、目的句、三个要点和正确落款。点击按钮可以复制完整框架。
          </p>
        </div>

        <div className="letter-framework-tabs" role="tablist" aria-label="G 类书信用途">
          {templates.map((template, index) => (
            <button
              id={`letter-framework-tab-${template.id}`}
              key={template.id}
              type="button"
              role="tab"
              aria-selected={activeId === template.id}
              aria-controls={`letter-framework-panel-${template.id}`}
              tabIndex={activeId === template.id ? 0 : -1}
              className={activeId === template.id ? "active" : ""}
              onClick={() => setActiveId(template.id)}
              onKeyDown={(event) => moveTab(event, index)}
            >
              {template.name}
            </button>
          ))}
        </div>

        <article
          id={`letter-framework-panel-${activeTemplate.id}`}
          className="letter-template-panel"
          role="tabpanel"
          aria-labelledby={`letter-framework-tab-${activeTemplate.id}`}
        >
          <header className="letter-template-header">
            <div>
              <span>{activeTemplate.tone}</span>
              <h3>{activeTemplate.name}</h3>
              <code>{activeTemplate.prompt}</code>
              <small>{activeTemplate.includes}</small>
            </div>
            <div>
              <strong>这封信要完成什么</strong>
              <p>{activeTemplate.goal}</p>
              <b>{activeTemplate.targetWords}</b>
            </div>
          </header>

          <section className="question-copy-guide">
            <h4>先从题干提取这些内容</h4>
            <ol>
              {activeTemplate.copyFromQuestion.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </section>

          <div className="letter-connector-strip">
            <strong>本框架自带的常用衔接</strong>
            <div>
              {activeTemplate.connectors.map((connector) => (
                <code key={connector}>{connector}</code>
              ))}
            </div>
          </div>

          <div className="paragraph-templates letter-paragraph-templates">
            {activeTemplate.paragraphs.map((paragraph) => (
              <section key={paragraph.name}>
                <header>
                  <div>
                    <h4>{paragraph.name}</h4>
                    <small>{paragraph.function}</small>
                  </div>
                  <span>{paragraph.target}</span>
                </header>
                <p>{paragraph.template}</p>
              </section>
            ))}
          </div>

          <div className="template-actions">
            <p>
              <strong>使用方法：</strong>
              保留句子骨架，把所有方括号替换为题目细节，并检查三个任务点是否都回答。
            </p>
            <button
              type="button"
              className="template-copy-button"
              onClick={() =>
                copyTemplate(
                  `letter-${activeTemplate.id}`,
                  getFullTemplate(activeTemplate),
                )
              }
            >
              {copiedId === `letter-${activeTemplate.id}`
                ? "已复制"
                : "复制完整框架"}
            </button>
          </div>

          <section className="template-variants">
            <h4>遇到这些变体时这样替换</h4>
            <div>
              {activeTemplate.variants.map((variant) => (
                <article key={variant.name}>
                  <header>
                    <strong>{variant.name}</strong>
                    <code>{variant.trigger}</code>
                  </header>
                  <ul>
                    {variant.replacements.map((replacement) => (
                      <li key={replacement}>{replacement}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="letter-template-checks">
            <h4>这类信最后重点检查</h4>
            <ul>
              {activeTemplate.checks.map((check) => (
                <li key={check}>{check}</li>
              ))}
            </ul>
          </section>
        </article>
      </section>

      <section className="letter-final-check" aria-labelledby="letter-final-check-title">
        <div>
          <span>20 分钟检查</span>
          <h2 id="letter-final-check-title">最后按四项评分原则过一遍</h2>
        </div>
        <div className="criteria-check-grid">
          <article>
            <strong>Task Achievement</strong>
            <p>目的是否清楚？三个任务点是否全部回答并充分展开？语气是否合适？</p>
          </article>
          <article>
            <strong>Coherence &amp; Cohesion</strong>
            <p>一个任务点一段；信息顺序是否自然；连接词是否准确而不过量？</p>
          </article>
          <article>
            <strong>Lexical Resource</strong>
            <p>用词是否符合情境？是否检查了拼写、词性和固定搭配？</p>
          </article>
          <article>
            <strong>Grammar</strong>
            <p>是否写完整句子？重点检查主谓一致、单复数、冠词和动词形式。</p>
          </article>
        </div>
      </section>
    </article>
  );
}
