export type ReviewCriterion = {
  code: "TA" | "TR" | "CC" | "LR" | "GRA";
  name: string;
  nameZh: string;
  score: number;
  feedback: string;
};

export type ReviewSeed = {
  id: string;
  taskType: string;
  title: string;
  question: string;
  instruction: string;
  points: string[];
  score: string;
  scoreNote: string;
  criteria: ReviewCriterion[];
  paperLabel: string;
  wordCount: number;
  focus: string;
  reviewHtml: string;
  cleanHtml: string;
  createdAt: string;
};

export type ReviewRecord = ReviewSeed & {
  updatedAt: string;
};

export const DEFAULT_REVIEW_SEEDS: ReviewSeed[] = [
  {
    id: "neighbourhood-dog-safety-complaint",
    taskType: "GENERAL TRAINING · TASK 1",
    title: "社区遛狗安全投诉及建议信",
    question:
      "Some of your neighbors always let their dogs run wildly, which is very dangerous.",
    instruction:
      "Write a letter to the neighborhood committee. In your letter",
    points: [
      "complain about this situation",
      "offer your suggestions",
    ],
    score: "5.5",
    scoreNote: "四项等权平均 · 内容完整，准确性需加强",
    criteria: [
      {
        code: "TA",
        name: "Task Achievement",
        nameZh: "任务完成度",
        score: 6,
        feedback:
          "投诉目的基本清楚，危险情况、具体事例和多项解决建议均有展开，正式语气总体合适；开头表达不准确，部分建议还可以进一步说明预期效果。",
      },
      {
        code: "CC",
        name: "Coherence & Cohesion",
        nameZh: "连贯与衔接",
        score: 6,
        feedback:
          "文章按照问题、危险影响和解决建议分段，信息推进清楚；个别句子内部关系不自然，代词 they 的指代以及 who 从句的位置不够清晰。",
      },
      {
        code: "LR",
        name: "Lexical Resource",
        nameZh: "词汇资源",
        score: 5,
        feedback:
          "使用了 dangerous、uncomfortable、committee 和 warning 等相关词汇，但拼写错误、重复用词及不自然搭配较多，例如 keep a lead with dogs。",
      },
      {
        code: "GRA",
        name: "Grammatical Range & Accuracy",
        nameZh: "语法多样性与准确性",
        score: 5,
        feedback:
          "能够尝试定语从句和分词结构，但复数、介词、动词形式和从句语序错误较频繁，例如 childrens、avoid go 和 they...who；意思总体仍可理解。",
      },
    ],
    paperLabel: "Formal complaint and suggestion letter",
    wordCount: 157,
    focus: "拼写 · 复数与动词形式 · 固定搭配",
    createdAt: "2026-08-01T01:00:00.000Z",
    reviewHtml: `
      <p>Dear <span class="change" data-note="Sr 不是 Sir 的正确写法"><del>Sr</del><strong>Sir</strong></span> or Madam,</p>
      <p>I am writing this letter <span class="change" data-note="表示写信投诉应使用 write to complain about"><del>for</del><strong>to complain about</strong></span> a dangerous <span class="change" data-note="这里描述的是持续存在的危险情况，不是一次事件；in which 可以连接后面的完整情况"><del>event that</del><strong>situation in which</strong></span> <span class="change" data-note="拼写错误：serval 应为 several"><del>serval</del><strong>several</strong></span> neighbors <span class="change" data-note="always let 语气生硬；regularly allow 更适合描述经常发生的行为"><del>always let</del><strong>regularly allow</strong></span> their dogs <span class="change" data-note="allow someone to do something，需要补充 to"><strong>to </strong></span><span class="change" data-note="这里强调狗自由奔跑，run freely 比 run outside 更准确"><del>run outside</del><strong>run freely</strong></span> <span class="change" data-note="limition 不是正确单词；描述狗没有被拴住使用 without leads"><del>without any limition</del><strong>without leads</strong></span>.</p>
      <p>The main problem is that <span class="change" data-note="so so 过于口语化且重复；用 particularly 表示“尤其”更正式"><del>it is so so</del><strong>this is particularly</strong></span> dangerous for other <span class="change" data-note="especially 和 such as 不能同时使用；这里直接用 especially 引出重点人群"><del>neighbors especially such as</del><strong>neighbors, especially</strong></span> <span class="change" data-note="children 本身已经是复数，不能加 s"><del>childrens</del><strong>children</strong></span> and <span class="change" data-note="elders 在这里不够自然；older people 更适合泛指年长居民"><del>elders</del><strong>older people</strong></span>, who may not be able to move quickly. It makes many people feel uncomfortable <span class="change" data-note="表示“在公园里”使用介词 in"><del>on</del><strong>in</strong></span> the park. Many <span class="change" data-note="children 已经是复数，不能写 childrens"><del>childrens</del><strong>children</strong></span> are <span class="change" data-note="拼写错误：afrid 应为 afraid"><del>afrid</del><strong>afraid</strong></span> of dogs and they <span class="change" data-note="这里表示可能出现的行为，may 比 will 更准确"><del>will</del><strong>may</strong></span> <span class="change" data-note="avoid 后面需要接动名词"><del>avoid go</del><strong>avoid going</strong></span> outside with <span class="change" data-note="需要使用 their 表明是孩子们的父母"><del>parents</del><strong>their parents</strong></span>. Last Saturday, a large dog ran after a young boy, causing him to <span class="change" data-note="补充 fall and，使膝盖受伤的过程更清楚"><strong>fall and </strong></span>hurt his knee because the owner <span class="change" data-note="正式信件中避免使用 didn't 等缩写"><del>didn't</del><strong>did not</strong></span> control <span class="change" data-note="前文已经出现 the dog，这里用 it 避免重复"><del>his dog</del><strong>it</strong></span>.</p>
      <p>Because of this <span class="change" data-note="拼写错误：stituation 应为 situation"><del>stituation</del><strong>situation</strong></span>, I suggest that the committee should introduce a rule that <span class="change" data-note="规则针对的是养狗人，dog owners 比 people 更准确"><del>people</del><strong>dog owners</strong></span> should <span class="change" data-note="固定搭配为 keep dogs on leads"><del>keep a lead with dogs</del><strong>keep their dogs on leads</strong></span>. <span class="change" data-note="clearing 表示“清理”，这里需要形容词 clear"><del>Clearing</del><strong>Clear</strong></span> signs should be placed <span class="change" data-note="表示设置在入口处使用介词 at"><del>on</del><strong>at</strong></span> the entrance. In addition, <span class="change" data-note="they 指代不清，应明确写成 dog owners"><del>they</del><strong>dog owners</strong></span> should receive a warning <span class="change" data-note="表示违反规则是收到警告的条件，应使用 if they"><del>who</del><strong>if they</strong></span> break the rule repeatedly.</p>
      <p>I hope that you will consider <span class="change" data-note="指代刚刚提出的建议使用 these"><del>those</del><strong>these</strong></span> suggestions and take action as soon as <span class="change" data-note="拼写错误：possiable 应为 possible"><del>possiable</del><strong>possible</strong></span>.</p>
      <p>Yours faithfully,</p>
      <p>Allen</p>
    `,
    cleanHtml: `
      <p>Dear Sir or Madam,</p>
      <p>I am writing this letter to complain about a dangerous situation in which several neighbors regularly allow their dogs to run freely without leads.</p>
      <p>The main problem is that this is particularly dangerous for other neighbors, especially children and older people, who may not be able to move quickly. It makes many people feel uncomfortable in the park. Many children are afraid of dogs and they may avoid going outside with their parents. Last Saturday, a large dog ran after a young boy, causing him to fall and hurt his knee because the owner did not control it.</p>
      <p>Because of this situation, I suggest that the committee should introduce a rule that dog owners should keep their dogs on leads. Clear signs should be placed at the entrance. In addition, dog owners should receive a warning if they break the rule repeatedly.</p>
      <p>I hope that you will consider these suggestions and take action as soon as possible.</p>
      <p>Yours faithfully,</p>
      <p>Allen</p>
    `,
  },
  {
    id: "cancelled-flight-insurance-claim",
    taskType: "GENERAL TRAINING · TASK 1",
    title: "航班取消投诉及保险材料请求信",
    question: "Your organized flight has been canceled.",
    instruction: "Write a letter to the airline company. In your letter",
    points: [
      "complain about the situation",
      "request what you need from them to make a travel insurance claim",
      "suggest what they should do in future situations",
    ],
    score: "5.5",
    scoreNote: "四项等权平均 · 三个任务点均已覆盖",
    criteria: [
      {
        code: "TA",
        name: "Task Achievement",
        nameZh: "任务完成度",
        score: 6,
        feedback:
          "投诉、保险理赔材料和未来建议三个任务点均已覆盖，正式语气基本合适；航班日期、航班号、通知时间等背景不够具体，索取的材料也可以表达得更明确。",
      },
      {
        code: "CC",
        name: "Coherence & Cohesion",
        nameZh: "连贯与衔接",
        score: 6,
        feedback:
          "按照投诉、索取材料和建议分段，信息顺序清楚；However、In addition 和 As a result 使用较机械，this document、it 等指代不够清楚。",
      },
      {
        code: "LR",
        name: "Lexical Resource",
        nameZh: "词汇资源",
        score: 5,
        feedback:
          "使用了 travel insurance claim、alternative flight 和 considerable inconvenience 等相关词汇，但拼写错误和不自然搭配较多，影响了词汇准确性。",
      },
      {
        code: "GRA",
        name: "Grammatical Range & Accuracy",
        nameZh: "语法多样性与准确性",
        score: 5,
        feedback:
          "能够尝试被动语态和从句，但开头句结构、情态动词后的动词形式、主谓一致和冠词错误较频繁；大部分意思仍然可以理解。",
      },
    ],
    paperLabel: "Formal complaint and request letter",
    wordCount: 157,
    focus: "拼写 · 动词形式 · 正式搭配",
    createdAt: "2026-07-31T01:15:00.000Z",
    reviewHtml: `
      <p>Dear Sir or Madam,</p>
      <p>I am writing this letter <span class="change" data-note="about 后不能直接接一个完整句；这里使用 to complain that 明确投诉目的"><del>about</del><strong>to complain that</strong></span> <span class="change" data-note="这里特指自己预订的航班，使用 the"><del>this</del><strong>the</strong></span> flight <span class="change" data-note="原句中的谓语和定语从句顺序错误；beed 和 caceled 拼写错误；表示预订航班使用 book"><del>has beed caceled which I organized last week</del><strong>that I booked last week has been canceled</strong></span>.</p>
      <p>The main problem is that I <span class="change" data-note="表示预订航班使用 book，而不是 prepare"><del>prepared</del><strong>booked</strong></span> the flight <span class="change" data-note="表示乘坐航班的目的使用 to attend"><del>for</del><strong>to attend</strong></span> an important meeting. However, <span class="change" data-note="句中 it 不应大写"><del>It</del><strong>it</strong></span> has <span class="change" data-note="拼写错误：beed 应为 been"><del>beed</del><strong>been</strong></span> canceled. In addition, the <span class="change" data-note="拼写错误：curstomer 应为 customer"><del>curstomer</del><strong>customer</strong></span> service<span class="change" data-note="补充 team，使 customer service team 成为完整主语"><strong> team</strong></span> did not <span class="change" data-note="提供替代安排通常使用 offer"><del>provide</del><strong>offer</strong></span> <span class="change" data-note="any plan for this situation 过于含糊，应明确说明没有替代出行安排"><del>any plan for this situation</del><strong>any alternative travel arrangements</strong></span>. As a result, I <span class="change" data-note="must 后不能使用过去式 bought；叙述过去被迫做某事使用 had to buy"><del>must bought</del><strong>had to buy</strong></span> another <span class="change" data-note="another ticket 已能表达另一张机票，不必重复 flight"><del>flight ticket</del><strong>ticket</strong></span> <span class="change" data-note="表示购买第二天的航班，应补充介词 for"><del>the next day</del><strong>for the next day</strong></span> <span class="change" data-note="by myself 表示独自完成，不能表示自己承担费用"><del>by myself</del><strong>at my own expense</strong></span>. This caused me considerable inconvenience.</p>
      <p>To make a travel insurance claim, I need <span class="change" data-note="some information 过于笼统；保险理赔通常需要书面取消证明"><del>some information about</del><strong>written confirmation of</strong></span> the cancellation. <span class="change" data-note="这里特指随后说明的文件，使用 The"><del>This</del><strong>The</strong></span> document should <span class="change" data-note="should 后使用动词原形"><del>includes</del><strong>include</strong></span> <span class="change" data-note="这里特指已取消的航班，使用 the"><del>this</del><strong>the</strong></span> flight number, travel date and reason <span class="change" data-note="固定搭配为 reason for the cancellation"><del>of</del><strong>for the</strong></span> cancellation. I would be grateful if you could <span class="change" data-note="provide information of it 搭配不自然；it 已可指代前一句的 document"><del>provide information of it</del><strong>send it to me</strong></span>.</p>
      <p><span class="change" data-note="固定表达为 in the future"><del>In future</del><strong>In the future</strong></span>, I suggest that <span class="change" data-note="拼写错误：passagers 应为 passengers"><del>passagers</del><strong>passengers</strong></span> should be informed <span class="change" data-note="与目前的通知时间比较，应使用比较级 earlier"><del>early</del><strong>earlier</strong></span> by email or <span class="change" data-note="手机短信的自然表达为 text message"><del>message</del><strong>text message</strong></span>. <span class="change" data-note="写给该航空公司时使用 the airline 更自然"><del>This</del><strong>The</strong></span> airline should also offer an alternative <span class="change" data-note="拼写错误：fligh 应为 flight"><del>fligh</del><strong>flight</strong></span> <span class="change" data-note="refund 是可数名词；把 immediately 改为形容词 immediate 修饰 refund"><del>or refund immediately</del><strong>or an immediate refund</strong></span>. <span class="change" data-note="正式信件中用 Therefore 比单独使用 So 更自然"><del>So</del><strong>Therefore,</strong></span> customers can make <span class="change" data-note="an 不能修饰以辅音音素开头的 new；这里泛指新的出行安排，使用复数"><del>an new arrangement</del><strong>new travel arrangements</strong></span> more quickly.</p>
      <p>I look forward to receiving your <span class="change" data-note="replay 表示“重放”，reply 才表示“回复”"><del>replay</del><strong>reply</strong></span> and having this <span class="change" data-note="拼写错误：prolem 应为 problem"><del>prolem</del><strong>problem</strong></span> resolved soon.</p>
      <p>Yours faithfully,</p>
      <p>Allen</p>
    `,
    cleanHtml: `
      <p>Dear Sir or Madam,</p>
      <p>I am writing this letter to complain that the flight that I booked last week has been canceled.</p>
      <p>The main problem is that I booked the flight to attend an important meeting. However, it has been canceled. In addition, the customer service team did not offer any alternative travel arrangements. As a result, I had to buy another ticket for the next day at my own expense. This caused me considerable inconvenience.</p>
      <p>To make a travel insurance claim, I need written confirmation of the cancellation. The document should include the flight number, travel date and reason for the cancellation. I would be grateful if you could send it to me.</p>
      <p>In the future, I suggest that passengers should be informed earlier by email or text message. The airline should also offer an alternative flight or an immediate refund. Therefore, customers can make new travel arrangements more quickly.</p>
      <p>I look forward to receiving your reply and having this problem resolved soon.</p>
      <p>Yours faithfully,</p>
      <p>Allen</p>
    `,
  },
  {
    id: "home-work-laptop-problem",
    taskType: "GENERAL TRAINING · TASK 1",
    title: "居家办公笔记本电脑故障投诉信",
    question:
      "You work at home and have a problem with a piece of equipment that you use for your job.",
    instruction:
      "Write a letter to the shop or company which supplied the equipment. In your letter",
    points: [
      "describe the problem with the equipment",
      "explain how this problem is affecting your work",
      "say what you want the shop or company to do",
    ],
    score: "5.5",
    scoreNote: "四项等权平均 · 准确性需加强",
    criteria: [
      {
        code: "TA",
        name: "Task Achievement",
        nameZh: "任务完成度",
        score: 6,
        feedback:
          "设备问题、对工作的影响和希望商家采取的行动均有覆盖；处理要求可以表达得更清楚、更礼貌。",
      },
      {
        code: "CC",
        name: "Coherence & Cohesion",
        nameZh: "连贯与衔接",
        score: 6,
        feedback:
          "内容按问题、影响和解决办法分段，顺序清楚；But、While 和 Or 的使用不够自然。",
      },
      {
        code: "LR",
        name: "Lexical Resource",
        nameZh: "词汇资源",
        score: 5,
        feedback:
          "有 laptop、office software、online assistance 等相关词汇，但拼写和搭配错误较多。",
      },
      {
        code: "GRA",
        name: "Grammatical Range & Accuracy",
        nameZh: "语法多样性与准确性",
        score: 5,
        feedback:
          "能够尝试时间从句和结果句，但动词结构、介词、代词指代及完整句错误较频繁。",
      },
    ],
    paperLabel: "Formal complaint letter",
    wordCount: 151,
    focus: "动词搭配 · 句子结构 · 正式语气",
    createdAt: "2026-07-29T13:30:00.000Z",
    reviewHtml: `
      <p>Dear Sir or Madam,</p>
      <p>I am writing this letter about the laptop which I bought <span class="change" data-note="表示从某家商店购买使用介词 from"><del>in</del><strong>from</strong></span> your shop last month. There are some <span class="change" data-note="uncertain 表示“不确定的”，不能自然地修饰设备故障"><del>uncertain</del><strong>serious</strong></span> problems with the laptop.</p>
      <p>This laptop <span class="change" data-note="only 应放在 is used 后面，使修饰关系更清楚"><del>is only used</del><strong>is used only</strong></span> <span class="change" data-note="固定表达为 work from home；介词 for 后使用动名词"><del>for my work at home</del><strong>for working from home</strong></span>, <span class="change" data-note="拼写错误：expecially 应为 especially"><del>expecially</del><strong>especially</strong></span> <span class="change" data-note="especially 后补充 for，表示用途"><strong>for </strong></span>running some office software. It is not heavy to carry and I like <span class="change" data-note="surface's colour 搭配不自然；直接使用物主代词 its"><del>the surface's color</del><strong>its colour</strong></span>. <span class="change" data-note="正式信件中使用 However 比 But 更自然"><del>But</del><strong>However,</strong></span> I find <span class="change" data-note="find 后需要 that 从句，主语 it 后的动词使用第三人称单数"><del>it become</del><strong>that it becomes</strong></span> <span class="change" data-note="so slow 在这里没有结果从句，使用 very slow"><del>so slow</del><strong>very slow</strong></span> <span class="change" data-note="with high temperature 搭配不自然；这里应说明电脑开机后过热"><del>after I start it with high temperature</del><strong>and overheats after I switch it on</strong></span>. It is so hot that I <span class="change" data-note="正式信件中避免 can't 等缩写"><del>can't</del><strong>cannot</strong></span> <span class="change" data-note="这里表达无法安全使用键盘，而不是无法正常触摸"><del>touch</del><strong>use</strong></span> the keyboard <span class="change" data-note="描述安全问题使用 safely 比 normally 更准确"><del>normally</del><strong>safely</strong></span>.</p>
      <p><span class="change" data-note="concern 不能表示使用电脑工作；时间应从开始使用电脑计算，因此这部分需要重组"><del>While I concern about my work about one or two hours</del><strong>After I work on it for one or two hours</strong></span>, it <span class="change" data-note="正式信件中避免 can't 等缩写"><del>can't</del><strong>cannot</strong></span> process <span class="change" data-note="这里表示电脑无法处理若干任务，使用 tasks"><del>anything</del><strong>tasks</strong></span> such as <span class="change" data-note="这里应表达编辑在线文档这一工作任务"><del>online documents</del><strong>editing online documents</strong></span>. As a result, I need to restart it and wait <span class="change" data-note="正式写作中较小的数字通常拼写出来"><del>5</del><strong>five</strong></span> minutes <span class="change" data-note="原句会变成由 I 恢复工作；这里应表达等待电脑恢复"><del>to recover my works</del><strong>for it to recover</strong></span>.</p>
      <p>The laptop <span class="change" data-note="must 语气过强；使用 needs to 更适合礼貌提出处理需求"><del>must</del><strong>needs to</strong></span> be checked and I will <span class="change" data-note="把物品带到对方处使用 bring，并补充目的地"><del>take it</del><strong>bring it to your shop</strong></span> <span class="change" data-note="Friday afternoon 前使用 on，不使用 after the"><del>after the Friday afternoon</del><strong>on Friday afternoon</strong></span>. <span class="change" data-note="正式写作中使用 Alternatively 引出另一种选择"><del>Or</del><strong>Alternatively,</strong></span> you <span class="change" data-note="提出建议或请求时，could 比 can 更礼貌"><del>can</del><strong>could</strong></span> provide some online assistance <span class="change" data-note="表示在上述时间之前使用 before then"><del>before this time</del><strong>before then</strong></span>.</p>
      <p>I hope to receive your <span class="change" data-note="拼写错误：replay 表示“重放”，reply 才表示“回复”"><del>replay</del><strong>reply</strong></span> as soon as possible.</p>
      <p><span class="change" data-note="不知道收信人的姓名时，Dear Sir or Madam 应与 Yours faithfully 对应"><del>Yours,</del><strong>Yours faithfully,</strong></span></p>
      <p>Allen</p>
    `,
    cleanHtml: `
      <p>Dear Sir or Madam,</p>
      <p>I am writing this letter about the laptop which I bought from your shop last month. There are some serious problems with the laptop.</p>
      <p>This laptop is used only for working from home, especially for running some office software. It is not heavy to carry and I like its colour. However, I find that it becomes very slow and overheats after I switch it on. It is so hot that I cannot use the keyboard safely.</p>
      <p>After I work on it for one or two hours, it cannot process tasks such as editing online documents. As a result, I need to restart it and wait five minutes for it to recover.</p>
      <p>The laptop needs to be checked and I will bring it to your shop on Friday afternoon. Alternatively, you could provide some online assistance before then.</p>
      <p>I hope to receive your reply as soon as possible.</p>
      <p>Yours faithfully,</p>
      <p>Allen</p>
    `,
  },
  {
    id: "reception-area-improvements",
    taskType: "GENERAL TRAINING · TASK 1",
    title: "公司前台接待区改进建议信",
    question:
      "Visitors to your company have made several complaints about the reception area. Your manager wants you to recommend ways to improve it.",
    instruction: "Write a letter to your manager. In your letter",
    points: [
      "describe the complaints visitors have made",
      "explain why the reception area is important",
      "suggest how the reception area could be improved",
    ],
    score: "5.5",
    scoreNote: "四项等权平均 · 目标 6 分",
    criteria: [
      {
        code: "TA",
        name: "Task Achievement",
        nameZh: "任务完成度",
        score: 6,
        feedback:
          "写信目的明确，三项要求均有涉及，语气基本合适；投诉细节还可以更具体。",
      },
      {
        code: "CC",
        name: "Coherence & Cohesion",
        nameZh: "连贯与衔接",
        score: 6,
        feedback:
          "按投诉、重要性和建议分段，信息顺序清楚；个别句子的衔接略显生硬。",
      },
      {
        code: "LR",
        name: "Lexical Resource",
        nameZh: "词汇资源",
        score: 5,
        feedback:
          "词汇能够传达意思，但不可数名词、词形、拼写和固定搭配错误较多。",
      },
      {
        code: "GRA",
        name: "Grammatical Range & Accuracy",
        nameZh: "语法多样性与准确性",
        score: 5,
        feedback:
          "尝试了定语从句和情态表达，但冠词、主谓、词性及完整句错误较频繁。",
      },
    ],
    paperLabel: "Formal suggestion letter",
    wordCount: 154,
    focus: "不可数名词 · 句子完整性 · 拼写",
    createdAt: "2026-07-29T09:45:00.000Z",
    reviewHtml: `
      <p>Dear Mr Wang,</p>
      <p>I am writing this letter to provide some advice about how to improve the reception area.</p>
      <p>After some <span class="change" data-note="communications 在这里不自然；表示多次交谈用 conversations"><del>communications</del><strong>conversations</strong></span> with our business <span class="change" data-note="后面的 they 指多位合作方，因此 partner 使用复数"><del>partner</del><strong>partners</strong></span>, they gave some <span class="change" data-note="feedback 是不可数名词，不能加 s"><del>feedbacks</del><strong>feedback</strong></span> about the reception area where they <span class="change" data-note="反馈的是已经发生的经历，因此使用过去式 waited"><del>sit</del><strong>waited</strong></span>. Some <span class="change" data-note="complaint 是名词；这里需要过去式动词 complained"><del>complaint</del><strong>complained</strong></span> that we should tidy up <span class="change" data-note="特指公司的接待区，需要补充定冠词 the"><strong>the </strong></span>reception area before visitors arrive. In addition, the signs are not <span class="change" data-note="be 动词后使用形容词 clear，而不是副词 clearly"><del>clearly</del><strong>clear</strong></span> enough <span class="change" data-note="标牌的作用是向访客指示地点，因此用 show"><del>to find</del><strong>to show</strong></span> <span class="change" data-note="特指正确的房间，需要补充定冠词 the"><strong>the </strong></span>correct meeting <span class="change" data-note="meeting room 与 offices 并列时使用复数"><del>room</del><strong>rooms</strong></span> or offices <span class="change" data-note="show something to someone 是固定搭配"><del>for</del><strong>to</strong></span> visitors.</p>
      <p>It is one of <span class="change" data-note="one of 后的最高级前需要定冠词 the"><strong>the </strong></span>most important <span class="change" data-note="one of 后面的可数名词使用复数"><del>place</del><strong>places</strong></span> <span class="change" data-note="places 作 see 的宾语，应使用 that visitors see"><del>where visitors will see</del><strong>that visitors see</strong></span> when they enter the company. A clean and comfortable reception area can create <span class="change" data-note="impression 是可数名词，单数前需要 a"><strong>a </strong></span>good first impression and make visitors feel welcome. It <span class="change" data-note="reflects 已经是谓语动词，前面不能再使用 is"><del>is also reflects</del><strong>also reflects</strong></span> the <span class="change" data-note="拼写错误：manangement 应为 management"><del>manangement</del><strong>management</strong></span> of <span class="change" data-note="特指这家公司，需要补充定冠词 the"><strong>the </strong></span>company.</p>
      <p><span class="change" data-note="原句是句子片段；改用 We should clean 构成完整建议"><del>Cleaning</del><strong>We should clean</strong></span> the reception area <span class="change" data-note="拼写错误：immeditily 应为 immediately"><del>immeditily</del><strong>immediately</strong></span> after visitors leave. Clear signs <span class="change" data-note="拼写错误：sholud 应为 should"><del>sholud</del><strong>should</strong></span> be <span class="change" data-note="被动语态中 be 后使用过去分词 placed"><del>place</del><strong>placed</strong></span> <span class="change" data-note="标牌应放在入口附近的墙上，介词和语序需要调整"><del>in the entrance of the walls</del><strong>on the walls near the entrance</strong></span>. It <span class="change" data-note="情态动词 would 前不需要 is"><del>is would</del><strong>would</strong></span> be helpful to provide drinking water and some company <span class="change" data-note="information 是不可数名词，不能加 s"><del>informations</del><strong>information</strong></span> for visitors when they are waiting.</p>
      <p>I hope you will consider these suggestions.</p>
      <p>Yours sincerely,</p>
      <p>Allen</p>
    `,
    cleanHtml: `
      <p>Dear Mr Wang,</p>
      <p>I am writing this letter to provide some advice about how to improve the reception area.</p>
      <p>After some conversations with our business partners, they gave some feedback about the reception area where they waited. Some complained that we should tidy up the reception area before visitors arrive. In addition, the signs are not clear enough to show the correct meeting rooms or offices to visitors.</p>
      <p>It is one of the most important places that visitors see when they enter the company. A clean and comfortable reception area can create a good first impression and make visitors feel welcome. It also reflects the management of the company.</p>
      <p>We should clean the reception area immediately after visitors leave. Clear signs should be placed on the walls near the entrance. It would be helpful to provide drinking water and some company information for visitors when they are waiting.</p>
      <p>I hope you will consider these suggestions.</p>
      <p>Yours sincerely,</p>
      <p>Allen</p>
    `,
  },
  {
    id: "head-office-request",
    taskType: "GENERAL TRAINING · TASK 1",
    title: "公司总部工作申请信",
    question:
      "You work for an international company, and would like to spend six months working in its head office in another country.",
    instruction: "Write a letter to your manager. In your letter",
    points: [
      "explain why you want to work in the company's head office for six months",
      "say how your work could be done while you are away",
      "ask for his/her help in arranging it",
    ],
    score: "5.5",
    scoreNote: "四项等权平均 · 目标 6 分",
    criteria: [
      {
        code: "TA",
        name: "Task Achievement",
        nameZh: "任务完成度",
        score: 6,
        feedback:
          "申请目的、离开期间的安排和请求帮助均已覆盖；部分内容还可进一步展开。",
      },
      {
        code: "CC",
        name: "Coherence & Cohesion",
        nameZh: "连贯与衔接",
        score: 6,
        feedback:
          "分段合理，信息顺序自然，整体容易理解；少数句子之间的连接较机械。",
      },
      {
        code: "LR",
        name: "Lexical Resource",
        nameZh: "词汇资源",
        score: 5,
        feedback:
          "使用了相关职场词汇，但拼写、词形和固定搭配错误较多，准确性不足。",
      },
      {
        code: "GRA",
        name: "Grammatical Range & Accuracy",
        nameZh: "语法多样性与准确性",
        score: 5,
        feedback:
          "能够尝试从句，但从句结构、单复数、动词形式和冠词错误较频繁。",
      },
    ],
    paperLabel: "Formal request letter",
    wordCount: 170,
    focus: "句型 · 拼写 · 固定搭配",
    createdAt: "2026-07-29T08:30:00.000Z",
    reviewHtml: `
      <p>Dear Mr Wang,</p>
      <p>I am writing <span class="change" data-note="I am writing 后使用 to ask 引出请求"><del>this letter</del><strong>to ask</strong></span> whether it <span class="change" data-note="礼貌询问一种可能性时使用 would"><del>could</del><strong>would</strong></span> be possible for me to work <span class="change" data-note="题目要求申请到公司总部工作，需要明确地点"><del>in another country</del><strong>at the company’s head office in another country</strong></span> for six months.</p>
      <p>I would like to work<span class="change" data-note="work 后补充 there，指代上一段的公司总部"><strong> there</strong></span> because <span class="change" data-note="句中代词不应大写"><del>It</del><strong>it</strong></span> would give me <span class="change" data-note="opportunity 是可数名词，单数前需要 an"><strong>an </strong></span>opportunity to learn more about the business of <span class="change" data-note="这里需要限定词，说明是自己所在的国际公司"><strong>our </strong></span>international company. I could <span class="change" data-note="拼写错误：alse 应为 also"><del>alse</del><strong>also</strong></span> improve my communication <span class="change" data-note="泛指多种沟通技能时使用复数"><del>skill</del><strong>skills</strong></span> with <span class="change" data-note="拼写错误：colleages 应为 colleagues"><del>colleages</del><strong>colleagues</strong></span> <span class="change" data-note="修饰人并引导定语从句时使用 who"><del>those</del><strong>who</strong></span> work <span class="change" data-note="表示在公司总部工作使用 at the head office"><del>in</del><strong>at the</strong></span> head office. <span class="change" data-note="用 This experience 明确指代前面提到的经历"><del>It</del><strong>This experience</strong></span> is <span class="change" data-note="正式信件中使用 very 比 pretty 更合适"><del>pretty</del><strong>very</strong></span> important for my career.</p>
      <p>While I am away, most of my work could be done online. I could attend <span class="change" data-note="泛指多次会议时使用复数"><del>meeting</del><strong>meetings</strong></span> <span class="change" data-note="固定表达为 attend meetings by video call"><del>online by video</del><strong>by video call</strong></span> and answer emails as usual. For work <span class="change" data-note="work 是不可数名词，关系词使用 that"><del>those</del><strong>that</strong></span> <span class="change" data-note="that 指代不可数名词 work，谓语用 needs；被动结构为 needs to be done"><del>need be</del><strong>needs to be</strong></span> done in the office, I <span class="change" data-note="这里是假设的工作安排，使用 could 与前文语气一致"><del>will</del><strong>could</strong></span> train my <span class="change" data-note="拼写错误且 colleague 比 partner 更符合公司同事语境"><del>partener</del><strong>colleague</strong></span>, David, before I leave. <span class="change" data-note="正式信件中用 In addition 衔接补充建议"><del>And</del><strong>In addition,</strong></span> I would prepare <span class="change" data-note="这里应说明给代班同事准备的是清楚的操作说明"><del>documents</del><strong>clear instructions</strong></span> <span class="change" data-note="instructions 后用 explaining 引出说明的内容"><del>about</del><strong>explaining</strong></span> what he <span class="change" data-note="he 是第三人称单数，动词使用 needs"><del>need</del><strong>needs</strong></span>.</p>
      <p>I would be grateful if you could <span class="change" data-note="discuss 后不加 about"><del>discuss about</del><strong>discuss</strong></span> this request with <span class="change" data-note="特指公司总部时需要 the"><del>head office</del><strong>the head office</strong></span> and help <span class="change" data-note="help 后补充宾语 me"><strong>me</strong></span> arrange the necessary documents. Please <span class="change" data-note="固定表达为 let me know，表示请告知我"><del>tell me</del><strong>let me know</strong></span> if you <span class="change" data-note="这里应询问对方是否需要信息，而不是是否拥有信息"><del>have</del><strong>need</strong></span> any <span class="change" data-note="进一步的信息使用 further information"><strong>further </strong></span>information.</p>
      <p>Thank you for considering my request.</p>
      <p><span class="change" data-note="书信落款的固定表达为 Yours，不是 Your"><del>Your</del><strong>Yours</strong></span> <span class="change" data-note="落款中 sincerely 不需要大写"><del>Sincerely</del><strong>sincerely</strong></span>,</p>
      <p>Allen</p>
    `,
    cleanHtml: `
      <p>Dear Mr Wang,</p>
      <p>I am writing to ask whether it would be possible for me to work at the company’s head office in another country for six months.</p>
      <p>I would like to work there because it would give me an opportunity to learn more about the business of our international company. I could also improve my communication skills with colleagues who work at the head office. This experience is very important for my career.</p>
      <p>While I am away, most of my work could be done online. I could attend meetings by video call and answer emails as usual. For work that needs to be done in the office, I could train my colleague, David, before I leave. In addition, I would prepare clear instructions explaining what he needs.</p>
      <p>I would be grateful if you could discuss this request with the head office and help me arrange the necessary documents. Please let me know if you need any further information.</p>
      <p>Thank you for considering my request.</p>
      <p>Yours sincerely,</p>
      <p>Allen</p>
    `,
  },
  {
    id: "hotel-lunch-feedback",
    taskType: "GENERAL TRAINING · TASK 1",
    title: "酒店会议午餐反馈信",
    question:
      "You recently organised an all-day meeting for your company, which took place in a local hotel. In their feedback, participants at the meeting said that they liked the hotel, but they were unhappy about the food that was served for lunch.",
    instruction: "Write a letter to the manager of the hotel. In your letter",
    points: [
      "say what the participants liked about the hotel",
      "explain why they were unhappy about the food",
      "suggest what the manager should do to improve the food in future",
    ],
    score: "6.0",
    scoreNote: "四项等权平均 · 语法需巩固",
    criteria: [
      {
        code: "TA",
        name: "Task Achievement",
        nameZh: "任务完成度",
        score: 6,
        feedback:
          "三个要点均得到明确回应，信件目的和正式语气合适；建议还可更具体。",
      },
      {
        code: "CC",
        name: "Coherence & Cohesion",
        nameZh: "连贯与衔接",
        score: 6,
        feedback:
          "按酒店优点、午餐问题和改进建议分段，逻辑推进清楚，衔接基本自然。",
      },
      {
        code: "LR",
        name: "Lexical Resource",
        nameZh: "词汇资源",
        score: 6,
        feedback:
          "相关词汇范围够用且多数准确；少数表达和搭配仍不够自然。",
      },
      {
        code: "GRA",
        name: "Grammatical Range & Accuracy",
        nameZh: "语法多样性与准确性",
        score: 5,
        feedback:
          "能够写出复合句，但冠词、主谓一致、单复数和句子连接错误仍较明显。",
      },
    ],
    paperLabel: "Formal feedback letter",
    wordCount: 155,
    focus: "冠词 · 单复数 · 固定搭配",
    createdAt: "2026-07-28T08:30:00.000Z",
    reviewHtml: `
      <p>Dear Sir or Madam,</p>
      <p>I am writing about the all-day meeting that I recently organised at your hotel. Although <span class="change" data-note="participants 在这里特指参会者，需要补充定冠词 the"><strong>the </strong></span>participants were pleased with <span class="change" data-note="venue 已经明确，使用 the 而不是 this"><del>this</del><strong>the</strong></span> venue, several of them felt disappointed with the food that was served for lunch.</p>
      <p>Firstly, everyone was satisfied with the hotel itself. The meeting room was clean and well equipped. <span class="change" data-note="正式信件中用 In addition 衔接补充信息"><del>And</del><strong>In addition,</strong></span> the staff were polite and helpful throughout the day. The hotel was conveniently located, which made it easy for everyone to attend <span class="change" data-note="前文已经提到这次会议，因此用 the meeting"><del>this</del><strong>the</strong></span> meeting.</p>
      <p>However, many participants were unhappy with the quality of the food. Some of <span class="change" data-note="some of 后面需要补充定冠词 the"><strong>the </strong></span>hot dishes <span class="change" data-note="dishes 是复数，be 动词使用 were"><del>was</del><strong>were</strong></span> cold when served. <span class="change" data-note="正式信件中用 In addition 衔接补充信息"><del>And</del><strong>In addition,</strong></span> there were not <span class="change" data-note="要表达选择数量不足，应使用 not enough"><del>many</del><strong>enough</strong></span> choices for vegetarian guests. A few participants also thought the lunch portions were rather small, so they were still hungry after lunch.</p>
      <p>I suggest that the hotel serve <span class="change" data-note="固定表达为 serve the food at the correct temperature"><strong>the food at the </strong></span>correct temperature and offer more <span class="change" data-note="表示素食菜品使用 vegetarian dishes"><del>choices for vegetarian</del><strong>vegetarian dishes</strong></span> in <span class="change" data-note="固定表达为 in the future，需要定冠词 the"><strong>the </strong></span>future.</p>
      <p>I hope these suggestions will help improve your <span class="change" data-note="这里泛指酒店整体服务，使用单数"><del>services</del><strong>service</strong></span>.</p>
      <p>Yours faithfully,</p>
      <p>Allen</p>
    `,
    cleanHtml: `
      <p>Dear Sir or Madam,</p>
      <p>I am writing about the all-day meeting that I recently organised at your hotel. Although the participants were pleased with the venue, several of them felt disappointed with the food that was served for lunch.</p>
      <p>Firstly, everyone was satisfied with the hotel itself. The meeting room was clean and well equipped. In addition, the staff were polite and helpful throughout the day. The hotel was conveniently located, which made it easy for everyone to attend the meeting.</p>
      <p>However, many participants were unhappy with the quality of the food. Some of the hot dishes were cold when served. In addition, there were not enough choices for vegetarian guests. A few participants also thought the lunch portions were rather small, so they were still hungry after lunch.</p>
      <p>I suggest that the hotel serve the food at the correct temperature and offer more vegetarian dishes in the future.</p>
      <p>I hope these suggestions will help improve your service.</p>
      <p>Yours faithfully,</p>
      <p>Allen</p>
    `,
  },
  {
    id: "children-free-time",
    taskType: "WRITING · TASK 2",
    title: "儿童集体活动与独处",
    question:
      "Some people say that parents should encourage their children to take part in organised group activities in their free time. Others say that it is important for children to learn how to occupy themselves on their own.",
    instruction: "Discuss both these views and give your own opinion.",
    points: [],
    score: "5.5",
    scoreNote: "四项等权平均 · 论证需深化",
    criteria: [
      {
        code: "TR",
        name: "Task Response",
        nameZh: "任务回应",
        score: 6,
        feedback:
          "讨论了双方观点并给出明确立场；主要观点相关，但部分论证仍较简略。",
      },
      {
        code: "CC",
        name: "Coherence & Cohesion",
        nameZh: "连贯与衔接",
        score: 6,
        feedback:
          "四段结构清楚，观点推进自然，衔接词基本恰当；局部表达略显重复。",
      },
      {
        code: "LR",
        name: "Lexical Resource",
        nameZh: "词汇资源",
        score: 5,
        feedback:
          "具备话题相关词汇，但词性、拼写和搭配错误较多，影响表达准确性。",
      },
      {
        code: "GRA",
        name: "Grammatical Range & Accuracy",
        nameZh: "语法多样性与准确性",
        score: 5,
        feedback:
          "尝试使用复杂句，但从句语序、单复数、冠词和动词形式错误较频繁。",
      },
    ],
    paperLabel: "Discussion essay",
    wordCount: 252,
    focus: "词性 · 从句语序 · 搭配",
    createdAt: "2026-07-27T08:30:00.000Z",
    reviewHtml: `
      <p>Some people believe that parents should encourage their children to join group activities, while others think that children should learn how to spend time by themselves. In my opinion, both types of activities are <span class="change" data-note="importance 是名词，be 动词后需要形容词 important"><del>importance</del><strong>important</strong></span> <span class="change" data-note="固定搭配为 important for children's development"><del>to</del><strong>for</strong></span> children’s development.</p>
      <p>On the one hand, taking part in group activities can help children to improve social skills. In <span class="change" data-note="football 和 badminton 属于体育项目，因此使用 sports"><del>activities</del><strong>sports</strong></span> such as <span class="change" data-note="列举两个项目时使用 and 连接"><del>football, badminton</del><strong>football and badminton,</strong></span> <span class="change" data-note="clubs 不能与体育项目直接并列；改为 other club activities"><del>and other clubs</del><strong>as well as in other club activities</strong></span>, children need to share their ideas, communicate and cooperate with others. They can learn how to <span class="change" data-note="share options 搭配不自然；表达观点使用 express their opinions"><del>share options</del><strong>express their opinions</strong></span>, follow rules and work as part of a team. These skills are important not only in childhood, but also in adult life. In addition, participating in team activities also strengthens their <span class="change" data-note="孩子会与多人建立多种关系，应使用复数"><del>relationship</del><strong>relationships</strong></span> with others and develops a sense of belonging.</p>
      <p>On the other hand, it is also necessary for children to complete tasks by themselves. <span class="change" data-note="正式段落中直接用 If 引出条件句即可"><del>And if</del><strong>If</strong></span> parents arrange <span class="change" data-note="表示父母安排孩子的全部活动，用 all of their children's activities"><del>every part of activities</del><strong>all of their children’s activities</strong></span>, this <span class="change" data-note="这里表示可能造成的影响，使用 may 更准确"><del>would</del><strong>may</strong></span> prevent <span class="change" data-note="用 them 指代前面已经出现的 children，避免重复"><del>children</del><strong>them</strong></span> from discovering <span class="change" data-note="间接疑问句使用陈述语序，不需要 are"><del>what are they truly enjoy</del><strong>what they truly enjoy</strong></span>. For example, reading, drawing and building models can improve their creativity <span class="change" data-note="原表达的逻辑主语会变成 reading、drawing 等活动；改为 without much help from their parents"><del>without depending too much on parents</del><strong>without much help from their parents</strong></span>. Independent activities may also teach children how to solve problems and make decisions by themselves. As a result, they may become more independent and confident.</p>
      <p>In conclusion, both methods are equally important <span class="change" data-note="固定搭配为 important for someone"><del>to</del><strong>for</strong></span> children. Organised group activities can improve their social and teamwork skills, while spending time alone can develop their independence and creativity. Therefore, parents should encourage their children to experience both. A balanced combination of organised and independent activities is likely to be the most <span class="change" data-note="拼写错误：benefitical 应为 beneficial"><del>benefitical</del><strong>beneficial</strong></span> <span class="change" data-note="固定搭配为 beneficial for someone"><del>to</del><strong>for</strong></span> them.</p>
    `,
    cleanHtml: `
      <p>Some people believe that parents should encourage their children to join group activities, while others think that children should learn how to spend time by themselves. In my opinion, both types of activities are important for children’s development.</p>
      <p>On the one hand, taking part in group activities can help children to improve social skills. In sports such as football and badminton, as well as in other club activities, children need to share their ideas, communicate and cooperate with others. They can learn how to express their opinions, follow rules and work as part of a team. These skills are important not only in childhood, but also in adult life. In addition, participating in team activities also strengthens their relationships with others and develops a sense of belonging.</p>
      <p>On the other hand, it is also necessary for children to complete tasks by themselves. If parents arrange all of their children’s activities, this may prevent them from discovering what they truly enjoy. For example, reading, drawing and building models can improve their creativity without much help from their parents. Independent activities may also teach children how to solve problems and make decisions by themselves. As a result, they may become more independent and confident.</p>
      <p>In conclusion, both methods are equally important for children. Organised group activities can improve their social and teamwork skills, while spending time alone can develop their independence and creativity. Therefore, parents should encourage their children to experience both. A balanced combination of organised and independent activities is likely to be the most beneficial for them.</p>
    `,
  },
];
