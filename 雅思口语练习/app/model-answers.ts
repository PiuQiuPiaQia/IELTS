export type ModelAnswerLine = {
  kind: "通用" | "特殊";
  text: string;
};

const common = (text: string): ModelAnswerLine => ({ kind: "通用", text });
const special = (text: string): ModelAnswerLine => ({ kind: "特殊", text });

/*
 * “通用”只表示内容来自同一套 Alex 核心素材，可在多道命中题中原句复用。
 * “特殊”表示为了扣住某一道 cue card 而新增或改变的内容。
 */
const alex = {
  eventOpening:
    "I'd like to talk about something that happened at work about a year ago.",
  personOpening:
    "I'd like to talk about my colleague Alex, who is a senior software engineer on my team.",
  personLink:
    "It involved my colleague Alex, who is a senior software engineer on my team.",
  identity:
    "Alex is patient, calm and always willing to help other people when they have problems at work.",
  release:
    "At that time, our team had just released a new feature, and I was responsible for one part of it.",
  releaseAfterPerson:
    "About a year ago, our team released a new feature, and I was responsible for one part of it.",
  problem:
    "Soon after that, the system became very slow, and some users could not complete their orders.",
  tried:
    "I tried to solve the problem by myself, but I could not find the cause.",
  check:
    "Alex stayed calm and checked the error messages with me step by step.",
  cause:
    "We found that one part of the system was receiving too many requests, so we made a small change and tested it carefully.",
  result:
    "In the end, the system worked normally again, and users could complete their orders.",
  feeling:
    "At first, I felt stressed and worried. However, I felt relieved after we solved the problem.",
  lesson:
    "This experience taught me that asking for help is not a weakness and that teamwork can save a lot of time.",
};

/*
 * “通用”只表示内容来自同一套公园核心素材。日常散步、湖边长椅、
 * 野餐、骑车、环保活动和翻新消息都是素材库中的固定模块。
 */
const park = {
  placeOpening:
    "I'd like to talk about a small park near my home.",
  experienceOpening:
    "I'd like to talk about an experience I had in a small park near my home.",
  bikeOpening:
    "I'd like to talk about a bike trip I took to a small park near my home.",
  earlyOpening:
    "I'd like to talk about a Saturday when I got up early to visit a park near my home.",
  newsOpening:
    "I'd like to talk about a piece of local news about a small park near my home.",
  lisaOpening:
    "I'd like to talk about my friend Lisa, who cares a lot about nature.",
  lisaConnection:
    "She lives near me and often takes part in environmental activities in our local park.",
  newLawOpening:
    "I'd like to talk about a new rule that I think would help keep public parks clean.",
  existingLawOpening:
    "I'd like to talk about an environmental rule that is used in public parks in my city.",
  lawConnection:
    "My idea comes from a small park near my home, which I visit almost every week.",
  boringOpening:
    "I'd like to talk about a disappointing visit to a small park near my home.",
  location:
    "It is only a ten-minute walk away, so it is very convenient for me to visit.",
  appearance:
    "The park has green grass, tall trees, a small lake and several wooden benches.",
  routine:
    "I usually go there after work or at weekends and walk slowly around the lake.",
  relaxing:
    "I often listen to music or sit quietly on a bench, which helps me forget about work and clear my mind.",
  quietBench:
    "My favourite part is a wooden bench under a large tree, away from the main road.",
  picnic:
    "Last spring, I had a picnic there with three close friends under a large tree.",
  picnicDetails:
    "We brought some food and drinks, talked for several hours, told jokes and took a few photos.",
  bike:
    "I set off early in the morning and cycled to the park before the weather became hot.",
  bikeDetails:
    "We rode along a quiet road, walked beside the lake and ate a simple breakfast on the grass.",
  cleanUp:
    "I also joined a community clean-up organised by my friend Lisa, and we collected and sorted rubbish in the park.",
  news:
    "The news said that the local government plans to add a cycling path, more benches and better recycling bins.",
  value:
    "Although it is not a famous place, it has become an important part of my daily life.",
  feeling:
    "Whenever I leave the park, I usually feel calmer, happier and more energetic.",
};

export const modelAnswersDetailed: Record<string, ModelAnswerLine[]> = {
  "help-solve": [
    common(alex.eventOpening),
    common(alex.personLink),
    common(alex.release),
    common(alex.problem),
    special(
      "I first spent about an hour trying to deal with it alone. When that did not work, I asked Alex for help.",
    ),
    common(alex.check),
    common(alex.cause),
    special(
      "He explained each step clearly and encouraged me to share my own ideas.",
    ),
    common(alex.result),
    special(
      "I felt relieved and very grateful because his help saved us time and also taught me a better way to deal with similar problems.",
    ),
  ],
  "no-reply": [
    common(alex.eventOpening),
    common(alex.personLink),
    common(alex.release),
    common(alex.problem),
    special(
      "Because the problem was urgent, I sent Alex a message immediately, explained what had happened and asked him to call me.",
    ),
    special(
      "However, he did not reply for nearly two hours. While I was waiting, I checked my phone many times and became increasingly anxious.",
    ),
    special(
      "When he finally replied, he said that he had been in a long meeting and that his phone had been on silent.",
    ),
    common(alex.check),
    common(alex.result),
    special(
      "At first, I was frustrated, but I felt relieved when I understood the reason for the delay and received his help.",
    ),
  ],
  "changed-opinion": [
    common(alex.eventOpening),
    special(
      "Before this happened, I believed that a good engineer should solve every problem alone.",
    ),
    common(alex.release),
    common(alex.problem),
    common(alex.tried),
    common(alex.check),
    common(alex.cause),
    common(alex.result),
    special(
      "After working with Alex, I realised that two people can see a problem from different angles and reach a safer answer more quickly.",
    ),
    special(
      "My opinion changed completely. I now believe that asking for help is responsible, and I communicate with my teammates much earlier.",
    ),
  ],
  "helpful-person": [
    common(alex.personOpening),
    common(alex.identity),
    special(
      "He often gives useful advice and helps new team members understand our system.",
    ),
    common(alex.releaseAfterPerson),
    common(alex.problem),
    common(alex.check),
    common(alex.cause),
    common(alex.result),
    special(
      "I think he helps people because he enjoys sharing his experience and believes that the whole team becomes stronger when people support one another.",
    ),
    special(
      "I admire him and hope I can become a helpful colleague like him.",
    ),
  ],
  "smart-solution": [
    common(alex.personOpening),
    common(alex.releaseAfterPerson),
    common(alex.problem),
    special(
      "Instead of changing many things at once, Alex first looked at the error messages and then checked each part of the system in a clear order.",
    ),
    common(alex.cause),
    special(
      "His method was smart because it reduced the number of possible causes and prevented us from creating a second problem.",
    ),
    common(alex.result),
    special(
      "I was impressed by how calm and clear-minded he was. Since then, I have tried to follow the same step-by-step method in my own work.",
    ),
  ],
  teamwork: [
    common(alex.eventOpening),
    common(alex.personLink),
    common(alex.release),
    common(alex.problem),
    special(
      "We divided the work clearly. I checked the error messages while Alex reviewed the recent changes, and another teammate tested the ordering process.",
    ),
    special(
      "We kept sharing what we found, so everyone understood the situation and nobody repeated the same task.",
    ),
    common(alex.cause),
    common(alex.result),
    common(alex.feeling),
    special(
      "I enjoyed working as part of the team because we trusted one another and used our different skills to solve the problem.",
    ),
  ],
  overcome: [
    special(
      "The person I want to talk about is actually me, and the difficulty was a serious problem at work.",
    ),
    common(alex.releaseAfterPerson),
    common(alex.problem),
    common(alex.tried),
    special(
      "Although I felt under pressure, I did not give up or leave the problem to someone else.",
    ),
    special(
      "I organised the information I had found, asked Alex for advice and continued working with him until we understood the cause.",
    ),
    common(alex.cause),
    common(alex.result),
    special(
      "I felt proud because I took responsibility, kept trying and learned how to deal with a similar situation more confidently.",
    ),
  ],
  "tech-problem": [
    special(
      "I'd like to talk about a technology problem I had at work about a year ago.",
    ),
    common(alex.release),
    common(alex.problem),
    special(
      "It was serious because customers could not use an important part of our online service.",
    ),
    common(alex.check),
    common(alex.cause),
    special(
      "After making the change, we repeated several simple tests and asked another teammate to check the ordering process from a user's point of view.",
    ),
    common(alex.result),
    common(alex.feeling),
    special(
      "The experience reminded me that even a small technical problem can affect many people, so careful testing is extremely important.",
    ),
  ],
  planner: [
    common(alex.personOpening),
    common(alex.identity),
    special(
      "Alex is especially good at making practical work plans. Before a new feature is released, he writes down the main tasks and gives each person a clear responsibility.",
    ),
    special(
      "He also prepares a simple checklist, leaves enough time for testing and thinks about possible problems in advance.",
    ),
    common(alex.releaseAfterPerson),
    common(alex.problem),
    special(
      "When this problem appeared, he quickly divided the work into three stages: checking the messages, changing the system and testing the result.",
    ),
    common(alex.cause),
    special(
      "His plan helped us solve the problem without wasting time. I think he plans well because his ideas are clear, realistic and easy to follow.",
    ),
  ],
  decision: [
    common(alex.eventOpening),
    common(alex.release),
    common(alex.problem),
    special(
      "I had to decide whether to keep the feature online or pause it while we looked for the cause.",
    ),
    special(
      "I decided to pause it because I did not want more users to have the same problem, even though this would delay our original schedule.",
    ),
    common(alex.check),
    common(alex.cause),
    common(alex.result),
    special(
      "My manager later agreed that pausing the feature had been the safest and most responsible choice.",
    ),
    special(
      "I felt nervous when I made the decision, but afterwards I felt relieved and became more confident about taking responsibility at work.",
    ),
  ],
  "changed-plan": [
    common(alex.eventOpening),
    common(alex.release),
    special(
      "Before the problem appeared, our plan had been to finish the release in the morning and begin another task that afternoon.",
    ),
    common(alex.problem),
    special(
      "Because of the problem, we changed the plan immediately. We paused the feature and used the rest of the day to investigate it.",
    ),
    common(alex.check),
    common(alex.cause),
    special(
      "We also added another round of testing and moved the next task to the following day.",
    ),
    common(alex.result),
    special(
      "At first, I was disappointed that our schedule had changed. However, the new plan prevented a bigger problem, so I felt it was worthwhile.",
    ),
  ],
  "recent-change": [
    common(alex.eventOpening),
    common(alex.release),
    common(alex.problem),
    common(alex.tried),
    common(alex.check),
    common(alex.cause),
    common(alex.result),
    special(
      "After that experience, I changed the way I prepare my work. I now use a short checklist before every release and test the most important actions twice.",
    ),
    special(
      "I also ask teammates for advice earlier instead of waiting until I have tried every possible answer by myself.",
    ),
    special(
      "This change has made me more organised and confident. It also helps me find mistakes earlier and work more smoothly with other people.",
    ),
  ],
  "park-recommend": [
    common(park.placeOpening),
    common(park.location),
    common(park.appearance),
    common(park.routine),
    common(park.relaxing),
    common(park.picnic),
    common(park.picnicDetails),
    special(
      "I would recommend it because it is peaceful, clean, free to enter and suitable for people of different ages.",
    ),
    special(
      "Visitors can exercise, spend time with friends or simply enjoy some quiet time without travelling far from the city.",
    ),
    common(park.value),
    common(park.feeling),
  ],
  "park-quiet": [
    common(park.placeOpening),
    common(park.location),
    common(park.appearance),
    common(park.quietBench),
    special(
      "I found this quiet corner by chance when I was walking alone one evening. Only a few people were nearby, and the lake was completely still.",
    ),
    common(park.routine),
    common(park.relaxing),
    special(
      "I especially like hearing the birds and looking at the water because nobody interrupts me and I can organise my thoughts.",
    ),
    common(park.value),
    common(park.feeling),
  ],
  "park-smile": [
    common(park.experienceOpening),
    common(park.location),
    common(park.appearance),
    common(park.picnic),
    common(park.picnicDetails),
    special(
      "One of those stories was about a mistake a friend had made at work, and all of us started laughing.",
    ),
    special(
      "A little later, we tried to take a group photo, but the wind blew some paper plates across the grass. The photo looked very funny.",
    ),
    special(
      "I smiled because I had not seen those friends for several months and I felt completely relaxed around them.",
    ),
    common(park.value),
    common(park.feeling),
  ],
  "park-bike-trip": [
    common(park.bikeOpening),
    common(park.location),
    common(park.appearance),
    special(
      "I went with two close friends, and we met at about seven o'clock near my home.",
    ),
    common(park.bike),
    special(
      "We chose a longer route along the river because the view was better.",
    ),
    common(park.bikeDetails),
    special(
      "The journey was not very long, but I felt a little tired because I had not ridden a bike for several months.",
    ),
    common(park.routine),
    special(
      "I enjoyed the fresh air, the view and the chance to talk with my friends without thinking about work.",
    ),
    common(park.feeling),
  ],
  "park-early": [
    common(park.earlyOpening),
    common(park.location),
    common(park.appearance),
    special(
      "I got up at about six o'clock that morning because my friends and I wanted to arrive before the summer weather became too hot.",
    ),
    common(park.bike),
    common(park.bikeDetails),
    special(
      "At first, I felt sleepy and did not want to leave my bed. However, the cool air and the quiet lake quickly woke me up.",
    ),
    common(park.routine),
    special(
      "Getting up early also meant that the park was almost empty, so the whole experience felt peaceful and special.",
    ),
    common(park.feeling),
  ],
  "park-news": [
    common(park.newsOpening),
    common(park.location),
    special(
      "I saw it on a local mobile app a few weeks ago while I was checking the news after work.",
    ),
    common(park.news),
    special(
      "It also said that the path around the lake would become safer and that more lights would be added.",
    ),
    common(park.routine),
    special(
      "I found the news interesting because I visit the park almost every week, so these changes will directly improve a place I already use.",
    ),
    special(
      "The new path will help cyclists, while the extra benches and bins will make the park more comfortable and cleaner for local families.",
    ),
    special(
      "I felt pleased and excited when I read the news, and I look forward to seeing the finished improvements.",
    ),
  ],
  "park-nature-person": [
    common(park.lisaOpening),
    common(park.lisaConnection),
    special(
      "In her daily life, she avoids single-use plastic, sorts her rubbish and usually rides a bike instead of driving.",
    ),
    common(park.cleanUp),
    special(
      "She invited local residents to join, prepared bags and gloves, and explained how to separate recyclable waste.",
    ),
    special(
      "By the end of the activity, we had filled several bags, and the area around the lake looked much cleaner.",
    ),
    special(
      "Lisa does these things because she wants children, residents and animals to have a cleaner and safer environment.",
    ),
    special(
      "I admire her because she takes practical action instead of only talking about environmental problems.",
    ),
    special(
      "She has also encouraged me to sort my own rubbish more carefully and use less plastic in daily life.",
    ),
  ],
  "park-new-law": [
    common(park.newLawOpening),
    common(park.lawConnection),
    special(
      "More specifically, I would like a stricter rule against leaving rubbish in public parks and other green spaces.",
    ),
    common(park.routine),
    special(
      "However, I sometimes see bottles, food boxes and plastic bags left on the grass after busy weekends.",
    ),
    special(
      "People who leave bottles, food boxes or plastic bags behind should pay a fine or take part in a community clean-up.",
    ),
    common(park.cleanUp),
    special(
      "I support this idea because rubbish makes the park unpleasant, costs money to remove and may harm birds or other animals.",
    ),
    special(
      "The law would benefit local residents, children, park workers and wildlife, while also encouraging people to develop better habits.",
    ),
    special(
      "Overall, I would strongly support this rule because public green spaces belong to everyone and should be kept clean.",
    ),
  ],
  "park-environment-law": [
    common(park.existingLawOpening),
    common(park.lawConnection),
    special(
      "It requires people to sort rubbish into recyclable waste and general waste.",
    ),
    special(
      "It was introduced because mixed rubbish made recycling difficult and caused more pollution in public places.",
    ),
    special(
      "Different bins now have clear signs, and visitors are expected to put each item in the correct one. People may receive a small fine if they ignore the rule.",
    ),
    common(park.appearance),
    common(park.routine),
    special(
      "I have noticed that the area around the lake looks cleaner than before, so I think the rule is having a positive effect.",
    ),
    special(
      "In my opinion, it is a useful rule because it is simple to follow and encourages people to take more responsibility for the environment.",
    ),
  ],
  "park-boring": [
    common(park.boringOpening),
    common(park.location),
    common(park.appearance),
    common(park.routine),
    special(
      "This happened about six months ago, when most of the park was being repaired.",
    ),
    special(
      "The path around the lake, the activity area and several benches were closed, so I could not do the things I normally enjoy there.",
    ),
    special(
      "The weather was also cold and rainy. My friend and I simply waited under a small shelter and looked at our phones.",
    ),
    special(
      "There was almost nothing to do, and the park looked very different from usual, so both of us felt disappointed.",
    ),
    special(
      "In the end, we left after about half an hour. It was only one bad visit, but it was definitely boring.",
    ),
    special(
      "I still like the park in general, but that particular visit was disappointing and not something I would like to repeat.",
    ),
  ],
};
