"use client";
/* eslint-disable @next/next/no-html-link-for-pages -- plain links are required for reliable Vinext local navigation */

import { useState } from "react";
import { modelAnswersDetailed } from "./model-answers";
import {
  additionalMaterials,
  type AdditionalMaterial,
} from "./additional-materials";
import { expandAnswer } from "./answer-expansions";

type Topic = {
  id: string;
  code: string;
  name: string;
  fit: "直接适配" | "适度改写" | "备用";
  question: string;
  focus: string;
  modules: string;
  omit: string;
  framework: string[];
  keys: string[];
  note?: string;
};

const topics: Topic[] = [
  {
    id: "help-solve",
    code: "A1",
    name: "别人帮助解决问题",
    fit: "直接适配",
    question:
      "Describe a time when a person did something to help you solve a problem.",
    focus: "重点讲 Alex 具体怎样帮助你，帮助动作要比故障细节更充分。",
    modules: "M1（短）→ M3 → M4 → M6（重点）→ M7 → M8",
    omit: "省略 M2；一般不需要 M5。",
    framework: [
      "开头直接说 Alex 帮你解决了一次紧急工作问题。",
      "简短交代系统变慢、用户无法下单。",
      "详细讲他如何保持冷静、陪你逐步检查、解释原因并一起测试。",
      "用系统恢复和 relieved / grateful 收尾。",
    ],
    keys: [
      "I'd like to talk about a time when my colleague Alex helped me solve an urgent problem at work.",
      "He stayed calm, checked the error messages with me and explained each step clearly.",
      "I felt relieved and grateful because I could not have solved the problem so quickly without him.",
    ],
  },
  {
    id: "no-reply",
    code: "A2",
    name: "很久没收到回复",
    fit: "直接适配",
    question:
      "Describe a time when you sent a message but received no reply for a long time.",
    focus: "重点讲发了什么、为什么没回，以及等待过程中的感受变化。",
    modules: "M3（短）→ M4（短）→ M5（重点）→ M6-M7（压缩）→ M8",
    omit: "Alex 的性格只需一句；解决过程压缩成一句。",
    framework: [
      "开头直接说给 Alex 发了紧急消息，却等了近两小时。",
      "说明消息是关于系统变慢和订单失败。",
      "解释他当时在开会、手机静音，并描述等待时的焦虑。",
      "最后一句带过回复后共同解决，并突出 relieved。",
    ],
    keys: [
      "I sent Alex a message about an urgent system problem, but he did not reply for nearly two hours.",
      "He later explained that he had been in a long meeting and his phone was on silent.",
      "At first, I felt anxious and a little frustrated. However, I felt relieved when he finally replied.",
    ],
  },
  {
    id: "changed-opinion",
    code: "A3",
    name: "改变重要想法",
    fit: "直接适配",
    question: "Describe a time when you changed an important opinion of yours.",
    focus: "重点是原来的观点、改变原因和新的观点；系统故障只是证据。",
    modules: "专属旧观点 → M3-M4 → M6-M7 → M8（重点）",
    omit: "M1-M2 压缩成一句；不使用 M5。",
    framework: [
      "先说过去认为好工程师应该独自解决所有问题。",
      "讲自己在系统故障中无法独立找到原因。",
      "说明与 Alex 合作后很快解决。",
      "明确给出新观点：求助不是软弱，合作更有效。",
    ],
    keys: [
      "I used to believe that a good engineer should solve every problem alone.",
      "After working with Alex, I realised that asking for help is not a weakness.",
      "This experience changed my opinion and made me more open-minded at work.",
    ],
  },
  {
    id: "helpful-person",
    code: "A4",
    name: "乐于助人的人",
    fit: "直接适配",
    question: "Describe a person who often helps others.",
    focus: "先证明 Alex 经常帮助很多人，再用系统故障作为一个具体例子。",
    modules: "M1（重点）→ M2（重点）→ M3-M7（例子）→ 原因 → M8",
    omit: "系统故障只保留三到四句；不使用 M5。",
    framework: [
      "先介绍 Alex 的身份，并用 patient、friendly、helpful 定义人物。",
      "列举他平时帮助同事、带新人的两个行为。",
      "用系统故障作为最难忘的帮助案例。",
      "解释他喜欢分享经验、相信团队合作，最后表达敬佩。",
    ],
    keys: [
      "Alex is patient, friendly and always willing to help others.",
      "He often gives useful advice and helps new team members understand our system.",
      "I think he enjoys helping people because he likes sharing his experience and believes in teamwork.",
      "I really admire him, and I hope I can become a helpful person like him.",
    ],
  },
  {
    id: "smart-solution",
    code: "A5",
    name: "机智解决问题的人",
    fit: "直接适配",
    question: "Describe a person who solved a problem in a smart way.",
    focus: "明确说明聪明在哪里：冷静、有顺序、先定位再修改。",
    modules: "M1（短）→ M3-M4 → M6（重点改写）→ M7 → M8",
    omit: "省略 M2 和 M5。",
    framework: [
      "介绍 Alex 是经验丰富、思路清楚的同事。",
      "交代紧急系统故障。",
      "突出他没有盲目修改，而是逐步缩小范围并验证。",
      "解释这种方法节省时间、避免新问题，再表达佩服。",
    ],
    keys: [
      "Instead of changing everything at once, Alex checked the problem step by step.",
      "His method was smart because it helped us find the cause quickly without creating another problem.",
      "I was impressed by how calm and clear-minded he was.",
    ],
  },
  {
    id: "teamwork",
    code: "A6",
    name: "在团队中工作",
    fit: "直接适配",
    question: "Describe a time when you worked as part of a team.",
    focus: "重点讲参与者、分工和协作，不能写成 Alex 一个人完成全部工作。",
    modules: "M3-M4 → 专属分工 → M6-M7 → M8",
    omit: "人物性格压缩；不使用 M5。",
    framework: [
      "交代时间、任务和团队成员。",
      "明确你的任务与 Alex 的任务。",
      "说明你们共享发现、共同修改并一起测试。",
      "用成功结果和团队合作感受收尾。",
    ],
    keys: [
      "Alex and I worked together to solve the problem.",
      "I checked the error messages while he reviewed the recent changes to the system.",
      "We shared what we found, made a small change and tested it together.",
      "I enjoyed working as part of a team because we supported each other.",
    ],
  },
  {
    id: "overcome",
    code: "A7",
    name: "遇到困难终成功的人",
    fit: "直接适配",
    question: "Describe a person who overcame a difficulty and succeeded.",
    focus: "建议把主人公设为自己，突出承担责任、坚持和学习；Alex 是支持者。",
    modules: "M3-M4（困难）→ 自己尝试 → M6（支持）→ M7 → M8",
    omit: "不要写成 Alex 轻松包办；突出自己没有放弃。",
    framework: [
      "开头说要讲的人其实是自己。",
      "系统故障是困难，你第一次无法找到原因。",
      "你没有放弃，而是主动求助并参与修复和测试。",
      "最终解决问题，并表达 proud 和 relieved。",
    ],
    keys: [
      "The person I want to talk about is actually myself.",
      "Although I could not find the cause at first, I did not give up.",
      "With Alex's advice, I fixed the problem and tested the feature successfully.",
      "I felt proud because I overcame the difficulty and learned an important lesson.",
    ],
  },
  {
    id: "tech-problem",
    code: "A8",
    name: "遇到的科技问题",
    fit: "直接适配",
    question: "Describe a technology problem you had.",
    focus: "重点讲科技问题、发生时间、解决方法和情绪变化，Alex 是辅助人物。",
    modules: "M3 → M4（重点）→ M6 → M7 → M8",
    omit: "M1-M2 只用一句；不使用 M5。",
    framework: [
      "开头把系统变慢直接定义为 technology problem。",
      "说明订单失败以及问题的紧急程度。",
      "按检查、发现、修改、测试的顺序讲解决方法。",
      "用系统恢复和 stressed → relieved 收尾。",
    ],
    keys: [
      "The technology problem I had was that our online system suddenly became very slow.",
      "Some users could not complete their orders, so we needed to fix it quickly.",
      "Alex and I checked the error messages, found the cause and made a small change.",
      "I felt stressed at first, but I was relieved when the system worked normally again.",
    ],
  },
  {
    id: "planner",
    code: "B1",
    name: "擅长做计划的人",
    fit: "适度改写",
    question: "Describe a person who is good at making plans.",
    focus: "重点讲 Alex 平时做什么计划、怎么做计划，故障只能作为计划有效的例子。",
    modules: "M1-M2 → 新增工作计划习惯 → M3-M7（例子）",
    omit: "故障不能占答案大部分。",
    framework: [
      "介绍 Alex 负责发布和测试计划。",
      "说明他会列步骤、分工并准备检查清单。",
      "用故障后快速安排排查作为证明。",
      "解释他的计划清楚、实际并且节省时间。",
    ],
    keys: [
      "Alex is very good at making clear and practical work plans.",
      "Before a new feature is released, he lists the main tasks and prepares a simple checklist.",
      "I think he is good at planning because he thinks about possible problems in advance.",
    ],
  },
  {
    id: "decision",
    code: "B2",
    name: "重要决定",
    fit: "适度改写",
    question: "Describe an important decision you made.",
    focus: "必须有一个明确决定：暂停上线、先修复并重新测试。",
    modules: "M3-M4 → 专属决定 → M6-M7 → M8",
    omit: "不要把重点写成 Alex 的性格；“向他求助”不是唯一决定。",
    framework: [
      "说自己决定暂停新功能。",
      "解释用户受到影响，继续上线风险更大。",
      "讲你与 Alex 修复并重新测试。",
      "说明虽然紧张，但这是负责任的决定。",
    ],
    keys: [
      "I decided to pause the new feature and fix the problem before releasing it again.",
      "I made this decision because some users could not complete their orders.",
      "Although I felt nervous, I knew it was the responsible thing to do.",
    ],
  },
  {
    id: "changed-plan",
    code: "B3",
    name: "近期改变的计划",
    fit: "适度改写",
    question: "Describe a plan you changed recently.",
    focus: "重点是原计划、改变原因和新计划，故障负责触发变化。",
    modules: "M3-M4 → 原计划/新计划 → M6-M7 → M8",
    omit: "Alex 只是合作同事；不展开人物介绍。",
    framework: [
      "原计划是当天上线并开始下一项任务。",
      "系统变慢后决定暂停上线。",
      "把计划改成先排查、测试，再重新发布。",
      "结果顺利，感受从 disappointed 变为 relieved。",
    ],
    keys: [
      "Our original plan was to release the feature and start the next task on the same day.",
      "However, we changed the plan because the system became very slow.",
      "We decided to check and test the feature carefully before releasing it again.",
    ],
  },
  {
    id: "recent-change",
    code: "B4",
    name: "近期改变",
    fit: "适度改写",
    question: "Describe a recent change you made.",
    focus: "重点是后来改变的工作习惯，故障故事只是改变原因。",
    modules: "专属改变 → M3-M7（压缩）→ 新习惯 → M8",
    omit: "故障用四五句带过，不要完整复述。",
    framework: [
      "先说最近开始在上线前使用测试清单。",
      "说明改变源于那次系统故障。",
      "讲现在会更早测试、更早和同事沟通。",
      "表达自己变得更有条理、更自信。",
    ],
    keys: [
      "A recent change I made was to test my work more carefully before releasing it.",
      "Now I use a simple checklist and ask my teammates for advice earlier.",
      "This change makes me feel more confident and organised at work.",
    ],
  },
  {
    id: "short-work-abroad",
    code: "C1",
    name: "外国的短期停留",
    fit: "适度改写",
    question: "Describe a foreign country you would like to stay or work for a short period of time.",
    focus: "继续使用软件工程师背景，新增新加坡国际项目，并回答为什么只短期停留。",
    modules: "软件工程师背景 → 新加坡项目 → 工作三个月 → 提升英语和技能 → 回国",
    omit: "不展开系统故障；Alex只作为介绍项目的同事。",
    framework: [
      "开头说明想去新加坡短期工作。",
      "交代从Alex和公司国际项目中了解新加坡。",
      "说明会参加软件项目、练习英语并学习新技能。",
      "解释只停留三个月，因为家人和长期工作都在中国。",
    ],
    keys: [
      "I'd like to work in Singapore for about three months.",
      "Alex told me about an international software project that our company may start there.",
      "I would like to improve my English and learn how an international team works.",
      "I would only stay for a short time because my family and long-term career are in China.",
    ],
  },
  {
    id: "perfect-job",
    code: "C2",
    name: "完美工作",
    fit: "直接适配",
    question: "Describe your perfect job.",
    focus: "以国际软件项目为理想工作，重点讲工作内容、所需能力和适合自己的原因。",
    modules: "当前职业 → 国际软件项目 → 所需技能 → 喜欢解决问题 → 工作生活平衡",
    omit: "系统故障仅作为能力例子，不要占据答案主体。",
    framework: [
      "说明理想工作仍然是软件工程师，但希望参与国际项目。",
      "交代从Alex和公司的项目中了解这种工作。",
      "说明需要编程、沟通、英语和解决问题的能力。",
      "解释它符合兴趣，也希望有合理的工作时间。",
    ],
    keys: [
      "My perfect job would be working as a software engineer on an international project.",
      "I first heard about this kind of work from Alex, a senior engineer on my team.",
      "I would need strong technical skills, clear communication and better English.",
      "It suits me because I enjoy solving problems and learning new things.",
    ],
  },
  {
    id: "expensive-chair",
    code: "C3",
    name: "花费超过预期的物品",
    fit: "适度改写",
    question: "Describe an item on which you spent more than expected.",
    focus: "使用软件工程师的工作背景，讲一把因长期工作而购买的人体工学办公椅。",
    modules: "长时间工作 → 原预算一千元 → 实际三千元 → 更舒服 → 认为值得",
    omit: "不使用系统故障故事，只保留职业背景。",
    framework: [
      "介绍两年前购买的办公椅。",
      "说明原本只打算花约一千元。",
      "试坐后选择了约三千元、支撑更好的椅子。",
      "解释虽然超出预算，但减少背部不适，所以值得。",
    ],
    keys: [
      "The item I spent more than expected on was an office chair.",
      "I planned to spend about one thousand yuan, but the chair finally cost nearly three thousand.",
      "I chose it because I sit in front of a computer for many hours every day.",
      "Although it was expensive, it made me more comfortable and reduced my back pain.",
    ],
  },
  {
    id: "cannot-live-without-chair",
    code: "C4",
    name: "生活中离不开的东西",
    fit: "适度改写",
    question: "Describe something that you can't live without (not a computer or phone).",
    focus: "同一把办公椅，弱化价格，突出每天如何使用以及对工作和健康的帮助。",
    modules: "办公椅 → 每天工作使用 → 支撑背部 → 提高舒适度和专注力",
    omit: "价格只用一句带过；不要说真的无法生存。",
    framework: [
      "直接说明重要物品是一把办公椅。",
      "交代作为软件工程师每天会使用很长时间。",
      "讲它能支撑背部、让自己更舒服。",
      "说明它已经成为工作生活中不可缺少的一部分。",
    ],
    keys: [
      "One thing that has become very important in my daily life is my office chair.",
      "As a software engineer, I use it for several hours almost every day.",
      "It supports my back and helps me stay comfortable and focused.",
      "I could work without it, but my daily life would be much less comfortable.",
    ],
  },
];

const parkTopics: Topic[] = [
  {
    id: "park-recommend",
    code: "P1",
    name: "推荐旅行过的地方",
    fit: "直接适配",
    question: "Describe a place you would like to recommend to others.",
    focus: "重点介绍公园在哪里、你在那里做什么，以及为什么值得推荐。",
    modules: "公园位置与环境 → 平时活动 → 推荐原因",
    omit: "野餐、环保活动和法律内容都可以省略。",
    framework: [
      "开头直接说想推荐家附近的湖边公园。",
      "介绍位置、草地、树木、小湖和长椅。",
      "说自己在那里散步、听音乐或和朋友野餐。",
      "用安静、方便、免费和适合放松作为推荐理由。",
    ],
    keys: [
      "The first place that came to mind was a small park near my home.",
      "It has green grass, tall trees, a small lake and several quiet benches.",
      "I would recommend it because it is peaceful, free and easy to get to.",
    ],
  },
  {
    id: "park-quiet",
    code: "P2",
    name: "安静的地方",
    fit: "直接适配",
    question: "Describe a quiet place you like to go to.",
    focus: "重点是公园里那个安静角落，而不是介绍整个公园的所有活动。",
    modules: "公园位置 → 湖边长椅 → 如何发现 → 放松作用",
    omit: "省略野餐、骑车、清洁活动和新闻。",
    framework: [
      "点明最喜欢的安静地点是湖边的一张长椅。",
      "说明它远离主路，被树木包围。",
      "讲自己散步时偶然发现这个角落。",
      "说明会坐在那里听音乐、整理思路并缓解工作压力。",
    ],
    keys: [
      "My favourite quiet place is a wooden bench beside the lake in a park near my home.",
      "I found it by chance when I was walking there one evening.",
      "I go there when I feel stressed because it helps me calm down and clear my mind.",
    ],
  },
  {
    id: "park-smile",
    code: "P3",
    name: "许多人微笑的场合",
    fit: "直接适配",
    question: "Describe an occasion when many people were smiling.",
    focus: "重点是一次多人参加的野餐、发生了什么，以及为什么大家都在微笑。",
    modules: "周末野餐 → 朋友讲笑话/拍照片 → 微笑原因 → 感受",
    omit: "公园外观只用一句交代背景。",
    framework: [
      "交代去年春天与几位朋友在公园野餐。",
      "说大家带了食物、饮料和小音箱。",
      "朋友讲了一个笑话，或者拍了一张很搞笑的合照。",
      "解释自己因为放松、开心并久违地见到朋友而微笑。",
    ],
    keys: [
      "This happened last spring when I had a picnic with three close friends in the park.",
      "One of my friends told a funny story, and we all started laughing.",
      "I smiled because I felt relaxed and was happy to spend time with them.",
    ],
  },
  {
    id: "park-bike-trip",
    code: "P4",
    name: "想进行的自行车旅行",
    fit: "直接适配",
    question: "Describe a bicycle, motorcycle or car trip you would like to go on.",
    focus: "重点是未来想和谁、何时、去哪里，以及为什么选择骑自行车。",
    modules: "下个月秋天 → 与朋友骑车 → 沿河路线 → 湖边公园 → 原因",
    omit: "环保法律和本地新闻不需要。",
    framework: [
      "说明下个月秋天想和两位朋友骑车去湖边公园。",
      "计划早晨出发，沿着河边安静的道路骑行。",
      "到达后休息、拍照并吃简单早餐。",
      "解释骑车能欣赏风景、锻炼身体并和朋友聊天。",
    ],
    keys: [
      "I would like to take a bike trip to a lakeside park with two friends next autumn.",
      "We could cycle along a quiet road beside the river for about an hour.",
      "I prefer going by bike because we could exercise, enjoy the view and talk along the way.",
    ],
  },
  {
    id: "park-early",
    code: "P5",
    name: "早起经历",
    fit: "直接适配",
    question: "Describe a time when you got up early.",
    focus: "重点是为什么早起、早起后做什么，以及当天的感受。",
    modules: "早上六点起床 → 骑车/看日出 → 公园早餐 → 感受",
    omit: "公园介绍压缩成一句；不展开清洁和新闻。",
    framework: [
      "交代去年夏天某个周末早上六点起床。",
      "解释是为了在天气变热前骑车去公园看日出。",
      "说到达后沿湖散步并与朋友吃早餐。",
      "表达起床时很困，但后来觉得清醒、有活力。",
    ],
    keys: [
      "I got up at about six o'clock one Saturday morning.",
      "I wanted to cycle to the park and enjoy the cool air before it became hot.",
      "Although I felt sleepy at first, the trip made me feel fresh and energetic.",
    ],
  },
  {
    id: "park-news",
    code: "P6",
    name: "当地新闻",
    fit: "直接适配",
    question: "Describe a piece of local news you found interesting.",
    focus: "重点是新闻内容、看到新闻的渠道、为什么感兴趣及感受。",
    modules: "手机新闻 → 公园翻新 → 新自行车道/更多长椅 → 对居民的好处",
    omit: "不要把重点变成一次普通的公园散步。",
    framework: [
      "说在本地新闻应用上看到公园即将翻新的消息。",
      "说明会增加自行车道、长椅和垃圾分类设施。",
      "解释自己经常去，所以这个改变与生活直接相关。",
      "表达期待，并认为社区居民都会受益。",
    ],
    keys: [
      "I recently read a piece of local news about the park near my home.",
      "The local government plans to add a cycling path, more benches and better recycling bins.",
      "I found it interesting because I visit the park often and the changes will benefit local residents.",
    ],
  },
  {
    id: "park-nature-person",
    code: "P7",
    name: "鼓励你保护自然的人",
    fit: "适度改写",
    question: "Describe a person who encouraged you to protect nature.",
    focus: "重点是Lisa如何鼓励你、让你做了什么，以及你对她的感受。",
    modules: "介绍朋友 Lisa → 她的环保习惯 → 邀请我清理公园 → 改变我的习惯 → 敬佩",
    omit: "不能只讲Lisa自己保护环境，必须明确她对我的影响。",
    framework: [
      "介绍朋友 Lisa，并说明她非常关心环境。",
      "讲她邀请我参加公园清洁活动。",
      "说明她教我分类垃圾，并鼓励我少用塑料。",
      "讲自己的习惯变化，并表达敬佩和感谢。",
    ],
    keys: [
      "The person I want to talk about is my friend Lisa, who encouraged me to protect nature.",
      "She invited me to a community activity to clean up the park near her home.",
      "After that, I started sorting my rubbish more carefully and using less plastic.",
    ],
  },
  {
    id: "park-new-law",
    code: "P8",
    name: "想颁布的新法律",
    fit: "适度改写",
    question: "Describe a new law you would like to see introduced.",
    focus: "公园只是应用场景，核心必须是一条具体、可执行的新法律。",
    modules: "禁止在公共公园乱扔垃圾 → 罚款/社区服务 → 受益人 → 感受",
    omit: "不要大段描述公园外观或个人散步经历。",
    framework: [
      "提出希望引入更严格的公共公园垃圾管理规定。",
      "解释乱扔垃圾会伤害动物并增加清洁成本。",
      "建议罚款或参加社区清洁作为执行方式。",
      "说明居民、儿童和动物都会受益。",
    ],
    keys: [
      "I would like to see a stricter law against littering in public parks.",
      "People who leave rubbish should pay a fine or help with a community clean-up.",
      "This law would benefit local residents, children and animals living in the park.",
    ],
  },
  {
    id: "park-environment-law",
    code: "P9",
    name: "保护环境的法律",
    fit: "适度改写",
    question: "Describe a law that protects the environment.",
    focus: "需要介绍现有法律、出台原因、运作方式和你的评价。",
    modules: "公共场所垃圾分类规定 → 设置分类垃圾桶 → 处罚 → 改善公园",
    omit: "不要说成自己希望未来出台的新法律。",
    framework: [
      "介绍公共公园和街道实行的垃圾分类规定。",
      "说明出台原因是垃圾过多、回收率低。",
      "解释分类垃圾桶、标识和罚款如何运作。",
      "评价它虽然不完美，但能培养更好的习惯。",
    ],
    keys: [
      "One environmental rule in my city requires people to sort their rubbish in public places.",
      "Different bins are provided for recyclable and general waste.",
      "I think the rule is useful because it keeps parks cleaner and encourages better habits.",
    ],
  },
  {
    id: "park-boring",
    code: "P10",
    name: "去过的无聊地方",
    fit: "适度改写",
    question: "Describe a boring place you have been to.",
    focus: "必须使用一次负面版本：施工、下雨、设施关闭，而不是平时喜欢的公园。",
    modules: "第一次去另一个公园 → 正在施工 → 什么都不能做 → 失望",
    omit: "不要使用平时那个喜欢的公园，否则前后态度容易矛盾。",
    framework: [
      "介绍一次去城郊新公园的经历。",
      "说明到达后发现正在施工，而且天气不好。",
      "咖啡店、湖边道路和主要设施都关闭了。",
      "只能等朋友并很快离开，因此觉得无聊和失望。",
    ],
    keys: [
      "I once visited a new park on the edge of the city, but it was still under construction.",
      "Most of the paths and facilities were closed, so there was almost nothing to do.",
      "I felt bored and disappointed, and I left after about half an hour.",
    ],
  },
  {
    id: "park-drawing-child",
    code: "P11",
    name: "喜欢画画的孩子",
    fit: "适度改写",
    question: "Describe a child you know who likes drawing very much.",
    focus: "在熟悉的公园背景里加入侄女，重点仍然是孩子的性格、画画频率和喜欢画画的原因。",
    modules: "介绍侄女 → 周末去公园 → 画树木动物 → 经常画画 → 喜欢表达想法",
    omit: "公园景色只作为画画对象，不能成为地点题。",
    framework: [
      "介绍八岁的侄女 Lily，性格活泼、有想象力。",
      "说明周末常带她去家附近的公园。",
      "讲她喜欢画树、花、鸟和湖边的人。",
      "解释画画让她表达想法，也能安静专注。",
    ],
    keys: [
      "I'd like to talk about my eight-year-old niece Lily, who loves drawing.",
      "I often take her to the park near my home at weekends.",
      "She usually draws trees, flowers, birds and people beside the lake.",
      "I think she likes drawing because it helps her express her ideas and use her imagination.",
    ],
  },
  {
    id: "park-imagination",
    code: "P12",
    name: "发挥想象力",
    fit: "适度改写",
    question: "Describe a time you needed to use your imagination.",
    focus: "继续使用侄女和公园背景，但重点变成共同设计一座未来公园。",
    modules: "周末去公园 → 侄女提出画未来公园 → 想象新设施 → 完成图画 → 开心",
    omit: "不要大讲现实公园；必须明确哪些内容来自想象。",
    framework: [
      "交代上个月和侄女在公园画画。",
      "她请你一起设计一座未来公园。",
      "你们想象智能垃圾桶、太阳能路灯和空中自行车道。",
      "说明开始有点难，后来觉得有趣并为作品开心。",
    ],
    keys: [
      "Last month, my niece asked me to help her draw a park of the future.",
      "We imagined smart rubbish bins, solar-powered lights and a cycling path in the air.",
      "It was difficult at first because I do not draw very often.",
      "However, the activity became enjoyable, and we were both happy with the final picture.",
    ],
  },
];

const fitClass = (fit: Topic["fit"]) =>
  fit === "直接适配" ? "fit-direct" : fit === "适度改写" ? "fit-adapt" : "fit-backup";

const parkExpressions = [
  {
    stage: "开头 · 地点",
    use: "推荐和安静地点等题目",
    line: "I'd like to talk about a small park near my home.",
  },
  {
    stage: "开头 · 公园经历",
    use: "微笑、愉快经历等事件题",
    line: "I'd like to talk about an experience I had in a small park near my home.",
  },
  {
    stage: "开头 · 骑车",
    use: "骑车旅行题",
    line: "I'd like to talk about a bike trip I took to a small park near my home.",
  },
  {
    stage: "开头 · 早起",
    use: "早起经历题",
    line: "I'd like to talk about a Saturday when I got up early to visit a park near my home.",
  },
  {
    stage: "开头 · 当地新闻",
    use: "与公园有关的新闻题",
    line: "I'd like to talk about a piece of local news about a small park near my home.",
  },
  {
    stage: "开头 · 环保人物",
    use: "爱护自然的人物题",
    line: "I'd like to talk about my friend Lisa, who cares a lot about nature.",
  },
  {
    stage: "环保人物 · 公园联系",
    use: "说明 Lisa 与公园素材的关系",
    line: "She lives near me and often takes part in environmental activities in our local park.",
  },
  {
    stage: "开头 · 想颁布的规则",
    use: "想颁布的新法律题",
    line: "I'd like to talk about a new rule that I think would help keep public parks clean.",
  },
  {
    stage: "开头 · 已有环保规则",
    use: "保护环境的法律或规则题",
    line: "I'd like to talk about an environmental rule that is used in public parks in my city.",
  },
  {
    stage: "环保规则 · 素材来源",
    use: "把规则自然连接到家附近的公园",
    line: "My idea comes from a small park near my home, which I visit almost every week.",
  },
  {
    stage: "开头 · 负面经历",
    use: "无聊或令人失望的公园经历",
    line: "I'd like to talk about a disappointing visit to a small park near my home.",
  },
  {
    stage: "距离",
    use: "说明公园方便到达",
    line: "It is only a ten-minute walk away, so it is very convenient for me to visit.",
  },
  {
    stage: "环境",
    use: "介绍公园里稳定不变的景物",
    line: "The park has green grass, tall trees, a small lake and several wooden benches.",
  },
  {
    stage: "日常活动",
    use: "说明你平时怎样使用这个地方",
    line: "I usually go there after work or at weekends and walk slowly around the lake.",
  },
  {
    stage: "放松作用",
    use: "适合地点、安静、推荐和日常活动题",
    line: "I often listen to music or sit quietly on a bench, which helps me forget about work and clear my mind.",
  },
  {
    stage: "安静角落",
    use: "湖边长椅是素材里的固定细节",
    line: "My favourite part is a wooden bench under a large tree, away from the main road.",
  },
  {
    stage: "野餐经历",
    use: "适合微笑、朋友和愉快经历题",
    line: "Last spring, I had a picnic there with three close friends under a large tree.",
  },
  {
    stage: "野餐细节",
    use: "补足人物、活动和现场细节",
    line: "We brought some food and drinks, talked for several hours, told jokes and took a few photos.",
  },
  {
    stage: "骑车经历",
    use: "适合自行车旅行和早起题",
    line: "I set off early in the morning and cycled to the park before the weather became hot.",
  },
  {
    stage: "骑车细节",
    use: "补充路线、到达后的活动",
    line: "We rode along a quiet road, walked beside the lake and ate a simple breakfast on the grass.",
  },
  {
    stage: "环保经历",
    use: "适合爱护自然和环保规则题",
    line: "I also joined a community clean-up organised by my friend Lisa, and we collected and sorted rubbish in the park.",
  },
  {
    stage: "翻新消息",
    use: "适合当地新闻和公园变化题",
    line: "The news said that the local government plans to add a cycling path, more benches and better recycling bins.",
  },
  {
    stage: "地点价值",
    use: "可用于大多数公园题的结尾",
    line: "Although it is not a famous place, it has become an important part of my daily life.",
  },
  {
    stage: "最终感受",
    use: "可用于积极的公园地点或经历题",
    line: "Whenever I leave the park, I usually feel calmer, happier and more energetic.",
  },
];

const commonStory = [
  {
    label: "人物开头",
    title: "Alex 与这件事的关系",
    detail: "人物类题可以直接使用；其他工作题也能用一句交代人物。",
    sentence:
      "I'd like to talk about my colleague Alex, who is a senior software engineer on my team.",
  },
  {
    label: "人物特点",
    title: "Alex 的固定性格",
    detail: "用于帮助他人、聪明解决问题和擅长计划等人物题。",
    sentence:
      "Alex is patient, calm and always willing to help other people when they have problems at work.",
  },
  {
    label: "事件开头",
    title: "工作故事的固定时间",
    detail: "经历、决定、计划和科技问题都可以用这一句开场。",
    sentence:
      "I'd like to talk about something that happened at work about a year ago.",
  },
  {
    label: "人物衔接",
    title: "从事件自然带出 Alex",
    detail: "当第一句已经使用经历型开头时，用这一句避免再次重复 I'd like to talk about。",
    sentence:
      "It involved my colleague Alex, who is a senior software engineer on my team.",
  },
  {
    label: "故事背景",
    title: "新功能上线",
    detail: "大约一年前，团队上线新功能，你负责其中一部分。",
    sentence:
      "At that time, our team had just released a new feature, and I was responsible for one part of it.",
  },
  {
    label: "人物题背景",
    title: "人物介绍后转入故事",
    detail: "当答案先介绍 Alex 时，改用 About a year ago，避免没有指代对象的 At that time。",
    sentence:
      "About a year ago, our team released a new feature, and I was responsible for one part of it.",
  },
  {
    label: "问题出现",
    title: "系统出现问题",
    detail: "系统突然变慢，部分用户无法完成订单。",
    sentence:
      "Soon after that, the system became very slow, and some users could not complete their orders.",
  },
  {
    label: "自己尝试",
    title: "第一次没有找到原因",
    sentence:
      "I tried to solve the problem by myself, but I could not find the cause.",
  },
  {
    label: "同事帮助",
    title: "一起逐步检查",
    detail: "Alex 保持冷静，并和你一起检查错误信息。",
    sentence:
      "Alex stayed calm and checked the error messages with me step by step.",
  },
  {
    label: "找到原因",
    title: "修改并测试",
    detail: "找到请求过多的部分，进行小改动并仔细测试。",
    sentence:
      "We found that one part of the system was receiving too many requests, so we made a small change and tested it carefully.",
  },
  {
    label: "最终结果",
    title: "系统恢复正常",
    detail: "用户能够继续下单，问题得到解决。",
    sentence:
      "In the end, the system worked normally again, and users could complete their orders.",
  },
  {
    label: "感受变化",
    title: "从紧张到如释重负",
    detail: "用于多数经历题的情绪结尾。",
    sentence:
      "At first, I felt stressed and worried. However, I felt relieved after we solved the problem.",
  },
  {
    label: "核心收获",
    title: "合作不是软弱",
    detail: "适合帮助、团队、观点改变和克服困难等题目。",
    sentence:
      "This experience taught me that asking for help is not a weakness and that teamwork can save a lot of time.",
  },
];

function QuestionLibrary({
  items,
  activeId,
  setActiveId,
}: {
  items: Topic[];
  activeId: string;
  setActiveId: (id: string) => void;
}) {
  const active = items.find((topic) => topic.id === activeId) ?? items[0];
  const activeAnswer = expandAnswer(active.id, modelAnswersDetailed[active.id] ?? []);
  const displayAnswerLines = activeAnswer.flatMap((line) =>
    line.text
      .split(/(?<=[.!?])\s+(?=[A-Z])/)
      .filter(Boolean)
      .map((text) => ({ ...line, text })),
  );
  const answerWordCount = activeAnswer
    .map((line) => line.text)
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  return (
    <>
      <div className="question-tabs" role="tablist" aria-label="可命中的 Part 2 原题">
        {items.map((topic) => (
          <button
            key={topic.id}
            type="button"
            role="tab"
            aria-selected={activeId === topic.id}
            className={activeId === topic.id ? "active" : ""}
            onClick={() => setActiveId(topic.id)}
          >
            <span>{topic.code}</span>
            {topic.name}
            <i className={fitClass(topic.fit)}>{topic.fit}</i>
          </button>
        ))}
      </div>

      <article className="question-panel" role="tabpanel">
        <header className="question-heading">
          <div>
            <span className={`fit-label ${fitClass(active.fit)}`}>
              {active.fit}
            </span>
            <h4>{active.name}</h4>
            <p>{active.question}</p>
          </div>
          <b>{active.code}</b>
        </header>

        <section className="model-answer-section">
          <div className="model-answer-heading">
            <div>
              <span>FULL MODEL ANSWER</span>
              <h5>适配本题的完整范文</h5>
            </div>
            <div className="answer-meta">
              <b>约 {answerWordCount} 词</b>
              <p>每行一个完整句子：通用＝素材原句；特殊＝本题适配。</p>
            </div>
          </div>

          <div className="model-answer-lines">
            {displayAnswerLines.map((line, index) => (
              <div
                className={`model-answer-line ${
                  line.kind === "特殊" ? "special" : "common"
                }`}
                key={`${active.id}-${index}`}
              >
                <span>{line.kind}</span>
                <p>{line.text}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}

function AdditionalMaterialPanel({ material }: { material: AdditionalMaterial }) {
  const [activeId, setActiveId] = useState(material.topics[0].id);
  const active =
    material.topics.find((topic) => topic.id === activeId) ?? material.topics[0];
  const expandedAnswer = expandAnswer(active.id, active.answer);
  const displayAnswerLines = expandedAnswer.flatMap((line) =>
    line.text
      .split(/(?<=[.!?])\s+(?=[A-Z])/)
      .filter(Boolean)
      .map((text) => ({ ...line, text })),
  );
  const answerWordCount = expandedAnswer
    .map((line) => line.text)
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return (
    <section className="material-panel" role="tabpanel">
      <header className="material-guide-heading">
        <div>
          <span>{material.tagline}</span>
          <h2>{material.title}</h2>
        </div>
        <div className="fit-counts">
          <span><b>{material.topics.length}</b> 直接适配</span>
        </div>
      </header>

      <section className="material-guide-section">
        <h3>1. 核心通用素材库</h3>
        <div className="guide-structure">
          <span>素材主线</span>
          <strong>{material.storyline}</strong>
        </div>

        <div className="story-rows">
          {material.modules.map((step) => (
            <div key={`${material.id}-${step.label}`}>
              <span>{step.label}</span>
              <div>
                <h4>{step.title}</h4>
                <p>{step.detail}</p>
                <blockquote>{step.sentence}</blockquote>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="material-guide-section">
        <h3>2. 这个素材可以命中的原题</h3>
        <p className="section-intro">
          所有题目均来自题库。每篇范文已经按题卡重点重新组织，并逐句标注通用与特殊内容。
        </p>

        <div className="question-tabs" role="tablist" aria-label={`${material.title}可命中的 Part 2 原题`}>
          {material.topics.map((topic) => (
            <button
              key={topic.id}
              type="button"
              role="tab"
              aria-selected={active.id === topic.id}
              className={active.id === topic.id ? "active" : ""}
              onClick={() => setActiveId(topic.id)}
            >
              <span>{topic.code}</span>
              {topic.name}
              <i className="fit-direct">直接适配</i>
            </button>
          ))}
        </div>

        <article className="question-panel" role="tabpanel">
          <header className="question-heading">
            <div>
              <span className="fit-label fit-direct">直接适配</span>
              <h4>{active.name}</h4>
              <p>{active.question}</p>
            </div>
            <b>{active.code}</b>
          </header>

          <section className="model-answer-section">
            <div className="model-answer-heading">
              <div>
                <span>FULL MODEL ANSWER</span>
                <h5>适配本题的完整范文</h5>
              </div>
              <div className="answer-meta">
                <b>约 {answerWordCount} 词</b>
                <p>通用＝固定素材原句；特殊＝按照本题提示点增加的内容。</p>
              </div>
            </div>

            <div className="model-answer-lines">
              {displayAnswerLines.map((line, index) => (
                <div
                  className={`model-answer-line ${line.kind === "特殊" ? "special" : "common"}`}
                  key={`${active.id}-${index}`}
                >
                  <span>{line.kind}</span>
                  <p>{line.text}</p>
                </div>
              ))}
            </div>
          </section>
        </article>
      </section>

      <section className="material-guide-section">
        <h3>3. Band 6 使用规则</h3>
        <ul className="notice-list">
          {material.rules.map((rule) => <li key={rule}>{rule}</li>)}
          <li>准备时只写关键词，不背诵整篇；目标是在 1—2 分钟内自然覆盖四个提示点。</li>
        </ul>
      </section>
    </section>
  );
}

export default function SpeakingLibrary() {
  const [activeMaterialId, setActiveMaterialId] = useState("shanghai");
  const [activeTopicId, setActiveTopicId] = useState("helpful-person");
  const [activeParkTopicId, setActiveParkTopicId] = useState("park-recommend");
  const orderedAdditionalMaterials = additionalMaterials;
  const activeAdditionalMaterial =
    orderedAdditionalMaterials.find((material) => material.id === activeMaterialId) ??
    orderedAdditionalMaterials[0];

  return (
    <main className="reference-shell">
      <header className="topbar">
        <a className="brand" href="/" aria-label="返回雅思口语练习">
          <div className="brand-mark">S</div>
          <div>
            <div className="brand-title">雅思口语练习</div>
            <div className="brand-subtitle">Local speaking practice</div>
          </div>
        </a>
        <nav className="main-nav" aria-label="主导航">
          <a href="/part-1">Part 1 练习</a>
          <a className="active" aria-current="page" href="/">Part 2 练习</a>
          <a href="/part-3">Part 3 练习</a>
        </nav>
        <div className="saved-state"><i />本地素材库</div>
      </header>

      <article className="tab-reference">
        <header className="tab-reference-title">
          <span>IELTS SPEAKING · PART 2 · BAND 6</span>
          <h1>Part 2 通用素材练习</h1>
          <p>
            先掌握一个完整、熟悉的工作故事，再根据原题的四个提示点改变重点和顺序。
            准备 1 分钟，连续回答 1—2 分钟。
          </p>
        </header>

        <div className="material-tabs" role="tablist" aria-label="通用素材">
          <button
            type="button"
            className={activeMaterialId === "alex" ? "active" : ""}
            role="tab"
            aria-selected={activeMaterialId === "alex"}
            onClick={() => setActiveMaterialId("alex")}
          >
            素材 01｜Alex 工作故事
          </button>
          <button
            type="button"
            className={activeMaterialId === "park" ? "active" : ""}
            role="tab"
            aria-selected={activeMaterialId === "park"}
            onClick={() => setActiveMaterialId("park")}
          >
            素材 02｜家附近的公园
          </button>
          {orderedAdditionalMaterials.map((material) => (
            <button
              key={material.id}
              type="button"
              className={activeMaterialId === material.id ? "active" : ""}
              role="tab"
              aria-selected={activeMaterialId === material.id}
              onClick={() => setActiveMaterialId(material.id)}
            >
              {material.tab}
            </button>
          ))}
        </div>

        {activeMaterialId === "alex" ? (
        <section className="material-panel" role="tabpanel">
          <header className="material-guide-heading">
            <div>
              <span>工作人物 + 系统故障 + 团队合作</span>
              <h2>通用素材 01：Alex 与生产系统问题</h2>
            </div>
            <div className="fit-counts">
              <span><b>8</b> 直接适配</span>
              <span><b>4</b> 适度改写</span>
            </div>
          </header>

          <section className="material-guide-section">
            <h3>1. 核心通用素材库</h3>
            <div className="guide-structure">
              <span>素材主线</span>
              <strong>
                介绍 Alex → 新功能上线 → 系统变慢 → 一起排查 → 修改并测试 → 恢复正常 → 感受与收获
              </strong>
            </div>

            <div className="story-rows">
              {commonStory.slice(2).map((part, index) => (
                <div key={part.title}>
                  <span>{String(index + 1).padStart(2, "0")} · {part.label}</span>
                  <div>
                    <h4>{part.title}</h4>
                    <p>{part.detail}</p>
                    <blockquote>{part.sentence}</blockquote>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="material-guide-section">
            <h3>2. 这个素材可以命中的原题</h3>
            <p className="section-intro">
              下列原题来自题库。选择题目后，直接查看已经完成连贯性检查的完整范文。
            </p>

            <QuestionLibrary
              items={topics}
              activeId={activeTopicId}
              setActiveId={setActiveTopicId}
            />
          </section>

          <section className="material-guide-section">
            <h3>3. Band 6 使用规则</h3>
            <ul className="notice-list">
              <li>先扣题，再复用素材；不要让系统故障抢走人物题、观点题或计划题的重点。</li>
              <li>故事主体使用过去时；Alex 现在仍有的身份和性格可以使用现在时。</li>
              <li>准备时只写 6—8 个关键词，不写整段答案；目标约 90 秒。</li>
              <li>使用简单自然的词汇，避免堆技术术语；小错误快速修正后继续说。</li>
            </ul>
          </section>
        </section>
        ) : activeMaterialId === "park" ? (
        <section className="material-panel" role="tabpanel">
          <header className="material-guide-heading">
            <div>
              <span>地点 + 日常活动 + 公园经历 + 环保</span>
              <h2>通用素材 02：家附近的湖边公园</h2>
            </div>
            <div className="fit-counts">
              <span><b>7</b> 直接适配</span>
              <span><b>3</b> 适度改写</span>
            </div>
          </header>

          <section className="material-guide-section">
            <h3>1. 核心通用素材库</h3>
            <div className="guide-structure">
              <span>素材主线</span>
              <strong>
                家附近的公园 → 湖、树木和长椅 → 下班后散步 → 周末野餐 → 早起骑车 → 公园清洁 → 翻新新闻
              </strong>
            </div>

            <div className="story-rows">
              <div>
                <span>01 · 位置与环境</span>
                <div>
                  <h4>家附近的湖边公园</h4>
                  <p>走路约十分钟就能到，公园里有草地、树木、小湖和长椅。</p>
                  <blockquote>
                    {parkExpressions[11].line} {parkExpressions[12].line}
                  </blockquote>
                </div>
              </div>
              <div>
                <span>02 · 日常活动</span>
                <div>
                  <h4>下班后散步放松</h4>
                  <p>平时下班后或周末绕湖散步，听音乐或坐一会儿。</p>
                  <blockquote>
                    {parkExpressions[13].line} {parkExpressions[14].line}
                  </blockquote>
                </div>
              </div>
              <div>
                <span>03 · 安静角落</span>
                <div>
                  <h4>安静的湖边角落</h4>
                  <p>散步时偶然发现一张远离主路的长椅，压力大时会去那里坐一会儿。</p>
                  <blockquote>
                    {parkExpressions[15].line}
                  </blockquote>
                </div>
              </div>
              <div>
                <span>04 · 野餐</span>
                <div>
                  <h4>和朋友度过开心的周末</h4>
                  <p>与三位朋友带着食物和饮料野餐，聊天、讲笑话并拍照。</p>
                  <blockquote>
                    {parkExpressions[16].line}
                  </blockquote>
                </div>
              </div>
              <div>
                <span>05 · 早起骑车</span>
                <div>
                  <h4>早晨骑车去公园</h4>
                  <p>周末六点起床，与朋友骑车去公园，在天气变热前看湖景、吃早餐。</p>
                  <blockquote>
                    {parkExpressions[18].line}
                  </blockquote>
                </div>
              </div>
              <div>
                <span>06 · 环保清洁</span>
                <div>
                  <h4>参加社区清洁活动</h4>
                  <p>朋友 Lisa 组织居民捡垃圾、分类回收，让公园变得更加干净。</p>
                  <blockquote>
                    {parkExpressions[20].line}
                  </blockquote>
                </div>
              </div>
              <div>
                <span>07 · 翻新新闻</span>
                <div>
                  <h4>公园即将翻新</h4>
                  <p>本地新闻说公园会增加自行车道、长椅和垃圾分类设施。</p>
                  <blockquote>
                    {parkExpressions[21].line}
                  </blockquote>
                </div>
              </div>
            </div>
          </section>

          <section className="material-guide-section">
            <h3>2. 这个素材可以命中的原题</h3>
            <p className="section-intro">
              前七道可以直接使用公园素材；后三道需要把重点改成法律或一次负面的公园经历。
            </p>
            <QuestionLibrary
              items={parkTopics}
              activeId={activeParkTopicId}
              setActiveId={setActiveParkTopicId}
            />
          </section>

          <section className="material-guide-section">
            <h3>3. Band 6 使用规则</h3>
            <ul className="notice-list">
              <li>地点题先介绍位置和环境；经历题先交代时间、人物和发生了什么。</li>
              <li>平时去公园使用现在时；野餐、骑车和清洁活动使用过去时。</li>
              <li>每道题只选择相关模块，避免把野餐、骑车、新闻和法律全部塞进一个答案。</li>
              <li>优先使用 came to mind、to tell you more、speaking of、in the end 等简单衔接。</li>
            </ul>
          </section>
        </section>
        ) : (
          <AdditionalMaterialPanel material={activeAdditionalMaterial} />
        )}
      </article>
    </main>
  );
}
