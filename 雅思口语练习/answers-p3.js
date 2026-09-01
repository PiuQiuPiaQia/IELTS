// Part 3 答案覆盖表（2026-09-01 重写）。
// 键 = 题组 id + "||" + 英文题目原文；a = 中文答案（PREC 四句）；p = 该答案用到的词块。
// 全部答案只使用核心词块页当前渲染的 73 个词块。data.js 原答案原样保留，此文件优先级更高。
// app.js 里有 typeof 兜底：本文件若加载失败或语法出错，页面自动退回 data.js 的原答案，不会白屏。
window.P3_ANSWERS = {
  "new-language-speaker||Are there many people who can speak foreign languages in your country?": {
    "a": "是的，在我们国家会说外语的人比以前多多了（Yes, definitely.）。主要是因为会外语的人工作机会更多（many more job opportunities），很多公司招人都要求英语好（mainly because…）。拿我自己来说，我大学同学基本都能用英语聊上几句，有几个还在学日语（Take my own case,…）。所以我觉得以后会外语的人还会更多（That's why…）。",
    "p": ["Yes, definitely.", "many more job opportunities", "mainly because…", "Take my own case,…", "That's why…"]
  },
  "new-language-speaker||Does speaking other languages help at work?": {
    "a": "是的，会说外语对工作帮助很大（Yes, definitely.）。主要是因为很多公司都有外国客户（mainly because…），会外语就能直接听懂他们说什么（listen to what customers say）。比如我一个朋友会日语，公司谈生意都带上他，后来还给他涨了工资（For example,…）。所以他现在收入很稳定（a stable income），在公司也越来越受重视（As a result,…）。",
    "p": ["Yes, definitely.", "mainly because…", "listen to what customers say", "For example,…", "a stable income", "As a result,…"]
  },
  "new-language-speaker||Do people learn any languages other than English?": {
    "a": "是的，除了英语，学日语和韩语的人也挺多的（Yes, definitely.）。主要是因为现在网上的课程特别多（mainly because…），大家能选的语言比以前多多了（there's a lot more choice now）。比如我同事在学韩语，她喜欢看韩剧，每天下班学半个小时（For example,…）。所以我觉得以后学小语种的人会更多（That's why…）。",
    "p": ["Yes, definitely.", "mainly because…", "there's a lot more choice now", "For example,…", "That's why…"]
  },
  "new-language-speaker||Why is it easier for children to learn new things  than for adults?": {
    "a": "我觉得孩子学新东西确实比大人快。主要是因为孩子不怕说错，什么都愿意试一试（keep an open mind），压力比大人小很多（mainly because…）。拿我自己来说（Take my own case,…），我小学开始学英语，每天背几个单词，很快就能看到进步（see real progress）。所以我觉得学语言这种事，越早开始越好（That's why…）。",
    "p": ["keep an open mind", "mainly because…", "Take my own case,…", "see real progress", "That's why…"]
  },
  "new-language-speaker||How do people learn new things?": {
    "a": "这个看情况，不过大部分人现在都是上网自己学（It depends, but usually…）。主要是因为网上的教程特别多（mainly because…），可以把要学的东西拆成小步骤，一点一点来（break it down into small steps）。比如我想学做菜，就跟着手机上的视频做，试了几次就会了（For example,…）。所以我觉得现在学新东西比以前方便多了（As a result,…）。",
    "p": ["It depends, but usually…", "mainly because…", "break it down into small steps", "For example,…", "As a result,…"]
  },
  "new-language-speaker||What is the most important thing for learning a language well?": {
    "a": "我觉得最重要的是每天都练，养成习惯（stick to a routine）。最主要的原因是语言要靠一点点积累，学一天停三天很快就忘了（The main reason is that…）。拿我自己来说（Take my own case,…），我每天早上背几个单词，坚持一个月就能看到明显的进步（see real progress）。所以我觉得坚持比找什么好方法都管用（That's why…）。",
    "p": ["stick to a routine", "The main reason is that…", "Take my own case,…", "see real progress", "That's why…"]
  },
  "new-successful-businessperson||Why do some people start their own business?": {
    "a": "我觉得很多人创业是想自己做主，不想一直听别人安排。最主要的原因是想自己当老板（The main reason is that…），能按自己的想法做事（run my own business），做成了也特别有成就感（a real sense of achievement）。比如我表哥开了家小咖啡店，虽然很辛苦，但他每天都挺开心（For example,…）。所以我觉得很多人宁愿累一点，也要自己干（That's why…）。",
    "p": ["The main reason is that…", "run my own business", "a real sense of achievement", "For example,…", "That's why…"]
  },
  "new-successful-businessperson||Should governments provide financial support to start-ups?": {
    "a": "我觉得政府应该给刚起步的小公司一些支持（the government should support…）。主要是因为小公司刚开始花钱的地方特别多（mainly because…），有点补贴就能把成本压下来（keep the costs down）。比如我们楼下那家面包店，开店的时候拿到过政府补贴，才撑到现在（For example,…）。所以政府帮一把（As a result,…），市面上的工作机会也会变多（many more job opportunities）。",
    "p": ["the government should support…", "mainly because…", "keep the costs down", "For example,…", "As a result,…", "many more job opportunities"]
  },
  "new-successful-businessperson||Do most people prefer shopping at big stores or small stores?": {
    "a": "这个看情况，不过大部分人还是更喜欢去大商场（It depends, but usually…）。最主要的原因是大商场东西比较全（The main reason is that…），能挑的比小店多多了（there's a lot more choice now）。比如我妈每周都去一次大超市，菜和日用品一次就买齐了（For example,…）。所以我觉得大商场比小店更受欢迎（That's why…）。",
    "p": ["It depends, but usually…", "The main reason is that…", "there's a lot more choice now", "For example,…", "That's why…"]
  },
  "new-successful-businessperson||What makes a business successful?": {
    "a": "我觉得最重要的是多听顾客怎么说（listen to what customers say）。主要是因为东西是卖给顾客的，顾客满意才会再来（mainly because…），另外成本也要控制住（keep the costs down）。拿我自己来说，我常去的小饭馆老板每次都问我们菜合不合口味，回头客特别多（Take my own case,…）。所以我觉得肯听顾客话的生意才能做长久（That's why…）。",
    "p": ["listen to what customers say", "mainly because…", "keep the costs down", "Take my own case,…", "That's why…"]
  },
  "new-successful-businessperson||What makes a business fail?": {
    "a": "我觉得生意失败大多是老板自己的问题。最主要的原因是成本一直压不下来（The main reason is that…），而且老板不听顾客的意见（listen to what customers say）。比如我们小区有家火锅店，又贵又不好吃，客人提意见老板也不改，一年就关门了（For example,…）。所以钱一花完，店自然就开不下去了（As a result,…）。",
    "p": ["The main reason is that…", "listen to what customers say", "For example,…", "As a result,…"]
  },
  "new-successful-businessperson||Is it easy to set up a new business in your country?": {
    "a": "我觉得在我们国家开公司不太容易（Not really.）。主要是因为要办的手续挺多（mainly because…），房租又贵，成本很难压下来（keep the costs down）。拿我自己来说，我朋友去年想开个小店，光租金和装修就花了十几万，最后放弃了（Take my own case,…）。所以我觉得在我们这儿创业，压力还是挺大的（That's why…）。",
    "p": ["Not really.", "mainly because…", "keep the costs down", "Take my own case,…", "That's why…"]
  },
  "new-successful-company-worker||Do you think governments should provide financial support to companies?": {
    "a": "我觉得政府应该给公司一些资金上的支持（the government should support…）。主要是因为很多小公司刚起步（mainly because…），成本压不下来就很难撑住（keep the costs down）。比如疫情那几年，我们楼下那家店拿到过补贴，才没有关门（For example,…）。所以政府帮一把（As a result,…），很多人的工作和收入也就保住了（a stable income）。",
    "p": ["the government should support…", "mainly because…", "keep the costs down", "For example,…", "As a result,…", "a stable income"]
  },
  "new-successful-company-worker||Do you think companies should donate money to help society?": {
    "a": "我觉得公司应该捐钱帮助社会（Yes, definitely.）。最主要的原因是公司赚了钱（The main reason is that…），捐一点就能真正帮到有困难的人（make a difference to other people）。比如我以前的公司每年都给山区学校捐书，同事们也觉得挺自豪（For example,…）。所以我觉得这是好事（That's why…），每家公司出一点，慢慢就能帮到很多人（small changes add up）。",
    "p": ["Yes, definitely.", "The main reason is that…", "make a difference to other people", "For example,…", "That's why…", "small changes add up"]
  },
  "new-successful-company-worker||Do you think customer satisfaction is important for a company?": {
    "a": "我觉得顾客满不满意对公司特别重要（Yes, definitely.）。主要是因为顾客满意才会再来买，还会讲给朋友听（mainly because…），所以公司要多听顾客的意见（listen to what customers say）。拿我自己来说，我常去的奶茶店店员每次都问我甜度合不合适，我就一直去那家（Take my own case,…）。所以我觉得顾客满意，生意才能越做越好（That's why…）。",
    "p": ["Yes, definitely.", "mainly because…", "listen to what customers say", "Take my own case,…", "That's why…"]
  },
  "new-medical-career||Do you think being a doctor is easy or difficult?": {
    "a": "我觉得当医生很难，不是一般人能做的。最主要的原因是这份工作责任很大（The main reason is that…），一点小错都不能出（it's a big responsibility）。比如我一个亲戚在医院上班，经常加班到很晚，周末还要值班（For example,…）。所以我觉得这份工作真的不轻松（That's why…），不过也很有成就感（a real sense of achievement）。",
    "p": ["The main reason is that…", "it's a big responsibility", "For example,…", "That's why…", "a real sense of achievement"]
  },
  "new-medical-career||Do you think learning biology is interesting for children?": {
    "a": "我觉得孩子会觉得生物挺有意思的（Yes, definitely.）。主要是因为生物讲的都是身边的东西，比如小动物和植物（mainly because…），孩子听起来不费劲（easy to follow）。拿我自己来说，我小时候在家种过一颗豆子，天天看它发芽，觉得特别神奇（Take my own case,…）。所以我觉得这样的课孩子都会喜欢（That's why…）。",
    "p": ["Yes, definitely.", "mainly because…", "easy to follow", "Take my own case,…", "That's why…"]
  },
  "new-medical-career||Why do you some children want to become doctors?": {
    "a": "我觉得孩子想当医生，大多是想帮别人。最主要的原因是在孩子眼里，医生能把病人治好（The main reason is that…），是真的能帮到别人（make a difference to other people）。比如我表妹小时候生病，医生几天就把她治好了，她从那以后就想当医生（For example,…）。所以很多孩子从小就有这个想法（That's why…），这也让他们学会替别人着想（it teaches you to think about others）。",
    "p": ["The main reason is that…", "make a difference to other people", "For example,…", "That's why…", "it teaches you to think about others"]
  },
  "new-medical-career||Do you think governments should put a large amount of money into medical research?": {
    "a": "我觉得政府应该在医学研究上多花点钱，这很有必要（the government should support…）。最主要的原因是很多病现在还治不好（The main reason is that…），研究出新药能帮到很多人（make a difference to other people）。比如以前研究疫苗花了很多钱，后来救了不少人的命（For example,…）。所以我觉得这笔钱花得很值（That's why…）。",
    "p": ["the government should support…", "The main reason is that…", "make a difference to other people", "For example,…", "That's why…"]
  },
  "new-childhood-friend||Do you still keep in touch with your friends from childhood? Why or why not?": {
    "a": "是的，我到现在还和小时候的朋友保持联系（Yes, definitely.）。主要是因为从小一起长大，感情跟别人不一样（mainly because…），他们发消息我都会尽快回（get back to… as soon as I can）。拿我自己来说，我有个发小在外地工作，我们每个月都会打一次视频（Take my own case,…）。所以就算不常见面，关系也一直在（That's why…）。",
    "p": ["Yes, definitely.", "mainly because…", "get back to… as soon as I can", "Take my own case,…", "That's why…"]
  },
  "new-childhood-friend||How important is childhood friendship to children?": {
    "a": "我觉得童年的朋友对孩子特别重要。最主要的原因是跟朋友一起玩，孩子才学得会分享（The main reason is that…），也会替别人着想（it teaches you to think about others）。比如我小时候和邻居家的孩子天天一块玩，有什么好吃的都会分他一半（For example,…）。所以我觉得孩子从小就该有几个好朋友（That's why…）。",
    "p": ["The main reason is that…", "it teaches you to think about others", "For example,…", "That's why…"]
  },
  "new-childhood-friend||What do you think of communicating via social media?": {
    "a": "我觉得用社交软件聊天有好的一面，也有不好的一面（it has both good and bad sides）。主要是因为发消息确实方便（mainly because…），不过大家都有忙的时候，回得会很慢（everyone gets busy sometimes）。拿我自己来说，我给朋友发的消息，他有时候第二天才回我（Take my own case,…）。所以我觉得急事还是打电话更靠谱（That's why…）。",
    "p": ["it has both good and bad sides", "mainly because…", "everyone gets busy sometimes", "Take my own case,…", "That's why…"]
  },
  "new-childhood-friend||Do you think online communication through social media will replace face-to-face communication?": {
    "a": "我觉得网上聊天不会取代见面（Not really.）。最主要的原因是发消息虽然省时间（The main reason is that…），但看不出对方的语气，容易误会（it saves me a lot of time, but…）。比如我和朋友周末见了一面，聊了两个小时，比在网上发一个月消息还开心（For example,…）。所以我觉得见面聊天永远代替不了（That's why…）。",
    "p": ["Not really.", "The main reason is that…", "it saves me a lot of time, but…", "For example,…", "That's why…"]
  },
  "new-childhood-friend||What's the difference between having younger friends and older friends?": {
    "a": "我觉得最大的区别是聊的话题不一样。最主要的原因是年纪大的朋友经历多（The main reason is that…），遇到麻烦可以找他们帮忙（turn to… for help）。拿我自己来说，我跟同龄的朋友一起打球聊游戏，跟年长的同事就聊工作上的事（Take my own case,…）。所以我觉得两种朋友都要交（That's why…），跟不同的人聊天想法会更开阔（keep an open mind）。",
    "p": ["The main reason is that…", "turn to… for help", "Take my own case,…", "That's why…", "keep an open mind"]
  },
  "new-childhood-friend||Has technology changed people's friendships? How?": {
    "a": "我觉得科技让朋友之间的相处变了很多（Yes, definitely.）。主要是因为现在联系太方便了（mainly because…），发消息省了很多时间，但见面反而少了（it saves me a lot of time, but…）。比如我和朋友出去吃饭，坐下没几分钟大家就各自看手机（For example,…）。所以联系是更方便了，感情却不一定更近（As a result,…）。",
    "p": ["Yes, definitely.", "mainly because…", "it saves me a lot of time, but…", "For example,…", "As a result,…"]
  },
  "new-home-gardener||What are the advantages of growing vegetables or flowers at home?": {
    "a": "我觉得在家种菜种花好处挺多，最大的好处是能放松（relax after a long day）。最主要的原因是弄花草的时候不用想别的（The main reason is that…），能忘掉工作上的烦心事（it helps me forget about…）。拿我自己来说，我在阳台种了几盆小番茄，每天浇浇水，看它慢慢长大很开心（Take my own case,…）。所以我觉得在家种点东西挺值的（That's why…）。",
    "p": ["relax after a long day", "The main reason is that…", "it helps me forget about…", "Take my own case,…", "That's why…"]
  },
  "new-home-gardener||Do many people grow vegetables or flowers at home in your country?": {
    "a": "是的，在我们这儿在家种花种菜的人挺多（Yes, definitely.）。主要是因为不用花什么钱（mainly because…），几块钱的种子就能种一阳台（keep the costs down）。比如我们楼上的阿姨，阳台上全是花和小葱，路过的人都会看两眼（For example,…）。所以这几年在家种东西的人越来越多（As a result,…）。",
    "p": ["Yes, definitely.", "mainly because…", "keep the costs down", "For example,…", "As a result,…"]
  },
  "new-home-gardener||Is it easy to grow plants at home?": {
    "a": "这个看情况，不过一般的花草种起来不难（It depends, but usually…）。主要是因为常见的植物很好养（mainly because…），网上的教程也简单好懂（easy to follow）。拿我自己来说，我养的绿萝就放在窗边，一周浇一次水，长得挺好（Take my own case,…）。所以我觉得只要肯花点时间，谁都能种活（That's why…）。",
    "p": ["It depends, but usually…", "mainly because…", "easy to follow", "Take my own case,…", "That's why…"]
  },
  "new-home-gardener||Why do some people like to grow plants?": {
    "a": "我觉得很多人种花草，就是想让自己放松一下（relax after a long day）。最主要的原因是现在大家上班都挺累（The main reason is that…），下班弄弄花草还能透透气（get some fresh air）。比如我同事每天回家先给阳台的花浇水，他说这样心情会好很多（For example,…）。所以喜欢种花的人才越来越多（That's why…）。",
    "p": ["relax after a long day", "The main reason is that…", "get some fresh air", "For example,…", "That's why…"]
  },
  "new-home-gardener||Why do some people prefer to grow their own fruits and vegetables instead of buying them from the market?": {
    "a": "我觉得很多人自己种，主要是图个放心。最主要的原因是自己种的知道有没有打药（The main reason is that…），买菜的钱也省了一点（keep the costs down）。拿我自己来说，我家阳台种过西红柿，摘下来洗洗就能吃，比买的甜（Take my own case,…）。所以有条件的人都想自己种点（That's why…），吃上自己种的也很有成就感（a real sense of achievement）。",
    "p": ["The main reason is that…", "keep the costs down", "Take my own case,…", "That's why…", "a real sense of achievement"]
  },
  "new-home-gardener||Do you think students should learn to grow plant?": {
    "a": "我觉得学生应该学着种点东西（Yes, definitely.）。主要是因为植物要天天浇水才活得下去（mainly because…），学生管着它就知道什么叫责任（it's a big responsibility）。比如我们学校以前每个班门口都放几盆花，同学轮流管，大家都挺上心（For example,…）。所以我觉得学校可以多安排这样的活动（That's why…）。",
    "p": ["Yes, definitely.", "mainly because…", "it's a big responsibility", "For example,…", "That's why…"]
  },
  "new-success-after-difficulty||In your country, what industry is it easier to be successful in?": {
    "a": "我觉得互联网这一行更容易做起来。最主要的原因是现在大家买东西看视频都用手机（The main reason is that…），这一行的工作机会特别多（many more job opportunities）。比如我一个同学做短视频，两三年就攒了不少客户（For example,…）。所以不少年轻人都往这行走（That's why…），做久了收入也很稳定（a stable income）。",
    "p": ["The main reason is that…", "many more job opportunities", "For example,…", "That's why…", "a stable income"]
  },
  "new-success-after-difficulty||What's the difference between ordinary people and successful people?": {
    "a": "我觉得最大的区别是能不能坚持。最主要的原因是成功的人会先给自己定个明确的目标（The main reason is that…），再把大目标拆成小步骤（break it down into small steps）。比如我一个朋友想考研，每天只背五十个单词，一年下来真的考上了（For example,…）。所以我觉得区别就在能不能坚持（That's why…），坚持下来的人才看得到进步（see real progress）。",
    "p": ["The main reason is that…", "break it down into small steps", "For example,…", "That's why…", "see real progress"]
  },
  "new-success-after-difficulty||What are the factors leading to people's success?": {
    "a": "我觉得最重要的是有目标，还要能坚持。主要是因为定了明确的目标（set myself a clear goal），每天就知道该做什么，不会瞎忙（mainly because…）。拿我自己来说（Take my own case,…），我准备考试的时候每天固定学两个小时（stick to a routine），一直没断过。所以肯坚持的人（As a result,…），最后都能看到真的进步（see real progress）。",
    "p": ["set myself a clear goal", "mainly because…", "Take my own case,…", "stick to a routine", "As a result,…", "see real progress"]
  },
  "new-long-term-goal||What goals should a society have?": {
    "a": "我觉得一个社会最该做的，是让大家过得安心。最主要的原因是普通人最在乎的就是安全（The main reason is that…），出门和上学都能放心（keep people safe）。比如我们小区装了摄像头以后，晚上走路都不害怕了（For example,…）。所以我觉得这些事做好了（That's why…），大家才能有稳定的收入和生活（a stable income）。",
    "p": ["The main reason is that…", "keep people safe", "For example,…", "That's why…", "a stable income"]
  },
  "new-long-term-goal||Do people need to have goals?": {
    "a": "是的，我觉得人一定要有目标（Yes, definitely.）。主要是因为定了明确的目标（set myself a clear goal），每天才知道自己该做什么，不会瞎忙（mainly because…）。拿我自己来说（Take my own case,…），我考雅思时每天背单词，一个月就能看到进步（see real progress）。所以我觉得有目标的人，日子过得更有劲（That's why…）。",
    "p": ["Yes, definitely.", "set myself a clear goal", "mainly because…", "Take my own case,…", "see real progress", "That's why…"]
  },
  "new-long-term-goal||What goals do people at your age have?": {
    "a": "我觉得我这个年纪的人，最想要的是一份稳定的收入（a stable income）。主要是因为大家都到了要养家的年纪（mainly because…），房租和生活开销都得自己扛（it's a big responsibility）。比如我身边的几个朋友，都在找能长期做的工作，不太想换来换去（For example,…）。所以我觉得同龄人的目标基本都差不多（That's why…）。",
    "p": ["a stable income", "mainly because…", "it's a big responsibility", "For example,…", "That's why…"]
  },
  "new-long-term-goal||Is it necessary to give advice to children?": {
    "a": "我觉得有必要给孩子一些建议（Yes, definitely.）。最主要的原因是孩子经历少（The main reason is that…），碰到拿不准的事得找大人帮忙（turn to… for help）。比如选学校选专业，家长讲讲自己的经验，孩子能少走弯路（For example,…）。所以建议还是要给（That's why…），不过大人也要听听孩子的想法（keep an open mind）。",
    "p": ["Yes, definitely.", "The main reason is that…", "turn to… for help", "For example,…", "That's why…", "keep an open mind"]
  },
  "new-long-term-goal||What goals do young people usually have?": {
    "a": "我觉得年轻人最想的，是在工作上做出点成绩。主要是因为刚毕业那几年机会比较多（mainly because…），大家都想多试几个方向（many more job opportunities）。比如我几个同学，有的想进大公司（For example,…），有的想自己开个小店当老板（run my own business）。所以我觉得年轻人的目标大多都跟工作有关（That's why…）。",
    "p": ["mainly because…", "many more job opportunities", "For example,…", "run my own business", "That's why…"]
  },
  "new-long-term-goal||What should people do to achieve their goals?": {
    "a": "我觉得最关键的是把大目标拆成小步骤（break it down into small steps）。最主要的原因是目标太大容易把人吓住（The main reason is that…），拆小了每天都能做一点。拿我自己来说（Take my own case,…），我背单词就是每天二十个，半年下来真的看到了进步（see real progress）。所以我觉得一步一步来，反而更快（That's why…）。",
    "p": ["break it down into small steps", "The main reason is that…", "Take my own case,…", "see real progress", "That's why…"]
  },
  "new-long-held-ambition||What kinds of ambitions do people have?": {
    "a": "我觉得人的志向大概分两种，一种跟工作有关，一种跟生活有关。最主要的原因是大部分人先想把工作做稳（The main reason is that…），有份稳定的收入（a stable income）。比如我一个朋友想自己开个咖啡店（For example,…），说是想当自己的老板（run my own business）。所以志向虽然不一样，但都是想让日子过得更好（That's why…）。",
    "p": ["The main reason is that…", "a stable income", "For example,…", "run my own business", "That's why…"]
  },
  "new-long-held-ambition||What's the importance of having ambition?": {
    "a": "我觉得有志向对一个人特别重要。最主要的原因是有了志向（The main reason is that…），人才会给自己定个明确的目标（set myself a clear goal）。拿我自己来说，我一直想出国读书，所以英语再难我也一直在学（Take my own case,…）。所以我觉得有志向的人更能坚持（That's why…），也更容易看到自己的进步（see real progress）。",
    "p": ["The main reason is that…", "set myself a clear goal", "Take my own case,…", "That's why…", "see real progress"]
  },
  "new-long-held-ambition||What are the advantages of feeling ambitious towards your work?": {
    "a": "我觉得对工作有志向，好处挺多的。主要是因为这样的人愿意多干一点、多担一点（mainly because…），做成了会特别有成就感（a real sense of achievement）。比如我同事主动接了个大项目，忙了三个月，后来就升职了（For example,…）。所以有志向的人（As a result,…），机会一般也比别人多（many more job opportunities）。",
    "p": ["mainly because…", "a real sense of achievement", "For example,…", "As a result,…", "many more job opportunities"]
  },
  "new-long-held-ambition||Do you think children should have ambitions?": {
    "a": "我觉得孩子应该有自己的志向（Yes, definitely.）。最主要的原因是从小定个明确的目标（The main reason is that…），长大以后做事更有方向（set myself a clear goal）。拿我自己来说，我小学的时候就想把英语学好，一直学到了现在（Take my own case,…）。所以我觉得这是好事（That's why…），家长可以帮孩子把目标拆成小步骤（break it down into small steps）。",
    "p": ["Yes, definitely.", "The main reason is that…", "set myself a clear goal", "Take my own case,…", "That's why…", "break it down into small steps"]
  },
  "new-long-held-ambition||Why should parents encourage children to have ambitions?": {
    "a": "我觉得父母的鼓励对孩子很重要。主要是因为孩子还小，不太清楚自己想要什么（mainly because…），遇到事情第一个就是找父母帮忙（turn to… for help）。比如我小时候想学画画，我爸每周都送我去，从没说过不行（For example,…）。所以有人支持的孩子更容易坚持（As a result,…），也能慢慢看到自己的进步（see real progress）。",
    "p": ["mainly because…", "turn to… for help", "For example,…", "As a result,…", "see real progress"]
  },
  "new-long-held-ambition||Do you think parents should stop children from thinking too big?": {
    "a": "我觉得父母不应该直接拦着孩子（Not really.）。最主要的原因是想得大本身不是坏事（The main reason is that…），关键是帮他们把大目标拆成小步骤（break it down into small steps）。比如孩子说想当科学家，父母可以先让他把这学期的数学学好（For example,…）。所以我觉得别急着泼冷水（That's why…），让孩子慢慢做，才能看到进步（see real progress）。",
    "p": ["Not really.", "The main reason is that…", "break it down into small steps", "For example,…", "That's why…", "see real progress"]
  },
  "new-environmental-law-story||What kinds of rules do schools in China have?": {
    "a": "学校的规定挺多的，学生都要遵守（stick to the rules），比如上课不能迟到，还要穿校服。最主要的原因是学校人太多（The main reason is that…），没有规矩就乱了，学生也不安全（keep people safe）。比如我们学校不让带手机进教室，上课就没人偷偷玩了（For example,…）。所以我觉得这些规定还是有必要的（That's why…）。",
    "p": ["stick to the rules", "The main reason is that…", "keep people safe", "For example,…", "That's why…"]
  },
  "new-environmental-law-story||Do you think school rules are important?": {
    "a": "我觉得校规很重要（Yes, definitely.）。主要是因为有了规矩，学生才知道什么能做什么不能做（mainly because…），学校里也更安全（keep people safe）。拿我自己来说，我们班以前定了值日表，每个人管一块，教室一直很干净（Take my own case,…）。所以我觉得校规不是随便定的（That's why…），每一条都有它的道理（it's there for a reason）。",
    "p": ["Yes, definitely.", "mainly because…", "keep people safe", "Take my own case,…", "That's why…", "it's there for a reason"]
  },
  "new-environmental-law-story||Are children unhappy with the school rules?": {
    "a": "这个看情况，不过一开始大部分孩子都会不太乐意（It depends, but usually…）。主要是因为规矩管着他们，比如不让带手机（mainly because…），他们会觉得不自由。比如我表弟刚上初中时天天抱怨不能带手机，过一阵也就习惯了（For example,…）。所以孩子长大就明白了（That's why…），学校的规矩都是有原因的（it's there for a reason）。",
    "p": ["It depends, but usually…", "mainly because…", "For example,…", "That's why…", "it's there for a reason"]
  },
  "new-environmental-law-story||What are the rules people should obey at work?": {
    "a": "我觉得工作上最重要的是守时，还要做好自己那一块（be responsible for one part of…）。最主要的原因是一件事往往好几个人一起做（The main reason is that…），分工干比一个人干快多了（it's much faster than working alone）。比如我们做项目（For example,…），会先说清楚谁做哪一部分，各做各擅长的（each do what we're good at）。所以我觉得守时和做好自己的事最重要（That's why…）。",
    "p": ["be responsible for one part of…", "The main reason is that…", "it's much faster than working alone", "For example,…", "each do what we're good at", "That's why…"]
  },
  "new-environmental-law-story||What is the purpose of punishment?": {
    "a": "我觉得惩罚不是为了让人难受，是为了让人记住这次的错。最主要的原因是没有惩罚（The main reason is that…），很多人就不会认真守规矩（stick to the rules）。比如开车闯红灯要罚钱扣分，大家才会老老实实等灯（For example,…）。所以有了惩罚（As a result,…），路上和学校都会更安全（keep people safe）。",
    "p": ["The main reason is that…", "stick to the rules", "For example,…", "As a result,…", "keep people safe"]
  },
  "new-environmental-law-story||How can parents and teachers help children understand and follow rules?": {
    "a": "我觉得最好的办法是把道理跟孩子讲清楚。主要是因为孩子听懂了原因才愿意照着做（mainly because…），也明白规矩都是有原因的（it's there for a reason）。拿我自己来说，我小时候我妈从来不说必须听话，都会讲清楚为什么（Take my own case,…）。所以大人自己先做到（That's why…），孩子慢慢也就学会守规矩了（stick to the rules）。",
    "p": ["mainly because…", "it's there for a reason", "Take my own case,…", "That's why…", "stick to the rules"]
  },
  "new-animal-story||Should schools teach children about animals?": {
    "a": "我觉得学校应该教一点动物方面的知识（Yes, definitely.）。主要是因为大部分孩子本来就喜欢动物（mainly because…），学这些能让他们学会替别人着想（it teaches you to think about others）。比如我自己，小学老师放过一个讲小狗的片子，我到现在还记得（Take my own case,…）。所以我觉得这种课很值得上（That's why…）。",
    "p": ["Yes, definitely.", "mainly because…", "it teaches you to think about others", "Take my own case,…", "That's why…"]
  },
  "new-animal-story||Some people think pets should not be kept in cities. What do you think?": {
    "a": "我不太同意这个说法（Not really.）。主要是因为关键在于主人负不负责，而不是住在哪（mainly because…），养宠物本来就是一件很大的责任（it's a big responsibility）。比如我自己，以前在出租屋里养过一只猫，每天都收拾，邻居也没意见（Take my own case,…）。所以我觉得城市里养宠物没问题，只要不影响别人（That's why…）。",
    "p": ["Not really.", "mainly because…", "it's a big responsibility", "Take my own case,…", "That's why…"]
  },
  "new-animal-story||Many people regard pets as members of their family. What do you think?": {
    "a": "我同意这个说法，很多人真的把宠物当成家里人（treat them as part of the family）。主要是因为大家每天喂它、带它出门，时间长了感情就很深（mainly because…），这本来也是一份责任（it's a big responsibility）。比如我自己，家里的狗生病的时候，我妈急得一晚上没睡好（Take my own case,…）。所以我觉得把宠物叫成家人一点也不夸张（That's why…）。",
    "p": ["treat them as part of the family", "mainly because…", "it's a big responsibility", "Take my own case,…", "That's why…"]
  },
  "new-animal-story||Do many people keep pets in your country?": {
    "a": "挺多的，特别是年轻人，身边养猫养狗的很常见（Yes, definitely.）。主要是因为一个人住的人越来越多（mainly because…），有个宠物陪着，下班回家也能放松一下（relax after a long day）。比如我自己，我们那栋楼差不多一半人家都养了狗（Take my own case,…）。所以我觉得在我们国家养宠物已经很普遍了（That's why…）。",
    "p": ["Yes, definitely.", "mainly because…", "relax after a long day", "Take my own case,…", "That's why…"]
  },
  "new-animal-story||What are the advantages of keeping a pet?": {
    "a": "我觉得养宠物最大的好处是让人放松（relax after a long day）。主要是因为大部分人白天压力都挺大，回家有个东西陪着心里就舒服（mainly because…）。比如我自己，以前养猫的时候，摸摸它就没那么烦了（Take my own case,…）。所以我觉得养宠物对心情帮助最大（That's why…），而且还能让人学着替别人着想（it teaches you to think about others）。",
    "p": ["relax after a long day", "mainly because…", "Take my own case,…", "That's why…", "it teaches you to think about others"]
  },
  "new-animal-story||Why do people always tell children stories with animals?": {
    "a": "我觉得大人爱讲动物故事，是因为这种故事孩子最容易听进去（easy to follow）。主要是因为大部分小孩对动物本来就好奇，讲大道理他们不爱听，讲小动物就愿意听（mainly because…）。比如我自己，小时候我妈给我讲龟兔赛跑，我一下就明白了不能骄傲（Take my own case,…）。所以我觉得这种故事其实是在教孩子做人（That's why…），让他们学会替别人考虑（it teaches you to think about others）。",
    "p": ["easy to follow", "mainly because…", "Take my own case,…", "That's why…", "it teaches you to think about others"]
  },
  "new-ai-problem||What are the advantages and disadvantages of AI?": {
    "a": "我觉得 AI 有好的一面，也有不好的一面（it has both good and bad sides）。主要是因为它查东西特别快，大部分人用它都能省不少时间，但内容不一定准（The main reason is that…）。比如我自己（Take my own case,…），用它查资料确实省时间，可上次它把一个日期弄错了（it saves me a lot of time, but…）。所以我现在还是会用它，但也会自己再查一下（As a result,…），我不会全信上面写的（I don't believe everything I read）。",
    "p": ["it has both good and bad sides", "The main reason is that…", "Take my own case,…", "it saves me a lot of time, but…", "As a result,…", "I don't believe everything I read"]
  },
  "new-ai-problem||Do you think people today should learn about AI technology?": {
    "a": "我觉得现在的人确实应该学一学（Yes, definitely.）。主要是因为这种东西现在到处都是（The main reason is that…），我平时在手机上就经常看到（I usually see… on my phone）。比如说我上次要翻译一段英文，问它一下几秒钟就出来了（For example,…）。所以我觉得早点学会用，做事会方便很多（As a result,…）。",
    "p": ["Yes, definitely.", "The main reason is that…", "I usually see… on my phone", "For example,…", "As a result,…"]
  },
  "new-ai-problem||Should children learn to use AI?": {
    "a": "我觉得孩子可以学，但要有大人看着（It depends, but usually…）。主要是因为小孩自制力不太好，用多了容易一直抱着手机（mainly because…），最好还是少用一点（cut down on…）。比如我自己，以前写作业一遇到不会的就直接问它，后来发现什么都没记住（Take my own case,…）。所以我觉得孩子学可以，但要有人管着（That's why…）。",
    "p": ["It depends, but usually…", "mainly because…", "cut down on…", "Take my own case,…", "That's why…"]
  },
  "new-ai-problem||How can AI help in our lives?": {
    "a": "我觉得 AI 在生活里最有用的一点就是省时间。主要是因为查资料、翻译这些事，它几秒钟就能做完（The main reason is that…）。比如说我上次出门找路，直接问它就行了，特别方便（For example,…）。所以它确实帮我省了不少时间（As a result,…），只是有些答案我还会自己再核对一下（it saves me a lot of time, but…）。",
    "p": ["The main reason is that…", "For example,…", "As a result,…", "it saves me a lot of time, but…"]
  },
  "new-ai-problem||Do you think students are overly reliant on AI?": {
    "a": "我觉得是有点过头了（Yes, definitely.）。主要是因为很多学生一遇到不会的题就直接问 AI，自己不动脑子（The main reason is that…）。比如我自己，有段时间写作业全靠它，考试的时候一道也不会（Take my own case,…）。所以我觉得大家应该自己先想一想（As a result,…），把用 AI 的时间减少一点（cut down on…）。",
    "p": ["Yes, definitely.", "The main reason is that…", "Take my own case,…", "As a result,…", "cut down on…"]
  },
  "new-ai-problem||What can teachers do to stop students relying too much on AI?": {
    "a": "我觉得老师可以想办法让学生少用一点 AI（cut down on…）。主要是因为在教室里当场做题，大家没法偷偷去问 AI（The main reason is that…）。比如我自己，高中老师让我们先自己写十分钟再讨论，效果就很好（Take my own case,…）。所以我觉得老师可以把作业分成一小步一小步（break it down into small steps），让学生自己走完（That's why…）。",
    "p": ["cut down on…", "The main reason is that…", "Take my own case,…", "break it down into small steps", "That's why…"]
  },
  "new-celebrity-advertisement||What are the advantages and disadvantages of advertisements?": {
    "a": "我觉得广告有好的一面也有坏的一面（it has both good and bad sides）。主要是因为好广告能让人知道有什么新东西（The main reason is that…），看一眼就有印象（you remember it easily）。比如说我上次刷手机看到一个牛奶广告，第二天真的去买了（For example,…）。不过有些广告说得太夸张，不太老实（some ads are not honest），所以我看广告都会留个心眼（As a result,…）。",
    "p": ["it has both good and bad sides", "The main reason is that…", "you remember it easily", "For example,…", "some ads are not honest", "As a result,…"]
  },
  "new-celebrity-advertisement||Why are many advertisements endorsed by celebrities? How useful are they?": {
    "a": "我觉得名人代言是因为大家看到熟脸就会多看两眼（it catches your attention）。主要是因为现在广告实在太多（The main reason is that…），有名人的那个大家就更容易记住（you remember it easily）。比如我自己，看到喜欢的歌手代言的饮料，真的去便利店买了一瓶（Take my own case,…）。所以我觉得这种广告确实有效果（That's why…），只是有些内容不一定老实（some ads are not honest）。",
    "p": ["it catches your attention", "The main reason is that…", "you remember it easily", "Take my own case,…", "That's why…", "some ads are not honest"]
  },
  "new-celebrity-advertisement||What is the most important factor in an advertisement?": {
    "a": "我觉得最重要的是能一下子抓住人（it catches your attention）。主要是因为现在大家刷手机都很快，抓不住人的广告直接就划过去了（The main reason is that…）。比如我自己，有个广告开头特别搞笑，我就整段看完了（Take my own case,…），到现在还记得那个牌子（you remember it easily）。所以我觉得能不能抓住人是最关键的（That's why…）。",
    "p": ["it catches your attention", "The main reason is that…", "Take my own case,…", "you remember it easily", "That's why…"]
  },
  "new-celebrity-advertisement||Why are some advertisements boring?": {
    "a": "我觉得有些广告无聊，是因为它根本抓不住人（it catches your attention）。主要是因为很多广告翻来覆去就那几句话，大家早看腻了（The main reason is that…），有些还说得不太老实（some ads are not honest）。比如我自己，电视上那种卖保健品的广告，一放我就换台（Take my own case,…）。所以这种广告我基本看不下去（As a result,…）。",
    "p": ["it catches your attention", "The main reason is that…", "some ads are not honest", "Take my own case,…", "As a result,…"]
  },
  "new-celebrity-advertisement||Is advertising important for a company? Why?": {
    "a": "我觉得广告对公司特别重要（Yes, definitely.）。主要是因为东西再好，没人知道也卖不出去（The main reason is that…），好广告能让人一下子注意到（it catches your attention）。比如我自己，很多牌子都是先在手机上刷到广告，才知道有这么个东西（Take my own case,…）。所以我觉得公司花钱做广告是值得的（That's why…）。",
    "p": ["Yes, definitely.", "The main reason is that…", "it catches your attention", "Take my own case,…", "That's why…"]
  },
  "new-celebrity-advertisement||Which is more effective, online advertising or offline advertising?": {
    "a": "我觉得线上广告更有效，跟路边的大牌子比，手机上的更容易被看到（Compared with…）。主要是因为现在大家一天到晚都在刷手机，很少有人专门去看路边的牌子（The main reason is that…）。比如我自己（Take my own case,…），看到的广告基本都在手机上（I usually see… on my phone），上次刷到一个鞋子广告就点进去了。所以我觉得还是线上广告效果更好（That's why…）。",
    "p": ["Compared with…", "The main reason is that…", "Take my own case,…", "I usually see… on my phone", "That's why…"]
  },
  "new-recent-program||What are the differences between the TV programs young people like to watch and those old people like to watch?": {
    "a": "我觉得年轻人爱看轻松搞笑的，老人更爱看慢一点、好懂的节目（easy to follow）。主要是因为年轻人白天上班很累（The main reason is that…），晚上就想找点东西放松（relax after a long day）。比如我自己，下班只想看搞笑短视频，我爸妈那边一直在看新闻（Take my own case,…）。所以我觉得这个差别主要是看大家想要什么（That's why…）。",
    "p": ["easy to follow", "The main reason is that…", "relax after a long day", "Take my own case,…", "That's why…"]
  },
  "new-recent-program||What makes a popular TV or online program?": {
    "a": "我觉得一个节目要火，首先得让人看着轻松、跟得上（easy to follow）。主要是因为大部分人打开电视就是想歇一会儿（The main reason is that…），忙了一天只想放松（relax after a long day）。比如我自己，最近在追一个做饭的节目（Take my own case,…），看的时候能暂时忘掉工作上的事（it helps me forget about…）。所以我觉得能让人放松的节目最容易火（That's why…）。",
    "p": ["easy to follow", "The main reason is that…", "relax after a long day", "Take my own case,…", "it helps me forget about…", "That's why…"]
  },
  "new-recent-program||What kinds of TV or online programs are popular in your country?": {
    "a": "我觉得现在最火的是短视频和综艺，我一般也是在手机上刷到（I usually see… on my phone）。主要是因为这类节目又短又好懂（The main reason is that…），随时看两眼都跟得上（easy to follow）。比如我自己，每天坐地铁的时候都会刷一会儿（Take my own case,…），下班看看特别放松（relax after a long day）。所以我觉得这类节目在我们这边最受欢迎（That's why…）。",
    "p": ["I usually see… on my phone", "The main reason is that…", "easy to follow", "Take my own case,…", "relax after a long day", "That's why…"]
  },
  "new-special-occasion-food||Why are there special foods on special occasions or events?": {
    "a": "我觉得节日有特别的食物，是因为大家想让那一天跟平时不一样。主要是因为平时在家做的都是简单的家常菜（The main reason is that…），过节就想弄点不一样的（cook something simple at home）。比如我自己，每年过年我妈都会做一大桌菜，全家人一起吃（Take my own case,…）。所以我觉得吃什么其实不是重点（That's why…），大家在乎的是那份心意（it's the thought that counts）。",
    "p": ["The main reason is that…", "cook something simple at home", "Take my own case,…", "That's why…", "it's the thought that counts"]
  },
  "new-special-occasion-food||What are the differences between everyday food and festival food?": {
    "a": "我觉得最大的区别是平时吃得随便，在家做点简单的就行（cook something simple at home）。主要是因为大家平时上班都很忙（The main reason is that…），中午常常就跟同事出去吃一口（eat out with friends）。比如我自己，工作日中午随便吃个面，过年一顿饭却能吃两个小时（Take my own case,…）。所以我觉得区别不在菜，而在有没有时间跟家人坐下来（That's why…）。",
    "p": ["cook something simple at home", "The main reason is that…", "eat out with friends", "Take my own case,…", "That's why…"]
  },
  "new-special-occasion-food||Are there any differences between the food people eat today and the food people ate in the past?": {
    "a": "跟过去比，现在最大的不同就是选择变多了（Compared with…），想吃什么都能买到（there's a lot more choice now）。主要是因为现在运输和保鲜都方便，什么季节都有得卖（The main reason is that…）。比如我自己，小时候冬天家里只有白菜土豆，现在超市里什么都有（Take my own case,…）。所以我觉得现在吃得比以前丰富太多了（That's why…）。",
    "p": ["Compared with…", "there's a lot more choice now", "The main reason is that…", "Take my own case,…", "That's why…"]
  },
  "new-special-occasion-food||Do people today prefer eating at home or in a restaurant?": {
    "a": "我觉得现在大部分人更愿意出去吃（It depends, but usually…）。主要是因为大家上班都很累，回家不太想动锅（The main reason is that…），跟朋友出去吃还能顺便聊聊（eat out with friends）。比如我自己，一周基本有三四天在外面解决晚饭（Take my own case,…）。所以我觉得在家做饭的人确实比以前少了（That's why…）。",
    "p": ["It depends, but usually…", "The main reason is that…", "eat out with friends", "Take my own case,…", "That's why…"]
  },
  "new-live-sports-event||Why do some people like to watch sports events?": {
    "a": "我觉得很多人爱看比赛，是因为看的时候能把烦心事忘掉（it helps me forget about…）。主要是因为大部分人平时工作压力都不小（The main reason is that…），忙完一天看场球正好放松（relax after a long day）。比如我自己，上次跟朋友一起看球，看完心情特别好（Take my own case,…）。所以我觉得看比赛对很多人来说就是一种放松（That's why…）。",
    "p": ["it helps me forget about…", "The main reason is that…", "relax after a long day", "Take my own case,…", "That's why…"]
  },
  "new-live-sports-event||Where do people normally watch sports events?": {
    "a": "我觉得大部分人都是在家看，或者在手机上看（I usually see… on my phone）。主要是因为去现场又贵又费时间（The main reason is that…），在家看能省下不少钱（keep the costs down）。比如我自己，上次本来想去现场（Take my own case,…），一想到路上又要堵车就算了（get stuck in traffic）。所以我觉得大多数人还是在家看得多（That's why…）。",
    "p": ["I usually see… on my phone", "The main reason is that…", "keep the costs down", "Take my own case,…", "get stuck in traffic", "That's why…"]
  },
  "new-live-sports-event||What are the advantages of watching sports events online?": {
    "a": "我觉得网上看比赛最大的好处是方便，随时打开手机就能看（I usually see… on my phone）。主要是因为不用出门，也不用买票（The main reason is that…），还能省下一笔钱（keep the costs down）。比如我自己，上次半夜躺在床上看完了一场球，看完就睡了（Take my own case,…）。所以我觉得网上看又省时间又省钱（As a result,…），就是气氛比现场差一点（it saves me a lot of time, but…）。",
    "p": ["I usually see… on my phone", "The main reason is that…", "keep the costs down", "Take my own case,…", "As a result,…", "it saves me a lot of time, but…"]
  },
  "new-live-sports-event||What sports matches are suitable for children to attend?": {
    "a": "我觉得学校里的小比赛最适合带孩子去看。主要是因为这种比赛人少、节奏也慢（The main reason is that…），孩子看着不费劲（easy to follow）。比如我自己，小时候我爸带我去看过一次校运会，我到现在还记得（Take my own case,…）。所以我觉得先从这种小比赛开始最合适（That's why…），孩子还能出去透透气（get some fresh air）。",
    "p": ["The main reason is that…", "easy to follow", "Take my own case,…", "That's why…", "get some fresh air"]
  },
  "new-live-sports-event||Why do some people spend a lot going to other countries to watch sports events?": {
    "a": "我觉得这些人愿意花钱，是因为现场的感觉跟在手机上看完全不一样（I usually see… on my phone）。主要是因为大部分人平时工作都很累（The main reason is that…），出去一趟正好彻底放松（relax after a long day）。比如我自己，去年坐了好几个小时的车去看一场球（Take my own case,…），那天什么烦心事都忘了（it helps me forget about…）。所以我觉得他们花这个钱是值得的（That's why…）。",
    "p": ["I usually see… on my phone", "The main reason is that…", "relax after a long day", "Take my own case,…", "it helps me forget about…", "That's why…"]
  },
  "new-live-sports-event||What sports games are popular in your country?": {
    "a": "我觉得我们这边最火的是篮球和乒乓球，大人小孩都爱打。主要是因为这两种球到处都能打，场地也好找（The main reason is that…），花不了多少钱（keep the costs down）。比如我自己（Take my own case,…），晚饭后经常下楼走一圈（go for a walk after dinner），总能看到有人在打乒乓球。所以我觉得这两项在我们国家最普及（That's why…）。",
    "p": ["The main reason is that…", "keep the costs down", "Take my own case,…", "go for a walk after dinner", "That's why…"]
  },
  "new-general-law||What rules should students follow at school?": {
    "a": "我觉得最基本的是按时上课、按时交作业（stick to the rules）。主要是因为规矩是为了让大家都能安心学习（mainly because…）。比如我自己，高中住校有门禁，当时觉得烦，现在想想挺有必要（Take my own case,…）。所以我觉得学校的规矩都是有原因的（That's why…），每一条背后都有道理（it's there for a reason）。",
    "p": ["stick to the rules", "mainly because…", "Take my own case,…", "That's why…", "it's there for a reason"]
  },
  "new-general-law||Do people in your country usually obey the law?": {
    "a": "我觉得大部分人平时都会遵守法律（Yes, definitely.）。主要是因为不守规矩要罚钱，还可能出事（The main reason is that…），大家都知道这些规定是为了安全（keep people safe）。比如我自己，就算路上一个人都没有，我也会站在那里等红灯（Take my own case,…）。所以我觉得在我们这边守法的人是大多数（That's why…）。",
    "p": ["Yes, definitely.", "The main reason is that…", "keep people safe", "Take my own case,…", "That's why…"]
  },
  "new-general-law||What kinds of behavior are considered as good behavior?": {
    "a": "我觉得对人有礼貌、愿意帮别人，就是好行为。主要是因为一件小事就能让别人一天心情都不错（The main reason is that…），真的能帮到人（make a difference to other people）。比如我自己，上次在地铁上给一位老人让座，他一直跟我说谢谢（Take my own case,…）。所以我觉得好行为其实就是多替别人想一想（That's why…），这也是每个人都该做的（it's everyone's responsibility）。",
    "p": ["The main reason is that…", "make a difference to other people", "Take my own case,…", "That's why…", "it's everyone's responsibility"]
  },
  "new-general-law||Do you think children can learn about the law outside of school?": {
    "a": "我觉得完全可以，孩子在校外也能学到这些（Yes, definitely.）。主要是因为生活里到处都是规矩（The main reason is that…），每一条都有它的道理（it's there for a reason）。比如我自己，小时候过马路的时候，我爸就跟我讲为什么一定要等灯（Take my own case,…）。所以我觉得这样学到的东西孩子记得更牢（That's why…），长大也更愿意守规矩（stick to the rules）。",
    "p": ["Yes, definitely.", "The main reason is that…", "it's there for a reason", "Take my own case,…", "That's why…", "stick to the rules"]
  },
  "new-general-law||What are the benefits for people to obey rules?": {
    "a": "我觉得最大的好处是大家都更安全（keep people safe）。主要是因为每个人都按规矩来，事情才不会乱（The main reason is that…）。比如我自己，早上坐地铁的时候大家都排队上车，其实反而更快（Take my own case,…）。所以我觉得守规矩看着麻烦，其实对谁都好（That's why…），这也是每个人的事（it's everyone's responsibility）。",
    "p": ["keep people safe", "The main reason is that…", "Take my own case,…", "That's why…", "it's everyone's responsibility"]
  },
  "new-general-law||How can parents teach children to obey rules?": {
    "a": "我觉得父母最好先讲清楚规矩是为了什么（it's there for a reason）。主要是因为孩子光被骂是不会听的，知道原因才会照做（The main reason is that…）。比如我自己，小时候我妈跟我说马路上车太快（Take my own case,…），是为了我的安全我才听的（keep people safe）。所以我觉得讲道理比骂管用（That's why…），孩子长大也更愿意守规矩（stick to the rules）。",
    "p": ["it's there for a reason", "The main reason is that…", "Take my own case,…", "keep people safe", "That's why…", "stick to the rules"]
  },
  "new-interesting-video||What kind of videos do people in your country like to watch?": {
    "a": "我觉得大家最爱看短视频，我一般也是在手机上刷到（I usually see… on my phone）。主要是因为这种视频都很短，看着不费脑子（The main reason is that…），谁都跟得上（easy to follow）。比如我自己，晚上躺床上刷一会儿（Take my own case,…），白天的烦心事就先放一边了（it helps me forget about…）。所以我觉得短视频在我们这边最受欢迎（That's why…）。",
    "p": ["I usually see… on my phone", "The main reason is that…", "easy to follow", "Take my own case,…", "it helps me forget about…", "That's why…"]
  },
  "new-interesting-video||Which is more helpful, watching videos or reading books?": {
    "a": "跟看视频比，我觉得还是读书更有帮助（Compared with…）。主要是因为书里讲得更细（The main reason is that…），能把一个问题拆成一小步一小步（break it down into small steps）。比如我自己，看视频学语法当时都懂，一做题就错（Take my own case,…），后来老老实实看书才有进步（see real progress）。所以我觉得真要学东西，还是读书更靠谱（That's why…）。",
    "p": ["Compared with…", "The main reason is that…", "break it down into small steps", "Take my own case,…", "see real progress", "That's why…"]
  },
  "new-interesting-video||What skills can people learn from watching videos?": {
    "a": "我觉得看视频能学到不少动手的东西，比如做饭、修东西（easy to follow）。主要是因为视频里一步一步演给你看（The main reason is that…），等于把事情拆成了小步骤（break it down into small steps）。比如我自己，跟着视频学做菜（Take my own case,…），在家做点简单的完全没问题（cook something simple at home）。所以我觉得看视频学这种手上的活最合适（That's why…）。",
    "p": ["easy to follow", "The main reason is that…", "break it down into small steps", "Take my own case,…", "cook something simple at home", "That's why…"]
  },
  "new-interesting-video||Are there any differences between the videos that young people and old people like to watch?": {
    "a": "我觉得区别挺明显，年轻人爱看搞笑的短视频，老人正好相反，更喜欢新闻和养生的（By contrast,…）。主要是因为年轻人上班一天已经很累（The main reason is that…），刷点轻松的就是想放松一下（relax after a long day）。比如我自己，晚上就爱刷搞笑视频，我爸妈一直守着新闻看（Take my own case,…）。所以我觉得两代人看的东西差得挺远（That's why…）。",
    "p": ["By contrast,…", "The main reason is that…", "relax after a long day", "Take my own case,…", "That's why…"]
  },
  "new-interesting-video||Are there any differences between the videos that young men and young women like to watch?": {
    "a": "我觉得有一点区别，男生更爱看球赛和游戏，女生正好相反，更爱看做饭和穿搭（By contrast,…）。主要是因为大家从小的兴趣就不太一样（The main reason is that…）。比如我自己，跟朋友聊起来，男生都在看球（Take my own case,…），女生更爱看在家做点简单菜的那种（cook something simple at home）。所以我觉得差别还是有的，不过现在没以前那么大了（That's why…）。",
    "p": ["By contrast,…", "The main reason is that…", "Take my own case,…", "cook something simple at home", "That's why…"]
  },
  "new-interesting-video||What makes a video go viral online?": {
    "a": "我觉得一个视频要火，最重要的是开头就能抓住人（it catches your attention）。主要是因为大家刷手机都很快，前几秒不吸引人就直接划走了（The main reason is that…）。比如我自己，上次刷到一个几秒钟的搞笑视频，还发给了同学（Take my own case,…）。所以我觉得能不能一下子抓住人，决定了它火不火（That's why…），而且要短、要好懂（easy to follow）。",
    "p": ["it catches your attention", "The main reason is that…", "Take my own case,…", "That's why…", "easy to follow"]
  },
  "new-special-cake||What are the differences between special food in China and other countries?": {
    "a": "跟别的国家比，中国的节日食物更讲究一家人聚在一起（Compared with…）。主要是因为不管哪个国家，过节吃什么其实不是重点（The main reason is that…），大家在乎的是那份心意（it's the thought that counts）。比如我自己，中秋跟家里吃月饼，外国朋友生日吃蛋糕，其实是一回事（Take my own case,…）。所以我觉得区别只在吃什么，心意都是一样的（That's why…）。",
    "p": ["Compared with…", "The main reason is that…", "it's the thought that counts", "Take my own case,…", "That's why…"]
  },
  "new-special-cake||Is there any food in your country that is eaten at special times or on special occasions?": {
    "a": "有的，比如中秋吃月饼、过年吃饺子（Yes, definitely.）。主要是因为这些日子一年就一次，大家都想认真过（The main reason is that…）。比如我自己，每年除夕都跟家里人一起包饺子（Take my own case,…），平时在家随便做点简单的就行了（cook something simple at home）。所以我觉得这些东西代表的是一家人的心意（That's why…），吃什么反而没那么重要（it's the thought that counts）。",
    "p": ["Yes, definitely.", "The main reason is that…", "Take my own case,…", "cook something simple at home", "That's why…", "it's the thought that counts"]
  },
  "new-special-cake||Why are some people willing to spend a lot of money on meals on special days?": {
    "a": "我觉得这个钱花得值，特别的日子一年也就那么几次。主要是因为大家平时吃饭都挺省的（The main reason is that…），能省就省（keep the costs down）。比如我自己（Take my own case,…），生日那天跟朋友出去吃了一顿好的（eat out with friends），虽然贵但那天特别开心。所以我觉得偶尔花这个钱没什么问题（That's why…）。",
    "p": ["The main reason is that…", "keep the costs down", "Take my own case,…", "eat out with friends", "That's why…"]
  },
  "new-special-cake||Do you think it's good to communicate when eating with your family?": {
    "a": "我觉得挺好的，吃饭的时候聊聊天特别重要（Yes, definitely.）。主要是因为现在大家都忙（The main reason is that…），谁都有忙不过来的时候（everyone gets busy sometimes），一天也就吃饭能坐到一起。比如我自己，每次回家吃饭都会跟我妈聊几句最近的事（Take my own case,…）。所以我觉得吃饭时多聊两句挺值的（That's why…），对家里人影响其实很大（make a difference to other people）。",
    "p": ["Yes, definitely.", "The main reason is that…", "everyone gets busy sometimes", "Take my own case,…", "That's why…", "make a difference to other people"]
  },
  "new-special-cake||In your country, do people nowadays cook at home as frequently as people did in the past?": {
    "a": "我觉得没有以前那么经常了（Not really.）。主要是因为现在外卖和餐厅到处都是（The main reason is that…），能选的比以前多太多了（there's a lot more choice now）。比如我自己，我妈那辈几乎天天在家做饭（Take my own case,…），我一周能自己做两顿简单的就不错了（cook something simple at home）。所以我觉得在家做饭确实比过去少了（That's why…）。",
    "p": ["Not really.", "The main reason is that…", "there's a lot more choice now", "Take my own case,…", "cook something simple at home", "That's why…"]
  },
  "new-special-cake||What do you think of people using their mobile phones during a meal?": {
    "a": "我觉得吃饭的时候一直刷手机不太好。主要是因为大家平时都忙（The main reason is that…），谁都有顾不上的时候（everyone gets busy sometimes），吃饭正好能说说话。比如我自己，有次全家吃饭都在低头看手机，一句话都没说，气氛特别怪（Take my own case,…）。所以我觉得吃饭的时候还是把手机收起来好（That's why…），少看一点（cut down on…）。",
    "p": ["The main reason is that…", "everyone gets busy sometimes", "Take my own case,…", "That's why…", "cut down on…"]
  },
  "new-local-news||Do people read the newspaper where you live?": {
    "a": "我觉得现在基本没什么人看报纸了（Not really.）。主要是因为手机上看新闻又快又方便，大家随手就能刷（The main reason is that…）。比如我自己（Take my own case,…），新闻基本都是在手机上刷到的（I usually see… on my phone），我爷爷以前天天买报纸，现在也改用手机了。所以我觉得看报纸的人只会越来越少（That's why…）。",
    "p": ["Not really.", "The main reason is that…", "Take my own case,…", "I usually see… on my phone", "That's why…"]
  },
  "new-local-news||Do people prefer local or international news?": {
    "a": "我觉得大部分人更愿意先看本地新闻（It depends, but usually…）。主要是因为本地的事跟自己关系更大（The main reason is that…），比如哪条路在修、早上哪里会堵（get stuck in traffic）。比如我自己，出门前会先看一眼路况（Take my own case,…），省得早高峰堵在路上（at rush hour）。所以我觉得大家还是先看本地的新闻（That's why…）。",
    "p": ["It depends, but usually…", "The main reason is that…", "get stuck in traffic", "Take my own case,…", "at rush hour", "That's why…"]
  },
  "new-local-news||Do you think it's important to have a national identity?": {
    "a": "我觉得挺重要的（Yes, definitely.）。主要是因为有了这种感觉，大家遇到事才会一起出力（The main reason is that…），也会觉得这是每个人的事（it's everyone's responsibility）。比如我自己，前几年家乡发大水，很多人自己开车去送东西，我看了特别感动（Take my own case,…）。所以我觉得这种认同感能让人愿意为别人做点事（That's why…），也真的能帮到人（make a difference to other people）。",
    "p": ["Yes, definitely.", "The main reason is that…", "it's everyone's responsibility", "Take my own case,…", "That's why…", "make a difference to other people"]
  },
  "new-local-news||How can people develop their national identity?": {
    "a": "我觉得可以多了解自己国家的历史，也多参加身边的活动。主要是因为这种感觉不是说出来的，得靠自己去做（The main reason is that…），这是每个人的事（it's everyone's responsibility）。比如我自己，去年参加了本地的一个节日活动，认识了不少邻居（Take my own case,…）。所以我觉得从身边的小事做起最实在（That's why…），一点一点加起来就不一样了（small changes add up）。",
    "p": ["The main reason is that…", "it's everyone's responsibility", "Take my own case,…", "That's why…", "small changes add up"]
  },
  "new-environmental-law-proposal||How does technology affect the law?": {
    "a": "我觉得科技发展得越快，法律就得改得越勤。主要是因为新技术会带来新的问题，以前的规矩管不住这些事（mainly because…）。比如说现在手机上的广告特别多，有些广告根本不老实，骗人买东西（For example,… / some ads are not honest）。所以国家只能定新的规定，把大家保护好（That's why… / keep people safe）。",
    "p": ["mainly because…", "For example,…", "some ads are not honest", "That's why…", "keep people safe"]
  },
  "new-environmental-law-proposal||What kinds of rules do schools in China have?": {
    "a": "我觉得中国学校的规定主要是纪律方面的。主要是因为学校人多，得让所有人守一样的规矩（mainly because… / stick to the rules）。比如我上学的时候，每天要按时到校、穿校服，上课不能玩手机（For example,…）。所以这些规定听着严，其实都是为了让大家安全（That's why… / keep people safe）。",
    "p": ["mainly because…", "stick to the rules", "For example,…", "That's why…", "keep people safe"]
  },
  "new-environmental-law-proposal||Will there be a law that is universally accepted?": {
    "a": "我觉得不太会有一部全世界都接受的法律（Not really.）。主要是因为每个国家的情况不一样，想法也差很多（mainly because…）。比如说环保这块，有的国家想先发展经济，就不愿意定太严的规则（For example,…）。所以各国自己定规矩更现实，毕竟规则都是有原因的（That's why… / it's there for a reason）。",
    "p": ["Not really.", "mainly because…", "For example,…", "That's why…", "it's there for a reason"]
  },
  "new-environmental-law-proposal||What environmental laws does your country already have?": {
    "a": "我们国家已经有一些环保方面的规定了。主要是因为大家慢慢发现，环境好不好是每个人的事（mainly because… / it's everyone's responsibility）。比如我们小区现在要垃圾分类，工厂也不能随便排污水（For example,…）。所以这些规定虽然麻烦一点，但小的改变加起来就有用（As a result,… / small changes add up）。",
    "p": ["mainly because…", "it's everyone's responsibility", "For example,…", "As a result,…", "small changes add up"]
  },
  "new-environmental-law-proposal||What are the rules people should obey at work?": {
    "a": "我觉得工作里最重要的规矩就是把自己那份做好（be responsible for one part of…）。主要是因为一个人拖后腿，整个团队都得等他（mainly because…）。比如我做小组作业的时候，大家各自做擅长的部分，很快就做完了（For example,… / each do what we're good at）。所以上班守规矩，其实就是对同事负责，大家也做得更快（That's why… / it's much faster than working alone）。",
    "p": ["be responsible for one part of…", "mainly because…", "For example,…", "each do what we're good at", "That's why…", "it's much faster than working alone"]
  },
  "new-environmental-law-proposal||What is the purpose of punishment?": {
    "a": "我觉得惩罚主要是为了让大家守规矩（stick to the rules）。主要是因为如果做错事没有后果，就没人当回事（mainly because…）。比如学校规定上课不能玩手机，被老师收走一次，我就再也不敢了（Take my own case,…）。所以惩罚不是为了吓人，是为了保护大家的安全（That's why… / keep people safe）。",
    "p": ["stick to the rules", "mainly because…", "Take my own case,…", "That's why…", "keep people safe"]
  },
  "new-traffic-jam||How can we solve the traffic jam problem?": {
    "a": "我觉得最有用的办法是让大家少开车、多坐地铁（take the subway instead）。主要是因为路就那么宽，上下班的人又都挤在一个时间（mainly because… / at rush hour）。比如我以前开车上班，早上那段路能堵二十分钟（Take my own case,… / get stuck in traffic）。所以后来我改坐地铁，反而每天都能准时到（That's why…）。",
    "p": ["take the subway instead", "mainly because…", "at rush hour", "Take my own case,…", "get stuck in traffic", "That's why…"]
  },
  "new-traffic-jam||Do you think developing public transport can solve traffic jam problems?": {
    "a": "我觉得肯定能，发展公共交通对堵车真的有用（Yes, definitely.）。主要原因是坐地铁和公交的人多了，路上的车自然就少（The main reason is that…）。比如我早上高峰时候坐地铁上班，二十分钟就到公司了（Take my own case,… / at rush hour）。所以公共交通越方便，大家就越不愿意自己开车，路上也就不堵了（As a result,… / public transport is convenient）。",
    "p": ["Yes, definitely.", "The main reason is that…", "Take my own case,…", "at rush hour", "As a result,…", "public transport is convenient"]
  },
  "new-traffic-jam||Do you think highways will help reduce traffic jams?": {
    "a": "我觉得高速公路帮助不大，最多只能缓解一点（Not really.）。主要是因为路修得越多，开车的人也会跟着变多（mainly because…）。比如我上次走高速去外地，车还是一辆挨一辆，堵了快一个小时（Take my own case,… / get stuck in traffic）。所以与其一直修路，不如让大家改坐地铁，这样更管用（That's why… / take the subway instead）。",
    "p": ["Not really.", "mainly because…", "Take my own case,…", "get stuck in traffic", "That's why…", "take the subway instead"]
  },
  "new-traffic-jam||What are good ways to manage traffic?": {
    "a": "我觉得管理交通最好的办法是让大家错开上下班时间。主要是因为大家都挤在同一个时间出门（mainly because… / at rush hour）。比如我们公司让一部分人九点半上班，路上明显松快多了（For example,…）。所以只要把时间错开，再加上地铁方便，堵车就少多了（As a result,… / public transport is convenient）。",
    "p": ["mainly because…", "at rush hour", "For example,…", "As a result,…", "public transport is convenient"]
  },
  "new-traffic-jam||Do you like to use public transport?": {
    "a": "我挺喜欢坐公共交通的，尤其是地铁（Yes, definitely.）。主要是因为地铁又快又方便，不用自己开车，也不用找车位（mainly because… / public transport is convenient）。比如我每天上班都坐地铁，路上还能看看手机，闭眼休息一会儿（Take my own case,…）。所以我现在基本不开车了，也不用天天堵在路上（That's why… / get stuck in traffic）。",
    "p": ["Yes, definitely.", "mainly because…", "public transport is convenient", "Take my own case,…", "That's why…", "get stuck in traffic"]
  },
  "new-traffic-jam||Would you rather be in a car or a bus in a traffic jam?": {
    "a": "堵车的时候，我更愿意坐公交车，不想自己开车。主要是因为坐公交不用自己盯着路，人轻松很多（mainly because…）。比如上次高峰堵在路上，我在公交上看了半小时视频，一点都不烦（Take my own case,… / at rush hour / get stuck in traffic）。所以相比之下开车只能干等着，我还是宁愿坐公交（That's why…）。",
    "p": ["mainly because…", "Take my own case,…", "at rush hour", "get stuck in traffic", "That's why…"]
  },
  "new-happy-event||How can parents help children to be organized?": {
    "a": "我觉得父母可以帮孩子把大事拆成一小步一小步（break it down into small steps）。主要是因为孩子看到一大堆事就会发懵，不知道从哪儿开始（mainly because…）。比如我小时候我妈让我先定个小目标，每天背十个单词（Take my own case,… / set myself a clear goal）。所以慢慢养成固定的作息，孩子自己就会安排时间了（As a result,… / stick to a routine）。",
    "p": ["break it down into small steps", "mainly because…", "Take my own case,…", "set myself a clear goal", "As a result,…", "stick to a routine"]
  },
  "new-happy-event||On what occasions do people need to be organized?": {
    "a": "我觉得工作和考试这种时间紧的时候最需要有条理。主要是因为事情一多，不安排好就容易漏掉（mainly because…）。比如我准备雅思的时候，先定了个明确的目标，再拆成每天的小任务（Take my own case,… / set myself a clear goal / break it down into small steps）。所以越忙的时候，越要坚持固定的安排（That's why… / stick to a routine）。",
    "p": ["mainly because…", "Take my own case,…", "set myself a clear goal", "break it down into small steps", "That's why…", "stick to a routine"]
  },
  "new-happy-event||Does everything need to be well prepared?": {
    "a": "我觉得不用，小事随便一点反而更好（Not really.）。主要是因为什么都要准备太累了，人会绷得很紧（mainly because…）。比如我和朋友出去吃饭，不做计划，随便找一家店，反而聊得很开心（Take my own case,… / eat out with friends）。所以我觉得只有重要的事才要认真准备，小事顺其自然就好（That's why…）。",
    "p": ["Not really.", "mainly because…", "Take my own case,…", "eat out with friends", "That's why…"]
  },
  "new-happy-event||Do people need others' help when organizing things?": {
    "a": "我觉得很需要，一个人办事情真的忙不过来（Yes, definitely.）。主要是因为几个人分工，每个人负责一部分，效率高很多（mainly because… / be responsible for one part of…）。比如上次我们班办活动，我管场地，别人管东西，一下午就弄好了（Take my own case,…）。所以大家各做各擅长的，事情才办得又快又好（As a result,… / each do what we're good at）。",
    "p": ["Yes, definitely.", "mainly because…", "be responsible for one part of…", "Take my own case,…", "As a result,…", "each do what we're good at"]
  },
  "new-happy-event||How would you feel when you were not well prepared for something?": {
    "a": "我会特别紧张，心里一点底都没有，做什么都不踏实。主要是因为没准备好的时候，总担心中间会出什么岔子（mainly because… / something went wrong with…）。比如上次考试前我没怎么复习，坐在考场里手一直在抖（Take my own case,…）。所以我现在都会提前定个目标，把事情拆成小步骤慢慢准备（That's why… / set myself a clear goal / break it down into small steps）。",
    "p": ["mainly because…", "something went wrong with…", "Take my own case,…", "That's why…", "set myself a clear goal", "break it down into small steps"]
  },
  "new-happy-event||Do you prefer to prepare and organize an activity or just take part in an activity?": {
    "a": "我更喜欢只参加活动，不想自己组织。主要是因为组织活动责任太大，什么都要操心（mainly because… / it's a big responsibility）。比如上次我帮忙办班级聚会，光订位子就折腾了一下午（Take my own case,…）。相比之下，只去玩就轻松多了，所以我更喜欢当参加的那个（Compared with… / That's why…）。",
    "p": ["mainly because…", "it's a big responsibility", "Take my own case,…", "Compared with…", "That's why…"]
  },
  "new-delayed-reply||When do people spend a long time responding to others' messages?": {
    "a": "我觉得大家一般是在忙的时候才会很久不回。主要是因为谁都有忙的时候，上班上课顾不上看手机（mainly because… / everyone gets busy sometimes）。比如我上课把手机调成静音，下课才看到好几条消息（Take my own case,…）。所以只要一有空，我就会尽快回过去，不让别人一直等（That's why… / get back to… as soon as I can）。",
    "p": ["mainly because…", "everyone gets busy sometimes", "Take my own case,…", "That's why…", "get back to… as soon as I can"]
  },
  "new-delayed-reply||In what situations do people not respond to messages right away?": {
    "a": "我觉得开会、开车这种情况下，大家不会马上回。主要是因为谁都有忙的时候，那种场合真的没法拿手机（mainly because… / everyone gets busy sometimes）。比如我朋友是医生，上班的时候手机都放在柜子里，下班才看（For example,…）。所以别人晚回一会儿，通常都有说得过去的原因（That's why… / there's usually a good reason for it）。",
    "p": ["mainly because…", "everyone gets busy sometimes", "For example,…", "That's why…", "there's usually a good reason for it"]
  },
  "new-delayed-reply||What would you do if you haven't received a reply after sending out a message?": {
    "a": "我一般会先等一等，不会马上又发一条去催。主要是因为对方可能在忙，谁都有忙的时候（mainly because… / everyone gets busy sometimes）。比如上次我问同事一个事，他两天后才回，说那几天在出差（Take my own case,…）。所以我不会多想，等等再问一次就好，一般都有原因的（That's why… / there's usually a good reason for it）。",
    "p": ["mainly because…", "everyone gets busy sometimes", "Take my own case,…", "That's why…", "there's usually a good reason for it"]
  },
  "new-delayed-reply||Why do some people prefer sending a message instead of making a call?": {
    "a": "我觉得是因为发信息更轻松，不用马上回应。主要是因为打电话必须立刻接，正忙的时候会很尴尬（mainly because…）。比如我在开会的时候收到电话，只能挂掉，发消息就没这个问题（Take my own case,…）。所以大家更爱发消息，毕竟谁都有忙的时候，有空了再尽快回（That's why… / everyone gets busy sometimes / get back to… as soon as I can）。",
    "p": ["mainly because…", "Take my own case,…", "That's why…", "everyone gets busy sometimes", "get back to… as soon as I can"]
  },
  "new-delayed-reply||How do you show your respect in your message?": {
    "a": "我觉得最基本的尊重就是尽快回复（get back to… as soon as I can）。主要是因为让别人一直等着，对方会觉得你不在乎（mainly because…）。比如我收到老师的消息，就算在忙，也会先回一句「我等下看」（Take my own case,…）。所以先说一声自己在忙，别人也能理解，谁都有忙的时候（As a result,… / everyone gets busy sometimes）。",
    "p": ["get back to… as soon as I can", "mainly because…", "Take my own case,…", "As a result,…", "everyone gets busy sometimes"]
  },
  "new-delayed-reply||Why do some people feel angry when others don't reply to their message?": {
    "a": "我觉得是因为他们觉得自己被忽视了，心里不舒服。主要是因为等的时间一长，人就容易乱想（mainly because…）。比如我朋友发消息给男朋友，两个小时没回，就以为出什么事了（For example,… / something went wrong with…）。所以其实谁都有忙的时候，不用太往心里去（That's why… / everyone gets busy sometimes）。",
    "p": ["mainly because…", "For example,…", "something went wrong with…", "That's why…", "everyone gets busy sometimes"]
  },
  "new-low-cost-day-out||Do people like to spend their leisure time out in your country?": {
    "a": "我觉得我们国家大部分人都喜欢出去，特别是周末（Yes, definitely.）。主要是因为在家待久了太闷，出去走走能换个心情（mainly because…）。比如我们家周末常去公园，吃完晚饭还会一起散散步（Take my own case,… / go for a walk after dinner）。所以出门玩不一定要花很多钱，花销压得很低也一样开心（As a result,… / keep the costs down）。",
    "p": ["Yes, definitely.", "mainly because…", "Take my own case,…", "go for a walk after dinner", "As a result,…", "keep the costs down"]
  },
  "new-low-cost-day-out||How do people spend their leisure time in your country?": {
    "a": "我觉得我们国家大多数人休息的时候都比较简单。主要是因为大家平时上班很累，就想放松一下（mainly because… / relax after a long day）。比如我爸妈每天晚饭后都会去楼下走一圈，跟邻居聊聊天（For example,… / go for a walk after dinner）。所以现在选择比以前多多了，但大家还是喜欢简单的方式（As a result,… / there's a lot more choice now）。",
    "p": ["mainly because…", "relax after a long day", "For example,…", "go for a walk after dinner", "As a result,…", "there's a lot more choice now"]
  },
  "new-low-cost-day-out||How does technology affect the way people spend their leisure time?": {
    "a": "我觉得科技让休闲变得方便多了。主要是因为一部手机就够了，省了很多时间，但也让人越看越累（mainly because… / it saves me a lot of time, but…）。比如我以前周末会出去走走，现在常常一整天躺着刷视频（Take my own case,…）。所以我觉得科技有好也有坏，最好还是出去透透气（As a result,… / it has both good and bad sides / get some fresh air）。",
    "p": ["mainly because…", "it saves me a lot of time, but…", "Take my own case,…", "As a result,…", "it has both good and bad sides", "get some fresh air"]
  },
  "new-low-cost-day-out||Do you think only old people have time for leisure?": {
    "a": "我觉得不是这样的，年轻人也有自己的休闲时间（Not really.）。主要是因为年轻人上班压力大，更需要下班后好好放松（mainly because… / relax after a long day）。比如我周末再忙，也会抽半天出去走走，换换心情（Take my own case,…）。所以不是只有老人有空，只是老人的生活节奏慢一点（That's why… / a slower pace of life）。",
    "p": ["Not really.", "mainly because…", "relax after a long day", "Take my own case,…", "That's why…", "a slower pace of life"]
  },
  "new-low-cost-day-out||Why do people like to have days off?": {
    "a": "我觉得大家都很盼着休息日，一到周末就特别开心。主要是因为平时上班太累，人需要喘口气（mainly because… / relax after a long day）。比如我休息日会睡到自然醒，下午出去走走，晒晒太阳（Take my own case,… / get some fresh air）。所以休息日不用花钱也很舒服，能把状态调回来（As a result,… / keep the costs down）。",
    "p": ["mainly because…", "relax after a long day", "Take my own case,…", "get some fresh air", "As a result,…", "keep the costs down"]
  },
  "new-low-cost-day-out||Going out to have holidays is tiring. Why do people still want to do it?": {
    "a": "我觉得虽然累，但大家还是愿意出去玩。主要是因为换个地方看看，心情就完全不一样了（mainly because…）。比如我上次去爬山，走了一天腿都软了，可是山上空气特别好（Take my own case,… / get some fresh air）。所以累归累，出去一趟反而能真正放松下来，回来更有精神（As a result,… / relax after a long day）。",
    "p": ["mainly because…", "Take my own case,…", "get some fresh air", "As a result,…", "relax after a long day"]
  },
  "new-help-solve-problem||How important is it for schools to help children become smarter?": {
    "a": "我觉得这一点非常重要，学校起的作用很大（Yes, definitely.）。主要是因为学校不只是教知识，更重要的是教孩子怎么自己学（mainly because…）。比如老师会把很难的内容拆成一个个小步骤，一步一步教（For example,… / break it down into small steps）。所以孩子能看到自己的进步，学起来就更有劲（As a result,… / see real progress）。",
    "p": ["Yes, definitely.", "mainly because…", "For example,…", "break it down into small steps", "As a result,…", "see real progress"]
  },
  "new-language-learning||What difficulties do people face when learning a language?": {
    "a": "我觉得学语言最难的地方是开口说，不是背单词。主要是因为很多人怕说错，就一直不敢练（mainly because…）。比如我背了很多单词，可是见到外国人还是说不出来（Take my own case,…）。所以我给自己定了个小目标，每天说五句，慢慢就有进步了（That's why… / set myself a clear goal / see real progress）。",
    "p": ["mainly because…", "Take my own case,…", "That's why…", "set myself a clear goal", "see real progress"]
  },
  "new-language-learning||Do you think language learning is important? Why?": {
    "a": "我觉得学语言真的很重要，特别是英语这种（Yes, definitely.）。主要是因为会一门外语，工作机会会比别人多很多（mainly because… / many more job opportunities）。比如我表姐英语特别好，一毕业就进了外企，收入也很稳定（For example,… / a stable income）。所以我觉得花时间学一门语言真的很值，以后的路会宽很多（As a result,…）。",
    "p": ["Yes, definitely.", "mainly because…", "many more job opportunities", "For example,…", "a stable income", "As a result,…"]
  },
  "new-language-learning||Which is better, to study a language alone or to study it in a group? Why?": {
    "a": "我觉得跟小组一起学更好，效果比自己学强。主要是因为语言是拿来说的，一个人在家练不了口语（mainly because…）。比如我参加过一个英语角，大家各说各擅长的话题，进步很快（Take my own case,… / each do what we're good at）。相比一个人闷头学，小组学明显快得多，所以我更推荐（Compared with… / it's much faster than working alone / That's why…）。",
    "p": ["mainly because…", "Take my own case,…", "each do what we're good at", "Compared with…", "it's much faster than working alone", "That's why…"]
  },
  "new-language-learning||What's the best way to learn a language?": {
    "a": "我觉得学语言最好的方法就是多说多用，别只背。主要是因为语言不用就会忘，光看书没什么用（mainly because…）。比如我每天跟同学用英语聊十分钟，说错了也没关系（Take my own case,…）。所以只要坚持每天练，形成习惯，慢慢就能看到真正的进步（As a result,… / stick to a routine / see real progress）。",
    "p": ["mainly because…", "Take my own case,…", "As a result,…", "stick to a routine", "see real progress"]
  },
  "new-language-learning||What are the advantages and disadvantages of learning a language?": {
    "a": "我觉得学一门语言这件事，有好的一面也有坏的一面（it has both good and bad sides）。主要是因为好处是工作机会多了很多，坏处是太占时间（mainly because… / many more job opportunities）。比如我为了考雅思，每天要花两个小时，周末也不敢出去玩（Take my own case,…）。不过总的来说好处更多，所以我打算一直坚持学下去（That's why…）。",
    "p": ["it has both good and bad sides", "mainly because…", "many more job opportunities", "Take my own case,…", "That's why…"]
  },
  "new-language-learning||Some people think that technology has made it unnecessary to learn languages. What do you think?": {
    "a": "我觉得不对，翻译软件代替不了自己会说的能力（Not really.）。主要是因为软件只能应急，真聊起天来根本来不及（mainly because…）。比如我出去玩碰到外国人问路，举着手机翻译，特别别扭（Take my own case,…）。所以软件虽然省时间，但我觉得语言还是得自己学（That's why… / it saves me a lot of time, but…）。",
    "p": ["Not really.", "mainly because…", "Take my own case,…", "That's why…", "it saves me a lot of time, but…"]
  },
  "new-electronic-device-problem||Why are people keen on buying new electronic  devices?": {
    "a": "我觉得大家买新手机，很多时候是被广告勾起来的（it catches your attention）。主要是因为广告拍得特别好看，看一眼就想买（mainly because…）。比如我上次看到新手机拍照的广告，当天就去店里看了（Take my own case,…）。所以我觉得要小心，有些广告并不老实，别全信（That's why… / some ads are not honest / I don't believe everything I read）。",
    "p": ["it catches your attention", "mainly because…", "Take my own case,…", "That's why…", "some ads are not honest", "I don't believe everything I read"]
  },
  "new-electronic-device-problem||What impact do electronic devices have on people?": {
    "a": "我觉得电子产品对人的影响有好也有坏（it has both good and bad sides）。主要是因为好处是查东西方便，省了很多时间，但也容易上瘾（mainly because… / it saves me a lot of time, but…）。比如我本来只想查个东西，结果刷手机刷了一个小时（Take my own case,…）。所以我现在会规定自己晚饭后放下手机，出去走一走（That's why… / go for a walk after dinner）。",
    "p": ["it has both good and bad sides", "mainly because…", "it saves me a lot of time, but…", "Take my own case,…", "That's why…", "go for a walk after dinner"]
  },
  "new-important-decision||Do you think children sometimes have to make important decisions?": {
    "a": "我觉得孩子有时候也要做一些重要的决定。主要是因为有些事只有他自己知道喜不喜欢（mainly because…）。比如我小时候选兴趣班，我爸妈让我自己挑，我选了画画（Take my own case,…）。所以让孩子自己拿主意，不懂的地方再找爸妈帮忙，这也是一种责任（As a result,… / turn to… for help / it's a big responsibility）。",
    "p": ["mainly because…", "Take my own case,…", "As a result,…", "turn to… for help", "it's a big responsibility"]
  },
  "new-important-decision||What important decisions do teenagers need to  make after graduation?": {
    "a": "我觉得最重要的是选专业，还有毕业后做什么工作。主要是因为这直接决定以后能不能有稳定的收入（mainly because… / a stable income）。比如我表哥毕业时纠结了很久，最后决定先工作再考研（For example,…）。所以我建议先给自己定个明确的目标，再一步步走（That's why… / set myself a clear goal / break it down into small steps）。",
    "p": ["mainly because…", "a stable income", "For example,…", "That's why…", "set myself a clear goal", "break it down into small steps"]
  },
  "new-important-decision||Who can children turn to for help when making a decision?": {
    "a": "我觉得孩子一般会先去找爸妈帮忙，这是最自然的（turn to… for help）。主要是因为父母最了解自己的孩子，也最愿意花时间听（mainly because…）。比如我上高中选文科还是理科，就跟我妈商量了一整晚（Take my own case,…）。所以家里人先商量，实在拿不定主意再去问老师（That's why…）。",
    "p": ["turn to… for help", "mainly because…", "Take my own case,…", "That's why…"]
  },
  "new-important-decision||Do you think advertisements can influence our decisions when shopping?": {
    "a": "我觉得广告肯定会影响我们买东西时的决定（Yes, definitely.）。主要是因为广告拍得好看，一下子就抓住你的眼睛（mainly because… / it catches your attention）。比如我逛超市的时候看到广告上的饮料，就顺手买了一瓶（Take my own case,…）。所以我现在都会多想一下，广告说的话我不会全都相信（That's why… / I don't believe everything I read）。",
    "p": ["Yes, definitely.", "mainly because…", "it catches your attention", "Take my own case,…", "That's why…", "I don't believe everything I read"]
  },
  "new-important-decision||Do you think the influence of advertising is good?": {
    "a": "我觉得广告的影响有好的一面也有坏的一面（it has both good and bad sides）。主要是因为好的广告能让我们知道新东西，省不少时间（mainly because… / it saves me a lot of time, but…）。比如我上次买耳机，就是看广告才知道有这个牌子的（Take my own case,…）。不过有些广告并不老实，所以买之前我会先看看别人的评价（some ads are not honest / That's why…）。",
    "p": ["it has both good and bad sides", "mainly because…", "it saves me a lot of time, but…", "Take my own case,…", "some ads are not honest", "That's why…"]
  },
  "new-important-decision||How do people usually make important decisions?": {
    "a": "我觉得大多数人会先把好处和坏处都想清楚，再定。主要是因为重要的事一旦定下来就很难再改（mainly because…）。比如我朋友换工作前列了一张单子，最看重的是收入稳不稳定（For example,… / a stable income）。所以想清楚以后，很多人还会找信得过的人问问（As a result,… / turn to… for help）。",
    "p": ["mainly because…", "For example,…", "a stable income", "As a result,…", "turn to… for help"]
  },
  "new-teamwork||Why do some people prefer to work by themselves?": {
    "a": "我觉得有些人就是更习惯自己一个人做事情。主要是因为一个人做不用等别人，时间自己安排（mainly because…）。比如我写报告的时候就喜欢自己弄，想几点做就几点做，很自由（Take my own case,…）。所以小事自己做更省时间，真忙不过来再找人帮忙（That's why… / turn to… for help）。",
    "p": ["mainly because…", "Take my own case,…", "That's why…", "turn to… for help"]
  },
  "new-teamwork||What should a leader do to make team members want to follow him or her?": {
    "a": "我觉得好领导最重要的是多听听大家的想法。主要是因为大家觉得自己被重视了，才愿意跟着干（mainly because…）。比如我们组长开会时先问每个人的意见，再一起分工（Take my own case,…）。所以他让每个人做自己擅长的，我们做起来也特别快（As a result,… / each do what we're good at / it's much faster than working alone）。",
    "p": ["mainly because…", "Take my own case,…", "As a result,…", "each do what we're good at", "it's much faster than working alone"]
  },
  "new-teamwork||Should students learn to do group work?": {
    "a": "我觉得学生一定要学会怎么跟别人合作（Yes, definitely.）。主要是因为以后不管做什么工作，基本都要和别人一起（mainly because…）。比如我们做小组作业，每个人负责一部分，一晚上就做完了（Take my own case,… / be responsible for one part of…）。所以小组一起做比一个人快多了，这个能力以后用得上（As a result,… / it's much faster than working alone）。",
    "p": ["Yes, definitely.", "mainly because…", "Take my own case,…", "be responsible for one part of…", "As a result,…", "it's much faster than working alone"]
  },
  "new-teamwork||What group tasks are there in schools?": {
    "a": "我觉得学校里的小组任务挺多的，几乎每科都有。主要是因为老师想让学生早点学会跟别人配合（mainly because…）。比如科学课要一起做实验，英语课要排短剧，每人负责一部分（For example,… / be responsible for one part of…）。所以大家各做各擅长的那部分，任务完成得又快又好（As a result,… / each do what we're good at）。",
    "p": ["mainly because…", "For example,…", "be responsible for one part of…", "As a result,…", "each do what we're good at"]
  },
  "new-teamwork||What advantages are there for students experiencing teamwork at school?": {
    "a": "我觉得在学校体验团队合作，对学生的好处特别多。主要是因为几个人一起做事，比一个人做快得多（mainly because… / it's much faster than working alone）。比如我们班做海报的时候，有人画画，有人写字，各做各擅长的（Take my own case,… / each do what we're good at）。所以学生能早点学会跟人合作，也学会替别人着想（As a result,… / it teaches you to think about others）。",
    "p": ["mainly because…", "it's much faster than working alone", "Take my own case,…", "each do what we're good at", "As a result,…", "it teaches you to think about others"]
  },
  "new-teamwork||How can you tell if a person is a good leader?": {
    "a": "我觉得判断一个人是不是好领导，主要看他会不会分工。主要是因为他知道谁擅长什么，能把活分对（mainly because… / each do what we're good at）。比如我们组长做项目时，让每个人负责一部分，谁也不闲着（Take my own case,… / be responsible for one part of…）。所以整个组做起来特别快，这就是好领导（As a result,… / it's much faster than working alone）。",
    "p": ["mainly because…", "each do what we're good at", "Take my own case,…", "be responsible for one part of…", "As a result,…", "it's much faster than working alone"]
  },
  "new-changed-plan||Do people often change their plans?": {
    "a": "我觉得大家改计划改得挺频繁的，这很正常。主要是因为生活里意外太多了，计划说变就变（mainly because…）。比如我上周约好去爬山，结果车出了点问题，只能改成在家看电影（Take my own case,… / something went wrong with…）。所以我现在定计划都会多留一手，想好第二个方案（That's why…）。",
    "p": ["mainly because…", "Take my own case,…", "something went wrong with…", "That's why…"]
  },
  "new-changed-plan||Would you tell others if you change your plan?": {
    "a": "我肯定会第一时间告诉别人，我觉得这是最基本的（Yes, definitely.）。主要是因为不说一声的话，朋友可能会在外面白等好久（mainly because…）。比如上次我临时要改吃饭的时间，马上就发消息跟朋友说清楚（Take my own case,…）。所以只要计划有变，我都会尽快跟对方讲清楚（That's why… / get back to… as soon as I can）。",
    "p": ["Yes, definitely.", "mainly because…", "Take my own case,…", "That's why…", "get back to… as soon as I can"]
  },
  "new-changed-plan||Why do you think parents still make plans for their children nowadays?": {
    "a": "我觉得现在的父母还是喜欢帮孩子安排好一切。主要是因为他们怕孩子走弯路，白白浪费时间（mainly because…）。比如我妈从小就帮我定目标，还把目标拆成每天的小任务（Take my own case,… / set myself a clear goal / break it down into small steps）。所以孩子每天都能看到一点进步，父母就更放心了（As a result,… / see real progress）。",
    "p": ["mainly because…", "Take my own case,…", "set myself a clear goal", "break it down into small steps", "As a result,…", "see real progress"]
  },
  "new-changed-plan||How does technology help people make plans?": {
    "a": "我觉得科技让我们做计划方便多了。主要是因为手机上什么都能查，省了我很多时间，不过也让人懒得动脑（mainly because… / it saves me a lot of time, but…）。比如我出门前先在手机上看天气和路况，几秒钟就知道了（Take my own case,…）。所以安排事情比以前简单多了，选择也多了很多（As a result,… / there's a lot more choice now）。",
    "p": ["mainly because…", "it saves me a lot of time, but…", "Take my own case,…", "As a result,…", "there's a lot more choice now"]
  },
  "new-changed-plan||What kind of plans do people often make?": {
    "a": "我觉得大家的计划一般分两种，短期的和长期的。主要是因为短期的事好安排，长期的只能慢慢来（mainly because…）。比如我给自己定了个很明确的目标，一年内雅思考到六分（Take my own case,… / set myself a clear goal）。所以我把它拆成每天的小任务，这样才能看到真正的进步（As a result,… / break it down into small steps / see real progress）。",
    "p": ["mainly because…", "Take my own case,…", "set myself a clear goal", "As a result,…", "break it down into small steps", "see real progress"]
  },
  "new-changed-plan||Do you think people like the process of making plans more, or the moment of carrying them out?": {
    "a": "我觉得大多数人更喜欢真正去做的那一刻。主要是因为计划写在纸上没什么感觉，做完才有成就感（mainly because… / a real sense of achievement）。比如我坚持跑步一个月，瘦了几斤，那种感觉特别好（Take my own case,… / see real progress）。相比之下，定计划只是想一想，所以做出来的时候才最开心（Compared with… / That's why…）。",
    "p": ["mainly because…", "a real sense of achievement", "Take my own case,…", "see real progress", "Compared with…", "That's why…"]
  },
  "new-early-morning||Do you know anyone who likes to get up early?": {
    "a": "认识，我妈就是那种特别喜欢早起的人（Yes, definitely.）（be a morning person）。主要是因为大部分早起的人觉得早上很安静，做事情比较快（mainly because…）。比如我妈，每天五点半就起来做早饭，然后去公园走一圈再回来（For example,…）。所以她这么多年一直坚持这个作息，很少睡懒觉（That's why…）（stick to a routine）。",
    "p": ["Yes, definitely.", "be a morning person", "mainly because…", "For example,…", "That's why…", "stick to a routine"]
  },
  "new-early-morning||Why do people get up early?": {
    "a": "我觉得大家早起主要是想把早上的时间好好用起来。主要是因为很多人早上头脑最清醒，工作学习都快一些（mainly because…）（I work best before…）。比如我一个邻居，每天六点起来先跑步，再去上班（For example,…）。所以早起的人一般都会一直保持固定的作息（That's why…）（stick to a routine）。",
    "p": ["mainly because…", "I work best before…", "For example,…", "That's why…", "stick to a routine"]
  },
  "new-early-morning||What kinds of occasions do people need to arrive early?": {
    "a": "我觉得面试、考试还有赶飞机火车这些场合都得提前到。主要是因为大部分人出门都可能碰上堵车，路上时间说不准（mainly because…）（get stuck in traffic）。比如我上次赶高铁，正好是早高峰，差一点就误车了（For example,…）（at rush hour）。所以这种重要的事我都会早点出门（That's why…）。",
    "p": ["mainly because…", "get stuck in traffic", "For example,…", "at rush hour", "That's why…"]
  },
  "new-early-morning||Why do some people like to stay up late?": {
    "a": "我觉得有些人熬夜是因为晚上才真正属于自己。主要是因为很多人白天要上班上学，只有晚上能放松一下（mainly because…）（relax after a long day）。比如我一个同学，每天晚上十二点还在看视频、玩手机（For example,…）。所以他们越熬越晚，早上就更起不来了（That's why…）。",
    "p": ["mainly because…", "relax after a long day", "For example,…", "That's why…"]
  },
  "new-early-morning||Is it good to arrive early in any situation?": {
    "a": "不一定，早到还要看是什么场合（Not really.）。主要是因为很多人去朋友家或者聚会太早，对方还没准备好（mainly because…）。比如我上次去同学家吃饭，早到一个小时，只能坐在那里干等（For example,…）。所以像考试、赶飞机这种才需要早到，怕路上堵车（That's why…）（get stuck in traffic）。",
    "p": ["Not really.", "mainly because…", "For example,…", "That's why…", "get stuck in traffic"]
  },
  "new-early-morning||What kind of people like getting up early?": {
    "a": "我觉得爱早起的一般是作息规律、每天有事做的人（be a morning person）。主要是因为这些人给自己定了明确的目标，得早点开始（mainly because…）（set myself a clear goal）。比如我们班有个同学，每天六点起来背单词，从不睡懒觉（For example,…）。所以他们慢慢就习惯了固定的作息（That's why…）（stick to a routine）。",
    "p": ["be a morning person", "mainly because…", "set myself a clear goal", "For example,…", "That's why…", "stick to a routine"]
  },
  "new-changed-opinion||When do most children begin to have their own opinions?": {
    "a": "我觉得大部分孩子上小学以后就开始有自己的想法了。主要是因为他们在学校听得多看得多，慢慢就会自己判断（mainly because…）。拿我自己来说，我上三年级的时候就开始跟爸妈争论一些事（Take my own case,…）。所以我以前觉得孩子什么都不懂，现在觉得他们比我们想的早（That's why…）（I used to think…）（now I think…）。",
    "p": ["mainly because…", "Take my own case,…", "That's why…", "I used to think…", "now I think…"]
  },
  "new-changed-opinion||Do children communicate more with teachers or with parents?": {
    "a": "我觉得孩子跟父母交流更多一些。主要是因为大部分孩子每天回家都能见到父母，说话也很随便（mainly because…）。比如我小时候一进门就跟我妈讲学校发生的事，一讲讲半天（For example,…）。所以有心事孩子还是先跟父母讲，老师那边大家都忙（That's why…）（everyone gets busy sometimes）。",
    "p": ["mainly because…", "For example,…", "That's why…", "everyone gets busy sometimes"]
  },
  "new-changed-opinion||Whose opinions are more important to children, their parents' or teachers'?": {
    "a": "我觉得父母的意见对孩子更重要。主要是因为大部分孩子跟父母待在一起的时间最长，最听父母的（mainly because…）。比如我小时候想学画画，我爸说了一句支持，我就一直学到现在（For example,…）。所以父母的一句话，往往就能改变孩子的想法（That's why…）（make a difference to other people）。",
    "p": ["mainly because…", "For example,…", "That's why…", "make a difference to other people"]
  },
  "new-changed-opinion||Who do most young people like to share opinions with?": {
    "a": "我觉得大部分年轻人更喜欢跟同龄的朋友分享想法。主要是因为朋友之间年纪差不多，说话没有压力，也不怕被说（mainly because…）。拿我自己来说，我有事一般先在微信上跟同学讲，很少跟长辈讲（Take my own case,…）。所以年轻人遇到问题，一般先找朋友帮忙，而不是找家长（That's why…）（turn to… for help）。",
    "p": ["mainly because…", "Take my own case,…", "That's why…", "turn to… for help"]
  },
  "new-recent-change||Do you think it is good to change one's daily routine?": {
    "a": "我觉得偶尔改一改自己的日常习惯是件好事（Yes, definitely.）。主要是因为很多人一直重复同样的生活，时间长了会觉得累（mainly because…）。比如我最近把晚上躺着刷手机，改成了吃完饭出去走一走（For example,…）（go for a walk after dinner）。结果我晚上睡得更好了，这种小改变慢慢就有效果（As a result,…）（small changes add up）。",
    "p": ["Yes, definitely.", "mainly because…", "For example,…", "go for a walk after dinner", "As a result,…", "small changes add up"]
  },
  "new-recent-change||Do you think it is good to change jobs?": {
    "a": "我觉得要看情况，不过大部分时候换工作是好事（It depends, but usually…）。主要是因为换一份工作往往能拿到更高的工资，机会也更多（mainly because…）（many more job opportunities）。比如我一个表哥去年换了工作，收入稳定了不少，人也开心（For example,…）（a stable income）。所以想清楚了再换，一般不会亏（That's why…）。",
    "p": ["It depends, but usually…", "mainly because…", "many more job opportunities", "For example,…", "a stable income", "That's why…"]
  },
  "new-recent-change||Is it good for people to get a job promotion?": {
    "a": "我觉得升职对大部分人来说都是一件好事（Yes, definitely.）。主要是因为升职以后收入会更稳定，日子也更好过（mainly because…）（a stable income）。比如我一个同事去年升了主管，虽然忙了不少，但特别有成就感（For example,…）（a real sense of achievement）。所以就算压力大一点，大部分人还是愿意升职（That's why…）。",
    "p": ["Yes, definitely.", "mainly because…", "a stable income", "For example,…", "a real sense of achievement", "That's why…"]
  },
  "new-recent-change||Do people often make plans around their regular routines?": {
    "a": "我觉得很多人确实会围着自己的固定作息来安排事情（Yes, definitely.）（stick to a routine）。主要是因为按习惯来最省心，不用每天重新想（mainly because…）。比如我妈每天六点做饭，家里其他事都排在这个时间前后（For example,…）。所以有了固定的节奏，大家做事就更容易照着走（That's why…）（easy to follow）。",
    "p": ["Yes, definitely.", "stick to a routine", "mainly because…", "For example,…", "That's why…", "easy to follow"]
  },
  "new-recent-change||Who tend to change their daily routine more, young people or old people?": {
    "a": "我觉得年轻人更容易改变自己的日常习惯。主要是因为大部分年轻人愿意试新东西，也比较能接受变化（mainly because…）（keep an open mind）。比如我朋友临时约我出去玩，我马上就能把安排往后挪（For example,…）。所以老人一般还是坚持原来的作息，很少去改（That's why…）（stick to a routine）。",
    "p": ["mainly because…", "keep an open mind", "For example,…", "That's why…", "stick to a routine"]
  },
  "new-important-river-lake||Are rivers and lakes important to a country?": {
    "a": "我觉得非常重要，一个国家离不开河和湖（Yes, definitely.）。主要是因为大部分人喝的水、种地用的水都来自河和湖（mainly because…）。比如我们家旁边就有条河，夏天晚上很多人在那边散步、透气（For example,…）（get some fresh air）。所以保护好河和湖，是我们每个人的事（That's why…）（it's everyone's responsibility）。",
    "p": ["Yes, definitely.", "mainly because…", "For example,…", "get some fresh air", "That's why…", "it's everyone's responsibility"]
  },
  "new-important-river-lake||What are the popular water sports in your country?": {
    "a": "我觉得最受欢迎的是游泳和划船，夏天玩的人特别多。主要是因为这两样都不难学，普通人跟着教一遍就会（mainly because…）（easy to follow）。拿我自己来说，我去年夏天在公园的湖上划过船，划了一个下午（Take my own case,…）。所以夏天很多人去水边玩，图的就是凉快、放松（That's why…）（relax after a long day）。",
    "p": ["mainly because…", "easy to follow", "Take my own case,…", "That's why…", "relax after a long day"]
  },
  "new-important-river-lake||Are rivers and lakes good for transport? Why?": {
    "a": "我觉得挺合适的，特别是运货的时候（Yes, definitely.）。主要是因为船一次装得多，比走公路便宜不少，能省成本（mainly because…）（keep the costs down）。比如我老家很多沙子和煤都是用船运的，很少走高速（For example,…）。而且走水路不会堵车，所以时间上也更好算（That's why…）（get stuck in traffic）。",
    "p": ["Yes, definitely.", "mainly because…", "keep the costs down", "For example,…", "That's why…", "get stuck in traffic"]
  },
  "new-important-river-lake||How do rivers and lakes affect local tourism?": {
    "a": "我觉得影响很大，有河有湖的地方游客明显多一些。主要是因为水边风景好，可看可玩的东西也多（mainly because…）（there's a lot to see and do）。比如我们那边的湖，一到夏天全是外地来的人，酒店都订满（For example,…）。所以这种地方我会推荐给喜欢安静风景的朋友（That's why…）（I'd recommend it to anyone who…）。",
    "p": ["mainly because…", "there's a lot to see and do", "For example,…", "That's why…", "I'd recommend it to anyone who…"]
  },
  "new-important-river-lake||Do you think rivers and lakes attract tourists?": {
    "a": "我觉得会，很多人出去玩就是冲着水边去的（Yes, definitely.）。主要是因为大部分人平时住在城里，很想找个地方透透气（mainly because…）（get some fresh air）。拿我自己来说，我上个月专门去了一趟湖边，就为了坐着看水（Take my own case,…）。所以有河有湖的地方，我觉得都很值得去一趟（That's why…）（really worth visiting）。",
    "p": ["Yes, definitely.", "mainly because…", "get some fresh air", "Take my own case,…", "That's why…", "really worth visiting"]
  },
  "new-important-river-lake||How can rivers and lakes benefit local people?": {
    "a": "我觉得好处不少，当地人能钓鱼、锻炼，还能靠游客挣点钱。主要是因为游客一多，附近开店、开民宿的人收入就稳定了（mainly because…）（a stable income）。比如我一个亲戚在湖边开小饭馆，夏天两三个月就能挣不少（For example,…）（run my own business）。所以对当地人来说，这条河等于一份长期的收入（That's why…）。",
    "p": ["mainly because…", "a stable income", "For example,…", "run my own business", "That's why…"]
  },
  "new-recommended-place||Where do people in your country often go for holidays?": {
    "a": "我们这边的人放假一般去海边或者近一点的山里。主要是因为大部分人假期不长，去太远的地方来回太费时间（mainly because…）。比如我们家去年五一就开车去了旁边的水库，住了两个晚上（For example,…）。所以近一点又有得看的地方，最受大家欢迎（That's why…）（there's a lot to see and do）。",
    "p": ["mainly because…", "For example,…", "That's why…", "there's a lot to see and do"]
  },
  "new-recommended-place||Where do young people in your country often go for holidays?": {
    "a": "我觉得年轻人更喜欢去热闹的大城市。主要是因为大城市吃的玩的多，选择也比小地方多得多（mainly because…）（there's a lot more choice now）。比如我同学放假就去了成都，白天逛街，晚上跟朋友出去吃饭（For example,…）（eat out with friends）。所以年轻人度假，一般还是往大城市跑（That's why…）。",
    "p": ["mainly because…", "there's a lot more choice now", "For example,…", "eat out with friends", "That's why…"]
  },
  "new-recommended-place||What is the ideal length for a holiday?": {
    "a": "我觉得一个星期左右最合适，不长也不短。主要是因为太短的话大部分人还没放松就结束了，太长又花钱多（mainly because…）。拿我自己来说，我上次请了一周假，玩四天，剩下几天在家休息（Take my own case,…）。结果回去上班的时候，我觉得整个人真的松下来了（As a result,…）（relax after a long day）。",
    "p": ["mainly because…", "Take my own case,…", "As a result,…", "relax after a long day"]
  },
  "new-recommended-place||How do people usually plan holidays?": {
    "a": "我觉得大部分人现在都是用手机订票、订酒店。主要是因为在手机上比价、看评价确实很省时间（mainly because…）（it saves me a lot of time, but…）。比如我上次出去玩，路线和住的地方都是提前在手机上定好的（For example,…）。不过网上说的也不能全信，所以我会多看几家再定（That's why…）（I don't believe everything I read）。",
    "p": ["mainly because…", "it saves me a lot of time, but…", "For example,…", "That's why…", "I don't believe everything I read"]
  },
  "new-recommended-place||Is it important to plan a holiday ahead?": {
    "a": "我觉得提前把假期计划好还是挺重要的（Yes, definitely.）。主要是因为大部分人假期都挤在同一段时间，晚了就订不到（mainly because…）。比如我去年国庆前一周才订酒店，价格翻了一倍还不好订（For example,…）。所以提前安排能省不少钱，玩起来也更顺（That's why…）（keep the costs down）。",
    "p": ["Yes, definitely.", "mainly because…", "For example,…", "That's why…", "keep the costs down"]
  },
  "new-recommended-place||How do people decide when to travel?": {
    "a": "我觉得大部分人是看假期和家里人的时间来定。主要是因为只有长假的时候，一家人才可能凑到一起出门（mainly because…）。比如我们家每次都是等我爸休年假，才一起安排出去玩（For example,…）。所以大家都尽量错开高峰，免得路上一直堵车（That's why…）（get stuck in traffic）。",
    "p": ["mainly because…", "For example,…", "That's why…", "get stuck in traffic"]
  },
  "new-visit-home||Do Chinese people like to visit others' homes?": {
    "a": "我觉得大部分中国人还是喜欢去别人家串门的（Yes, definitely.）。主要是因为在家里说话更自在，不像在外面那么拘束（mainly because…）。比如过年的时候，我们一家人会挨个去亲戚家坐坐，聊聊近况（For example,…）。所以就算大家平时都忙，一年也总要走动几次（That's why…）（everyone gets busy sometimes）。",
    "p": ["Yes, definitely.", "mainly because…", "For example,…", "That's why…", "everyone gets busy sometimes"]
  },
  "new-visit-home||What do Chinese people do when they visit others?": {
    "a": "我觉得一般就是坐下来喝喝茶、聊聊天，有时候一起吃顿饭。主要是因为大部分人串门就是想见见面，不是真有什么事（mainly because…）。比如我上次去我姑姑家，她做了几个家常菜，我们边吃边聊（For example,…）（cook something simple at home）。所以吃什么不重要，大家在一起的那份心意才重要（That's why…）（it's the thought that counts）。",
    "p": ["mainly because…", "For example,…", "cook something simple at home", "That's why…", "it's the thought that counts"]
  },
  "new-visit-home||What kind of place do people in your country like to live in?": {
    "a": "我觉得大部分人还是喜欢住在城市里。主要是因为城里工作机会多，公共交通也方便（mainly because…）（many more job opportunities）（public transport is convenient）。比如我一个亲戚在县城工作，去年还是搬到市里，就为了上班近（For example,…）。所以除了上年纪的人喜欢慢节奏，大多数人都往城里搬（That's why…）（a slower pace of life）。",
    "p": ["mainly because…", "many more job opportunities", "public transport is convenient", "For example,…", "That's why…", "a slower pace of life"]
  },
  "new-visit-home||What's the difference between homes in cities and those in the countryside?": {
    "a": "我觉得最大的区别是城里的房子小但方便，乡下的房子大但安静。主要是因为城里人多地少，房价又高，大家只能住小一点（mainly because…）。比如我爷爷家在乡下，院子特别大，晚上还能出去走一圈（For example,…）（go for a walk after dinner）。城里出门就有地铁，所以年轻人还是更愿意住在城里（That's why…）（public transport is convenient）。",
    "p": ["mainly because…", "For example,…", "go for a walk after dinner", "That's why…", "public transport is convenient"]
  },
  "new-visit-home||What kind of gifts do people bring when they visit others?": {
    "a": "我觉得一般就带水果、茶叶或者牛奶这些实用的东西。主要是因为大部分人挑礼物的时候，会想对方到底用不用得上（mainly because…）（pick something they'll actually use）。比如我上次去看我奶奶，就买了一箱她平时爱喝的牛奶（For example,…）。所以礼物不用多贵，心意到了就行（That's why…）（it's the thought that counts）。",
    "p": ["mainly because…", "pick something they'll actually use", "For example,…", "That's why…", "it's the thought that counts"]
  },
  "new-visit-home||How often do you visit your relatives of friends?": {
    "a": "我大概一个月去看一次亲戚或者朋友。主要是因为大家平时都上班，只有周末才有空聚一聚（mainly because…）（everyone gets busy sometimes）。比如上个月我去了一趟朋友家，中午一起吃饭，下午聊到很晚（For example,…）。所以见面次数不算多，但每次都会好好聊一聊（That's why…）。",
    "p": ["mainly because…", "everyone gets busy sometimes", "For example,…", "That's why…"]
  },
  "new-boring-place||Why do most children think education is boring?": {
    "a": "我觉得大部分孩子确实会觉得上课有点无聊。主要是因为每天的课都差不多，孩子只能坐着听，动都不能动（mainly because…）。拿我自己来说，我小时候一节课四十分钟，后半节基本在发呆（Take my own case,…）。所以老师要是能把内容拆小一点，一步一步来，会好很多（That's why…）（break it down into small steps）。",
    "p": ["mainly because…", "Take my own case,…", "That's why…", "break it down into small steps"]
  },
  "new-boring-place||Why aren't young people willing to listen to the experiences of older people?": {
    "a": "我觉得年轻人确实不太愿意听老人讲经验。主要是因为老人讲话慢，一件小事能说很久，年轻人听不下去（mainly because…）（a slower pace of life）。比如我爷爷总说他们那会儿去哪儿都是走路，我听过好多遍了（For example,…）（we used to walk everywhere）。所以年轻人不是不尊重，只是节奏对不上（That's why…）。",
    "p": ["mainly because…", "a slower pace of life", "For example,…", "we used to walk everywhere", "That's why…"]
  },
  "new-boring-place||What can people do when they feel bored?": {
    "a": "我觉得无聊的时候最好出去走走，别一直待在屋里。主要是因为很多人闷在家里越待越烦，出去透透气就好多了（mainly because…）（get some fresh air）。拿我自己来说，我一无聊就吃完饭出去绕小区走一圈（Take my own case,…）（go for a walk after dinner）。结果走一走回来，我就不去想那些烦心事了（As a result,…）（it helps me forget about…）。",
    "p": ["mainly because…", "get some fresh air", "Take my own case,…", "go for a walk after dinner", "As a result,…", "it helps me forget about…"]
  },
  "new-boring-place||Why are some teachers' class boring? Are there any solutions?": {
    "a": "我觉得有些老师的课确实挺无聊的。主要是因为老师一个人从头讲到尾，学生只能坐着听，没人互动（mainly because…）。比如我高中有个老师，一节课下来只念课本，全班都在打瞌睡（For example,…）。所以老师可以多提问，把内容拆成小块讲，课就没那么闷了（That's why…）（break it down into small steps）。",
    "p": ["mainly because…", "For example,…", "That's why…", "break it down into small steps"]
  },
  "new-boring-place||Why do some young people feel bored when talking with old people?": {
    "a": "我觉得主要是两边聊的话题对不上。主要是因为老人爱说以前的事，年轻人更想聊现在好玩的东西（mainly because…）。比如我外婆总说以前买东西没得挑，可现在东西多得挑不过来（For example,…）（there's a lot more choice now）。所以年轻人听着听着就走神了，其实也不是嫌老人烦（That's why…）。",
    "p": ["mainly because…", "For example,…", "there's a lot more choice now", "That's why…"]
  },
  "new-boring-place||Do most people think news about celebrities is boring?": {
    "a": "我觉得不一定，很多人其实挺爱看名人新闻的（Not really.）。主要是因为这种新闻标题写得很抓人，一看就想点进去（mainly because…）（it catches your attention）。拿我自己来说，我在手机上刷到明星的事，也会顺手看两眼（Take my own case,…）（I usually see… on my phone）。不过里面有不少是假的，所以我不会全信（That's why…）（I don't believe everything I read）。",
    "p": ["Not really.", "mainly because…", "it catches your attention", "Take my own case,…", "I usually see… on my phone", "That's why…", "I don't believe everything I read"]
  },
  "new-favourite-city||Which is more suitable for young people, urban life or rural life, and which is more suitable for old people?": {
    "a": "我觉得年轻人更适合城市，老人更适合乡下。主要是因为城里的工作机会多，年轻人能多闯几年（mainly because…）（many more job opportunities）。比如我表哥大学一毕业就去了广州，几年就换了三份工作（For example,…）。老人不需要拼，所以乡下那种慢节奏对他们更合适（That's why…）（a slower pace of life）。",
    "p": ["mainly because…", "many more job opportunities", "For example,…", "That's why…", "a slower pace of life"]
  },
  "new-favourite-city||How do people choose a city to travel to?": {
    "a": "我觉得大部分人先在手机上看别人的评价和照片。主要是因为现在能去的地方太多了，不看看根本挑不过来（mainly because…）（there's a lot more choice now）。比如我上次挑地方，翻了半天的短视频，最后定了西安（For example,…）（I usually see… on my phone）。所以最后选的，一般都是可看可玩的东西多的城市（That's why…）（there's a lot to see and do）。",
    "p": ["mainly because…", "there's a lot more choice now", "For example,…", "I usually see… on my phone", "That's why…", "there's a lot to see and do"]
  },
  "new-favourite-city||Do you think a tourist city is also a good place to live? Why?": {
    "a": "我觉得旅游城市住起来其实也挺舒服的（Yes, definitely.）。主要是因为这种城市公共交通很方便，去哪儿都能坐地铁（mainly because…）（public transport is convenient）。比如我在厦门待过一段时间，出门基本不用开车，很省事（For example,…）（take the subway instead）。就是周末人多会堵，所以我一般错开时间出门（That's why…）（get stuck in traffic）。",
    "p": ["Yes, definitely.", "mainly because…", "public transport is convenient", "For example,…", "take the subway instead", "That's why…", "get stuck in traffic"]
  },
  "new-favourite-city||Do most people prefer to travel in a modern city or a historical city?": {
    "a": "我觉得大部分人更喜欢去有历史的老城市玩。主要是因为老城里能看的东西多，走一走就像回到从前（mainly because…）（there's a lot to see and do）。比如我去年去了平遥，光是那条老街我就来回走了两趟（For example,…）。现代城市的高楼都差不多，所以老城更值得专门跑一趟（That's why…）（really worth visiting）。",
    "p": ["mainly because…", "there's a lot to see and do", "For example,…", "That's why…", "really worth visiting"]
  },
  "new-tall-building||Are there many tall buildings in your country?": {
    "a": "我们国家的高楼特别多，大城市里到处都是（Yes, definitely.）。主要是因为城里人多地少，只能往高处盖，才住得下这么多人（mainly because…）。比如我住的那个小区，一栋楼就有三十多层，住着几百户人（For example,…）。所以高楼一多，早上上班的人也跟着挤，高峰期特别夸张（That's why…）（at rush hour）。",
    "p": ["Yes, definitely.", "mainly because…", "For example,…", "That's why…", "at rush hour"]
  },
  "new-tall-building||What are the differences between those tall buildings in your country?": {
    "a": "我觉得主要看是在城里还是在乡下。主要是因为城里的楼又高又密，乡下基本都是两三层的小房子（mainly because…）。比如我老家的县城，最高的楼才十几层，走两步就到头了（For example,…）。乡下节奏慢，用不上那么高的楼，所以两边差别很大（That's why…）（a slower pace of life）。",
    "p": ["mainly because…", "For example,…", "That's why…", "a slower pace of life"]
  },
  "new-tall-building||Why are different places laid out and designed differently?": {
    "a": "我觉得每个地方的情况不一样，设计当然就不一样。主要是因为大城市人多地方挤，设计上先要考虑省地方、省钱（mainly because…）（keep the costs down）。比如我们市中心的楼盖得又高又挤，郊区那边就宽敞多了（For example,…）。旅游城市又不同，所以会多留些地方给游客逛（That's why…）（there's a lot to see and do）。",
    "p": ["mainly because…", "keep the costs down", "For example,…", "That's why…", "there's a lot to see and do"]
  },
  "new-tall-building||What are the advantages of living in tall buildings?": {
    "a": "我觉得住高层最大的好处是安静，视野也好。主要是因为楼层高，离马路远，车声人声都传不上来（mainly because…）。拿我自己来说，我住在十八楼，晚上开着窗都听不到什么声音（Take my own case,…）。所以下班回家往窗边一站，人一下子就放松了（That's why…）（relax after a long day）。",
    "p": ["mainly because…", "Take my own case,…", "That's why…", "relax after a long day"]
  },
  "new-tall-building||Why do some people like to remodel and decorate their homes themselves?": {
    "a": "我觉得很多人自己动手，就是想省钱，也想装成自己喜欢的样子。主要是因为请人装修一次要花不少，自己做能把成本压下来（mainly because…）（keep the costs down）。比如我一个朋友自己刷墙装灯，不会的就上网看教程，一步步来（For example,…）（break it down into small steps）。结果做完以后特别有成就感，看着自己的房子很舒服（As a result,…）（a real sense of achievement）。",
    "p": ["mainly because…", "keep the costs down", "For example,…", "break it down into small steps", "As a result,…", "a real sense of achievement"]
  },
  "new-tall-building||What kind of interior design style do most people like?": {
    "a": "我觉得大部分人喜欢简单干净的风格，东西不用太多。主要是因为大家上了一天班，回家就想安安静静地歇着（mainly because…）（relax after a long day）。比如我家里就没什么摆设，沙发一坐，灯一开，人就松下来了（For example,…）。所以大家会把多余的东西减掉，越简单住着越舒服（That's why…）（cut down on…）。",
    "p": ["mainly because…", "relax after a long day", "For example,…", "That's why…", "cut down on…"]
  },
  "new-free-time-travel-place||Why do you think some people choose not to travel abroad?": {
    "a": "我觉得主要还是钱的问题。主要是因为出国一趟机票加酒店太贵，很多人舍不得花这个钱（mainly because…）。比如我叔叔就说，几万块钱玩一个星期，还不如留着（For example,…）。所以他们宁可在国内找个近一点的地方，也能把成本压下来（That's why…）（keep the costs down）。",
    "p": ["mainly because…", "For example,…", "That's why…", "keep the costs down"]
  },
  "new-free-time-travel-place||Do you think a gap period in life is important?": {
    "a": "我觉得人生中有一段空档还是挺重要的（Yes, definitely.）。主要是因为一直连轴转的人很容易累，需要停下来想一想（mainly because…）。拿我自己来说，我毕业后歇了半年，给自己定了一个明确的目标（Take my own case,…）（set myself a clear goal）。结果后面我一步一步去做，慢慢真的看到了进展（As a result,…）（see real progress）。",
    "p": ["Yes, definitely.", "mainly because…", "Take my own case,…", "set myself a clear goal", "As a result,…", "see real progress"]
  },
};
