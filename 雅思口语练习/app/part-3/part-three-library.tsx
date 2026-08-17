"use client";
/* eslint-disable @next/next/no-html-link-for-pages -- plain links are required for reliable Vinext local navigation */

import { partThreeGroups } from "./part-three-data";
import { partThreeTranslations } from "./part-three-translations";

const connectors = [
  "I think", "In my opinion", "I believe", "It depends", "because", "since",
  "For example", "For instance", "such as", "However", "In contrast",
  "On the other hand", "while", "but", "As a result", "Therefore", "Overall", "so",
];

type LogicRole = "观点" | "原因" | "例子/结果" | "对比";

function getLogicRole(sentence: string, index: number): LogicRole {
  if (/for example|for instance|such as/i.test(sentence)) return "例子/结果";
  if (/however|in contrast|on the other hand|\bwhile\b|\bbut\b/i.test(sentence)) return "对比";
  if (/as a result|therefore|\bso\b|this (?:can|helps?|means?|makes?)/i.test(sentence)) return "例子/结果";
  if (/because|since|due to|the reason/i.test(sentence)) return "原因";
  if (index === 0) return "观点";
  if (index === 1) return "原因";
  return "例子/结果";
}

function highlightLogic(text: string) {
  const pattern = new RegExp(`(${connectors.join("|")})`, "gi");
  return text.split(pattern).map((part, index) =>
    connectors.some((connector) => connector.toLowerCase() === part.toLowerCase())
      ? <mark className="logic-connector" key={index}>{part}</mark>
      : part,
  );
}

function splitEnglishSentences(text: string) {
  return text.match(/[^.!?]+[.!?]+|[^.!?]+$/g)?.map((sentence) => sentence.trim()) ?? [text];
}

export default function PartThreeLibrary() {
  const total = partThreeGroups.reduce((sum, group) => sum + group.items.length, 0);

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
          <a className="active" href="/part-3" aria-current="page">Part 3 练习</a>
        </nav>
        <div className="saved-state"><i />押题观点库</div>
      </header>

      <article className="tab-reference">
        <header className="tab-reference-title">
          <span>IELTS SPEAKING · PART 3 · BAND 5.5</span>
          <h1>Part 3 押题问题与简洁答案</h1>
          <p>每题只用5.5分三步模板：直接观点 → 简单原因 → 例子／结果／对比。</p>
        </header>

        <section className="material-panel part-three-panel">
          <header className="material-guide-heading">
            <div>
              <span>留存旧题 & 必考题</span>
              <h2>27组话题 · {total}道原题</h2>
              <p>问题保持题库英文原文；答案使用简单词汇和完整句子。</p>
            </div>
            <div className="fit-counts"><span><b>{total}</b> 参考答案</span></div>
          </header>

          <nav className="part-three-index" aria-label="Part 3话题索引">
            {partThreeGroups.map((group, index) => (
              <a href={`#${group.id}`} key={group.id}>
                <span>{String(index + 1).padStart(2, "0")}</span>{group.partTwo}
              </a>
            ))}
          </nav>

          {partThreeGroups.map((group, groupIndex) => (
            <section className="material-guide-section part-one-group" id={group.id} key={group.id}>
              <header className="part-one-group-heading">
                <div>
                  <span>{group.category} · 关联Part 2：{group.partTwo}</span>
                  <h3>{String(groupIndex + 1).padStart(2, "0")} · {group.title}</h3>
                  <p>六道讨论题依次练习；只记“观点、原因、例子/结果”，不需要逐字背诵。</p>
                </div>
              </header>
              <div className="part-one-list">
                {group.items.map((item, index) => {
                  const words = item.answer.trim().split(/\s+/).length;
                  const translation = partThreeTranslations[item.question];
                  const sentences = splitEnglishSentences(item.answer);
                  return (
                    <article className="part-one-card part-three-card" key={item.question}>
                      <div className="part-one-number">Q{index + 1}</div>
                      <div>
                        <div className="part-three-question-pair">
                          <p className="part-one-question">{item.question}</p>
                          <p className="part-three-question-translation">中文：{translation.question}</p>
                        </div>
                        <div className="part-three-answer-label">
                          <span>5.5分参考答案 · 思路分解</span><b>{words}词</b>
                        </div>
                        <div className="part-three-bilingual-answer">
                          <div className="part-three-english-answer" lang="en">
                            {sentences.map((sentence, sentenceIndex) => {
                              const role = getLogicRole(sentence, sentenceIndex);
                              return (
                                <div className={`logic-line logic-${role}`} key={`${sentence}-${sentenceIndex}`}>
                                  <span className="logic-role">{role}</span>
                                  <p><strong>{highlightLogic(sentence)}</strong></p>
                                </div>
                              );
                            })}
                          </div>
                          <div className="part-three-chinese-answer" lang="zh-CN">
                            <span>中文答案</span>
                            <p>{translation.answer}</p>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}

          <section className="material-guide-section">
            <h3>使用提醒</h3>
            <ul className="notice-list">
              <li>第一句直接给观点，不要先讲很长的背景。</li>
              <li>第二句用 because 或一个简单原因解释。</li>
              <li>第三句补一个例子、结果或对比，说清楚即可。</li>
              <li>练习时允许更换例子，但不要改变答案的核心观点。</li>
            </ul>
          </section>
        </section>
      </article>
    </main>
  );
}
