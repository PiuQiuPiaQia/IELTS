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
];
