export type AdditionalAnswerLine = {
  kind: "通用" | "特殊";
  text: string;
};

export type AdditionalTopic = {
  id: string;
  code: string;
  name: string;
  question: string;
  answer: AdditionalAnswerLine[];
};

export type AdditionalMaterial = {
  id: string;
  tab: string;
  title: string;
  tagline: string;
  description: string;
  storyline: string;
  modules: Array<{
    label: string;
    title: string;
    detail: string;
    sentence: string;
  }>;
  baseAnswer: string;
  topics: AdditionalTopic[];
  rules: string[];
};

const common = (text: string): AdditionalAnswerLine => ({ kind: "通用", text });
const special = (text: string): AdditionalAnswerLine => ({ kind: "特殊", text });

export const additionalMaterials: AdditionalMaterial[] = [
  {
    id: "shanghai",
    tab: "素材 03｜上海城市旅行",
    title: "通用素材 03：一次上海城市旅行",
    tagline: "城市 + 高楼 + 特色建筑 + 购物中心",
    description: "用一次三天的上海旅行串联城市环境、两座代表性建筑和一个购物中心。",
    storyline: "去年秋天去上海 → 城市新旧结合 → 上海中心 → 东方明珠 → 商场吃饭购物 → 喜欢这座城市",
    modules: [
      {
        label: "01 · 旅行背景",
        title: "三天的上海旅行",
        detail: "去年秋天与女朋友坐高铁去上海，在那里住了三天。",
        sentence: "Last autumn, I took a three-day trip to Shanghai with my girlfriend.",
      },
      {
        label: "02 · 城市印象",
        title: "现代与传统并存",
        detail: "既有现代高楼，也有老街、小店和具有历史感的建筑。",
        sentence: "What impressed me most was the mix of modern buildings and traditional streets.",
      },
      {
        label: "03 · 高楼",
        title: "上海中心",
        detail: "玻璃外观、很高、用于办公和观光，可以看到城市景色。",
        sentence: "Shanghai Tower is a huge glass building with offices and a viewing area near the top.",
      },
      {
        label: "04 · 特色建筑",
        title: "东方明珠",
        detail: "由几个球形结构组成，外观独特，很容易辨认。",
        sentence: "The Oriental Pearl Tower has several large round sections, so it looks very unusual and easy to recognise.",
      },
      {
        label: "05 · 商场",
        title: "陆家嘴的购物中心",
        detail: "环境干净明亮，有商店、餐厅和电影院，旅行中去那里吃饭休息。",
        sentence: "We also visited a large shopping mall in Lujiazui, where we had dinner and looked around the shops.",
      },
      {
        label: "06 · 总体感受",
        title: "适合参观和推荐",
        detail: "交通方便、活动丰富，旅行结束后仍然印象深刻。",
        sentence: "The trip was enjoyable because the city was convenient, lively and full of interesting places.",
      },
    ],
    baseAnswer:
      "I'd like to talk about a three-day trip I took to Shanghai with my girlfriend last autumn. We travelled there by high-speed train and stayed near the city centre. What impressed me most was the mix of modern buildings and traditional streets. We visited Shanghai Tower, which is a huge glass building with offices and a viewing area near the top. We also saw the Oriental Pearl Tower. Its large round sections made it look unusual and easy to recognise. During the trip, we visited a shopping mall in Lujiazui, where we had dinner and looked around the shops. Although the city was sometimes crowded, the transport was convenient and there was always something interesting to do. I really enjoyed the trip, and I would like to visit Shanghai again in the future.",
    topics: [
      {
        id: "shanghai-city",
        code: "S1",
        name: "去过并喜欢的城市",
        question: "Describe a city you have visited and liked.",
        answer: [
          special("I'd like to talk about Shanghai, a city I visited and really liked."),
          common("Last autumn, I took a three-day trip to Shanghai with my girlfriend."),
          special("We travelled by high-speed train and stayed near the city centre."),
          common("What impressed me most was the mix of modern buildings and traditional streets."),
          special("During the day, we visited famous places such as Shanghai Tower and the Oriental Pearl Tower. In the evening, we walked beside the river and enjoyed the city lights."),
          common("We also visited a large shopping mall in Lujiazui, where we had dinner and looked around the shops."),
          special("I liked Shanghai because the public transport was convenient and there were many different things to see and do. Although it was sometimes crowded, the city felt lively and exciting."),
          common("The trip was enjoyable because the city was convenient, lively and full of interesting places."),
          special("I hope I can visit it again and explore some quieter neighbourhoods next time."),
        ],
      },
      {
        id: "shanghai-tall-building",
        code: "S2",
        name: "喜欢的高楼",
        question: "Describe a tall building you like or dislike.",
        answer: [
          special("I'd like to talk about Shanghai Tower, a tall building that I really like."),
          common("Last autumn, I took a three-day trip to Shanghai with my girlfriend."),
          common("Shanghai Tower is a huge glass building with offices and a viewing area near the top."),
          special("It has a smooth, modern shape that seems to turn slightly as it rises. From the ground, it looks impressive without being too complicated."),
          special("The building is mainly used for offices, shops and tourism. We went to the viewing area and saw roads, smaller buildings and the river far below us."),
          common("What impressed me most was the mix of modern buildings and traditional streets."),
          special("I like this building because it represents the modern side of the city. I also enjoyed the wide view from the top, although the lift made my ears feel a little uncomfortable."),
          special("Overall, visiting it was one of the most memorable parts of my trip."),
        ],
      },
      {
        id: "shanghai-interesting-building",
        code: "S3",
        name: "见过的有趣建筑",
        question: "Describe an interesting building you have seen.",
        answer: [
          special("I'd like to talk about the Oriental Pearl Tower, which is one of the most interesting buildings I have seen."),
          common("Last autumn, I took a three-day trip to Shanghai with my girlfriend."),
          special("It stands in Lujiazui, close to the river and several other modern buildings."),
          common("The Oriental Pearl Tower has several large round sections, so it looks very unusual and easy to recognise."),
          special("The tower is used for sightseeing, broadcasting and entertainment. Visitors can go inside, enjoy the city view and learn a little about the history of Shanghai."),
          common("What impressed me most was the mix of modern buildings and traditional streets."),
          special("I found it interesting because its shape is completely different from an ordinary office building. It also looks especially colourful when the lights are turned on at night."),
          special("Seeing it in person made the trip feel much more special than simply looking at photos online."),
        ],
      },
      {
        id: "shanghai-mall",
        code: "S4",
        name: "喜欢的购物中心",
        question: "Describe a shopping mall you like.",
        answer: [
          special("I'd like to talk about a large shopping mall in Lujiazui that I visited during a trip to Shanghai."),
          common("Last autumn, I took a three-day trip to Shanghai with my girlfriend."),
          special("The mall was close to several famous buildings and was easy to reach by underground. It looked modern, bright and very clean."),
          special("There were many clothing shops, restaurants, cafés and a cinema. We mainly went there to have dinner after walking around the city for most of the day."),
          common("We also visited a large shopping mall in Lujiazui, where we had dinner and looked around the shops."),
          special("I liked the mall because it gave us a comfortable place to rest, and there were many types of food to choose from. The signs were also clear, so it was easy to find everything."),
          common("The trip was enjoyable because the city was convenient, lively and full of interesting places."),
          special("If I visit Shanghai again, I would happily return there for a meal."),
        ],
      },
    ],
    rules: [
      "城市题讲整段旅程；建筑题把旅行背景压缩成一两句，再详细描述建筑。",
      "购物中心题重点讲位置、外观、在那里做什么和喜欢的原因，不要大讲城市景点。",
      "整段经历使用过去时；建筑现在仍然存在的外观和用途可以使用现在时。",
    ],
  },
  {
    id: "friend",
    tab: "素材 05｜童年好友",
    title: "通用素材 05：童年好友学习英语",
    tagline: "童年好友 + 语言学习 + 医疗职业 + 正在学习",
    description: "固定一位从小学认识的朋友 Leo：英语很好，目前学习护理知识，希望成为护士。",
    storyline: "小学认识 Leo → 一起读书玩耍 → 擅长英语 → 正在学习护理 → 希望帮助病人 → 欣赏他的努力",
    modules: [
      {
        label: "01 · 人物关系",
        title: "小学认识的老朋友",
        detail: "住在同一个社区，小学同班，认识很多年。",
        sentence: "Leo is one of my oldest friends, and we first met at primary school.",
      },
      {
        label: "02 · 童年活动",
        title: "放学后一起玩和读书",
        detail: "童年经常一起踢足球、读故事书，也会互相帮助完成作业。",
        sentence: "When we were children, we often played football and read storybooks together after school.",
      },
      {
        label: "03 · 语言能力",
        title: "擅长英语",
        detail: "通过短视频、播客和日常练习提高英语，敢于开口。",
        sentence: "He is good at English because he practises regularly and is not afraid of making mistakes.",
      },
      {
        label: "04 · 当前学习",
        title: "学习护理知识",
        detail: "正在参加护理课程，学习照顾病人和处理基本健康问题。",
        sentence: "He is currently taking a nursing course and learning how to care for patients.",
      },
      {
        label: "05 · 职业目标",
        title: "希望成为护士",
        detail: "曾照顾生病的祖父，因此希望从事能直接帮助人的工作。",
        sentence: "He wants to become a nurse because he would like to help people when they are ill or worried.",
      },
      {
        label: "06 · 个人感受",
        title: "努力且有耐心",
        detail: "欣赏他一直学习，也愿意为了目标付出时间。",
        sentence: "I admire him because he is patient, hardworking and serious about his future.",
      },
    ],
    baseAnswer:
      "I'd like to talk about my childhood friend Leo. We first met at primary school because we lived in the same neighbourhood and were in the same class. When we were children, we often played football and read storybooks together after school. He has always enjoyed learning languages, especially English. He practises regularly by listening to podcasts and watching short videos, and he is not afraid of making mistakes. At the moment, he is also taking a nursing course and learning how to care for patients. He wants to become a nurse because he helped look after his grandfather when he was ill and realised that he enjoyed helping people. Although the course is difficult, he continues studying every week. I admire him because he is patient, hardworking and serious about his future.",
    topics: [
      {
        id: "friend-childhood",
        code: "F1",
        name: "童年好友",
        question: "Describe a childhood friend.",
        answer: [
          special("I'd like to talk about my childhood friend Leo."),
          common("Leo is one of my oldest friends, and we first met at primary school."),
          special("We lived in the same neighbourhood and were in the same class, so we saw each other almost every day."),
          common("When we were children, we often played football and read storybooks together after school."),
          special("We also helped each other with homework. He was better at English, while I was better at maths, so we made a good team."),
          common("He is good at English because he practises regularly and is not afraid of making mistakes."),
          special("We are both busy now, but we still send messages and meet when we have enough time. We usually talk about work, family and our future plans."),
          common("I admire him because he is patient, hardworking and serious about his future."),
          special("I feel lucky to have a friend who has known me for such a long time."),
        ],
      },
      {
        id: "friend-healthcare",
        code: "F2",
        name: "想从事医疗工作的人",
        question: "Describe a person who wants to work in healthcare.",
        answer: [
          special("I'd like to talk about my childhood friend Leo, who wants to work in healthcare."),
          common("Leo is one of my oldest friends, and we first met at primary school."),
          common("He is currently taking a nursing course and learning how to care for patients."),
          special("The course teaches him basic medical knowledge, how to communicate with patients and what to do in an emergency."),
          common("He wants to become a nurse because he would like to help people when they are ill or worried."),
          special("His interest began when his grandfather was ill. Leo often visited him and saw how patient and supportive the nurses were."),
          common("He is good at English because he practises regularly and is not afraid of making mistakes."),
          special("This may also help him communicate with more patients in the future. I think healthcare work can be tiring, but it is meaningful."),
          common("I admire him because he is patient, hardworking and serious about his future."),
        ],
      },
      {
        id: "friend-language",
        code: "F3",
        name: "擅长学习和说语言的人",
        question: "Describe a person who is good at learning and speaking languages.",
        answer: [
          special("The person who comes to mind is my childhood friend Leo."),
          common("Leo is one of my oldest friends, and we first met at primary school."),
          special("He speaks Chinese and English, and his spoken English is especially natural and confident."),
          common("He is good at English because he practises regularly and is not afraid of making mistakes."),
          special("He listens to English podcasts on his way to work, watches short videos and repeats useful sentences aloud. He also writes down new words on his phone and uses them in conversations."),
          special("What I like about his method is that it is simple and practical. He does not spend all his time studying grammar; he tries to use the language every day."),
          common("He is currently taking a nursing course and learning how to care for patients."),
          special("English may help him read medical information and communicate with different people in the future."),
          common("I admire him because he is patient, hardworking and serious about his future."),
        ],
      },
      {
        id: "friend-learning",
        code: "F4",
        name: "朋友正在学习的东西",
        question: "Describe something your friend is learning.",
        answer: [
          special("I'd like to talk about something my childhood friend Leo is learning at the moment."),
          common("Leo is one of my oldest friends, and we first met at primary school."),
          common("He is currently taking a nursing course and learning how to care for patients."),
          special("He attends classes at weekends and studies online after work. He is learning basic medical knowledge, how to speak to patients and how to respond calmly in difficult situations."),
          common("He wants to become a nurse because he would like to help people when they are ill or worried."),
          special("The course is not easy because there is a lot to remember and he still has a full-time job. However, he makes a weekly plan and studies a little each day."),
          common("He is good at English because he practises regularly and is not afraid of making mistakes."),
          special("That also helps him understand some English learning materials in the course."),
          common("I admire him because he is patient, hardworking and serious about his future."),
        ],
      },
    ],
    rules: [
      "童年好友情节只在童年好友题详细展开；其他三题用一句交代关系即可。",
      "语言题重点讲学习方法；医疗题重点讲职业原因；正在学习题重点讲课程内容和困难。",
      "童年经历使用过去时；Leo 现在的能力、课程和职业目标使用现在时。",
    ],
  },
  {
    id: "flower-shop",
    tab: "素材 06｜花店老板",
    title: "通用素材 06：喜欢种植物的花店老板",
    tagline: "成功生意 + 在家种植物",
    description: "固定表姐 May 从阳台种花开始，后来经营一家小花店的完整人物故事。",
    storyline: "表姐 May → 阳台种花 → 网上分享 → 开小花店 → 服务友好 → 生意稳定 → 欣赏她的耐心",
    modules: [
      {
        label: "01 · 人物身份",
        title: "喜欢植物的表姐",
        detail: "May 从小喜欢植物，现在住在市中心附近。",
        sentence: "May is my cousin, and she has always been interested in flowers and plants.",
      },
      {
        label: "02 · 家中植物",
        title: "阳台上的小花园",
        detail: "种玫瑰、薄荷和一些容易照顾的绿色植物。",
        sentence: "She grows roses, mint and several green plants on the balcony of her apartment.",
      },
      {
        label: "03 · 生意起点",
        title: "从网上分享和出售开始",
        detail: "朋友喜欢她养的花，她先在网上接受小订单。",
        sentence: "She first shared photos online and began selling small plants to friends and neighbours.",
      },
      {
        label: "04 · 经营花店",
        title: "开了一家小花店",
        detail: "店里销售鲜花、盆栽，也为顾客提供简单建议。",
        sentence: "Two years ago, she opened a small flower shop near her home.",
      },
      {
        label: "05 · 成功原因",
        title: "质量和服务稳定",
        detail: "植物健康、价格合理，也会耐心告诉顾客如何照顾。",
        sentence: "Her business is successful because her plants are healthy and she gives customers friendly, practical advice.",
      },
      {
        label: "06 · 人物感受",
        title: "把兴趣变成事业",
        detail: "欣赏她有耐心、有创造力，也愿意持续学习。",
        sentence: "I admire her because she turned a simple hobby into a successful small business.",
      },
    ],
    baseAnswer:
      "I'd like to talk about my cousin May, who has always been interested in flowers and plants. She grows roses, mint and several green plants on the balcony of her apartment. Looking after them helps her relax, and she enjoys seeing small changes every day. A few years ago, she began sharing photos of her plants online. Friends and neighbours liked them and started asking whether they could buy some. She first accepted small orders from home, and two years ago she opened a flower shop near her apartment. The shop sells fresh flowers and small plants for homes and offices. Her business is successful because the plants are healthy, the prices are reasonable and she gives customers practical advice. I admire her because she turned a simple hobby into a successful business through patience and steady work.",
    topics: [
      {
        id: "flower-business",
        code: "B1",
        name: "拥有成功生意的人",
        question: "Describe a person who owns a successful business.",
        answer: [
          special("I'd like to talk about my cousin May, who owns a successful small flower shop."),
          common("May is my cousin, and she has always been interested in flowers and plants."),
          common("She grows roses, mint and several green plants on the balcony of her apartment."),
          common("She first shared photos online and began selling small plants to friends and neighbours."),
          special("At first, she only accepted a few orders at weekends. As more people recommended her plants, she saved some money and learned how to manage a small shop."),
          common("Two years ago, she opened a small flower shop near her home."),
          special("The shop now sells fresh flowers, small plants and simple gifts. It is not a large business, but it has many regular customers."),
          common("Her business is successful because her plants are healthy and she gives customers friendly, practical advice."),
          common("I admire her because she turned a simple hobby into a successful small business."),
        ],
      },
      {
        id: "flower-plants",
        code: "B2",
        name: "喜欢在家种植物的人",
        question: "Describe a person who likes to grow plants at home.",
        answer: [
          special("I'd like to talk about my cousin May, who loves growing plants at home."),
          common("May is my cousin, and she has always been interested in flowers and plants."),
          common("She grows roses, mint and several green plants on the balcony of her apartment."),
          special("Her balcony is not very large, but she keeps it clean and uses shelves so every plant gets enough sunlight. She waters them before work and checks them again in the evening."),
          special("She likes growing plants because it helps her slow down and forget about stress. She also enjoys using fresh mint when she makes tea."),
          common("She first shared photos online and began selling small plants to friends and neighbours."),
          common("Two years ago, she opened a small flower shop near her home."),
          special("For her, plants are both a relaxing hobby and an important part of her work."),
          common("I admire her because she turned a simple hobby into a successful small business."),
        ],
      },
    ],
    rules: [
      "生意题重点讲如何起步和为什么成功；种植物题重点讲植物种类、日常照顾和喜欢的原因。",
      "花店只是种植物题的结果，不能让经营细节抢走家庭植物这个重点。",
      "人物仍在经营和种植时使用现在时；开店和起步经历使用过去时。",
    ],
  },
  {
    id: "athlete",
    tab: "素材 07｜喜欢的运动员",
    title: "通用素材 07：喜欢的乒乓球运动员马龙",
    tagline: "想见的名人 + 体育比赛 + 网络节目 + 名人广告",
    description: "以熟悉的运动员马龙为人物中心，分别使用比赛、采访节目和运动品牌广告三个固定场景。",
    storyline: "从小看乒乓球 → 认识马龙 → 观看决赛 → 看过采访节目 → 看过运动广告 → 欣赏自律与冷静",
    modules: [
      {
        label: "01 · 人物身份",
        title: "著名乒乓球运动员",
        detail: "通过电视比赛认识他，长期保持高水平。",
        sentence: "Ma Long is a famous Chinese table tennis player whom I first saw on television.",
      },
      {
        label: "02 · 喜欢原因",
        title: "冷静、自律和经验丰富",
        detail: "比赛压力大时依然专注，也长期坚持训练。",
        sentence: "I admire him because he stays calm under pressure and has worked hard for many years.",
      },
      {
        label: "03 · 体育比赛",
        title: "和女朋友观看国际决赛",
        detail: "在家看直播，比赛接近，最后非常激动。",
        sentence: "Last year, I watched an international table tennis final at home with my girlfriend.",
      },
      {
        label: "04 · 网络节目",
        title: "关于训练生活的采访",
        detail: "短节目介绍训练、压力和保持专注的方法。",
        sentence: "I recently watched an online interview in which he talked about training and dealing with pressure.",
      },
      {
        label: "05 · 名人广告",
        title: "运动服装广告",
        detail: "在手机上看到，内容简单，展示训练和坚持。",
        sentence: "I also saw a short sportswear advertisement featuring him on my phone.",
      },
      {
        label: "06 · 想见原因",
        title: "询问长期保持动力的方法",
        detail: "如果见面，希望询问如何处理失败和持续进步。",
        sentence: "If I met him, I would ask how he keeps improving after so many years of competition.",
      },
    ],
    baseAnswer:
      "I'd like to talk about Ma Long, a famous Chinese table tennis player whom I first saw on television. I admire him because he stays calm under pressure and has worked hard for many years. Last year, I watched an international table tennis final at home with my girlfriend. The match was close, and we felt excited whenever there was a long rally. I also recently watched an online interview in which he talked about training and dealing with pressure. His answers were simple and honest, which made a strong impression on me. I have also seen a short sportswear advertisement featuring him on my phone. It showed him practising rather than simply talking about success. If I had the chance to meet him, I would ask how he keeps improving and stays motivated after so many years of competition.",
    topics: [
      {
        id: "athlete-famous",
        code: "A1",
        name: "想见的名人",
        question: "Describe a famous person you would like to meet.",
        answer: [
          special("I'd like to talk about Ma Long, a famous person I would really like to meet."),
          common("Ma Long is a famous Chinese table tennis player whom I first saw on television."),
          special("I learned more about him by watching important matches, short interviews and sports news online."),
          common("I admire him because he stays calm under pressure and has worked hard for many years."),
          special("He has experienced both success and difficult periods, but he continued training and remained professional. That is more impressive to me than simply winning matches."),
          common("I recently watched an online interview in which he talked about training and dealing with pressure."),
          special("His answers were direct and thoughtful, so I became curious about how he manages stress in real life."),
          common("If I met him, I would ask how he keeps improving after so many years of competition."),
          special("I would also ask for a photo, but I would mainly want to listen to his advice about patience and motivation."),
        ],
      },
      {
        id: "athlete-sports-event",
        code: "A2",
        name: "喜欢观看的体育比赛",
        question: "Describe a live sports event you enjoyed watching.",
        answer: [
          special("I'd like to talk about a live table tennis match that I really enjoyed watching."),
          common("Last year, I watched an international table tennis final at home with my girlfriend."),
          special("We watched it live on television after dinner. One of the players was Ma Long, whom I had seen in many matches before."),
          common("Ma Long is a famous Chinese table tennis player whom I first saw on television."),
          special("The match was very close, and both players won several important points. The most exciting moments were the long rallies because the ball moved so quickly."),
          special("My girlfriend does not usually watch much sport, but even she became interested and started asking questions about the rules."),
          common("I admire him because he stays calm under pressure and has worked hard for many years."),
          special("I felt excited during the match and relaxed afterwards. It was a simple evening at home, but sharing the experience made it memorable."),
        ],
      },
      {
        id: "athlete-programme",
        code: "A3",
        name: "最近看的网络节目",
        question: "Describe a TV or online programme you watched recently.",
        answer: [
          special("I'd like to talk about a short online interview programme I watched recently."),
          common("Ma Long is a famous Chinese table tennis player whom I first saw on television."),
          special("I watched it on my phone one evening after work. It was about his training routine, important matches and the way he deals with pressure."),
          common("I recently watched an online interview in which he talked about training and dealing with pressure."),
          special("The programme included some old match clips, but the interview was the most interesting part. He said that regular practice and a clear routine helped him remain focused."),
          common("I admire him because he stays calm under pressure and has worked hard for many years."),
          special("I liked the programme because it was only about twenty minutes long and used simple language. It was easy to follow even though I was tired after work."),
          special("After watching it, I felt motivated to be more patient with my own long-term goals."),
        ],
      },
      {
        id: "athlete-advertisement",
        code: "A4",
        name: "有名人的广告",
        question: "Describe an advertisement you saw with a famous person in it.",
        answer: [
          special("I'd like to talk about a sportswear advertisement featuring Ma Long."),
          common("Ma Long is a famous Chinese table tennis player whom I first saw on television."),
          special("I saw the advertisement on my phone while I was watching short videos. It showed him training alone in a quiet sports hall and wearing the brand's sports clothes and shoes."),
          common("I also saw a short sportswear advertisement featuring him on my phone."),
          special("There was not much dialogue. Instead, the advert used quick scenes of training, sweating and repeating the same movement many times."),
          common("I admire him because he stays calm under pressure and has worked hard for many years."),
          special("I liked the advertisement because it connected the product with patience and regular practice rather than only showing a famous face."),
          special("I did not immediately buy anything, but the advert was easy to remember and made the brand seem more reliable."),
        ],
      },
    ],
    rules: [
      "四道题共享人物，但比赛、节目和广告是三个独立场景；不要在一题里全部展开。",
      "比赛题重点讲在哪里看、和谁看以及现场感受；名人题重点讲为什么想见和见面后做什么。",
      "运动员现在的身份和你的评价使用现在时；具体观看经历使用过去时。",
    ],
  },
  {
    id: "career",
    tab: "素材 04｜职业规划",
    title: "通用素材 04：软件工程师的职业规划",
    tagline: "长期目标 + 理想工作 + 短期海外工作",
    description: "从真实的软件工程师背景出发，固定英语提升、国际项目和工作生活平衡三个方向。",
    storyline: "六年软件工程经验 → 喜欢解决问题 → 提升英语 → 国际项目 → 新加坡短期工作 → 更好的工作生活平衡",
    modules: [
      {
        label: "01 · 当前背景",
        title: "六年软件工程经验",
        detail: "大学毕业后一直从事软件工程工作，主要开发和维护软件系统。",
        sentence: "I have worked as a software engineer for about six years since I graduated from university.",
      },
      {
        label: "02 · 工作兴趣",
        title: "解决问题和学习技能",
        detail: "喜欢解决实际问题，也希望持续接触新的技术和工作方式。",
        sentence: "I enjoy solving problems and learning new skills, which is why this career suits me well.",
      },
      {
        label: "03 · 长期目标",
        title: "提高英语并参与国际项目",
        detail: "希望能更自信地与海外同事沟通，承担更重要的工作。",
        sentence: "My long-term goal is to improve my English and take part in an international software project.",
      },
      {
        label: "04 · 行动计划",
        title: "稳定练习英语",
        detail: "每天练习口语和听力，在工作中积累技术表达。",
        sentence: "To achieve this, I practise English regularly and try to learn useful technical expressions.",
      },
      {
        label: "05 · 海外经历",
        title: "短期去新加坡工作",
        detail: "希望在英语环境中参加国际团队项目，但暂时不打算永久移居。",
        sentence: "I would like to work in Singapore for a few months as part of an international software team.",
      },
      {
        label: "06 · 理想环境",
        title: "合作、成长与平衡",
        detail: "团队友好、有学习机会，同时减少不必要的加班。",
        sentence: "My ideal job would give me opportunities to grow while still allowing me to have a healthy work-life balance.",
      },
    ],
    baseAnswer:
      "I have worked as a software engineer for about six years since I graduated from university. I enjoy solving problems and learning new skills, so this career suits me well. My long-term goal is to improve my English and take part in an international software project. To achieve this, I practise speaking and listening regularly and learn useful technical expressions. In the future, I would also like to work in Singapore for a few months as part of an international team. It would help me understand a different working culture and become more confident when communicating in English. My ideal job would involve useful software projects, supportive teammates and clear working hours. I do not need a very high position, but I want opportunities to grow and a healthier work-life balance.",
    topics: [
      {
        id: "career-goal",
        code: "C1",
        name: "长期目标",
        question: "Describe a long-term goal or ambition you have.",
        answer: [
          special("I'd like to talk about a long-term goal I have for my career."),
          common("I have worked as a software engineer for about six years since I graduated from university."),
          common("My long-term goal is to improve my English and take part in an international software project."),
          special("I set this goal last year because I noticed that many useful projects involve people from different countries. Better English would help me explain my ideas and understand my teammates more clearly."),
          common("To achieve this, I practise English regularly and try to learn useful technical expressions."),
          special("I also plan to take part in more meetings in English and speak even when I am worried about making mistakes. At the same time, I will continue improving my software skills."),
          common("I enjoy solving problems and learning new skills, which is why this career suits me well."),
          special("This goal will take time, but it makes me feel motivated because it could give me more choices in the future."),
        ],
      },
      {
        id: "career-perfect-job",
        code: "C2",
        name: "理想工作",
        question: "Describe your perfect job.",
        answer: [
          special("My perfect job would still be working as a software engineer, but in a better working environment."),
          common("I have worked as a software engineer for about six years since I graduated from university."),
          common("I enjoy solving problems and learning new skills, which is why this career suits me well."),
          special("Ideally, I would work for an international technology company in a large city. Every day, I would develop useful software, discuss ideas with teammates and solve practical problems for users."),
          special("I would also like the team to be friendly and willing to share knowledge. That would help me learn without feeling afraid to ask questions."),
          common("My ideal job would give me opportunities to grow while still allowing me to have a healthy work-life balance."),
          special("I sometimes work overtime in my current job, so clear working hours are important to me. I want enough time to relax and spend time with my family."),
          special("For me, a perfect job is meaningful, stable and enjoyable rather than simply highly paid."),
        ],
      },
      {
        id: "career-overseas-job",
        code: "C3",
        name: "想做的短期海外工作",
        question: "Describe a short-term overseas job you would like to do.",
        answer: [
          special("I'd like to talk about a short-term software engineering job I would like to do overseas."),
          common("I have worked as a software engineer for about six years since I graduated from university."),
          common("I would like to work in Singapore for a few months as part of an international software team."),
          special("The job would involve developing a useful online service, attending team meetings and working with engineers from different countries."),
          special("I chose Singapore because English is widely used there, the technology industry is strong and it is not too far from China."),
          common("My long-term goal is to improve my English and take part in an international software project."),
          special("This short experience would help me practise English in real situations and understand a different working culture. I could also learn new ways of solving problems."),
          common("My ideal job would give me opportunities to grow while still allowing me to have a healthy work-life balance."),
          special("I would feel excited and a little nervous, but I think it would be a valuable experience."),
        ],
      },
    ],
    rules: [
      "长期目标题重点讲目标、制定时间和行动步骤；不要变成普通工作介绍。",
      "理想工作题重点讲地点、日常内容和工作环境；海外工作题必须明确国家和短期原因。",
      "当前工作事实使用现在完成时；未来目标使用 would like to、plan to 和 hope to。",
    ],
  },
];
