/* eslint-disable @next/next/no-html-link-for-pages -- plain links are required for reliable Vinext local navigation */

type Comparison = {
  code: string;
  title: string;
  dimensions: Array<{
    title: string;
    entries: Array<{
      label: string;
      text: string;
    }>;
  }>;
};

type UniversalMaterial = {
  code: string;
  title: string;
  chineseIdea: string;
  paragraph: string;
  highlights: string[];
};

const comparisons: Comparison[] = [
  {
    code: "C1",
    title: "老人 vs 年轻人",
    dimensions: [
      {
        title: "生活经验",
        entries: [
          {
            label: "老人生活经验多",
            text: "Older people usually have more life experience and know more about the world. This can help them solve problems.",
          },
          {
            label: "年轻人生活经验少",
            text: "Young people usually have less life experience and may see things in a simpler way.",
          },
        ],
      },
      {
        title: "兴趣爱好",
        entries: [
          {
            label: "老人喜欢舒缓的活动",
            text: "Older people may prefer relaxing activities that fit their habits, such as walking and fishing.",
          },
          {
            label: "年轻人喜欢闹腾的活动",
            text: "Young people may prefer more active things, such as sports, adventure activities and visiting new places.",
          },
        ],
      },
      {
        title: "社交互动",
        entries: [
          {
            label: "老人喜欢面对面",
            text: "Older people may prefer talking face to face and care more about close relationships.",
          },
          {
            label: "年轻人喜欢线上",
            text: "Young people often stay connected through the internet and social media.",
          },
        ],
      },
      {
        title: "对改变的态度",
        entries: [
          {
            label: "老人被动",
            text: "Older people may be less willing to accept change because they are used to their routines. They may accept new ideas more slowly.",
          },
          {
            label: "年轻人主动",
            text: "Young people are often more open to change and more willing to try new ideas.",
          },
        ],
      },
    ],
  },
  {
    code: "C2",
    title: "内向和外向",
    dimensions: [
      {
        title: "问题解决",
        entries: [
          {
            label: "内向人自己解决",
            text: "Introverts may prefer to solve problems by themselves.",
          },
          {
            label: "外向人合作解决",
            text: "Extroverts are more likely to work with others, share ideas and find an answer together.",
          },
        ],
      },
      {
        title: "放松",
        entries: [
          {
            label: "内向人自己待着",
            text: "Introverts often get their energy back by spending time alone and doing personal activities.",
          },
          {
            label: "外向人需要社交",
            text: "Extroverts get energy from spending time with other people. Social activities often make them feel more active and excited.",
          },
        ],
      },
    ],
  },
  {
    code: "C3",
    title: "城市 VS 乡村",
    dimensions: [
      {
        title: "人",
        entries: [
          {
            label: "农村",
            text: "In rural areas, people often feel closer because fewer people live there. They usually know their neighbors better and help each other.",
          },
          {
            label: "城市",
            text: "Many different kinds of people live in cities, so they may have less direct contact with their neighbors. However, they can get help from local groups, online groups or shared services. Some city people may also seem less friendly to their neighbors.",
          },
        ],
      },
      {
        title: "Infrastructure（基础设施）",
        entries: [
          {
            label: "农村",
            text: "The countryside often has basic roads and public services. Roads may be narrower and in worse condition.",
          },
          {
            label: "城市",
            text: "Cities usually have better public services, including public transport, hospitals and schools.",
          },
        ],
      },
      {
        title: "娱乐",
        entries: [
          {
            label: "农村",
            text: "The countryside usually has fewer cultural activities and fewer places for entertainment.",
          },
          {
            label: "城市",
            text: "Cities have more choices, such as theatres, museums, concerts and festivals.",
          },
        ],
      },
      {
        title: "污染",
        entries: [
          {
            label: "农村",
            text: "The countryside usually has cleaner air and less noise. However, farm chemicals may pollute the water, and some areas may lose forests and animal homes.",
          },
          {
            label: "城市",
            text: "Cities often have more noise and air pollution. Factories and power plants may make noise, produce harmful gases and release dirty water.",
          },
        ],
      },
      {
        title: "交通",
        entries: [
          {
            label: "农村",
            text: "The countryside usually has less traffic and fewer cars on the road.",
          },
          {
            label: "城市",
            text: "Cities usually have heavier traffic. This can make journeys longer, increase stress and cause more pollution.",
          },
        ],
      },
    ],
  },
];

const materials: UniversalMaterial[] = [
  {
    code: "M1",
    title: "情绪解压类",
    chineseIdea: "做这件事能让我放松身心、释放压力 → 平复心情、缓解焦虑、改善情绪 → 忙碌后不再疲惫，能享受安静时光。",
    paragraph:
      "Doing this activity is a wonderful way for me to unwind and release daily pressure. It calms my mind, eases my anxiety and lifts my mood after busy study or work. Instead of feeling exhausted, I can relax myself thoroughly and enjoy a peaceful moment in my daily life.",
    highlights: [
      "unwind and release daily pressure",
      "calms my mind",
      "eases my anxiety",
      "lifts my mood",
      "feeling exhausted",
      "enjoy a peaceful moment",
    ],
  },
  {
    code: "M2",
    title: "高效便捷类",
    chineseIdea: "它非常省时高效 → 不受时间地点限制 → 简化日常流程 → 减少等待时间 → 提升整体效率。",
    paragraph:
      "I think it is incredibly time-saving and efficient in my daily life. It provides great convenience with no restrictions on time or location, which greatly simplifies my daily routine. It helps me cut down unnecessary waiting time and improve my overall productivity effortlessly.",
    highlights: [
      "incredibly time-saving and efficient",
      "no restrictions on time or location",
      "simplifies my daily routine",
      "cut down unnecessary waiting time",
      "improve my overall productivity",
    ],
  },
  {
    code: "M3",
    title: "性价比实用类",
    chineseIdea: "它很实用、性价比高 → 平价且物有所值 → 符合日常需求，不浪费收入 → 成为日常首选。",
    paragraph:
      "It is extremely practical and cost-effective for daily use. It is affordable, budget-friendly and offers great value for money. It perfectly fits my daily needs without wasting my income, so it has become my regular choice in everyday life.",
    highlights: [
      "practical and cost-effective",
      "affordable",
      "budget-friendly",
      "great value for money",
      "fits my daily needs",
      "regular choice",
    ],
  },
  {
    code: "M4",
    title: "成长眼界类",
    chineseIdea: "这段经历能开阔眼界、丰富人生阅历 → 学新知识、学新技能、探索未接触过的事物 → 帮助个人成长，形成更开放的视角。",
    paragraph:
      "This experience allows me to broaden my horizons and enrich my life experience. I can acquire new knowledge, learn new skills and explore different things I have never encountered before. It helps me grow personally and develop a more open-minded perspective.",
    highlights: [
      "broaden my horizons",
      "enrich my life experience",
      "acquire new knowledge",
      "learn new skills",
      "explore different things",
      "open-minded perspective",
    ],
  },
  {
    code: "M5",
    title: "社交亲情类",
    chineseIdea: "这是和家人朋友共度高质量时光的好机会 → 加深情感纽带、提升面对面交流 → 拉近人与人之间的距离，让关系更亲近温暖。",
    paragraph:
      "It serves as a great opportunity to spend quality time with my family and friends. It strengthens our emotional bonds and improves face-to-face communication. It shortens the distance between people and makes our relationships much closer and warmer.",
    highlights: [
      "spend quality time",
      "strengthens our emotional bonds",
      "face-to-face communication",
      "shortens the distance between people",
      "relationships much closer and warmer",
    ],
  },
  {
    code: "M6",
    title: "健康生活类",
    chineseIdea: "它对身心健康都有好处 → 保持活力、缓解疲惫、维持健康生活方式 → 防止状态低迷，让日常生活保持良好状态。",
    paragraph:
      "It is highly beneficial to both my physical and mental health. It keeps me energetic, makes me feel less tired and helps me maintain a healthy lifestyle. It prevents me from feeling low on energy and allows me to stay in good condition in my daily routine.",
    highlights: [
      "physical and mental health",
      "keeps me energetic",
      "makes me feel less tired",
      "maintain a healthy lifestyle",
      "feeling low on energy",
      "stay in good condition",
    ],
  },
  {
    code: "M7",
    title: "理性中立弊端类",
    chineseIdea: "虽然它带来便利和乐趣 → 但我会适度理性使用 → 过度使用可能导致分心、上瘾、浪费时间 → 所以要保持平衡生活，避免沉迷。",
    paragraph:
      "Although it brings plenty of convenience and fun, I still use it in a moderate and rational way. Excessive use may lead to distraction, addiction and time waste. Therefore, I always keep a balanced lifestyle and avoid using it too much.",
    highlights: [
      "moderate and rational way",
      "Excessive use",
      "lead to distraction, addiction and time waste",
      "balanced lifestyle",
      "avoid using it too much",
    ],
  },
  {
    code: "M8",
    title: "文化仪式感类",
    chineseIdea: "它承载深厚传统文化和当地习俗 → 给普通生活带来仪式感 → 帮助传承文化遗产 → 让人体验独特地域特色，增强文化认知。",
    paragraph:
      "It carries profound traditional culture and local customs. It brings a strong sense of ritual to ordinary daily life and helps preserve our cultural heritage. It allows people to experience unique local features and enrich their cultural awareness.",
    highlights: [
      "profound traditional culture",
      "local customs",
      "sense of ritual",
      "preserve our cultural heritage",
      "unique local features",
      "cultural awareness",
    ],
  },
  {
    code: "M9",
    title: "拒绝 / 不喜欢 / 很少做类",
    chineseIdea: "我很少做这件事，因为它不是我的喜好 → 它耗时且无聊，不能带来放松或愉悦 → 反而影响学习和日常计划，所以空闲时会尽量避免。",
    paragraph:
      "I rarely do this activity simply because it is not really my cup of tea. I find it time-consuming and boring, and it cannot bring me any relaxation or pleasure. Instead, it usually distracts me from my study and daily plans, so I tend to avoid it in my spare time.",
    highlights: [
      "not really my cup of tea",
      "time-consuming and boring",
      "bring me any relaxation or pleasure",
      "distracts me from my study and daily plans",
      "tend to avoid it",
    ],
  },
];

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlightCoreExpressions(paragraph: string, highlights: string[]) {
  const pattern = new RegExp(
    `(${[...highlights]
      .sort((left, right) => right.length - left.length)
      .map(escapeRegExp)
      .join("|")})`,
    "g",
  );

  return paragraph.split(pattern).map((part, index) =>
    highlights.includes(part) ? <mark key={`${part}-${index}`}>{part}</mark> : part,
  );
}

export default function SpeakingToolkit() {
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
          <a href="/">Part 2 练习</a>
          <a href="/part-3">Part 3 练习</a>
          <a className="active" href="/toolkit" aria-current="page">万能素材</a>
        </nav>
        <div className="saved-state"><i />背诵学习版</div>
      </header>

      <article className="tab-reference toolkit-page">
        <header className="tab-reference-title toolkit-hero">
          <span>IELTS SPEAKING · BAND 5.5–6 · CORE TOOLKIT</span>
          <h1>万能素材工具箱</h1>
          <p>
            一个结构、三类对比，加上九类万能素材。三类对比使用适合 5.5–6 分的易背表达；
            九类素材保留 PDF 原文的完整背诵段落和中文思路，核心表达已在原段落中标出。
          </p>
          <div className="toolkit-stats" aria-label="学习内容统计">
            <span><b>1</b> 个答题结构</span>
            <span><b>3</b> 类对比</span>
            <span><b>9</b> 类完整素材</span>
          </div>
        </header>

        <nav className="toolkit-jump-nav" aria-label="页内导航">
          <a href="#framework">Part 3 结构</a>
          <a href="#comparisons">三类对比</a>
          <a href="#materials">九类素材</a>
        </nav>

        <section className="toolkit-section toolkit-framework" id="framework">
          <header className="toolkit-section-heading">
            <span>01 · ONE ANSWER SHAPE</span>
            <h2>Part 3 统一答题结构</h2>
            <p>先把观点说完，再补原因和例子。有余力时加结果或限定，不追求复杂句。</p>
          </header>
          <div className="toolkit-framework-steps" aria-label="Part 3 答题步骤">
            <div><b>1</b><span>观点</span><p>I think...</p></div>
            <div><b>2</b><span>原因</span><p>The main reason is that...</p></div>
            <div><b>3</b><span>例子</span><p>For example...</p></div>
            <div><b>4</b><span>结果 / 补充</span><p>As a result... / However...</p></div>
          </div>
          <blockquote className="toolkit-model-answer" lang="en">
            <span>简短示范</span>
            I think online learning is useful. The main reason is that it saves time and gives people more flexibility.
            For example, office workers can study after work without travelling to a classroom. As a result, learning becomes easier to fit into daily life.
          </blockquote>
        </section>

        <section className="toolkit-section" id="comparisons">
          <header className="toolkit-section-heading">
            <span>02 · THREE EASY COMPARISONS</span>
            <h2>三类对比</h2>
            <p>保留《13-P3逻辑链》的原有维度和意思，将复杂词汇与长句换成适合 5.5–6 分目标的自然表达。</p>
          </header>
          <div className="toolkit-comparison-list">
            {comparisons.map((comparison) => (
              <article className="toolkit-comparison-card" key={comparison.code}>
                <header><span>{comparison.code}</span><h3>{comparison.title}</h3></header>
                <div className="toolkit-comparison-dimensions">
                  {comparison.dimensions.map((dimension) => (
                    <section className="toolkit-comparison-dimension" key={dimension.title}>
                      <h4>{dimension.title}</h4>
                      <div className="toolkit-comparison-pair">
                        {dimension.entries.map((entry) => (
                          <div key={entry.label}>
                            <span>{entry.label}</span>
                            <p lang="en">{entry.text}</p>
                          </div>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <aside className="toolkit-comparison-warning">
            <strong>表达提醒</strong>
            <div>
              <p>对于一些可能存在偏见的对比，注意最后加一句：</p>
              <blockquote lang="en">
                These ideas may be a little narrow. People should accept different views and change with the times.
              </blockquote>
              <blockquote lang="en">
                We should not judge everyone only by their age, gender or personality.
              </blockquote>
            </div>
          </aside>
          <div className="toolkit-pattern toolkit-comparison-pattern">
            <span>易背对比结构</span>
            <div lang="en">
              <p>Generally speaking, there are several differences between A and B.</p>
              <p>For A, ______. But for B, ______.</p>
              <p>Another difference is that A ______, while B ______.</p>
              <p>So, these are the main differences between them.</p>
            </div>
          </div>
        </section>

        <section className="toolkit-section" id="materials">
          <header className="toolkit-section-heading">
            <span>03 · NINE UNIVERSAL MATERIALS</span>
            <h2>九类万能素材</h2>
            <p>完整保留 PDF 原文的背诵段落和中文思路；绿色高亮为每段需要重点记忆的核心表达。</p>
          </header>
          <div className="toolkit-material-list">
            {materials.map((material) => (
              <article className="toolkit-material-card" key={material.code}>
                <div className="toolkit-material-code">{material.code}</div>
                <div className="toolkit-material-content">
                  <header><h3>{material.title}</h3></header>
                  <div className="toolkit-original-block">
                    <span className="toolkit-block-label">完整背诵段落</span>
                    <blockquote className="toolkit-original-paragraph" lang="en">
                      {highlightCoreExpressions(material.paragraph, material.highlights)}
                    </blockquote>
                  </div>
                  <div className="toolkit-chinese-idea">
                    <span className="toolkit-block-label">中文思路</span>
                    <p>{material.chineseIdea}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="toolkit-study-note" aria-label="学习提醒">
          <strong>学习标准</strong>
          <p>先理解每类的中文思路，再完整背诵英文段落；绿色部分是迁移到其他题目时最值得优先调用的核心表达。</p>
        </section>
      </article>
    </main>
  );
}
