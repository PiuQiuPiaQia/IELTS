"use client";

import { useState } from "react";
import PredictedEssayTabs from "./predicted-essay-tabs";

type EssayMode = {
  id: string;
  name: string;
  includes: string;
  prompt: string;
  goal: string;
  targetWords: string;
  relationship: string;
  taskA: string;
  taskB: string;
  opinionRule: string;
  intro: string;
  bodyOneLead: string;
  bodyOneClose: string;
  bodyTwoLead: string;
  bodyTwoClose: string;
  conclusion: string;
  variants: Array<{
    name: string;
    trigger: string;
    replacements: string[];
  }>;
};

type UniversalParagraph = {
  name: string;
  target: string;
  function: string;
  logic?: string[];
  sharedTemplateLabel?: string;
  sharedTemplate?: string;
  differences: Array<{
    mode: string;
    text: string;
  }>;
};

const explanationBodyLogic = [
  "本段中心答案",
  "解释为什么",
  "具体人群与场景",
  "直接及进一步结果",
  "具体例子",
  "回扣本段任务",
];

const solutionBodyLogic = [
  "行动者",
  "具体措施",
  "怎样实施",
  "直接效果",
  "长期结果",
];

const universalSteps = [
  {
    name: "第 1 段｜引言",
    detail: "改写题干 + 给出两个任务单元 + 必要立场",
  },
  {
    name: "第 2 段｜任务 A",
    detail: "完整展开任务 A，按解释或措施段选择逻辑",
  },
  {
    name: "第 3 段｜任务 B",
    detail: "完整展开任务 B，并在需要时作判断或比较",
  },
  {
    name: "第 4 段｜结论",
    detail: "按原题顺序总结 + 在题目要求时重申立场",
  },
];

const modes: EssayMode[] = [
  {
    id: "stance",
    name: "同侧论证",
    includes: "覆盖：同意不同意 · 个人观点 · 正负发展",
    prompt:
      "Do you agree or disagree? / What is your opinion? / Is this a positive or negative development?",
    goal: "明确选择一个立场，再用两个不同理由支持它。",
    targetWords: "完成填空后约 250—275 词",
    relationship: "两个主体段是同向关系，共同支持一个立场。",
    taskA: "支持立场的理由 1",
    taskB: "支持同一立场的理由 2",
    opinionRule: "5.5 分备考直接选择 agree 或 disagree；引言、两个主体段和结论保持同一立场。",
    intro:
      "People have different views about whether [题干核心观点]. I [agree / disagree] with this view because [理由 1 的概括] and [理由 2 的概括].",
    bodyOneLead: "The first reason why I hold this view is that [理由 1]",
    bodyOneClose: "说明这一结果怎样支持你的立场",
    bodyTwoLead: "Another important reason is that [理由 2]",
    bodyTwoClose: "再次支持你的立场",
    conclusion:
      "In conclusion, I [agree / disagree] that [题干核心观点]. This is because [理由 1 的简短概括] and [理由 2 的简短概括] can [总体结果].",
    variants: [
      {
        name: "正负发展",
        trigger: "Is this a positive or negative development?",
        replacements: [
          "引言改为：[改写题干背景]. I consider this to be an overall positive/negative development because [理由 1 的概括] and [理由 2 的概括].",
          "两个主体段分别写两个 positive 或两个 negative 的理由。",
          "结论再次说明这是 overall positive/negative development。",
        ],
      },
    ],
  },
  {
    id: "comparison",
    name: "双面比较",
    includes: "覆盖：讨论双方 · 普通利弊 · advantages outweigh disadvantages",
    prompt:
      "Discuss both views. / What are the advantages and disadvantages? / Do the advantages outweigh the disadvantages?",
    goal: "分别解释题目的两个方面，再根据题目要求给出个人判断。",
    targetWords: "完成填空后约 255—280 词",
    relationship: "两个主体段是对立或对照关系，必须公平解释两面。",
    taskA: "观点 A 或主要好处",
    taskB: "观点 B 或主要坏处",
    opinionRule: "Discuss both views 和 Outweigh 必须表态；普通利弊题没有要求 opinion 时不强加判断。",
    intro:
      "People have different views about [讨论主题]. Some people believe that [完整概括观点 A / 主要好处], while others argue that [完整概括观点 B / 主要坏处]. Overall, I believe [题目要求的个人判断].",
    bodyOneLead: "The first side is that [完整写出观点 A / 主要好处]",
    bodyOneClose: "说明第一面为什么合理或重要",
    bodyTwoLead: "The other side is that [完整写出观点 B / 主要坏处]",
    bodyTwoClose: "按题目要求写个人判断和最关键理由",
    conclusion:
      "In conclusion, [第一面的简短概括], while [第二面的简短概括]. Overall, I believe [再次写题目要求的个人判断] because [最关键的比较理由].",
    variants: [
      {
        name: "讨论双方",
        trigger: "Discuss both views and give your opinion.",
        replacements: [
          "第一面和第二面分别填写观点 A、观点 B，而不是优点、缺点。",
          "个人意见必须出现在引言、主体二末尾和结论。",
        ],
      },
      {
        name: "普通利弊",
        trigger: "What are the advantages and disadvantages?",
        replacements: [
          "第一面写主要好处，第二面写主要坏处。",
          "引言改为：[讨论主题] has both advantages and disadvantages.",
          "题目没有要求 opinion 时，删除引言和结论中的 Overall 判断句，只客观总结两面。",
        ],
      },
      {
        name: "Outweigh",
        trigger: "Do the advantages outweigh the disadvantages?",
        replacements: [
          "优点和缺点都必须写，不能只写自己支持的一面。",
          "主体一先写较弱的一面，主体二写较强的一面，便于作最终比较。",
          "引言、主体二末尾和结论都要比较影响的重要性、范围或持续时间，不能只冗列利弊。",
        ],
      },
    ],
  },
  {
    id: "two-question",
    name: "两问回答",
    includes: "覆盖：问题解决 · 原因影响 · 任意两个直接问题",
    prompt:
      "What are the causes/problems and solutions? / Why...? What...? / 两个直接问题",
    goal: "按照题目顺序，一个主体段完整回答一个问题。",
    targetWords: "完成填空后约 250—275 词",
    relationship: "两个主体段是并列回答关系，必须严格按题目顺序书写。",
    taskA: "第一问的直接答案",
    taskB: "第二问的直接答案",
    opinionRule: "任一问出现 Do you think、To what extent、How important 或 Is this positive or negative 时，那一问必须直接表态；两问都是评价题时需要两个判断。",
    intro:
      "[题干背景] has become increasingly common in recent years. Regarding the first question, [第一问的简短答案]. As for the second question, [第二问的简短答案].",
    bodyOneLead: "Regarding the first question, [第一问的直接答案]",
    bodyOneClose: "用一句话回扣第一问",
    bodyTwoLead: "As for the second question, [第二问的直接答案]",
    bodyTwoClose: "用一句话回扣第二问",
    conclusion:
      "In conclusion, [第一问答案的简短概括]. At the same time, [第二问答案的简短概括]. These two points directly address [题干背景中的核心问题].",
    variants: [
      {
        name: "原因 + 解决办法",
        trigger: "What are the causes and solutions?",
        replacements: [
          "主体一写：原因 → 为什么出现 → 后果 → 例子。",
          "主体二写：行动者 → 措施 → 怎样执行 → 预期效果。",
        ],
      },
      {
        name: "问题 + 解决办法",
        trigger: "What problems does this cause? What can be done?",
        replacements: [
          "主体一写两个主要问题及其影响。",
          "主体二的措施必须与主体一的问题一一对应。",
        ],
      },
      {
        name: "原因 + 影响",
        trigger: "Why is this happening? What are the effects?",
        replacements: [
          "主体一解释发生原因，主体二解释对个人或社会的影响。",
          "不要在第二段误写解决办法。",
        ],
      },
      {
        name: "评价型两问",
        trigger: "To what extent...? / How important...? / Do you think...?",
        replacements: [
          "哪一问要求判断，引言就要先给哪一问的直接答案；两问都要求评价时需要两个判断。",
          "两个主体段分别支持对应判断，结论按题目顺序重申它们。",
        ],
      },
    ],
  },
];

const explanationBodyTemplate =
  "[本段中心答案]. This is mainly because [进一步解释为什么]. When [具体人群] [相关场景或行动], they can or may [直接结果]. As a result, [进一步影响]. For example, [写一个具体例子]. Therefore, [回扣本段任务].";

const solutionBodyTemplate =
  "[行动者] should [具体措施]. This can be done by [实施方式]. As a result, [直接效果]. In the longer term, [长期结果]. For example, [具体执行场景]. Therefore, [说明这一措施如何解决问题].";

const universalParagraphs: UniversalParagraph[] = [
  {
    name: "第 1 段｜引言",
    target: "35—50 词",
    function: "按题型改写题干 + 必要立场或两个答案",
    differences: modes.map((mode) => ({
      mode: mode.name,
      text: `直接使用：${mode.intro}`,
    })),
  },
  {
    name: "第 2 段｜任务 A",
    target: "80—90 词",
    function: "默认使用解释／论证段；本段是措施时改用上方措施段",
    logic: explanationBodyLogic,
    sharedTemplateLabel: "解释／论证段使用这个句型",
    sharedTemplate: explanationBodyTemplate,
    differences: modes.map((mode) => ({
      mode: mode.name,
      text: `中心句：${mode.bodyOneLead}. 末句回扣：[${mode.bodyOneClose}].`,
    })),
  },
  {
    name: "第 3 段｜任务 B",
    target: "80—95 词",
    function: "默认使用解释／论证段；需要时在末句作判断或比较",
    logic: explanationBodyLogic,
    sharedTemplateLabel: "解释／论证段使用这个句型",
    sharedTemplate: explanationBodyTemplate,
    differences: modes.map((mode) => ({
      mode: mode.name,
      text: `中心句：${mode.bodyTwoLead}. 末句回扣：[${mode.bodyTwoClose}].`,
    })),
  },
  {
    name: "第 4 段｜结论",
    target: "25—35 词",
    function: "总结两个任务单元 + 必要立场",
    differences: modes.map((mode) => ({
      mode: mode.name,
      text: mode.conclusion,
    })),
  },
];

function getFullTemplate() {
  const bodyEngines = [
    `解释／论证段\n逻辑链：${explanationBodyLogic.join(" → ")}\n句型：${explanationBodyTemplate}`,
    `措施段\n逻辑链：${solutionBodyLogic.join(" → ")}\n句型：${solutionBodyTemplate}`,
  ].join("\n\n");

  const paragraphs = universalParagraphs
    .map((paragraph) => {
      const logic = paragraph.logic?.length
        ? `逻辑链：${paragraph.logic.join(" → ")}\n`
        : "";
      const shared = paragraph.sharedTemplate
        ? `${paragraph.sharedTemplateLabel ?? "共同展开句"}：${paragraph.sharedTemplate}\n`
        : "";
      const differences = paragraph.differences
        .map((difference) => `${difference.mode}：${difference.text}`)
        .join("\n");
      return `${paragraph.name}（${paragraph.target}）\n${logic}${shared}题型差异：\n${differences}`;
    })
    .join("\n\n");

  return `主体段引擎\n${bodyEngines}\n\n${paragraphs}`;
}

export default function TaskTwoReferenceTabs() {
  const [copied, setCopied] = useState(false);

  const copyTemplate = async () => {
    try {
      await navigator.clipboard.writeText(getFullTemplate());
      setCopied(true);
      window.setTimeout(() => {
        setCopied(false);
      }, 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <article className="fast-essay-reference">
      <header className="fast-essay-title">
        <h1>大作文 1 套通用框架</h1>
        <p>
          四段结构只记一套；主体段根据任务选择“解释／论证”或“措施”逻辑，题型决定任务 A、任务 B 和是否需要判断。
        </p>
      </header>

      <section className="universal-essay-map" aria-labelledby="universal-essay-heading">
        <header>
          <span>共同骨架</span>
          <h2 id="universal-essay-heading">所有题型都用这四段</h2>
          <p>大多数理由、观点和原因段使用解释／论证逻辑；回答措施时使用行动者到长期结果的措施逻辑。</p>
        </header>
        <ol>
          {universalSteps.map((step) => (
            <li key={step.name}>
              <strong>{step.name}</strong>
              <span>{step.detail}</span>
            </li>
          ))}
        </ol>
        <div className="body-engine-grid" aria-label="主体段两种展开逻辑">
          <article>
            <header>
              <b>解释／论证段</b>
              <span>适用于理由、观点、原因和影响</span>
            </header>
            <p>{explanationBodyLogic.join(" → ")}</p>
            <small>{explanationBodyTemplate}</small>
          </article>
          <article>
            <header>
              <b>措施段</b>
              <span>适用于怎么解决、应该做什么</span>
            </header>
            <p>{solutionBodyLogic.join(" → ")}</p>
            <small>{solutionBodyTemplate}</small>
          </article>
        </div>
      </section>

      <section className="fast-template-section" aria-label="一套完整大作文框架">
        <div className="mode-picker-heading">
          <span>差异一览</span>
          <h2>同一骨架，只替换这些内容</h2>
        </div>
        <div className="mode-overview">
          {modes.map((mode) => (
            <article key={mode.id}>
              <header>
                <h3>{mode.name}</h3>
                <code>{mode.prompt}</code>
                <small>{mode.includes}</small>
              </header>
              <dl>
                <div>
                  <dt>两段关系</dt>
                  <dd>{mode.relationship}</dd>
                </div>
                <div>
                  <dt>任务 A</dt>
                  <dd>{mode.taskA}</dd>
                </div>
                <div>
                  <dt>任务 B</dt>
                  <dd>{mode.taskB}</dd>
                </div>
                <div>
                  <dt>观点规则</dt>
                  <dd>{mode.opinionRule}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        <section
          className="fast-template-panel"
          aria-labelledby="unified-template-heading"
        >
          <header className="fast-template-header">
            <div>
              <span>统一填空框架</span>
              <h3 id="unified-template-heading">完整四段式</h3>
              <code>引言 → 任务 A → 任务 B → 结论</code>
              <small>共同部分只出现一次，不同题型在对应段落下直接标出。</small>
            </div>
            <div>
              <strong>使用方法</strong>
              <p>先看上方差异一览确定任务 A 和 B，再从每段下方选择对应的替换句。</p>
              <b>目标约 250—280 词</b>
            </div>
          </header>

          <div className="paragraph-templates expanded-paragraphs">
            {universalParagraphs.map((paragraph) => (
              <section key={paragraph.name}>
                <header>
                  <div>
                    <h4>{paragraph.name}</h4>
                    <small>{paragraph.target}</small>
                  </div>
                  <span>{paragraph.function}</span>
                </header>
                {paragraph.logic?.length ? (
                  <div className="paragraph-logic-chain" aria-label={`${paragraph.name}逻辑链`}>
                    <b>本段默认逻辑</b>
                    <ol>
                      {paragraph.logic.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ol>
                  </div>
                ) : null}
                {paragraph.sharedTemplate ? (
                  <div className="paragraph-shared-template">
                    <b>{paragraph.sharedTemplateLabel ?? "共同展开句"}</b>
                    <p>{paragraph.sharedTemplate}</p>
                  </div>
                ) : null}
                <div className="paragraph-mode-differences">
                  <b>只在这里不同</b>
                  <dl>
                    {paragraph.differences.map((difference) => (
                      <div key={difference.mode}>
                        <dt>{difference.mode}</dt>
                        <dd>{difference.text}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </section>
            ))}
          </div>

          <div className="template-actions">
            <p>
              复制后替换所有 <strong>[方括号]</strong>。主体段中的每个方括号不要只填一个单词。
            </p>
            <button
              className="template-copy-button"
              type="button"
              onClick={copyTemplate}
            >
              {copied ? "已复制" : "复制通用框架"}
            </button>
          </div>

        </section>
      </section>

      <PredictedEssayTabs />
    </article>
  );
}
