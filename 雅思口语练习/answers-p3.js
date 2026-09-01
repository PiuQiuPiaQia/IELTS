// Part 3 答案覆盖表（2026-09-01 第五版）。
// 键 = 题组 id + "||" + 英文题目原文；a = 中文答案（PREC 四句）；g = 该题该挑的角度；p = 用到的词块。
// 中文一律按英文语序写：每个小句都有主语和动词，连词写出来，不用中文流水句，方便逐句直译。
// 全角括号（）里是要背的核心词块；半角方括号[]里是普通英文提示，不用背，只为知道那句中文怎么说。
// 例子槽一律用泛指（For example, 很多人…），不用个人经历。
// app.js 有兜底：本文件若加载失败或语法出错，页面自动退回 data.js 的原答案，不会白屏。
window.P3_ANSWERS = {
  "new-language-speaker||Are there many people who can speak foreign languages in your country?": {
    "a": "是的（Yes, definitely.），现在会外语的人比以前多很多[more people can speak a foreign language now than before]。主要是因为（mainly because…）会外语的人有更多的工作机会（many more job opportunities），他们的工资也更高[and they also get a higher salary]。比如（For example,…）很多年轻人晚上用手机学英语，因为他们想换一份工资更高的工作[because they want to change to a job with a higher salary]。所以（That's why…）我觉得将来会外语的人会更多。而且很多人学外语，因为他们想交外国朋友[because they want to make foreign friends]。",
    "g": "钱",
    "p": ["Yes, definitely.", "mainly because…", "many more job opportunities", "For example,…", "That's why…"]
  },
  "new-language-speaker||Does speaking other languages help at work?": {
    "a": "是的（Yes, definitely.），外语对工作很有帮助[speaking a foreign language helps a lot at work]。主要是因为（mainly because…）会外语的人有更多的工作机会（many more job opportunities），他们也更容易拿到稳定的收入（a stable income）。比如（For example,…）很多公司给会外语的员工更高的工资[a lot of companies pay more money to staff who can speak a foreign language]，因为这些员工可以和外国客户谈生意[because these staff can do business with foreign customers]。所以（As a result,…）这些员工在公司里很受欢迎。而且他们的同事也常常找他们帮忙[and their colleagues often ask them for help]。",
    "g": "钱",
    "p": ["Yes, definitely.", "mainly because…", "many more job opportunities", "a stable income", "For example,…", "As a result,…"]
  },
  "new-language-speaker||Do people learn any languages other than English?": {
    "a": "是的（Yes, definitely.），很多人也学日语和韩语。主要是因为（mainly because…）他们觉得日剧和韩剧很有意思[they think Japanese and Korean TV shows are very interesting]，所以他们也想听懂里面的话[so they want to understand what the actors say]。比如（For example,…）很多上班的人晚上学韩语，因为他们想放松一下（relax after a long day）。所以（That's why…）我觉得将来学别的语言的人会更多。而且他们学会以后会很开心[and they feel very happy after they learn it]。",
    "g": "情绪",
    "p": ["Yes, definitely.", "mainly because…", "For example,…", "relax after a long day", "That's why…"]
  },
  "new-language-speaker||Why is it easier for children to learn new things  than for adults?": {
    "a": "我觉得孩子学东西比大人快[I think children learn things faster than adults]。主要是因为（mainly because…）孩子不怕说错，所以他们上课的时候一点也不紧张[children are not afraid of making mistakes, so they are not nervous in class]，而且他们愿意试新的东西（keep an open mind）。比如（For example,…）很多小学生在课上大声读英语，他们一点也不害羞[a lot of primary school students read English aloud in class, and they are not shy]。所以（That's why…）他们可以很快看到真的进步（see real progress）。而且他们的老师也常常鼓励他们[and their teachers often encourage them]。",
    "g": "情绪",
    "p": ["mainly because…", "keep an open mind", "For example,…", "That's why…", "see real progress"]
  },
  "new-language-speaker||How do people learn new things?": {
    "a": "这个看情况（It depends, but usually…），不过现在大部分人在网上自己学。主要是因为（mainly because…）网上有很多免费的视频，所以他们不用花钱去上课[there are a lot of free videos online, so they do not need to pay for a class]。比如（For example,…）很多人想学做饭，他们先看免费的视频，然后他们在家做一些简单的菜（cook something simple at home）。所以（As a result,…）大部分人省下了很多钱[most people save a lot of money]。而且他们在家学也更放松[and they also feel more relaxed when they learn at home]。",
    "g": "钱",
    "p": ["It depends, but usually…", "mainly because…", "For example,…", "cook something simple at home", "As a result,…"]
  },
  "new-language-speaker||What is the most important thing for learning a language well?": {
    "a": "我觉得最重要的是每天练习（stick to a routine）。最主要的原因是（The main reason is that…）我们要先给自己定一个清楚的目标（set myself a clear goal），然后我们每天做一点[and then we do a little every day]。比如（For example,…）很多学生每天早上背二十个单词，他们从来不间断[a lot of students learn twenty new words every morning, and they never stop]。所以他们一个月以后就能看到真的进步（see real progress）。而且他们可以找同学一起练习[and they can practise together with their classmates]。",
    "g": "目标",
    "p": ["stick to a routine", "The main reason is that…", "set myself a clear goal", "For example,…", "see real progress"]
  },
  "new-successful-businessperson||Why do some people start their own business?": {
    "a": "我觉得很多人想自己做决定[I think a lot of people want to make their own decisions]。最主要的原因是（The main reason is that…）他们想自己开一家店（run my own business），因为他们成功以后会很有成就感（a real sense of achievement）。比如（For example,…）现在很多年轻人开小咖啡店，他们每天很忙，但是他们很开心[they are busy every day, but they are very happy]。所以（That's why…）有些人愿意辛苦一点，因为他们想自己当老板[some people would rather work harder, because they want to be their own boss]。而且他们自己开店可以赚更多的钱[and they can make more money if they run their own shop]。",
    "g": "情绪",
    "p": ["The main reason is that…", "run my own business", "a real sense of achievement", "For example,…", "That's why…"]
  },
  "new-successful-businessperson||Should governments provide financial support to start-ups?": {
    "a": "我觉得政府应该帮助小公司（the government should support…）。主要是因为（mainly because…）小公司刚开始要花很多钱[small companies have to spend a lot of money at the beginning]，政府给钱可以帮他们减少成本（keep the costs down）。比如（For example,…）很多小饭馆开门的时候拿过政府的补贴[a lot of small restaurants got money from the government when they opened]，所以他们付得起房租[so they could pay the rent]。所以（As a result,…）这些店活了下来，而且它们给了大家更多的工作机会（many more job opportunities）。",
    "g": "钱",
    "p": ["the government should support…", "mainly because…", "keep the costs down", "For example,…", "As a result,…", "many more job opportunities"]
  },
  "new-successful-businessperson||Do most people prefer shopping at big stores or small stores?": {
    "a": "这个看情况（It depends, but usually…），不过大部分人喜欢去大超市。最主要的原因是（The main reason is that…）大超市的东西很便宜，所以顾客可以省钱（keep the costs down），而且他们可以选的东西更多（there's a lot more choice now）。比如（For example,…）很多家庭一个星期去一次大超市，因为大超市的菜比小店便宜[because the vegetables in a big supermarket are cheaper than in a small shop]。所以（That's why…）我觉得大超市更受欢迎[I think big supermarkets are more popular]。而且很多人喜欢跟家人一起去大超市[and many people like going to a big supermarket with their family]。",
    "g": "钱",
    "p": ["It depends, but usually…", "The main reason is that…", "keep the costs down", "there's a lot more choice now", "For example,…", "That's why…"]
  },
  "new-successful-businessperson||What makes a business successful?": {
    "a": "我觉得最重要的是听顾客的意见（listen to what customers say）。主要是因为（mainly because…）顾客满意以后他们会再来，而且他们会带朋友一起来[customers will come back if they are happy, and they will bring their friends]。比如（For example,…）很多小饭馆的老板会问客人菜好不好吃，他们也记得住老顾客的名字[and they remember the names of their regular customers]。所以（As a result,…）这些店一直有很多客人[these restaurants always have a lot of customers]。而且这些店也能赚到更多的钱[and these restaurants can also make more money]。",
    "g": "关系",
    "p": ["listen to what customers say", "mainly because…", "For example,…", "As a result,…"]
  },
  "new-successful-businessperson||What makes a business fail?": {
    "a": "我觉得很多店关门是因为钱的问题[I think a lot of shops close because of money problems]。最主要的原因是（The main reason is that…）房租和工资都很贵，所以老板很难减少成本（keep the costs down）。比如（For example,…）有些小饭馆的东西卖得很贵，所以客人只去一次，然后他们不再回来[so customers only go once, and then they do not come back]。所以（As a result,…）如果老板不听顾客的意见（listen to what customers say），他的生意就做不好[his business will not do well]。",
    "g": "钱",
    "p": ["The main reason is that…", "keep the costs down", "For example,…", "As a result,…", "listen to what customers say"]
  },
  "new-successful-businessperson||Is it easy to set up a new business in your country?": {
    "a": "我觉得不太容易（Not really.）。主要是因为（mainly because…）房租很贵，而且请人也要花很多钱[the rent is very high, and hiring people also costs a lot of money]，所以新老板很难减少成本（keep the costs down）。比如（For example,…）很多年轻人想开一家小店，但是他们看到房租以后就放弃了[a lot of young people want to open a small shop, but they give up when they see the rent]。所以（As a result,…）他们中的大部分人没有开自己的店（run my own business）。而且他们的家人也不支持他们[and their families do not support them either]。",
    "g": "钱",
    "p": ["Not really.", "mainly because…", "keep the costs down", "For example,…", "As a result,…", "run my own business"]
  },
  "new-successful-company-worker||Do you think governments should provide financial support to companies?": {
    "a": "我觉得政府应该帮助公司（the government should support…）。主要是因为（mainly because…）小公司赚钱不多[small companies do not make much money]，它们很难减少成本（keep the costs down）。比如（For example,…）很多小店拿到了政府的补贴，所以它们没有关门[a lot of small shops got money from the government, so they did not close down]。所以（As a result,…）店里的员工也保住了稳定的收入（a stable income）。而且他们的家人也不用担心[and their families do not need to worry either]。",
    "g": "钱",
    "p": ["the government should support…", "mainly because…", "keep the costs down", "For example,…", "As a result,…", "a stable income"]
  },
  "new-successful-company-worker||Do you think companies should donate money to help society?": {
    "a": "我觉得公司应该捐钱（Yes, definitely.）。最主要的原因是（The main reason is that…）公司捐一点钱就能帮助别人（make a difference to other people），因为很多人真的需要这些帮助[because a lot of people really need this help]。比如（For example,…）很多大公司给山区的学校捐书和电脑[a lot of big companies give books and computers to schools in poor areas]，然后这些孩子就有课本用了[and then these children have books to use]。所以（That's why…）每家公司出一点钱，这些小事加起来就能帮很多人（small changes add up）。而且大家也会更喜欢这样的公司[and people will like these companies more]。",
    "g": "关系",
    "p": ["Yes, definitely.", "The main reason is that…", "make a difference to other people", "For example,…", "That's why…", "small changes add up"]
  },
  "new-successful-company-worker||Do you think customer satisfaction is important for a company?": {
    "a": "我觉得这件事很重要（Yes, definitely.）。主要是因为（mainly because…）顾客满意以后他们会再来，所以公司要听顾客的意见（listen to what customers say）。比如（For example,…）很多奶茶店的店员会问客人要不要少放糖[a lot of milk tea shop staff ask customers if they want less sugar]，然后客人会把这家店推荐给朋友[and then customers recommend this shop to their friends]。所以（That's why…）这些店有很多老顾客[these shops have a lot of regular customers]。而且这些店每个月也能多赚一些钱[and these shops also make more money every month]。",
    "g": "关系",
    "p": ["Yes, definitely.", "mainly because…", "listen to what customers say", "For example,…", "That's why…"]
  },
  "new-medical-career||Do you think being a doctor is easy or difficult?": {
    "a": "我觉得当医生很难[I think it is hard to be a doctor]。最主要的原因是（The main reason is that…）医生每天要照顾病人的生命，所以他们的压力很大[doctors look after people's lives every day, so they are under a lot of pressure]，这也是很大的责任（it's a big responsibility）。比如（For example,…）很多医生每天工作十几个小时，他们下班的时候非常累[a lot of doctors work more than ten hours a day, and they are very tired when they finish work]。所以（That's why…）我觉得这份工作不轻松，但是医生也很有成就感（a real sense of achievement）。而且医生的收入比很多工作高[and doctors earn more money than people in many other jobs]。",
    "g": "情绪",
    "p": ["The main reason is that…", "it's a big responsibility", "For example,…", "That's why…", "a real sense of achievement"]
  },
  "new-medical-career||Do you think learning biology is interesting for children?": {
    "a": "我觉得孩子会喜欢生物课（Yes, definitely.）。主要是因为（mainly because…）这门课讲小动物和植物，所以孩子觉得很有意思[so children think it is very interesting]，而且老师讲的东西也很好懂（easy to follow）。比如（For example,…）很多小学生在家种一颗豆子，他们看到豆子长出来的时候很开心[they are very happy when they see the bean come up]。所以（That's why…）我觉得孩子都喜欢这样的课[I think children like this kind of lesson]。而且他们可以跟同学一起做这件事[and they can do it together with their classmates]。",
    "g": "情绪",
    "p": ["Yes, definitely.", "mainly because…", "easy to follow", "For example,…", "That's why…"]
  },
  "new-medical-career||Why do you some children want to become doctors?": {
    "a": "我觉得有些孩子想当医生，因为他们想帮助别人[I think some children want to be doctors, because they want to help other people]。最主要的原因是（The main reason is that…）孩子觉得医生可以真的帮到别人（make a difference to other people）。比如（For example,…）很多孩子生病的时候看过医生，医生很耐心地照顾他们[the doctors looked after them very kindly]，几天以后他们就好了[and they got better a few days later]。所以（That's why…）这些孩子从那以后就想当医生，因为这份工作教他们关心别人（it teaches you to think about others）。而且当医生的收入也不错[and doctors also earn quite good money]。",
    "g": "关系",
    "p": ["The main reason is that…", "make a difference to other people", "For example,…", "That's why…", "it teaches you to think about others"]
  },
  "new-medical-career||Do you think governments should put a large amount of money into medical research?": {
    "a": "我觉得政府应该在这方面多花钱（the government should support…）。最主要的原因是（The main reason is that…）现在医生还治不好很多病[doctors still cannot cure many illnesses]，所以新药可以帮到很多人（make a difference to other people）。比如（For example,…）以前科学家研究出了疫苗，这些疫苗救了很多人的命[scientists made vaccines in the past, and these vaccines saved a lot of lives]。所以（That's why…）我觉得这些钱花得值[I think this money is well spent]。而且新药也可以帮每个家庭省下医药费[and new medicine can also save every family money]。",
    "g": "关系",
    "p": ["the government should support…", "The main reason is that…", "make a difference to other people", "For example,…", "That's why…"]
  },
  "new-childhood-friend||Do you still keep in touch with your friends from childhood? Why or why not?": {
    "a": "是的（Yes, definitely.），我和小时候的朋友还有联系。主要是因为（mainly because…）我们一起长大[we grew up together]，所以他们给我发消息的时候，我会尽快回复（get back to… as soon as I can）。比如（For example,…）现在很多人和老朋友一起出去吃饭（eat out with friends），他们一个月见一次[they meet once a month]。所以（That's why…）我们的关系一直很好[we still have a good friendship]。而且我们见面以后都很开心[and we are all very happy after we meet]。",
    "g": "关系",
    "p": ["Yes, definitely.", "mainly because…", "get back to… as soon as I can", "For example,…", "eat out with friends", "That's why…"]
  },
  "new-childhood-friend||How important is childhood friendship to children?": {
    "a": "我觉得小时候的朋友很重要。最主要的原因是（The main reason is that…）孩子和朋友一起玩的时候，他们学会关心别人（it teaches you to think about others）。比如（For example,…）很多小孩子有好吃的东西，他们会分给自己的朋友一半[a lot of small children share their snacks with their friends]。所以（That's why…）我觉得每个孩子都需要几个好朋友[I think every child needs a few good friends]。而且孩子和朋友在一起的时候很开心[and children are very happy when they are with their friends]。",
    "g": "关系",
    "p": ["The main reason is that…", "it teaches you to think about others", "For example,…", "That's why…"]
  },
  "new-childhood-friend||What do you think of communicating via social media?": {
    "a": "我觉得这件事有好的一面，也有不好的一面（it has both good and bad sides）。主要是因为（mainly because…）发消息很方便，但是每个人有时候都很忙（everyone gets busy sometimes），所以他们回消息很慢[so they reply very slowly]。比如（For example,…）很多人给朋友发消息，可是他们的朋友第二天才回复[but their friends only reply the next day]。所以（That's why…）如果我有急事，我会直接打电话[if something is urgent, I will call them]。而且我等回复的时候也会有点着急[and I also feel a bit worried when I wait for a reply]。",
    "g": "关系",
    "p": ["it has both good and bad sides", "mainly because…", "everyone gets busy sometimes", "For example,…", "That's why…"]
  },
  "new-childhood-friend||Do you think online communication through social media will replace face-to-face communication?": {
    "a": "我觉得网上聊天不能代替见面（Not really.）。最主要的原因是（The main reason is that…）发消息帮我省了很多时间（it saves me a lot of time, but…），但是我看不出对方的语气[I cannot tell how the other person feels]。比如（For example,…）很多人周末和朋友一起出去吃饭（eat out with friends），他们可以聊两三个小时[they can talk for two or three hours]。所以（That's why…）我觉得见面还是最好的方式。而且我们见面的时候更开心[and we are happier when we meet face to face]。",
    "g": "关系",
    "p": ["Not really.", "The main reason is that…", "it saves me a lot of time, but…", "For example,…", "eat out with friends", "That's why…"]
  },
  "new-childhood-friend||What's the difference between having younger friends and older friends?": {
    "a": "我觉得区别是我们聊的话题不一样[I think the difference is that we talk about different topics]。最主要的原因是（The main reason is that…）年纪大的朋友经历多[older friends have more experience]，所以我有问题的时候会找他们帮忙（turn to… for help）。比如（For example,…）很多年轻人和同龄的朋友一起打球，他们和年长的同事聊工作[a lot of young people play ball games with friends of the same age, and they talk about work with older colleagues]。所以（That's why…）我想交这两种朋友，因为我可以听到不同的想法（keep an open mind）。而且我和同龄的朋友在一起更放松[and I feel more relaxed when I am with friends of my own age]。",
    "g": "关系",
    "p": ["The main reason is that…", "turn to… for help", "For example,…", "That's why…", "keep an open mind"]
  },
  "new-childhood-friend||Has technology changed people's friendships? How?": {
    "a": "我觉得变化很大（Yes, definitely.）。主要是因为（mainly because…）发消息帮我们省了很多时间（it saves me a lot of time, but…），但是我们见面的次数变少了[but we meet each other less often]。比如（For example,…）很多人和朋友一起出去吃饭（eat out with friends），可是他们坐下以后一直看手机[but they look at their phones after they sit down]。所以（As a result,…）我们联系更方便了，可是我们的感情不一定更好[our friendships are not always closer]。而且很多人看手机的时候会觉得有点孤单[and many people feel a bit lonely when they look at their phones]。",
    "g": "关系",
    "p": ["Yes, definitely.", "mainly because…", "it saves me a lot of time, but…", "For example,…", "eat out with friends", "As a result,…"]
  },
  "new-home-gardener||What are the advantages of growing vegetables or flowers at home?": {
    "a": "我觉得最大的好处是我们可以放松（relax after a long day）。最主要的原因是（The main reason is that…）我们浇水的时候不用想别的事[we do not need to think about anything else when we water the plants]，所以这可以让我忘掉工作（it helps me forget about…）。比如（For example,…）很多人下班以后给阳台上的小番茄浇水，他们浇完以后觉得很放松[they feel very relaxed after they finish]。所以（That's why…）我觉得在家种点东西很好。而且他们也可以省下买菜的钱[and they can also save the money they spend on vegetables]。",
    "g": "情绪",
    "p": ["relax after a long day", "The main reason is that…", "it helps me forget about…", "For example,…", "That's why…"]
  },
  "new-home-gardener||Do many people grow vegetables or flowers at home in your country?": {
    "a": "是的（Yes, definitely.），我们这里很多人在家种花和种菜。主要是因为（mainly because…）这件事不用花很多钱，所以他们可以减少开销（keep the costs down）。比如（For example,…）很多老人在阳台上种小葱和青菜，所以他们买菜的时候可以少花一点钱[so they spend less money when they buy food]。所以（As a result,…）这几年种花种菜的人变多了[more and more people grow plants at home now]。而且他们照顾这些植物的时候也很开心[and they are also very happy when they look after these plants]。",
    "g": "钱",
    "p": ["Yes, definitely.", "mainly because…", "keep the costs down", "For example,…", "As a result,…"]
  },
  "new-home-gardener||Is it easy to grow plants at home?": {
    "a": "这个看情况（It depends, but usually…），不过常见的花草不难养[common plants are not hard to grow]。主要是因为（mainly because…）这些花草很便宜，所以人们不用花很多钱[these plants are very cheap, so people do not need to spend much money]，而且网上的教程也很好懂（easy to follow）。比如（For example,…）很多人在花市花十块钱买一盆绿萝，然后他们养了两三年[a lot of people buy a plant for ten yuan at the flower market, and then they keep it for two or three years]。所以（That's why…）我觉得在家种花很容易。而且他们看到植物长大的时候很开心[and they are very happy when they see the plants grow]。",
    "g": "钱",
    "p": ["It depends, but usually…", "mainly because…", "easy to follow", "For example,…", "That's why…"]
  },
  "new-home-gardener||Why do some people like to grow plants?": {
    "a": "我觉得很多人种花是想放松（relax after a long day）。最主要的原因是（The main reason is that…）他们上班很累[they get very tired at work]，他们照顾植物的时候可以呼吸新鲜空气（get some fresh air）。比如（For example,…）很多人回家以后先给阳台上的花浇水，然后他们觉得舒服多了[and then they feel much better]。所以（That's why…）现在喜欢种花的人很多。而且他们也可以省一点买菜的钱[and they can also save a little money on vegetables]。",
    "g": "情绪",
    "p": ["relax after a long day", "The main reason is that…", "get some fresh air", "For example,…", "That's why…"]
  },
  "new-home-gardener||Why do some people prefer to grow their own fruits and vegetables instead of buying them from the market?": {
    "a": "我觉得很多人想省钱[I think a lot of people want to save money]。最主要的原因是（The main reason is that…）他们自己种菜不用花很多钱，所以他们可以减少开销（keep the costs down）。比如（For example,…）很多家庭在阳台上种西红柿，所以他们一个夏天都不用买西红柿[so they do not need to buy tomatoes for the whole summer]。所以（That's why…）有阳台的人都想自己种。而且他们吃自己种的菜很有成就感（a real sense of achievement）。",
    "g": "钱",
    "p": ["The main reason is that…", "keep the costs down", "For example,…", "That's why…", "a real sense of achievement"]
  },
  "new-home-gardener||Do you think students should learn to grow plant?": {
    "a": "我觉得学生应该学着种植物（Yes, definitely.），因为这也是一种责任（it's a big responsibility）。主要是因为（mainly because…）植物需要每天浇水，所以学生照顾植物的时候会学着关心别人（it teaches you to think about others）。比如（For example,…）很多学校在教室门口放几盆花，学生每天轮流浇水[students take turns to water them every day]，他们也一起决定谁管哪一盆[and they decide together who looks after which plant]。所以（That's why…）我觉得学校可以多做这样的活动[I think schools can do more activities like this]。而且学生照顾植物的时候也很放松[and students feel relaxed when they look after plants]。",
    "g": "关系",
    "p": ["Yes, definitely.", "it's a big responsibility", "mainly because…", "it teaches you to think about others", "For example,…", "That's why…"]
  },
  "new-success-after-difficulty||In your country, what industry is it easier to be successful in?": {
    "a": "我觉得和手机有关的行业更容易成功[I think it is easier to succeed in jobs about mobile phones]。最主要的原因是（The main reason is that…）大家买东西和看视频都用手机[everyone uses a phone to shop and to watch videos]，所以这个行业有更多的工作机会（many more job opportunities）。比如（For example,…）现在很多年轻人做短视频，他们每个月有稳定的收入（a stable income）。所以（That's why…）很多年轻人想做这一行。而且他们的家人也支持他们[and their families support them too]。",
    "g": "钱",
    "p": ["The main reason is that…", "many more job opportunities", "For example,…", "a stable income", "That's why…"]
  },
  "new-success-after-difficulty||What's the difference between ordinary people and successful people?": {
    "a": "我觉得区别是能不能坚持[I think the difference is whether they can keep going]。最主要的原因是（The main reason is that…）成功的人先给自己定一个清楚的目标（set myself a clear goal），然后他们分解这个目标（break it down into small steps）。比如（For example,…）很多学生准备考试，他们每天只背五十个单词[they learn only fifty new words every day]，一年以后他们通过了考试[and they passed the exam one year later]。所以（As a result,…）能坚持的人可以看到真的进步（see real progress）。而且他们后来也更容易赚到钱[and they also find it easier to make money later]。",
    "g": "目标",
    "p": ["The main reason is that…", "set myself a clear goal", "break it down into small steps", "For example,…", "As a result,…", "see real progress"]
  },
  "new-success-after-difficulty||What are the factors leading to people's success?": {
    "a": "我觉得最重要的是有目标，而且我们要坚持[I think the most important things are a goal and hard work]。主要是因为（mainly because…）如果我们定了一个清楚的目标（set myself a clear goal），我们每天就知道该做什么[then we know what to do every day]。比如（For example,…）很多学生每天固定学习两个小时（stick to a routine）。所以（As a result,…）一个月以后他们可以看到真的进步（see real progress）。而且身边有人支持也很重要[and support from the people around them is also important]。",
    "g": "目标",
    "p": ["mainly because…", "set myself a clear goal", "For example,…", "stick to a routine", "As a result,…", "see real progress"]
  },
  "new-long-term-goal||What goals should a society have?": {
    "a": "我觉得社会应该让大家生活得安心[I think a society should help people feel safe]。最主要的原因是（The main reason is that…）普通人最在乎工作和收入[ordinary people care most about their jobs and their money]，他们也想要稳定的收入（a stable income）。比如（For example,…）我们这里这两年开了很多新公司，这些公司给了大家更多的工作机会（many more job opportunities）。所以（That's why…）我觉得政府应该先做好这件事。而且社会也应该让大家过得开心[and a society should also help people live happily]。",
    "g": "钱",
    "p": ["The main reason is that…", "a stable income", "For example,…", "many more job opportunities", "That's why…"]
  },
  "new-long-term-goal||Do people need to have goals?": {
    "a": "是的（Yes, definitely.），我觉得每个人都需要目标[I think everyone needs a goal]。主要是因为（mainly because…）如果我们定了一个清楚的目标（set myself a clear goal），我们每天就知道该做什么[then we know what to do every day]。比如（For example,…）很多学生考试以前每天早上背单词，他们从来不间断（stick to a routine）。所以他们一个月以后就能看到真的进步（see real progress）。而且有目标的人也更容易找到好工作[and people with a goal also find it easier to get a good job]。",
    "g": "目标",
    "p": ["Yes, definitely.", "mainly because…", "set myself a clear goal", "For example,…", "stick to a routine", "see real progress"]
  },
  "new-long-term-goal||What goals do people at your age have?": {
    "a": "我这个年纪的人最想要稳定的收入（a stable income）。主要是因为（mainly because…）我们要自己付房租和饭钱[we have to pay the rent and buy our own food]，而且养家也是很大的责任（it's a big responsibility）。比如（For example,…）现在很多年轻人在找可以长期做的工作，因为这样的工作每个月都发工资[because this kind of job pays them every month]。所以（That's why…）我觉得大家的目标都差不多。而且我们也想有时间陪家人[and we also want time to spend with our family]。",
    "g": "钱",
    "p": ["a stable income", "mainly because…", "it's a big responsibility", "For example,…", "That's why…"]
  },
  "new-long-term-goal||Is it necessary to give advice to children?": {
    "a": "我觉得有必要（Yes, definitely.）。最主要的原因是（The main reason is that…）孩子的经历少[children do not have much experience]，所以他们遇到困难的时候会找大人帮忙（turn to… for help）。比如（For example,…）学生选学校的时候，他们的父母可以讲讲自己的经历[their parents can talk about their own experience]。所以（That's why…）父母应该给孩子建议，但是他们也要听孩子的想法（keep an open mind）。而且孩子听了建议以后没有那么紧张[and children feel less nervous after they listen to the advice]。",
    "g": "关系",
    "p": ["Yes, definitely.", "The main reason is that…", "turn to… for help", "For example,…", "That's why…", "keep an open mind"]
  },
  "new-long-term-goal||What goals do young people usually have?": {
    "a": "我觉得年轻人最想做好自己的工作[I think young people mainly want to do well at work]。主要是因为（mainly because…）他们刚毕业的时候有很多工作机会（many more job opportunities），所以他们想找一份工资高的工作[so they want to find a job with a good salary]。比如（For example,…）现在很多大学生想进大公司，因为大公司给的工资更高[because big companies pay more money]，还有一些人想自己开店（run my own business）。所以（That's why…）他们的目标大多和钱有关。而且他们也想让父母放心[and they also want their parents to stop worrying]。",
    "g": "钱",
    "p": ["mainly because…", "many more job opportunities", "For example,…", "run my own business", "That's why…"]
  },
  "new-long-term-goal||What should people do to achieve their goals?": {
    "a": "我觉得最重要的是分解大目标（break it down into small steps）。最主要的原因是（The main reason is that…）目标太大的时候很多人会害怕[a lot of people feel scared when the goal is too big]，但是如果他们每天做一点，这件事就不难[but if they do a little every day, it is not hard]。比如（For example,…）很多学生每天早上背二十个单词，他们每天都这样做（stick to a routine）。所以他们半年以后可以看到真的进步（see real progress）。而且他们可以找朋友一起做这件事[and they can do it together with a friend]。",
    "g": "目标",
    "p": ["break it down into small steps", "The main reason is that…", "For example,…", "stick to a routine", "see real progress"]
  },
  "new-long-held-ambition||What kinds of ambitions do people have?": {
    "a": "我觉得志向有两种，一种是为了工作，另一种是为了生活[I think there are two kinds of ambition, one is for work and the other is for life]。最主要的原因是（The main reason is that…）大部分人先想找一份好工作，因为他们想要稳定的收入（a stable income）。比如（For example,…）现在很多年轻人想开一家小咖啡店（run my own business），因为他们想赚更多的钱[because they want to make more money]。所以（That's why…）大家的想法不一样，但是他们都想过好一点的生活[they all want a better life]。而且有些人的志向是多陪家人[and some people's ambition is to spend more time with their family]。",
    "g": "钱",
    "p": ["The main reason is that…", "a stable income", "For example,…", "run my own business", "That's why…"]
  },
  "new-long-held-ambition||What's the importance of having ambition?": {
    "a": "我觉得有志向很重要[I think it is important to have an ambition]。最主要的原因是（The main reason is that…）有志向的人会给自己定一个清楚的目标（set myself a clear goal），所以他们每天都知道该做什么[so they know what to do every day]。比如（For example,…）很多年轻人想去国外读书，所以他们每天都学英语[a lot of young people want to study abroad, so they study English every day]。所以（That's why…）有志向的人可以坚持很久，他们也更容易看到真的进步（see real progress）。而且他们做事的时候更开心[and they are happier when they work]。",
    "g": "目标",
    "p": ["The main reason is that…", "set myself a clear goal", "For example,…", "That's why…", "see real progress"]
  },
  "new-long-held-ambition||What are the advantages of feeling ambitious towards your work?": {
    "a": "我觉得对工作有志向有很多好处[I think there are a lot of advantages if you are ambitious at work]。主要是因为（mainly because…）这样的人愿意多做一点，所以他们做完以后很有成就感（a real sense of achievement）。比如（For example,…）很多员工接了很难的工作，他们忙了三个月，但是他们最后很开心[a lot of workers take a hard job, and they are busy for three months, but they are happy in the end]。所以（As a result,…）他们后来有更多的工作机会（many more job opportunities）。而且他们的同事也更喜欢和他们一起工作[and their colleagues also like working with them more]。",
    "g": "情绪",
    "p": ["mainly because…", "a real sense of achievement", "For example,…", "As a result,…", "many more job opportunities"]
  },
  "new-long-held-ambition||Do you think children should have ambitions?": {
    "a": "我觉得孩子应该有自己的志向（Yes, definitely.）。最主要的原因是（The main reason is that…）如果孩子从小定一个清楚的目标（set myself a clear goal），他们长大以后做事更有方向[they will know what they want when they grow up]。比如（For example,…）很多小学生想学好英语，所以他们每天早上都读课文[a lot of primary school students want to learn English well, so they read their textbook every morning]。所以（That's why…）我觉得这是好事，父母也可以帮孩子分解目标（break it down into small steps）。而且孩子做到的时候会很开心[and children are very happy when they do it]。",
    "g": "目标",
    "p": ["Yes, definitely.", "The main reason is that…", "set myself a clear goal", "For example,…", "That's why…", "break it down into small steps"]
  },
  "new-long-held-ambition||Why should parents encourage children to have ambitions?": {
    "a": "我觉得父母的鼓励对孩子很重要[I think support from parents is very important for children]。主要是因为（mainly because…）孩子还小，所以他们遇到问题的时候会先找父母帮忙（turn to… for help）。比如（For example,…）很多孩子想学画画，他们的父母每个星期送他们去上课[a lot of children want to learn drawing, and their parents take them to a class every week]。所以（As a result,…）有人支持的孩子可以坚持更久，他们也能看到真的进步（see real progress）。而且孩子知道父母支持他们的时候会很开心[and children are very happy when they know their parents support them]。",
    "g": "关系",
    "p": ["mainly because…", "turn to… for help", "For example,…", "As a result,…", "see real progress"]
  },
  "new-long-held-ambition||Do you think parents should stop children from thinking too big?": {
    "a": "我觉得父母不应该直接拦着孩子（Not really.）。最主要的原因是（The main reason is that…）孩子有大的梦想不是坏事[it is not a bad thing if children have big dreams]，父母可以帮他们分解目标（break it down into small steps）。比如（For example,…）如果孩子说他想当科学家，他的父母可以先让他学好这学期的数学[his parents can ask him to do well in maths this term]。所以（That's why…）父母不用马上说这件事不可能，因为孩子慢慢做也能看到真的进步（see real progress）。而且父母鼓励孩子的时候，孩子会更开心[and children are happier when their parents encourage them]。",
    "g": "目标",
    "p": ["Not really.", "The main reason is that…", "break it down into small steps", "For example,…", "That's why…", "see real progress"]
  },
  "new-environmental-law-story||What kinds of rules do schools in China have?": {
    "a": "中国的学校有很多规定，学生都要遵守这些规定（stick to the rules）。最主要的原因是（The main reason is that…）学校里的人很多[there are a lot of people in a school]，所以规定可以保证大家的安全（keep people safe）。比如（For example,…）很多学校不让学生在教室里用手机，也不让他们在楼道里跑[a lot of schools do not let students use their phones in the classroom, and they do not let them run in the corridor]。所以（That's why…）我觉得这些规定很有必要。而且学生遵守规定的时候，同学之间也更少吵架[and students argue with each other less when they follow the rules]。",
    "g": "规矩",
    "p": ["stick to the rules", "The main reason is that…", "keep people safe", "For example,…", "That's why…"]
  },
  "new-environmental-law-story||Do you think school rules are important?": {
    "a": "我觉得校规很重要（Yes, definitely.）。主要是因为（mainly because…）如果学校有规定，学生就知道什么可以做[if a school has rules, students know what they can do]，而且学校里也更安全（keep people safe）。比如（For example,…）很多班级有值日表，每个学生管一天，所以教室一直很干净[every student cleans the classroom for one day, so the classroom is always clean]。所以（That's why…）我觉得学校不是随便定这些规矩的[schools do not make these rules for no reason]，每一条都有它的道理（it's there for a reason）。",
    "g": "规矩",
    "p": ["Yes, definitely.", "mainly because…", "keep people safe", "For example,…", "That's why…", "it's there for a reason"]
  },
  "new-environmental-law-story||Are children unhappy with the school rules?": {
    "a": "这个看情况（It depends, but usually…），不过大部分孩子一开始会不高兴。主要是因为（mainly because…）学校不让他们用手机，所以他们觉得很不开心[so they feel very unhappy]，他们也觉得自己不自由[and they feel they are not free]。比如（For example,…）很多初中生刚入学的时候天天抱怨，可是过一段时间他们就习惯了[a lot of students complain when they start middle school, but they get used to it after a while]。所以（That's why…）他们长大以后就明白了，因为学校的规定都有原因（it's there for a reason）。而且他们看到同学都遵守规定，所以他们也不生气了[and they see their classmates follow the rules too, so they are not angry any more]。",
    "g": "情绪",
    "p": ["It depends, but usually…", "mainly because…", "For example,…", "That's why…", "it's there for a reason"]
  },
  "new-environmental-law-story||What are the rules people should obey at work?": {
    "a": "我觉得上班最重要的是守时，而且每个人要负责自己的那部分（be responsible for one part of…）。最主要的原因是（The main reason is that…）公司定这些规定都有原因（it's there for a reason），所以我们照着做，事情会更顺利[so things go more smoothly if we follow them]。比如（For example,…）很多团队开始工作以前先说清楚谁管哪一块[a lot of teams decide who does which part before they start]，每个人做自己擅长的事（each do what we're good at）。所以这样比一个人做快很多（it's much faster than working alone）。",
    "g": "规矩",
    "p": ["be responsible for one part of…", "The main reason is that…", "it's there for a reason", "For example,…", "each do what we're good at", "it's much faster than working alone"]
  },
  "new-environmental-law-story||What is the purpose of punishment?": {
    "a": "我觉得惩罚是为了让人记住自己的错误[I think punishment helps people remember their mistakes]。最主要的原因是（The main reason is that…）如果没有惩罚，很多人不会认真遵守规定（stick to the rules）。比如（For example,…）司机闯红灯以后要交罚款，所以大家都会等绿灯[drivers have to pay a fine if they run a red light, so everyone waits for the green light]。所以（As a result,…）马路上和学校里都更安全（keep people safe）。而且大家也不用担心自己的家人[and people do not need to worry about their families]。",
    "g": "规矩",
    "p": ["The main reason is that…", "stick to the rules", "For example,…", "As a result,…", "keep people safe"]
  },
  "new-environmental-law-story||How can parents and teachers help children understand and follow rules?": {
    "a": "我觉得父母应该先给孩子讲清楚道理[explain the reason first]。主要是因为（mainly because…）孩子理解了这个原因以后，他们就愿意去做，而且他们知道每条规矩都有原因（it's there for a reason）。比如（For example,…）大部分父母会告诉孩子，为什么他们不可以在马路上跑[why they cannot run on the road]。所以（That's why…）我觉得大人应该先自己做到[adults should follow the rules first]，然后孩子会慢慢守规矩（stick to the rules）。",
    "g": "规矩",
    "p": ["mainly because…", "it's there for a reason", "For example,…", "That's why…", "stick to the rules"]
  },
  "new-animal-story||Should schools teach children about animals?": {
    "a": "我觉得学校应该教孩子一些动物的知识（Yes, definitely.）。主要是因为（mainly because…）这样的课教你为别人着想（it teaches you to think about others），孩子会学着关心别的生命[children learn to care about other lives]。比如（For example,…）很多小学老师让学生一起照顾班里的小动物[look after a small animal together in class]，然后学生学会了跟别人合作[students learn to work with other people]。所以（That's why…）我觉得学校应该开这样的课，而且孩子上这种课的时候很开心[children are happy in this kind of lesson]。",
    "g": "关系",
    "p": ["Yes, definitely.", "mainly because…", "it teaches you to think about others", "For example,…", "That's why…"]
  },
  "new-animal-story||Some people think pets should not be kept in cities. What do you think?": {
    "a": "我不太同意这个说法（Not really.）。主要是因为（mainly because…）宠物给主人很多陪伴[a pet gives the owner a lot of company]，而且养宠物是很大的责任（it's a big responsibility）。比如（For example,…）我们这里很多老人一个人住，他们的猫每天陪着他们[their cat keeps them company every day]。所以（That's why…）我觉得城里的人可以养宠物，很多人把宠物当成家里人（treat them as part of the family）。",
    "g": "关系",
    "p": ["Not really.", "mainly because…", "it's a big responsibility", "For example,…", "That's why…", "treat them as part of the family"]
  },
  "new-animal-story||Many people regard pets as members of their family. What do you think?": {
    "a": "我同意，很多人把宠物当成家里人（treat them as part of the family）。主要是因为（mainly because…）他们每天喂宠物，也每天带宠物出门，所以他们对宠物有感情[they have a strong feeling for the pet]。比如（For example,…）我们这里很多人晚饭以后带狗出去走走（go for a walk after dinner），一家人一起走[the whole family walks together]。所以（That's why…）我觉得叫宠物家人很正常[it is normal to call a pet a family member]。而且宠物让家里人心情很好[the pet makes the family feel good]。",
    "g": "关系",
    "p": ["treat them as part of the family", "mainly because…", "For example,…", "go for a walk after dinner", "That's why…"]
  },
  "new-animal-story||Do many people keep pets in your country?": {
    "a": "是的，我们国家养宠物的人很多（Yes, definitely.）。主要是因为（mainly because…）现在很多人一个人住[a lot of people live alone now]，他们回到家以后可以跟宠物一起放松（relax after a long day）。比如（For example,…）很多年轻人下班以后觉得很累，但是他们看到自己的狗就很开心[they feel happy when they see their dog]。所以（That's why…）我觉得现在养宠物很普遍[keeping pets is very common now]。而且宠物让很多人不觉得孤单[pets stop many people feeling lonely]。",
    "g": "情绪",
    "p": ["Yes, definitely.", "mainly because…", "relax after a long day", "For example,…", "That's why…"]
  },
  "new-animal-story||What are the advantages of keeping a pet?": {
    "a": "我觉得最大的好处是宠物让人放松（relax after a long day）。主要是因为（mainly because…）很多人白天工作压力很大[they have a lot of stress at work]，他们回家以后需要一个东西陪着他们[they need something to keep them company]。比如（For example,…）很多人下班以后摸摸自己的猫，然后他们心情马上好一点。所以（That's why…）我觉得养宠物对心情很有帮助[it really helps your mood]。而且养宠物也教你为别人着想（it teaches you to think about others）。",
    "g": "情绪",
    "p": ["relax after a long day", "mainly because…", "For example,…", "That's why…", "it teaches you to think about others"]
  },
  "new-animal-story||Why do people always tell children stories with animals?": {
    "a": "我觉得动物的故事对孩子来说很好懂（easy to follow）。主要是因为（mainly because…）孩子觉得大道理很无聊[children find big ideas boring]，但是他们很喜欢听小动物的故事。比如（For example,…）大部分父母会给孩子讲兔子和乌龟的故事[the story about the rabbit and the turtle]，然后孩子听得很开心[the children really enjoy it]。所以（That's why…）孩子更愿意听这样的故事。而且这样的故事教孩子为别人着想（it teaches you to think about others）。",
    "g": "情绪",
    "p": ["easy to follow", "mainly because…", "For example,…", "That's why…", "it teaches you to think about others"]
  },
  "new-ai-problem||What are the advantages and disadvantages of AI?": {
    "a": "我觉得 AI 有好的一面，也有不好的一面（it has both good and bad sides）。最主要的原因是（The main reason is that…）AI 可以帮公司省钱（keep the costs down），但是公司花在 AI 上的钱也不少[companies also pay a lot for AI]。比如（For example,…）现在很多公司用 AI 写广告[many companies use AI to write their adverts]，然后他们一年省下很多钱[they save a lot of money in a year]。所以（As a result,…）我会用 AI，但是我不会相信我看到的每一句话（I don't believe everything I read）。",
    "g": "钱",
    "p": ["it has both good and bad sides", "The main reason is that…", "keep the costs down", "For example,…", "As a result,…", "I don't believe everything I read"]
  },
  "new-ai-problem||Do you think people today should learn about AI technology?": {
    "a": "我觉得现在的人应该学一学 AI（Yes, definitely.）。最主要的原因是（The main reason is that…）会用 AI 的人有多得多的工作机会（many more job opportunities）。比如（For example,…）现在很多公司只招会用这些新工具的人[companies only hire people who can use these new tools]，而且他们给这样的员工更高的工资[they pay these workers more]。所以（As a result,…）我觉得我们应该早一点学会 AI，然后我们找工作会容易一点[it will be easier for us to find a job]。",
    "g": "钱",
    "p": ["Yes, definitely.", "The main reason is that…", "many more job opportunities", "For example,…", "As a result,…"]
  },
  "new-ai-problem||Should children learn to use AI?": {
    "a": "这个要看情况（It depends, but usually…），我觉得孩子可以学，但是大人要在旁边看着。主要是因为（mainly because…）孩子自己控制不了时间[children cannot control their own time]，所以父母要在旁边帮他们[parents need to help them]。比如（For example,…）很多父母跟孩子一起用 AI 查东西[parents look things up with their children]，然后他们一起看这个答案对不对[they check the answer together]。所以（That's why…）我觉得孩子可以学 AI，但是大人要陪着他们，而且孩子应该少用一点（cut down on…）。",
    "g": "关系",
    "p": ["It depends, but usually…", "mainly because…", "cut down on…", "For example,…", "That's why…"]
  },
  "new-ai-problem||How can AI help in our lives?": {
    "a": "我觉得 AI 最有用的地方是它帮我们省钱[it saves us money]。最主要的原因是（The main reason is that…）以前我们要花钱请别人做事，但是现在 AI 几秒钟就做完了[AI finishes it in a few seconds]，这样我们可以省钱（keep the costs down）。比如（For example,…）现在很多人用 AI 写英文邮件[many people write English emails with AI]，然后他们不用花钱请别人翻译[they do not pay anyone to translate it]。所以（As a result,…）AI 帮我省了很多时间，但是我还会再检查一次答案（it saves me a lot of time, but…）。",
    "g": "钱",
    "p": ["The main reason is that…", "keep the costs down", "For example,…", "As a result,…", "it saves me a lot of time, but…"]
  },
  "new-ai-problem||Do you think students are overly reliant on AI?": {
    "a": "我觉得学生确实用得太多了（Yes, definitely.）。最主要的原因是（The main reason is that…）很多学生离开 AI 以后会很不安[many students feel uneasy without AI]，他们对自己没有信心[they have no confidence in themselves]。比如（For example,…）大部分学生考试的时候不能用手机，然后他们很紧张[then they get very nervous]。所以（As a result,…）我觉得学生应该少用一点（cut down on…），先自己想一想。",
    "g": "情绪",
    "p": ["Yes, definitely.", "The main reason is that…", "For example,…", "As a result,…", "cut down on…"]
  },
  "new-ai-problem||What can teachers do to stop students relying too much on AI?": {
    "a": "我觉得老师可以要求学生少用一点（cut down on…）。最主要的原因是（The main reason is that…）学生跟老师和同学在一起的时候，他们不好意思偷偷用 AI[they feel embarrassed to use AI quietly]。比如（For example,…）很多老师让学生先自己写十分钟，然后大家一起讨论这个题[then everyone discusses the question together]。所以（That's why…）老师可以把作业分成一小步一小步（break it down into small steps），而且老师可以让学生两个人一组做作业[students can work in pairs]。",
    "g": "关系",
    "p": ["cut down on…", "The main reason is that…", "For example,…", "That's why…", "break it down into small steps"]
  },
  "new-celebrity-advertisement||What are the advantages and disadvantages of advertisements?": {
    "a": "我觉得广告有好的一面，也有不好的一面（it has both good and bad sides）。最主要的原因是（The main reason is that…）好的广告告诉你哪里的东西便宜，而且你很容易记住它（you remember it easily）。比如（For example,…）很多人在手机上看到超市打折的广告[an advert about a supermarket sale]，然后第二天他们去这家超市买东西，这样他们省了钱[they save money]。但是有些广告不太老实（some ads are not honest），所以（As a result,…）我看广告的时候会小心一点[I am careful when I watch ads]。",
    "g": "钱",
    "p": ["it has both good and bad sides", "The main reason is that…", "you remember it easily", "For example,…", "some ads are not honest", "As a result,…"]
  },
  "new-celebrity-advertisement||Why are many advertisements endorsed by celebrities? How useful are they?": {
    "a": "我觉得名人出现的时候，广告很容易抓住你的注意力（it catches your attention）。最主要的原因是（The main reason is that…）公司想卖更多东西，而且明星让你很容易记住这个广告（you remember it easily）。比如（For example,…）现在很多年轻人很喜欢一个歌手，然后他们愿意多花钱买他广告里的饮料[they pay more for the drink in his advert]。所以（That's why…）这种广告很有用，公司可以卖出更多东西[the company can sell a lot more]，但是有些广告不太老实（some ads are not honest）。",
    "g": "钱",
    "p": ["it catches your attention", "The main reason is that…", "you remember it easily", "For example,…", "That's why…", "some ads are not honest"]
  },
  "new-celebrity-advertisement||What is the most important factor in an advertisement?": {
    "a": "我觉得最重要的是广告要抓住人的注意力（it catches your attention）。最主要的原因是（The main reason is that…）大家看手机的速度很快，如果广告很无聊，他们马上划走了[they scroll away at once]。比如（For example,…）很多人看到一个很好笑的开头，然后他们会看完整个广告[they watch the whole advert]。所以（That's why…）好的广告让你很容易记住这个牌子（you remember it easily）。而且好的广告可以帮公司卖出更多东西[the company can sell a lot more]。",
    "g": "情绪",
    "p": ["it catches your attention", "The main reason is that…", "For example,…", "That's why…", "you remember it easily"]
  },
  "new-celebrity-advertisement||Why are some advertisements boring?": {
    "a": "我觉得有些广告很无聊。最主要的原因是（The main reason is that…）它们每次都说一样的话[they say the same thing every time]，所以大家看的时候觉得很烦[people feel annoyed]，它们不能抓住你的注意力（it catches your attention）。比如（For example,…）很多人在电视上看到卖保健品的广告，然后他们觉得很烦，他们马上换台[they change the channel at once]。所以（As a result,…）大部分人不喜欢这样的广告，而且有些广告不太老实（some ads are not honest）。",
    "g": "情绪",
    "p": ["it catches your attention", "The main reason is that…", "For example,…", "As a result,…", "some ads are not honest"]
  },
  "new-celebrity-advertisement||Is advertising important for a company? Why?": {
    "a": "我觉得广告对一个公司很重要（Yes, definitely.）。最主要的原因是（The main reason is that…）如果没有人知道这个产品，公司就赚不到钱[the company cannot make money]，而且我一般也在手机上看到新的牌子（I usually see… on my phone）。比如（For example,…）很多人先在手机上看到广告，然后他们去商店买这个东西[then they buy it in the shop]，这样公司就赚到钱了[the company makes money]。所以（That's why…）我觉得公司应该花钱做广告，因为好广告会抓住人的注意力（it catches your attention）。",
    "g": "钱",
    "p": ["Yes, definitely.", "The main reason is that…", "For example,…", "I usually see… on my phone", "That's why…", "it catches your attention"]
  },
  "new-celebrity-advertisement||Which is more effective, online advertising or offline advertising?": {
    "a": "跟路边的大广告牌比（Compared with…），我觉得手机上的广告更有用。最主要的原因是（The main reason is that…）在手机上做广告更便宜，公司可以省钱（keep the costs down），而且看到的人更多。比如（For example,…）现在很多小公司只花很少的钱在手机上做广告[they spend very little money on phone adverts]，然后很多人看到了这些广告[a lot of people see them]。所以（That's why…）我觉得线上广告更好，我一般也在手机上看到广告（I usually see… on my phone）。",
    "g": "钱",
    "p": ["Compared with…", "The main reason is that…", "keep the costs down", "For example,…", "I usually see… on my phone", "That's why…"]
  },
  "new-recent-program||What are the differences between the TV programs young people like to watch and those old people like to watch?": {
    "a": "年轻人喜欢看好笑的节目。老人正好相反（By contrast,…），他们喜欢看慢一点的节目。最主要的原因是（The main reason is that…）年轻人上一天班以后很累，他们只想放松一下（relax after a long day）。比如（For example,…）现在很多年轻人晚上看好笑的短视频，然后他们心情好一点[they feel better]。大部分老人看慢一点的新闻节目，因为这样他们觉得很安心[they feel calm]。所以（That's why…）两代人看的节目很不一样[the two groups watch different programmes]。",
    "g": "情绪",
    "p": ["By contrast,…", "The main reason is that…", "relax after a long day", "For example,…", "That's why…"]
  },
  "new-recent-program||What makes a popular TV or online program?": {
    "a": "我觉得受欢迎的节目要轻松，也要好懂（easy to follow）。最主要的原因是（The main reason is that…）大家打开电视的时候，他们只想放松一下（relax after a long day）。比如（For example,…）现在很多人喜欢看做饭的节目，因为他们看的时候觉得很轻松[they feel relaxed when they watch it]。所以（That's why…）好的节目帮我忘掉工作上的事（it helps me forget about…），这样的节目最容易火[this kind of programme becomes popular easily]。",
    "g": "情绪",
    "p": ["easy to follow", "The main reason is that…", "relax after a long day", "For example,…", "it helps me forget about…", "That's why…"]
  },
  "new-recent-program||What kinds of TV or online programs are popular in your country?": {
    "a": "现在最火的是短视频，我一般在手机上看这些视频（I usually see… on my phone）。最主要的原因是（The main reason is that…）大家上一天班以后很累，他们看短视频的时候觉得很轻松[they feel relaxed when they watch them]，而且这种节目很好懂（easy to follow）。比如（For example,…）很多人坐地铁的时候看几分钟短视频，然后他们心情好一点[they feel better]，下班以后他们也可以放松一下（relax after a long day）。所以（That's why…）我觉得这类节目在我们这里最受欢迎。",
    "g": "情绪",
    "p": ["I usually see… on my phone", "The main reason is that…", "easy to follow", "For example,…", "relax after a long day", "That's why…"]
  },
  "new-special-occasion-food||Why are there special foods on special occasions or events?": {
    "a": "我觉得节日有特别的食物，因为大家想让那一天跟平时不一样[different from other days]。最主要的原因是（The main reason is that…）平时大家在家做点简单的东西（cook something simple at home），但是过节的时候全家想一起吃好一点。比如（For example,…）大部分中国家庭过年的时候做很多菜[they cook a lot of dishes at Chinese New Year]，然后全家人一起吃。所以（That's why…）吃什么不重要，重要的是那份心意（it's the thought that counts）。",
    "g": "关系",
    "p": ["The main reason is that…", "cook something simple at home", "For example,…", "That's why…", "it's the thought that counts"]
  },
  "new-special-occasion-food||What are the differences between everyday food and festival food?": {
    "a": "我觉得平时大家吃得很简单，很多人在家做点简单的东西（cook something simple at home）。最主要的原因是（The main reason is that…）平时大家上班很忙，只有过节的时候他们有时间跟家人坐下来[they have time to sit down with their family]。比如（For example,…）很多上班的人中午跟朋友在外面吃饭（eat out with friends），他们吃得很快。所以（That's why…）区别不在食物，区别在时间[the difference is the time]。",
    "g": "关系",
    "p": ["cook something simple at home", "The main reason is that…", "For example,…", "eat out with friends", "That's why…"]
  },
  "new-special-occasion-food||Are there any differences between the food people eat today and the food people ate in the past?": {
    "a": "跟过去比（Compared with…），我觉得现在的选择多得多（there's a lot more choice now）。最主要的原因是（The main reason is that…）现在超市里什么都有，而且价钱也不贵。比如（For example,…）以前很多家庭冬天只吃白菜和土豆，因为水果太贵了[fruit was too expensive]。但是现在水果很便宜，所以大部分家庭冬天也买得起[they can afford it in winter]。所以（That's why…）我觉得现在的人吃得比以前好很多。",
    "g": "钱",
    "p": ["Compared with…", "there's a lot more choice now", "The main reason is that…", "For example,…", "That's why…"]
  },
  "new-special-occasion-food||Do people today prefer eating at home or in a restaurant?": {
    "a": "这个要看情况（It depends, but usually…），不过我觉得大部分人更喜欢出去吃。最主要的原因是（The main reason is that…）他们下班以后很累，不想做饭，而且他们喜欢跟朋友在外面吃饭（eat out with friends）。比如（For example,…）很多年轻人下班以后跟同事一起去外面吃饭，然后他们一起聊很久[they chat together for a long time]。所以（That's why…）现在很多人不做饭了，以前他们常常在家做点简单的东西（cook something simple at home）。而且在外面吃饭的时候，他们可以跟朋友多聊几句[they can chat more with their friends]。",
    "g": "关系",
    "p": ["It depends, but usually…", "The main reason is that…", "eat out with friends", "For example,…", "That's why…", "cook something simple at home"]
  },
  "new-live-sports-event||Why do some people like to watch sports events?": {
    "a": "很多人喜欢看比赛，因为看比赛的时候他们可以忘掉不开心的事[they forget unhappy things]。最主要的原因是（The main reason is that…）大家平时压力很大，他们看一场球可以放松一下（relax after a long day）。比如（For example,…）很多人周末跟朋友一起看球赛[they watch a match with friends at the weekend]，然后他们心情很好。所以（That's why…）看比赛帮我忘掉工作上的事（it helps me forget about…）。",
    "g": "情绪",
    "p": ["it helps me forget about…", "The main reason is that…", "relax after a long day", "For example,…", "That's why…"]
  },
  "new-live-sports-event||Where do people normally watch sports events?": {
    "a": "我觉得大部分人在家里看比赛，我一般在手机上看（I usually see… on my phone）。最主要的原因是（The main reason is that…）去现场很贵，也很花时间，在家看可以省钱（keep the costs down）。比如（For example,…）很多人看一场现场比赛要花好几百块钱[a few hundred yuan for one match]，而且他们开车去的时候还会堵在路上（get stuck in traffic）。所以（That's why…）我觉得在家看比赛的人更多，因为在家看很便宜，也很方便[it is cheap and easy at home]。",
    "g": "钱",
    "p": ["I usually see… on my phone", "The main reason is that…", "keep the costs down", "For example,…", "get stuck in traffic", "That's why…"]
  },
  "new-live-sports-event||What are the advantages of watching sports events online?": {
    "a": "我觉得网上看最方便，我一般在手机上看比赛（I usually see… on my phone）。最主要的原因是（The main reason is that…）我们不用出门，也不用买票，这样可以省钱（keep the costs down）。比如（For example,…）很多人在手机上免费看完一场球[they watch a whole match for free]，但是现场的票要好几百块[the ticket costs a few hundred yuan]。所以（As a result,…）网上看比赛帮我省了很多时间，但是气氛差一点（it saves me a lot of time, but…）。",
    "g": "钱",
    "p": ["I usually see… on my phone", "The main reason is that…", "keep the costs down", "For example,…", "As a result,…", "it saves me a lot of time, but…"]
  },
  "new-live-sports-event||What sports matches are suitable for children to attend?": {
    "a": "我觉得学校里的小比赛最适合孩子看。最主要的原因是（The main reason is that…）这种比赛人不多，孩子不会觉得害怕[children do not feel scared]，而且他们看得懂（easy to follow）。比如（For example,…）很多父母带孩子去看学校的运动会[the school sports day]，然后孩子看得很开心。所以（That's why…）孩子可以先看小比赛，而且他们还可以出去呼吸新鲜空气（get some fresh air）。",
    "g": "情绪",
    "p": ["The main reason is that…", "easy to follow", "For example,…", "That's why…", "get some fresh air"]
  },
  "new-live-sports-event||Why do some people spend a lot going to other countries to watch sports events?": {
    "a": "他们愿意花这个钱，因为现场跟手机上完全不一样，我一般在手机上看比赛（I usually see… on my phone）。最主要的原因是（The main reason is that…）他们平时工作很累，出去一次可以好好放松（relax after a long day）。比如（For example,…）很多球迷坐几个小时的车去别的城市看球[they travel for hours to another city]，然后他们在现场特别兴奋[they feel really excited at the ground]。所以（That's why…）看现场比赛帮我忘掉工作上的事（it helps me forget about…）。而且很多人觉得这个钱花得值[it is worth the money]。",
    "g": "情绪",
    "p": ["I usually see… on my phone", "The main reason is that…", "relax after a long day", "For example,…", "it helps me forget about…", "That's why…"]
  },
  "new-live-sports-event||What sports games are popular in your country?": {
    "a": "我们这里最受欢迎的是篮球和乒乓球，大人和孩子都喜欢打。最主要的原因是（The main reason is that…）这两种运动花钱很少（keep the costs down），你只要买一个球拍[you only need to buy a bat]。比如（For example,…）很多人晚饭以后出去走一走（go for a walk after dinner），然后他们在公园里免费打球[they play for free in the park]。所以（That's why…）我觉得这两种运动最普及[these two sports are the most common]。",
    "g": "钱",
    "p": ["The main reason is that…", "keep the costs down", "For example,…", "go for a walk after dinner", "That's why…"]
  },
  "new-general-law||What rules should students follow at school?": {
    "a": "我觉得学生应该按时上课，也应该按时交作业，这就是守规矩（stick to the rules）。主要是因为（mainly because…）学校里人很多，一样的规矩可以保证大家安全（keep people safe）。比如（For example,…）大部分学校晚上有门禁[most schools have a curfew at night]，学生一开始觉得很烦[at first the students think it is annoying]。所以（That's why…）我觉得学校的每条规矩都有它的原因（it's there for a reason）。",
    "g": "规矩",
    "p": ["stick to the rules", "mainly because…", "keep people safe", "For example,…", "That's why…", "it's there for a reason"]
  },
  "new-general-law||Do people in your country usually obey the law?": {
    "a": "我觉得我们国家大部分人都守法（Yes, definitely.）。最主要的原因是（The main reason is that…）大家知道这些规定可以保证大家安全（keep people safe），而且不守法的人要罚钱[they have to pay a fine]。比如（For example,…）很多人晚上过马路的时候，路上没有车，他们也会等红灯[they still wait for the green light]。所以（That's why…）我觉得大部分人愿意守规矩（stick to the rules）。",
    "g": "规矩",
    "p": ["Yes, definitely.", "The main reason is that…", "keep people safe", "For example,…", "That's why…", "stick to the rules"]
  },
  "new-general-law||What kinds of behavior are considered as good behavior?": {
    "a": "我觉得对别人有礼貌，还有愿意帮别人，这就是好行为。最主要的原因是（The main reason is that…）一件很小的事情就可以给别人带来改变（make a difference to other people）。比如（For example,…）很多年轻人在地铁上给老人让座[they give their seat to an old person]，然后老人一天心情都很好。所以（That's why…）我们应该多想想别人，这是每个人的责任（it's everyone's responsibility）。",
    "g": "关系",
    "p": ["The main reason is that…", "make a difference to other people", "For example,…", "That's why…", "it's everyone's responsibility"]
  },
  "new-general-law||Do you think children can learn about the law outside of school?": {
    "a": "我觉得孩子在学校外面也可以学到法律（Yes, definitely.）。最主要的原因是（The main reason is that…）生活里到处都有规矩，每一条都有它的原因（it's there for a reason）。比如（For example,…）大部分父母过马路的时候会告诉孩子，我们要等绿灯[we have to wait for the green light]。所以（That's why…）孩子这样学，他们记得更清楚，长大以后也愿意守规矩（stick to the rules）。",
    "g": "规矩",
    "p": ["Yes, definitely.", "The main reason is that…", "it's there for a reason", "For example,…", "That's why…", "stick to the rules"]
  },
  "new-general-law||What are the benefits for people to obey rules?": {
    "a": "我觉得最大的好处是规矩可以保证大家安全（keep people safe）。最主要的原因是（The main reason is that…）如果每个人都守规矩（stick to the rules），事情就不会乱[things do not get messy]。比如（For example,…）早上很多人坐地铁的时候排队上车，然后大家上车更快[everyone gets on faster]。所以（That's why…）守规矩看起来很麻烦，但是这是每个人的责任（it's everyone's responsibility）。",
    "g": "规矩",
    "p": ["keep people safe", "The main reason is that…", "stick to the rules", "For example,…", "That's why…", "it's everyone's responsibility"]
  },
  "new-general-law||How can parents teach children to obey rules?": {
    "a": "我觉得父母应该先告诉孩子，这条规矩有它的原因（it's there for a reason）。最主要的原因是（The main reason is that…）孩子知道这条规矩可以保证他安全（keep people safe），然后他就愿意听。比如（For example,…）大部分父母会告诉孩子，马路上的车开得很快[the cars on the road go very fast]，然后孩子会站着等。所以（That's why…）讲道理比骂孩子有用，孩子长大以后也愿意守规矩（stick to the rules）。",
    "g": "规矩",
    "p": ["it's there for a reason", "The main reason is that…", "keep people safe", "For example,…", "That's why…", "stick to the rules"]
  },
  "new-interesting-video||What kind of videos do people in your country like to watch?": {
    "a": "大家最喜欢看短视频，我一般也在手机上看（I usually see… on my phone）。最主要的原因是（The main reason is that…）大家上一天班以后很累，他们看这种视频的时候很放松[they feel relaxed when they watch them]，而且谁都看得懂（easy to follow）。比如（For example,…）很多人晚上躺在床上看半个小时好笑的短视频[funny short videos for half an hour]，然后他们心情好很多[they feel much better]。所以（That's why…）短视频在我们这里最受欢迎，因为看视频帮我忘掉白天的烦心事（it helps me forget about…）。",
    "g": "情绪",
    "p": ["I usually see… on my phone", "The main reason is that…", "easy to follow", "For example,…", "it helps me forget about…", "That's why…"]
  },
  "new-interesting-video||Which is more helpful, watching videos or reading books?": {
    "a": "跟看视频比（Compared with…），我觉得看书更有帮助。最主要的原因是（The main reason is that…）书讲得很细，它可以把一个问题分成一小步一小步（break it down into small steps）。比如（For example,…）很多学生看视频学语法的时候觉得很简单，但是他们做题的时候还是会错[they still make mistakes]，他们没有真的进步[they do not really improve]。所以（That's why…）我觉得学生应该多看书，然后他们可以看到真正的进步（see real progress）。",
    "g": "目标",
    "p": ["Compared with…", "The main reason is that…", "break it down into small steps", "For example,…", "That's why…", "see real progress"]
  },
  "new-interesting-video||What skills can people learn from watching videos?": {
    "a": "我觉得看视频可以学到很多动手的技能[practical skills]，做饭和修东西都可以学。最主要的原因是（The main reason is that…）视频一步一步演给你看，所以很好懂（easy to follow）。比如（For example,…）很多年轻人跟着视频学做菜，然后他们几个星期以后可以在家做点简单的东西（cook something simple at home），这就是真的进步[that is real progress]。所以（That's why…）视频把一件事分成一小步一小步（break it down into small steps），这样学技能最合适。",
    "g": "目标",
    "p": ["The main reason is that…", "easy to follow", "For example,…", "cook something simple at home", "That's why…", "break it down into small steps"]
  },
  "new-interesting-video||Are there any differences between the videos that young people and old people like to watch?": {
    "a": "年轻人喜欢看好笑的短视频。老人正好相反（By contrast,…），他们喜欢看新闻。最主要的原因是（The main reason is that…）年轻人上一天班以后很累，他们只想放松一下（relax after a long day）。比如（For example,…）现在很多年轻人晚上看好笑的视频，然后他们心情好一点[they feel better]。大部分老人晚上看电视新闻，因为这样的节目让他们觉得很踏实[it makes them feel settled]。所以（That's why…）两代人看的东西很不一样。",
    "g": "情绪",
    "p": ["By contrast,…", "The main reason is that…", "relax after a long day", "For example,…", "That's why…"]
  },
  "new-interesting-video||Are there any differences between the videos that young men and young women like to watch?": {
    "a": "男生比较喜欢看球赛。女生正好相反（By contrast,…），她们喜欢看做饭和穿衣服的视频。最主要的原因是（The main reason is that…）他们从小的兴趣就不一样，大家都看自己喜欢的东西[everyone watches what they like]。比如（For example,…）很多男生看球赛视频的时候特别激动[they get really excited]，很多女生看视频学做菜，然后她们在家做点简单的东西（cook something simple at home），她们做的时候很开心[they feel happy when they cook]。所以（That's why…）他们看的视频有区别，不过现在这个区别比以前小了。",
    "g": "情绪",
    "p": ["By contrast,…", "The main reason is that…", "For example,…", "cook something simple at home", "That's why…"]
  },
  "new-interesting-video||What makes a video go viral online?": {
    "a": "我觉得一个视频要火，开头就要抓住你的注意力（it catches your attention）。最主要的原因是（The main reason is that…）大家看手机的速度很快，如果前几秒很无聊，他们马上划走了[they scroll away at once]。比如（For example,…）很多人看到一个几秒钟的好笑视频，然后他们发给自己的朋友[they send it to their friends]。所以（That's why…）视频要短，也要好懂（easy to follow）。",
    "g": "情绪",
    "p": ["it catches your attention", "The main reason is that…", "For example,…", "That's why…", "easy to follow"]
  },
  "new-special-cake||What are the differences between special food in China and other countries?": {
    "a": "跟别的国家比（Compared with…），中国人过节的时候更希望全家坐在一起。最主要的原因是（The main reason is that…）在哪个国家都一样，吃什么不重要，重要的是那份心意（it's the thought that counts）。比如（For example,…）中国人中秋节跟家里人一起吃月饼，很多外国人过生日的时候跟朋友一起吃蛋糕[eat a cake with their friends]。所以（That's why…）区别只在食物，大家的心意是一样的[the feeling is the same for everyone]。",
    "g": "关系",
    "p": ["Compared with…", "The main reason is that…", "it's the thought that counts", "For example,…", "That's why…"]
  },
  "new-special-cake||Is there any food in your country that is eaten at special times or on special occasions?": {
    "a": "有的（Yes, definitely.），中秋节我们吃月饼，过年我们吃饺子。最主要的原因是（The main reason is that…）这些日子一年只有一次，所以全家人都想坐在一起。比如（For example,…）很多家庭除夕那天一起包饺子[they make dumplings together]，平时他们只在家做点简单的东西（cook something simple at home）。所以（That's why…）吃什么不重要，重要的是那份心意（it's the thought that counts）。",
    "g": "关系",
    "p": ["Yes, definitely.", "The main reason is that…", "For example,…", "cook something simple at home", "That's why…", "it's the thought that counts"]
  },
  "new-special-cake||Why are some people willing to spend a lot of money on meals on special days?": {
    "a": "我觉得这个钱花得值，因为特别的日子一年只有几次。最主要的原因是（The main reason is that…）大家平时吃饭都很省，他们想少花一点钱（keep the costs down）。比如（For example,…）很多人生日那天跟朋友出去吃一顿好的（eat out with friends），他们那天愿意多花几百块钱[a few hundred yuan more]。所以（That's why…）我觉得大家偶尔花这个钱完全没问题[it is completely fine]。而且这样的钱他们一年只花几次[they only spend it a few times a year]。",
    "g": "钱",
    "p": ["The main reason is that…", "keep the costs down", "For example,…", "eat out with friends", "That's why…"]
  },
  "new-special-cake||Do you think it's good to communicate when eating with your family?": {
    "a": "我觉得吃饭的时候聊天很重要（Yes, definitely.）。最主要的原因是（The main reason is that…）现在每个人有时候都很忙（everyone gets busy sometimes），一天里只有吃饭的时候全家可以坐在一起。比如（For example,…）很多父母吃晚饭的时候会问孩子今天学校怎么样[how school was today]。所以（That's why…）多聊几句可以给家里人带来改变（make a difference to other people）。",
    "g": "关系",
    "p": ["Yes, definitely.", "The main reason is that…", "everyone gets busy sometimes", "For example,…", "That's why…", "make a difference to other people"]
  },
  "new-special-cake||In your country, do people nowadays cook at home as frequently as people did in the past?": {
    "a": "我觉得现在没有以前那么经常了（Not really.）。最主要的原因是（The main reason is that…）现在外卖到处都是，价钱也不贵，我们的选择多得多（there's a lot more choice now）。比如（For example,…）现在很多年轻人点一份外卖只要二十块钱[only twenty yuan for a takeaway]，然后他们一个星期只在家做点简单的东西（cook something simple at home）。所以（That's why…）我觉得在家做饭的人比过去少了，因为在外面吃也不贵[eating out is not expensive either]。",
    "g": "钱",
    "p": ["Not really.", "The main reason is that…", "there's a lot more choice now", "For example,…", "cook something simple at home", "That's why…"]
  },
  "new-special-cake||What do you think of people using their mobile phones during a meal?": {
    "a": "我觉得吃饭的时候一直看手机不太好。最主要的原因是（The main reason is that…）现在每个人有时候都很忙（everyone gets busy sometimes），吃饭的时候大家正好可以说说话。比如（For example,…）很多家庭吃饭的时候都低头看手机，然后一顿饭没有人说话[nobody speaks during the meal]。所以（That's why…）我觉得大家吃饭的时候应该少看手机（cut down on…）。",
    "g": "关系",
    "p": ["The main reason is that…", "everyone gets busy sometimes", "For example,…", "That's why…", "cut down on…"]
  },
  "new-local-news||Do people read the newspaper where you live?": {
    "a": "现在看报纸的人很少了（Not really.）。最主要的原因是（The main reason is that…）在手机上看新闻很快，也不用花钱（keep the costs down）。比如（For example,…）现在很多人在手机上免费看新闻[they read the news for free]，但是一份报纸要两三块钱[a newspaper costs two or three yuan]。我一般也在手机上看新闻（I usually see… on my phone），所以（That's why…）我觉得以后看报纸的人会更少。",
    "g": "钱",
    "p": ["Not really.", "The main reason is that…", "keep the costs down", "For example,…", "I usually see… on my phone", "That's why…"]
  },
  "new-local-news||Do people prefer local or international news?": {
    "a": "这个要看情况，不过一般来说（It depends, but usually…）大部分人先看本地新闻。最主要的原因是（The main reason is that…）本地新闻讲的是他们身边的人[the news is about the people around them]，所以他们可以跟家人聊这些新闻[they can talk about it with their family]。比如（For example,…）很多人晚上看本地新闻，然后他们在饭桌上跟家人聊这些事[they talk about it at dinner]。所以（That's why…）我觉得本地新闻更受欢迎，因为它让邻居之间也有话聊[it gives neighbours something to talk about]。",
    "g": "关系",
    "p": ["It depends, but usually…", "The main reason is that…", "For example,…", "That's why…"]
  },
  "new-local-news||Do you think it's important to have a national identity?": {
    "a": "是的，我觉得很重要（Yes, definitely.）。最主要的原因是（The main reason is that…）如果人们有这种感觉，他们就愿意一起做事[they are willing to work together]，因为这是每个人的责任（it's everyone's responsibility）。比如（For example,…）当有人在路上摔倒的时候，很多人会过去帮他[many people will go and help him]。所以（That's why…）这种感觉可以让人们帮助别人（make a difference to other people）。",
    "g": "关系",
    "p": ["Yes, definitely.", "The main reason is that…", "it's everyone's responsibility", "For example,…", "That's why…", "make a difference to other people"]
  },
  "new-local-news||How can people develop their national identity?": {
    "a": "我觉得人们可以多了解自己国家的历史，也可以多参加本地的活动[join local activities]。最主要的原因是（The main reason is that…）当人们跟身边的人多来往的时候，他们才会觉得这是自己的地方[this place belongs to them]。比如（For example,…）很多人会去参加本地的节日活动，他们在那里认识新的邻居。所以（That's why…）小的改变加起来会很有用（small changes add up），而且这是每个人的责任（it's everyone's responsibility）。",
    "g": "关系",
    "p": ["The main reason is that…", "For example,…", "That's why…", "small changes add up", "it's everyone's responsibility"]
  },
  "new-environmental-law-proposal||How does technology affect the law?": {
    "a": "我觉得当科技变化的时候，法律也要跟着变化。这主要是因为（mainly because…）旧的规定管不了新的问题[the old rules cannot deal with new problems]，所以国家要定新的规定来保护大家（keep people safe）。比如（For example,…）现在很多人在手机上买东西，可是有一些广告不老实（some ads are not honest），后来国家定了新的规定来管网上的广告[the country made new rules for online ads]。所以（That's why…）我觉得国家定新的规定是有道理的（it's there for a reason）。而且新的规定也可以帮大家省钱[the new rules also help people save money]。",
    "g": "规矩",
    "p": ["mainly because…", "keep people safe", "For example,…", "some ads are not honest", "That's why…", "it's there for a reason"]
  },
  "new-environmental-law-proposal||What kinds of rules do schools in China have?": {
    "a": "中国学校的规矩大部分是关于纪律的，学生都要守规矩（stick to the rules）。这主要是因为（mainly because…）学校里的人很多，所以大家要守一样的规矩[everyone has to follow the same rules]。比如（For example,…）大部分学生要按时到学校，他们也要穿校服，上课的时候他们不能玩手机。所以（That's why…）这些规矩听起来很严格[these rules sound very strict]，但是它们可以保护学生的安全（keep people safe）。",
    "g": "规矩",
    "p": ["stick to the rules", "mainly because…", "For example,…", "That's why…", "keep people safe"]
  },
  "new-environmental-law-proposal||Will there be a law that is universally accepted?": {
    "a": "我觉得不太可能（Not really.）。这主要是因为（mainly because…）每个国家的规矩都不一样，所以很难把它们变成一样的[it is hard to make them the same]。比如（For example,…）在有一些国家，警察管过马路管得很严格。在别的国家，没有人管这件事[nobody checks this]。所以（That's why…）我觉得每个国家自己定规矩就可以了，每一条规矩都有它的原因（it's there for a reason）。",
    "g": "规矩",
    "p": ["Not really.", "mainly because…", "For example,…", "That's why…", "it's there for a reason"]
  },
  "new-environmental-law-proposal||What environmental laws does your country already have?": {
    "a": "我们国家已经有一些保护环境的规定了。这主要是因为（mainly because…）保护环境是每个人的责任（it's everyone's responsibility），所以我们需要一些规定来管这件事[we need some rules to control it]。比如（For example,…）现在大部分商店不给免费的塑料袋，如果人们想要塑料袋，他们要自己花钱买。所以（As a result,…）现在用塑料袋的人变少了[fewer people use plastic bags now]，我觉得小的改变加起来也很有用（small changes add up）。",
    "g": "规矩",
    "p": ["mainly because…", "it's everyone's responsibility", "For example,…", "As a result,…", "small changes add up"]
  },
  "new-environmental-law-proposal||What are the rules people should obey at work?": {
    "a": "我觉得上班的时候最重要的事情是守规矩（stick to the rules），而且大家要按时到公司。这主要是因为（mainly because…）公司的规矩可以保护大家的安全（keep people safe），也可以让工作更顺利[it also makes the work go well]。比如（For example,…）大部分公司不让员工在上班的时候玩手机，因为这样他们会犯错[they will make mistakes]。所以（That's why…）我觉得每一条规矩都有它的原因（it's there for a reason）。",
    "g": "规矩",
    "p": ["stick to the rules", "mainly because…", "keep people safe", "For example,…", "That's why…", "it's there for a reason"]
  },
  "new-environmental-law-proposal||What is the purpose of punishment?": {
    "a": "我觉得惩罚的目的是让大家守规矩（stick to the rules）。这主要是因为（mainly because…）如果人们做错了事，但是没有任何结果，他们就不会在意规矩[they will not care about the rules]。比如（For example,…）在学校里，如果学生上课玩手机，老师会把手机收走[the teacher will take the phone away]。所以（That's why…）我觉得惩罚不是为了吓人，它是为了保护大家的安全（keep people safe）。",
    "g": "规矩",
    "p": ["stick to the rules", "mainly because…", "For example,…", "That's why…", "keep people safe"]
  },
  "new-traffic-jam||How can we solve the traffic jam problem?": {
    "a": "我觉得最有用的办法是让更多人改坐地铁（take the subway instead）。这主要是因为（mainly because…）在早晚高峰的时候（at rush hour），很多人堵在路上（get stuck in traffic），所以他们心里很烦[they feel annoyed]。比如（For example,…）很多人开车上班要等一个小时，他们到公司的时候已经很累了[they are already tired when they get to the office]。所以（That's why…）如果他们改坐地铁，他们的心情会好很多[they will feel much better]。而且坐地铁也比开车便宜[the subway is also cheaper than driving]。",
    "g": "情绪",
    "p": ["take the subway instead", "mainly because…", "at rush hour", "For example,…", "get stuck in traffic", "That's why…"]
  },
  "new-traffic-jam||Do you think developing public transport can solve traffic jam problems?": {
    "a": "是的，我觉得肯定可以（Yes, definitely.）。最主要的原因是（The main reason is that…）坐地铁比开车便宜，所以人们可以省下油钱（keep the costs down）。比如（For example,…）很多人以前开车上班，他们每个月要花好几百块钱买油[they spend hundreds of yuan on petrol every month]，可是现在地铁票只要几块钱[a subway ticket only costs a few yuan]。所以（As a result,…）如果公共交通很方便（public transport is convenient），开车的人就会变少[fewer people will drive]。",
    "g": "钱",
    "p": ["Yes, definitely.", "The main reason is that…", "keep the costs down", "For example,…", "As a result,…", "public transport is convenient"]
  },
  "new-traffic-jam||Do you think highways will help reduce traffic jams?": {
    "a": "我觉得帮助不大（Not really.）。这主要是因为（mainly because…）修新的路要花很多钱[building new roads costs a lot of money]，但是路上的车还是一样多。比如（For example,…）很多城市花了很多钱修新的高速路，可是在假期的时候，大家还是堵在路上（get stuck in traffic）。所以（That's why…）我觉得更好的办法是让人们改坐地铁（take the subway instead），因为这样花的钱少多了[this way costs much less money]。",
    "g": "钱",
    "p": ["Not really.", "mainly because…", "For example,…", "get stuck in traffic", "That's why…", "take the subway instead"]
  },
  "new-traffic-jam||What are good ways to manage traffic?": {
    "a": "我觉得最好的办法是让司机守交通规则（stick to the rules）。这主要是因为（mainly because…）如果有人乱停车[if someone parks in the wrong place]，别的车就会堵在路上（get stuck in traffic）。比如（For example,…）我们这里很多人把车停在路边，所以早上大家要多等十分钟[everyone has to wait ten more minutes]。所以（That's why…）我觉得管得严格一点是好事，因为这样可以保护大家的安全（keep people safe）。",
    "g": "规矩",
    "p": ["stick to the rules", "mainly because…", "get stuck in traffic", "For example,…", "That's why…", "keep people safe"]
  },
  "new-traffic-jam||Do you like to use public transport?": {
    "a": "是的，我很喜欢（Yes, definitely.），我每天都坐地铁。这主要是因为（mainly because…）我不用自己开车，所以我在路上很轻松[I feel relaxed on the way]。比如（For example,…）现在很多人在地铁上看视频或者听歌，所以他们到公司的时候心情很好[they feel good when they get to the office]。所以（That's why…）我觉得公共交通又快又方便（public transport is convenient），我坐地铁的时候一点也不累[I do not feel tired at all]。",
    "g": "情绪",
    "p": ["Yes, definitely.", "mainly because…", "For example,…", "That's why…", "public transport is convenient"]
  },
  "new-traffic-jam||Would you rather be in a car or a bus in a traffic jam?": {
    "a": "如果路上堵车，我更愿意坐公交车，我不想自己开车。这主要是因为（mainly because…）我坐公交车的时候不用看路，所以我心里没有那么烦[I do not feel so annoyed]。比如（For example,…）在早晚高峰的时候（at rush hour），很多人堵在路上（get stuck in traffic），可是公交车上的人可以看视频，他们没有那么着急[they are not in such a hurry]。所以（That's why…）我觉得自己开车的人心里更累[people who drive feel more tired]，我还是选公交车。",
    "g": "情绪",
    "p": ["mainly because…", "For example,…", "at rush hour", "get stuck in traffic", "That's why…"]
  },
  "new-happy-event||How can parents help children to be organized?": {
    "a": "我觉得父母可以帮孩子把事情拆成小步骤（break it down into small steps）。这主要是因为（mainly because…）父母可以先帮孩子定一个清楚的目标（set myself a clear goal），然后孩子就知道先做哪一件事[they know which thing to do first]。比如（For example,…）现在很多父母让孩子每天背十个单词，他们不会一次给孩子太多任务[they do not give the child too many tasks]。所以（As a result,…）孩子每天都可以看到自己的进步（see real progress）。",
    "g": "目标",
    "p": ["break it down into small steps", "mainly because…", "For example,…", "set myself a clear goal", "As a result,…", "see real progress"]
  },
  "new-happy-event||On what occasions do people need to be organized?": {
    "a": "我觉得人们在考试以前和工作很忙的时候最需要有安排。这主要是因为（mainly because…）如果事情很多，但是他们没有清楚的目标，他们就不知道先做哪一件[they do not know which one to do first]。比如（For example,…）很多学生准备雅思考试的时候，他们每天都有一个学习计划[they have a study plan every day]。所以（That's why…）我觉得人在很忙的时候应该先定一个清楚的目标（set myself a clear goal），然后把它拆成小任务（break it down into small steps），也要有固定的作息（stick to a routine）。",
    "g": "目标",
    "p": ["mainly because…", "For example,…", "set myself a clear goal", "break it down into small steps", "That's why…", "stick to a routine"]
  },
  "new-happy-event||Does everything need to be well prepared?": {
    "a": "我觉得不用（Not really.），小的事情随便一点更好。这主要是因为（mainly because…）如果人们准备每一件事，他们会很累，也会很紧张[they will feel tired and nervous]。比如（For example,…）很多人跟朋友出去吃饭（eat out with friends），他们不会提前订位子，可是他们还是玩得很开心[they still have a good time]。所以（That's why…）我觉得只有重要的事情才值得花时间准备。而且随便一点的时候，大家跟朋友在一起更放松[people feel more relaxed with their friends]。",
    "g": "情绪",
    "p": ["Not really.", "mainly because…", "For example,…", "eat out with friends", "That's why…"]
  },
  "new-happy-event||Do people need others' help when organizing things?": {
    "a": "是的，我觉得很需要（Yes, definitely.），一个人真的做不完[one person cannot finish it alone]。这主要是因为（mainly because…）如果几个人分工，每个人负责一部分（be responsible for one part of…），事情就快多了。比如（For example,…）大部分学生办活动的时候，有一个人去买东西，另一个人去找场地。所以（As a result,…）大家做自己擅长的事（each do what we're good at），事情就办得又快又好[the work is done quickly and well]。",
    "g": "关系",
    "p": ["Yes, definitely.", "mainly because…", "be responsible for one part of…", "For example,…", "As a result,…", "each do what we're good at"]
  },
  "new-happy-event||How would you feel when you were not well prepared for something?": {
    "a": "我会觉得很紧张，我心里一点信心都没有[I have no confidence at all]。这主要是因为（mainly because…）如果我没有准备好，我就一直担心事情会出问题（something went wrong with…）。比如（For example,…）很多学生考试以前没有复习，他们坐在教室里的时候手会发抖[their hands shake]。所以（That's why…）我现在都会提前定一个清楚的目标（set myself a clear goal），然后慢慢准备。",
    "g": "情绪",
    "p": ["mainly because…", "something went wrong with…", "For example,…", "That's why…", "set myself a clear goal"]
  },
  "new-happy-event||Do you prefer to prepare and organize an activity or just take part in an activity?": {
    "a": "我更喜欢只参加活动，我不想自己组织。这主要是因为（mainly because…）组织一个活动是很大的责任（it's a big responsibility），所以我的压力会很大[I will feel a lot of pressure]。比如（For example,…）很多人办聚会的时候要花一个下午订位子和买东西，所以他们在活动开始以前就已经很累了[they are already tired before the party starts]。跟组织比起来（Compared with…），参加活动轻松多了，所以（That's why…）我选择只参加。",
    "g": "情绪",
    "p": ["mainly because…", "it's a big responsibility", "For example,…", "Compared with…", "That's why…"]
  },
  "new-delayed-reply||When do people spend a long time responding to others' messages?": {
    "a": "我觉得人们跟别人在一起的时候不会马上回消息。这主要是因为（mainly because…）每个人有时候都会很忙（everyone gets busy sometimes），而且他们跟别人在一起的时候不方便看手机[they cannot check their phone then]。比如（For example,…）很多人跟朋友吃饭的时候把手机放在包里，因为他们不想让朋友觉得他们不礼貌[they do not want their friends to think they are rude]。所以（That's why…）我觉得大部分人有空了就会尽快回复（get back to… as soon as I can）。",
    "g": "关系",
    "p": ["mainly because…", "everyone gets busy sometimes", "For example,…", "That's why…", "get back to… as soon as I can"]
  },
  "new-delayed-reply||In what situations do people not respond to messages right away?": {
    "a": "我觉得人们开会或者上课的时候不能马上回消息。这主要是因为（mainly because…）每个人有时候都会很忙（everyone gets busy sometimes），而且他们那个时候要听别人说话[they have to listen to other people then]。比如（For example,…）很多人在开会的时候不看手机，因为他们不想让别人觉得他们不认真[they do not want others to think they are not serious]。所以（That's why…）如果一个人回复得很慢，一般都有原因（there's usually a good reason for it）。",
    "g": "关系",
    "p": ["mainly because…", "everyone gets busy sometimes", "For example,…", "That's why…", "there's usually a good reason for it"]
  },
  "new-delayed-reply||What would you do if you haven't received a reply after sending out a message?": {
    "a": "我一般会先等一等，我不会马上再发一条消息催他[I will not send another message to push him]。这主要是因为（mainly because…）如果我一直催他，他会觉得我不尊重他[he will think I do not respect him]，而且每个人有时候都会很忙（everyone gets busy sometimes）。比如（For example,…）很多人在开会的时候收到朋友的消息，所以他们晚上才回复，可是他们的朋友也不会生气[their friends do not get angry]。所以（That's why…）我不会想太多，我觉得一般都有原因（there's usually a good reason for it）。",
    "g": "关系",
    "p": ["mainly because…", "everyone gets busy sometimes", "For example,…", "That's why…", "there's usually a good reason for it"]
  },
  "new-delayed-reply||Why do some people prefer sending a message instead of making a call?": {
    "a": "我觉得发消息更轻松，因为人们不用马上回答[they do not have to answer at once]。这主要是因为（mainly because…）如果有人打电话，你必须马上接，可是你正在忙的时候会觉得很尴尬[you feel embarrassed]。比如（For example,…）很多人在开会的时候接到电话，他们只能马上挂掉，所以他们心里很紧张[they feel nervous]。所以（That's why…）大部分人更喜欢发消息，因为发消息的时候他们没有压力，他们有空以后再尽快回复（get back to… as soon as I can）。",
    "g": "情绪",
    "p": ["mainly because…", "For example,…", "That's why…", "get back to… as soon as I can"]
  },
  "new-delayed-reply||How do you show your respect in your message?": {
    "a": "我觉得最基本的尊重就是尽快回复（get back to… as soon as I can）。这主要是因为（mainly because…）如果你让别人一直等，他会觉得你不在乎他[he will think you do not care about him]。比如（For example,…）很多人收到老师或者老板的消息，他们就算在忙也会先回一句[they still send a short reply]。所以（As a result,…）如果你先告诉别人你在忙，他也可以理解你，因为每个人有时候都会很忙（everyone gets busy sometimes）。",
    "g": "关系",
    "p": ["get back to… as soon as I can", "mainly because…", "For example,…", "As a result,…", "everyone gets busy sometimes"]
  },
  "new-delayed-reply||Why do some people feel angry when others don't reply to their message?": {
    "a": "我觉得他们生气是因为他们觉得别人不重视他们[they feel other people ignore them]。这主要是因为（mainly because…）如果他们等的时间很长，他们心里就会很难受[they feel upset]。比如（For example,…）很多人发消息以后半天没有收到回复，他们就以为出事了（something went wrong with…），然后他们开始生气。所以（That's why…）我觉得每个人有时候都会很忙（everyone gets busy sometimes），我们不用太在意。",
    "g": "情绪",
    "p": ["mainly because…", "For example,…", "something went wrong with…", "That's why…", "everyone gets busy sometimes"]
  },
  "new-low-cost-day-out||Do people like to spend their leisure time out in your country?": {
    "a": "是的，我觉得大部分人喜欢出去（Yes, definitely.），特别是在周末。这主要是因为（mainly because…）如果他们在家待很久，他们会觉得很闷[they feel bored at home]。比如（For example,…）我们这里很多人晚饭以后去楼下散步（go for a walk after dinner），他们走完以后心情很好[they feel good after the walk]。所以（As a result,…）如果他们出去呼吸新鲜空气（get some fresh air），他们就不会觉得那么累了。而且他们在楼下还可以跟邻居聊天[they can also chat with their neighbours]。",
    "g": "情绪",
    "p": ["Yes, definitely.", "mainly because…", "For example,…", "go for a walk after dinner", "As a result,…", "get some fresh air"]
  },
  "new-low-cost-day-out||How do people spend their leisure time in your country?": {
    "a": "我觉得我们这里的人休息的时候一般不花很多钱。这主要是因为（mainly because…）出去旅游要花很多钱，但是在家附近玩可以省钱（keep the costs down）。比如（For example,…）很多老人晚饭以后去楼下散步（go for a walk after dinner），他们一分钱都不用花[they do not spend any money]。所以（As a result,…）现在的选择比以前多多了（there's a lot more choice now），而且人们不用花很多钱也可以玩得很开心[they can have fun without spending much]。",
    "g": "钱",
    "p": ["mainly because…", "keep the costs down", "For example,…", "go for a walk after dinner", "As a result,…", "there's a lot more choice now"]
  },
  "new-low-cost-day-out||How does technology affect the way people spend their leisure time?": {
    "a": "我觉得科技让休息变得很方便，但是它也让人变懒了[it also makes people lazy]。这主要是因为（mainly because…）看手机可以省很多时间，但是人看太久以后会更累（it saves me a lot of time, but…）。比如（For example,…）现在很多年轻人周末躺在床上看视频，可是他们放下手机以后觉得很没意思[they feel bored after they put the phone down]。所以（That's why…）我觉得科技有好的一面也有坏的一面（it has both good and bad sides），人们最好出去呼吸新鲜空气（get some fresh air）。",
    "g": "情绪",
    "p": ["mainly because…", "it saves me a lot of time, but…", "For example,…", "That's why…", "it has both good and bad sides", "get some fresh air"]
  },
  "new-low-cost-day-out||Do you think only old people have time for leisure?": {
    "a": "我觉得不是这样（Not really.），年轻人也有休息的时间。这主要是因为（mainly because…）年轻人上班很累，所以他们更需要在下班以后放松（relax after a long day）。比如（For example,…）现在很多年轻人周末也很忙，可是他们还是会抽半天出去走走，因为他们想让自己开心一点[they want to feel happier]。所以（That's why…）不是只有老人有空[old people are not the only ones with free time]，只是老人的生活节奏比较慢（a slower pace of life）。",
    "g": "情绪",
    "p": ["Not really.", "mainly because…", "relax after a long day", "For example,…", "That's why…", "a slower pace of life"]
  },
  "new-low-cost-day-out||Why do people like to have days off?": {
    "a": "我觉得大家都喜欢休息日，他们在周末的时候很开心。这主要是因为（mainly because…）人们平时上班很累，所以他们需要在下班以后好好放松（relax after a long day）。比如（For example,…）很多人在休息日睡到中午，然后他们下午出去晒太阳（get some fresh air），他们觉得很舒服[they feel very comfortable]。所以（As a result,…）他们不用花很多钱（keep the costs down）也可以让自己变好[they can feel better again]。",
    "g": "情绪",
    "p": ["mainly because…", "relax after a long day", "For example,…", "get some fresh air", "As a result,…", "keep the costs down"]
  },
  "new-low-cost-day-out||Going out to have holidays is tiring. Why do people still want to do it?": {
    "a": "我觉得虽然出去玩很累，但是大家还是愿意去。这主要是因为（mainly because…）如果人们换一个地方，他们的心情就完全不一样[they feel completely different]。比如（For example,…）现在很多人假期去爬山，他们很累，可是他们可以呼吸新鲜空气（get some fresh air）。所以（As a result,…）他们回家以后反而觉得更放松（relax after a long day），他们上班的时候也更有精神[they have more energy at work]。而且他们出去玩的时候可以跟家人在一起[they can be with their family]。",
    "g": "情绪",
    "p": ["mainly because…", "For example,…", "get some fresh air", "As a result,…", "relax after a long day"]
  },
  "new-help-solve-problem||How important is it for schools to help children become smarter?": {
    "a": "我觉得这非常重要（Yes, definitely.），学校的作用很大。这主要是因为（mainly because…）学校教孩子怎么学习，不只是教课本上的知识[not only the knowledge in the books]。比如（For example,…）大部分老师会把很难的内容拆成小步骤（break it down into small steps），然后一步一步讲给学生听。所以（As a result,…）孩子可以看到自己的进步（see real progress），他们学习的时候也更有动力[they feel more motivated]。",
    "g": "目标",
    "p": ["Yes, definitely.", "mainly because…", "For example,…", "break it down into small steps", "As a result,…", "see real progress"]
  },
  "new-language-learning||What difficulties do people face when learning a language?": {
    "a": "我觉得最难的部分是开口说英语，背单词其实比较容易[remembering new words is easier]。这主要是因为（mainly because…）很多人害怕说错话，他们也害怕别人笑他们，所以他们不敢练习[they do not dare to practise]。比如（For example,…）很多学生背了很多单词，可是他们见到外国人的时候太紧张了，所以他们一句话也说不出来[they cannot say a single word]。所以（That's why…）我觉得人们每天要逼自己说几句英语，然后他们可以看到真的进步（see real progress）。",
    "g": "情绪",
    "p": ["mainly because…", "For example,…", "That's why…", "see real progress"]
  },
  "new-language-learning||Do you think language learning is important? Why?": {
    "a": "是的，我觉得很重要（Yes, definitely.），特别是英语。这主要是因为（mainly because…）如果一个人会英语，他就有多得多的工作机会（many more job opportunities）。比如（For example,…）很多英语好的学生毕业以后进了外企，他们有稳定的收入（a stable income），他们的工资也比较高[their salary is also higher]。所以（As a result,…）我觉得花时间学一门外语非常值得[it is really worth it]。而且会英语的人跟外国人说话的时候也更有信心[they feel more confident]。",
    "g": "钱",
    "p": ["Yes, definitely.", "mainly because…", "many more job opportunities", "For example,…", "a stable income", "As a result,…"]
  },
  "new-language-learning||Which is better, to study a language alone or to study it in a group? Why?": {
    "a": "我觉得跟小组一起学更好。这主要是因为（mainly because…）说话需要另一个人，所以一个人在家没有办法练习[you cannot practise alone at home]。比如（For example,…）现在很多学生去英语角，他们在那里跟别人说英语，也互相纠正发音[they speak English with other people there and correct each other's pronunciation]。所以（That's why…）我觉得跟别人一起练快多了（it's much faster than working alone），因为大家可以互相帮忙[because they can help each other]。",
    "g": "关系",
    "p": ["mainly because…", "For example,…", "That's why…", "it's much faster than working alone"]
  },
  "new-language-learning||What's the best way to learn a language?": {
    "a": "我觉得最好的办法是每天使用这门语言，不要只背单词。这主要是因为（mainly because…）如果人们很久不用这门语言，他们就会忘记，所以他们需要一个每天的小计划[they need a small plan for every day]。比如（For example,…）很多学生每天早上读十分钟英语，他们一天也不停[they do not stop for even one day]。所以（As a result,…）如果你养成固定的习惯（stick to a routine），你就可以看到真的进步（see real progress）。",
    "g": "目标",
    "p": ["mainly because…", "For example,…", "As a result,…", "stick to a routine", "see real progress"]
  },
  "new-language-learning||What are the advantages and disadvantages of learning a language?": {
    "a": "我觉得学一门语言有好的一面也有坏的一面（it has both good and bad sides）。这主要是因为（mainly because…）好处是你可以得到多得多的工作机会（many more job opportunities），坏处是你要花很多钱和时间。比如（For example,…）很多学生为了考雅思要报一个班，他们要花好几千块钱[they pay several thousand yuan for it]。所以（That's why…）我觉得好处比坏处多，因为好的工作可以把这些钱赚回来[a good job can earn the money back]。",
    "g": "钱",
    "p": ["it has both good and bad sides", "mainly because…", "many more job opportunities", "For example,…", "That's why…"]
  },
  "new-language-learning||Some people think that technology has made it unnecessary to learn languages. What do you think?": {
    "a": "我觉得不对（Not really.），翻译软件不能代替自己会说[software cannot replace real speaking]。这主要是因为（mainly because…）如果你举着手机跟别人聊天，你们两个人都会觉得很别扭[both of you feel awkward]。比如（For example,…）很多人用手机翻译跟外国人说话，可是他们没有办法跟对方交朋友[they cannot make friends with the other person]。所以（That's why…）我觉得软件很省时间，但是语言还是要自己学（it saves me a lot of time, but…）。",
    "g": "关系",
    "p": ["Not really.", "mainly because…", "For example,…", "That's why…", "it saves me a lot of time, but…"]
  },
  "new-electronic-device-problem||Why are people keen on buying new electronic  devices?": {
    "a": "我觉得很多人买新手机是因为广告影响了他们[the ads influence them]。这主要是因为（mainly because…）广告很吸引人（it catches your attention），所以人们看了以后心里很想要[they really want it]。比如（For example,…）现在很多年轻人看到新手机的广告，他们当天就去店里买，因为他们拿到新手机的时候很开心[they feel happy when they get a new phone]。所以（That's why…）我觉得人们买以前要多想一想，因为有一些广告不老实（some ads are not honest）。而且新手机很贵，很多人买完以后没有钱了[many people have no money left]。",
    "g": "情绪",
    "p": ["mainly because…", "it catches your attention", "For example,…", "That's why…", "some ads are not honest"]
  },
  "new-electronic-device-problem||What impact do electronic devices have on people?": {
    "a": "我觉得电子产品有好的一面也有坏的一面（it has both good and bad sides）。这主要是因为（mainly because…）用手机查东西很省时间，但是看太久人会觉得很烦（it saves me a lot of time, but…）。比如（For example,…）很多人本来只想查一个东西，可是他们刷了一个小时手机，然后他们觉得很后悔[they feel sorry about it]。所以（That's why…）我觉得人们晚饭以后应该放下手机[people should put down their phones]，出去散步（go for a walk after dinner）。",
    "g": "情绪",
    "p": ["it has both good and bad sides", "mainly because…", "it saves me a lot of time, but…", "For example,…", "That's why…", "go for a walk after dinner"]
  },
  "new-important-decision||Do you think children sometimes have to make important decisions?": {
    "a": "我觉得孩子有时候也要自己做决定。这主要是因为（mainly because…）只有孩子自己知道他喜欢什么，父母不能替他决定[parents cannot decide for him]。比如（For example,…）现在很多父母让孩子自己选兴趣班，他们只给孩子一些建议[they only give the child some advice]。所以（As a result,…）我觉得孩子应该先自己想一想，如果他不懂，他可以找父母帮忙（turn to… for help）。",
    "g": "关系",
    "p": ["mainly because…", "For example,…", "As a result,…", "turn to… for help"]
  },
  "new-important-decision||What important decisions do teenagers need to  make after graduation?": {
    "a": "我觉得最重要的决定是选专业和选工作。这主要是因为（mainly because…）这两件事会影响他们以后有没有稳定的收入（a stable income）。比如（For example,…）很多学生毕业的时候先比一比几个公司给的工资[they compare the salaries from a few companies]，然后他们选钱多的那个[they choose the one that pays more]。所以（That's why…）我觉得他们应该先定一个清楚的目标（set myself a clear goal），然后把它拆成小步骤（break it down into small steps）。",
    "g": "钱",
    "p": ["mainly because…", "a stable income", "For example,…", "That's why…", "set myself a clear goal", "break it down into small steps"]
  },
  "new-important-decision||Who can children turn to for help when making a decision?": {
    "a": "我觉得孩子一般先找父母帮忙（turn to… for help）。这主要是因为（mainly because…）父母最了解他们，父母也最愿意听他们说话[parents are willing to listen to them]。比如（For example,…）很多高中生要选文科还是理科，他们会跟妈妈聊很久[they talk with their mother for a long time]。所以（That's why…）我觉得孩子应该先跟家里人商量，如果他们还是不能决定，他们可以去问老师。",
    "g": "关系",
    "p": ["turn to… for help", "mainly because…", "For example,…", "That's why…"]
  },
  "new-important-decision||Do you think advertisements can influence our decisions when shopping?": {
    "a": "是的，我觉得广告肯定会影响我们（Yes, definitely.），好的广告马上就抓住你的注意力（it catches your attention）。这主要是因为（mainly because…）广告总是说这个东西很便宜，所以人们忍不住花钱[people cannot stop themselves from spending money]。比如（For example,…）很多人在超市看到广告上的饮料，他们就顺手买了一瓶[they just pick up a bottle]，所以他们每个月多花了很多钱[they spend a lot more money every month]。所以（That's why…）我觉得我们买以前要多想一想，我不会相信我看到的每一句话（I don't believe everything I read）。",
    "g": "钱",
    "p": ["Yes, definitely.", "it catches your attention", "mainly because…", "For example,…", "That's why…", "I don't believe everything I read"]
  },
  "new-important-decision||Do you think the influence of advertising is good?": {
    "a": "我觉得广告有好的一面也有坏的一面（it has both good and bad sides）。这主要是因为（mainly because…）广告可以告诉我们哪里在打折，所以我们可以省钱（keep the costs down）。比如（For example,…）很多人买耳机以前先看广告，他们知道了哪个牌子在打折[they learn which brand is on sale]，所以他们少花了一些钱[they spend less money]。可是有一些广告不老实（some ads are not honest），所以（That's why…）我觉得人们买以前应该先看看别人的评价[read the reviews from other people]。",
    "g": "钱",
    "p": ["it has both good and bad sides", "mainly because…", "keep the costs down", "For example,…", "some ads are not honest", "That's why…"]
  },
  "new-important-decision||How do people usually make important decisions?": {
    "a": "我觉得大部分人会先想清楚好处和坏处，然后再做决定。这主要是因为（mainly because…）重要的决定都跟钱有关，人们最看重稳定的收入（a stable income）。比如（For example,…）很多人换工作以前先算一算新公司给多少钱[how much the new company pays]。所以（As a result,…）他们想清楚以后，很多人还会去找别人帮忙（turn to… for help），因为他们想听听别人的意见[they want to hear other opinions]。",
    "g": "钱",
    "p": ["mainly because…", "a stable income", "For example,…", "As a result,…", "turn to… for help"]
  },
  "new-teamwork||Why do some people prefer to work by themselves?": {
    "a": "我觉得有一些人习惯一个人做事情。这主要是因为（mainly because…）他们不用等别人，所以他们心里更自在[they feel more free]。比如（For example,…）很多学生喜欢自己写作业，因为他们可以自己决定什么时候写，所以他们没有压力[they feel no pressure]。所以（That's why…）我觉得小的事情自己做就可以，如果他们真的做不完，他们再去找别人帮忙（turn to… for help）。",
    "g": "情绪",
    "p": ["mainly because…", "For example,…", "That's why…", "turn to… for help"]
  },
  "new-teamwork||What should a leader do to make team members want to follow him or her?": {
    "a": "我觉得好的领导最重要的事情是多听大家的想法。这主要是因为（mainly because…）如果队员觉得领导重视他们，他们就愿意跟着他做事[they are willing to follow him]。比如（For example,…）很多组长开会的时候先问每个人的意见，然后大家一起分工[then they divide the work together]。所以（As a result,…）如果每个人做自己擅长的事（each do what we're good at），团队就比一个人做快多了（it's much faster than working alone）。",
    "g": "关系",
    "p": ["mainly because…", "For example,…", "As a result,…", "each do what we're good at", "it's much faster than working alone"]
  },
  "new-teamwork||Should students learn to do group work?": {
    "a": "是的，我觉得学生一定要学（Yes, definitely.），他们以后一直用得到这个能力[they will use this skill in the future]。这主要是因为（mainly because…）他们以后工作的时候要跟别人合作[they have to work with other people]。比如（For example,…）很多学生做小组作业的时候，每个人负责一部分（be responsible for one part of…）。所以（As a result,…）大家一起做比一个人做快多了（it's much faster than working alone）。",
    "g": "关系",
    "p": ["Yes, definitely.", "mainly because…", "For example,…", "be responsible for one part of…", "As a result,…", "it's much faster than working alone"]
  },
  "new-teamwork||What group tasks are there in schools?": {
    "a": "我觉得学校里的小组任务很多。主要是因为（mainly because…）老师想让学生早一点学会跟别人合作[teachers want students to learn to work with others early]。比如（For example,…）很多英语老师让学生一起排一个短剧[many English teachers ask students to put on a short play together]，每个学生负责一个部分（be responsible for one part of…）。所以（As a result,…）每个学生做自己擅长的事（each do what we're good at），他们完成得更快[they finish the task faster]。",
    "g": "关系",
    "p": ["mainly because…", "For example,…", "be responsible for one part of…", "As a result,…", "each do what we're good at"]
  },
  "new-teamwork||What advantages are there for students experiencing teamwork at school?": {
    "a": "我觉得学生在学校学会合作有很多好处[students get a lot of benefits from teamwork at school]。主要是因为（mainly because…）几个学生一起做事的时候，他们比一个人做快得多（it's much faster than working alone）。比如（For example,…）很多学生一起做一张海报，一个学生画画，另一个学生写字[one student draws and another student writes]。所以（As a result,…）学生也学会替别人着想（it teaches you to think about others），这对他们以后很有用[this is useful for them in the future]。",
    "g": "关系",
    "p": ["mainly because…", "it's much faster than working alone", "For example,…", "As a result,…", "it teaches you to think about others"]
  },
  "new-teamwork||How can you tell if a person is a good leader?": {
    "a": "我觉得我们主要看他会不会分配工作[I mainly look at whether he can share out the work]。主要是因为（mainly because…）好的领导知道每个人擅长什么，他会让每个人做自己擅长的事（each do what we're good at）。比如（For example,…）很多小组的组长做项目的时候，他先问每个人想做什么[he first asks everyone what they want to do]，然后他让每个人负责一个部分（be responsible for one part of…）。所以（As a result,…）整个小组做得比一个人快得多（it's much faster than working alone），大家也不会太累[and nobody gets too tired]。",
    "g": "关系",
    "p": ["mainly because…", "each do what we're good at", "For example,…", "be responsible for one part of…", "As a result,…", "it's much faster than working alone"]
  },
  "new-changed-plan||Do people often change their plans?": {
    "a": "我觉得很多人经常改计划，这件事很正常[I think this is quite normal]。主要是因为（mainly because…）很多计划要跟别人一起做，但是每个人有时候都很忙（everyone gets busy sometimes）。比如（For example,…）很多人约好周末跟朋友去爬山，但是他们朋友的车出了问题（something went wrong with…），最后他们只能待在家里[in the end they have to stay at home]。所以（That's why…）我定计划的时候，我会先问一下别人的时间[I ask other people about their time first]。",
    "g": "关系",
    "p": ["mainly because…", "everyone gets busy sometimes", "For example,…", "something went wrong with…", "That's why…"]
  },
  "new-changed-plan||Would you tell others if you change your plan?": {
    "a": "我一定会马上告诉别人（Yes, definitely.）。主要是因为（mainly because…）如果我不说，我的朋友可能在外面等很久[if I do not tell him, my friend may wait outside for a long time]。比如（For example,…）很多人改了吃饭的时间，他们会马上给朋友发一条消息[they send their friends a message right away]。所以（That's why…）如果我的计划变了，我会尽快回复对方（get back to… as soon as I can）。",
    "g": "关系",
    "p": ["Yes, definitely.", "mainly because…", "For example,…", "That's why…", "get back to… as soon as I can"]
  },
  "new-changed-plan||Why do you think parents still make plans for their children nowadays?": {
    "a": "我觉得现在很多父母还是喜欢帮孩子做计划。主要是因为（mainly because…）他们担心孩子没有方向，他们怕孩子浪费时间[they are afraid their children will waste time]。比如（For example,…）很多父母帮孩子定一个明确的目标（set myself a clear goal），然后他们把目标拆成很多小步骤（break it down into small steps）。所以（As a result,…）孩子每天能看到一点进步（see real progress），父母也就放心了[so the parents feel relieved]。而且父母也想多陪孩子做一些事情[parents also want to do more things with their children]。",
    "g": "目标",
    "p": ["mainly because…", "For example,…", "set myself a clear goal", "break it down into small steps", "As a result,…", "see real progress"]
  },
  "new-changed-plan||How does technology help people make plans?": {
    "a": "我觉得科技让我们做计划方便多了。主要是因为（mainly because…）我们可以在手机上比较价格，这样我们可以省钱（keep the costs down）。比如（For example,…）很多人订机票以前，先在几个手机软件上比一比价格[a lot of people compare the prices on a few apps first]，然后他们买最便宜的那一张[then they buy the cheapest one]。所以（As a result,…）大家安排事情更简单，我们现在的选择也多了很多（there's a lot more choice now）。",
    "g": "钱",
    "p": ["mainly because…", "keep the costs down", "For example,…", "As a result,…", "there's a lot more choice now"]
  },
  "new-changed-plan||What kind of plans do people often make?": {
    "a": "我觉得大部分人常做的是学习计划和旅行计划[study plans and travel plans]。主要是因为（mainly because…）很多人想给自己定一个明确的目标（set myself a clear goal）。比如（For example,…）很多学生想考雅思，他们把这个目标拆成很多小步骤（break it down into small steps），他们每天背几个词块[they learn a few phrases every day]。所以（That's why…）过了一段时间以后，他们可以看到真的有进步（see real progress）。而且很多人也喜欢跟朋友一起定计划[many people also like to make plans with their friends]。",
    "g": "目标",
    "p": ["mainly because…", "set myself a clear goal", "For example,…", "break it down into small steps", "That's why…", "see real progress"]
  },
  "new-changed-plan||Do you think people like the process of making plans more, or the moment of carrying them out?": {
    "a": "我觉得大部分人更喜欢真正做成的那一刻[the moment when they really finish it]。主要是因为（mainly because…）他们做完以后会有成就感（a real sense of achievement），但是他们写计划的时候没有这种感觉[they do not feel that when they are writing the plan]。比如（For example,…）很多人每天晚饭以后出去走走（go for a walk after dinner），几个月以后他们看到真的有变化（see real progress），那一天他们特别开心[they are really happy on that day]。所以（That's why…）我觉得做成一件事情的时候，大家最开心。",
    "g": "情绪",
    "p": ["mainly because…", "a real sense of achievement", "For example,…", "go for a walk after dinner", "see real progress", "That's why…"]
  },
  "new-early-morning||Do you know anyone who likes to get up early?": {
    "a": "认识（Yes, definitely.），我妈妈就是一个早起的人（be a morning person）。主要是因为（mainly because…）她觉得早上很安静，她的心情也很好。比如（For example,…）很多早起的人五点半起床做早饭[a lot of early risers get up at half past five and cook breakfast]，他们觉得早上很舒服[they feel very comfortable in the morning]。所以（That's why…）他们很多年一直保持同样的作息（stick to a routine）。",
    "g": "情绪",
    "p": ["Yes, definitely.", "be a morning person", "mainly because…", "For example,…", "That's why…", "stick to a routine"]
  },
  "new-early-morning||Why do people get up early?": {
    "a": "我觉得大家早起是想好好利用上午的时间[people get up early to use the morning well]。主要是因为（mainly because…）很多人觉得他们在中午以前工作效率最高（I work best before…），他们做完事情也有成就感（a real sense of achievement）。比如（For example,…）很多上班的人六点起床去跑步[a lot of office workers get up at six and go running]，跑完以后他们一天的心情都很好[they feel good all day after that]。所以（That's why…）他们会一直保持固定的作息（stick to a routine）。",
    "g": "情绪",
    "p": ["mainly because…", "I work best before…", "a real sense of achievement", "For example,…", "That's why…", "stick to a routine"]
  },
  "new-early-morning||What kinds of occasions do people need to arrive early?": {
    "a": "我觉得考试、面试和坐火车坐飞机的时候，大家都要早到。主要是因为（mainly because…）路上很容易堵车（get stuck in traffic），如果他们迟到，他们会很紧张[if they are late, they will be very nervous]。比如（For example,…）很多人早上去坐高铁，他们正好碰上早高峰（at rush hour），他们在路上很着急[they get very worried on the road]。所以（That's why…）大部分人遇到这种事情，都会提前一点出门[they leave home a bit earlier]。",
    "g": "情绪",
    "p": ["mainly because…", "get stuck in traffic", "For example,…", "at rush hour", "That's why…"]
  },
  "new-early-morning||Why do some people like to stay up late?": {
    "a": "我觉得有些人熬夜，是因为只有晚上的时间属于他们自己[the evening is the only time that belongs to them]。主要是因为（mainly because…）他们白天要上班，只有晚上可以放松一下（relax after a long day），晚上也可以让他们忘掉工作（it helps me forget about…）。比如（For example,…）现在很多年轻人晚上十二点还在手机上看视频[a lot of young people are still watching videos on their phones at midnight]，他们觉得那个时候最轻松[they feel most relaxed at that time]。所以（That's why…）他们晚上不想睡觉，早上也起不来[and they cannot get up in the morning]。",
    "g": "情绪",
    "p": ["mainly because…", "relax after a long day", "it helps me forget about…", "For example,…", "That's why…"]
  },
  "new-early-morning||Is it good to arrive early in any situation?": {
    "a": "不一定（Not really.），如果我们去朋友家太早，这样不太好[it is not very polite]。主要是因为（mainly because…）对方可能还没有准备好，每个人有时候都很忙（everyone gets busy sometimes）。比如（For example,…）很多人去别人家吃饭早到了一个小时，主人还在做饭，他们只能坐在那里等[the host is still cooking and they just have to sit there and wait]。所以（That's why…）我觉得只有考试和坐车的时候我们才要早到，因为路上可能堵车（get stuck in traffic）。",
    "g": "关系",
    "p": ["Not really.", "mainly because…", "everyone gets busy sometimes", "For example,…", "That's why…", "get stuck in traffic"]
  },
  "new-early-morning||What kind of people like getting up early?": {
    "a": "我觉得每天有事情要做的人，一般都是早起的人（be a morning person）。主要是因为（mainly because…）他们给自己定了明确的目标（set myself a clear goal），他们需要早一点开始[they need to start early]。比如（For example,…）很多学生每天六点起床背单词，他们从来不睡懒觉[they never sleep in]。所以（That's why…）过了一段时间，早起就变成了他们固定的作息（stick to a routine）。而且他们做完事情以后，心情也很好[they also feel good after they finish their work]。",
    "g": "目标",
    "p": ["be a morning person", "mainly because…", "set myself a clear goal", "For example,…", "That's why…", "stick to a routine"]
  },
  "new-changed-opinion||When do most children begin to have their own opinions?": {
    "a": "我觉得孩子上小学以后就有自己的想法了。主要是因为（mainly because…）他们在学校跟同学和老师说的话变多了[they talk more with their classmates and teachers at school]。比如（For example,…）很多三年级的孩子会跟妈妈争论谁洗碗[a lot of children in grade three argue with their mother about who washes the dishes]。所以（That's why…）我以前觉得（I used to think…）孩子什么都不懂，现在我觉得（now I think…）他们很早就有自己的想法。",
    "g": "关系",
    "p": ["mainly because…", "For example,…", "That's why…", "I used to think…", "now I think…"]
  },
  "new-changed-opinion||Do children communicate more with teachers or with parents?": {
    "a": "我觉得孩子跟父母说的话更多。主要是因为（mainly because…）孩子每天回家都能看到父母，他们说话也很轻松[they can talk in a relaxed way]。比如（For example,…）很多小孩回到家以后，马上跟妈妈讲学校里的事情[a lot of children tell their mother about school right after they get home]。所以（That's why…）孩子不开心的时候，他们也先跟父母说，因为老师平时也很忙（everyone gets busy sometimes）。",
    "g": "关系",
    "p": ["mainly because…", "For example,…", "That's why…", "everyone gets busy sometimes"]
  },
  "new-changed-opinion||Whose opinions are more important to children, their parents' or teachers'?": {
    "a": "我觉得父母的话对孩子更重要。主要是因为（mainly because…）孩子跟父母在一起的时间最长，他们也最相信父母说的话[they trust what their parents say most]。比如（For example,…）很多孩子想学画画，如果爸爸说他支持，这个孩子就会一直学下去[the child will keep learning it]。所以（That's why…）父母的一句话真的可以改变孩子（make a difference to other people）。",
    "g": "关系",
    "p": ["mainly because…", "For example,…", "That's why…", "make a difference to other people"]
  },
  "new-changed-opinion||Who do most young people like to share opinions with?": {
    "a": "我觉得年轻人更愿意跟同年龄的朋友说自己的想法。主要是因为（mainly because…）朋友的年龄差不多，他们说话没有压力，也不怕别人笑话他们[they are not afraid that others will laugh at them]。比如（For example,…）现在很多年轻人有事情的时候，先在手机上跟朋友聊天[a lot of young people chat with their friends on their phones first]。所以（That's why…）年轻人遇到麻烦的时候，他们会先找朋友帮忙（turn to… for help）。",
    "g": "关系",
    "p": ["mainly because…", "For example,…", "That's why…", "turn to… for help"]
  },
  "new-recent-change||Do you think it is good to change one's daily routine?": {
    "a": "我觉得偶尔改一改是好事（Yes, definitely.）。主要是因为（mainly because…）如果每天都一样，人会觉得很闷，如果他们换一下，心情会更好[people feel better if they change something]。比如（For example,…）很多人晚上不再看手机，他们改成晚饭以后出去走走（go for a walk after dinner），他们觉得轻松多了[they feel much more relaxed]。结果（As a result,…）他们睡得更好，小的改变慢慢也会有效果（small changes add up）。",
    "g": "情绪",
    "p": ["Yes, definitely.", "mainly because…", "For example,…", "go for a walk after dinner", "As a result,…", "small changes add up"]
  },
  "new-recent-change||Do you think it is good to change jobs?": {
    "a": "我觉得这个要看情况，不过大部分时候是好事（It depends, but usually…）。主要是因为（mainly because…）换工作以后，很多人可以拿到更高的工资[they can get a higher salary]，机会也更多（many more job opportunities）。比如（For example,…）很多年轻人去年换了工作，他们现在有了稳定的收入（a stable income）。所以（That's why…）如果一个人想清楚了再换工作，这一般是一件好事[this is usually a good thing]。",
    "g": "钱",
    "p": ["It depends, but usually…", "mainly because…", "many more job opportunities", "For example,…", "a stable income", "That's why…"]
  },
  "new-recent-change||Is it good for people to get a job promotion?": {
    "a": "我觉得升职对大部分人是好事（Yes, definitely.）。主要是因为（mainly because…）升职以后，他们有更稳定的收入（a stable income），他们家里花钱也更轻松[their family can spend money more easily]。比如（For example,…）很多人去年升职了，他们每个月多拿两千块[they get two thousand yuan more every month]，他们也很有成就感（a real sense of achievement）。所以（That's why…）就算工作累一点，大部分人还是想升职[most people still want a promotion]。",
    "g": "钱",
    "p": ["Yes, definitely.", "mainly because…", "a stable income", "For example,…", "a real sense of achievement", "That's why…"]
  },
  "new-recent-change||Do people often make plans around their regular routines?": {
    "a": "我觉得很多人是这样（Yes, definitely.），他们会按照自己的作息安排事情（stick to a routine）。主要是因为（mainly because…）家里人每天要在一起吃饭，所以他们把别的事情放在吃饭的前面或者后面[so they put other things before or after the meal]。比如（For example,…）大部分家庭每天六点做晚饭，家里每个人都按这个时间回家[everyone in the family comes home at that time]。所以（That's why…）家里其他人跟着做就行了，这样的安排很好照着来（easy to follow）。",
    "g": "关系",
    "p": ["Yes, definitely.", "stick to a routine", "mainly because…", "For example,…", "That's why…", "easy to follow"]
  },
  "new-recent-change||Who tend to change their daily routine more, young people or old people?": {
    "a": "我觉得年轻人改得更多。主要是因为（mainly because…）如果朋友约他们，他们马上就出去了[if their friends invite them, they go out right away]，年轻人也愿意试新的东西（keep an open mind）。比如（For example,…）很多年轻人周末跟朋友吃饭，他们会把别的事情往后放[they put other things off until later]。所以（That's why…）老人一般不改，他们还是按照原来的作息生活（stick to a routine）。",
    "g": "关系",
    "p": ["mainly because…", "keep an open mind", "For example,…", "That's why…", "stick to a routine"]
  },
  "new-important-river-lake||Are rivers and lakes important to a country?": {
    "a": "我觉得非常重要（Yes, definitely.）。主要是因为（mainly because…）河边的游客很多，附近开店的人有稳定的收入（a stable income）。比如（For example,…）很多人在河边开小饭馆和小商店，夏天的时候他们能挣不少钱[they can make quite a lot of money in summer]。所以（That's why…）保护这些河是每个人的责任（it's everyone's responsibility），我们不能往河里扔垃圾[we should not throw rubbish into the river]。",
    "g": "钱",
    "p": ["Yes, definitely.", "mainly because…", "a stable income", "For example,…", "That's why…", "it's everyone's responsibility"]
  },
  "new-important-river-lake||What are the popular water sports in your country?": {
    "a": "我觉得最多人玩的是游泳和划船，这两个运动的动作很好照着做（easy to follow）。主要是因为（mainly because…）夏天很热，大家在水里觉得很凉快，他们也玩得很开心[they feel cool in the water and they have a lot of fun]。比如（For example,…）很多人夏天去公园的湖上划船，他们在那里玩一个下午[they spend a whole afternoon there]，他们觉得很轻松[they feel very relaxed]。所以（That's why…）夏天大家喜欢去水边，因为他们想放松一下（relax after a long day）。",
    "g": "情绪",
    "p": ["easy to follow", "mainly because…", "For example,…", "That's why…", "relax after a long day"]
  },
  "new-important-river-lake||Are rivers and lakes good for transport? Why?": {
    "a": "我觉得挺好的（Yes, definitely.），特别是运东西的时候。主要是因为（mainly because…）一条船一次可以装很多东西，走水路比走公路省钱（keep the costs down）。比如（For example,…）在我们这里，很多沙子和煤都是用船运的，因为用船比用车便宜很多[because a boat is much cheaper than a lorry]。而且船在水上不会堵车（get stuck in traffic），所以（That's why…）公司也很容易算好时间[companies can work out the time easily]。",
    "g": "钱",
    "p": ["Yes, definitely.", "mainly because…", "keep the costs down", "For example,…", "get stuck in traffic", "That's why…"]
  },
  "new-important-river-lake||How do rivers and lakes affect local tourism?": {
    "a": "我觉得影响很大，有水的地方游客明显更多。主要是因为（mainly because…）游客在水边觉得很放松，而且那里可以看的和可以玩的也很多（there's a lot to see and do）。比如（For example,…）夏天的时候，很多游客坐在我们这里的湖边看风景，他们觉得很舒服[they feel very comfortable]，他们也不想走了[and they do not want to leave]。所以（That's why…）我会把这种地方推荐给喜欢安静的人（I'd recommend it to anyone who…）。",
    "g": "情绪",
    "p": ["mainly because…", "there's a lot to see and do", "For example,…", "That's why…", "I'd recommend it to anyone who…"]
  },
  "new-important-river-lake||Do you think rivers and lakes attract tourists?": {
    "a": "我觉得会（Yes, definitely.），很多人出去玩的时候会选择水边的地方[they choose places near the water]。主要是因为（mainly because…）他们平时住在城市里，他们很想出去呼吸新鲜空气（get some fresh air）。比如（For example,…）很多人周末去湖边，他们只是坐在那里看水，他们觉得很安静，心情也很好[they feel quiet and they are in a good mood]。所以（That's why…）我觉得有河有湖的地方都很值得去（really worth visiting）。",
    "g": "情绪",
    "p": ["Yes, definitely.", "mainly because…", "get some fresh air", "For example,…", "That's why…", "really worth visiting"]
  },
  "new-important-river-lake||How can rivers and lakes benefit local people?": {
    "a": "我觉得好处很多，当地人可以钓鱼和锻炼，也可以挣游客的钱[they can make money from tourists]。主要是因为（mainly because…）游客变多以后，附近开店的人有稳定的收入（a stable income）。比如（For example,…）很多人在湖边开小饭馆（run my own business），夏天的时候他们的生意最好[their business is best in summer]。所以（That's why…）他们会认真听客人的意见（listen to what customers say），然后一直做下去。",
    "g": "钱",
    "p": ["mainly because…", "a stable income", "For example,…", "run my own business", "That's why…", "listen to what customers say"]
  },
  "new-recommended-place||Where do people in your country often go for holidays?": {
    "a": "我们这里的人放假一般去海边，或者去附近的山里。主要是因为（mainly because…）去远的地方机票很贵[flights to faraway places are expensive]，大家想省一点钱（keep the costs down）。比如（For example,…）很多家庭五一假期开车去附近的水库，他们不用买机票，这样他们省了很多钱[they do not have to buy flight tickets and they save a lot of money]。所以（That's why…）近一点的地方最受欢迎，因为那里可以看的和可以玩的也很多（there's a lot to see and do）。",
    "g": "钱",
    "p": ["mainly because…", "keep the costs down", "For example,…", "That's why…", "there's a lot to see and do"]
  },
  "new-recommended-place||Where do young people in your country often go for holidays?": {
    "a": "我觉得年轻人更喜欢去人多的大城市[young people prefer big cities with a lot of people]。主要是因为（mainly because…）年轻人放假想跟朋友一起出去玩，大城市里可以一起做的事情多了很多（there's a lot more choice now）。比如（For example,…）很多年轻人放假去成都，晚上他们跟朋友一起出去吃饭（eat out with friends），然后他们聊到很晚[then they talk until late]。所以（That's why…）年轻人度假的时候，还是喜欢去大城市[young people still like to go to big cities on holiday]。",
    "g": "关系",
    "p": ["mainly because…", "there's a lot more choice now", "For example,…", "eat out with friends", "That's why…"]
  },
  "new-recommended-place||What is the ideal length for a holiday?": {
    "a": "我觉得一个星期最合适。主要是因为（mainly because…）如果假期太短，人没有时间放松一下（relax after a long day）。如果假期太长，我们会觉得很累，回去上班也很难[we feel tired and it is hard to go back to work]。比如（For example,…）很多人请一个星期的假，他们出去玩四天，然后在家休息三天[they travel for four days and then rest at home for three days]，他们一点也不累[and they are not tired at all]。结果（As a result,…）他们回去上班的时候，感觉真的放松了[they feel really relaxed]。",
    "g": "情绪",
    "p": ["mainly because…", "relax after a long day", "For example,…", "As a result,…"]
  },
  "new-recommended-place||How do people usually plan holidays?": {
    "a": "我觉得大部分人现在用手机订票和订酒店，这样省了很多时间，不过（it saves me a lot of time, but…）网上的信息不一定都对[the information online is not always right]。主要是因为（mainly because…）他们在手机上可以比一比价格，大家都想少花一点钱[everyone wants to spend less money]。比如（For example,…）很多人出去玩以前，先在几个网站上看酒店的价格，然后他们订最便宜的那一家[then they book the cheapest one]。所以（That's why…）我不会相信网上写的每一句话（I don't believe everything I read），我会多看几家再决定[I check a few websites before I decide]。",
    "g": "钱",
    "p": ["it saves me a lot of time, but…", "mainly because…", "For example,…", "That's why…", "I don't believe everything I read"]
  },
  "new-recommended-place||Is it important to plan a holiday ahead?": {
    "a": "我觉得提前安排很重要（Yes, definitely.）。主要是因为（mainly because…）大家的假期都在同一个时间，如果我们订晚了，价格会很贵[if we book late, the price will be very high]。比如（For example,…）很多人国庆前一个星期才订酒店，最后他们付了两倍的钱[in the end they pay twice as much]。所以（That's why…）我觉得早一点订可以省很多钱（keep the costs down）。",
    "g": "钱",
    "p": ["Yes, definitely.", "mainly because…", "For example,…", "That's why…", "keep the costs down"]
  },
  "new-recommended-place||How do people decide when to travel?": {
    "a": "我觉得大家看假期和家里人的时间来决定。主要是因为（mainly because…）只有放长假的时候，一家人才有时间在一起[only in a long holiday does the whole family have time together]。比如（For example,…）很多家庭等爸爸休年假，然后他们一起出去玩[a lot of families wait until the father takes his annual leave]。所以（That's why…）大家也想避开最忙的时间出门，因为他们不想在路上堵车（get stuck in traffic）。",
    "g": "关系",
    "p": ["mainly because…", "For example,…", "That's why…", "get stuck in traffic"]
  },
  "new-visit-home||Do Chinese people like to visit others' homes?": {
    "a": "我觉得大部分中国人还是喜欢去别人家做客（Yes, definitely.）。主要是因为（mainly because…）他们在家里说话更自在，也可以多见见亲戚和朋友[they can see their relatives and friends more often]。比如（For example,…）过年的时候，很多家庭会一个一个去亲戚家坐一坐[a lot of families visit their relatives one by one]。所以（That's why…）就算大家平时都很忙（everyone gets busy sometimes），他们一年也会见几次面。",
    "g": "关系",
    "p": ["Yes, definitely.", "mainly because…", "For example,…", "That's why…", "everyone gets busy sometimes"]
  },
  "new-visit-home||What do Chinese people do when they visit others?": {
    "a": "我觉得他们一般喝茶聊天，有时候他们一起吃一顿饭[sometimes they have a meal together]。主要是因为（mainly because…）大家去别人家就是想见见面，他们不为别的事情[they do not go there for anything else]。比如（For example,…）很多人去亲戚家的时候，主人会在家里做几个简单的菜（cook something simple at home）。所以（That's why…）吃什么不重要，重要的是这份心意（it's the thought that counts）。",
    "g": "关系",
    "p": ["mainly because…", "For example,…", "cook something simple at home", "That's why…", "it's the thought that counts"]
  },
  "new-visit-home||What kind of place do people in your country like to live in?": {
    "a": "我觉得大部分人还是喜欢住在城市里。主要是因为（mainly because…）城市里的工作机会更多（many more job opportunities），他们也更容易挣到钱[it is easier for them to make money]。比如（For example,…）很多人以前住在小县城，后来他们搬到了市里，因为他们在市里可以找到工资更高的工作[they can find a job with a higher salary in the city]。所以（That's why…）城市里的公共交通也很方便（public transport is convenient），大家都愿意留在城市。",
    "g": "钱",
    "p": ["mainly because…", "many more job opportunities", "For example,…", "That's why…", "public transport is convenient"]
  },
  "new-visit-home||What's the difference between homes in cities and those in the countryside?": {
    "a": "我觉得城市里的房子比较小，但是很方便；乡下的房子比较大，也很安静。主要是因为（mainly because…）城市里人很多，土地很少，房子也很贵[flats in the city are very expensive]。比如（For example,…）在乡下，很多人用很少的钱可以盖一个大房子，但是在城市里，同样的钱只能买一个小房间[the same money only buys a small room in the city]。所以（That's why…）城市的好处是公共交通很方便（public transport is convenient），大家出门就有地铁[there is a subway right outside]。而且住在乡下的人晚饭以后可以出去走走（go for a walk after dinner）。",
    "g": "钱",
    "p": ["mainly because…", "For example,…", "That's why…", "public transport is convenient", "go for a walk after dinner"]
  },
  "new-visit-home||What kind of gifts do people bring when they visit others?": {
    "a": "我觉得大家一般带水果、茶叶或者牛奶。主要是因为（mainly because…）他们会先想一想对方需要什么[they think about what the other person needs]，然后他们挑一个别人真的会用的东西（pick something they'll actually use）。比如（For example,…）很多人去看老人的时候，会买一箱老人爱喝的牛奶[they buy a box of the milk that the old person likes]。所以（That's why…）礼物不用很贵，重要的是这份心意（it's the thought that counts）。",
    "g": "关系",
    "p": ["mainly because…", "pick something they'll actually use", "For example,…", "That's why…", "it's the thought that counts"]
  },
  "new-visit-home||How often do you visit your relatives of friends?": {
    "a": "我大概一个月去看一次亲戚或者朋友。主要是因为（mainly because…）大家平时都要上班，每个人有时候都很忙（everyone gets busy sometimes），我们只有周末才能见面[we can only meet at the weekend]。比如（For example,…）很多人周末去朋友家，中午他们一起吃饭，然后他们聊到很晚[then they talk until late]。所以（That's why…）我们见面的次数不多，但是每次都聊很久。",
    "g": "关系",
    "p": ["mainly because…", "everyone gets busy sometimes", "For example,…", "That's why…"]
  },
  "new-boring-place||Why do most children think education is boring?": {
    "a": "我觉得孩子确实容易觉得上课很无聊。主要是因为（mainly because…）每天的课都差不多，他们只能坐着听老师讲[they can only sit and listen to the teacher]。比如（For example,…）一节课有四十分钟，很多学生在后面二十分钟开始走神，他们觉得很累，也很无聊[they feel tired and bored]。所以（That's why…）如果老师把内容拆成小的部分（break it down into small steps），学生会觉得好很多[students will feel much better]。",
    "g": "情绪",
    "p": ["mainly because…", "For example,…", "That's why…", "break it down into small steps"]
  },
  "new-boring-place||Why aren't young people willing to listen to the experiences of older people?": {
    "a": "我觉得年轻人确实不太喜欢听老人讲他们的经验。主要是因为（mainly because…）老人的生活节奏比较慢（a slower pace of life），他们讲一件小事要讲很久[they take a long time to tell a small story]。比如（For example,…）很多老人常常说，他们年轻的时候去哪里都走路（we used to walk everywhere），年轻人听了几分钟以后就觉得很无聊[young people feel bored after a few minutes]。所以（That's why…）年轻人还是尊重老人的，但是他们说话的节奏不一样[but they talk at a different speed]。",
    "g": "情绪",
    "p": ["mainly because…", "a slower pace of life", "For example,…", "we used to walk everywhere", "That's why…"]
  },
  "new-boring-place||What can people do when they feel bored?": {
    "a": "我觉得人们无聊的时候最好出去走走。主要是因为（mainly because…）如果他们在屋子里待很久，他们的心情会更差[they will feel worse]，出去呼吸新鲜空气会好很多（get some fresh air）。比如（For example,…）很多人晚饭以后出去走一圈（go for a walk after dinner），他们也会跟家人聊聊天，他们的心情马上就好了[they feel better right away]。结果（As a result,…）他们走回来的时候，就不再想那些让他们不开心的事情了（it helps me forget about…）。",
    "g": "情绪",
    "p": ["mainly because…", "get some fresh air", "For example,…", "go for a walk after dinner", "As a result,…", "it helps me forget about…"]
  },
  "new-boring-place||Why are some teachers' class boring? Are there any solutions?": {
    "a": "我觉得有些老师的课确实很无聊。主要是因为（mainly because…）老师一个人讲到下课，学生只能坐着听，他们很容易困[they get sleepy easily]。比如（For example,…）有些老师上课只念课本，全班学生都在打瞌睡[the whole class falls asleep]。所以（That's why…）老师可以多提问，也可以把内容拆成小的部分（break it down into small steps），这样课会好很多[then the class will be much better]。",
    "g": "情绪",
    "p": ["mainly because…", "For example,…", "That's why…", "break it down into small steps"]
  },
  "new-boring-place||Why do some young people feel bored when talking with old people?": {
    "a": "我觉得他们两边喜欢的话题不一样。主要是因为（mainly because…）老人喜欢说以前的事情，但是年轻人听不进去，他们很快就觉得无聊[young people cannot take it in and they soon feel bored]。比如（For example,…）很多老人说，以前买东西没有几个牌子可以选，但是现在我们的选择多了很多（there's a lot more choice now），年轻人听到这里就想去看手机了[young people want to look at their phones then]。所以（That's why…）年轻人听了一会儿就走神了[young people lose focus after a while]，但是他们并不讨厌老人。",
    "g": "情绪",
    "p": ["mainly because…", "For example,…", "there's a lot more choice now", "That's why…"]
  },
  "new-boring-place||Do most people think news about celebrities is boring?": {
    "a": "我觉得不一定（Not really.），很多人很喜欢看名人的新闻。主要是因为（mainly because…）这种新闻的标题很吸引人（it catches your attention），他们看到以后就想点开看看[they want to click on it]。比如（For example,…）很多人在手机上看到明星的消息，他们会停下来看两眼，他们觉得很有意思[they find it interesting]。不过这种新闻有很多是假的，所以（That's why…）我不会相信我看到的每一条消息（I don't believe everything I read）。",
    "g": "情绪",
    "p": ["Not really.", "mainly because…", "it catches your attention", "For example,…", "That's why…", "I don't believe everything I read"]
  },
  "new-favourite-city||Which is more suitable for young people, urban life or rural life, and which is more suitable for old people?": {
    "a": "我觉得年轻人适合住在城市，老人适合住在乡下。主要是因为（mainly because…）城市里的工作机会更多（many more job opportunities），年轻人可以多挣几年钱[young people can earn money for a few more years]。比如（For example,…）现在很多大学生毕业以后去广州工作，他们在几年里换了三份工作，每次换完以后他们的工资都更高[their salary is higher after each change]。所以（That's why…）老人不用这么辛苦，乡下比较慢的生活更适合他们（a slower pace of life）。",
    "g": "钱",
    "p": ["mainly because…", "many more job opportunities", "For example,…", "That's why…", "a slower pace of life"]
  },
  "new-favourite-city||How do people choose a city to travel to?": {
    "a": "我觉得大部分人主要看这个地方贵不贵[most people look at how expensive the place is]。主要是因为（mainly because…）出去旅游要花很多钱，大部分人想省一点[travelling costs a lot of money, and most people want to save some]。比如（For example,…）很多人先比一比机票和酒店的价格，然后他们选便宜的那个城市[then they choose the cheaper city]。所以（That's why…）价格是最重要的原因，而且现在可以选的城市多了很多（there's a lot more choice now）。很多人也想跟朋友一起去一个热闹的城市，因为那里可以看的和可以玩的很多（there's a lot to see and do）。",
    "g": "钱",
    "p": ["mainly because…", "For example,…", "That's why…", "there's a lot more choice now", "there's a lot to see and do"]
  },
  "new-favourite-city||Do you think a tourist city is also a good place to live? Why?": {
    "a": "我觉得旅游城市住起来也很舒服。主要是因为（mainly because…）这种城市的公共交通很方便（public transport is convenient），住在那里的人不用买车，他们也可以省钱[they do not need to buy a car and they can save money]。比如（For example,…）在厦门，很多人出门不开车，他们改成坐地铁（take the subway instead），这样他们每个月能省不少钱[they save quite a lot of money every month]。不过周末路上很容易堵车（get stuck in traffic），所以（That's why…）大家会选别的时间出门[people choose another time to go out]。",
    "g": "钱",
    "p": ["mainly because…", "public transport is convenient", "For example,…", "take the subway instead", "get stuck in traffic", "That's why…"]
  },
  "new-favourite-city||Do most people prefer to travel in a modern city or a historical city?": {
    "a": "我觉得大部分人更喜欢去老的城市[most people prefer old cities]。主要是因为（mainly because…）老城里有很多东西可以看（there's a lot to see and do），所以游客觉得很开心[so the tourists feel very happy]。比如（For example,…）很多游客在老街上慢慢走的时候，他们觉得很放松[they feel very relaxed]。所以（That's why…）我觉得老城市很值得去一次（really worth visiting）。而且很多人喜欢跟朋友一起去[many people like to go with their friends]。",
    "g": "情绪",
    "p": ["mainly because…", "there's a lot to see and do", "For example,…", "That's why…", "really worth visiting"]
  },
  "new-tall-building||Are there many tall buildings in your country?": {
    "a": "是的（Yes, definitely.），我们国家有很多高楼。主要是因为（mainly because…）城市里的土地很贵，但是人们盖高楼可以省钱（keep the costs down）。比如（For example,…）在大城市里，很多人买不起大房子[many people cannot afford a big house]，所以他们住在高楼里的小房子[so they live in a small flat in a tall building]。所以（That's why…）高楼可以让房子便宜一点。而且很多人在高峰期（at rush hour）坐地铁上班，因为地铁很便宜[the underground is cheap]。",
    "g": "钱",
    "p": ["Yes, definitely.", "mainly because…", "keep the costs down", "For example,…", "That's why…", "at rush hour"]
  },
  "new-tall-building||What are the differences between those tall buildings in your country?": {
    "a": "我觉得城市里的楼和农村的楼很不一样。主要是因为（mainly because…）城市里的土地很贵，所以人们盖很高的楼[so people build very tall buildings]。比如（For example,…）在很多小县城里，土地很便宜[the land is cheap]，所以那里的楼只有十几层。所以（That's why…）农村的房子便宜很多[houses in the countryside are much cheaper]，那里的生活也比较慢（a slower pace of life）。而且很多人可以跟家人住在一起[many people can live with their family]。",
    "g": "钱",
    "p": ["mainly because…", "For example,…", "That's why…", "a slower pace of life"]
  },
  "new-tall-building||Why are different places laid out and designed differently?": {
    "a": "我觉得每个地方的情况不一样[the situation is different in every place]，所以设计也不一样。主要是因为（mainly because…）大城市的土地很贵，人们设计的时候要省钱（keep the costs down）。比如（For example,…）市中心的土地最贵，所以那里有很多高楼[so there are many tall buildings there]。郊区的土地便宜，所以那里的楼比较矮。所以（That's why…）钱是最主要的原因[money is the main reason]。而且旅游城市会留下更多地方，让游客有很多东西可以看（there's a lot to see and do）。",
    "g": "钱",
    "p": ["mainly because…", "keep the costs down", "For example,…", "That's why…", "there's a lot to see and do"]
  },
  "new-tall-building||What are the advantages of living in tall buildings?": {
    "a": "我觉得住在高楼里最大的好处是很安静。主要是因为（mainly because…）楼层很高，所以汽车的声音上不来[the noise from the cars does not reach them]，住在上面的人觉得很放松[they feel very relaxed]。比如（For example,…）很多人住在十八楼，他们晚上打开窗户的时候，也觉得很舒服[they feel very comfortable]。所以（That's why…）他们下班以后可以好好休息（relax after a long day）。而且高楼里的小房子比大房子省钱[a small flat is cheaper than a big house]。",
    "g": "情绪",
    "p": ["mainly because…", "For example,…", "That's why…", "relax after a long day"]
  },
  "new-tall-building||Why do some people like to remodel and decorate their homes themselves?": {
    "a": "我觉得很多人自己装修房子，因为他们想省钱。主要是因为（mainly because…）请工人装修要花很多钱[it costs a lot to hire workers]，但是自己做可以省下成本（keep the costs down）。比如（For example,…）很多人自己刷墙，也自己装灯，所以他们可以省很多钱[they can save a lot of money]。他们把这件事分成很多小步（break it down into small steps）。结果（As a result,…）他们花的钱少了一半[they spend half as much money]。而且他们做完以后很有成就感（a real sense of achievement）。",
    "g": "钱",
    "p": ["mainly because…", "keep the costs down", "For example,…", "break it down into small steps", "As a result,…", "a real sense of achievement"]
  },
  "new-tall-building||What kind of interior design style do most people like?": {
    "a": "我觉得大部分人喜欢简单干净的风格。主要是因为（mainly because…）他们上了一天班，回家以后想好好休息（relax after a long day）。比如（For example,…）很多人家里的东西很少[there are only a few things in their homes]。他们坐在沙发上，他们打开灯，然后他们就觉得很放松[they feel very relaxed]。所以（That's why…）他们会减少多余的东西（cut down on…）。而且简单的风格也可以省钱[a simple style can also save money]。",
    "g": "情绪",
    "p": ["mainly because…", "relax after a long day", "For example,…", "That's why…", "cut down on…"]
  },
  "new-free-time-travel-place||Why do you think some people choose not to travel abroad?": {
    "a": "我觉得主要的原因是钱。主要是因为（mainly because…）出国的机票和酒店都很贵，很多人不想花这么多钱[many people do not want to spend so much money]。比如（For example,…）大部分人觉得，几万块钱只玩一个星期太贵了[it is too expensive to travel for only one week]。所以（That's why…）他们会去国内近一点的地方，因为这样可以省钱（keep the costs down）。而且他们也可以跟家人一起去[they can also go with their family]。",
    "g": "钱",
    "p": ["mainly because…", "For example,…", "That's why…", "keep the costs down"]
  },
  "new-free-time-travel-place||Do you think a gap period in life is important?": {
    "a": "是的（Yes, definitely.），我觉得中间休息一段时间很重要。主要是因为（mainly because…）如果一个人一直工作，他没有时间想自己以后的目标[he has no time to think about his future goals]。比如（For example,…）很多年轻人毕业以后休息几个月，他们在这段时间里想清楚要做什么工作[they work out what job they want to do]。结果（As a result,…）他们回去工作以后更清楚自己的方向[they are clearer about their direction]。如果我有这样的机会，我会给自己定一个明确的目标（set myself a clear goal），然后我可以看到自己真的有进步（see real progress）。",
    "g": "目标",
    "p": ["Yes, definitely.", "mainly because…", "For example,…", "set myself a clear goal", "As a result,…", "see real progress"]
  },
  "new-met-once-person||What can we do to leave a good impression on people we meet for the first time?": {
    "a": "我觉得最重要的是有礼貌，我们也要认真听别人说话。主要是因为（mainly because…）认真听别人说话，可以让我们学会为别人着想（it teaches you to think about others）。比如（For example,…）很多人第一次见面的时候不看手机[they do not look at their phones]，他们只看着对方[they only look at the other person]。结果（As a result,…）他们很快就成了朋友。而且对方也会觉得很舒服[the other person also feels comfortable]。",
    "g": "关系",
    "p": ["mainly because…", "it teaches you to think about others", "For example,…", "As a result,…"]
  },
  "new-met-once-person||What should we not talk about when we meet a person for the first time?": {
    "a": "我觉得第一次见面的时候，我们不应该问收入，也不应该问家里的事。主要是因为（mainly because…）这些问题太私人了，对方会觉得不舒服[the other person will feel uncomfortable]。比如（For example,…）很多人和新朋友一起出去吃饭（eat out with friends）的时候，他们只聊吃的和电影[they only talk about food and movies]。所以（That's why…）我觉得先聊轻松的话题比较安全。而且这样大家都觉得很开心[everyone feels happy in this way]。",
    "g": "关系",
    "p": ["mainly because…", "For example,…", "eat out with friends", "That's why…"]
  },
  "new-met-once-person||How do people make friends in China?": {
    "a": "我觉得大部分人在学校里交朋友，也在公司里交朋友[they also make friends at work]。主要是因为（mainly because…）他们每天见面，有很多共同的话题[they see each other every day and have a lot to talk about]，而且他们遇到问题的时候会互相帮忙（turn to… for help）。比如（For example,…）很多人下班以后和同事一起出去吃饭（eat out with friends）。结果（As a result,…）他们慢慢就成了朋友[they slowly become friends]。而且他们在一起的时候都很开心[they are happy together]。",
    "g": "关系",
    "p": ["mainly because…", "turn to… for help", "For example,…", "eat out with friends", "As a result,…"]
  },
  "new-met-once-person||On what occasions do people like to make friends?": {
    "a": "我觉得人们到了一个新地方的时候，最想交朋友。主要是因为（mainly because…）在新地方他们不认识别人，所以他们想找人说话[they want to find someone to talk to]。比如（For example,…）很多人晚饭以后和邻居一起去散步（go for a walk after dinner），他们就这样聊起来了[they start talking in this way]。所以（That's why…）我觉得一起做事的时候最容易交到朋友。而且一个人在新地方会觉得很孤单[a person feels very lonely in a new place]。",
    "g": "关系",
    "p": ["mainly because…", "For example,…", "go for a walk after dinner", "That's why…"]
  },
  "new-met-once-person||Is it important to have the same hobbies and interests when making friends?": {
    "a": "我觉得一样的爱好有帮助，但是这个不是必须的[it is not necessary]。主要是因为（mainly because…）如果两个人的爱好一样，他们在一起的时候很开心，也可以好好休息（relax after a long day）。比如（For example,…）很多朋友一起出去吃饭（eat out with friends）的时候聊球赛，他们聊得很开心[they talk very happily]。所以我觉得这件事有好的一面，也有坏的一面（it has both good and bad sides）。而且爱好不一样的朋友也可以互相帮忙[friends with different hobbies can also help each other]。",
    "g": "情绪",
    "p": ["mainly because…", "relax after a long day", "For example,…", "eat out with friends", "it has both good and bad sides"]
  },
  "new-met-once-person||What qualities make true friends?": {
    "a": "我觉得真正的朋友应该诚实[a true friend should be honest]，我们也可以相信他[we can trust him]。主要是因为（mainly because…）好朋友会想到别人的感受，这也让我们学会为别人着想（it teaches you to think about others）。比如（For example,…）很多人的电脑出了问题（something went wrong with…）的时候，他们会找朋友帮忙（turn to… for help）。所以（That's why…）我觉得可靠是最重要的。而且这样的朋友也让我们觉得很放松[this kind of friend makes us feel relaxed]。",
    "g": "关系",
    "p": ["mainly because…", "it teaches you to think about others", "For example,…", "something went wrong with…", "turn to… for help", "That's why…"]
  },
  "new-impressive-course||What do people need to remember in their daily lives?": {
    "a": "这个看情况（It depends, but usually…），大部分人要记住上班时间和吃药这样的小事。主要是因为（mainly because…）如果他们忘了，他们会很着急，一天的安排也乱了[their plan for the day does not work]。比如（For example,…）很多人每天按固定的时间做事（stick to a routine），所以他们不着急[so they do not worry]。结果（As a result,…）他们很少忘记事情。而且他们也不会让别人等他们[they do not make other people wait]。",
    "g": "情绪",
    "p": ["It depends, but usually…", "mainly because…", "For example,…", "stick to a routine", "As a result,…"]
  },
  "new-impressive-course||What can we learn from history?": {
    "a": "我觉得我们可以学到以前的人怎么生活[how people lived in the past]。主要是因为（mainly because…）如果我们知道的事情多，我们遇到问题的时候就不会着急，我们也可以想得开一点（keep an open mind）。比如（For example,…）很多人读了很多历史书，所以他们遇到问题的时候不太害怕[they are not very afraid when they have problems]。所以（That's why…）我觉得多了解过去很有用。我以前觉得（I used to think…）钱最重要，现在我觉得（now I think…）身体更重要。",
    "g": "情绪",
    "p": ["mainly because…", "keep an open mind", "For example,…", "I used to think…", "now I think…", "That's why…"]
  },
  "new-impressive-course||Why do some people have a better memory than others?": {
    "a": "我觉得他们对那件事更感兴趣。主要是因为（mainly because…）如果一个人喜欢一样东西，他记的时候会觉得很容易（easy to follow）。比如（For example,…）很多学生喜欢历史课，所以他们记得很快[so they remember it quickly]。他们不喜欢数学课，所以他们记得很慢[so they remember it slowly]。我上午的状态最好（I work best before…），所以（That's why…）我早上背东西。而且很多人和朋友一起背东西，他们记得更牢[they remember better]。",
    "g": "情绪",
    "p": ["mainly because…", "easy to follow", "For example,…", "I work best before…", "That's why…"]
  },
  "new-impressive-course||Do people like things of memorial significance?": {
    "a": "是的（Yes, definitely.），很多人喜欢留着老照片和旧礼物。主要是因为（mainly because…）他们看到这些东西的时候，就会想起那个人，心意才是最重要的（it's the thought that counts）。比如（For example,…）很多人用朋友送的杯子用了好几年[they use it for several years]。所以（That's why…）这些东西不贵，但是他们不想扔掉[they do not want to throw them away]。而且他们看到这些东西的时候会很开心[they feel happy when they see these things]。",
    "g": "关系",
    "p": ["Yes, definitely.", "mainly because…", "it's the thought that counts", "For example,…", "That's why…"]
  },
  "new-impressive-course||Which can help people remember things better, words or photos?": {
    "a": "我觉得照片更有用。主要是因为（mainly because…）人们看照片的时候会想起当时的心情[they remember how they felt at that time]，照片也很容易懂（easy to follow）。比如（For example,…）很多人晚饭以后出去散步（go for a walk after dinner）的时候会拍照片[they take photos]。他们几年以后看这些照片，心里还是很开心[they still feel happy]。跟文字比起来（Compared with…），照片让人记得更牢，所以我更喜欢拍照片。",
    "g": "情绪",
    "p": ["mainly because…", "easy to follow", "For example,…", "go for a walk after dinner", "Compared with…"]
  },
  "new-impressive-course||Can technology help people remember things better? How?": {
    "a": "是的（Yes, definitely.），我觉得手机可以帮人记事。主要是因为（mainly because…）手机上的软件都是免费的[the apps on the phone are free]，它帮我省了很多时间，但是（it saves me a lot of time, but…）我们不能完全靠它[we cannot depend on it completely]。比如（For example,…）很多人用手机定闹钟，他们不用买本子和笔[they do not have to buy notebooks and pens]，他们也按固定的时间做事（stick to a routine）。结果（As a result,…）他们很少忘记事情，他们也省了不少钱[they also save some money]。",
    "g": "钱",
    "p": ["Yes, definitely.", "mainly because…", "it saves me a lot of time, but…", "For example,…", "stick to a routine", "As a result,…"]
  },
  "new-friend-gift||When do people normally send gifts to others?": {
    "a": "我觉得人们一般在生日、节日，还有去别人家做客的时候送礼物。主要是因为（mainly because…）他们送礼物是想让对方知道，他们很关心这个人[they care about this person]，心意才是最重要的（it's the thought that counts）。比如（For example,…）很多人去朋友家吃饭的时候，他们会带一些水果[they bring some fruit]。所以（That's why…）场合不一样，人们送的东西也不一样。而且送礼物不用花很多钱[people do not have to spend a lot of money on gifts]。",
    "g": "关系",
    "p": ["mainly because…", "it's the thought that counts", "For example,…", "That's why…"]
  },
  "new-friend-gift||Is it hard to choose a gift?": {
    "a": "这个看情况（It depends, but usually…），给熟人挑礼物不难。主要是因为（mainly because…）我们知道他喜欢什么，所以我们可以挑他真的会用的东西（pick something they'll actually use）。比如（For example,…）很多人给同事挑礼物的时候觉得很难[they find it very hard]，他们担心同事不会用这个礼物[they are afraid he will not use it]。所以（That's why…）如果我们不太熟，我们可以送简单实用的东西。而且这样我们也不用花很多钱[we also do not have to spend much money]。",
    "g": "关系",
    "p": ["It depends, but usually…", "mainly because…", "pick something they'll actually use", "For example,…", "That's why…"]
  },
  "new-friend-gift||Will people feel happy when receiving an expensive gift?": {
    "a": "不一定（Not really.），我觉得贵的礼物不一定让人开心。主要是因为（mainly because…）如果礼物太贵，对方会有压力，他会觉得他也要送一个贵的礼物[he also has to give an expensive gift]。比如（For example,…）很多人收到很贵的礼物的时候，他们心里不太舒服[they do not feel comfortable]。但是他们收到一个小杯子的时候很开心，因为这是他们真的会用的东西（pick something they'll actually use）。所以我觉得心意才是最重要的（it's the thought that counts）。而且送贵的礼物也很浪费钱[giving expensive gifts also wastes money]。",
    "g": "情绪",
    "p": ["Not really.", "mainly because…", "For example,…", "pick something they'll actually use", "it's the thought that counts"]
  },
  "new-friend-gift||Which do people give on traditional festivals, red envelopes or other kinds of gifts?": {
    "a": "我觉得两种都有，这个要看是什么节日[it depends on the festival]。主要是因为（mainly because…）红包很方便，收到的人可以自己买真的会用的东西（pick something they'll actually use）。比如（For example,…）过年的时候，大部分大人给小孩红包，里面有几百块钱[there are a few hundred yuan inside]。中秋节的时候，他们送吃的东西，因为这些东西不太贵[these things are not very expensive]。所以（That's why…）节日不一样，送礼的方法也不一样。而且很多人也想让家里人开心[many people also want to make their family happy]。",
    "g": "钱",
    "p": ["mainly because…", "pick something they'll actually use", "For example,…", "That's why…"]
  },
  "new-friend-gift||What do people usually consider when buying gifts?": {
    "a": "我觉得人们主要看对方需要什么，他们也看自己可以花多少钱。主要是因为（mainly because…）大部分人想少花一点钱（keep the costs down），但是礼物也要合适[the gift also has to be suitable]。比如（For example,…）很多人先看自己可以花多少钱[how much they can spend]，然后他们挑一个便宜的东西，这也是对方真的会用的东西（pick something they'll actually use）。所以（That's why…）我觉得合适的礼物比贵的礼物好[a suitable gift is better than an expensive one]。而且这样对方也不会有压力[the other person will not feel stressed]。",
    "g": "钱",
    "p": ["mainly because…", "keep the costs down", "For example,…", "pick something they'll actually use", "That's why…"]
  },
  "new-friend-gift||Are there any unlucky things that people should not buy as gifts in your country?": {
    "a": "是的，我们这里的人不送钟，也不送伞。主要是因为（mainly because…）如果我们送这些东西，收到的人会很不高兴[the person will be very unhappy]，这个老规矩也有它的道理（it's there for a reason）。比如（For example,…）很多人给长辈送茶叶，因为长辈真的会喝，这是他们会用的东西（pick something they'll actually use）。所以（That's why…）很多人送礼以前会先问问家里人[they ask their family first]。而且这样对方也会很开心[the other person will also be happy]。",
    "g": "关系",
    "p": ["mainly because…", "it's there for a reason", "For example,…", "pick something they'll actually use", "That's why…"]
  },
  "new-organized-person||Why is it important for people to be organized?": {
    "a": "我觉得这很重要，因为做事有条理的人会轻松很多[life is much easier for them]。主要是因为（mainly because…）他们先安排好事情，所以他们不会着急，他们的压力也比较小。比如（For example,…）很多人每天按固定的时间做事（stick to a routine），所以他们上班的时候不紧张[they are not nervous at work]。结果（As a result,…）他们下班以后可以好好休息（relax after a long day）。而且他们也有时间跟家人在一起[they also have time to be with their family]。",
    "g": "情绪",
    "p": ["mainly because…", "For example,…", "stick to a routine", "As a result,…", "relax after a long day"]
  },
  "new-organized-person||Do you think children should learn to be organized from a young age?": {
    "a": "是的（Yes, definitely.），我觉得孩子小的时候就应该学。主要是因为（mainly because…）如果孩子自己会收拾东西，父母也会轻松一点[the parents will have less to do]。比如（For example,…）很多孩子每天自己收拾书包，他们也按固定的时间做事（stick to a routine），所以他们的父母很少骂他们[their parents seldom shout at them]。结果（As a result,…）父母不用每天叫他们了[the parents do not have to remind them every day]。而且一家人的关系也更好[the relationship in the family is also better]。",
    "g": "关系",
    "p": ["Yes, definitely.", "mainly because…", "For example,…", "stick to a routine", "As a result,…"]
  },
  "new-organized-person||Are organized people more likely to be successful at work or in their studies?": {
    "a": "是的（Yes, definitely.），我觉得有条理的人一般做得更好[they usually do better]。主要是因为（mainly because…）他们做大事的时候，会分成很多小步（break it down into small steps）。比如（For example,…）很多学生学英语的时候，他们先学单词，然后再学句子[then they learn sentences]。他们每天都有一个小目标[they have a small goal every day]。结果（As a result,…）他们的成绩比别人好[their results are better]。我学英语的时候，我也给自己定一个明确的目标（set myself a clear goal），所以我可以看到自己真的有进步（see real progress）。",
    "g": "目标",
    "p": ["Yes, definitely.", "mainly because…", "break it down into small steps", "For example,…", "set myself a clear goal", "As a result,…", "see real progress"]
  },
  "new-organized-person||What can people do to become more organized?": {
    "a": "我觉得我们可以先写一个单子[we can make a list first]，写下今天要做的事。主要是因为（mainly because…）我先给自己定一个明确的目标（set myself a clear goal），然后我把事情分成很多小步（break it down into small steps），事情就不乱了。比如（For example,…）很多人早上先写下今天最重要的三件事[the three most important things for today]，然后他们先做最难的那件事[they do the hardest one first]。我上午的状态最好（I work best before…），所以（That's why…）我也在上午做难的事情。",
    "g": "目标",
    "p": ["mainly because…", "set myself a clear goal", "break it down into small steps", "For example,…", "I work best before…", "That's why…"]
  },
  "new-organized-person||Should parents teach their children to be organized?": {
    "a": "我觉得应该，父母在家里就要教孩子。主要是因为（mainly because…）孩子每天和父母在一起，他们看着父母做事，所以他们学得最快[they learn fastest in this way]。比如（For example,…）很多父母让孩子先收好书包，然后一家人一起吃饭[then the whole family has dinner together]。所以（That's why…）这些孩子长大以后，也会按固定的时间做事（stick to a routine）。而且他们和父母的关系也很好[their relationship with their parents is also good]。",
    "g": "关系",
    "p": ["mainly because…", "For example,…", "That's why…", "stick to a routine"]
  },
  "new-organized-person||Do you think it is important for managers to be well organized?": {
    "a": "是的（Yes, definitely.），我觉得管理别人的人更要有条理。主要是因为（mainly because…）如果领导很乱，全组的人也会做很多没用的事[the whole team will waste a lot of time]。比如（For example,…）在很多公司里，每个人做自己擅长的事（each do what we're good at），每个人负责一个部分（be responsible for one part of…）。结果（As a result,…）这样比一个人做快很多[this is much faster than working alone]。而且大家一起做的时候，压力也比较小[everyone has less stress]。",
    "g": "关系",
    "p": ["Yes, definitely.", "mainly because…", "For example,…", "each do what we're good at", "be responsible for one part of…", "As a result,…"]
  },
  "new-famous-interview||What kinds of people are usually interviewed?": {
    "a": "这个看情况（It depends, but usually…），大部分是有名的人和找工作的人。主要是因为（mainly because…）公司想听顾客说什么（listen to what customers say），记者也想知道别人的想法[reporters want to know what other people think]。比如（For example,…）很多年轻人找工作的时候，公司会先跟他们聊一次[the company talks with them first]，然后公司看他们会不会和别人一起做事[whether they can work with other people]。结果（As a result,…）被采访的人大部分是这两种。而且很多人被采访以后，可以得到更多工作机会[they can get more job chances]。",
    "g": "关系",
    "p": ["It depends, but usually…", "mainly because…", "listen to what customers say", "For example,…", "As a result,…"]
  },
  "new-famous-interview||Why do some people dislike being interviewed?": {
    "a": "我觉得很多人不喜欢被采访。主要是因为（mainly because…）别人看着他们的时候，他们会很紧张，也很难放松下来（relax after a long day）。比如（For example,…）很多人在面试以前的那个晚上睡不好觉[they cannot sleep well the night before]。所以（That's why…）有些人尽量不接受采访[they try not to accept interviews]。而且他们也担心别人怎么看他们[they worry about what other people think of them]。",
    "g": "情绪",
    "p": ["mainly because…", "relax after a long day", "For example,…", "That's why…"]
  },
  "new-famous-interview||Why do some people think interviews are a waste of time?": {
    "a": "我觉得有些面试真的是在浪费时间。主要是因为（mainly because…）很多人面试了好几次，还是没找到工作，他们没有稳定的收入（a stable income）。比如（For example,…）很多年轻人去面试要花路费和时间[they spend money on travel and time]，但是公司最后不给他们工作[the company does not give them a job in the end]。所以（That's why…）他们觉得去打工更好，因为打工可以马上挣到钱[they can earn money at once]。",
    "g": "钱",
    "p": ["mainly because…", "a stable income", "For example,…", "That's why…"]
  },
  "new-famous-interview||What should people do to prepare for a job interview?": {
    "a": "我觉得提前准备最重要。主要是因为（mainly because…）我们先要知道自己想做什么工作，所以我会给自己定一个明确的目标（set myself a clear goal），然后我把准备分成很多小步（break it down into small steps）。比如（For example,…）很多人面试以前会先看看这家公司[they read about the company first]，他们也每天练习几个常见的问题[they practise a few common questions every day]。结果（As a result,…）他们准备好了以后，更容易拿到这个工作[it is easier for them to get the job]。而且他们说话的时候也不那么紧张[they are also not so nervous]。",
    "g": "目标",
    "p": ["mainly because…", "set myself a clear goal", "break it down into small steps", "For example,…", "As a result,…"]
  },
  "new-happy-person||Should teachers know what children are doing all the time?": {
    "a": "不用（Not really.），我觉得老师不用每分钟都知道。主要是因为（mainly because…）如果老师管得太紧，孩子会害怕，他们有问题的时候也不敢找老师帮忙（turn to… for help）。比如（For example,…）很多老师给学生一些自由的时间[some free time of their own]，然后学生有问题的时候会主动去找老师[the students go to the teacher on their own]。所以（That's why…）我觉得给孩子一点空间更好。而且这样孩子的压力也比较小[the children also have less stress]。",
    "g": "关系",
    "p": ["Not really.", "mainly because…", "turn to… for help", "For example,…", "That's why…"]
  },
  "new-happy-person||Do you think teachers are able to spot the unhappy children?": {
    "a": "这个看情况（It depends, but usually…），大部分老师可以看出来。主要是因为（mainly because…）孩子不开心的时候会变得很安静，老师每天都见到他们。比如（For example,…）很多学生上课的时候突然不说话了[they suddenly stop talking in class]，然后老师会找他们聊一聊[the teacher talks with them]。结果（As a result,…）老师的几句话可以帮到这些学生（make a difference to other people）。而且学生也愿意告诉老师自己的问题[students are willing to tell the teacher about their problems]。",
    "g": "情绪",
    "p": ["It depends, but usually…", "mainly because…", "For example,…", "As a result,…", "make a difference to other people"]
  },
  "new-happy-person||How can the arts spread positive emotions in society?": {
    "a": "我觉得电影和音乐最能让人开心。主要是因为（mainly because…）这些东西很简单，大家都看得懂（easy to follow），它们也帮我忘掉不开心的事（it helps me forget about…）。比如（For example,…）很多人下班以后看一集电视剧[they watch one episode of a TV show]，然后他们可以好好休息（relax after a long day）。所以（That's why…）大家的心情都会好一点[people feel better]。而且很多人和朋友一起看，他们聊得很开心[they talk happily]。",
    "g": "情绪",
    "p": ["mainly because…", "easy to follow", "it helps me forget about…", "For example,…", "relax after a long day", "That's why…"]
  },
  "new-happy-person||When do you think people are happiest?": {
    "a": "我觉得人们和家人朋友在一起的时候最开心。主要是因为（mainly because…）他们和家人朋友在一起的时候很放松，他们可以说心里的话[they can say what they really think]。比如（For example,…）很多人周末和朋友一起出去吃饭（eat out with friends），他们聊得很开心[they talk very happily]。吃完以后他们一起去散步（go for a walk after dinner）。所以（That's why…）我觉得这种时候人最开心[this is the happiest time for them]。而且他们做成一件事的时候，也会很有成就感（a real sense of achievement）。",
    "g": "情绪",
    "p": ["mainly because…", "a real sense of achievement", "For example,…", "eat out with friends", "go for a walk after dinner", "That's why…"]
  },
  "new-local-famous-person||Is it always good to be a popular student at school?": {
    "a": "不一定（Not really.），我觉得这件事有好的一面，也有坏的一面（it has both good and bad sides）。主要是因为（mainly because…）如果一个学生的朋友很多，他要照顾很多人[he has to look after a lot of people]，他的压力也很大。比如（For example,…）很多受欢迎的学生每天都有人找他们玩[other students ask them to play every day]，所以他们觉得很累[so they feel very tired]。所以（That's why…）我觉得有几个真正的朋友就够了。而且真正的朋友在我们有问题的时候会帮我们[real friends help us when we have problems]。",
    "g": "情绪",
    "p": ["Not really.", "it has both good and bad sides", "mainly because…", "For example,…", "That's why…"]
  },
  "new-local-famous-person||Why are some students popular?": {
    "a": "我觉得他们对别人很好[they are kind to other people]。主要是因为（mainly because…）他们真的可以帮到别人（make a difference to other people）。比如（For example,…）很多学生会帮同学看作业里的问题[they help with the problems in the homework]，所以别的同学都很喜欢他们[so the other students all like them]。所以（That's why…）我们和这样的人在一起，也可以学会为别人着想（it teaches you to think about others）。而且和他们在一起的时候，我们也觉得很开心[we also feel very happy]。",
    "g": "关系",
    "p": ["mainly because…", "make a difference to other people", "For example,…", "That's why…", "it teaches you to think about others"]
  },
  "new-happy-important-decision||How can we tell the difference between an important and an easy decision?": {
    "a": "我觉得我们要看这个决定花多少钱[how much money the decision costs]。主要是因为（mainly because…）重要的决定跟钱和工作有关系，它也影响我们有没有稳定的收入（a stable income）。比如（For example,…）今天晚上吃什么只要几十块钱[it only costs a few dozen yuan]，但是买房子要花几十万[buying a house costs a lot more]。所以（That's why…）花钱多的决定就是重要的决定。而且这些决定也影响我们的家人[these decisions also affect our family]。",
    "g": "钱",
    "p": ["mainly because…", "a stable income", "For example,…", "That's why…"]
  },
  "new-happy-important-decision||Do you think it is a good idea to make a small decision every day?": {
    "a": "是的（Yes, definitely.），我觉得每天做一些小决定很好。主要是因为（mainly because…）我们可以分成很多小步（break it down into small steps），然后我们慢慢做完大事[then we finish the big thing slowly]。比如（For example,…）很多人每天早上先定三件要做的事[they choose three things to do]，然后他们晚上检查做完了没有[then they check in the evening]。结果（As a result,…）一个月以后，他们可以看到真的有进步（see real progress）。而且他们每天都觉得很有成就感[they feel a sense of achievement every day]。",
    "g": "目标",
    "p": ["Yes, definitely.", "mainly because…", "break it down into small steps", "For example,…", "As a result,…", "see real progress"]
  },
  "new-happy-important-decision||What little decisions do people make every day?": {
    "a": "我觉得大部分是吃什么、怎么去上班[how to get to work]这样的小事。主要是因为（mainly because…）大家都想少花一点钱（keep the costs down），他们也想省一点时间[they also want to save time]。比如（For example,…）很多人每天在家做一点简单的东西（cook something simple at home），因为这样比较便宜[because this is cheaper]。他们周末才和朋友出去吃（eat out with friends）。所以（That's why…）人们每天都要做这些小决定。而且和朋友一起吃饭的时候，他们也很开心[they are also very happy]。",
    "g": "钱",
    "p": ["mainly because…", "keep the costs down", "For example,…", "cook something simple at home", "eat out with friends", "That's why…"]
  },
  "new-happy-important-decision||What if people in a group have different opinions on a decision?": {
    "a": "我觉得我们应该先听每个人说完[we should listen to everyone first]。主要是因为（mainly because…）每个人负责一个部分（be responsible for one part of…），所以大家的想法不一样，这很正常。比如（For example,…）在很多公司里，每个人做自己擅长的事（each do what we're good at），他们开会的时候会一起投票[they vote together in the meeting]。结果（As a result,…）大家一起决定比一个人决定快很多（it's much faster than working alone）。而且每个人的压力也小一点[everyone has less stress]。",
    "g": "关系",
    "p": ["mainly because…", "be responsible for one part of…", "For example,…", "each do what we're good at", "As a result,…", "it's much faster than working alone"]
  },
  "new-happy-important-decision||Do you think most of people’s decisions are made in their 20s?": {
    "a": "不一定（Not really.），我觉得后面还有很多大决定。主要是因为（mainly because…）人们以后还要换工作，也要买房子，这些事都要花很多钱[these things all cost a lot of money]。比如（For example,…）很多人三十多岁的时候才决定去哪个城市工作[they decide which city to work in]，因为大城市的工资更高[the pay in big cities is higher]。我以前觉得（I used to think…）在老家上班很好，现在我觉得（now I think…）去大城市更好。所以（That's why…）人一辈子都在做决定[people make decisions all their life]。",
    "g": "钱",
    "p": ["Not really.", "mainly because…", "For example,…", "I used to think…", "now I think…", "That's why…"]
  },
  "new-happy-important-decision||Which is better, to make a decision quickly or slowly?": {
    "a": "这个看情况（It depends, but usually…），小事我们可以很快决定。主要是因为（mainly because…）我们遇到大事的时候不能太快，我会先给自己定一个明确的目标（set myself a clear goal），然后我把这件事分成很多小步（break it down into small steps）。比如（For example,…）很多人很快就决定晚上吃什么[they decide what to eat very quickly]，但是他们换工作以前会想几个月，因为这跟他们以后的目标有关系[because this is about their future goals]。所以（That's why…）事情不一样，决定的速度也不一样。而且大事也要跟家里人商量[we also need to talk with our family about big things]。",
    "g": "目标",
    "p": ["It depends, but usually…", "mainly because…", "set myself a clear goal", "break it down into small steps", "For example,…", "That's why…"]
  },
};
