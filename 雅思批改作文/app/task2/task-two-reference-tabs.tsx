"use client";

import { useState } from "react";

type EssayTemplate = {
  id: string;
  name: string;
  includes: string;
  prompt: string;
  goal: string;
  targetWords: string;
  paragraphs: Array<{
    name: string;
    target: string;
    function: string;
    logic?: string[];
    template: string;
  }>;
  variants: Array<{
    name: string;
    trigger: string;
    replacements: string[];
  }>;
};

const templates: EssayTemplate[] = [
  {
    id: "stance",
    name: "单一立场",
    includes: "覆盖：同意不同意 · 个人观点 · 正负发展",
    prompt:
      "Do you agree or disagree? / What is your opinion? / Is this a positive or negative development?",
    goal: "明确选择一个立场，再用两个不同理由支持它。",
    targetWords: "完成填空后约 250—275 词",
    paragraphs: [
      {
        name: "第 1 段｜引言",
        target: "35—45 词",
        function: "改写题干 + 明确立场 + 预告两个理由",
        template:
          "People have different views about [讨论主题]. I [agree / disagree / partly agree] with the idea that [题干核心观点]. My view is mainly based on [理由 1 的概括] and [理由 2 的概括].",
      },
      {
        name: "第 2 段｜理由一",
        target: "80—90 词",
        function: "理由 → 原因 → 作用 → 结果 → 例子 → 回扣",
        logic: [
          "理由 1",
          "为什么成立",
          "怎样发生作用",
          "直接影响",
          "具体例子",
          "回扣立场",
        ],
        template:
          "The first reason why I hold this view is that [理由 1]. This is important because [进一步解释为什么]. When [具体人群] [相关场景或行动], they can [直接影响]. As a result, [进一步的结果]. For example, [写一个生活、工作或学习中的具体例子]. Therefore, [说明这一结果怎样支持你的立场].",
      },
      {
        name: "第 3 段｜理由二",
        target: "80—90 词",
        function: "第二个理由 → 原因 → 作用 → 结果 → 例子 → 回扣",
        logic: [
          "理由 2",
          "为什么成立",
          "怎样发生作用",
          "直接影响",
          "具体例子",
          "回扣立场",
        ],
        template:
          "Another important reason is that [理由 2]. The reason for this is that [进一步解释为什么]. In many cases, [具体人群] may [相关场景或行动], which means that [直接影响]. This can lead to [进一步的结果]. For instance, [写一个具体例子]. For this reason, [再次支持你的立场].",
      },
      {
        name: "第 4 段｜结论",
        target: "25—35 词",
        function: "重申立场 + 概括两个理由",
        template:
          "In conclusion, I [agree / disagree / partly agree] that [题干核心观点]. This is because [理由 1 的简短概括] and [理由 2 的简短概括] can [总体结果].",
      },
    ],
    variants: [
      {
        name: "正负发展",
        trigger: "Is this a positive or negative development?",
        replacements: [
          "引言立场改为：I consider this to be an overall positive/negative development.",
          "两个主体段分别写两个 positive 或两个 negative 的理由。",
          "结论再次说明这是 overall positive/negative development。",
        ],
      },
      {
        name: "部分同意",
        trigger: "To what extent do you agree or disagree?",
        replacements: [
          "只有能清楚说明两种情况时才使用 partly agree。",
          "主体一写同意的部分，主体二写为什么不能完全同意。",
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
    paragraphs: [
      {
        name: "第 1 段｜引言",
        target: "40—50 词",
        function: "改写主题 + 写出两面 + 按要求给判断",
        template:
          "[讨论主题或题干现象] can be considered from two sides. On the one hand, [完整概括观点 A / 主要好处]. On the other hand, [完整概括观点 B / 主要坏处]. Overall, I believe [题目要求的个人判断].",
      },
      {
        name: "第 2 段｜第一面",
        target: "80—90 词",
        function: "A 或好处 → 原因 → 作用 → 结果 → 例子 → 小结",
        logic: [
          "观点 A / 主要好处",
          "为什么合理",
          "怎样发生作用",
          "直接影响",
          "具体例子",
          "说明第一面的价值",
        ],
        template:
          "The first side is that [完整写出观点 A / 主要好处]. The main reason is that [解释为什么]. When [具体人群] [相关场景或行动], they can [直接影响]. As a result, [进一步的结果]. For example, [写一个支持第一面的具体例子]. Therefore, [说明第一面为什么合理或重要].",
      },
      {
        name: "第 3 段｜第二面 + 判断",
        target: "85—95 词",
        function: "B 或坏处 → 原因 → 作用 → 结果 → 例子 → 比较判断",
        logic: [
          "观点 B / 主要坏处",
          "为什么合理",
          "怎样发生作用",
          "直接影响",
          "具体例子",
          "按题目要求作判断",
        ],
        template:
          "The other side is that [完整写出观点 B / 主要坏处]. This is mainly because [解释为什么]. In some situations, [具体人群] may [相关场景或行动], which means that [直接影响]. This can lead to [进一步的结果]. For instance, [写一个支持第二面的具体例子]. Overall, I believe [个人判断及最关键理由].",
      },
      {
        name: "第 4 段｜结论",
        target: "25—35 词",
        function: "总结两面 + 按题目要求重申判断",
        template:
          "In conclusion, [第一面的简短概括], while [第二面的简短概括]. Overall, I believe [再次写题目要求的个人判断] because [最关键的比较理由].",
      },
    ],
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
          "题目没有要求 opinion 时，删除引言和结论中的 Overall 判断句，只客观总结两面。",
        ],
      },
      {
        name: "Outweigh",
        trigger: "Do the advantages outweigh the disadvantages?",
        replacements: [
          "优点和缺点都必须写，不能只写自己支持的一面。",
          "引言、主体二末尾和结论都要明确哪一面 outweighs。",
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
    paragraphs: [
      {
        name: "第 1 段｜引言",
        target: "35—45 词",
        function: "改写背景 + 简短回答两问",
        template:
          "[题干背景] has become increasingly common in recent years. Regarding the first question, [第一问的简短答案]. As for the second question, [第二问的简短答案].",
      },
      {
        name: "第 2 段｜回答第一问",
        target: "80—90 词",
        function: "直接答案 → 原因 → 作用 → 结果 → 例子 → 回扣第一问",
        logic: [
          "直接回答第一问",
          "解释为什么",
          "怎样发生作用",
          "直接结果",
          "具体例子",
          "回扣第一问",
        ],
        template:
          "Regarding the first question, [第一问的直接答案]. The main reason is that [进一步解释为什么]. When [具体人群] [相关场景或行动], they can or may [直接结果]. This can lead to [进一步影响]. For example, [写一个支持第一问答案的具体例子]. Therefore, [用一句话回扣第一问].",
      },
      {
        name: "第 3 段｜回答第二问",
        target: "80—90 词",
        function: "直接答案 → 原因 → 作用 → 结果 → 例子 → 回扣第二问",
        logic: [
          "直接回答第二问",
          "解释为什么",
          "怎样发生作用",
          "直接结果",
          "具体例子",
          "回扣第二问",
        ],
        template:
          "As for the second question, [第二问的直接答案]. This is mainly because [进一步解释为什么]. In many cases, [具体人群或行动者] can [相关行动或措施], which means that [直接结果]. As a result, [进一步影响]. For instance, [写一个支持第二问答案的具体例子]. For this reason, [用一句话回扣第二问].",
      },
      {
        name: "第 4 段｜结论",
        target: "25—35 词",
        function: "按原题顺序总结两个答案",
        template:
          "In conclusion, [第一问答案的简短概括]. At the same time, [第二问答案的简短概括]. These two points directly address [题干背景中的核心问题].",
      },
    ],
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
        name: "第二问要求观点",
        trigger: "Do you think...? / Is this positive or negative?",
        replacements: [
          "引言中的第二个答案必须明确表明个人立场。",
          "主体二全部内容都用于支持这个立场。",
        ],
      },
    ],
  },
];

function getFullTemplate(template: EssayTemplate) {
  return template.paragraphs
    .map((paragraph) => {
      const logic = paragraph.logic?.length
        ? `逻辑链：${paragraph.logic.join(" → ")}\n`
        : "";
      return `${paragraph.name}（${paragraph.target}）\n${logic}${paragraph.template}`;
    })
    .join("\n\n");
}

export default function TaskTwoReferenceTabs() {
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
    document.getElementById(`fast-essay-tab-${nextTemplate.id}`)?.focus();
  };

  return (
    <article className="fast-essay-reference">
      <header className="fast-essay-title">
        <h1>大作文 3 套快速框架</h1>
        <p>
          观点类用“单一立场”，讨论或利弊类用“双面比较”，两个问题用“两问回答”。
        </p>
      </header>

      <section className="fast-template-section" aria-label="选择大作文框架">
        <div className="fast-essay-tabs" role="tablist" aria-label="大作文三套框架">
          {templates.map((template, index) => (
            <button
              id={`fast-essay-tab-${template.id}`}
              key={template.id}
              type="button"
              role="tab"
              aria-selected={activeId === template.id}
              aria-controls={`fast-essay-panel-${template.id}`}
              tabIndex={activeId === template.id ? 0 : -1}
              className={activeId === template.id ? "active" : ""}
              onClick={() => setActiveId(template.id)}
              onKeyDown={(event) => moveTab(event, index)}
            >
              {template.name}
            </button>
          ))}
        </div>

        <section
          id={`fast-essay-panel-${activeTemplate.id}`}
          className="fast-template-panel"
          role="tabpanel"
          aria-labelledby={`fast-essay-tab-${activeTemplate.id}`}
        >
          <header className="fast-template-header">
            <div>
              <span>识别句</span>
              <h3>{activeTemplate.name}</h3>
              <code>{activeTemplate.prompt}</code>
              <small>{activeTemplate.includes}</small>
            </div>
            <div>
              <strong>写作任务</strong>
              <p>{activeTemplate.goal}</p>
              <b>{activeTemplate.targetWords}</b>
            </div>
          </header>

          <div className="paragraph-templates expanded-paragraphs">
            {activeTemplate.paragraphs.map((paragraph) => (
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
                    <b>本段逻辑链</b>
                    <ol>
                      {paragraph.logic.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ol>
                  </div>
                ) : null}
                <p>{paragraph.template}</p>
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
              onClick={() =>
                copyTemplate(
                  activeTemplate.id,
                  getFullTemplate(activeTemplate),
                )
              }
            >
              {copiedId === activeTemplate.id
                ? "已复制"
                : `复制${activeTemplate.name}框架`}
            </button>
          </div>

          <section className="template-variants">
            <h4>按题目要求替换</h4>
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
        </section>
      </section>
    </article>
  );
}
