"use client";

import Link from "next/link";

type Item = { question: string; answer: string; note?: string };
type Group = { id: string; tab: string; title: string; description: string; items: Item[] };

const groups: Group[] = [
  {
    id: "crowded", tab: "拥挤场所", title: "Crowded places", description: "保留题：当时练过的最终简洁版本。", items: [
      { question: "Do you like crowded places?", answer: "Honestly, I don't really like crowded places because they make me feel tired. I prefer quiet places where I can relax and talk with my friends." },
      { question: "When was the last time you were in a crowded place?", answer: "Last week, I went to a shopping mall near my home. It was really crowded because many shops were having sales. I had to wait in line for quite a while." },
      { question: "Why do some places get crowded?", answer: "Some places, like shopping malls and tourist spots, are really popular, so they attract a lot of people and become crowded." },
      { question: "Are crowded places more lively or more annoying?", answer: "I think crowded places are more annoying because they're noisy and stressful. I usually prefer quiet places where I can relax." },
    ],
  },
  {
    id: "reading", tab: "阅读", title: "Reading", description: "阅读题组：按当时练习的工作与小说素材整理。", items: [
      { question: "Do you like reading?", answer: "Yes, I like reading. I usually read technical books related to my work, but I also enjoy novels. Reading helps me learn new things and relax at the same time." },
      { question: "What kind of books do you like?", answer: "I prefer technical books and novels because I can learn new things and relax at the same time." },
      { question: "Do you read more now than as a child?", answer: "No, not really. I used to enjoy reading storybooks and novels when I was a child. However, these days I spend more time on my phone, so I don't read as much as I used to." },
      { question: "Is reading important?", answer: "Yes, I think reading is very important because it helps me learn new things and improve my professional skills." },
    ],
  },
  {
    id: "morning", tab: "早晨", title: "Morning time", description: "早晨习惯题组。", items: [
      { question: "Are you a morning person?", answer: "No, I'm not really a morning person. I usually get up late because I feel more awake in the evening." },
      { question: "What's your morning routine?", answer: "In the morning, I usually wash my face to wake myself up, then have breakfast before going to work." },
      { question: "Do you eat breakfast every day?", answer: "Not really. If I get up late, I usually just grab some bread and a cup of milk before going to work. It's quick and convenient." },
      { question: "Has your morning changed in recent years?", answer: "Yes, a little. I used to get up later when I was a student, but now I have a regular job, so I have to get up early and follow a fixed routine." },
    ],
  },
  {
    id: "life", tab: "人生阶段", title: "Life stages", description: "人生阶段题组。", items: [
      { question: "Which stage of life do you enjoy most?", answer: "I enjoyed my student days most because I learned practical skills and knowledge that helped me find a good job." },
      { question: "What's the happiest time so far?", answer: "The happiest time so far was probably my university years. I had more free time and spent a lot of time with my friends. We studied together and enjoyed a simple but happy life." },
      { question: "Do older people enjoy life more than young people?", answer: "I don't think so, because young people usually have more free time and energy to enjoy life, while older people often have more responsibilities, so they may have less time to relax." },
      { question: "What stage do you look forward to?", answer: "I look forward to the time when my career is more stable. I hope I can have more free time to travel and spend time with my family and friends." },
    ],
  },
  {
    id: "food", tab: "食物", title: "Food", description: "食物题组。", items: [
      { question: "What's your favourite food?", answer: "My favourite food is hotpot because I can choose different ingredients and share it with my friends. It's warm, tasty, and perfect for a cold day." },
      { question: "Do you like cooking?", answer: "Yes, I do. I enjoy cooking simple meals at home, especially noodles or fried rice. It helps me relax after a busy day." },
      { question: "Do you eat out often?", answer: "Yes, quite often. I usually eat out about twice a week, especially when I'm busy at work. It's convenient, and I can try different kinds of food." },
      { question: "Has Chinese food changed in recent years?", answer: "Yes, I think Chinese food has changed a lot in recent years. There are more different kinds of restaurants now, including healthier options and food from other countries. People also care more about the quality of food." },
    ],
  },
  {
    id: "sports", tab: "团队运动", title: "Team sports", description: "团队运动题组。", items: [
      { question: "Do you like team sports?", answer: "Yes, I do. I like team sports because they are fun and help people work together. I especially enjoy playing badminton with my friends at weekends." },
      { question: "Did you play in a team at school?", answer: "Yes, I did. I played basketball in my school team for a year. It was a great experience and I made a lot of friends." },
      { question: "Do you prefer watching or playing team sports?", answer: "I prefer playing team sports because it helps me stay active and spend time with my friends. Watching sports is fun too, but I enjoy being part of the game more." },
      { question: "Is teamwork important?", answer: "Yes, I think teamwork is very important. People can share ideas and help each other solve problems. It also makes work more efficient." },
    ],
  },
  {
    id: "walking", tab: "步行", title: "Walking", description: "步行题组。", items: [
      { question: "Do you walk a lot?", answer: "Yes, I do. I usually take a walk in a park near my home after a busy day at work. It helps me relax and clear my mind." },
      { question: "Did you walk more in the past?", answer: "Yes, I did. When I was a student, I often walked to school or around campus with my friends. Now I usually take public transport because I'm busier." },
      { question: "Where do you usually walk?", answer: "I usually walk around a park near my home, which is about a ten-minute walk away." },
      { question: "Is walking a good exercise?", answer: "Yes, I think walking is a good form of exercise because it's simple and easy to do. It helps people stay healthy without needing any special equipment." },
    ],
  },
  {
    id: "childhood", tab: "童年活动", title: "Childhood activities", description: "童年活动题组。", items: [
      { question: "What did you do as a child?", answer: "When I was a child, I often played outside with my friends and wrote short stories at home. These activities made my childhood fun and memorable." },
      { question: "Did you play outside often?", answer: "Yes, I did. I often played outside with my friends after school, especially in the park near my home. We usually played games and stayed there until dinner time." },
      { question: "Did your parents play with you?", answer: "Yes, they did, especially at weekends. My parents often took me to the park or played simple board games with me at home. I really enjoyed that time with them." },
      { question: "Are childhood activities different now from before?", answer: "Yes, I think they are quite different now. In the past, children spent more time playing outside with friends, but now many of them use phones or computers at home. Technology has changed the way they spend their free time." },
    ],
  },
  {
    id: "hobby", tab: "爱好", title: "Hobby", description: "爱好题组。", items: [
      { question: "What's your hobby?", answer: "My favourite hobby is playing computer games at home because after a busy day at work, it helps me relax and clear my mind." },
      { question: "When did you start it?", answer: "I started playing computer games when I was in primary school. At first, I only played simple games with my friends, but later it became one of my favourite ways to relax." },
      { question: "Has your hobby changed over time?", answer: "Yes, it has changed a little. When I was younger, I mostly played simple games with my friends. Now I prefer playing more relaxing games at home after work." },
      { question: "Should kids have hobbies?", answer: "Yes, I think kids should have hobbies. Hobbies can help them relax, learn new skills, and make friends. They can also help children find out what they are really interested in." },
    ],
  },
  {
    id: "gifts", tab: "礼物", title: "Gifts", description: "礼物题组。", items: [
      { question: "Do you like giving gifts?", answer: "Yes, I do. I like giving gifts because it's a nice way to show that I care about someone. I usually choose something small but useful for my friends or family." },
      { question: "Do you prefer giving or receiving?", answer: "I prefer giving gifts because I enjoy seeing other people happy. It feels more meaningful when I choose something that they really like." },
      { question: "What was the last gift you gave?", answer: "The last gift I gave was an electric toothbrush for a friend. I chose it because it's useful in daily life, and I thought they would like it." },
      { question: "Are gifts important in your culture?", answer: "Yes, they are. Giving gifts is an important way to show care and respect for friends and family in my culture." },
    ],
  },
  {
    id: "pets", tab: "宠物", title: "Pets and animals", description: "宠物题组。", items: [
      { question: "Do you have a pet?", answer: "Yes, I do. I have a little cat that is about three years old. It's very cute and keeps me company at home." },
      { question: "Did you have pets as a kid?", answer: "No, I didn't. My parents thought having a pet was too much responsibility when I was young. However, I often played with my friends' pets and really enjoyed it." },
      { question: "What animals do you like?", answer: "I'm a big fan of cats because they're cute, independent, and easy to take care of. I also enjoy spending time with my own cat at home." },
      { question: "Are pets good for children?", answer: "Yes, I think pets are good for children. They can teach children how to care for others and be responsible. Pets can also be good companions and make children feel happier." },
    ],
  },
  {
    id: "work", tab: "职业与规划", title: "Work or studies", description: "软件工程师工作线：职位、技术、兴趣与未来计划。", items: [
      { question: "Do you work or study?", answer: "I'm currently working full-time as a software developer, mainly focusing on developing new features and improving existing products." },
      { question: "What work do you do?", answer: "I'm currently working full-time as a software developer, mainly focusing on developing new features and improving existing products." },
      { question: "What technology do you use at work?", answer: "I mainly use web development technologies, such as JavaScript and TypeScript. I also use tools like Git to manage code and work with my team." },
      { question: "Why did you choose to do that type of work?", answer: "When I was younger, I was interested in computer games, so I became curious about how software works. As I got older, I found that I enjoyed solving problems with code and creating useful products." },
      { question: "Do you like your job? Is it very interesting?", answer: "Yes, I do. I enjoy my job because I can solve problems and create new features. I also like working with my team and learning new things every day." },
      { question: "Do you miss being a student?", answer: "Yes, I do. When I was a student, I had more free time to spend with my friends and classmates. Life was simpler and less stressful then." },
      { question: "Who helps you the most? And how?", answer: "At work, my team leader helps me the most. They have more experience and often give me useful feedback when I face a difficult problem. This helps me improve my skills." },
      { question: "Do you have any plans for your work in the next five years?", answer: "Yes, I do. In the next five years, I hope to improve my technical skills and take on more responsibility at work. I'd also like to work on more challenging projects with my team." },
      { question: "Do you want to change to another job?", answer: "No, not at the moment. I enjoy my current job, and I still have a lot to learn in this role." },
      { question: "What do you think is the most important at the moment?", answer: "At the moment, the most important thing for me is improving my skills at work. I want to become more confident and do a better job in my team." },
    ],
  },
  {
    id: "home", tab: "家乡与居住", title: "Hometown, area and home", description: "保定、北京与当前住处的高频答案。", items: [
      { question: "Where is your hometown?", answer: "My hometown is Baoding, a small city in Hebei Province. It's located north of Beijing." },
      { question: "How long have you been living there?", answer: "I've been living there for about twenty-six years. It's where I grew up, so I know the city very well." },
      { question: "Do you think you will continue living there for a long time?", answer: "No. I'm living in Beijing now because there are more job opportunities here." },
      { question: "Please describe your hometown a little.", answer: "It's a small city with a peaceful pace of life. Compared with Beijing, it's less crowded and the people are friendly. I think it's a comfortable place to live." },
      { question: "Is that a big city or a small place?", answer: "It's a small city." },
      { question: "What's your hometown famous for?", answer: "My hometown is famous for its local food, especially donkey meat sandwiches. They are very popular in Hebei Province." },
      { question: "Did you learn about the history of your hometown at school?", answer: "Yes, I did. We learned a little about the history of Baoding in primary school. It helped me understand more about my hometown." },
      { question: "Do you like living there?", answer: "Yes. Compared with Beijing, it's less crowded and the people are friendly. I think it's a comfortable place to live." },
      { question: "What do you like most about your hometown?", answer: "I like the delicious local food most, especially donkey meat sandwiches. They are very famous in Hebei Province, and many visitors like to try them." },
      { question: "Is there anything you dislike about it?", answer: "Because it's a small city, there aren't many entertainment facilities, and there's no subway, so it's a bit inconvenient." },
      { question: "Are there many young people in your hometown?", answer: "Yes, there are. There are several universities in Baoding, so you see a lot of young people." },
      { question: "Is your hometown a good place for young people to pursue their careers?", answer: "Not really. There aren't many job opportunities, so a lot of young people move to Beijing for work." },
      { question: "Do you like the area that you live in?", answer: "Yes, I do. It's quiet and there are lots of shopping malls nearby, so it's very convenient for me." },
      { question: "Where do you like to go in that area?", answer: "In my free time, I like to go to the park or the shopping mall near my home." },
      { question: "Do you know any famous people in your area?", answer: "No, I don't. It's mainly a residential area." },
      { question: "What are some changes in the area recently?", answer: "Recently, a new park has been built near my home, and there are more shopping malls than before. I really like the park because it's a nice place to relax." },
      { question: "Do you know any of your neighbors?", answer: "Yes, I know a few of them. We usually say hello when we meet." },
      { question: "Are the people in your neighborhood nice and friendly?", answer: "Yes, they are. They are polite and usually willing to help each other." },
      { question: "Do you live in a noisy or a quiet place?", answer: "I live in a quiet place. It's quiet and comfortable, so I can relax after work." },
      { question: "Who do you live with?", answer: "I live with my wife. We enjoy spending time together at home after work." },
      { question: "Are the transport facilities to your home very good?", answer: "Yes, they are. There are bus stops and a subway station near my home, so it's easy for me to get around." },
      { question: "What makes you feel pleasant in your home?", answer: "The quiet atmosphere makes me feel relaxed at home. After work, I can rest in my bedroom and spend time with my wife." },
    ],
  },
  {
    id: "dayoff", tab: "休息与日常", title: "Day off", description: "可复用到周末、爱好、休息和出行题。", items: [
      { question: "When was the last time you had a few days off?", answer: "The last time I had a few days off was during a long holiday, including the weekend. I spent most of the time preparing for an English exam." },
      { question: "What do you usually do when you have days off?", answer: "I usually rest at home, play computer games, or spend time with my wife. Sometimes we go to a park or a shopping mall nearby." },
      { question: "Do you usually spend your days off with your parents or with your friends?", answer: "I usually spend my days off with my wife. We like to relax at home or go to a nearby park together." },
      { question: "What would you like to do if you had a day off tomorrow?", answer: "If I had a day off tomorrow, I'd like to sleep until lunchtime and play computer games for the rest of the day. I just want to relax." },
    ],
  },
  {
    id: "special", tab: "特殊题精选", title: "Keys and typing", description: "少见题；Typing 同时可复用到工作和科技题。", items: [
      { question: "Do you always bring a lot of keys with you?", answer: "No, I don't. I rarely carry many keys because I usually just need one or two." },
      { question: "Have you ever lost your keys?", answer: "No, I don't think so. As far as I can remember, I've never lost my keys.", note: "不要说 in my memory；用 As far as I can remember。" },
      { question: "Do you type on a desktop or laptop keyboard every day?", answer: "Yes, I do. I usually type on my laptop keyboard every day because I use it for work. It's faster and more convenient than handwriting." },
      { question: "When did you learn how to type on a keyboard?", answer: "Actually, I don't remember exactly when I learned how to type on a keyboard. I think it was probably when I was in primary school." },
      { question: "Do you prefer typing or handwriting?", answer: "I prefer typing because it's faster and more convenient than handwriting." },
    ],
  },
  {
    id: "travel", tab: "出行与建筑", title: "Travelling and building", description: "可复用到假期、风景、城市与建筑题。", items: [
      { question: "Do you look out the window at the scenery when travelling by bus or car?", answer: "Yes, I usually look out of the window when I travel by bus or car. I like the scenery because it helps me relax." },
      { question: "Do you take photos of the scenery outside the car window?", answer: "Yes, sometimes. If I see beautiful scenery, I like to take a photo and keep it as a memory." },
      { question: "Do you prefer the mountains or the sea?", answer: "I prefer the sea because I find it peaceful and relaxing. I enjoy walking along the beach and listening to the sound of the waves." },
      { question: "What are the most beautiful sights you have seen while travelling?", answer: "The most beautiful sight I have seen was the sea at sunset. The sky turned orange and the view was very peaceful. I took a lot of photos there." },
      { question: "Is there a building that you would like to visit?", answer: "Yes, I'd like to visit the Forbidden City in Beijing. It has a long history and beautiful traditional buildings. I think it would be very interesting to see it in person." },
      { question: "Do you want to live in a tall building?", answer: "No, I don't. I prefer a low-rise house because it's quieter and feels more comfortable." },
    ],
  },
];

const answerTranslations: Record<string, string> = {
  "Do you work or study?": "我目前全职做软件开发，主要负责开发新功能和改进现有产品。",
  "Do you like crowded places?": "老实说，我不喜欢拥挤的地方，因为会让我感到疲惫；我更喜欢能放松、和朋友聊天的安静场所。",
  "When was the last time you were in a crowded place?": "上周我去了家附近的商场。很多店在促销，所以那里非常拥挤，我排队等了很久。",
  "Why do some places get crowded?": "像商场和旅游景点这类地方很受欢迎，会吸引很多人，因此会变得拥挤。",
  "Are crowded places more lively or more annoying?": "我觉得拥挤的地方更让人烦，因为又吵又有压力；我通常更喜欢能放松的安静场所。",
  "Do you like reading?": "我喜欢阅读。我通常看与工作相关的技术书，也喜欢小说；阅读既能让我学到新东西，也能让我放松。",
  "What kind of books do you like?": "我喜欢技术书和小说，因为它们既能让我学新知识，也能让我放松。",
  "Do you read more now than as a child?": "不太是。小时候我喜欢读故事书和小说，但现在花在手机上的时间更多，所以读得没有以前多。",
  "Is reading important?": "我觉得阅读很重要，因为它能帮助我学习新知识并提升职业技能。",
  "Are you a morning person?": "我不太是早起型的人。我通常起得晚一些，因为我晚上更清醒。",
  "What's your morning routine?": "早上我通常先洗脸让自己清醒，然后上班前吃早餐。",
  "Do you eat breakfast every day?": "不完全是。如果起晚了，我通常上班前随手拿点面包和一杯牛奶；这样又快又方便。",
  "Has your morning changed in recent years?": "有一点变化。学生时期我起得更晚，但现在有固定工作，所以必须早起并遵循固定的作息。",
  "Which stage of life do you enjoy most?": "我最喜欢学生时期，因为我学到了实用技能和知识，它们帮助我找到了一份好工作。",
  "What's the happiest time so far?": "到目前为止，最快乐的时期大概是大学时。我有更多自由时间，和朋友相处很多；我们一起学习，过着简单但快乐的生活。",
  "Do older people enjoy life more than young people?": "我不这么认为。年轻人通常有更多时间和精力享受生活，而年长者责任更多，可能更少时间放松。",
  "What stage do you look forward to?": "我期待事业更稳定的阶段，希望有更多空闲时间旅行，并陪伴家人和朋友。",
  "What's your favourite food?": "我最喜欢火锅，因为可以选择不同食材，也能和朋友一起分享；它温暖、美味，很适合冷天。",
  "Do you like cooking?": "我喜欢做饭。我喜欢在家做些简单的食物，尤其是面条或炒饭；忙碌一天后，这能让我放松。",
  "Do you eat out often?": "算比较经常。我通常每周外出吃饭两次，特别是工作忙时；这很方便，也能尝试不同种类的食物。",
  "Has Chinese food changed in recent years?": "我觉得近些年中国食物变化很大。餐厅类型更多了，也有更健康的选择和其他国家的食物；人们也更关注食物质量。",
  "Do you like team sports?": "我喜欢团队运动，因为它们有趣，也能帮助人们合作；我尤其喜欢周末和朋友打羽毛球。",
  "Did you play in a team at school?": "是的。我曾在学校篮球队打了一年篮球，这是一段很棒的经历，我也交到了很多朋友。",
  "Do you prefer watching or playing team sports?": "我更喜欢参与团队运动，因为它能让我保持活力并和朋友相处；看比赛也有趣，但我更享受成为比赛的一部分。",
  "Is teamwork important?": "我觉得团队合作很重要。人们可以分享想法、互相解决问题，也能让工作更高效。",
  "Do you walk a lot?": "是的。忙完一天工作后，我通常会在家附近的公园散步；这能让我放松并理清思绪。",
  "Did you walk more in the past?": "是的。学生时期我常和朋友走路去学校或在校园里散步；现在更忙，通常坐公共交通。",
  "Where do you usually walk?": "我通常在家附近的一个公园散步，那里步行大约十分钟就能到。",
  "Is walking a good exercise?": "我觉得散步是一种很好的运动，因为简单又容易做；不需要特别器材，也能帮助人们保持健康。",
  "What did you do as a child?": "小时候，我常和朋友在外面玩，也会在家写短篇故事；这些活动让我的童年既有趣又难忘。",
  "Did you play outside often?": "是的。放学后我常和朋友在外面玩，特别是在家附近的公园；我们玩游戏，一直待到晚饭时间。",
  "Did your parents play with you?": "是的，尤其在周末。父母常带我去公园，或在家陪我玩简单的桌游；我很享受和他们相处的时光。",
  "Are childhood activities different now from before?": "我觉得现在很不一样。以前孩子们更多在外面和朋友玩，现在很多人在家用手机或电脑；科技改变了他们度过空闲时间的方式。",
  "What's your hobby?": "我最喜欢的爱好是在家玩电脑游戏，因为忙完工作后，它能让我放松并清空思绪。",
  "When did you start it?": "我小学时开始玩电脑游戏。最初只和朋友玩简单游戏，后来它成了我最喜欢的放松方式之一。",
  "Has your hobby changed over time?": "有一点。小时候我大多和朋友玩简单游戏，现在下班后更喜欢在家玩轻松一些的游戏。",
  "Should kids have hobbies?": "我觉得孩子应该有爱好。爱好能让他们放松、学习新技能、交朋友，也能帮助他们发现真正感兴趣的事。",
  "Do you like giving gifts?": "我喜欢送礼物，因为这是一种表达自己关心他人的好方式；我通常为朋友或家人挑选小而实用的礼物。",
  "Do you prefer giving or receiving?": "我更喜欢送礼物，因为看到别人开心会让我高兴；当我选到对方真正喜欢的东西时，会觉得更有意义。",
  "What was the last gift you gave?": "我上一次送给朋友的礼物是一把电动牙刷，因为它在日常生活中很实用，我觉得对方会喜欢。",
  "Are gifts important in your culture?": "是的。在我的文化中，送礼是向朋友和家人表达关心与尊重的重要方式。",
  "Do you have a pet?": "是的。我有一只大约三岁的小猫；它很可爱，在家里陪伴我。",
  "Did you have pets as a kid?": "没有。父母觉得我小时候养宠物责任太大；不过我经常和朋友的宠物玩，也很喜欢。",
  "What animals do you like?": "我很喜欢猫，因为它们可爱、独立，而且容易照顾；我也喜欢在家陪自己的猫。",
  "Are pets good for children?": "我觉得宠物对孩子有好处。它们能教孩子关心他人、负责任，也能陪伴孩子，让孩子更开心。",
  "What work do you do?": "我目前全职做软件开发，主要负责开发新功能和改进现有产品。",
  "What technology do you use at work?": "我主要使用 JavaScript、TypeScript 等 Web 开发技术，也用 Git 管理代码并和团队协作。",
  "Why did you choose to do that type of work?": "小时候我对电脑游戏感兴趣，所以好奇软件是怎样运行的；长大后，我发现自己喜欢用代码解决问题、创造有用的产品。",
  "Do you like your job? Is it very interesting?": "我喜欢这份工作，因为可以解决问题、开发新功能；我也喜欢和团队合作，并每天学习新东西。",
  "Do you miss being a student?": "是的。学生时期我有更多时间陪朋友和同学，那时生活更简单、压力更小。",
  "Who helps you the most? And how?": "工作中，团队负责人最能帮助我。他们经验更多，在我遇到难题时会给有用的反馈，这能帮助我提高技能。",
  "Do you have any plans for your work in the next five years?": "有。未来五年里，我希望提升技术技能，在工作中承担更多责任，也希望和团队一起做更有挑战性的项目。",
  "Do you want to change to another job?": "目前不想。我喜欢现在的工作，而且在这个岗位上还有很多需要学习的地方。",
  "What do you think is the most important at the moment?": "目前对我最重要的是提升工作技能。我想变得更自信，并在团队里把工作做得更好。",
  "Where is your hometown?": "我的家乡是保定，位于河北省，是北京以北的一座小城市。",
  "How long have you been living there?": "我在那里生活了大约二十六年。那里是我长大的地方，所以我对这座城市很熟悉。",
  "Do you think you will continue living there for a long time?": "不会。我现在住在北京，因为这里有更多工作机会。",
  "Please describe your hometown a little.": "它是一座生活节奏平静的小城市。和北京相比，人没那么多，人们也很友好，是个舒适的居住地。",
  "Is that a big city or a small place?": "它是一座小城市。",
  "What's your hometown famous for?": "我的家乡以当地食物闻名，特别是驴肉火烧；它在河北省非常受欢迎。",
  "Did you learn about the history of your hometown at school?": "是的。小学时我们学过一点保定的历史，这让我更了解自己的家乡。",
  "Do you like living there?": "喜欢。和北京相比，这里人更少，人们也很友好；我觉得住在那里很舒服。",
  "What do you like most about your hometown?": "我最喜欢当地的美食，尤其是驴肉火烧；它在河北很有名，很多游客都想尝尝。",
  "Is there anything you dislike about it?": "因为是小城市，娱乐设施不多，也没有地铁，所以会有一点不方便。",
  "Are there many young people in your hometown?": "有。保定有几所大学，所以能看到很多年轻人。",
  "Is your hometown a good place for young people to pursue their careers?": "不太是。当地工作机会不多，所以许多年轻人会去北京工作。",
  "Do you like the area that you live in?": "我喜欢。这里很安静，附近也有很多商场，所以对我来说很方便。",
  "Where do you like to go in that area?": "空闲时，我喜欢去家附近的公园或商场。",
  "Do you know any famous people in your area?": "不认识。这里主要是住宅区。",
  "What are some changes in the area recently?": "最近家附近新建了一个公园，商场也比以前多；我很喜欢这个公园，因为它适合放松。",
  "Do you know any of your neighbors?": "认识几个。我们见面时通常会打招呼。",
  "Are the people in your neighborhood nice and friendly?": "是的。他们很有礼貌，也通常愿意互相帮助。",
  "Do you live in a noisy or a quiet place?": "我住在安静的地方。这里安静又舒适，所以下班后我能放松。",
  "Who do you live with?": "我和妻子一起住。下班后我们喜欢在家共度时光。",
  "Are the transport facilities to your home very good?": "是的。家附近有公交站和地铁站，出行很方便。",
  "What makes you feel pleasant in your home?": "家里安静的氛围让我放松；下班后我可以在卧室休息，也能陪妻子。",
  "When was the last time you had a few days off?": "上一次连休几天是在一个长假期间，包括周末；我大部分时间都在准备英语考试。",
  "What do you usually do when you have days off?": "休息日我通常在家休息、玩电脑游戏或陪妻子；有时我们会去附近的公园或商场。",
  "Do you usually spend your days off with your parents or with your friends?": "我通常和妻子一起过休息日。我们喜欢在家放松，或一起去附近的公园。",
  "What would you like to do if you had a day off tomorrow?": "如果明天休息，我想睡到中午，然后玩一整天剩下时间的电脑游戏；我只想放松一下。",
  "Do you always bring a lot of keys with you?": "不，我很少带很多钥匙，因为通常只需要一两把。",
  "Have you ever lost your keys?": "我想没有。就我记得的情况来看，我从没丢过钥匙。",
  "Do you type on a desktop or laptop keyboard every day?": "是的。我每天都用笔记本电脑键盘打字，因为工作需要；它比手写更快也更方便。",
  "When did you learn how to type on a keyboard?": "其实我不记得具体什么时候学会键盘打字的；大概是在小学的时候。",
  "Do you prefer typing or handwriting?": "我更喜欢打字，因为它比手写更快、更方便。",
  "Do you look out the window at the scenery when travelling by bus or car?": "是的。我坐公交或汽车旅行时通常会望向窗外；我喜欢风景，因为它能让我放松。",
  "Do you take photos of the scenery outside the car window?": "有时会。如果看到美丽的景色，我喜欢拍一张照片留作纪念。",
  "Do you prefer the mountains or the sea?": "我更喜欢大海，因为它让我感到平静和放松；我喜欢沿着海滩走，听海浪的声音。",
  "What are the most beautiful sights you have seen while travelling?": "我旅行中见过最美的景色是日落时的大海；天空变成橙色，景色非常宁静，我在那里拍了很多照片。",
  "Is there a building that you would like to visit?": "有。我想参观北京故宫；它历史悠久，有美丽的传统建筑，亲眼见到一定很有意思。",
  "Do you want to live in a tall building?": "不想。我更喜欢低层住宅，因为更安静，也感觉更舒适。",
};

const keyPhrases = [
  "make me feel tired", "wait in line for quite a while", "many shops were having sales",
  "tourist spots", "noisy and stressful", "technical books related to my work",
  "learn new things and relax at the same time", "spend more time on my phone",
  "improve my professional skills", "feel more awake in the evening",
  "wash my face to wake myself up", "grab some bread and a cup of milk",
  "follow a fixed routine", "practical skills and knowledge",
  "spent a lot of time with my friends", "have more responsibilities",
  "career is more stable", "choose different ingredients", "perfect for a cold day",
  "cooking simple meals at home", "try different kinds of food",
  "healthier options and food from other countries", "help people work together",
  "being part of the game", "share ideas and help each other solve problems",
  "clear my mind", "take public transport", "a ten-minute walk away",
  "without needing any special equipment", "wrote short stories",
  "until dinner time", "simple board games", "changed the way they spend their free time",
  "playing computer games at home", "one of my favourite ways to relax",
  "find out what they are really interested in", "show that I care about someone",
  "seeing other people happy", "electric toothbrush", "show care and respect",
  "keeps me company", "too much responsibility", "cute, independent, and easy to take care of",
  "developing new features", "improving existing products", "web development technologies",
  "manage code and work with my team", "curious about how software works",
  "solving problems with code", "take on more responsibility at work",
  "a lot to learn in this role", "a small city in Hebei Province",
  "donkey meat sandwiches", "entertainment facilities", "lots of shopping malls nearby",
  "bus stops and a subway station", "quiet atmosphere", "preparing for an English exam",
  "sleep until lunchtime", "for the rest of the day", "rarely carry many keys",
  "As far as I can remember", "laptop keyboard", "faster and more convenient than handwriting",
  "look out of the window", "take a photo and keep it as a memory",
  "walking along the beach", "listening to the sound of the waves",
  "the sea at sunset", "the sky turned orange", "the Forbidden City in Beijing",
  "beautiful traditional buildings", "low-rise house",
];

function highlightKeywords(text: string) {
  const pattern = new RegExp(`(${keyPhrases.map((phrase) => phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "gi");
  return text.split(pattern).map((part, index) =>
    keyPhrases.some((phrase) => phrase.toLowerCase() === part.toLowerCase())
      ? <mark key={index}>{part}</mark>
      : part,
  );
}

export default function PartOneLibrary() {
  const totalItems = groups.reduce((total, group) => total + group.items.length, 0);

  return <main className="reference-shell">
    <header className="topbar">
      <Link className="brand" href="/" aria-label="返回雅思口语练习"><div className="brand-mark">S</div><div><div className="brand-title">雅思口语练习</div><div className="brand-subtitle">Local speaking practice</div></div></Link>
      <nav className="main-nav" aria-label="主导航"><button type="button" className="active" aria-current="page" onClick={() => window.location.assign("/part-1")}>Part 1 练习</button><button type="button" onClick={() => window.location.assign("/")}>Part 2 练习</button><button type="button" disabled>Part 3 练习</button></nav>
      <div className="saved-state"><i />已练记录</div>
    </header>
    <article className="tab-reference">
      <header className="tab-reference-title"><span>IELTS SPEAKING · PART 1 · BAND 5.5–6</span><h1>Part 1 已练题目与答案</h1><p>按练习顺序从上到下整理。英文均为当时给出的范文版本，不使用你的跟读、停顿或口误版本。</p></header>
      <section className="material-panel part-one-panel">
        <header className="material-guide-heading"><div><span>完整练习清单</span><h2>All practised Part 1 questions</h2><p>依次浏览、复习即可；不用切换题组。</p></div><div className="fit-counts"><span><b>{totalItems}</b> 已练答案</span></div></header>
        {groups.map((group) => <section className="material-guide-section part-one-group" key={group.id}><header className="part-one-group-heading"><div><span>{group.tab} · {group.items.length} 题</span><h3>{group.title}</h3><p>{group.description}</p></div></header><div className="part-one-list">{group.items.map((item, index) => <article className="part-one-card" key={item.question}><div className="part-one-number">{String(index + 1).padStart(2, "0")}</div><div><p className="part-one-question">{item.question}</p><blockquote>{highlightKeywords(item.answer)}</blockquote><p className="part-one-translation">中文：{answerTranslations[item.question]}</p>{item.note && <p className="part-one-note">提示：{item.note}</p>}</div></article>)}</div></section>)}
        <section className="material-guide-section"><h3>使用提醒</h3><ul className="notice-list"><li>先直接回答，再补一个具体原因或细节；不需要背长答案。</li><li>说错后快速自我修正即可，不要从头重说整句。</li><li>重点检查：时态、复数、冠词和固定搭配。</li></ul></section>
      </section>
    </article>
  </main>;
}
