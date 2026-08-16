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
    id: "gardening-grandma",
    tab: "素材 04｜种菜的奶奶",
    title: "通用素材 04：爱种菜的奶奶",
    tagline: "人物 + 种植物 + 家庭关爱",
    description: "用奶奶在自家菜园种菜、教我照料植物并把蔬菜送给家人的故事，塑造一位健康、勤劳又关爱家人的老人。",
    storyline: "介绍奶奶 → 她种的蔬菜 → 跟她学种菜 → 她把蔬菜送给家人 → 理解她种菜的原因",
    modules: [
      {
        label: "01 · 人物介绍",
        title: "健康而有活力的奶奶",
        detail: "我想讲讲我的奶奶，她大概就是你能想象到的最典型的中国奶奶。她现在年纪挺大了，但不知道为什么还是特别有活力。她走路比我快，吃得比我健康，说实话，有时候我觉得我才是家里真正的老人。",
        sentence: "I’d like to talk about my grandma, who is probably the most typical Chinese grandma you can imagine. She is quite old now, but somehow she is still full of energy. She walks faster than me, eats healthier than me, and honestly, sometimes I feel like I’m the real old person in the family.",
      },
      {
        label: "02 · 种植内容",
        title: "家后面的小菜园",
        detail: "她特别喜欢自己种蔬菜。她家后面有一个小菜园，里面种了西红柿、黄瓜、胡萝卜和大蒜。她总说超市里的食物不够新鲜，而她自己种的东西又有机又免费。你懂的，中国奶奶一听到这两个魔法词会有多激动。",
        sentence: "One thing she really enjoys is growing her own vegetables. Behind her house, she has a small garden where she grows tomatoes, cucumbers, carrots, and garlic. She always says food from the supermarket is not fresh enough, while the things she grows herself are organic and free. And you know how excited Chinese grandmas get when they hear those two magic words.",
      },
      {
        label: "03 · 一起种菜",
        title: "学习照料植物",
        detail: "有时候我去看她，她一大早就把我从床上拽起来，直接带到她的小菜园里帮她种菜。她会教我怎么松土、拔草、浇水。她还告诉我阳光特别重要，因为万物都需要阳光才能生长，人也一样。她说得好像很简单，但我干了十分钟就已经累得不行。结果她还是精力充沛，在菜园里走来走去，像那是她的私人健身房。",
        sentence: "Sometimes when I visit her, she drags me out of bed early in the morning and takes me straight into her little garden to help her grow vegetables. She teaches me how to loosen the soil, pull out weeds, and water the plants. She also tells me that sunlight is really important because everything needs sunlight to grow, and people are no different. She makes it sound easy, but after ten minutes, I’m already completely worn out. Meanwhile, she is still full of energy, moving around like the garden is her personal gym.",
      },
      {
        label: "04 · 对家人的爱",
        title: "把收获送给家人",
        detail: "每次我去看她，她都会给我一大袋蔬菜。她记得我喜欢吃什么，从来不会忘记我的生日，有一次甚至用自己菜园里的胡萝卜给我做了一个胡萝卜蛋糕。",
        sentence: "Every time I visit her, she gives me a huge bag of vegetables. She remembers what I like to eat, never forgets my birthday, and once even made me a carrot cake with carrots from her own garden.",
      },
      {
        label: "05 · 故事含义",
        title: "种菜是照顾家人的方式",
        detail: "我想这也是她如此喜欢种菜的原因。对她来说，种菜不只是为了有菜吃，更是她一种默默守护所爱之人的方式，即便不在我们身边，也盼着我们身体健康。",
        sentence: "I guess that’s also why she loves growing vegetables so much. For her, it’s not just about food. It’s her quiet way of taking care of the people she loves and making sure we are healthy, even when she is not right beside us.",
      },
    ],
    baseAnswer:
      "I’d like to talk about my grandma, who is probably the most typical Chinese grandma you can imagine. She is quite old now, but somehow she is still full of energy. She walks faster than me, eats healthier than me, and honestly, sometimes I feel like I’m the real old person in the family. One thing she really enjoys is growing her own vegetables. Behind her house, she has a small garden where she grows tomatoes, cucumbers, carrots, and garlic. She always says food from the supermarket is not fresh enough, while the things she grows herself are organic and free. And you know how excited Chinese grandmas get when they hear those two magic words. Sometimes when I visit her, she drags me out of bed early in the morning and takes me straight into her little garden to help her grow vegetables. She teaches me how to loosen the soil, pull out weeds, and water the plants. She also tells me that sunlight is really important because everything needs sunlight to grow, and people are no different. She makes it sound easy, but after ten minutes, I’m already completely worn out. Meanwhile, she is still full of energy, moving around like the garden is her personal gym. Every time I visit her, she gives me a huge bag of vegetables. She remembers what I like to eat, never forgets my birthday, and once even made me a carrot cake with carrots from her own garden. I guess that’s also why she loves growing vegetables so much. For her, it’s not just about food. It’s her quiet way of taking care of the people she loves and making sure we are healthy, even when she is not right beside us.",
    topics: [
      {
        id: "grandma-grow-plants",
        code: "G1",
        name: "喜欢种植物的人",
        question: "Describe a person who loves to grow plants at home or in a garden.",
        answer: [
          special("I'd like to talk about my grandma, who really loves growing vegetables."),
          common("Although she is quite old, she is still healthy and full of energy."),
          common("Behind her house, she has a small garden where she grows tomatoes, cucumbers, carrots and garlic."),
          special("She looks after the garden almost every morning. She waters the plants, pulls out weeds and checks whether they are growing well."),
          common("When I visit her, she teaches me how to loosen the soil, pull out weeds and water the plants."),
          common("After only ten minutes, I usually feel tired, but she is still moving around the garden with lots of energy."),
          special("She says gardening keeps her active and makes her feel calm. She also enjoys seeing a small seed slowly turn into food for the family."),
          common("Every time I visit her, she gives me a large bag of vegetables and reminds me to eat healthily."),
          common("For her, growing vegetables is not only a hobby. It is also a quiet way of caring for the people she loves."),
          special("That is why I admire her and enjoy spending time with her in the garden."),
        ],
      },
      {
        id: "grandma-energetic-person",
        code: "G2",
        name: "精力充沛的老人",
        question: "Describe an elderly person you know who has an interesting life.",
        answer: [
          special("I'd like to talk about my grandma, an elderly person whose active life really impresses me."),
          common("Although she is quite old, she is still healthy and full of energy."),
          special("She gets up early, cooks simple meals and spends a lot of time outdoors instead of sitting in front of a television."),
          common("Behind her house, she has a small garden where she grows tomatoes, cucumbers, carrots and garlic."),
          common("When I visit her, she teaches me how to loosen the soil, pull out weeds and water the plants."),
          common("After only ten minutes, I usually feel tired, but she is still moving around the garden with lots of energy."),
          special("She also enjoys talking to neighbours and sharing vegetables with them, so she knows almost everyone nearby."),
          common("Every time I visit her, she gives me a large bag of vegetables and reminds me to eat healthily."),
          special("I find her life interesting because it is simple but meaningful. She stays active, helps other people and enjoys what she does every day."),
        ],
      },
      {
        id: "grandma-learned-skill",
        code: "G3",
        name: "从长辈那里学到的技能",
        question: "Describe a useful skill you learned from an older person.",
        answer: [
          special("I'd like to talk about a useful gardening skill that I learned from my grandma."),
          common("Behind her house, she has a small garden where she grows tomatoes, cucumbers, carrots and garlic."),
          special("One weekend, I asked if I could help because I had never grown anything before."),
          common("She taught me how to loosen the soil, pull out weeds and water the plants."),
          special("She also explained that plants need enough sunlight and water, but too much water can be harmful."),
          common("After only ten minutes, I usually feel tired, but she is still moving around the garden with lots of energy."),
          special("At first, I found the work tiring and a little difficult. However, I became more interested when I saw the vegetables growing."),
          common("Every time I visit her, she gives me a large bag of vegetables and reminds me to eat healthily."),
          special("This skill is useful because it helps me understand where food comes from, and it gives me a relaxing activity away from my phone and computer."),
        ],
      },
    ],
    rules: [
      "人物题先突出奶奶的性格和生活方式；植物题重点讲种什么、怎么种和为什么喜欢。",
      "技能题把奶奶压缩成引导者，详细讲自己学了哪些步骤以及学后的感受。",
      "奶奶现在仍然种菜的事实用现在时；某次跟她学习的经历用过去时。",
    ],
  },
  {
    id: "phone-detox",
    tab: "素材 05｜戒断手机瘾",
    title: "通用素材 05：减少手机使用",
    tagline: "近期改变 + 建议 + 克服困难",
    description: "用自己沉迷手机、向朋友 Sara 求助、阅读一本书并逐步改变习惯的故事，讲清问题、行动和结果。",
    storyline: "意识到手机成瘾 → 向 Sara 求助 → 阅读相关书籍 → 删除诱人应用并设置限制 → 注意力和生活状态改善",
    modules: [
      {
        label: "01 · 原来的问题",
        title: "过度依赖手机",
        detail: "有段时间我简直是在跟手机谈恋爱。每天早上睁眼先摸它，晚上闭眼前还得跟它道晚安。最糟的是，这一切根本不好玩，就像在吃数字垃圾食品，而且不仅没饱，反而更空虚。",
        sentence: "There was a time when I was basically dating my phone. It was the first thing I touched in the morning and the last thing I said goodnight to. And the worst part? It wasn’t even fun. It felt like eating digital junk food, and I wasn’t full. I just felt empty.",
      },
      {
        label: "02 · 寻求帮助",
        title: "请教朋友 Sara",
        detail: "后来我知道我需要做点事情改变了，于是我去找到我的朋友Sara——每次见到她，她几乎都不碰手机，好像生活在另一个宇宙。我问她是怎么做到的。她笑了笑说：“哦，我以前跟你一模一样。”然后她递给我一本书，叫《How to Break Up with Your Phone》（如何与手机分手），还说：“相信我，它真的改变了我的生活。”",
        sentence: "Eventually, I knew I had to do something. So I reached out to my friend Sara—every time I saw her, she barely touched her phone, like she was living in another universe. I asked her how she did it. She just laughed and said, ‘Oh, I used to be exactly like you.’ Then she handed me this book called How to Break Up with Your Phone and said, ‘Trust me, it changed my life.’",
      },
      {
        label: "03 · 一本有用的书",
        title: "理解上瘾的原因",
        detail: "这本书并不只是简单让我“把手机放下”——它让我明白了我为什么放不下手机，还教我该怎么做。它拆解了注意力上瘾背后的科学原理，还给了我一些可操作的小技巧，让手机变得不再那么诱人。",
        sentence: "The book didn’t just say ‘put your phone down’—it showed me exactly why I couldn’t, and what to do about it. It broke down the science of attention addiction and gave me doable tricks to make my phone less tempting.",
      },
      {
        label: "04 · 第一项改变",
        title: "让刷手机变得麻烦",
        detail: "读完那本书后，我立刻开始实践里面的建议。我做的第一件事就是“制造阻力”。我删掉了所有那些下意识就会打开的App——抖音、微信、Instagram。如果真的需要再用，我就再次下载安装。我也不再让手机陪我睡觉了。现在它被放在我够不到的地方，比如房间的另一头。",
        sentence: "After finishing the book, I started applying the tips right away. The first thing I did was create friction. I deleted all the apps I used to open on autopilot—TikTok, WeChat, Instagram. If I really needed them, I’d reinstall. I also stopped letting my phone sleep next to me. Now it stays somewhere out of reach—like across the room.",
      },
      {
        label: "05 · 第二项改变",
        title: "设置停止提示",
        detail: "我还学到一个技巧：给自己加一个“停止提示”。我意识到很多App的设计就是让你停不下来，比如抖音和Instagram，一个视频接着一个视频。所以我开始在手机里设置使用时间限制。时间一到，手机就会提醒我该停下来了，去做点别的事情。这个小小的中断，真的很有用，能帮我打断那种无限循环的刷屏行为。",
        sentence: "There was also another trick I learned from the book: adding stopping cues. I realized a lot of apps are designed to keep you scrolling forever—like TikTok or Instagram, where one video leads straight into the next. So I started setting screen time limits on my phone. When the time is up, it reminds me to stop and do something else. That little pause really helps me break the cycle.",
      },
      {
        label: "06 · 改变后的感受",
        title: "重新掌控生活",
        detail: "一个月下来，我真的感觉好多了。脑子安静了，注意力更集中。虽然我还是用手机，但它现在只是个工具，不再是控制我的东西。最棒的是，我终于有种“自己在生活”的感觉，而不是只隔着屏幕看别人过日子。",
        sentence: "After a month, I felt so much better. My mind was quieter, and I was more focused. I still use my phone, but now it feels more like a tool instead of something that controls me. The best part is that I finally feel like I'm living again, not just watching other people live through a screen.",
      },
    ],
    baseAnswer:
      "There was a time when I was basically dating my phone. It was the first thing I touched in the morning and the last thing I said goodnight to. And the worst part? It wasn’t even fun. It felt like eating digital junk food, and I wasn’t full. I just felt empty. Eventually, I knew I had to do something. So I reached out to my friend Sara—every time I saw her, she barely touched her phone, like she was living in another universe. I asked her how she did it. She just laughed and said, ‘Oh, I used to be exactly like you.’ Then she handed me this book called How to Break Up with Your Phone and said, ‘Trust me, it changed my life.’ The book didn’t just say ‘put your phone down’—it showed me exactly why I couldn’t, and what to do about it. It broke down the science of attention addiction and gave me doable tricks to make my phone less tempting. After finishing the book, I started applying the tips right away. The first thing I did was create friction. I deleted all the apps I used to open on autopilot—TikTok, WeChat, Instagram. If I really needed them, I’d reinstall. I also stopped letting my phone sleep next to me. Now it stays somewhere out of reach—like across the room. There was also another trick I learned from the book: adding stopping cues. I realized a lot of apps are designed to keep you scrolling forever—like TikTok or Instagram, where one video leads straight into the next. So I started setting screen time limits on my phone. When the time is up, it reminds me to stop and do something else. That little pause really helps me break the cycle. After a month, I felt so much better. My mind was quieter, and I was more focused. I still use my phone, but now it feels more like a tool instead of something that controls me. The best part is that I finally feel like I'm living again, not just watching other people live through a screen.",
    topics: [
      {
        id: "phone-recent-change",
        code: "P1",
        name: "近期做出的改变",
        question: "Describe a recent change you made in your life.",
        answer: [
          special("I'd like to talk about a recent change I made to reduce the amount of time I spend on my phone."),
          common("There was a time when my phone was the first thing I checked in the morning and the last thing I used at night."),
          special("I often watched short videos for hours, but afterwards I felt tired and empty."),
          common("I asked my friend Sara for advice because she rarely used her phone when we spent time together."),
          common("She recommended a book that explained why phones are so tempting and gave me several practical tips."),
          common("I deleted the apps I opened without thinking and kept my phone away from my bed at night."),
          common("I also set screen-time limits, so my phone reminded me to stop and do something else."),
          special("The first week was difficult because checking my phone had become a habit. However, I slowly learned to read, exercise or talk to people instead."),
          common("After a month, I felt calmer and more focused. My phone became a useful tool instead of something that controlled me."),
          special("This change was small, but it improved both my work and my daily life."),
        ],
      },
      {
        id: "phone-helped-problem",
        code: "P2",
        name: "别人帮助解决问题",
        question: "Describe a time when someone helped you solve a problem.",
        answer: [
          special("I'd like to talk about a time when my friend Sara helped me deal with my phone addiction."),
          common("There was a time when my phone was the first thing I checked in the morning and the last thing I used at night."),
          special("I knew the habit was affecting my sleep and concentration, but I did not know how to change it."),
          common("I asked my friend Sara for advice because she rarely used her phone when we spent time together."),
          special("She listened patiently and told me that she had experienced the same problem before, so I did not feel embarrassed."),
          common("She recommended a book that explained why phones are so tempting and gave me several practical tips."),
          common("I deleted the apps I opened without thinking and kept my phone away from my bed at night."),
          common("I also set screen-time limits, so my phone reminded me to stop and do something else."),
          common("After a month, I felt calmer and more focused. My phone became a useful tool instead of something that controlled me."),
          special("I was grateful to Sara because her advice was simple, practical and based on her own experience."),
        ],
      },
      {
        id: "phone-overcame-difficulty",
        code: "P3",
        name: "克服困难并取得成功",
        question: "Describe a difficult thing you did and succeeded in doing.",
        answer: [
          special("I'd like to talk about how I successfully reduced my phone use, which was more difficult than I expected."),
          common("There was a time when my phone was the first thing I checked in the morning and the last thing I used at night."),
          special("The habit affected my sleep and made it harder for me to focus at work."),
          common("I asked my friend Sara for advice because she rarely used her phone when we spent time together."),
          common("She recommended a book that explained why phones are so tempting and gave me several practical tips."),
          common("I deleted the apps I opened without thinking and kept my phone away from my bed at night."),
          common("I also set screen-time limits, so my phone reminded me to stop and do something else."),
          special("At first, I kept reaching for my phone without thinking, and I nearly gave up several times. I continued because I wanted better sleep and more control over my time."),
          common("After a month, I felt calmer and more focused. My phone became a useful tool instead of something that controlled me."),
          special("I felt proud because I had changed a habit that once seemed impossible to control."),
        ],
      },
      {
        id: "phone-advice",
        code: "P4",
        name: "给别人的建议",
        question: "Describe a time when you gave someone useful advice.",
        answer: [
          special("I'd like to talk about some useful advice I gave a colleague who was spending too much time on his phone."),
          common("There was a time when my phone was the first thing I checked in the morning and the last thing I used at night."),
          special("Because I had experienced the same problem, I understood why it was difficult for him to stop."),
          common("I told him about a book that explained why phones are so tempting and gave several practical tips."),
          common("I suggested deleting the apps he opened without thinking and keeping his phone away from his bed at night."),
          common("I also suggested setting screen-time limits, so his phone could remind him to stop and do something else."),
          special("I did not tell him to stop using his phone completely. I explained that small changes were easier to follow."),
          special("A few weeks later, he told me that he was sleeping better and wasting less time online."),
          common("My phone became a useful tool instead of something that controlled me."),
          special("I felt happy that my own experience could help another person."),
        ],
      },
    ],
    rules: [
      "近期改变题突出改变前后；求助题突出 Sara 做了什么；困难题突出自己坚持的过程。",
      "建议题把 Sara 的建议改成自己给别人的建议，并交代对方采用后的结果。",
      "讲过去的习惯和行动用过去时；描述现在的状态与收获用现在时。",
    ],
  },
];
