type AnswerLine = { kind: "通用" | "特殊"; text: string };

const expansions: Record<string, string[]> = {
  "help-solve": [
    "What helped me most was that Alex never made me feel embarrassed about asking a basic question.",
    "He asked me to explain what I had already tried, so we did not waste time repeating the same steps.",
    "Since then, I have become more willing to ask for help when a problem is urgent.",
  ],
  "no-reply": [
    "While I was waiting, I checked my phone several times because I was afraid the problem would affect more users.",
    "I also wrote down the information Alex would need, which helped us start working immediately after he replied.",
    "The experience taught me to leave a clear message instead of sending several short and confusing ones.",
  ],
  "changed-opinion": [
    "Before this experience, I worried that asking questions would make me look inexperienced.",
    "Alex's reaction showed me that experienced people also discuss difficult problems with their teammates.",
    "Now I still try independently first, but I no longer wait too long before asking someone for advice.",
  ],
  "helpful-person": [
    "He does not simply give people the answer; he explains his thinking so they can solve a similar problem next time.",
    "Even when he is busy, he usually finds a few minutes to listen and point people in the right direction.",
    "His attitude makes our team feel friendlier and gives younger engineers more confidence.",
  ],
  "smart-solution": [
    "Before changing anything, he compared the new version with the older one and asked us to reproduce the problem.",
    "This avoided random changes and made every step easy to check.",
    "I later used the same method on another task, and it helped me work more carefully.",
  ],
  teamwork: [
    "During the process, we updated the rest of the team so everyone understood what was happening.",
    "One teammate checked user reports while another prepared a safe way to release the fix.",
    "The clear division of work stopped us from doing the same task twice and helped us finish sooner.",
  ],
  overcome: [
    "The most difficult part was staying calm when I knew real users were waiting for the service.",
    "I wrote down each step, followed Alex's suggestions and continued checking the result instead of giving up.",
    "Later, my manager said I had handled the situation responsibly, which gave me more confidence.",
  ],
  "tech-problem": [
    "Before the fix, several users contacted customer service, so the problem quickly became our most important task.",
    "We made the change in a test environment first because we did not want to create another failure.",
    "After the release, we watched the system for another hour to make sure it stayed stable.",
  ],
  planner: [
    "Alex normally writes the main steps in a shared document and gives each person a clear responsibility.",
    "He also leaves extra time for testing because unexpected problems often appear near the end of a project.",
    "His plans are useful rather than complicated, so other team members are happy to follow them.",
  ],
  decision: [
    "Pausing the feature meant changing the team's schedule, so I first explained the user impact to my manager.",
    "Although nobody likes delaying a release, the team agreed that protecting users was more important than finishing on time.",
    "The decision helped us avoid a larger problem and made the later release much safer.",
  ],
  "changed-plan": [
    "We informed the other teams that the release would be delayed and gave them a new time estimate.",
    "The revised plan included another round of testing and a short review with Alex.",
    "Although the change created extra work that day, it prevented users from facing the same problem again.",
  ],
  "recent-change": [
    "The checklist only contains a few important items, so it does not make my work much slower.",
    "I now check the main user steps, review error messages and ask a teammate to look at risky changes.",
    "This small habit has already helped me find several mistakes before users noticed them.",
  ],
  "short-work-abroad": [
    "Outside work, I would like to try local food and visit a few well-known places at weekends.",
    "Living there briefly would also teach me how to manage daily life in English.",
    "I would prepare by practising workplace English and learning more about the project's goals before leaving China.",
  ],
  "perfect-job": [
    "I would prefer a friendly team where people share ideas instead of competing with one another.",
    "The company should also give engineers enough time to test their work properly.",
    "If the job allowed me to grow without working overtime every day, I could imagine doing it for many years.",
  ],
  "expensive-chair": [
    "Before buying it, I compared several models online and visited a shop to sit in them myself.",
    "The expensive chair also came with a long warranty, so I expected to use it for many years.",
    "This experience taught me that the cheapest choice is not always the best value for something used every day.",
  ],
  "cannot-live-without-chair": [
    "I adjust the height before working and use the armrests when I join long meetings.",
    "At weekends, I sometimes sit there to study English or watch a short video lesson.",
    "Because the chair is used for both work and study, it supports a large part of my daily routine.",
  ],
  "park-recommend": [
    "Families can take children there, while older people often walk slowly around the lake in the morning.",
    "There is no entrance fee, and visitors can easily buy drinks from a small shop nearby.",
    "I have recommended it to several friends, and they all said it was a pleasant place for a quiet afternoon.",
  ],
  "park-quiet": [
    "I normally stay for twenty or thirty minutes and put my phone away while I am sitting there.",
    "The sound of the water and leaves is much softer than the traffic near my office.",
    "After visiting this spot, I usually return home in a better mood and sleep more easily.",
  ],
  "park-smile": [
    "Other visitors nearby also smiled when they saw us chasing the plates across the grass.",
    "Nobody worried about looking silly, and that made the atmosphere friendly and relaxed.",
    "The day reminded me that simple time with friends can be more enjoyable than an expensive activity.",
  ],
  "park-bike-trip": [
    "We would bring water, a small repair kit and some food because there are few shops along the river.",
    "None of us is a serious cyclist, so we would ride slowly and stop whenever someone felt tired.",
    "Planning the trip already makes me excited because we have not travelled together for a long time.",
  ],
  "park-early": [
    "We reached the lake before most visitors arrived and saw the sunlight appear between the trees.",
    "The quiet morning made the familiar park look completely different from its usual busy weekend atmosphere.",
    "I took several photos, and later I was glad that I had not stayed in bed.",
  ],
  "park-news": [
    "The report included a simple map showing where the new path and lights would be built.",
    "Some residents were worried about construction noise, but most comments supported the project.",
    "I hope the local government finishes the work on time and continues protecting the trees around the lake.",
  ],
  "park-nature-person": [
    "Lisa did not criticize my old habits; she explained the environmental effect in a patient and practical way.",
    "She later sent me information about recycling points near our homes.",
    "Because of her encouragement, protecting nature now feels like a normal part of my routine rather than a difficult duty.",
  ],
  "park-new-law": [
    "Clear signs should be placed near entrances so visitors understand the rule before receiving any punishment.",
    "The money from fines could be used to provide more bins and support park workers.",
    "Schools could also explain the law to children, helping good habits develop at an early age.",
  ],
  "park-environment-law": [
    "At first, some people put rubbish in the wrong bins because the signs were not clear enough.",
    "The city later added pictures to the labels, which made the system easier for children and older visitors.",
    "The rule works best when education and convenient facilities are provided together.",
  ],
  "park-boring": [
    "We had travelled for nearly an hour to get there, so the short visit felt like a waste of time.",
    "If the construction information had been clearer online, we would have chosen another place.",
    "I learned to check opening information and recent visitor comments before visiting a new attraction.",
  ],
  "park-drawing-child": [
    "Her parents have put several of her favourite pictures on the wall in her bedroom.",
    "She also watches simple drawing videos and then tries the techniques in her own style.",
    "Although some pictures are not realistic, I never correct every detail because her creativity is more important.",
    "I hope she continues enjoying this hobby as she grows older.",
  ],
  "park-imagination": [
    "We used bright colours and added people enjoying each new facility, which made the picture feel lively.",
    "My niece explained that her future park should be clean, safe and interesting for both children and adults.",
    "Her ideas showed me that imagination can also be used to think about real community problems.",
  ],
  "shanghai-city": [
    "One evening, we walked beside the river and watched the lights appear on both sides of the water.",
    "The streets were busy, but signs in the underground made travelling around the city fairly easy.",
    "The combination of convenient transport, food and different neighbourhoods made the visit suitable for a short holiday.",
  ],
  "shanghai-tall-building": [
    "Before visiting, I had only seen the tower in photographs, so standing beside it made me feel very small.",
    "The lift reached the viewing area surprisingly quickly, and staff explained where the main landmarks were.",
    "I took several photos, but the wide view was much more impressive in person than on my phone screen.",
  ],
  "shanghai-interesting-building": [
    "Before the trip, I thought it might look old-fashioned, but its shape was much more impressive in person.",
    "Many tourists were taking photos from different sides because each angle made the round sections look different.",
    "The building also helped me recognise the Lujiazui area whenever I looked across the river later in the trip.",
  ],
  "shanghai-mall": [
    "We spent about two hours there because the weather outside became rainy that evening.",
    "The restaurant area offered Chinese, Japanese and Western food, so it was easy for both of us to choose something.",
    "Although I do not shop very often, I enjoyed the clean environment and the convenient connection to the underground.",
  ],
  "grandma-grow-plants": [
    "She saves seeds from some vegetables and uses food waste to make simple natural fertilizer.",
    "During hot weather, she waters the plants early in the morning so less water is lost in the sun.",
    "Seeing her work has taught me that gardening needs regular care rather than one day of hard work.",
  ],
  "grandma-energetic-person": [
    "She rarely complains about her age and prefers talking about what she plans to grow next season.",
    "Besides gardening, she walks to a nearby market and sometimes cooks for relatives who visit her.",
    "Her routine is not exciting in a dramatic way, but it is active, independent and full of purpose.",
  ],
  "grandma-learned-skill": [
    "She asked me to practise on a small part of the garden instead of explaining everything at once.",
    "When I made mistakes, she laughed gently and showed me the correct way again.",
    "I have not started my own garden yet, but I can now help her more confidently whenever I visit.",
  ],
  "grandma-family-book": [
    "My parents keep the book in a dry drawer and only take it out on special family occasions.",
    "We have scanned a few pages in case the old paper becomes damaged in the future.",
    "The book has little financial value, but replacing the memories connected with it would be impossible.",
  ],
  "grandma-recent-story": [
    "The pictures are simple and the story is short, so I finished it in only a few minutes.",
    "However, reading the same words as an adult gave me a different understanding of the frightened bird.",
    "I realised that my grandma probably chose the story because she wanted me to become braver and more independent.",
  ],
  "phone-recent-change": [
    "I now leave my phone in another room while eating dinner and try not to look at it during conversations.",
    "The change also gives me more time to read short articles and go for a walk after work.",
    "I occasionally return to my old habits, but the limits help me notice and correct them quickly.",
  ],
  "phone-helped-problem": [
    "Sara did not ask me to follow every suggestion immediately; she encouraged me to begin with one small change.",
    "She checked on me a week later and shared another idea when I said evenings were still difficult.",
    "Her continued support was just as valuable as the book because it made me feel responsible for my progress.",
  ],
  "phone-overcame-difficulty": [
    "The success was not perfect, because I still spend longer online on some weekends.",
    "However, I can now notice the problem and stop instead of losing an entire evening.",
    "For me, that control is a more realistic sign of success than never using social media again.",
  ],
  "phone-advice": [
    "I also suggested replacing the old habit with something specific, such as walking for ten minutes before bed.",
    "Simply removing an app can leave an empty period, so having another activity makes the change easier.",
    "I was careful not to sound judgmental because I knew how frustrating the problem could feel.",
  ],
  "phone-self-study-friend": [
    "Sara recorded her daily screen time for several weeks and compared which changes produced the best result.",
    "She also read online articles when one part of the book was difficult to understand.",
    "Her method showed me that self-study still needs a clear goal, regular practice and honest review.",
  ],
  "phone-encourage-other": [
    "To make the experiment easier, I offered to check our progress together at the end of each day.",
    "We compared screen-time reports and discussed what caused us to open the apps without thinking.",
    "Doing the challenge together made him feel supported rather than controlled.",
  ],
  "phone-screen-time-app": [
    "The weekly report is especially useful because it shows whether my screen time is improving or getting worse.",
    "I can also choose different limits for workdays and weekends, which makes the plan more realistic.",
    "The app is already included on my phone, so it costs nothing and does not require another account.",
  ],
  "phone-not-allowed": [
    "The meeting lasted for nearly two hours, but there was a short break when everyone could check urgent messages.",
    "Knowing that a break was planned made the rule easier to accept.",
    "Since then, I have sometimes used the same idea in ordinary meetings even when phones are not officially banned.",
  ],
  "movie-relaxing-place": [
    "There is a small table beside the sofa where we put drinks, snacks and the television remote control.",
    "The curtains block light from outside, which makes the room comfortable for watching films in the evening.",
    "Because everything I need is nearby, I can relax there without making any special plans or spending money.",
  ],
  "movie-recent-enjoyed": [
    "I particularly liked the relationship between the older intern and the young company owner.",
    "They had very different personalities, but they listened to each other and slowly became good friends.",
    "The film was not full of surprising action, yet its warm message stayed in my mind after it ended.",
  ],
  "movie-disappointed": [
    "The characters also made several strange decisions, so I found it difficult to care about what happened to them.",
    "Online advertisements had shown the best action scenes, and the rest of the film felt much slower.",
    "I would probably read more audience reviews before choosing a similar movie next time.",
  ],
  "singer-famous-person": [
    "I would not expect a long conversation because I know he is very busy and meets many fans.",
    "Even a short meeting and a photograph would be meaningful to me.",
    "I would prepare one clear question beforehand so I would not become too nervous and forget what to say.",
  ],
  "singer-bad-event": [
    "The stage was also difficult to see because many people held their phones above their heads.",
    "There were not enough seats, so we had to stand in the same crowded area for the whole performance.",
    "The experience taught me that a familiar song does not guarantee an enjoyable event when the organisation is poor.",
  ],
};

const wordCount = (lines: AnswerLine[]) =>
  lines
    .map((line) => line.text)
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

export function expandAnswer(id: string, lines: AnswerLine[]): AnswerLine[] {
  const result = [...lines];
  for (const text of expansions[id] ?? []) {
    if (wordCount(result) >= 195) break;
    result.push({ kind: "特殊", text });
  }
  return result;
}
