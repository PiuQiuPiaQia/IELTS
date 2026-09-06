// Part 3 答案覆盖表（2026-09-01 第五版）。
// 2026-09-06：同步飞书新题小问和索引；新增答案的中英句子与 data.js 一一对应。
// 键 = 题组 id + "||" + 英文题目原文；a = 中文答案（PREC 四句）；g = 该题该挑的角度；p = 用到的词块。
// 中文一律按英文语序写：每个小句都有主语和动词，连词写出来，不用中文流水句，方便逐句直译。
// 全角括号（）里是要背的核心词块；半角方括号[]里是普通英文提示，不用背，只为知道那句中文怎么说。
// 例子槽一律用泛指（For example, 很多人…），不用个人经历。
// app.js 有兜底：本文件若加载失败或语法出错，页面自动退回 data.js 的原答案，不会白屏。
window.P3_ANSWERS = {
  "new-language-speaker||Are there many people who can speak foreign languages in your country?": {
    "a": "是的（Yes, definitely.），现在会外语的人比以前多很多[more people can speak a foreign language now than before]。主要是因为（mainly because…）会外语的人有更多的工作机会（many more job opportunities），他们的工资也更高[and they also get a higher salary]。比如（For example,…）很多年轻人晚上用手机学英语[a lot of young people learn English on their phones at night]，因为他们想换一份工资更高的工作[because they want to change to a job with a higher salary]。所以（So…）我觉得将来会外语的人会更多[I think more people will speak a foreign language in the future]。而且很多人学外语[a lot of people learn a foreign language]，因为他们想交外国朋友[because they want to make foreign friends]。",
    "g": "钱",
    "p": ["Yes, definitely.", "mainly because…", "many more job opportunities", "For example,…", "So…"]
  },
  "new-language-speaker||Does speaking other languages help at work?": {
    "a": "是的（Yes, definitely.），外语对工作很有帮助[speaking a foreign language helps a lot at work]。主要是因为（mainly because…）会外语的人有更多的工作机会（many more job opportunities），他们也更容易拿到稳定的收入（a stable income）。比如（For example,…）很多公司给会外语的员工更高的工资[a lot of companies pay more money to staff who can speak a foreign language]，因为这些员工可以和外国客户谈生意[because these staff can do business with foreign customers]。所以（As a result,…）这些员工在公司里很受欢迎[these staff are very popular in the company]。而且他们的同事也常常找他们帮忙[and their workmates often ask them for help]。",
    "g": "钱",
    "p": ["Yes, definitely.", "mainly because…", "many more job opportunities", "a stable income", "For example,…", "As a result,…"]
  },
  "new-language-speaker||Do people learn any languages other than English?": {
    "a": "是的（Yes, definitely.），很多人也学日语和韩语[a lot of people also learn Japanese and Korean]。主要是因为（mainly because…）他们觉得日剧和韩剧很有意思[they think Japanese and Korean TV shows are very interesting]，所以他们也想听懂里面的话[so they want to understand what the actors say]。比如（For example,…）很多上班的人晚上学韩语[a lot of working people learn Korean in the evening]，因为他们想放松一下（relax after a long day）。所以（So…）我觉得将来学别的语言的人会更多[I think more people will learn other languages in the future]。而且他们学会以后会很开心[and they feel very happy after they learn it]。",
    "g": "情绪",
    "p": ["Yes, definitely.", "mainly because…", "For example,…", "relax after a long day", "So…"]
  },
  "new-language-speaker||Why is it easier for children to learn new things  than for adults?": {
    "a": "我觉得孩子学东西比大人快[I think children learn things faster than adults]。主要是因为（mainly because…）孩子不怕说错，所以他们上课的时候一点也不紧张[children are not afraid of making mistakes, so they are not nervous in class]，而且他们愿意试新的东西（keep an open mind）。比如（For example,…）很多小学生在课上大声读英语，他们一点也不害羞[a lot of primary school students read English aloud in class, and they are not shy]。所以（So…）他们可以很快看到真的进步（see real progress）。而且他们的老师也常常鼓励他们[and their teachers often encourage them]。",
    "g": "情绪",
    "p": ["mainly because…", "keep an open mind", "For example,…", "So…", "see real progress"]
  },
  "new-language-speaker||How do people learn new things?": {
    "a": "这个看情况（It depends, but usually…），不过现在大部分人在网上自己学[but now most people learn by themselves online]。主要是因为（mainly because…）网上有很多免费的视频，所以他们不用花钱去上课[there are a lot of free videos online, so they do not need to pay for a class]。比如（For example,…）很多人想学做饭[a lot of people want to learn cooking]，他们先看免费的视频[they watch the free videos first]，然后他们在家做一些简单的菜（cook something simple at home）。所以（As a result,…）大部分人省下了很多钱[most people save a lot of money]。而且他们在家学也更放松[and they also feel more relaxed when they learn at home]。",
    "g": "钱",
    "p": ["It depends, but usually…", "mainly because…", "For example,…", "cook something simple at home", "As a result,…"]
  },
  "new-language-speaker||What is the most important thing for learning a language well?": {
    "a": "我觉得最重要的是每天练习（stick to a routine）。最主要的原因是（The main reason is that…）我们要先给自己定一个清楚的目标（set myself a clear goal），然后我们每天做一点[and then we do a little every day]。比如（For example,…）很多学生每天早上背二十个单词，他们从来不间断[a lot of students learn twenty new words every morning, and they never stop]。所以他们一个月以后就能看到真的进步（see real progress）。而且他们可以找同学一起练习[and they can practise together with their classmates]。",
    "g": "目标",
    "p": ["stick to a routine", "The main reason is that…", "set myself a clear goal", "For example,…", "see real progress"]
  },
  "new-successful-businessperson||Why do some people start their own business?": {
    "a": "我觉得很多人想自己做决定[I think a lot of people want to make their own decisions]。最主要的原因是（The main reason is that…）他们想自己开一家店（run my own business），因为他们成功以后会很有成就感（a real sense of achievement）。比如（For example,…）现在很多年轻人开小咖啡店[now a lot of young people open small coffee shops]，他们每天很忙，但是他们很开心[they are busy every day, but they are very happy]。所以（So…）有些人愿意辛苦一点，因为他们想自己当老板[some people would rather work harder, because they want to be their own boss]。而且他们自己开店可以赚更多的钱[and they can make more money if they run their own shop]。",
    "g": "情绪",
    "p": ["The main reason is that…", "run my own business", "a real sense of achievement", "For example,…", "So…"]
  },
  "new-successful-businessperson||Should governments provide financial support to start-ups?": {
    "a": "我觉得政府应该帮助小公司（the government should support…）。主要是因为（mainly because…）小公司刚开始要花很多钱[small companies have to spend a lot of money at the beginning]，政府给钱可以帮他们减少成本（save money）。比如（For example,…）很多小饭馆开门的时候拿过政府的补贴[a lot of small restaurants got money from the government when they opened]，所以他们付得起房租[so they could pay the rent]。所以（As a result,…）这些店活了下来[these shops stayed open]，而且它们给了大家更多的工作机会（many more job opportunities）。",
    "g": "钱",
    "p": ["the government should support…", "mainly because…", "save money", "For example,…", "As a result,…", "many more job opportunities"]
  },
  "new-successful-businessperson||Do most people prefer shopping at big stores or small stores?": {
    "a": "这个看情况（It depends, but usually…），不过大部分人喜欢去大超市[but most people like going to big supermarkets]。最主要的原因是（The main reason is that…）大超市的东西很便宜[things in big supermarkets are very cheap]，所以顾客可以省钱（save money），而且他们可以选的东西更多（there's a lot more choice now）。比如（For example,…）很多家庭一个星期去一次大超市[a lot of families go to a big supermarket once a week]，因为大超市的菜比小店便宜[because the vegetables in a big supermarket are cheaper than in a small shop]。所以（So…）我觉得大超市更受欢迎[I think big supermarkets are more popular]。而且很多人喜欢跟家人一起去大超市[and many people like going to a big supermarket with their family]。",
    "g": "钱",
    "p": ["It depends, but usually…", "The main reason is that…", "save money", "there's a lot more choice now", "For example,…", "So…"]
  },
  "new-successful-businessperson||What makes a business successful?": {
    "a": "我觉得最重要的是听顾客的意见（listen to what customers say）。主要是因为（mainly because…）顾客满意以后他们会再来，而且他们会带朋友一起来[customers will come back if they are happy, and they will bring their friends]。比如（For example,…）很多小饭馆的老板会问客人菜好不好吃[a lot of small restaurant owners ask customers if the food is nice]，他们也记得住老顾客的名字[and they remember the names of their regular customers]。所以（As a result,…）这些店一直有很多客人[these restaurants always have a lot of customers]。而且这些店也能赚到更多的钱[and these restaurants can also make more money]。",
    "g": "关系",
    "p": ["listen to what customers say", "mainly because…", "For example,…", "As a result,…"]
  },
  "new-successful-businessperson||What makes a business fail?": {
    "a": "我觉得很多店关门是因为钱的问题[I think a lot of shops close because of money problems]。最主要的原因是（The main reason is that…）房租和工资都很贵[the rent and wages are both very high]，所以老板很难减少成本（save money）。比如（For example,…）有些小饭馆的东西卖得很贵[some small restaurants sell their food at high prices]，所以客人只去一次，然后他们不再回来[so customers only go once, and then they do not come back]。所以（As a result,…）如果老板不听顾客的意见（listen to what customers say），他的生意就做不好[his business will not do well]。",
    "g": "钱",
    "p": ["The main reason is that…", "save money", "For example,…", "As a result,…", "listen to what customers say"]
  },
  "new-successful-businessperson||Is it easy to set up a new business in your country?": {
    "a": "我觉得不太容易（Not really.）。主要是因为（mainly because…）房租很贵，而且请人也要花很多钱[the rent is very high, and hiring people also costs a lot of money]，所以新老板很难减少成本（save money）。比如（For example,…）很多年轻人想开一家小店，但是他们看到房租以后就放弃了[a lot of young people want to open a small shop, but they give up when they see the rent]。所以（As a result,…）他们中的大部分人没有开自己的店（run my own business）。而且他们的家人也不支持他们[and their families do not support them either]。",
    "g": "钱",
    "p": ["Not really.", "mainly because…", "save money", "For example,…", "As a result,…", "run my own business"]
  },
  "new-successful-company-worker||Do you think governments should provide financial support to companies?": {
    "a": "我觉得政府应该帮助公司（the government should support…）。主要是因为（mainly because…）小公司赚钱不多[small companies do not make much money]，它们很难减少成本（save money）。比如（For example,…）很多小店拿到了政府的补贴，所以它们没有关门[a lot of small shops got money from the government, so they did not close down]。所以（As a result,…）店里的员工也保住了稳定的收入（a stable income）。而且他们的家人也不用担心[and their families do not need to worry either]。",
    "g": "钱",
    "p": ["the government should support…", "mainly because…", "save money", "For example,…", "As a result,…", "a stable income"]
  },
  "new-successful-company-worker||Do you think companies should donate money to help society?": {
    "a": "我觉得公司应该捐钱（Yes, definitely.）。最主要的原因是（The main reason is that…）公司捐一点钱就能帮助别人（make a difference to other people），因为很多人真的需要这些帮助[because a lot of people really need this help]。比如（For example,…）很多大公司给山区的学校捐书和电脑[a lot of big companies give books and computers to schools in poor areas]，然后这些孩子就有课本用了[and then these children have books to use]。所以（So…）每家公司出一点钱[if every company gives a little money]，这些小事加起来就能帮很多人（small changes add up）。而且大家也会更喜欢这样的公司[and people will like these companies more]。",
    "g": "关系",
    "p": ["Yes, definitely.", "The main reason is that…", "make a difference to other people", "For example,…", "So…", "small changes add up"]
  },
  "new-successful-company-worker||Do you think customer satisfaction is important for a company?": {
    "a": "我觉得这件事很重要（Yes, definitely.）。主要是因为（mainly because…）顾客满意以后他们会再来[customers will come back if they are happy]，所以公司要听顾客的意见（listen to what customers say）。比如（For example,…）很多奶茶店的店员会问客人要不要少放糖[a lot of milk tea shop staff ask customers if they want less sugar]，然后客人会把这家店推荐给朋友[and then customers recommend this shop to their friends]。所以（So…）这些店有很多老顾客[these shops have a lot of regular customers]。而且这些店每个月也能多赚一些钱[and these shops also make more money every month]。",
    "g": "关系",
    "p": ["Yes, definitely.", "mainly because…", "listen to what customers say", "For example,…", "So…"]
  },
  "new-medical-career||Do you think being a doctor is easy or difficult?": {
    "a": "我觉得当医生很难[I think it is hard to be a doctor]。最主要的原因是（The main reason is that…）医生每天要照顾病人的生命，所以他们的压力很大[doctors look after people's lives every day, so they are under a lot of pressure]，这也是很大的责任（it's a big responsibility）。比如（For example,…）很多医生每天工作十几个小时，他们下班的时候非常累[a lot of doctors work more than ten hours a day, and they are very tired when they finish work]。所以（So…）我觉得这份工作不轻松[I think this job is not easy]，但是医生也很有成就感（a real sense of achievement）。而且医生的收入比很多工作高[and doctors earn more money than people in many other jobs]。",
    "g": "情绪",
    "p": ["The main reason is that…", "it's a big responsibility", "For example,…", "So…", "a real sense of achievement"]
  },
  "new-medical-career||Do you think learning biology is interesting for children?": {
    "a": "我觉得孩子会喜欢生物课（Yes, definitely.）。主要是因为（mainly because…）这门课讲小动物和植物[this subject is about small animals and plants]，所以孩子觉得很有意思[so children think it is very interesting]，而且老师讲的东西也很好懂（easy to follow）。比如（For example,…）很多小学生在家种一颗豆子[a lot of primary school students grow a bean at home]，他们看到豆子长出来的时候很开心[they are very happy when they see the bean come up]。所以（So…）我觉得孩子都喜欢这样的课[I think children like this kind of lesson]。而且他们可以跟同学一起做这件事[and they can do it together with their classmates]。",
    "g": "情绪",
    "p": ["Yes, definitely.", "mainly because…", "easy to follow", "For example,…", "So…"]
  },
  "new-medical-career||Why do you some children want to become doctors?": {
    "a": "我觉得有些孩子想当医生，因为他们想帮助别人[I think some children want to be doctors, because they want to help other people]。最主要的原因是（The main reason is that…）孩子觉得医生可以真的帮到别人（make a difference to other people）。比如（For example,…）很多孩子生病的时候看过医生[a lot of children saw a doctor when they were ill]，医生很耐心地照顾他们[the doctors looked after them very kindly]，几天以后他们就好了[and they got better a few days later]。所以（So…）这些孩子从那以后就想当医生[these children have wanted to be doctors since then]，因为这份工作教他们关心别人（it teaches you to think about others）。而且当医生的收入也不错[and doctors also earn quite good money]。",
    "g": "关系",
    "p": ["The main reason is that…", "make a difference to other people", "For example,…", "So…", "it teaches you to think about others"]
  },
  "new-medical-career||Do you think governments should put a large amount of money into medical research?": {
    "a": "我觉得政府应该在这方面多花钱（the government should support…）。最主要的原因是（The main reason is that…）现在医生还治不好很多病[doctors still cannot cure many illnesses]，所以新药可以帮到很多人（make a difference to other people）。比如（For example,…）以前科学家研究出了疫苗，这些疫苗救了很多人的命[scientists made vaccines in the past, and these vaccines saved a lot of lives]。所以（So…）我觉得这些钱花得值[I think this money is well spent]。而且新药也可以帮每个家庭省下医药费[and new medicine can also save every family money]。",
    "g": "关系",
    "p": ["the government should support…", "The main reason is that…", "make a difference to other people", "For example,…", "So…"]
  },
  "new-childhood-friend||Do you still keep in touch with your friends from childhood? Why or why not?": {
    "a": "是的（Yes, definitely.），我和小时候的朋友还有联系[I still keep in touch with my childhood friends]。主要是因为（mainly because…）我们一起长大[we grew up together]，所以他们给我发消息的时候[when they send me a message]，我会尽快回复（get back to… as soon as I can）。比如（For example,…）现在很多人和老朋友一起出去吃饭（eat out with friends），他们一个月见一次[they meet once a month]。所以（So…）我们的关系一直很好[we still have a good friendship]。而且我们见面以后都很开心[and we are all very happy after we meet]。",
    "g": "关系",
    "p": ["Yes, definitely.", "mainly because…", "get back to… as soon as I can", "For example,…", "eat out with friends", "So…"]
  },
  "new-childhood-friend||How important is childhood friendship to children?": {
    "a": "我觉得小时候的朋友很重要[I think childhood friends are very important]。最主要的原因是（The main reason is that…）孩子和朋友一起玩的时候[when children play with their friends]，他们学会关心别人（it teaches you to think about others）。比如（For example,…）很多小孩子有好吃的东西[a lot of small children have some nice snacks]，他们会分给自己的朋友一半[a lot of small children share their snacks with their friends]。所以（So…）我觉得每个孩子都需要几个好朋友[I think every child needs a few good friends]。而且孩子和朋友在一起的时候很开心[and children are very happy when they are with their friends]。",
    "g": "关系",
    "p": ["The main reason is that…", "it teaches you to think about others", "For example,…", "So…"]
  },
  "new-childhood-friend||What do you think of communicating via social media?": {
    "a": "我觉得这件事有好的一面，也有不好的一面（it has both good and bad sides）。主要是因为（mainly because…）发消息很方便[sending messages is very easy]，但是每个人有时候都很忙（everyone gets busy sometimes），所以他们回消息很慢[so they reply very slowly]。比如（For example,…）很多人给朋友发消息[a lot of people send their friends a message]，可是他们的朋友第二天才回复[but their friends only reply the next day]。所以（So…）如果我有急事，我会直接打电话[if something is urgent, I will call them]。而且我等回复的时候也会有点着急[and I also feel a bit worried when I wait for a reply]。",
    "g": "关系",
    "p": ["it has both good and bad sides", "mainly because…", "everyone gets busy sometimes", "For example,…", "So…"]
  },
  "new-childhood-friend||Do you think online communication through social media will replace face-to-face communication?": {
    "a": "我觉得网上聊天不能代替见面（Not really.）。最主要的原因是（The main reason is that…）发消息帮我省了很多时间（it saves me a lot of time, but…），但是我看不出对方的语气[I cannot tell how the other person feels]。比如（For example,…）很多人周末和朋友一起出去吃饭（eat out with friends），他们可以聊两三个小时[they can talk for two or three hours]。所以（So…）我觉得见面还是最好的方式[I think meeting face to face is still the best way]。而且我们见面的时候更开心[and we are happier when we meet face to face]。",
    "g": "关系",
    "p": ["Not really.", "The main reason is that…", "it saves me a lot of time, but…", "For example,…", "eat out with friends", "So…"]
  },
  "new-childhood-friend||What's the difference between having younger friends and older friends?": {
    "a": "我觉得区别是我们聊的话题不一样[I think the difference is that we talk about different topics]。最主要的原因是（The main reason is that…）年纪大的朋友经历多[older friends have more experience]，所以我有问题的时候会找他们帮忙（turn to… for help）。比如（For example,…）很多年轻人和同龄的朋友一起打球，他们和年长的同事聊工作[a lot of young people play ball games with friends of the same age, and they talk about work with older workmates]。所以（So…）我想交这两种朋友[I want to make both kinds of friends]，因为我可以听到不同的想法（keep an open mind）。而且我和同龄的朋友在一起更放松[and I feel more relaxed when I am with friends of my own age]。",
    "g": "关系",
    "p": ["The main reason is that…", "turn to… for help", "For example,…", "So…", "keep an open mind"]
  },
  "new-childhood-friend||Has technology changed people's friendships? How?": {
    "a": "我觉得变化很大（Yes, definitely.）。主要是因为（mainly because…）发消息帮我们省了很多时间（it saves me a lot of time, but…），但是我们见面的次数变少了[but we meet each other less often]。比如（For example,…）很多人和朋友一起出去吃饭（eat out with friends），可是他们坐下以后一直看手机[but they look at their phones after they sit down]。所以（As a result,…）我们联系更方便了[it is easier for us to keep in touch]，可是我们的感情不一定更好[our friendships are not always closer]。而且很多人看手机的时候会觉得有点孤单[and many people feel a bit lonely when they look at their phones]。",
    "g": "关系",
    "p": ["Yes, definitely.", "mainly because…", "it saves me a lot of time, but…", "For example,…", "eat out with friends", "As a result,…"]
  },
  "new-home-gardener||What are the advantages of growing vegetables or flowers at home?": {
    "a": "我觉得最大的好处是我们可以放松（relax after a long day）。最主要的原因是（The main reason is that…）我们浇水的时候不用想别的事[we do not need to think about anything else when we water the plants]，所以这可以让我忘掉工作（it helps me forget about…）。比如（For example,…）很多人下班以后给阳台上的小番茄浇水[a lot of people water the small tomatoes on their balcony after work]，他们浇完以后觉得很放松[they feel very relaxed after they finish]。所以（So…）我觉得在家种点东西很好[I think growing something at home is really nice]。而且他们也可以省下买菜的钱[and they can also save the money they spend on vegetables]。",
    "g": "情绪",
    "p": ["relax after a long day", "The main reason is that…", "it helps me forget about…", "For example,…", "So…"]
  },
  "new-home-gardener||Do many people grow vegetables or flowers at home in your country?": {
    "a": "是的（Yes, definitely.），我们这里很多人在家种花和种菜[a lot of people here grow flowers and vegetables at home]。主要是因为（mainly because…）这件事不用花很多钱[this does not cost much money]，所以他们可以减少开销（save money）。比如（For example,…）很多老人在阳台上种小葱和青菜[a lot of old people grow spring onions and greens on their balcony]，所以他们买菜的时候可以少花一点钱[so they spend less money when they buy food]。所以（As a result,…）这几年种花种菜的人变多了[more and more people grow plants at home now]。而且他们照顾这些植物的时候也很开心[and they are also very happy when they look after these plants]。",
    "g": "钱",
    "p": ["Yes, definitely.", "mainly because…", "save money", "For example,…", "As a result,…"]
  },
  "new-home-gardener||Is it easy to grow plants at home?": {
    "a": "这个看情况（It depends, but usually…），不过常见的花草不难养[common plants are not hard to grow]。主要是因为（mainly because…）这些花草很便宜，所以人们不用花很多钱[these plants are very cheap, so people do not need to spend much money]，而且网上的教程也很好懂（easy to follow）。比如（For example,…）很多人在花市花十块钱买一盆绿萝，然后他们养了两三年[a lot of people buy a plant for ten yuan at the flower market, and then they keep it for two or three years]。所以（So…）我觉得在家种花很容易[I think growing flowers at home is very easy]。而且他们看到植物长大的时候很开心[and they are very happy when they see the plants grow]。",
    "g": "钱",
    "p": ["It depends, but usually…", "mainly because…", "easy to follow", "For example,…", "So…"]
  },
  "new-home-gardener||Why do some people like to grow plants?": {
    "a": "我觉得很多人种花是想放松（relax after a long day）。最主要的原因是（The main reason is that…）他们上班很累[they get very tired at work]，他们照顾植物的时候可以呼吸新鲜空气（get some fresh air）。比如（For example,…）很多人回家以后先给阳台上的花浇水[a lot of people water the flowers on their balcony first after they get home]，然后他们觉得舒服多了[and then they feel much better]。所以（So…）现在喜欢种花的人很多[a lot of people like growing flowers now]。而且他们也可以省一点买菜的钱[and they can also save a little money on vegetables]。",
    "g": "情绪",
    "p": ["relax after a long day", "The main reason is that…", "get some fresh air", "For example,…", "So…"]
  },
  "new-home-gardener||Why do some people prefer to grow their own fruits and vegetables instead of buying them from the market?": {
    "a": "我觉得很多人想省钱[I think a lot of people want to save money]。最主要的原因是（The main reason is that…）他们自己种菜不用花很多钱[growing their own vegetables does not cost them much]，所以他们可以减少开销（save money）。比如（For example,…）很多家庭在阳台上种西红柿[a lot of families grow tomatoes on their balcony]，所以他们一个夏天都不用买西红柿[so they do not need to buy tomatoes for the whole summer]。所以（So…）有阳台的人都想自己种[people with a balcony all want to grow their own]。而且他们吃自己种的菜很有成就感（a real sense of achievement）。",
    "g": "钱",
    "p": ["The main reason is that…", "save money", "For example,…", "So…", "a real sense of achievement"]
  },
  "new-home-gardener||Do you think students should learn to grow plant?": {
    "a": "我觉得学生应该学着种植物（Yes, definitely.），因为这也是一种责任（it's a big responsibility）。主要是因为（mainly because…）植物需要每天浇水[plants need watering every day]，所以学生照顾植物的时候会学着关心别人（it teaches you to think about others）。比如（For example,…）很多学校在教室门口放几盆花[a lot of schools put a few pots of flowers by the classroom door]，学生每天轮流浇水[students take turns to water them every day]，他们也一起决定谁管哪一盆[and they decide together who looks after which plant]。所以（So…）我觉得学校可以多做这样的活动[I think schools can do more activities like this]。而且学生照顾植物的时候也很放松[and students feel relaxed when they look after plants]。",
    "g": "关系",
    "p": ["Yes, definitely.", "it's a big responsibility", "mainly because…", "it teaches you to think about others", "For example,…", "So…"]
  },
  "new-success-after-difficulty||In your country, what industry is it easier to be successful in?": {
    "a": "我觉得和手机有关的行业更容易成功[I think it is easier to succeed in jobs about mobile phones]。最主要的原因是（The main reason is that…）大家买东西和看视频都用手机[everyone uses a phone to shop and to watch videos]，所以这个行业有更多的工作机会（many more job opportunities）。比如（For example,…）现在很多年轻人做短视频[now a lot of young people make short videos]，他们每个月有稳定的收入（a stable income）。所以（So…）很多年轻人想做这一行[a lot of young people want to work in this field]。而且他们的家人也支持他们[and their families support them too]。",
    "g": "钱",
    "p": ["The main reason is that…", "many more job opportunities", "For example,…", "a stable income", "So…"]
  },
  "new-success-after-difficulty||What's the difference between ordinary people and successful people?": {
    "a": "我觉得区别是能不能坚持[I think the difference is whether they can keep going]。最主要的原因是（The main reason is that…）成功的人先给自己定一个清楚的目标（set myself a clear goal），然后他们分解这个目标（break it down into small steps）。比如（For example,…）很多学生准备考试[a lot of students get ready for an exam]，他们每天只背五十个单词[they learn only fifty new words every day]，一年以后他们通过了考试[and they passed the exam one year later]。所以（As a result,…）能坚持的人可以看到真的进步（see real progress）。而且他们后来也更容易赚到钱[and they also find it easier to make money later]。",
    "g": "目标",
    "p": ["The main reason is that…", "set myself a clear goal", "break it down into small steps", "For example,…", "As a result,…", "see real progress"]
  },
  "new-success-after-difficulty||What are the factors leading to people's success?": {
    "a": "我觉得最重要的是有目标，而且我们要坚持[I think the most important things are a goal and hard work]。主要是因为（mainly because…）如果我们定了一个清楚的目标（set myself a clear goal），我们每天就知道该做什么[then we know what to do every day]。比如（For example,…）很多学生每天固定学习两个小时（stick to a routine）。所以（As a result,…）一个月以后他们可以看到真的进步（see real progress）。而且身边有人支持也很重要[and support from the people around them is also important]。",
    "g": "目标",
    "p": ["mainly because…", "set myself a clear goal", "For example,…", "stick to a routine", "As a result,…", "see real progress"]
  },
  "new-long-term-goal||What goals should a society have?": {
    "a": "我觉得社会应该让大家生活得安心[I think a society should help people feel safe]。最主要的原因是（The main reason is that…）普通人最在乎工作和收入[ordinary people care most about their jobs and their money]，他们也想要稳定的收入（a stable income）。比如（For example,…）我们这里这两年开了很多新公司[a lot of new companies have opened here in the last two years]，这些公司给了大家更多的工作机会（many more job opportunities）。所以（So…）我觉得政府应该先做好这件事[I think the government should do this well first]。而且社会也应该让大家过得开心[and a society should also help people live happily]。",
    "g": "钱",
    "p": ["The main reason is that…", "a stable income", "For example,…", "many more job opportunities", "So…"]
  },
  "new-long-term-goal||Do people need to have goals?": {
    "a": "是的（Yes, definitely.），我觉得每个人都需要目标[I think everyone needs a goal]。主要是因为（mainly because…）如果我们定了一个清楚的目标（set myself a clear goal），我们每天就知道该做什么[then we know what to do every day]。比如（For example,…）很多学生考试以前每天早上背单词[a lot of students learn new words every morning before an exam]，他们从来不间断（stick to a routine）。所以他们一个月以后就能看到真的进步（see real progress）。而且有目标的人也更容易找到好工作[and people with a goal also find it easier to get a good job]。",
    "g": "目标",
    "p": ["Yes, definitely.", "mainly because…", "set myself a clear goal", "For example,…", "stick to a routine", "see real progress"]
  },
  "new-long-term-goal||What goals do people at your age have?": {
    "a": "我这个年纪的人最想要稳定的收入（a stable income）。主要是因为（mainly because…）我们要自己付房租和饭钱[we have to pay the rent and buy our own food]，而且养家也是很大的责任（it's a big responsibility）。比如（For example,…）现在很多年轻人在找可以长期做的工作[now a lot of young people look for a job they can do for a long time]，因为这样的工作每个月都发工资[because this kind of job pays them every month]。所以（So…）我觉得大家的目标都差不多[I think most people have similar goals]。而且我们也想有时间陪家人[and we also want time to spend with our family]。",
    "g": "钱",
    "p": ["a stable income", "mainly because…", "it's a big responsibility", "For example,…", "So…"]
  },
  "new-long-term-goal||Is it necessary to give advice to children?": {
    "a": "我觉得有必要（Yes, definitely.）。最主要的原因是（The main reason is that…）孩子的经历少[children do not have much experience]，所以他们遇到困难的时候会找大人帮忙（turn to… for help）。比如（For example,…）学生选学校的时候[when students choose a school]，他们的父母可以讲讲自己的经历[their parents can talk about their own experience]。所以（So…）父母应该给孩子建议[parents should give children advice]，但是他们也要听孩子的想法（keep an open mind）。而且孩子听了建议以后没有那么紧张[and children feel less nervous after they listen to the advice]。",
    "g": "关系",
    "p": ["Yes, definitely.", "The main reason is that…", "turn to… for help", "For example,…", "So…", "keep an open mind"]
  },
  "new-long-term-goal||What goals do young people usually have?": {
    "a": "我觉得年轻人最想做好自己的工作[I think young people mainly want to do well at work]。主要是因为（mainly because…）他们刚毕业的时候有很多工作机会（many more job opportunities），所以他们想找一份工资高的工作[so they want to find a job with a good salary]。比如（For example,…）现在很多大学生想进大公司[a lot of university students want to join big companies]，因为大公司给的工资更高[because big companies pay more money]，还有一些人想自己开店（run my own business）。所以（So…）他们的目标大多和钱有关[most of their goals are about money]。而且他们也想让父母放心[and they also want their parents to stop worrying]。",
    "g": "钱",
    "p": ["mainly because…", "many more job opportunities", "For example,…", "run my own business", "So…"]
  },
  "new-long-term-goal||What should people do to achieve their goals?": {
    "a": "我觉得最重要的是分解大目标（break it down into small steps）。最主要的原因是（The main reason is that…）目标太大的时候很多人会害怕[a lot of people feel scared when the goal is too big]，但是如果他们每天做一点，这件事就不难[but if they do a little every day, it is not hard]。比如（For example,…）很多学生每天早上背二十个单词[a lot of students learn twenty words every morning]，他们每天都这样做（stick to a routine）。所以他们半年以后可以看到真的进步（see real progress）。而且他们可以找朋友一起做这件事[and they can do it together with a friend]。",
    "g": "目标",
    "p": ["break it down into small steps", "The main reason is that…", "For example,…", "stick to a routine", "see real progress"]
  },
  "new-long-held-ambition||What kinds of ambitions do people have?": {
    "a": "我觉得志向有两种，一种是为了工作，另一种是为了生活[I think there are two kinds of ambition, one is for work and the other is for life]。最主要的原因是（The main reason is that…）大部分人先想找一份好工作[most people want to find a good job first]，因为他们想要稳定的收入（a stable income）。比如（For example,…）现在很多年轻人想开一家小咖啡店（run my own business），因为他们想赚更多的钱[because they want to make more money]。所以（So…）大家的想法不一样[people have different ideas]，但是他们都想过好一点的生活[they all want a better life]。而且有些人的志向是多陪家人[and some people's ambition is to spend more time with their family]。",
    "g": "钱",
    "p": ["The main reason is that…", "a stable income", "For example,…", "run my own business", "So…"]
  },
  "new-long-held-ambition||What's the importance of having ambition?": {
    "a": "我觉得有志向很重要[I think it is important to have an ambition]。最主要的原因是（The main reason is that…）有志向的人会给自己定一个清楚的目标（set myself a clear goal），所以他们每天都知道该做什么[so they know what to do every day]。比如（For example,…）很多年轻人想去国外读书，所以他们每天都学英语[a lot of young people want to study abroad, so they study English every day]。所以（So…）有志向的人可以坚持很久[people with ambition can keep going for a long time]，他们也更容易看到真的进步（see real progress）。而且他们做事的时候更开心[and they are happier when they work]。",
    "g": "目标",
    "p": ["The main reason is that…", "set myself a clear goal", "For example,…", "So…", "see real progress"]
  },
  "new-long-held-ambition||What are the advantages of feeling ambitious towards your work?": {
    "a": "我觉得对工作有志向有很多好处[I think there are a lot of advantages if you are ambitious at work]。主要是因为（mainly because…）这样的人愿意多做一点[these people are willing to do a bit more]，所以他们做完以后很有成就感（a real sense of achievement）。比如（For example,…）很多员工接了很难的工作，他们忙了三个月，但是他们最后很开心[a lot of workers take a hard job, and they are busy for three months, but they are happy in the end]。所以（As a result,…）他们后来有更多的工作机会（many more job opportunities）。而且他们的同事也更喜欢和他们一起工作[and their workmates also like working with them more]。",
    "g": "情绪",
    "p": ["mainly because…", "a real sense of achievement", "For example,…", "As a result,…", "many more job opportunities"]
  },
  "new-long-held-ambition||Do you think children should have ambitions?": {
    "a": "我觉得孩子应该有自己的志向（Yes, definitely.）。最主要的原因是（The main reason is that…）如果孩子从小定一个清楚的目标（set myself a clear goal），他们长大以后做事更有方向[they will know what they want when they grow up]。比如（For example,…）很多小学生想学好英语，所以他们每天早上都读课文[a lot of primary school students want to learn English well, so they read their textbook every morning]。所以（So…）我觉得这是好事[I think this is a good thing]，父母也可以帮孩子分解目标（break it down into small steps）。而且孩子做到的时候会很开心[and children are very happy when they do it]。",
    "g": "目标",
    "p": ["Yes, definitely.", "The main reason is that…", "set myself a clear goal", "For example,…", "So…", "break it down into small steps"]
  },
  "new-long-held-ambition||Why should parents encourage children to have ambitions?": {
    "a": "我觉得父母的鼓励对孩子很重要[I think support from parents is very important for children]。主要是因为（mainly because…）孩子还小[children are still young]，所以他们遇到问题的时候会先找父母帮忙（turn to… for help）。比如（For example,…）很多孩子想学画画，他们的父母每个星期送他们去上课[a lot of children want to learn drawing, and their parents take them to a class every week]。所以（As a result,…）有人支持的孩子可以坚持更久[children with support can keep going longer]，他们也能看到真的进步（see real progress）。而且孩子知道父母支持他们的时候会很开心[and children are very happy when they know their parents support them]。",
    "g": "关系",
    "p": ["mainly because…", "turn to… for help", "For example,…", "As a result,…", "see real progress"]
  },
  "new-long-held-ambition||Do you think parents should stop children from thinking too big?": {
    "a": "我觉得父母不应该直接拦着孩子（Not really.）。最主要的原因是（The main reason is that…）孩子有大的梦想不是坏事[it is not a bad thing if children have big dreams]，父母可以帮他们分解目标（break it down into small steps）。比如（For example,…）如果孩子说他想当科学家[if a child says he wants to be a scientist]，他的父母可以先让他学好这学期的数学[his parents can ask him to do well in maths this term]。所以（So…）父母不用马上说这件事不可能[parents do not need to say it is impossible right away]，因为孩子慢慢做也能看到真的进步（see real progress）。而且父母鼓励孩子的时候，孩子会更开心[and children are happier when their parents encourage them]。",
    "g": "目标",
    "p": ["Not really.", "The main reason is that…", "break it down into small steps", "For example,…", "So…", "see real progress"]
  },
  "new-environmental-law-story||What kinds of rules do schools in China have?": {
    "a": "我觉得中国学校的规矩主要是管纪律的[I think school rules in China are mainly about good behaviour]。最主要的原因是（The main reason is that…）学校里人很多[there are a lot of people at school]，得有统一的规矩[so there have to be the same rules for everyone]，大家才不会乱[so things don't get messy]。比如（For example,…）学生要穿校服、按时到校，上课不能玩手机[wear a uniform, arrive on time, no phones in class]。所以（So…）这些规矩听起来严[these rules sound strict]，但它们能保证大家安全（keep people safe）。",
    "g": "规矩",
    "p": ["The main reason is that…", "For example,…", "So…", "keep people safe"]
  },
  "new-environmental-law-story||Do you think school rules are important?": {
    "a": "我觉得校规很重要（Yes, definitely.）。主要是因为（mainly because…）如果学校有规定，学生就知道什么可以做[if a school has rules, students know what they can do]，而且学校里也更安全（keep people safe）。比如（For example,…）很多班级有值日表[a lot of classes have a cleaning schedule]，每个学生管一天，所以教室一直很干净[every student cleans the classroom for one day, so the classroom is always clean]。所以（So…）我觉得学校不是随便定这些规矩的[schools do not make these rules for no reason]，每一条都有它的道理（it's there for a reason）。",
    "g": "规矩",
    "p": ["Yes, definitely.", "mainly because…", "keep people safe", "For example,…", "So…", "it's there for a reason"]
  },
  "new-environmental-law-story||Are children unhappy with the school rules?": {
    "a": "这个看情况（It depends, but usually…），不过大部分孩子一开始会不高兴[but most children are unhappy at first]。主要是因为（mainly because…）学校不让他们用手机[the school does not let them use their phones]，所以他们觉得很不开心[so they feel very unhappy]，他们也觉得自己不自由[and they feel they are not free]。比如（For example,…）很多初中生刚入学的时候天天抱怨，可是过一段时间他们就习惯了[a lot of students complain when they start middle school, but they get used to it after a while]。所以（So…）他们长大以后就明白了[they understand it when they grow up]，因为学校的规定都有原因（it's there for a reason）。而且他们看到同学都遵守规定，所以他们也不生气了[and they see their classmates follow the rules too, so they are not angry any more]。",
    "g": "情绪",
    "p": ["It depends, but usually…", "mainly because…", "For example,…", "So…", "it's there for a reason"]
  },
  "new-environmental-law-story||What are the rules people should obey at work?": {
    "a": "我觉得上班最重要的是守时和守规矩（stick to the rules）。最主要的原因是（The main reason is that…）大家守一样的规矩[when everyone follows the same rules]，活儿才能顺顺利利[so the work goes smoothly]。比如（For example,…）大部分公司上班时间不让玩手机[most companies don't allow phones during work hours]，因为一分心就容易出错[they make mistakes if they lose focus]。所以（So…）这些规矩看着烦[these rules seem annoying]，其实是帮大家少出错、把事做好[they help everyone make fewer mistakes]。",
    "g": "规矩",
    "p": ["stick to the rules", "The main reason is that…", "For example,…", "So…"]
  },
  "new-environmental-law-story||What is the purpose of punishment?": {
    "a": "我觉得惩罚是为了让大家把规矩当回事[so people take the rules seriously]。最主要的原因是（The main reason is that…）如果做错了没有任何后果[if nothing happens when you do wrong]，就没人会在意规矩[nobody cares about the rules]。比如（For example,…）在学校上课玩手机[if you play on your phone in class at school]，老师会把手机收走[the teacher takes the phone away]；开车闯红灯要罚款[you get a fine for running a red light]。所以（So…）惩罚不是为了吓人[punishment is not to scare people]，而是为了保护大家的安全（keep people safe）。",
    "g": "规矩",
    "p": ["The main reason is that…", "For example,…", "So…", "keep people safe"]
  },
  "new-environmental-law-story||How can parents and teachers help children understand and follow rules?": {
    "a": "我觉得父母应该先给孩子讲清楚道理[explain the reason first]。主要是因为（mainly because…）孩子理解了这个原因以后[after children understand the reason]，他们就愿意去做[they are willing to do it]，而且他们知道每条规矩都有原因（it's there for a reason）。比如（For example,…）大部分父母会告诉孩子[most parents tell their children]，为什么他们不可以在马路上跑[why they cannot run on the road]。所以（So…）我觉得大人应该先自己做到[adults should follow the rules first]，然后孩子会慢慢守规矩（stick to the rules）。",
    "g": "规矩",
    "p": ["mainly because…", "it's there for a reason", "For example,…", "So…", "stick to the rules"]
  },
  "new-animal-story||Should schools teach children about animals?": {
    "a": "我觉得学校应该教孩子一些动物的知识（Yes, definitely.）。主要是因为（mainly because…）这样的课教你为别人着想（it teaches you to think about others），孩子会学着关心别的生命[children learn to care about other lives]。比如（For example,…）很多小学老师让学生一起照顾班里的小动物[look after a small animal together in class]，然后学生学会了跟别人合作[students learn to work with other people]。所以（So…）我觉得学校应该开这样的课[I think schools should offer this kind of lesson]，而且孩子上这种课的时候很开心[children are happy in this kind of lesson]。",
    "g": "关系",
    "p": ["Yes, definitely.", "mainly because…", "it teaches you to think about others", "For example,…", "So…"]
  },
  "new-animal-story||Some people think pets should not be kept in cities. What do you think?": {
    "a": "我不太同意这个说法（Not really.）。主要是因为（mainly because…）宠物给主人很多陪伴[a pet gives the owner a lot of company]，而且养宠物是很大的责任（it's a big responsibility）。比如（For example,…）我们这里很多老人一个人住[a lot of old people here live alone]，他们的猫每天陪着他们[their cat keeps them company every day]。所以（So…）我觉得城里的人可以养宠物[I think people in cities can keep pets]，很多人把宠物当成家里人（treat them as part of the family）。",
    "g": "关系",
    "p": ["Not really.", "mainly because…", "it's a big responsibility", "For example,…", "So…", "treat them as part of the family"]
  },
  "new-animal-story||Many people regard pets as members of their family. What do you think?": {
    "a": "我同意[I agree]，很多人把宠物当成家里人（treat them as part of the family）。主要是因为（mainly because…）他们每天喂宠物[they feed the pet every day]，也每天带宠物出门[and take it out every day]，所以他们对宠物有感情[they have a strong feeling for the pet]。比如（For example,…）我们这里很多人晚饭以后带狗出去走走（go for a walk after dinner），一家人一起走[the whole family walks together]。所以（So…）我觉得叫宠物家人很正常[it is normal to call a pet a family member]。而且宠物让家里人心情很好[the pet makes the family feel good]。",
    "g": "关系",
    "p": ["treat them as part of the family", "mainly because…", "For example,…", "go for a walk after dinner", "So…"]
  },
  "new-animal-story||Do many people keep pets in your country?": {
    "a": "是的，我们国家养宠物的人很多（Yes, definitely.）。主要是因为（mainly because…）现在很多人一个人住[a lot of people live alone now]，他们回到家以后可以跟宠物一起放松（relax after a long day）。比如（For example,…）很多年轻人下班以后觉得很累[a lot of young people feel tired after work]，但是他们看到自己的狗就很开心[they feel happy when they see their dog]。所以（So…）我觉得现在养宠物很普遍[keeping pets is very common now]。而且宠物让很多人不觉得孤单[pets stop many people feeling lonely]。",
    "g": "情绪",
    "p": ["Yes, definitely.", "mainly because…", "relax after a long day", "For example,…", "So…"]
  },
  "new-animal-story||What are the advantages of keeping a pet?": {
    "a": "我觉得最大的好处是宠物让人放松（relax after a long day）。主要是因为（mainly because…）很多人白天工作压力很大[they have a lot of stress at work]，他们回家以后需要一个东西陪着他们[they need something to keep them company]。比如（For example,…）很多人下班以后摸摸自己的猫[a lot of people pat their cat after work]，然后他们心情马上好一点[then they feel better right away]。所以（So…）我觉得养宠物对心情很有帮助[it really helps your mood]。而且养宠物也教你为别人着想（it teaches you to think about others）。",
    "g": "情绪",
    "p": ["relax after a long day", "mainly because…", "For example,…", "So…", "it teaches you to think about others"]
  },
  "new-animal-story||Why do people always tell children stories with animals?": {
    "a": "我觉得动物的故事对孩子来说很好懂（easy to follow）。主要是因为（mainly because…）孩子觉得大道理很无聊[children find big ideas boring]，但是他们很喜欢听小动物的故事[but they love listening to stories about small animals]。比如（For example,…）大部分父母会给孩子讲兔子和乌龟的故事[the story about the rabbit and the turtle]，然后孩子听得很开心[the children really enjoy it]。所以（So…）孩子更愿意听这样的故事[children are more willing to listen to this kind of story]。而且这样的故事教孩子为别人着想（it teaches you to think about others）。",
    "g": "情绪",
    "p": ["easy to follow", "mainly because…", "For example,…", "So…", "it teaches you to think about others"]
  },
  "new-ai-problem||What are the advantages and disadvantages of AI?": {
    "a": "我觉得 AI 有好的一面，也有不好的一面（it has both good and bad sides）。最主要的原因是（The main reason is that…）AI 可以帮公司省钱（save money），但是公司花在 AI 上的钱也不少[companies also pay a lot for AI]。比如（For example,…）现在很多公司用 AI 写广告[many companies use AI to write their adverts]，然后他们一年省下很多钱[they save a lot of money in a year]。所以（As a result,…）我会用 AI[I will use AI]，但是我不会全信 AI 说的话（I don't believe everything I read），我会自己查一查是不是真的（check if it's true）。",
    "g": "钱",
    "p": ["it has both good and bad sides", "The main reason is that…", "save money", "For example,…", "As a result,…", "I don't believe everything I read", "check if it's true"]
  },
  "new-ai-problem||Do you think people today should learn about AI technology?": {
    "a": "我觉得现在的人应该学一学 AI（Yes, definitely.）。最主要的原因是（The main reason is that…）会用 AI 的人有多得多的工作机会（many more job opportunities）。比如（For example,…）现在很多公司只招会用这些新工具的人[companies only hire people who can use these new tools]，而且他们给这样的员工更高的工资[they pay these workers more]。所以（As a result,…）我觉得我们应该早一点学会 AI[I think we should learn AI a bit earlier]，然后我们找工作会容易一点[it will be easier for us to find a job]。",
    "g": "钱",
    "p": ["Yes, definitely.", "The main reason is that…", "many more job opportunities", "For example,…", "As a result,…"]
  },
  "new-ai-problem||Should children learn to use AI?": {
    "a": "这个要看情况（It depends, but usually…），我觉得孩子可以学[I think children can learn it]，但是大人要在旁边看着[but adults should watch them]。主要是因为（mainly because…）孩子自己控制不了时间[children cannot control their own time]，所以父母要在旁边帮他们[parents need to help them]。比如（For example,…）很多父母跟孩子一起用 AI 查东西[parents look things up with their children]，然后他们一起看这个答案对不对[they check the answer together]。所以（So…）我觉得孩子可以学 AI，但是大人要陪着他们[but adults should be with them]，一起查一查 AI 说的是不是真的（check if it's true）。",
    "g": "关系",
    "p": ["It depends, but usually…", "mainly because…", "For example,…", "So…", "check if it's true"]
  },
  "new-ai-problem||How can AI help in our lives?": {
    "a": "我觉得 AI 最有用的地方是它帮我们省钱[it saves us money]。最主要的原因是（The main reason is that…）以前我们要花钱请别人做事[in the past we had to pay others to do things]，但是现在 AI 几秒钟就做完了[AI finishes it in a few seconds]，这样我们可以省钱（save money）。比如（For example,…）现在很多人用 AI 写英文邮件[many people write English emails with AI]，然后他们不用花钱请别人翻译[they do not pay anyone to translate it]。所以（As a result,…）AI 帮我省了很多时间[AI saves me a lot of time]，但是它有时也会说错[but sometimes it is wrong]，所以我会自己查一查是不是真的（check if it's true）。",
    "g": "钱",
    "p": ["The main reason is that…", "save money", "For example,…", "As a result,…", "check if it's true"]
  },
  "new-ai-problem||Do you think students are overly reliant on AI?": {
    "a": "我觉得学生确实用得太多了（Yes, definitely.）。最主要的原因是（The main reason is that…）很多学生离开 AI 以后会很不安[many students feel worried without AI]，他们对自己没有信心[they have no confidence in themselves]。比如（For example,…）大部分学生考试的时候不能用手机[most students cannot use phones during exams]，然后他们很紧张[then they get very nervous]。所以（As a result,…）我觉得学生应该少用一点（cut down on…），先自己想一想[and think for themselves first]，也要查一查 AI 说的是不是真的（check if it's true）。",
    "g": "情绪",
    "p": ["Yes, definitely.", "The main reason is that…", "For example,…", "As a result,…", "cut down on…", "check if it's true"]
  },
  "new-ai-problem||What can teachers do to stop students relying too much on AI?": {
    "a": "我觉得老师可以要求学生少用一点（cut down on…）。最主要的原因是（The main reason is that…）学生跟老师和同学在一起的时候[when students are together with teachers and classmates]，他们不好意思偷偷用 AI[they feel embarrassed to use AI quietly]。比如（For example,…）很多老师让学生先自己写十分钟[a lot of teachers let students write on their own for ten minutes first]，然后大家一起讨论这个题[then everyone discusses the question together]。所以（So…）老师可以把作业分成一小步一小步（break it down into small steps），而且老师可以让学生两个人一组做作业[students can work in pairs]。",
    "g": "关系",
    "p": ["cut down on…", "The main reason is that…", "For example,…", "So…", "break it down into small steps"]
  },
  "new-celebrity-advertisement||What are the advantages and disadvantages of advertisements?": {
    "a": "我觉得广告有好的一面，也有不好的一面（it has both good and bad sides）。最主要的原因是（The main reason is that…）好的广告告诉你哪里的东西便宜[a good advert tells you where things are cheap]，而且你很容易记住它（you remember it easily）。比如（For example,…）很多人在手机上看到超市打折的广告[an advert about a supermarket sale]，然后第二天他们去这家超市买东西[the next day they go to this supermarket to buy things]，这样他们省了钱[they save money]。但是有些广告不太老实（some ads are not honest），所以（As a result,…）我看广告的时候会小心一点[I am careful when I watch ads]。",
    "g": "钱",
    "p": ["it has both good and bad sides", "The main reason is that…", "you remember it easily", "For example,…", "some ads are not honest", "As a result,…"]
  },
  "new-celebrity-advertisement||Why are many advertisements endorsed by celebrities? How useful are they?": {
    "a": "我觉得名人出现的时候[when a celebrity appears]，广告很容易抓住你的注意力（it catches your attention）。最主要的原因是（The main reason is that…）公司想卖更多东西[companies want to sell more]，而且明星让你很容易记住这个广告（you remember it easily）。比如（For example,…）现在很多年轻人很喜欢一个歌手[a lot of young people really like a singer]，然后他们愿意多花钱买他广告里的饮料[they pay more for the drink in his advert]。所以（So…）这种广告很有用[this kind of advert is very useful]，公司可以卖出更多东西[the company can sell a lot more]，但是有些广告不太老实（some ads are not honest）。",
    "g": "钱",
    "p": ["it catches your attention", "The main reason is that…", "you remember it easily", "For example,…", "So…", "some ads are not honest"]
  },
  "new-celebrity-advertisement||What is the most important factor in an advertisement?": {
    "a": "我觉得最重要的是广告要抓住人的注意力（it catches your attention）。最主要的原因是（The main reason is that…）大家看手机的速度很快[people scroll through their phones very fast]，如果广告很无聊[if an advert is boring]，他们马上划走了[they scroll away at once]。比如（For example,…）很多人看到一个很好笑的开头[a lot of people see a very funny opening]，然后他们会看完整个广告[they watch the whole advert]。所以（So…）好的广告让你很容易记住这个牌子（you remember it easily）。而且好的广告可以帮公司卖出更多东西[the company can sell a lot more]。",
    "g": "情绪",
    "p": ["it catches your attention", "The main reason is that…", "For example,…", "So…", "you remember it easily"]
  },
  "new-celebrity-advertisement||Why are some advertisements boring?": {
    "a": "我觉得有些广告很无聊[I think some adverts are very boring]。最主要的原因是（The main reason is that…）它们每次都说一样的话[they say the same thing every time]，所以大家看的时候觉得很烦[people feel annoyed]，它们不能抓住你的注意力（it catches your attention）。比如（For example,…）很多人在电视上看到卖保健品的广告[a lot of people see adverts for health products on TV]，然后他们觉得很烦[then they feel annoyed]，他们马上换台[they change the channel at once]。所以（As a result,…）大部分人不喜欢这样的广告[most people do not like this kind of advert]，而且有些广告不太老实（some ads are not honest）。",
    "g": "情绪",
    "p": ["it catches your attention", "The main reason is that…", "For example,…", "As a result,…", "some ads are not honest"]
  },
  "new-celebrity-advertisement||Is advertising important for a company? Why?": {
    "a": "我觉得广告对一个公司很重要（Yes, definitely.）。最主要的原因是（The main reason is that…）如果没有人知道这个产品[if nobody knows about the product]，公司就赚不到钱[the company cannot make money]，而且我一般也在手机上看到新的牌子（I usually see… on my phone）。比如（For example,…）很多人先在手机上看到广告[a lot of people see the advert on their phone first]，然后他们去商店买这个东西[then they buy it in the shop]，这样公司就赚到钱了[the company makes money]。所以（So…）我觉得公司应该花钱做广告[I think companies should spend money on ads]，因为好广告会抓住人的注意力（it catches your attention）。",
    "g": "钱",
    "p": ["Yes, definitely.", "The main reason is that…", "For example,…", "I usually see… on my phone", "So…", "it catches your attention"]
  },
  "new-celebrity-advertisement||Which is more effective, online advertising or offline advertising?": {
    "a": "跟路边的大广告牌比（Compared with…），我觉得手机上的广告更有用[I think adverts on the phone are more useful]。最主要的原因是（The main reason is that…）在手机上做广告更便宜[advertising on the phone is cheaper]，公司可以省钱（save money），而且看到的人更多[and more people see it]。比如（For example,…）现在很多小公司只花很少的钱在手机上做广告[they spend very little money on phone adverts]，然后很多人看到了这些广告[a lot of people see them]。所以（So…）我觉得线上广告更好[I think online ads are better]，我一般也在手机上看到广告（I usually see… on my phone）。",
    "g": "钱",
    "p": ["Compared with…", "The main reason is that…", "save money", "For example,…", "I usually see… on my phone", "So…"]
  },
  "new-recent-program||What are the differences between the TV programs young people like to watch and those old people like to watch?": {
    "a": "年轻人喜欢看好笑的节目[young people like watching funny programmes]。老人正好相反（By contrast,…），他们喜欢看慢一点的节目[they like watching slower programmes]。最主要的原因是（The main reason is that…）年轻人上一天班以后很累[young people are tired after a day at work]，他们只想放松一下（relax after a long day）。比如（For example,…）现在很多年轻人晚上看好笑的短视频[a lot of young people watch funny short videos at night]，然后他们心情好一点[they feel better]。大部分老人看慢一点的新闻节目[most old people watch slower news programmes]，因为这样他们觉得很安心[they feel calm]。所以（So…）两代人看的节目很不一样[the two groups watch different programmes]。",
    "g": "情绪",
    "p": ["By contrast,…", "The main reason is that…", "relax after a long day", "For example,…", "So…"]
  },
  "new-recent-program||What makes a popular TV or online program?": {
    "a": "我觉得受欢迎的节目要轻松[a popular programme should be relaxing]，也要好懂（easy to follow）。最主要的原因是（The main reason is that…）大家打开电视的时候[when people turn on the TV]，他们只想放松一下（relax after a long day）。比如（For example,…）现在很多人喜欢看做饭的节目[a lot of people like watching cooking programmes]，因为他们看的时候觉得很轻松[they feel relaxed when they watch it]。所以（So…）好的节目帮我忘掉工作上的事（it helps me forget about…），这样的节目最容易火[this kind of programme becomes popular easily]。",
    "g": "情绪",
    "p": ["easy to follow", "The main reason is that…", "relax after a long day", "For example,…", "it helps me forget about…", "So…"]
  },
  "new-recent-program||What kinds of TV or online programs are popular in your country?": {
    "a": "现在最火的是短视频[short videos are the most popular now]，我一般在手机上看这些视频（I usually see… on my phone）。最主要的原因是（The main reason is that…）大家上一天班以后很累[people are tired after a day at work]，他们看短视频的时候觉得很轻松[they feel relaxed when they watch them]，而且这种节目很好懂（easy to follow）。比如（For example,…）很多人坐地铁的时候看几分钟短视频[a lot of people watch short videos for a few minutes on the subway]，然后他们心情好一点[they feel better]，下班以后他们也可以放松一下（relax after a long day）。所以（So…）我觉得这类节目在我们这里最受欢迎[I think this kind of programme is the most popular here]。",
    "g": "情绪",
    "p": ["I usually see… on my phone", "The main reason is that…", "easy to follow", "For example,…", "relax after a long day", "So…"]
  },
  "new-special-occasion-food||Why are there special foods on special occasions or events?": {
    "a": "我觉得节日有特别的食物[festivals have special food]，因为大家想让那一天跟平时不一样[different from other days]。最主要的原因是（The main reason is that…）平时大家在家做点简单的东西（cook something simple at home），但是过节的时候全家想一起吃好一点[but on festival days the whole family wants to eat a bit better together]。比如（For example,…）大部分中国家庭过年的时候做很多菜[they cook a lot of dishes at Chinese New Year]，然后全家人一起吃[then the whole family eats together]。所以（So…）吃什么不重要[what you eat is not important]，重要的是那份心意（it's the thought that counts）。",
    "g": "关系",
    "p": ["The main reason is that…", "cook something simple at home", "For example,…", "So…", "it's the thought that counts"]
  },
  "new-special-occasion-food||What are the differences between everyday food and festival food?": {
    "a": "我觉得平时大家吃得很简单[I think people usually eat quite simply]，很多人在家做点简单的东西（cook something simple at home）。最主要的原因是（The main reason is that…）平时大家上班很忙[people are usually busy at work]，只有过节的时候他们有时间跟家人坐下来[they have time to sit down with their family]。比如（For example,…）很多上班的人中午跟朋友在外面吃饭（eat out with friends），他们吃得很快[they eat very quickly]。所以（So…）区别不在食物[the difference is not the food]，区别在时间[the difference is the time]。",
    "g": "关系",
    "p": ["cook something simple at home", "The main reason is that…", "For example,…", "eat out with friends", "So…"]
  },
  "new-special-occasion-food||Are there any differences between the food people eat today and the food people ate in the past?": {
    "a": "跟过去比（Compared with…），我觉得现在的选择多得多（there's a lot more choice now）。最主要的原因是（The main reason is that…）现在超市里什么都有[supermarkets have everything now]，而且价钱也不贵[and it is not expensive]。比如（For example,…）以前很多家庭冬天只吃白菜和土豆[in the past many families only ate cabbage and potatoes in winter]，因为水果太贵了[fruit was too expensive]。但是现在水果很便宜[but now fruit is very cheap]，所以大部分家庭冬天也买得起[they can afford it in winter]。所以（So…）我觉得现在的人吃得比以前好很多[I think people eat much better now than in the past]。",
    "g": "钱",
    "p": ["Compared with…", "there's a lot more choice now", "The main reason is that…", "For example,…", "So…"]
  },
  "new-special-occasion-food||Do people today prefer eating at home or in a restaurant?": {
    "a": "这个要看情况（It depends, but usually…），不过我觉得大部分人更喜欢出去吃[but I think most people prefer to eat out]。最主要的原因是（The main reason is that…）他们下班以后很累[they are tired after work]，不想做饭[they don't want to cook]，而且他们喜欢跟朋友在外面吃饭（eat out with friends）。比如（For example,…）很多年轻人下班以后跟同事一起去外面吃饭[many young people go out to eat with workmates after work]，然后他们一起聊很久[they chat together for a long time]。所以（So…）现在很多人不做饭了[now a lot of people don't cook anymore]，以前他们常常在家做点简单的东西（cook something simple at home）。而且在外面吃饭的时候，他们可以跟朋友多聊几句[they can chat more with their friends]。",
    "g": "关系",
    "p": ["It depends, but usually…", "The main reason is that…", "eat out with friends", "For example,…", "So…", "cook something simple at home"]
  },
  "new-live-sports-event||Why do some people like to watch sports events?": {
    "a": "很多人喜欢看比赛[a lot of people like watching matches]，因为看比赛的时候他们可以忘掉不开心的事[they forget unhappy things]。最主要的原因是（The main reason is that…）大家平时压力很大[people are usually under a lot of pressure]，他们看一场球可以放松一下（relax after a long day）。比如（For example,…）很多人周末跟朋友一起看球赛[they watch a match with friends at the weekend]，然后他们心情很好[and they feel good]。所以（So…）看比赛帮我忘掉工作上的事（it helps me forget about…）。",
    "g": "情绪",
    "p": ["it helps me forget about…", "The main reason is that…", "relax after a long day", "For example,…", "So…"]
  },
  "new-live-sports-event||Where do people normally watch sports events?": {
    "a": "我觉得大部分人在家里看比赛[I think most people watch matches at home]，我一般在手机上看（I usually see… on my phone）。最主要的原因是（The main reason is that…）去现场很贵[going to the stadium is expensive]，也很花时间[and it takes a lot of time]，在家看可以省钱（save money）。比如（For example,…）很多人看一场现场比赛要花好几百块钱[a few hundred yuan for one match]，而且他们开车去的时候还会堵在路上（get stuck in traffic）。所以（So…）我觉得在家看比赛的人更多[I think more people watch matches at home]，因为在家看很便宜，也很方便[it is cheap and easy at home]。",
    "g": "钱",
    "p": ["I usually see… on my phone", "The main reason is that…", "save money", "For example,…", "get stuck in traffic", "So…"]
  },
  "new-live-sports-event||What are the advantages of watching sports events online?": {
    "a": "我觉得网上看最方便[I think watching online is the easiest]，我一般在手机上看比赛（I usually see… on my phone）。最主要的原因是（The main reason is that…）我们不用出门[we don't have to go out]，也不用买票[and we don't have to buy tickets]，这样可以省钱（save money）。比如（For example,…）很多人在手机上免费看完一场球[they watch a whole match for free]，但是现场的票要好几百块[the ticket costs a few hundred yuan]。所以（As a result,…）网上看比赛帮我省了很多时间，但是气氛差一点（it saves me a lot of time, but…）。",
    "g": "钱",
    "p": ["I usually see… on my phone", "The main reason is that…", "save money", "For example,…", "As a result,…", "it saves me a lot of time, but…"]
  },
  "new-live-sports-event||What sports matches are suitable for children to attend?": {
    "a": "我觉得学校里的小比赛最适合孩子看[I think small matches at school suit children best]。最主要的原因是（The main reason is that…）这种比赛人不多[there are not many people at these matches]，孩子不会觉得害怕[children do not feel scared]，而且他们看得懂（easy to follow）。比如（For example,…）很多父母带孩子去看学校的运动会[the school sports day]，然后孩子看得很开心[and the children enjoy it a lot]。所以（So…）孩子可以先看小比赛[children can start with small matches]，而且他们还可以出去呼吸新鲜空气（get some fresh air）。",
    "g": "情绪",
    "p": ["The main reason is that…", "easy to follow", "For example,…", "So…", "get some fresh air"]
  },
  "new-live-sports-event||Why do some people spend a lot going to other countries to watch sports events?": {
    "a": "他们愿意花这个钱[they are willing to spend this money]，因为现场跟手机上完全不一样[watching live is completely different from watching on a phone]，我一般在手机上看比赛（I usually see… on my phone）。最主要的原因是（The main reason is that…）他们平时工作很累[they are usually tired from work]，出去一次可以好好放松（relax after a long day）。比如（For example,…）很多球迷坐几个小时的车去别的城市看球[they travel for hours to another city]，然后他们在现场特别兴奋[they feel really excited at the ground]。所以（So…）看现场比赛帮我忘掉工作上的事（it helps me forget about…）。而且很多人觉得这个钱花得值[it is worth the money]。",
    "g": "情绪",
    "p": ["I usually see… on my phone", "The main reason is that…", "relax after a long day", "For example,…", "it helps me forget about…", "So…"]
  },
  "new-live-sports-event||What sports games are popular in your country?": {
    "a": "我们这里最受欢迎的是篮球和乒乓球[the most popular sports here are basketball and table tennis]，大人和孩子都喜欢打[both adults and children like playing them]。最主要的原因是（The main reason is that…）这两种运动花钱很少（save money），你只要买一个球拍[you only need to buy a bat]。比如（For example,…）很多人晚饭以后出去走一走（go for a walk after dinner），然后他们在公园里免费打球[they play for free in the park]。所以（So…）我觉得这两种运动最普及[these two sports are the most common]。",
    "g": "钱",
    "p": ["The main reason is that…", "save money", "For example,…", "go for a walk after dinner", "So…"]
  },
  "new-general-law||What rules should students follow at school?": {
    "a": "我觉得学生应该按时上课[I think students should go to class on time]，也应该按时交作业[and hand in their homework on time]，这就是守规矩（stick to the rules）。主要是因为（mainly because…）学校里人很多[there are a lot of people at school]，一样的规矩可以保证大家安全（keep people safe）。比如（For example,…）大部分学校晚上有门禁[most schools have a set time to be back at night]，学生一开始觉得很烦[at first the students think it is annoying]。所以（So…）我觉得学校的每条规矩都有它的原因（it's there for a reason）。",
    "g": "规矩",
    "p": ["stick to the rules", "mainly because…", "keep people safe", "For example,…", "So…", "it's there for a reason"]
  },
  "new-general-law||Do people in your country usually obey the law?": {
    "a": "我觉得我们国家大部分人都守法（Yes, definitely.）。最主要的原因是（The main reason is that…）大家知道这些规定可以保证大家安全（keep people safe），而且不守法的人要罚钱[they have to pay a fine]。比如（For example,…）很多人晚上过马路的时候[when a lot of people cross the road at night]，路上没有车[there are no cars on the road]，他们也会等红灯[they still wait for the green light]。所以（So…）我觉得大部分人愿意守规矩（stick to the rules）。",
    "g": "规矩",
    "p": ["Yes, definitely.", "The main reason is that…", "keep people safe", "For example,…", "So…", "stick to the rules"]
  },
  "new-general-law||What kinds of behavior are considered as good behavior?": {
    "a": "我觉得对别人有礼貌[I think being polite to others]，还有愿意帮别人[and being willing to help others]，这就是好行为[this is good behaviour]。最主要的原因是（The main reason is that…）一件很小的事情就可以给别人带来改变（make a difference to other people）。比如（For example,…）很多年轻人在地铁上给老人让座[they give their seat to an old person]，然后老人一天心情都很好[and the old person feels happy all day]。所以（So…）我们应该多想想别人[we should think about others more]，这是每个人的责任（it's everyone's responsibility）。",
    "g": "关系",
    "p": ["The main reason is that…", "make a difference to other people", "For example,…", "So…", "it's everyone's responsibility"]
  },
  "new-general-law||Do you think children can learn about the law outside of school?": {
    "a": "我觉得孩子在学校外面也可以学到法律（Yes, definitely.）。最主要的原因是（The main reason is that…）生活里到处都有规矩[there are rules everywhere in life]，每一条都有它的原因（it's there for a reason）。比如（For example,…）大部分父母过马路的时候会告诉孩子[most parents tell their children when they cross the road]，我们要等绿灯[we have to wait for the green light]。所以（So…）孩子这样学[when children learn this way]，他们记得更清楚[they remember it better]，长大以后也愿意守规矩（stick to the rules）。",
    "g": "规矩",
    "p": ["Yes, definitely.", "The main reason is that…", "it's there for a reason", "For example,…", "So…", "stick to the rules"]
  },
  "new-general-law||What are the benefits for people to obey rules?": {
    "a": "我觉得最大的好处是规矩可以保证大家安全（keep people safe）。最主要的原因是（The main reason is that…）如果每个人都守规矩（stick to the rules），事情就不会乱[things do not get messy]。比如（For example,…）早上很多人坐地铁的时候排队上车[in the morning a lot of people queue to get on the metro]，然后大家上车更快[everyone gets on faster]。所以（So…）守规矩看起来很麻烦[following the rules seems like a lot of trouble]，但是这是每个人的责任（it's everyone's responsibility）。",
    "g": "规矩",
    "p": ["keep people safe", "The main reason is that…", "stick to the rules", "For example,…", "So…", "it's everyone's responsibility"]
  },
  "new-general-law||How can parents teach children to obey rules?": {
    "a": "我觉得父母应该先告诉孩子[I think parents should tell their children first]，这条规矩有它的原因（it's there for a reason）。最主要的原因是（The main reason is that…）孩子知道这条规矩可以保证他安全（keep people safe），然后他就愿意听[and then they are willing to listen]。比如（For example,…）大部分父母会告诉孩子[most parents tell their children]，马路上的车开得很快[the cars on the road go very fast]，然后孩子会站着等[and the child will stand and wait]。所以（So…）讲道理比骂孩子有用[explaining works better than shouting at them]，孩子长大以后也愿意守规矩（stick to the rules）。",
    "g": "规矩",
    "p": ["it's there for a reason", "The main reason is that…", "keep people safe", "For example,…", "So…", "stick to the rules"]
  },
  "new-interesting-video||What kind of videos do people in your country like to watch?": {
    "a": "大家最喜欢看短视频[people like watching short videos the most]，我一般也在手机上看（I usually see… on my phone）。最主要的原因是（The main reason is that…）大家上一天班以后很累[people are tired after a day at work]，他们看这种视频的时候很放松[they feel relaxed when they watch them]，而且谁都看得懂（easy to follow）。比如（For example,…）很多人晚上躺在床上看半个小时好笑的短视频[funny short videos for half an hour]，然后他们心情好很多[they feel much better]。所以（So…）短视频在我们这里最受欢迎[short videos are the most popular here]，因为看视频帮我忘掉白天的烦心事（it helps me forget about…）。",
    "g": "情绪",
    "p": ["I usually see… on my phone", "The main reason is that…", "easy to follow", "For example,…", "it helps me forget about…", "So…"]
  },
  "new-interesting-video||Which is more helpful, watching videos or reading books?": {
    "a": "跟看书比（Compared with…），我觉得看视频更有帮助[I think watching videos is more helpful]。最主要的原因是（The main reason is that…）视频能把一个很难的东西讲得很简单[videos can explain something difficult very simply]，它可以把一个问题分成一小步一小步（break it down into small steps）。比如（For example,…）很多学生看书学语法觉得很难[many students find grammar hard when they learn it from books]，看不懂[they can't follow it]，但是看视频有人一步一步教[but with videos someone teaches step by step]，他们很快就懂了[they get it quickly]。所以（So…）我觉得学生多看视频可以看到真正的进步（see real progress）。",
    "g": "目标",
    "p": ["Compared with…", "The main reason is that…", "break it down into small steps", "For example,…", "So…", "see real progress"]
  },
  "new-interesting-video||What skills can people learn from watching videos?": {
    "a": "我觉得看视频可以学到很多动手的技能[practical skills]，做饭和修东西都可以学[you can learn cooking and fixing things]。最主要的原因是（The main reason is that…）视频一步一步演给你看[videos show you step by step]，所以很好懂（easy to follow）。比如（For example,…）很多年轻人跟着视频学做菜[many young people learn to cook by following videos]，然后他们几个星期以后可以在家做点简单的东西（cook something simple at home），这就是真的进步[that is real progress]。所以（So…）视频把一件事分成一小步一小步（break it down into small steps），这样学技能最合适[this is the best way to learn a skill]。",
    "g": "目标",
    "p": ["The main reason is that…", "easy to follow", "For example,…", "cook something simple at home", "So…", "break it down into small steps"]
  },
  "new-interesting-video||Are there any differences between the videos that young people and old people like to watch?": {
    "a": "年轻人喜欢看好笑的短视频[young people like watching funny short videos]。老人正好相反（By contrast,…），他们喜欢看新闻[they like watching the news]。最主要的原因是（The main reason is that…）年轻人上一天班以后很累[young people are tired after a day at work]，他们只想放松一下（relax after a long day）。比如（For example,…）现在很多年轻人晚上看好笑的视频[many young people watch funny videos at night]，然后他们心情好一点[they feel better]。大部分老人晚上看电视新闻[most old people watch the news on TV in the evening]，因为这样的节目让他们觉得很安心[it makes them feel calm]。所以（So…）两代人看的东西很不一样[the two age groups watch very different things]。",
    "g": "情绪",
    "p": ["By contrast,…", "The main reason is that…", "relax after a long day", "For example,…", "So…"]
  },
  "new-interesting-video||Are there any differences between the videos that young men and young women like to watch?": {
    "a": "男生比较喜欢看球赛[boys prefer watching sports matches]。女生正好相反（By contrast,…），她们喜欢看做饭和穿衣服的视频[they like watching videos about cooking and clothes]。最主要的原因是（The main reason is that…）他们从小的兴趣就不一样[their interests have been different since they were small]，大家都看自己喜欢的东西[everyone watches what they like]。比如（For example,…）很多男生看球赛视频的时候特别激动[they get really excited]，很多女生看视频学做菜[many girls learn to cook from videos]，然后她们在家做点简单的东西（cook something simple at home），她们做的时候很开心[they feel happy when they cook]。所以（So…）他们看的视频有区别[the videos they watch are different]，不过现在这个区别比以前小了[but this difference is smaller now than before]。",
    "g": "情绪",
    "p": ["By contrast,…", "The main reason is that…", "For example,…", "cook something simple at home", "So…"]
  },
  "new-interesting-video||What makes a video go viral online?": {
    "a": "我觉得一个视频要火[I think if a video wants to go viral]，开头就要抓住你的注意力（it catches your attention）。最主要的原因是（The main reason is that…）大家看手机的速度很快[people scroll through their phones very fast]，如果前几秒很无聊[if the first few seconds are boring]，他们马上划走了[they scroll away at once]。比如（For example,…）很多人看到一个几秒钟的好笑视频[many people see a funny video of a few seconds]，然后他们发给自己的朋友[they send it to their friends]。所以（So…）视频要短[a video needs to be short]，也要好懂（easy to follow）。",
    "g": "情绪",
    "p": ["it catches your attention", "The main reason is that…", "For example,…", "So…", "easy to follow"]
  },
  "new-special-cake||What are the differences between special food in China and other countries?": {
    "a": "跟别的国家比（Compared with…），中国人过节的时候更希望全家坐在一起[Chinese people hope the whole family can sit together at festivals]。最主要的原因是（The main reason is that…）在哪个国家都一样[it is the same in every country]，吃什么不重要[what you eat is not important]，重要的是那份心意（it's the thought that counts）。比如（For example,…）中国人中秋节跟家里人一起吃月饼[Chinese people eat mooncakes with family at Mid-Autumn Festival]，很多外国人过生日的时候跟朋友一起吃蛋糕[eat a cake with their friends]。所以（So…）区别只在食物[the only difference is the food]，大家的心意是一样的[the feeling is the same for everyone]。",
    "g": "关系",
    "p": ["Compared with…", "The main reason is that…", "it's the thought that counts", "For example,…", "So…"]
  },
  "new-special-cake||Is there any food in your country that is eaten at special times or on special occasions?": {
    "a": "有的（Yes, definitely.），中秋节我们吃月饼[we eat mooncakes at Mid-Autumn Festival]，过年我们吃饺子[and dumplings at New Year]。最主要的原因是（The main reason is that…）这些日子一年只有一次[these days only come once a year]，所以全家人都想坐在一起[so the whole family wants to sit together]。比如（For example,…）很多家庭除夕那天一起包饺子[they make dumplings together]，平时他们只在家做点简单的东西（cook something simple at home）。所以（So…）吃什么不重要[what you eat is not important]，重要的是那份心意（it's the thought that counts）。",
    "g": "关系",
    "p": ["Yes, definitely.", "The main reason is that…", "For example,…", "cook something simple at home", "So…", "it's the thought that counts"]
  },
  "new-special-cake||Why are some people willing to spend a lot of money on meals on special days?": {
    "a": "我觉得这个钱花得值[I think this money is worth spending]，因为特别的日子一年只有几次[because special days only come a few times a year]。最主要的原因是（The main reason is that…）大家平时吃饭都很省[people usually try to save on food]，他们想少花一点钱（save money）。比如（For example,…）很多人生日那天跟朋友出去吃一顿好的（eat out with friends），他们那天愿意多花几百块钱[a few hundred yuan more]。所以（So…）我觉得大家偶尔花这个钱完全没问题[it is completely fine]。而且这样的钱他们一年只花几次[they only spend it a few times a year]。",
    "g": "钱",
    "p": ["The main reason is that…", "save money", "For example,…", "eat out with friends", "So…"]
  },
  "new-special-cake||Do you think it's good to communicate when eating with your family?": {
    "a": "我觉得吃饭的时候聊天很重要（Yes, definitely.）。最主要的原因是（The main reason is that…）现在每个人有时候都很忙（everyone gets busy sometimes），一天里只有吃饭的时候全家可以坐在一起[mealtimes are the only time the whole family can sit together]。比如（For example,…）很多父母吃晚饭的时候会问孩子今天学校怎么样[how school was today]。所以（So…）多聊几句可以给家里人带来改变（make a difference to other people）。",
    "g": "关系",
    "p": ["Yes, definitely.", "The main reason is that…", "everyone gets busy sometimes", "For example,…", "So…", "make a difference to other people"]
  },
  "new-special-cake||In your country, do people nowadays cook at home as frequently as people did in the past?": {
    "a": "我觉得现在没有以前那么经常了（Not really.）。最主要的原因是（The main reason is that…）现在外卖到处都是[takeaways are everywhere now]，价钱也不贵[and they are not expensive]，我们的选择多得多（there's a lot more choice now）。比如（For example,…）现在很多年轻人点一份外卖只要二十块钱[only twenty yuan for a takeaway]，然后他们一个星期只在家做点简单的东西（cook something simple at home）。所以（So…）我觉得在家做饭的人比过去少了[I think fewer people cook at home than before]，因为在外面吃也不贵[eating out is not expensive either]。",
    "g": "钱",
    "p": ["Not really.", "The main reason is that…", "there's a lot more choice now", "For example,…", "cook something simple at home", "So…"]
  },
  "new-special-cake||What do you think of people using their mobile phones during a meal?": {
    "a": "我觉得吃饭的时候一直看手机不太好[I think it's not good to keep looking at your phone during a meal]。最主要的原因是（The main reason is that…）现在每个人有时候都很忙（everyone gets busy sometimes），吃饭的时候大家正好可以说说话[mealtimes are a good chance for everyone to talk]。比如（For example,…）很多家庭吃饭的时候都低头看手机[many families look down at their phones during meals]，然后一顿饭没有人说话[nobody speaks during the meal]。所以（So…）我觉得大家吃饭的时候应该少看手机（cut down on…）。",
    "g": "关系",
    "p": ["The main reason is that…", "everyone gets busy sometimes", "For example,…", "So…", "cut down on…"]
  },
  "new-local-news||Do people read the newspaper where you live?": {
    "a": "现在看报纸的人很少了（Not really.）。最主要的原因是（The main reason is that…）在手机上看新闻很快[reading the news on your phone is fast]，也不用花钱（save money）。比如（For example,…）现在很多人在手机上免费看新闻[they read the news for free]，但是一份报纸要两三块钱[a newspaper costs two or three yuan]。我一般也在手机上看新闻（I usually see… on my phone），所以（So…）我觉得以后看报纸的人会更少[I think even fewer people will read newspapers in the future]。",
    "g": "钱",
    "p": ["Not really.", "The main reason is that…", "save money", "For example,…", "I usually see… on my phone", "So…"]
  },
  "new-local-news||Do people prefer local or international news?": {
    "a": "这个要看情况，不过一般来说（It depends, but usually…）大部分人先看本地新闻[most people read local news first]。最主要的原因是（The main reason is that…）本地新闻讲的是他们身边的人[the news is about the people around them]，所以他们可以跟家人聊这些新闻[they can talk about it with their family]。比如（For example,…）很多人晚上看本地新闻[a lot of people watch local news in the evening]，然后他们在饭桌上跟家人聊这些事[they talk about it at dinner]。所以（So…）我觉得本地新闻更受欢迎[I think local news is more popular]，因为它让邻居之间也有话聊[it gives neighbours something to talk about]。",
    "g": "关系",
    "p": ["It depends, but usually…", "The main reason is that…", "For example,…", "So…"]
  },
  "new-local-news||Do you think it's important to have a national identity?": {
    "a": "是的，我觉得很重要（Yes, definitely.）。最主要的原因是（The main reason is that…）如果人们有这种感觉[if people have this feeling]，他们就愿意一起做事[they are willing to work together]，因为这是每个人的责任（it's everyone's responsibility）。比如（For example,…）当有人在路上摔倒的时候[when someone falls over on the street]，很多人会过去帮他[many people will go and help him]。所以（So…）这种感觉可以让人们帮助别人（make a difference to other people）。",
    "g": "关系",
    "p": ["Yes, definitely.", "The main reason is that…", "it's everyone's responsibility", "For example,…", "So…", "make a difference to other people"]
  },
  "new-local-news||How can people develop their national identity?": {
    "a": "我觉得人们可以多了解自己国家的历史[I think people can learn more about their country's history]，也可以多参加本地的活动[join local activities]。最主要的原因是（The main reason is that…）当人们跟身边的人多来往的时候[when people spend more time with those around them]，他们才会觉得这是自己的地方[this place belongs to them]。比如（For example,…）很多人会去参加本地的节日活动[a lot of people go to local festival events]，他们在那里认识新的邻居[and they meet new neighbours there]。所以（So…）小的改变加起来会很有用（small changes add up），而且这是每个人的责任（it's everyone's responsibility）。",
    "g": "关系",
    "p": ["The main reason is that…", "For example,…", "So…", "small changes add up", "it's everyone's responsibility"]
  },
  "new-environmental-law-proposal||How does technology affect the law?": {
    "a": "我觉得科技一变[I think once technology changes]，法律就得跟着变[the law has to change with it]。最主要的原因是（The main reason is that…）新东西会带来新问题[new things bring new problems]，旧规定管不了[the old rules can't deal with them]。比如（For example,…）现在很多人在手机上买东西[many people buy things on their phones now]，有些广告不老实（some ads are not honest），后来国家就定了新规定来管网上的广告[new rules for online ads]。所以（So…）法律跟着科技走[the law follows technology]，这也是有原因的（it's there for a reason）。",
    "g": "规矩",
    "p": ["The main reason is that…", "For example,…", "some ads are not honest", "So…", "it's there for a reason"]
  },
  "new-environmental-law-proposal||What kinds of rules do schools in China have?": {
    "a": "我觉得中国学校的规矩主要是管纪律的[I think school rules in China are mainly about keeping order]。最主要的原因是（The main reason is that…）学校里人很多[there are a lot of people at school]，得有统一的规矩[so there have to be the same rules for everyone]，大家才不会乱[so things don't get messy]。比如（For example,…）学生要穿校服、按时到校，上课不能玩手机[wear a uniform, arrive on time, no phones in class]。所以（So…）这些规矩听起来严[these rules sound strict]，但它们能保证大家安全（keep people safe）。",
    "g": "规矩",
    "p": ["The main reason is that…", "For example,…", "So…", "keep people safe"]
  },
  "new-environmental-law-proposal||Will there be a law that is universally accepted?": {
    "a": "我觉得不太可能（Not really.）。最主要的原因是（The main reason is that…）每个国家情况不一样[every country is different]，很难定一条全世界都一样的法律[it's hard to make one law the same everywhere]。比如（For example,…）有的国家管闯红灯管得很严，有的国家根本没人管[some countries are strict about crossing on a red light, others don't check at all]。所以（So…）我觉得每个国家自己定规矩就行[I think each country can just set its own rules]，每条规矩都有它的原因（it's there for a reason）。",
    "g": "规矩",
    "p": ["Not really.", "The main reason is that…", "For example,…", "So…", "it's there for a reason"]
  },
  "new-environmental-law-proposal||What environmental laws does your country already have?": {
    "a": "我们国家有一些保护环境的规定[my country has some rules to protect the environment]，最好记的就是塑料袋要收费[shops now charge for plastic bags]。最主要的原因是（The main reason is that…）保护环境是每个人的责任（it's everyone's responsibility）。比如（For example,…）以前超市免费给袋子[supermarkets used to give bags for free]，现在你想要就得自己花钱买[now you have to pay if you want one]。所以（So…）用袋子的人少多了[far fewer people use bags now]，这种小改变加起来也很有用（small changes add up）。",
    "g": "规矩",
    "p": ["The main reason is that…", "it's everyone's responsibility", "For example,…", "So…", "small changes add up"]
  },
  "new-environmental-law-proposal||What are the rules people should obey at work?": {
    "a": "我觉得上班最重要的是守时和守规矩（stick to the rules）。最主要的原因是（The main reason is that…）大家守一样的规矩[when everyone follows the same rules]，活儿才能顺顺利利[so the work goes smoothly]。比如（For example,…）大部分公司上班时间不让玩手机[most companies don't allow phones during work hours]，因为一分心就容易出错[they make mistakes if they lose focus]。所以（So…）这些规矩看着烦[these rules seem annoying]，其实是帮大家少出错、把事做好[they help everyone make fewer mistakes]。",
    "g": "规矩",
    "p": ["stick to the rules", "The main reason is that…", "For example,…", "So…"]
  },
  "new-environmental-law-proposal||What is the purpose of punishment?": {
    "a": "我觉得惩罚是为了让大家把规矩当回事[so people take the rules seriously]。最主要的原因是（The main reason is that…）如果做错了没有任何后果[if nothing happens when you do wrong]，就没人会在意规矩[nobody cares about the rules]。比如（For example,…）在学校上课玩手机[if you play on your phone in class at school]，老师会把手机收走[the teacher takes the phone away]；开车闯红灯要罚款[you get a fine for running a red light]。所以（So…）惩罚不是为了吓人[punishment is not to scare people]，而是为了保护大家的安全（keep people safe）。",
    "g": "规矩",
    "p": ["The main reason is that…", "For example,…", "So…", "keep people safe"]
  },
  "new-traffic-jam||How can we solve the traffic jam problem?": {
    "a": "我觉得最有用的办法是让更多人改坐地铁（take the subway instead）。这主要是因为（mainly because…）在早晚高峰的时候（at rush hour），很多人堵在路上（get stuck in traffic），所以他们心里很烦[they feel annoyed]。比如（For example,…）很多人开车上班要等一个小时[a lot of people spend an hour driving to work]，他们到公司的时候已经很累了[they are already tired when they get to the office]。所以（So…）如果他们改坐地铁[if they take the subway instead]，他们的心情会好很多[they will feel much better]。而且坐地铁也比开车便宜[the subway is also cheaper than driving]。",
    "g": "情绪",
    "p": ["take the subway instead", "mainly because…", "at rush hour", "For example,…", "get stuck in traffic", "So…"]
  },
  "new-traffic-jam||Do you think developing public transport can solve traffic jam problems?": {
    "a": "是的，我觉得肯定可以（Yes, definitely.）。最主要的原因是（The main reason is that…）坐地铁比开车便宜[the subway is cheaper than driving]，所以人们可以省下油钱（save money）。比如（For example,…）很多人以前开车上班[a lot of people used to drive to work]，他们每个月要花好几百块钱买油[they spend hundreds of yuan on petrol every month]，可是现在地铁票只要几块钱[a subway ticket only costs a few yuan]。所以（As a result,…）如果公共交通很方便（public transport is easy to use），开车的人就会变少[fewer people will drive]。",
    "g": "钱",
    "p": ["Yes, definitely.", "The main reason is that…", "save money", "For example,…", "As a result,…", "public transport is easy to use"]
  },
  "new-traffic-jam||Do you think highways will help reduce traffic jams?": {
    "a": "我觉得帮助不大（Not really.）。这主要是因为（mainly because…）修新的路要花很多钱[building new roads costs a lot of money]，但是路上的车还是一样多[but there are still just as many cars on the road]。比如（For example,…）很多城市花了很多钱修新的高速路[a lot of cities spend a lot of money building new highways]，可是在假期的时候[but during the holidays]，大家还是堵在路上（get stuck in traffic）。所以（So…）我觉得更好的办法是让人们改坐地铁（take the subway instead），因为这样花的钱少多了[this way costs much less money]。",
    "g": "钱",
    "p": ["Not really.", "mainly because…", "For example,…", "get stuck in traffic", "So…", "take the subway instead"]
  },
  "new-traffic-jam||What are good ways to manage traffic?": {
    "a": "我觉得最好的办法是让司机守交通规则（stick to the rules）。这主要是因为（mainly because…）如果有人乱停车[if someone parks in the wrong place]，别的车就会堵在路上（get stuck in traffic）。比如（For example,…）我们这里很多人把车停在路边[a lot of people here park at the side of the road]，所以早上大家要多等十分钟[everyone has to wait ten more minutes]。所以（So…）我觉得管得严格一点是好事[stricter rules are a good thing]，因为这样可以保护大家的安全（keep people safe）。",
    "g": "规矩",
    "p": ["stick to the rules", "mainly because…", "get stuck in traffic", "For example,…", "So…", "keep people safe"]
  },
  "new-traffic-jam||Do you like to use public transport?": {
    "a": "是的，我很喜欢（Yes, definitely.），我每天都坐地铁[I take the subway every day]。这主要是因为（mainly because…）我不用自己开车[I do not have to drive myself]，所以我在路上很轻松[I feel relaxed on the way]。比如（For example,…）现在很多人在地铁上看视频或者听歌[a lot of people watch videos or listen to music on the subway]，所以他们到公司的时候心情很好[they feel good when they get to the office]。所以（So…）我觉得公共交通又快又方便（public transport is easy to use），我坐地铁的时候一点也不累[I do not feel tired at all]。",
    "g": "情绪",
    "p": ["Yes, definitely.", "mainly because…", "For example,…", "So…", "public transport is easy to use"]
  },
  "new-traffic-jam||Would you rather be in a car or a bus in a traffic jam?": {
    "a": "如果路上堵车[if there is a traffic jam]，我更愿意坐公交车[I would rather take the bus]，我不想自己开车[I do not want to drive myself]。这主要是因为（mainly because…）我坐公交车的时候不用看路[I do not have to watch the road when I take the bus]，所以我心里没有那么烦[I do not feel so annoyed]。比如（For example,…）在早晚高峰的时候（at rush hour），很多人堵在路上（get stuck in traffic），可是公交车上的人可以看视频[but people on the bus can watch videos]，他们没有那么着急[they are not in such a hurry]。所以（So…）我觉得自己开车的人心里更累[people who drive feel more tired]，我还是选公交车[I would still choose the bus]。",
    "g": "情绪",
    "p": ["mainly because…", "For example,…", "at rush hour", "get stuck in traffic", "So…"]
  },
  "new-happy-event||How can parents help children to be organized?": {
    "a": "我觉得父母可以帮孩子把事情拆成小步骤（break it down into small steps）。这主要是因为（mainly because…）父母可以先帮孩子定一个清楚的目标（set myself a clear goal），然后孩子就知道先做哪一件事[they know which thing to do first]。比如（For example,…）现在很多父母让孩子每天背十个单词[a lot of parents get their kids to learn ten words a day]，他们不会一次给孩子太多任务[they do not give the child too many tasks]。所以（As a result,…）孩子每天都可以看到自己的进步（see real progress）。",
    "g": "目标",
    "p": ["break it down into small steps", "mainly because…", "For example,…", "set myself a clear goal", "As a result,…", "see real progress"]
  },
  "new-happy-event||On what occasions do people need to be organized?": {
    "a": "我觉得人们在考试以前和工作很忙的时候最需要有安排[people need to be organized most before exams and when work is busy]。这主要是因为（mainly because…）如果事情很多[if there are a lot of things to do]，但是他们没有清楚的目标[but they do not have a clear goal]，他们就不知道先做哪一件[they do not know which one to do first]。比如（For example,…）很多学生准备雅思考试的时候[when a lot of students prepare for the IELTS exam]，他们每天都有一个学习计划[they have a study plan every day]。所以（So…）我觉得人在很忙的时候应该先定一个清楚的目标（set myself a clear goal），然后把它拆成小任务（break it down into small steps），也要有固定的作息（stick to a routine）。",
    "g": "目标",
    "p": ["mainly because…", "For example,…", "set myself a clear goal", "break it down into small steps", "So…", "stick to a routine"]
  },
  "new-happy-event||Does everything need to be well prepared?": {
    "a": "我觉得不用（Not really.），小的事情随便一点更好[it is better to be more relaxed about small things]。这主要是因为（mainly because…）如果人们准备每一件事[if people prepare for everything]，他们会很累，也会很紧张[they will feel tired and nervous]。比如（For example,…）很多人跟朋友出去吃饭（eat out with friends），他们不会提前订位子[they do not book a table in advance]，可是他们还是玩得很开心[they still have a good time]。所以（So…）我觉得只有重要的事情才值得花时间准备[only important things are worth spending time preparing for]。而且随便一点的时候[and when things are more relaxed]，大家跟朋友在一起更放松[people feel more relaxed with their friends]。",
    "g": "情绪",
    "p": ["Not really.", "mainly because…", "For example,…", "eat out with friends", "So…"]
  },
  "new-happy-event||Do people need others' help when organizing things?": {
    "a": "是的，我觉得很需要（Yes, definitely.），一个人真的做不完[one person cannot finish it alone]。这主要是因为（mainly because…）如果几个人分工[if a few people divide the work]，每个人负责一部分（be responsible for one part of…），事情就快多了[things get done much faster]。比如（For example,…）大部分学生办活动的时候[when most students organize an activity]，有一个人去买东西[one person goes to buy things]，另一个人去找场地[another person looks for a place]。所以（As a result,…）大家做自己擅长的事（each do what we're good at），事情就办得又快又好[the work is done quickly and well]。",
    "g": "关系",
    "p": ["Yes, definitely.", "mainly because…", "be responsible for one part of…", "For example,…", "As a result,…", "each do what we're good at"]
  },
  "new-happy-event||How would you feel when you were not well prepared for something?": {
    "a": "我会觉得很紧张[I would feel very nervous]，我心里一点信心都没有[I have no confidence at all]。这主要是因为（mainly because…）如果我没有准备好[if I am not well prepared]，我就一直担心事情会出问题（something went wrong with…）。比如（For example,…）很多学生考试以前没有复习[a lot of students do not study before the exam]，他们坐在教室里的时候手会发抖[their hands shake]。所以（So…）我现在都会提前定一个清楚的目标（set myself a clear goal），然后慢慢准备[and then prepare bit by bit]。",
    "g": "情绪",
    "p": ["mainly because…", "something went wrong with…", "For example,…", "So…", "set myself a clear goal"]
  },
  "new-happy-event||Do you prefer to prepare and organize an activity or just take part in an activity?": {
    "a": "我更喜欢只参加活动[I prefer to just take part in activities]，我不想自己组织[I do not want to organize them myself]。这主要是因为（mainly because…）组织一个活动是很大的责任（it's a big responsibility），所以我的压力会很大[I will feel a lot of pressure]。比如（For example,…）很多人办聚会的时候要花一个下午订位子和买东西[a lot of people spend a whole afternoon booking a place and buying things for a party]，所以他们在活动开始以前就已经很累了[they are already tired before the party starts]。跟组织比起来（Compared with…），参加活动轻松多了[taking part is much more relaxing]，所以（So…）我选择只参加[I choose to just take part]。",
    "g": "情绪",
    "p": ["mainly because…", "it's a big responsibility", "For example,…", "Compared with…", "So…"]
  },
  "new-delayed-reply||When do people spend a long time responding to others' messages?": {
    "a": "我觉得人们工作或者学习很忙的时候[when people are busy with work or study]，常常会过很久才回消息[they often take a long time to reply to messages]。最主要的原因是（The main reason is that…）他们要先把手上的事做完[they have to finish what they are doing first]，没时间看手机[they have no time to check their phone]。比如（For example,…）很多人上班的时候一直在开会[a lot of people are in meetings all the time at work]，或者学生在上课[or students are in class]，他们根本没办法马上回复[they just can't reply right away]。所以（So…）他们常常等忙完了[they often wait until they are free]，才慢慢回这些消息（get back to…）。",
    "g": "目标",
    "p": ["The main reason is that…", "For example,…", "So…", "get back to…"]
  },
  "new-delayed-reply||In what situations do people not respond to messages right away?": {
    "a": "我觉得人们开会或者上课的时候不能马上回消息[people cannot reply to messages right away when they are in a meeting or in class]。这主要是因为（mainly because…）每个人有时候都会很忙（everyone gets busy sometimes），而且他们那个时候要听别人说话[they have to listen to other people then]。比如（For example,…）很多人在开会的时候不看手机[a lot of people do not look at their phone in meetings]，因为他们不想让别人觉得他们不认真[they do not want others to think they are not serious]。所以（So…）如果一个人回复得很慢[if someone replies slowly]，一般都有原因（there's usually a good reason for it）。",
    "g": "关系",
    "p": ["mainly because…", "everyone gets busy sometimes", "For example,…", "So…", "there's usually a good reason for it"]
  },
  "new-delayed-reply||What would you do if you haven't received a reply after sending out a message?": {
    "a": "我一般会先等一等[I usually wait a bit first]，我不会马上再发一条消息催他[I will not send another message to push him]。这主要是因为（mainly because…）如果我一直催他[if I keep pushing him]，他会觉得我不尊重他[he will think I do not respect him]，而且每个人有时候都会很忙（everyone gets busy sometimes）。比如（For example,…）很多人在开会的时候收到朋友的消息[a lot of people get a message from a friend during a meeting]，所以他们晚上才回复[so they only reply in the evening]，可是他们的朋友也不会生气[their friends do not get angry]。所以（So…）我不会想太多[I do not overthink it]，我觉得一般都有原因（there's usually a good reason for it）。",
    "g": "关系",
    "p": ["mainly because…", "everyone gets busy sometimes", "For example,…", "So…", "there's usually a good reason for it"]
  },
  "new-delayed-reply||Why do some people prefer sending a message instead of making a call?": {
    "a": "我觉得发消息更轻松[I think texting is more relaxed]，因为人们不用马上回答[they do not have to answer at once]。这主要是因为（mainly because…）如果有人打电话[if someone calls you]，你必须马上接[you have to answer right away]，可是你正在忙的时候会觉得很尴尬[you feel embarrassed]。比如（For example,…）很多人在开会的时候接到电话[a lot of people get a call during a meeting]，他们只能马上挂掉[they have to hang up right away]，所以他们心里很紧张[they feel nervous]。所以（So…）大部分人更喜欢发消息[most people prefer to text]，因为发消息的时候他们没有压力[because they feel no pressure when texting]，他们有空以后再尽快回复（get back to… as soon as I can）。",
    "g": "情绪",
    "p": ["mainly because…", "For example,…", "So…", "get back to… as soon as I can"]
  },
  "new-delayed-reply||How do you show your respect in your message?": {
    "a": "我觉得最基本的尊重就是尽快回复（get back to… as soon as I can）。这主要是因为（mainly because…）如果你让别人一直等[if you keep someone waiting]，他会觉得你不在乎他[he will think you do not care about him]。比如（For example,…）很多人收到老师或者老板的消息[a lot of people get a message from a teacher or a boss]，他们就算在忙也会先回一句[they still send a short reply]。所以（As a result,…）如果你先告诉别人你在忙[if you tell people you are busy first]，他也可以理解你[they can understand you]，因为每个人有时候都会很忙（everyone gets busy sometimes）。",
    "g": "关系",
    "p": ["get back to… as soon as I can", "mainly because…", "For example,…", "As a result,…", "everyone gets busy sometimes"]
  },
  "new-delayed-reply||Why do some people feel angry when others don't reply to their message?": {
    "a": "我觉得他们生气是因为他们觉得别人不重视他们[they feel other people ignore them]。这主要是因为（mainly because…）如果他们等的时间很长[if they wait a long time]，他们心里就会很难受[they feel upset]。比如（For example,…）很多人发消息以后半天没有收到回复[a lot of people get no reply for a long time after sending a message]，他们就以为出事了（something went wrong with…），然后他们开始生气[and then they start to get angry]。所以（So…）我觉得每个人有时候都会很忙（everyone gets busy sometimes），我们不用太在意[we do not need to worry too much]。",
    "g": "情绪",
    "p": ["mainly because…", "For example,…", "something went wrong with…", "So…", "everyone gets busy sometimes"]
  },
  "new-low-cost-day-out||Do people like to spend their leisure time out in your country?": {
    "a": "是的，我觉得大部分人喜欢出去（Yes, definitely.），特别是在周末[especially at weekends]。这主要是因为（mainly because…）如果他们在家待很久[if they stay at home for a long time]，他们会觉得很无聊[they feel bored at home]。比如（For example,…）我们这里很多人晚饭以后去楼下散步（go for a walk after dinner），他们走完以后心情很好[they feel good after the walk]。所以（As a result,…）如果他们出去呼吸新鲜空气（get some fresh air），他们就不会觉得那么累了[they do not feel so tired]。而且他们在楼下还可以跟邻居聊天[they can also chat with their neighbours]。",
    "g": "情绪",
    "p": ["Yes, definitely.", "mainly because…", "For example,…", "go for a walk after dinner", "As a result,…", "get some fresh air"]
  },
  "new-low-cost-day-out||How do people spend their leisure time in your country?": {
    "a": "我觉得我们这里的人休息的时候一般不花很多钱[people here usually do not spend much money in their free time]。这主要是因为（mainly because…）出去旅游要花很多钱[travelling costs a lot of money]，但是在家附近玩可以省钱（save money）。比如（For example,…）很多老人晚饭以后去楼下散步（go for a walk after dinner），他们一分钱都不用花[they do not spend any money]。所以（As a result,…）现在的选择比以前多多了（there's a lot more choice now），而且人们不用花很多钱也可以玩得很开心[they can have fun without spending much]。",
    "g": "钱",
    "p": ["mainly because…", "save money", "For example,…", "go for a walk after dinner", "As a result,…", "there's a lot more choice now"]
  },
  "new-low-cost-day-out||How does technology affect the way people spend their leisure time?": {
    "a": "我觉得科技让休息变得很方便[technology makes leisure very easy]，但是它也让人变懒了[it also makes people lazy]。这主要是因为（mainly because…）看手机可以省很多时间，但是人看太久以后会更累（it saves me a lot of time, but…）。比如（For example,…）现在很多年轻人周末躺在床上看视频[a lot of young people lie in bed watching videos at weekends]，可是他们放下手机以后觉得很无聊[they feel bored after they put the phone down]。所以（So…）我觉得科技有好的一面也有坏的一面（it has both good and bad sides），人们最好出去呼吸新鲜空气（get some fresh air）。",
    "g": "情绪",
    "p": ["mainly because…", "it saves me a lot of time, but…", "For example,…", "So…", "it has both good and bad sides", "get some fresh air"]
  },
  "new-low-cost-day-out||Do you think only old people have time for leisure?": {
    "a": "我觉得不是这样（Not really.），年轻人也有休息的时间[young people also have leisure time]。这主要是因为（mainly because…）年轻人上班很累[young people are tired from work]，所以他们更需要在下班以后放松（relax after a long day）。比如（For example,…）现在很多年轻人周末也很忙[a lot of young people are busy at weekends too]，可是他们还是会抽半天出去走走[but they still make half a day to go out]，因为他们想让自己开心一点[they want to feel happier]。所以（So…）不是只有老人有空[old people are not the only ones with free time]，只是老人的生活节奏比较慢（a slower pace of life）。",
    "g": "情绪",
    "p": ["Not really.", "mainly because…", "relax after a long day", "For example,…", "So…", "a slower pace of life"]
  },
  "new-low-cost-day-out||Why do people like to have days off?": {
    "a": "我觉得大家都喜欢休息日[everyone likes days off]，他们在周末的时候很开心[they feel happy at weekends]。这主要是因为（mainly because…）人们平时上班很累[people are usually tired from work]，所以他们需要在下班以后好好放松（relax after a long day）。比如（For example,…）很多人在休息日睡到中午[a lot of people sleep until noon on their day off]，然后他们下午出去晒太阳（get some fresh air），他们觉得很舒服[they feel very comfortable]。所以（As a result,…）他们不用花很多钱（save money）也可以让自己变好[they can feel better again]。",
    "g": "情绪",
    "p": ["mainly because…", "relax after a long day", "For example,…", "get some fresh air", "As a result,…", "save money"]
  },
  "new-low-cost-day-out||Going out to have holidays is tiring. Why do people still want to do it?": {
    "a": "我觉得虽然出去玩很累[even though going out is tiring]，但是大家还是愿意去[people still want to go]。这主要是因为（mainly because…）如果人们换一个地方[if people go somewhere different]，他们的心情就完全不一样[they feel completely different]。比如（For example,…）现在很多人假期去爬山[a lot of people go hiking on holiday]，他们很累[they feel tired]，可是他们可以呼吸新鲜空气（get some fresh air）。所以（As a result,…）他们回家以后反而觉得更放松（relax after a long day），他们上班的时候也更有精神[they have more energy at work]。而且他们出去玩的时候可以跟家人在一起[they can be with their family]。",
    "g": "情绪",
    "p": ["mainly because…", "For example,…", "get some fresh air", "As a result,…", "relax after a long day"]
  },
  "new-help-solve-problem||How important is it for schools to help children become smarter?": {
    "a": "我觉得这非常重要（Yes, definitely.），学校的作用很大[schools play a big role]。这主要是因为（mainly because…）学校教孩子怎么学习[schools teach children how to learn]，不只是教课本上的知识[not only the knowledge in the books]。比如（For example,…）大部分老师会把很难的内容拆成小步骤（break it down into small steps），然后一步一步讲给学生听[and then explain it to students step by step]。所以（As a result,…）孩子可以看到自己的进步（see real progress），他们学习的时候也更有动力[they feel more motivated]。",
    "g": "目标",
    "p": ["Yes, definitely.", "mainly because…", "For example,…", "break it down into small steps", "As a result,…", "see real progress"]
  },
  "new-language-learning||What difficulties do people face when learning a language?": {
    "a": "我觉得最难的部分是开口说英语[the hardest part is speaking English out loud]，背单词其实比较容易[remembering new words is easier]。这主要是因为（mainly because…）很多人害怕说错话[a lot of people are afraid of saying something wrong]，他们也害怕别人笑他们[they are also afraid others will laugh at them]，所以他们不敢练习[they do not dare to practise]。比如（For example,…）很多学生背了很多单词[a lot of students remember many words]，可是他们见到外国人的时候太紧张了[but they get too nervous when they meet a foreigner]，所以他们一句话也说不出来[they cannot say a single word]。所以（So…）我觉得人们每天要逼自己说几句英语[people should make themselves say a few sentences of English every day]，然后他们可以看到真的进步（see real progress）。",
    "g": "情绪",
    "p": ["mainly because…", "For example,…", "So…", "see real progress"]
  },
  "new-language-learning||Do you think language learning is important? Why?": {
    "a": "是的，我觉得很重要（Yes, definitely.），特别是英语[especially English]。这主要是因为（mainly because…）如果一个人会英语[if someone can speak English]，他就有多得多的工作机会（many more job opportunities）。比如（For example,…）很多英语好的学生毕业以后进了外企[a lot of students with good English join foreign companies after graduation]，他们有稳定的收入（a stable income），他们的工资也比较高[their salary is also higher]。所以（As a result,…）我觉得花时间学一门外语非常值得[it is really worth it]。而且会英语的人跟外国人说话的时候也更有信心[they feel more confident]。",
    "g": "钱",
    "p": ["Yes, definitely.", "mainly because…", "many more job opportunities", "For example,…", "a stable income", "As a result,…"]
  },
  "new-language-learning||Which is better, to study a language alone or to study it in a group? Why?": {
    "a": "我觉得跟小组一起学更好[studying in a group is better]。这主要是因为（mainly because…）说话需要另一个人[speaking needs another person]，所以一个人在家没有办法练习[you cannot practise alone at home]。比如（For example,…）现在很多学生去英语角[a lot of students go to English corner]，他们在那里跟别人说英语，也互相纠正发音[they speak English with other people there and correct each other's pronunciation]。所以（So…）我觉得跟别人一起练快多了（it's much faster than working alone），因为大家可以互相帮忙[because they can help each other]。",
    "g": "关系",
    "p": ["mainly because…", "For example,…", "So…", "it's much faster than working alone"]
  },
  "new-language-learning||What's the best way to learn a language?": {
    "a": "我觉得最好的办法是每天使用这门语言[the best way is to use the language every day]，不要只背单词[not just remember words]。这主要是因为（mainly because…）如果人们很久不用这门语言[if people do not use the language for a long time]，他们就会忘记[they will forget it]，所以他们需要一个每天的小计划[they need a small plan for every day]。比如（For example,…）很多学生每天早上读十分钟英语[a lot of students read English for ten minutes every morning]，他们一天也不停[they do not stop for even one day]。所以（As a result,…）如果你养成固定的习惯（stick to a routine），你就可以看到真的进步（see real progress）。",
    "g": "目标",
    "p": ["mainly because…", "For example,…", "As a result,…", "stick to a routine", "see real progress"]
  },
  "new-language-learning||What are the advantages and disadvantages of learning a language?": {
    "a": "我觉得学一门语言有好的一面也有坏的一面（it has both good and bad sides）。这主要是因为（mainly because…）好处是你可以得到多得多的工作机会（many more job opportunities），坏处是你要花很多钱和时间[the bad side is you spend a lot of money and time]。比如（For example,…）很多学生为了考雅思要报一个班[a lot of students sign up for a class to take IELTS]，他们要花好几千块钱[they pay several thousand yuan for it]。所以（So…）我觉得好处比坏处多[the good points are more important than the bad ones]，因为好的工作可以把这些钱赚回来[a good job can earn the money back]。",
    "g": "钱",
    "p": ["it has both good and bad sides", "mainly because…", "many more job opportunities", "For example,…", "So…"]
  },
  "new-language-learning||Some people think that technology has made it unnecessary to learn languages. What do you think?": {
    "a": "我觉得不对（Not really.），翻译软件不能代替自己会说[software cannot replace real speaking]。这主要是因为（mainly because…）如果你举着手机跟别人聊天[if you hold up your phone to chat with someone]，你们两个人都会觉得很别扭[both of you feel awkward]。比如（For example,…）很多人用手机翻译跟外国人说话[a lot of people use phone translation to talk with foreigners]，可是他们没有办法跟对方交朋友[they cannot make friends with the other person]。所以（So…）我觉得软件很省时间，但是语言还是要自己学（it saves me a lot of time, but…）。",
    "g": "关系",
    "p": ["Not really.", "mainly because…", "For example,…", "So…", "it saves me a lot of time, but…"]
  },
  "new-electronic-device-problem||Why are people keen on buying new electronic  devices?": {
    "a": "我觉得很多人买新手机是因为广告影响了他们[the ads influence them]。这主要是因为（mainly because…）广告很吸引人（it catches your attention），所以人们看了以后心里很想要[they really want it]。比如（For example,…）现在很多年轻人看到新手机的广告[a lot of young people see ads for new phones]，他们当天就去店里买[they go to the shop and buy one that day]，因为他们拿到新手机的时候很开心[they feel happy when they get a new phone]。所以（So…）我觉得人们买以前要多想一想[people should think more before they buy]，因为有一些广告不老实（some ads are not honest）。而且新手机很贵[and new phones are expensive]，很多人买完以后没有钱了[many people have no money left]。",
    "g": "情绪",
    "p": ["mainly because…", "it catches your attention", "For example,…", "So…", "some ads are not honest"]
  },
  "new-electronic-device-problem||What impact do electronic devices have on people?": {
    "a": "我觉得电子产品有好的一面也有坏的一面（it has both good and bad sides）。这主要是因为（mainly because…）用手机查东西很省时间，但是看太久人会觉得很烦（it saves me a lot of time, but…）。比如（For example,…）很多人本来只想查一个东西[a lot of people only want to look up one thing]，可是他们刷了一个小时手机[but they scroll on their phone for an hour]，然后他们觉得很后悔[they feel sorry about it]。所以（So…）我觉得人们晚饭以后应该放下手机[people should put down their phones]，出去散步（go for a walk after dinner）。",
    "g": "情绪",
    "p": ["it has both good and bad sides", "mainly because…", "it saves me a lot of time, but…", "For example,…", "So…", "go for a walk after dinner"]
  },
  "new-important-decision||Do you think children sometimes have to make important decisions?": {
    "a": "我觉得孩子有时候也要自己做决定[children sometimes have to make decisions themselves]。这主要是因为（mainly because…）只有孩子自己知道他喜欢什么[only the child knows what he likes]，父母不能替他决定[parents cannot decide for him]。比如（For example,…）现在很多父母让孩子自己选兴趣班[a lot of parents let their kids choose their own hobby classes]，他们只给孩子一些建议[they only give the child some advice]。所以（As a result,…）我觉得孩子应该先自己想一想[children should think for themselves first]，如果他不懂[if they do not understand]，他可以找父母帮忙（turn to… for help）。",
    "g": "关系",
    "p": ["mainly because…", "For example,…", "As a result,…", "turn to… for help"]
  },
  "new-important-decision||What important decisions do teenagers need to  make after graduation?": {
    "a": "我觉得最重要的决定是选专业和选工作[the most important decisions are choosing a major and a job]。这主要是因为（mainly because…）这两件事会影响他们以后有没有稳定的收入（a stable income）。比如（For example,…）很多学生毕业的时候先比一比几个公司给的工资[they compare the salaries from a few companies]，然后他们选钱多的那个[they choose the one that pays more]。所以（So…）我觉得他们应该先定一个清楚的目标（set myself a clear goal），然后把它拆成小步骤（break it down into small steps）。",
    "g": "钱",
    "p": ["mainly because…", "a stable income", "For example,…", "So…", "set myself a clear goal", "break it down into small steps"]
  },
  "new-important-decision||Who can children turn to for help when making a decision?": {
    "a": "我觉得孩子一般先找父母帮忙（turn to… for help）。这主要是因为（mainly because…）父母最了解他们[parents understand them best]，父母也最愿意听他们说话[parents are willing to listen to them]。比如（For example,…）很多高中生要选文科还是理科[a lot of high school students have to choose arts or science]，他们会跟妈妈聊很久[they talk with their mother for a long time]。所以（So…）我觉得孩子应该先跟家里人商量[children should talk with their family first]，如果他们还是不能决定[if they still cannot decide]，他们可以去问老师[they can ask their teacher]。",
    "g": "关系",
    "p": ["turn to… for help", "mainly because…", "For example,…", "So…"]
  },
  "new-important-decision||Do you think advertisements can influence our decisions when shopping?": {
    "a": "是的，我觉得广告肯定会影响我们（Yes, definitely.），好的广告马上就抓住你的注意力（it catches your attention）。这主要是因为（mainly because…）广告总是说这个东西很便宜[ads always say the thing is cheap]，所以人们忍不住花钱[people cannot stop themselves from spending money]。比如（For example,…）很多人在超市看到广告上的饮料[a lot of people see a drink from an ad in the supermarket]，他们就顺手买了一瓶[they just pick up a bottle]，所以他们每个月多花了很多钱[they spend a lot more money every month]。所以（So…）我觉得我们买以前要多想一想[we should think more before we buy]，我不会相信我看到的每一句话（I don't believe everything I read）。",
    "g": "钱",
    "p": ["Yes, definitely.", "it catches your attention", "mainly because…", "For example,…", "So…", "I don't believe everything I read"]
  },
  "new-important-decision||Do you think the influence of advertising is good?": {
    "a": "我觉得广告有好的一面也有坏的一面（it has both good and bad sides）。这主要是因为（mainly because…）广告可以告诉我们哪里在打折[ads can tell us where the discounts are]，所以我们可以省钱（save money）。比如（For example,…）很多人买耳机以前先看广告[a lot of people look at ads before buying headphones]，他们知道了哪个牌子在打折[they learn which brand is on sale]，所以他们少花了一些钱[they spend less money]。可是有一些广告不老实（some ads are not honest），所以（So…）我觉得人们买以前应该先看看别人的评价[read the reviews from other people]。",
    "g": "钱",
    "p": ["it has both good and bad sides", "mainly because…", "save money", "For example,…", "some ads are not honest", "So…"]
  },
  "new-important-decision||How do people usually make important decisions?": {
    "a": "我觉得大部分人会先想清楚好处和坏处，然后再做决定[most people think about the good and bad points first, and then they decide]。这主要是因为（mainly because…）重要的决定都跟钱有关[important decisions are all about money]，人们最看重稳定的收入（a stable income）。比如（For example,…）很多人换工作以前先算一算新公司给多少钱[how much the new company pays]。所以（As a result,…）他们想清楚以后，很多人还会去找别人帮忙（turn to… for help），因为他们想听听别人的意见[they want to hear other opinions]。",
    "g": "钱",
    "p": ["mainly because…", "a stable income", "For example,…", "As a result,…", "turn to… for help"]
  },
  "new-teamwork||Why do some people prefer to work by themselves?": {
    "a": "我觉得有一些人习惯一个人做事情[some people are used to doing things on their own]。这主要是因为（mainly because…）他们不用等别人[they do not have to wait for others]，所以他们心里更自在[they feel more free]。比如（For example,…）很多学生喜欢自己写作业[a lot of students like to do their homework on their own]，因为他们可以自己决定什么时候写[they can decide when to do it themselves]，所以他们没有压力[they feel no pressure]。所以（So…）我觉得小的事情自己做就可以[we can do the small things ourselves]，如果他们真的做不完，他们再去找别人帮忙（turn to… for help）。",
    "g": "情绪",
    "p": ["mainly because…", "For example,…", "So…", "turn to… for help"]
  },
  "new-teamwork||What should a leader do to make team members want to follow him or her?": {
    "a": "我觉得好的领导最重要的事情是多听大家的想法[the most important thing for a good leader is to listen to everyone's ideas]。这主要是因为（mainly because…）如果队员觉得领导重视他们[if the team members feel the leader cares about them]，他们就愿意跟着他做事[they are willing to follow him]。比如（For example,…）很多组长开会的时候先问每个人的意见[a lot of team leaders ask for everyone's opinion in the meeting first]，然后大家一起分工[then they divide the work together]。所以（As a result,…）如果每个人做自己擅长的事（each do what we're good at），团队就比一个人做快多了（it's much faster than working alone）。",
    "g": "关系",
    "p": ["mainly because…", "For example,…", "As a result,…", "each do what we're good at", "it's much faster than working alone"]
  },
  "new-teamwork||Should students learn to do group work?": {
    "a": "是的，我觉得学生一定要学（Yes, definitely.），他们以后一直用得到这个能力[they will use this skill in the future]。这主要是因为（mainly because…）他们以后工作的时候要跟别人合作[they have to work with other people]。比如（For example,…）很多学生做小组作业的时候[when a lot of students do group homework]，每个人负责一部分（be responsible for one part of…）。所以（As a result,…）大家一起做比一个人做快多了（it's much faster than working alone）。",
    "g": "关系",
    "p": ["Yes, definitely.", "mainly because…", "For example,…", "be responsible for one part of…", "As a result,…", "it's much faster than working alone"]
  },
  "new-teamwork||What group tasks are there in schools?": {
    "a": "我觉得学校里的小组任务很多[there are a lot of group tasks in school]。主要是因为（mainly because…）老师想让学生早一点学会跟别人合作[teachers want students to learn to work with others early]。比如（For example,…）很多英语老师让学生一起排一个短剧[many English teachers ask students to do a short play together]，每个学生负责一个部分（be responsible for one part of…）。所以（As a result,…）每个学生做自己擅长的事（each do what we're good at），他们完成得更快[they finish the task faster]。",
    "g": "关系",
    "p": ["mainly because…", "For example,…", "be responsible for one part of…", "As a result,…", "each do what we're good at"]
  },
  "new-teamwork||What advantages are there for students experiencing teamwork at school?": {
    "a": "我觉得学生在学校学会合作有很多好处[students get a lot of benefits from teamwork at school]。主要是因为（mainly because…）几个学生一起做事的时候[when a few students do things together]，他们比一个人做快得多（it's much faster than working alone）。比如（For example,…）很多学生一起做一张海报[a lot of students make a poster together]，一个学生画画，另一个学生写字[one student draws and another student writes]。所以（As a result,…）学生也学会替别人着想（it teaches you to think about others），这对他们以后很有用[this is useful for them in the future]。",
    "g": "关系",
    "p": ["mainly because…", "it's much faster than working alone", "For example,…", "As a result,…", "it teaches you to think about others"]
  },
  "new-teamwork||How can you tell if a person is a good leader?": {
    "a": "我觉得我们主要看他会不会分配工作[I mainly look at whether he can share out the work]。主要是因为（mainly because…）好的领导知道每个人擅长什么[a good leader knows what everyone is good at]，他会让每个人做自己擅长的事（each do what we're good at）。比如（For example,…）很多小组的组长做项目的时候[when a team leader does a project]，他先问每个人想做什么[he first asks everyone what they want to do]，然后他让每个人负责一个部分（be responsible for one part of…）。所以（As a result,…）整个小组做得比一个人快得多（it's much faster than working alone），大家也不会太累[and nobody gets too tired]。",
    "g": "关系",
    "p": ["mainly because…", "each do what we're good at", "For example,…", "be responsible for one part of…", "As a result,…", "it's much faster than working alone"]
  },
  "new-changed-plan||Do people often change their plans?": {
    "a": "我觉得很多人经常改计划[a lot of people often change their plans]，这件事很正常[I think this is quite normal]。主要是因为（mainly because…）很多计划要跟别人一起做[a lot of plans have to be done with other people]，但是每个人有时候都很忙（everyone gets busy sometimes）。比如（For example,…）很多人约好周末跟朋友去爬山[a lot of people arrange to go hiking with friends at the weekend]，但是他们朋友的车出了问题（something went wrong with…），最后他们只能待在家里[in the end they have to stay at home]。所以（So…）我定计划的时候[when I make a plan]，我会先问一下别人的时间[I ask other people about their time first]。",
    "g": "关系",
    "p": ["mainly because…", "everyone gets busy sometimes", "For example,…", "something went wrong with…", "So…"]
  },
  "new-changed-plan||Would you tell others if you change your plan?": {
    "a": "我一定会马上告诉别人（Yes, definitely.）。主要是因为（mainly because…）如果我不说，我的朋友可能在外面等很久[if I do not tell him, my friend may wait outside for a long time]。比如（For example,…）很多人改了吃饭的时间[a lot of people change the time for a meal]，他们会马上给朋友发一条消息[they send their friends a message right away]。所以（So…）如果我的计划变了[if my plan changes]，我会尽快回复对方（get back to… as soon as I can）。",
    "g": "关系",
    "p": ["Yes, definitely.", "mainly because…", "For example,…", "So…", "get back to… as soon as I can"]
  },
  "new-changed-plan||Why do you think parents still make plans for their children nowadays?": {
    "a": "我觉得现在很多父母还是喜欢帮孩子做计划[a lot of parents still like to make plans for their children]。主要是因为（mainly because…）他们担心孩子没有方向[they worry their children have no direction]，他们怕孩子浪费时间[they are afraid their children will waste time]。比如（For example,…）很多父母帮孩子定一个明确的目标（set myself a clear goal），然后他们把目标拆成很多小步骤（break it down into small steps）。所以（As a result,…）孩子每天能看到一点进步（see real progress），父母也就放心了[so the parents stop worrying]。而且父母也想多陪孩子做一些事情[parents also want to do more things with their children]。",
    "g": "目标",
    "p": ["mainly because…", "For example,…", "set myself a clear goal", "break it down into small steps", "As a result,…", "see real progress"]
  },
  "new-changed-plan||How does technology help people make plans?": {
    "a": "我觉得科技让大家一起做计划方便多了[technology makes it much easier for people to make plans together]。最主要的原因是（The main reason is that…）我们可以在手机上跟朋友商量[we can talk it over with friends on the phone]，很快就把时间和地点定下来[we can quickly decide the time and place]。比如（For example,…）很多人想一起出去玩[a lot of people want to go out together]，就在群里聊一聊[they just chat in the group]，大家说好几点在哪见面[they agree on what time and where to meet]，还能把地图发给每个人[they can send the map to everyone]。所以（So…）大家不用打很多电话[people do not have to make a lot of phone calls]，这省了很多时间（saves us a lot of time）。",
    "g": "关系",
    "p": ["The main reason is that…", "For example,…", "So…", "saves us a lot of time"]
  },
  "new-changed-plan||What kind of plans do people often make?": {
    "a": "我觉得大部分人常做的是学习计划和旅行计划[study plans and travel plans]。主要是因为（mainly because…）很多人想给自己定一个明确的目标（set myself a clear goal）。比如（For example,…）很多学生想考雅思[a lot of students want to take IELTS]，他们把这个目标拆成很多小步骤（break it down into small steps），他们每天背几个词块[they learn a few phrases every day]。所以（So…）过了一段时间以后[after a while]，他们可以看到真的有进步（see real progress）。而且很多人也喜欢跟朋友一起定计划[many people also like to make plans with their friends]。",
    "g": "目标",
    "p": ["mainly because…", "set myself a clear goal", "For example,…", "break it down into small steps", "So…", "see real progress"]
  },
  "new-changed-plan||Do you think people like the process of making plans more, or the moment of carrying them out?": {
    "a": "我觉得大部分人更喜欢真正做成的那一刻[the moment when they really finish it]。主要是因为（mainly because…）他们做完以后会有成就感（a real sense of achievement），但是他们写计划的时候没有这种感觉[they do not feel that when they are writing the plan]。比如（For example,…）很多人每天晚饭以后出去走走（go for a walk after dinner），几个月以后他们看到真的有变化（see real progress），那一天他们特别开心[they are really happy on that day]。所以（So…）我觉得做成一件事情的时候，大家最开心[people are happiest when they finish something]。",
    "g": "情绪",
    "p": ["mainly because…", "a real sense of achievement", "For example,…", "go for a walk after dinner", "see real progress", "So…"]
  },
  "new-early-morning||Do you know anyone who likes to get up early?": {
    "a": "认识（Yes, definitely.），我妈妈就是一个早起的人（be a morning person）。主要是因为（mainly because…）她觉得早上很安静[she feels the morning is quiet]，她的心情也很好[she is in a good mood]。比如（For example,…）很多早起的人五点半起床做早饭[a lot of early risers get up at half past five and cook breakfast]，他们觉得早上很舒服[they feel very comfortable in the morning]。所以（So…）他们很多年一直保持同样的作息（stick to a routine）。",
    "g": "情绪",
    "p": ["Yes, definitely.", "be a morning person", "mainly because…", "For example,…", "So…", "stick to a routine"]
  },
  "new-early-morning||Why do people get up early?": {
    "a": "我觉得大家早起是想好好利用上午的时间[people get up early to use the morning well]。主要是因为（mainly because…）很多人觉得他们在中午以前工作效率最高（I work best before…），他们做完事情也有成就感（a real sense of achievement）。比如（For example,…）很多上班的人六点起床去跑步[a lot of office workers get up at six and go running]，跑完以后他们一天的心情都很好[they feel good all day after that]。所以（So…）他们会一直保持固定的作息（stick to a routine）。",
    "g": "情绪",
    "p": ["mainly because…", "I work best before…", "a real sense of achievement", "For example,…", "So…", "stick to a routine"]
  },
  "new-early-morning||What kinds of occasions do people need to arrive early?": {
    "a": "我觉得考试、面试和坐火车坐飞机的时候，大家都要早到[people need to arrive early for exams, interviews and catching trains or planes]。主要是因为（mainly because…）路上很容易堵车（get stuck in traffic），如果他们迟到，他们会很紧张[if they are late, they will be very nervous]。比如（For example,…）很多人早上去坐高铁[a lot of people go to catch the high-speed train in the morning]，他们正好碰上早高峰（at rush hour），他们在路上很着急[they get very worried on the road]。所以（So…）大部分人遇到这种事情[most people in this kind of situation]，都会提前一点出门[they leave home a bit earlier]。",
    "g": "情绪",
    "p": ["mainly because…", "get stuck in traffic", "For example,…", "at rush hour", "So…"]
  },
  "new-early-morning||Why do some people like to stay up late?": {
    "a": "我觉得有些人熬夜[some people stay up late]，是因为只有晚上的时间属于他们自己[the evening is the only time that belongs to them]。主要是因为（mainly because…）他们白天要上班[they have to work during the day]，只有晚上可以放松一下（relax after a long day），晚上也可以让他们忘掉工作（it helps me forget about…）。比如（For example,…）现在很多年轻人晚上十二点还在手机上看视频[a lot of young people are still watching videos on their phones at midnight]，他们觉得那个时候最轻松[they feel most relaxed at that time]。所以（So…）他们晚上不想睡觉[they do not want to sleep at night]，早上也起不来[and they cannot get up in the morning]。",
    "g": "情绪",
    "p": ["mainly because…", "relax after a long day", "it helps me forget about…", "For example,…", "So…"]
  },
  "new-early-morning||Is it good to arrive early in any situation?": {
    "a": "不一定（Not really.），如果我们去朋友家太早[if we go to a friend's house too early]，这样不太好[it is not very polite]。主要是因为（mainly because…）对方可能还没有准备好[they may not be ready yet]，你去太早会给别人添麻烦[you may cause them trouble]。比如（For example,…）很多人去别人家吃饭早到了一个小时[a lot of people arrive an hour early for a meal at someone's house]，主人还在做饭，他们只能坐在那里等[the host is still cooking and they just have to sit there and wait]。所以（So…）我觉得只有考试和坐车的时候我们才要早到[we only need to arrive early for exams and catching transport]，因为路上可能堵车（get stuck in traffic）。",
    "g": "关系",
    "p": ["Not really.", "mainly because…", "For example,…", "So…", "get stuck in traffic"]
  },
  "new-early-morning||What kind of people like getting up early?": {
    "a": "我觉得每天有事情要做的人，一般都是早起的人（be a morning person）。主要是因为（mainly because…）他们给自己定了明确的目标（set myself a clear goal），他们需要早一点开始[they need to start early]。比如（For example,…）很多学生每天六点起床背单词[a lot of students get up at six every day to learn new words]，他们从来不睡懒觉[they never sleep in]。所以（So…）过了一段时间[after a while]，早起就变成了他们固定的作息（stick to a routine）。而且他们做完事情以后，心情也很好[they also feel good after they finish their work]。",
    "g": "目标",
    "p": ["be a morning person", "mainly because…", "set myself a clear goal", "For example,…", "So…", "stick to a routine"]
  },
  "new-changed-opinion||When do most children begin to have their own opinions?": {
    "a": "我觉得孩子上小学以后就有自己的想法了[children have their own ideas after they start primary school]。主要是因为（mainly because…）他们在学校跟同学和老师说的话变多了[they talk more with their classmates and teachers at school]。比如（For example,…）很多三年级的孩子会跟妈妈争论谁洗碗[a lot of children in grade three argue with their mother about who washes the dishes]。所以（So…）我以前觉得（I used to think…）孩子什么都不懂[children do not understand anything]，现在我觉得（now I think…）他们很早就有自己的想法[they have their own ideas at an early age]。",
    "g": "关系",
    "p": ["mainly because…", "For example,…", "So…", "I used to think…", "now I think…"]
  },
  "new-changed-opinion||Do children communicate more with teachers or with parents?": {
    "a": "我觉得孩子跟父母说的话更多[children talk more with their parents]。主要是因为（mainly because…）孩子每天回家都能看到父母[children see their parents every day when they get home]，他们说话也很轻松[they can talk in a relaxed way]。比如（For example,…）很多小孩回到家以后，马上跟妈妈讲学校里的事情[a lot of children tell their mother about school right after they get home]。所以（So…）孩子不开心的时候[when children are unhappy]，他们一般也先跟父母说[they usually talk to their parents first]，因为在家里他们最放松[they feel most relaxed at home]。",
    "g": "关系",
    "p": ["mainly because…", "For example,…", "So…"]
  },
  "new-changed-opinion||Whose opinions are more important to children, their parents' or teachers'?": {
    "a": "我觉得父母的话对孩子更重要[what parents say is more important to children]。主要是因为（mainly because…）孩子跟父母在一起的时间最长[children spend the most time with their parents]，他们也最相信父母说的话[they trust what their parents say most]。比如（For example,…）很多孩子想学画画[a lot of children want to learn to draw]，如果爸爸说他支持[if their father says he supports it]，这个孩子就会一直学下去[the child will keep learning it]。所以（So…）父母的一句话真的可以改变孩子（make a difference to other people）。",
    "g": "关系",
    "p": ["mainly because…", "For example,…", "So…", "make a difference to other people"]
  },
  "new-changed-opinion||Who do most young people like to share opinions with?": {
    "a": "我觉得年轻人更愿意跟同年龄的朋友说自己的想法[young people prefer to share their ideas with friends of the same age]。主要是因为（mainly because…）朋友的年龄差不多[their friends are around the same age]，他们说话没有压力[they feel no pressure when they talk]，也不怕别人笑话他们[they are not afraid that others will laugh at them]。比如（For example,…）现在很多年轻人有事情的时候[when young people have something going on]，先在手机上跟朋友聊天[a lot of young people chat with their friends on their phones first]。所以（So…）年轻人遇到麻烦的时候[when young people have problems]，他们会先找朋友帮忙（turn to… for help）。",
    "g": "关系",
    "p": ["mainly because…", "For example,…", "So…", "turn to… for help"]
  },
  "new-recent-change||Do you think it is good to change one's daily routine?": {
    "a": "我觉得偶尔改一改是好事（Yes, definitely.）。主要是因为（mainly because…）如果每天都一样[if every day is the same]，人会觉得很无聊[people feel bored]，如果他们换一下，心情会更好[people feel better if they change something]。比如（For example,…）很多人晚上不再看手机[a lot of people stop looking at their phones at night]，他们改成晚饭以后出去走走（go for a walk after dinner），他们觉得轻松多了[they feel much more relaxed]。结果（As a result,…）他们睡得更好[they sleep better]，小的改变慢慢也会有效果（small changes add up）。",
    "g": "情绪",
    "p": ["Yes, definitely.", "mainly because…", "For example,…", "go for a walk after dinner", "As a result,…", "small changes add up"]
  },
  "new-recent-change||Do you think it is good to change jobs?": {
    "a": "我觉得这个要看情况，不过大部分时候是好事（It depends, but usually…）。主要是因为（mainly because…）换工作以后[after changing jobs]，很多人可以拿到更高的工资[they can get a higher salary]，机会也更多（many more job opportunities）。比如（For example,…）很多年轻人去年换了工作[a lot of young people changed jobs last year]，他们现在有了稳定的收入（a stable income）。所以（So…）如果一个人想清楚了再换工作[if someone thinks it over before changing jobs]，这一般是一件好事[this is usually a good thing]。",
    "g": "钱",
    "p": ["It depends, but usually…", "mainly because…", "many more job opportunities", "For example,…", "a stable income", "So…"]
  },
  "new-recent-change||Is it good for people to get a job promotion?": {
    "a": "我觉得升职对大部分人是好事（Yes, definitely.）。主要是因为（mainly because…）升职以后[after a promotion]，他们有更稳定的收入（a stable income），他们家里花钱也更轻松[their family can spend money more easily]。比如（For example,…）很多人去年升职了[a lot of people got promoted last year]，他们每个月多拿两千块[they get two thousand yuan more every month]，他们也很有成就感（a real sense of achievement）。所以（So…）就算工作累一点[even if the work is a bit tiring]，大部分人还是想升职[most people still want a promotion]。",
    "g": "钱",
    "p": ["Yes, definitely.", "mainly because…", "a stable income", "For example,…", "a real sense of achievement", "So…"]
  },
  "new-recent-change||Do people often make plans around their regular routines?": {
    "a": "我觉得很多人是这样（Yes, definitely.），他们会按照自己的作息安排事情（stick to a routine）。主要是因为（mainly because…）家里人每天要在一起吃饭[the family has to eat together every day]，所以他们把别的事情放在吃饭的前面或者后面[so they put other things before or after the meal]。比如（For example,…）大部分家庭每天六点做晚饭[most families make dinner at six every day]，家里每个人都按这个时间回家[everyone in the family comes home at that time]。所以（So…）家里其他人跟着做就行了[everyone else in the family just follows along]，这样的安排很好照着来（easy to follow）。",
    "g": "关系",
    "p": ["Yes, definitely.", "stick to a routine", "mainly because…", "For example,…", "So…", "easy to follow"]
  },
  "new-recent-change||Who tend to change their daily routine more, young people or old people?": {
    "a": "我觉得年轻人改得更多[young people change more]。主要是因为（mainly because…）如果朋友约他们，他们马上就出去了[if their friends invite them, they go out right away]，年轻人也愿意试新的东西（keep an open mind）。比如（For example,…）很多年轻人周末跟朋友吃饭[a lot of young people eat with friends at the weekend]，他们会把别的事情往后放[they put other things off until later]。所以（So…）老人一般不改[old people usually do not change]，他们还是按照原来的作息生活（stick to a routine）。",
    "g": "关系",
    "p": ["mainly because…", "keep an open mind", "For example,…", "So…", "stick to a routine"]
  },
  "new-important-river-lake||Are rivers and lakes important to a country?": {
    "a": "我觉得非常重要（Yes, definitely.）。主要是因为（mainly because…）河边的游客很多[there are a lot of tourists by the river]，附近开店的人有稳定的收入（a stable income）。比如（For example,…）很多人在河边开小饭馆和小商店[a lot of people run small restaurants and shops by the river]，夏天的时候他们能挣不少钱[they can make quite a lot of money in summer]。所以（So…）保护这些河是每个人的责任（it's everyone's responsibility），我们不能往河里扔垃圾[we should not throw rubbish into the river]。",
    "g": "钱",
    "p": ["Yes, definitely.", "mainly because…", "a stable income", "For example,…", "So…", "it's everyone's responsibility"]
  },
  "new-important-river-lake||What are the popular water sports in your country?": {
    "a": "我觉得最多人玩的是游泳和划船[the most popular ones are swimming and boating]，这两个运动的动作很好照着做（easy to follow）。主要是因为（mainly because…）夏天很热[summer is very hot]，大家在水里觉得很凉快，他们也玩得很开心[they feel cool in the water and they have a lot of fun]。比如（For example,…）很多人夏天去公园的湖上划船[a lot of people go boating on the park lake in summer]，他们在那里玩一个下午[they spend a whole afternoon there]，他们觉得很轻松[they feel very relaxed]。所以（So…）夏天大家喜欢去水边[people like to go near the water in summer]，因为他们想放松一下（relax after a long day）。",
    "g": "情绪",
    "p": ["easy to follow", "mainly because…", "For example,…", "So…", "relax after a long day"]
  },
  "new-important-river-lake||Are rivers and lakes good for transport? Why?": {
    "a": "我觉得挺好的（Yes, definitely.），特别是运东西的时候[especially when moving things]。主要是因为（mainly because…）一条船一次可以装很多东西[one boat can carry a lot of things at once]，走水路比走公路省钱（save money）。比如（For example,…）在我们这里[where I live]，很多沙子和煤都是用船运的[a lot of sand and coal are moved by boat]，因为用船比用车便宜很多[because a boat is much cheaper than a lorry]。而且船在水上不会堵车（get stuck in traffic），所以（So…）公司也很容易算好时间[companies can work out the time easily]。",
    "g": "钱",
    "p": ["Yes, definitely.", "mainly because…", "save money", "For example,…", "get stuck in traffic", "So…"]
  },
  "new-important-river-lake||How do rivers and lakes affect local tourism?": {
    "a": "我觉得影响很大[it has a big effect]，有水的地方游客明显更多[places with water clearly have more tourists]。主要是因为（mainly because…）游客在水边觉得很放松[tourists feel relaxed by the water]，而且那里可以看的和可以玩的也很多（there's a lot to see and do）。比如（For example,…）夏天的时候[in summer]，很多游客坐在我们这里的湖边看风景[a lot of tourists sit by our lake and enjoy the view]，他们觉得很舒服[they feel very comfortable]，他们也不想走了[and they do not want to leave]。所以（So…）我会把这种地方推荐给喜欢安静的人（I'd recommend it to anyone who…）。",
    "g": "情绪",
    "p": ["mainly because…", "there's a lot to see and do", "For example,…", "So…", "I'd recommend it to anyone who…"]
  },
  "new-important-river-lake||Do you think rivers and lakes attract tourists?": {
    "a": "我觉得会（Yes, definitely.），很多人出去玩的时候会选择水边的地方[they choose places near the water]。主要是因为（mainly because…）他们平时住在城市里[they usually live in the city]，他们很想出去呼吸新鲜空气（get some fresh air）。比如（For example,…）很多人周末去湖边[a lot of people go to the lake at the weekend]，他们只是坐在那里看水[they just sit there and look at the water]，他们觉得很安静，心情也很好[they feel quiet and they are in a good mood]。所以（So…）我觉得有河有湖的地方都很值得去（really worth visiting）。",
    "g": "情绪",
    "p": ["Yes, definitely.", "mainly because…", "get some fresh air", "For example,…", "So…", "really worth visiting"]
  },
  "new-important-river-lake||How can rivers and lakes benefit local people?": {
    "a": "我觉得好处很多[there are a lot of benefits]，当地人可以钓鱼和锻炼[local people can fish and exercise]，也可以挣游客的钱[they can make money from tourists]。主要是因为（mainly because…）游客变多以后[after more tourists come]，附近开店的人有稳定的收入（a stable income）。比如（For example,…）很多人在湖边开小饭馆（run my own business），夏天的时候他们的生意最好[their business is best in summer]。所以（So…）他们会认真听客人的意见（listen to what customers say），然后一直做下去[and keep it going]。",
    "g": "钱",
    "p": ["mainly because…", "a stable income", "For example,…", "run my own business", "So…", "listen to what customers say"]
  },
  "new-recommended-place||Where do people in your country often go for holidays?": {
    "a": "我们这里的人放假一般去海边[people where I live usually go to the seaside on holiday]，或者去附近的山里[or go to the mountains nearby]。主要是因为（mainly because…）去远的地方机票很贵[flights to faraway places are expensive]，大家想省一点钱（save money）。比如（For example,…）很多家庭五一假期开车去附近的水库[a lot of families drive to a nearby lake on the May holiday]，他们不用买机票，这样他们省了很多钱[they do not have to buy flight tickets and they save a lot of money]。所以（So…）近一点的地方最受欢迎[places closer to home are the most popular]，因为那里可以看的和可以玩的也很多（there's a lot to see and do）。",
    "g": "钱",
    "p": ["mainly because…", "save money", "For example,…", "So…", "there's a lot to see and do"]
  },
  "new-recommended-place||Where do young people in your country often go for holidays?": {
    "a": "我觉得年轻人更喜欢去人多的大城市[young people prefer big cities with a lot of people]。主要是因为（mainly because…）年轻人放假想跟朋友一起出去玩[young people want to go out with friends on holiday]，大城市里可以一起做的事情多了很多（there's a lot more choice now）。比如（For example,…）很多年轻人放假去成都[a lot of young people go to Chengdu on holiday]，晚上他们跟朋友一起出去吃饭（eat out with friends），然后他们聊到很晚[then they talk until late]。所以（So…）年轻人度假的时候，还是喜欢去大城市[young people still like to go to big cities on holiday]。",
    "g": "关系",
    "p": ["mainly because…", "there's a lot more choice now", "For example,…", "eat out with friends", "So…"]
  },
  "new-recommended-place||What is the ideal length for a holiday?": {
    "a": "我觉得一个星期最合适[I think one week is just right]。主要是因为（mainly because…）如果假期太短，人没有时间放松一下（relax after a long day）。如果假期太长，我们会觉得很累，回去上班也很难[we feel tired and it is hard to go back to work]。比如（For example,…）很多人请一个星期的假[many people take a week off]，他们出去玩四天，然后在家休息三天[they travel for four days and then rest at home for three days]，他们一点也不累[and they are not tired at all]。结果（As a result,…）他们回去上班的时候，感觉真的放松了[they feel really relaxed]。",
    "g": "情绪",
    "p": ["mainly because…", "relax after a long day", "For example,…", "As a result,…"]
  },
  "new-recommended-place||How do people usually plan holidays?": {
    "a": "我觉得大部分人现在用手机订票和订酒店[I think most people now book tickets and hotels on their phones]，这样省了很多时间，不过（it saves me a lot of time, but…）网上的信息不一定都对[the information online is not always right]。主要是因为（mainly because…）他们在手机上可以比一比价格[they can compare prices on their phones]，大家都想少花一点钱[everyone wants to spend less money]。比如（For example,…）很多人出去玩以前，先在几个网站上看酒店的价格[they first check hotel prices on a few websites]，然后他们订最便宜的那一家[then they book the cheapest one]。所以（So…）我不会相信网上写的每一句话（I don't believe everything I read），我会多看几家再决定[I check a few websites before I decide]。",
    "g": "钱",
    "p": ["it saves me a lot of time, but…", "mainly because…", "For example,…", "So…", "I don't believe everything I read"]
  },
  "new-recommended-place||Is it important to plan a holiday ahead?": {
    "a": "我觉得提前安排很重要（Yes, definitely.）。主要是因为（mainly because…）大家的假期都在同一个时间[everyone has their holiday at the same time]，如果我们订晚了，价格会很贵[if we book late, the price will be very high]。比如（For example,…）很多人国庆前一个星期才订酒店[many people only book a hotel a week before National Day]，最后他们付了两倍的钱[in the end they pay twice as much]。所以（So…）我觉得早一点订可以省很多钱（save money）。",
    "g": "钱",
    "p": ["Yes, definitely.", "mainly because…", "For example,…", "So…", "save money"]
  },
  "new-recommended-place||How do people decide when to travel?": {
    "a": "我觉得大家看假期和家里人的时间来决定[I think people decide based on their holidays and when their family is free]。主要是因为（mainly because…）只有放长假的时候，一家人才有时间在一起[only in a long holiday does the whole family have time together]。比如（For example,…）很多家庭等爸爸休年假，然后他们一起出去玩[a lot of families wait until the father takes his time off work]。所以（So…）大家也想避开最忙的时间出门[people also want to avoid going out at the busiest times]，因为他们不想在路上堵车（get stuck in traffic）。",
    "g": "关系",
    "p": ["mainly because…", "For example,…", "So…", "get stuck in traffic"]
  },
  "new-visit-home||Do Chinese people like to visit others' homes?": {
    "a": "我觉得大部分中国人还是喜欢去别人家做客（Yes, definitely.）。最主要的原因是（The main reason is that…）见面可以让大家的关系更近[visiting each other keeps people close]，打电话没有这种感觉[a phone call doesn't feel the same]。比如（For example,…）过年的时候，很多家庭会去亲戚家看看，一起吃个饭[they visit their relatives and have a meal together]。所以（So…）就算大家平时都很忙（everyone gets busy sometimes），一年也会见几次面[they still meet a few times a year]。",
    "g": "关系",
    "p": ["Yes, definitely.", "The main reason is that…", "For example,…", "So…", "everyone gets busy sometimes"]
  },
  "new-visit-home||What do Chinese people do when they visit others?": {
    "a": "我觉得他们一般会喝茶、聊天[I think they usually drink tea and chat]，主人也会留客人吃顿饭[the host also asks the guest to stay for a meal]。最主要的原因是（The main reason is that…）大家来就是想聚在一起，好好说说话[they come together just to talk and catch up]。比如（For example,…）很多人去亲戚家的时候会带点水果[many people bring some fruit when they visit relatives]，主人会在家里做几个简单的菜（cook something simple at home）。所以（So…）大家一边吃一边聊，关系也越来越好[they get closer as they eat and chat]。",
    "g": "关系",
    "p": ["The main reason is that…", "For example,…", "cook something simple at home", "So…"]
  },
  "new-visit-home||What kind of place do people in your country like to live in?": {
    "a": "我觉得大部分人还是喜欢住在城市里[I think most people still prefer living in the city]。主要是因为（mainly because…）城市里的工作机会更多（many more job opportunities），他们也更容易挣到钱[it is easier for them to make money]。比如（For example,…）很多人以前住在小县城[many people used to live in a small town]，后来他们搬到了市里[later they moved to the city]，因为他们在市里可以找到工资更高的工作[they can find a job with a higher salary in the city]。所以（So…）城市里的公共交通也很方便（public transport is easy to use），大家都愿意留在城市[everyone is willing to stay in the city]。",
    "g": "钱",
    "p": ["mainly because…", "many more job opportunities", "For example,…", "So…", "public transport is easy to use"]
  },
  "new-visit-home||What's the difference between homes in cities and those in the countryside?": {
    "a": "我觉得城市里的房子比较小，但是很方便；乡下的房子比较大，也很安静[city homes are smaller but easier for daily life, while country homes are bigger and quieter]。主要是因为（mainly because…）城市里人很多，土地很少[there are a lot of people and little land in the city]，房子也很贵[flats in the city are very expensive]。比如（For example,…）在乡下，很多人用很少的钱可以盖一个大房子[in the countryside people can build a big house with very little money]，但是在城市里，同样的钱只能买一个小房间[the same money only buys a small room in the city]。所以（So…）城市的好处是公共交通很方便（public transport is easy to use），大家出门就有地铁[there is a subway right outside]。而且住在乡下的人晚饭以后可以出去走走（go for a walk after dinner）。",
    "g": "钱",
    "p": ["mainly because…", "For example,…", "So…", "public transport is easy to use", "go for a walk after dinner"]
  },
  "new-visit-home||What kind of gifts do people bring when they visit others?": {
    "a": "我觉得大家一般带水果、茶叶或者牛奶[I think people usually bring fruit, tea or milk]。主要是因为（mainly because…）他们会先想一想对方需要什么[they think about what the other person needs]，然后他们挑一个别人真的会用的东西（pick something they'll actually use）。比如（For example,…）很多人去看老人的时候，会买一箱老人爱喝的牛奶[they buy a box of the milk that the old person likes]。所以（So…）礼物不用很贵[the gift doesn't need to be expensive]，重要的是这份心意（it's the thought that counts）。",
    "g": "关系",
    "p": ["mainly because…", "pick something they'll actually use", "For example,…", "So…", "it's the thought that counts"]
  },
  "new-visit-home||How often do you visit your relatives of friends?": {
    "a": "我大概一个月去看一次亲戚或者朋友[I visit my relatives or friends about once a month]。主要是因为（mainly because…）大家平时都要上班[everyone has to work during the week]，每个人有时候都很忙（everyone gets busy sometimes），我们只有周末才能见面[we can only meet at the weekend]。比如（For example,…）很多人周末去朋友家[many people go to a friend's home at the weekend]，中午他们一起吃饭[they have lunch together]，然后他们聊到很晚[then they talk until late]。所以（So…）我们见面的次数不多，但是每次都聊很久[we don't meet often, but each time we talk for a long time]。",
    "g": "关系",
    "p": ["mainly because…", "everyone gets busy sometimes", "For example,…", "So…"]
  },
  "new-boring-place||Why do most children think education is boring?": {
    "a": "我觉得孩子确实容易觉得上课很无聊[I think children really do find lessons boring]。主要是因为（mainly because…）每天的课都差不多[the lessons are similar every day]，他们只能坐着听老师讲[they can only sit and listen to the teacher]。比如（For example,…）一节课有四十分钟[a lesson lasts forty minutes]，很多学生在后面二十分钟开始不专心[many students lose focus in the last twenty minutes]，他们觉得很累，也很无聊[they feel tired and bored]。所以（So…）如果老师把内容拆成小的部分（break it down into small steps），学生会觉得好很多[students will feel much better]。",
    "g": "情绪",
    "p": ["mainly because…", "For example,…", "So…", "break it down into small steps"]
  },
  "new-boring-place||Why aren't young people willing to listen to the experiences of older people?": {
    "a": "我觉得年轻人确实不太喜欢听老人讲他们的经验[I think young people really don't like listening to older people's experiences]。主要是因为（mainly because…）老人的生活节奏比较慢（a slower pace of life），他们讲一件小事要讲很久[they take a long time to tell a small story]。比如（For example,…）很多老人常常说[many older people often say]，他们年轻的时候去哪里都走路（we used to walk everywhere），年轻人听了几分钟以后就觉得很无聊[young people feel bored after a few minutes]。所以（So…）年轻人还是尊重老人的[young people still respect the elderly]，但是他们说话的节奏不一样[but they talk at a different speed]。",
    "g": "情绪",
    "p": ["mainly because…", "a slower pace of life", "For example,…", "we used to walk everywhere", "So…"]
  },
  "new-boring-place||What can people do when they feel bored?": {
    "a": "我觉得人们无聊的时候最好出去走走[I think when people feel bored, it's best to go out for a walk]。主要是因为（mainly because…）如果他们在屋子里待很久，他们的心情会更差[they will feel worse]，出去呼吸新鲜空气会好很多（get some fresh air）。比如（For example,…）很多人晚饭以后出去走一圈（go for a walk after dinner），他们也会跟家人聊聊天[they also chat with their family]，他们的心情马上就好了[they feel better right away]。结果（As a result,…）他们走回来的时候，就不再想那些让他们不开心的事情了（it helps me forget about…）。",
    "g": "情绪",
    "p": ["mainly because…", "get some fresh air", "For example,…", "go for a walk after dinner", "As a result,…", "it helps me forget about…"]
  },
  "new-boring-place||Why are some teachers' class boring? Are there any solutions?": {
    "a": "我觉得有些老师的课确实很无聊[I think some teachers' classes really are boring]。主要是因为（mainly because…）老师一个人讲到下课[the teacher talks alone until class ends]，学生只能坐着听[students can only sit and listen]，他们很容易困[they get sleepy easily]。比如（For example,…）有些老师上课只念课本[some teachers just read from the textbook]，全班学生都在打瞌睡[the whole class falls asleep]。所以（So…）老师可以多提问[teachers can ask more questions]，也可以把内容拆成小的部分（break it down into small steps），这样课会好很多[then the class will be much better]。",
    "g": "情绪",
    "p": ["mainly because…", "For example,…", "So…", "break it down into small steps"]
  },
  "new-boring-place||Why do some young people feel bored when talking with old people?": {
    "a": "我觉得他们两边喜欢的话题不一样[I think the two sides like different topics]。主要是因为（mainly because…）老人喜欢说以前的事情[older people like to talk about the past]，但是年轻人不太爱听，他们很快就觉得无聊[young people don't really like it and they soon feel bored]。比如（For example,…）很多老人说[many older people say]，以前买东西没有几个牌子可以选[in the past there were only a few brands to choose from]，但是现在我们的选择多了很多（there's a lot more choice now），年轻人听到这里就想去看手机了[young people want to look at their phones then]。所以（So…）年轻人听了一会儿就不专心了[young people lose focus after a while]，但是他们并不讨厌老人[but they don't dislike older people]。",
    "g": "情绪",
    "p": ["mainly because…", "For example,…", "there's a lot more choice now", "So…"]
  },
  "new-boring-place||Do most people think news about celebrities is boring?": {
    "a": "我觉得不一定（Not really.），很多人很喜欢看名人的新闻[a lot of people really like reading celebrity news]。主要是因为（mainly because…）这种新闻的标题很吸引人（it catches your attention），他们看到以后就想点开看看[they want to click on it]。比如（For example,…）很多人在手机上看到明星的消息[many people see celebrity news on their phones]，他们会停下来看两眼[they stop to take a look]，他们觉得很有意思[they find it interesting]。不过这种新闻有很多是假的[but a lot of this news is fake]，所以（So…）我不会相信我看到的每一条消息（I don't believe everything I read）。",
    "g": "情绪",
    "p": ["Not really.", "mainly because…", "it catches your attention", "For example,…", "So…", "I don't believe everything I read"]
  },
  "new-favourite-city||Which is more suitable for young people, urban life or rural life, and which is more suitable for old people?": {
    "a": "我觉得年轻人适合住在城市，老人适合住在乡下[I think young people are suited to the city and older people to the countryside]。主要是因为（mainly because…）城市里的工作机会更多（many more job opportunities），年轻人可以多挣几年钱[young people can earn money for a few more years]。比如（For example,…）现在很多大学生毕业以后去广州工作[these days many graduates go to Guangzhou to work]，他们在几年里换了三份工作[they change jobs three times in a few years]，每次换完以后他们的工资都更高[their salary is higher after each change]。所以（So…）老人不用这么辛苦[older people don't need to work so hard]，乡下比较慢的生活更适合他们（a slower pace of life）。",
    "g": "钱",
    "p": ["mainly because…", "many more job opportunities", "For example,…", "So…", "a slower pace of life"]
  },
  "new-favourite-city||How do people choose a city to travel to?": {
    "a": "我觉得大部分人主要看这个地方贵不贵[most people look at how expensive the place is]。主要是因为（mainly because…）出去旅游要花很多钱，大部分人想省一点[travelling costs a lot of money, and most people want to save some]。比如（For example,…）很多人先比一比机票和酒店的价格[many people first compare flight and hotel prices]，然后他们选便宜的那个城市[then they choose the cheaper city]。所以（So…）价格是最重要的原因[price is the most important reason]，而且现在可以选的城市多了很多（there's a lot more choice now）。很多人也想跟朋友一起去一个热闹的城市[many people also want to go to a lively city with friends]，因为那里可以看的和可以玩的很多（there's a lot to see and do）。",
    "g": "钱",
    "p": ["mainly because…", "For example,…", "So…", "there's a lot more choice now", "there's a lot to see and do"]
  },
  "new-favourite-city||Do you think a tourist city is also a good place to live? Why?": {
    "a": "我觉得旅游城市住起来也很舒服[I think a tourist city is also comfortable to live in]。主要是因为（mainly because…）这种城市的公共交通很方便（public transport is easy to use），住在那里的人不用买车，他们也可以省钱[they do not need to buy a car and they can save money]。比如（For example,…）在厦门，很多人出门不开车[in Xiamen many people don't drive when they go out]，他们改成坐地铁（take the subway instead），这样他们每个月能省不少钱[they save quite a lot of money every month]。不过周末路上很容易堵车（get stuck in traffic），所以（So…）大家会选别的时间出门[people choose another time to go out]。",
    "g": "钱",
    "p": ["mainly because…", "public transport is easy to use", "For example,…", "take the subway instead", "get stuck in traffic", "So…"]
  },
  "new-favourite-city||Do most people prefer to travel in a modern city or a historical city?": {
    "a": "我觉得大部分人更喜欢去老的城市[most people prefer old cities]。主要是因为（mainly because…）老城里有很多东西可以看（there's a lot to see and do），所以游客觉得很开心[so the tourists feel very happy]。比如（For example,…）很多游客在老街上慢慢走的时候，他们觉得很放松[they feel very relaxed]。所以（So…）我觉得老城市很值得去一次（really worth visiting）。而且很多人喜欢跟朋友一起去[many people like to go with their friends]。",
    "g": "情绪",
    "p": ["mainly because…", "there's a lot to see and do", "For example,…", "So…", "really worth visiting"]
  },
  "new-tall-building||Are there many tall buildings in your country?": {
    "a": "是的（Yes, definitely.），我们国家有很多高楼[there are many tall buildings in my country]。主要是因为（mainly because…）城市里的土地很贵[land in the city is very expensive]，但是人们盖高楼可以省钱（save money）。比如（For example,…）在大城市里，很多人买不起大房子[many people cannot afford a big house]，所以他们住在高楼里的小房子[so they live in a small flat in a tall building]。所以（So…）高楼可以让房子便宜一点[tall buildings make housing a bit cheaper]。而且很多人在高峰期（at rush hour）坐地铁上班[many people take the subway to work]，因为地铁很便宜[the underground is cheap]。",
    "g": "钱",
    "p": ["Yes, definitely.", "mainly because…", "save money", "For example,…", "So…", "at rush hour"]
  },
  "new-tall-building||What are the differences between those tall buildings in your country?": {
    "a": "我觉得城市里的楼和农村的楼很不一样[I think city buildings and rural buildings are very different]。主要是因为（mainly because…）城市里的土地很贵[land in the city is very expensive]，所以人们盖很高的楼[so people build very tall buildings]。比如（For example,…）在很多小县城里，土地很便宜[the land is cheap]，所以那里的楼只有十几层[so the buildings there are only about ten floors]。所以（So…）农村的房子便宜很多[houses in the countryside are much cheaper]，那里的生活也比较慢（a slower pace of life）。而且很多人可以跟家人住在一起[many people can live with their family]。",
    "g": "钱",
    "p": ["mainly because…", "For example,…", "So…", "a slower pace of life"]
  },
  "new-tall-building||Why are different places laid out and designed differently?": {
    "a": "我觉得每个地方的情况不一样[the situation is different in every place]，所以设计也不一样[so the designs are different too]。主要是因为（mainly because…）大城市的土地很贵[land in big cities is very expensive]，人们设计的时候要省钱（save money）。比如（For example,…）市中心的土地最贵[land in the city centre is the most expensive]，所以那里有很多高楼[so there are many tall buildings there]。郊区的土地便宜[land in the suburbs is cheap]，所以那里的楼比较矮[so the buildings there are lower]。所以（So…）钱是最主要的原因[money is the main reason]。而且旅游城市会留下更多地方[tourist cities also leave more open space]，让游客有很多东西可以看（there's a lot to see and do）。",
    "g": "钱",
    "p": ["mainly because…", "save money", "For example,…", "So…", "there's a lot to see and do"]
  },
  "new-tall-building||What are the advantages of living in tall buildings?": {
    "a": "我觉得住在高楼里最大的好处是很安静[I think the biggest advantage of a tall building is that it's quiet]。主要是因为（mainly because…）楼层很高[the flat is high up]，所以他们听不到汽车的声音[they cannot hear the noise from the cars]，住在上面的人觉得很放松[they feel very relaxed]。比如（For example,…）很多人住在十八楼[many people live on the eighteenth floor]，他们晚上打开窗户的时候，也觉得很舒服[they feel very comfortable]。所以（So…）他们下班以后可以好好休息（relax after a long day）。而且高楼里的小房子比大房子省钱[a small flat is cheaper than a big house]。",
    "g": "情绪",
    "p": ["mainly because…", "For example,…", "So…", "relax after a long day"]
  },
  "new-tall-building||Why do some people like to remodel and decorate their homes themselves?": {
    "a": "我觉得很多人自己装修房子[I think many people decorate their homes themselves]，因为他们想省钱[because they want to save money]。主要是因为（mainly because…）请工人装修要花很多钱[it costs a lot to hire workers]，但是自己做可以省下成本（save money）。比如（For example,…）很多人自己刷墙，也自己装灯[many people paint the walls and put up lights themselves]，所以他们可以省很多钱[they can save a lot of money]。他们把这件事分成很多小步（break it down into small steps）。结果（As a result,…）他们花的钱少了一半[they spend half as much money]。而且他们做完以后很有成就感（a real sense of achievement）。",
    "g": "钱",
    "p": ["mainly because…", "save money", "For example,…", "break it down into small steps", "As a result,…", "a real sense of achievement"]
  },
  "new-tall-building||What kind of interior design style do most people like?": {
    "a": "我觉得大部分人喜欢简单干净的风格[I think most people like a simple, clean style]。主要是因为（mainly because…）他们上了一天班[they've worked all day]，回家以后想好好休息（relax after a long day）。比如（For example,…）很多人家里的东西很少[there are only a few things in their homes]。他们坐在沙发上[they sit on the sofa]，他们打开灯[they turn on the light]，然后他们就觉得很放松[they feel very relaxed]。所以（So…）他们会减少多余的东西（cut down on…）。而且简单的风格也可以省钱[a simple style can also save money]。",
    "g": "情绪",
    "p": ["mainly because…", "relax after a long day", "For example,…", "So…", "cut down on…"]
  },
  "new-free-time-travel-place||Why do you think some people choose not to travel abroad?": {
    "a": "我觉得主要的原因是钱[I think the main reason is money]。主要是因为（mainly because…）出国的机票和酒店都很贵[flights and hotels abroad are very expensive]，很多人不想花这么多钱[many people do not want to spend so much money]。比如（For example,…）大部分人觉得，几万块钱只玩一个星期太贵了[it is too expensive to travel for only one week]。所以（So…）他们会去国内近一点的地方[they go somewhere closer at home]，因为这样可以省钱（save money）。而且他们也可以跟家人一起去[they can also go with their family]。",
    "g": "钱",
    "p": ["mainly because…", "For example,…", "So…", "save money"]
  },
  "new-free-time-travel-place||Do you think a gap period in life is important?": {
    "a": "是的（Yes, definitely.），我觉得中间休息一段时间很重要[I think it's important to take a break in between]。主要是因为（mainly because…）如果一个人一直工作，他没有时间想自己以后的目标[he has no time to think about his future goals]。比如（For example,…）很多年轻人毕业以后休息几个月[many young people take a few months off after graduating]，他们在这段时间里想清楚要做什么工作[they work out what job they want to do]。结果（As a result,…）他们回去工作以后更清楚自己的方向[they are clearer about their direction]。如果我有这样的机会[if I had a chance like this]，我会给自己定一个明确的目标（set myself a clear goal），然后我可以看到自己真的有进步（see real progress）。",
    "g": "目标",
    "p": ["Yes, definitely.", "mainly because…", "For example,…", "set myself a clear goal", "As a result,…", "see real progress"]
  },
  "new-met-once-person||What can we do to leave a good impression on people we meet for the first time?": {
    "a": "我觉得（I think…）最重要的是有礼貌[to be polite]，也要认真听别人说话[listen carefully]。因为（because…）认真听会让对方觉得受到尊重[the other person feels respected]。比如（For example,…）很多人第一次见面的时候不看手机，只看着对方[they only look at the other person]。而且（Also,…）见面的时候笑一笑，说话客气一点[smile and speak politely]。所以（So…）对方很快就会喜欢你[the other person soon likes you]。",
    "g": "关系",
    "p": ["I think…", "because…", "For example,…", "Also,…", "So…"]
  },
  "new-met-once-person||What should we not talk about when we meet a person for the first time?": {
    "a": "我觉得（I think…）第一次见面不应该问收入和家里的事[income or family matters]。因为（because…）这些问题太私人了，对方会不舒服[the other person feels uncomfortable]。比如（For example,…）很多人和新朋友吃饭的时候，只聊吃的和电影[food and movies]。而且（Also,…）也别问别人多大年纪、结没结婚[age or marriage]。所以（So…）先聊轻松的话题比较安全[safer to talk about light topics]。",
    "g": "关系",
    "p": ["I think…", "because…", "For example,…", "Also,…", "So…"]
  },
  "new-met-once-person||How do people make friends in China?": {
    "a": "我觉得（I think…）大部分人在学校和公司里交朋友[at school and at work]。因为（because…）他们每天见面，有很多共同的话题[a lot to talk about]。比如（For example,…）很多人下班以后和同事一起出去吃饭[eat out with workmates]。而且（Also,…）周末他们也会一起打球、看电影[play ball or watch films together]。所以（So…）他们慢慢就成了朋友[they slowly become friends]。",
    "g": "关系",
    "p": ["I think…", "because…", "For example,…", "Also,…", "So…"]
  },
  "new-met-once-person||On what occasions do people like to make friends?": {
    "a": "我觉得（I think…）人们到了一个新地方的时候最想交朋友[when they arrive somewhere new]。因为（because…）在新地方他们谁都不认识，想找人说话[want someone to talk to]。比如（For example,…）很多人晚饭以后和邻居一起去散步（go for a walk after dinner），就这样聊了起来[they start chatting]。而且（Also,…）在新公司上班的时候，大家也会一起吃午饭[have lunch together]。所以（So…）一起做事的时候最容易交到朋友[easiest to make friends]。",
    "g": "关系",
    "p": ["I think…", "because…", "For example,…", "go for a walk after dinner", "Also,…", "So…"]
  },
  "new-met-once-person||Is it important to have the same hobbies and interests when making friends?": {
    "a": "我觉得（I think…）一样的爱好有帮助，但不是必须的[helps, but not necessary]。因为（because…）爱好一样的人在一起会很开心，也能好好放松（relax after a long day）。比如（For example,…）很多朋友一起出去吃饭的时候聊球赛，聊得很开心[chat about football happily]。而且（Also,…）周末他们还会一起去打球、爬山[play ball or climb hills]。所以（So…）有一样的爱好会让朋友更亲近[brings friends closer]。",
    "g": "情绪",
    "p": ["I think…", "because…", "relax after a long day", "For example,…", "Also,…", "So…"]
  },
  "new-met-once-person||What qualities make true friends?": {
    "a": "我觉得（I think…）真正的朋友应该诚实，也让人放心[honest and reliable]。因为（because…）好朋友会想着别人的感受[think about how others feel]。比如（For example,…）很多人电脑出了问题的时候，会找朋友帮忙（turn to… for help）。而且（Also,…）你难过的时候，他会一直陪着你[stay with you]。所以（So…）可靠的人才是真正的朋友[someone you can count on]。",
    "g": "关系",
    "p": ["I think…", "because…", "For example,…", "turn to… for help", "Also,…", "So…"]
  },
  "new-impressive-course||What do people need to remember in their daily lives?": {
    "a": "这个看情况（It depends, but usually…），大部分人要记住上班时间和吃药这样的小事[work times and taking medicine]。因为（because…）要是忘了，他们一天的安排就乱了[their plan does not work]。比如（For example,…）很多人每天按固定的时间做事（stick to a routine），所以不着急[so they do not worry]。而且（Also,…）他们还会把要办的事写在手机上[write things on the phone]。所以（So…）他们很少忘记事情[they rarely forget things]。",
    "g": "情绪",
    "p": ["It depends, but usually…", "because…", "For example,…", "stick to a routine", "Also,…", "So…"]
  },
  "new-impressive-course||What can we learn from history?": {
    "a": "我觉得（I think…）我们可以学到以前的人是怎么生活的[how people lived in the past]。因为（because…）读历史可以开阔眼界（broaden my horizons），遇到问题也不会那么慌[less panic]。比如（For example,…）很多人读了很多历史书，遇到问题的时候不太害怕[not very afraid]。而且（Also,…）我们也能从老故事里学到做人的道理[learn how to be a good person]。所以（So…）多了解过去对我们很有用[useful to understand the past]。",
    "g": "情绪",
    "p": ["I think…", "because…", "broaden my horizons", "For example,…", "Also,…", "So…"]
  },
  "new-impressive-course||Why do some people have a better memory than others?": {
    "a": "我觉得（I think…）他们对那件事更感兴趣[more interested in it]。因为（because…）一个人喜欢一样东西，记起来就很容易（easy to follow）。比如（For example,…）很多学生喜欢历史课，所以记得又快又牢[remember it quickly]。而且（Also,…）他们还会和同学一起复习，互相提问[test each other]。所以（So…）有兴趣的东西大家都记得更好[remember better]。",
    "g": "情绪",
    "p": ["I think…", "because…", "easy to follow", "For example,…", "Also,…", "So…"]
  },
  "new-impressive-course||Do people like things of memorial significance?": {
    "a": "是的（Yes, definitely.），很多人喜欢留着老照片和旧礼物[old photos and old gifts]。因为（because…）看到这些东西就会想起那个人，心意才是最重要的（it's the thought that counts）。比如（For example,…）很多人用朋友送的杯子用了好几年[use it for several years]。而且（Also,…）他们还会把老照片挂在墙上[hang old photos on the wall]。所以（So…）这些东西不贵，但他们不想扔掉[do not want to throw them away]。",
    "g": "关系",
    "p": ["Yes, definitely.", "because…", "it's the thought that counts", "For example,…", "Also,…", "So…"]
  },
  "new-impressive-course||Which can help people remember things better, words or photos?": {
    "a": "我觉得（I think…）照片更有用[photos are more useful]。因为（because…）看照片能想起当时的心情，照片也很好懂（easy to follow）。比如（For example,…）很多人出去玩的时候会拍很多照片[take a lot of photos]。而且（Also,…）过几年再看这些照片，心里还是很开心[still feel happy]。所以（So…）照片能让人记得更牢[remember things better]。",
    "g": "情绪",
    "p": ["I think…", "because…", "easy to follow", "For example,…", "Also,…", "So…"]
  },
  "new-impressive-course||Can technology help people remember things better? How?": {
    "a": "是的（Yes, definitely.），我觉得手机可以帮人记事[phones help people remember things]。因为（because…）手机上的软件都是免费的，很省时间又方便（time-saving and efficient）。比如（For example,…）很多人用手机定闹钟，不用再买本子和笔[no need for notebooks and pens]。而且（Also,…）他们也会把要办的事记在手机上[note things down on the phone]。所以（So…）他们很少忘记事情，还省了钱[rarely forget and save money]。",
    "g": "钱",
    "p": ["Yes, definitely.", "because…", "time-saving and efficient", "For example,…", "Also,…", "So…"]
  },
  "new-friend-gift||When do people normally send gifts to others?": {
    "a": "我觉得（I think…）人们一般在生日、节日和去别人家做客的时候送礼物[on birthdays, festivals and visits]。因为（because…）送礼物是想让对方知道你很在乎他，心意才是最重要的（it's the thought that counts）。比如（For example,…）很多人去朋友家吃饭的时候会带一些水果[bring some fruit]。而且（Also,…）过节的时候，他们也会给家里人买点东西[buy things for family]。所以（So…）不同的场合，人们送的东西也不一样[different gifts for different occasions]。",
    "g": "关系",
    "p": ["I think…", "because…", "it's the thought that counts", "For example,…", "Also,…", "So…"]
  },
  "new-friend-gift||Is it hard to choose a gift?": {
    "a": "这个看情况（It depends, but usually…），给熟人挑礼物不难[not hard for someone you know well]。因为（because…）我们知道他喜欢什么，可以挑他真的会用的东西（pick something they'll actually use）。比如（For example,…）很多人给同事挑礼物的时候就觉得很难，怕他用不上[afraid he will not use it]。而且（Also,…）不太熟的话，我们可以送简单实用的东西[something simple and useful]。所以（So…）了解一个人，挑礼物就不难[easy when you know them]。",
    "g": "关系",
    "p": ["It depends, but usually…", "because…", "pick something they'll actually use", "For example,…", "Also,…", "So…"]
  },
  "new-friend-gift||Will people feel happy when receiving an expensive gift?": {
    "a": "不一定（Not really.），我觉得贵的礼物不一定让人开心[expensive gifts do not always make people happy]。因为（because…）礼物太贵，对方会有压力，觉得也要回一个贵的[feels pressure to give back]。比如（For example,…）很多人收到很贵的礼物时反而不太自在[do not feel comfortable]。而且（Also,…）他们收到一个小杯子却很开心，因为那是真的会用的东西（pick something they'll actually use）。所以（So…）心意才是最重要的（it's the thought that counts）。",
    "g": "情绪",
    "p": ["Not really.", "because…", "For example,…", "Also,…", "pick something they'll actually use", "So…", "it's the thought that counts"]
  },
  "new-friend-gift||Which do people give on traditional festivals, red envelopes or other kinds of gifts?": {
    "a": "我觉得（I think…）两种都有，要看是什么节日[depends on the festival]。因为（because…）红包很方便，收到的人可以自己买真的会用的东西（pick something they'll actually use）。比如（For example,…）过年的时候，大人一般给小孩红包[adults give children red envelopes]。而且（Also,…）中秋节的时候，他们会送月饼和水果[give mooncakes and fruit]。所以（So…）不同的节日，送礼的方法也不一样[different ways for different festivals]。",
    "g": "钱",
    "p": ["I think…", "because…", "pick something they'll actually use", "For example,…", "Also,…", "So…"]
  },
  "new-friend-gift||What do people usually consider when buying gifts?": {
    "a": "我觉得（I think…）人们主要看对方需要什么，也看自己能花多少钱[what they need and how much to spend]。因为（because…）大部分人想少花点钱（save money），但礼物也要合适[the gift must be suitable]。比如（For example,…）很多人先定好预算，再挑一个对方真的会用的东西（pick something they'll actually use）。而且（Also,…）他们也会想想对方平时喜欢什么[what the person likes]。所以（So…）合适的礼物比贵的礼物更好[a suitable gift is better]。",
    "g": "钱",
    "p": ["I think…", "because…", "save money", "For example,…", "pick something they'll actually use", "Also,…", "So…"]
  },
  "new-friend-gift||Are there any unlucky things that people should not buy as gifts in your country?": {
    "a": "是的（Yes, definitely.），我们这里的人不送钟，也不送伞[do not give clocks or umbrellas]。因为（because…）送这些东西，收到的人会不高兴，这个老规矩也有它的道理（it's there for a reason）。比如（For example,…）很多人给长辈送茶叶，因为长辈真的会喝[the elders really drink it]。而且（Also,…）他们也常送水果和点心[fruit and snacks]。所以（So…）送礼以前，很多人会先问问家里人[ask their family first]。",
    "g": "关系",
    "p": ["Yes, definitely.", "because…", "it's there for a reason", "For example,…", "Also,…", "So…"]
  },
  "new-organized-person||Why is it important for people to be organized?": {
    "a": "我觉得（I think…）做事有条理很重要[being organized is important]。因为（because…）先安排好事情的人不会着急，压力也小[less worried and less stress]。比如（For example,…）很多人每天按固定的时间做事（stick to a routine），上班的时候不紧张[not nervous at work]。而且（Also,…）他们下班以后还能好好放松（relax after a long day）。所以（So…）有条理的人日子过得更轻松[life is much easier]。",
    "g": "情绪",
    "p": ["I think…", "because…", "For example,…", "stick to a routine", "Also,…", "relax after a long day", "So…"]
  },
  "new-organized-person||Do you think children should learn to be organized from a young age?": {
    "a": "是的（Yes, definitely.），我觉得孩子小的时候就应该学[should learn when young]。因为（because…）孩子会自己收拾东西，父母就轻松多了[parents have less to do]。比如（For example,…）很多孩子每天自己收拾书包，按固定的时间做事（stick to a routine）。而且（Also,…）他们还会自己整理房间[tidy their own room]。所以（So…）父母不用每天提醒他们了[do not have to remind them]。",
    "g": "关系",
    "p": ["Yes, definitely.", "because…", "For example,…", "stick to a routine", "Also,…", "So…"]
  },
  "new-organized-person||Are organized people more likely to be successful at work or in their studies?": {
    "a": "是的（Yes, definitely.），我觉得有条理的人一般做得更好[usually do better]。因为（because…）他们会把大事分成很多小步（break it down into small steps）。比如（For example,…）很多学生学英语，先背单词，再学句子[learn words first, then sentences]。而且（Also,…）他们每天都有一个小目标，从不拖到最后[a small goal every day]。所以（So…）他们能看到自己真的有进步（see real progress）。",
    "g": "目标",
    "p": ["Yes, definitely.", "because…", "break it down into small steps", "For example,…", "Also,…", "So…", "see real progress"]
  },
  "new-organized-person||What can people do to become more organized?": {
    "a": "我觉得（I think…）我们可以先写一个单子，把今天要做的事写下来[write down things to do today]。因为（because…）先给自己定一个明确的目标（set myself a clear goal），事情就不乱了[things won't be messy]。比如（For example,…）很多人早上先写下今天最重要的三件事，然后先做最难的[do the hardest one first]。而且（Also,…）他们还会把大事分成很多小步（break it down into small steps）。所以（So…）这样做事又快又不慌[fast and calm]。",
    "g": "目标",
    "p": ["I think…", "because…", "set myself a clear goal", "For example,…", "Also,…", "break it down into small steps", "So…"]
  },
  "new-organized-person||Should parents teach their children to be organized?": {
    "a": "我觉得（I think…）父母在家里就要教孩子[teach children at home]。因为（because…）孩子每天看着父母做事，学得最快[learn fastest]。比如（For example,…）很多父母让孩子先收好书包，再一起吃饭[pack the bag, then eat together]。而且（Also,…）他们也会让孩子自己整理房间[tidy their own room]。所以（So…）这些孩子长大以后也会按固定的时间做事（stick to a routine）。",
    "g": "关系",
    "p": ["I think…", "because…", "For example,…", "Also,…", "So…", "stick to a routine"]
  },
  "new-organized-person||Do you think it is important for managers to be well organized?": {
    "a": "是的（Yes, definitely.），我觉得管理别人的人更要有条理[managers need to be more organized]。因为（because…）领导要是很乱，全组的人都会跟着做很多没用的事[the whole team wastes time]。比如（For example,…）在很多公司里，每个人做自己擅长的事（each do what we're good at）。而且（Also,…）每个人只负责一个部分（be responsible for one part of…）。所以（So…）这样大家做事又快，压力又小[fast with less stress]。",
    "g": "关系",
    "p": ["Yes, definitely.", "because…", "For example,…", "each do what we're good at", "Also,…", "be responsible for one part of…", "So…"]
  },
  "new-famous-interview||What kinds of people are usually interviewed?": {
    "a": "这个看情况（It depends, but usually…），大部分是有名的人和找工作的人[famous people and job seekers]。因为（because…）公司想听听顾客怎么说（listen to what customers say），记者也想知道别人的想法[reporters want to know what others think]。比如（For example,…）很多年轻人找工作的时候，公司会先跟他们聊一次[the company talks with them first]。而且（Also,…）电视上也常采访演员和运动员[actors and athletes]。所以（So…）被采访的大部分是这两种人[mostly these two kinds]。",
    "g": "关系",
    "p": ["It depends, but usually…", "because…", "listen to what customers say", "For example,…", "Also,…", "So…"]
  },
  "new-famous-interview||Why do some people dislike being interviewed?": {
    "a": "我觉得（I think…）很多人不喜欢被采访[do not like being interviewed]。因为（because…）别人一直看着他们，他们会很紧张，很难放松（relax after a long day）。比如（For example,…）很多人在面试前一天晚上都睡不好[cannot sleep well the night before]。而且（Also,…）他们也担心别人怎么看自己[worry what others think]。所以（So…）有些人尽量不接受采访[try not to accept interviews]。",
    "g": "情绪",
    "p": ["I think…", "because…", "relax after a long day", "For example,…", "Also,…", "So…"]
  },
  "new-famous-interview||Why do some people think interviews are waste of time?": {
    "a": "我觉得（I think…）有些面试真的是在浪费时间[a waste of time]。因为（because…）很多人面试了好几次还是没找到工作，也没有稳定的收入（a stable income）。比如（For example,…）很多年轻人去面试要花路费和时间，最后却没拿到工作[no job in the end]。而且（Also,…）来回跑好几趟，人也很累[tiring to travel back and forth]。所以（So…）他们觉得直接去打工更实在[better to just go and work]。",
    "g": "钱",
    "p": ["I think…", "because…", "a stable income", "For example,…", "Also,…", "So…"]
  },
  "new-famous-interview||What should people do to prepare for a job interview?": {
    "a": "我觉得（I think…）提前准备最重要[preparing in advance is most important]。因为（because…）我们先要知道自己想做什么工作，给自己定一个明确的目标（set myself a clear goal）。比如（For example,…）很多人面试前会先看看这家公司，每天练几个常见的问题[practise common questions]。而且（Also,…）他们还会把准备分成很多小步（break it down into small steps）。所以（So…）准备好了，说话就不那么紧张[less nervous]。",
    "g": "目标",
    "p": ["I think…", "because…", "set myself a clear goal", "For example,…", "Also,…", "break it down into small steps", "So…"]
  },
  "new-happy-person||Should teachers know what children are doing all the time?": {
    "a": "不用（Not really.），我觉得老师不用每分钟都知道[do not need to know every minute]。因为（because…）管得太紧，孩子会害怕，有问题也不敢找老师帮忙（turn to… for help）。比如（For example,…）很多老师会给学生一点自由的时间[some free time]。而且（Also,…）孩子有问题的时候，反而会主动去找老师[go to the teacher on their own]。所以（So…）给孩子一点空间会更好[give children some space]。",
    "g": "关系",
    "p": ["Not really.", "because…", "turn to… for help", "For example,…", "Also,…", "So…"]
  },
  "new-happy-person||Do you think teachers are able to spot unhappy children?": {
    "a": "这个看情况（It depends, but usually…），大部分老师都能看出来[most teachers can tell]。因为（because…）孩子不开心的时候会变得很安静[unhappy children become very quiet]。比如（For example,…）有的学生上课突然不说话了，老师会课后找他聊一聊[a student stops talking in class, and the teacher chats with him after class]。而且（Also,…）老师每天都见到这些孩子，很容易发现不一样的地方[also, teachers see these children every day and notice small changes]。所以（So…）老师一般都能发现不开心的孩子[so teachers can usually spot the unhappy children]。",
    "g": "情绪",
    "p": ["It depends, but usually…", "because…", "For example,…", "Also,…", "So…"]
  },
  "new-happy-person||How can arts spread positive emotions in society?": {
    "a": "我觉得（I think…）艺术可以让大家的心情变好[art can make people feel happier]。因为（because…）大家一起看电影、听歌的时候很开心[people feel happy when they watch films and listen to songs together]。比如（For example,…）很多人看到一首好听的歌，就会马上发给朋友[people hear a nice song and send it to their friends right away]。而且（Also,…）朋友们还会一起聊这些歌和电影[also, friends chat about these songs and films together]。所以（So…）好心情就这样传给了身边的人[so the good mood passes to the people around them]。",
    "g": "关系",
    "p": ["I think…", "because…", "For example,…", "Also,…", "So…"]
  },
  "new-local-famous-person||Is it always good to be a popular student at school?": {
    "a": "不一定（Not really.），受欢迎有好的一面，也有累的一面[being popular has good and tiring sides]。因为（because…）朋友太多的时候要照顾很多人[when you have too many friends, you have to look after a lot of people]。比如（For example,…）很多受欢迎的学生每天都有人找他们玩，很少有自己的时间[popular students have people asking them to play every day and little time for themselves]。而且（Also,…）真正的朋友有几个就够了[also, a few real friends are enough]。所以（So…）受欢迎不一定总是好事[so being popular is not always a good thing]。",
    "g": "情绪",
    "p": ["Not really.", "because…", "For example,…", "Also,…", "So…"]
  },
  "new-local-famous-person||Why are some students popular?": {
    "a": "我觉得（I think…）受欢迎的学生一般对别人都很好[popular students are usually kind to others]。因为（because…）他们愿意帮助身边的同学[they are happy to help the classmates around them]。比如（For example,…）很多学生会帮同学看作业里的问题[students help classmates with problems in their homework]。而且（Also,…）他们平时也很爱笑、很好说话[also, they smile a lot and are easy to talk to]。所以（So…）大家都很喜欢和他们在一起[so everyone likes being with them]。",
    "g": "关系",
    "p": ["I think…", "because…", "For example,…", "Also,…", "So…"]
  },
  "new-happy-important-decision||How can we tell the difference between an important and an easy decision?": {
    "a": "我觉得（I think…）主要看这个决定花多少钱[it mainly depends on how much money the decision costs]。因为（because…）重要的决定一般和钱、工作有关系[important decisions are usually about money and work]。比如（For example,…）今天晚上吃什么只要几十块，但是买房子要花很多钱[what to eat tonight costs a little, but buying a house costs a lot]。而且（Also,…）大的决定也会影响我们的家人[also, big decisions affect our family]。所以（So…）花钱多的决定就是重要的决定[so decisions that cost more money are the important ones]。",
    "g": "钱",
    "p": ["I think…", "because…", "For example,…", "Also,…", "So…"]
  },
  "new-happy-important-decision||Do you think it is a good idea to make a small decision every day?": {
    "a": "是的（Yes, definitely.），每天做一些小决定很好[making some small decisions every day is good]。因为（because…）我们可以把大事分成很多小步（break it down into small steps）[we can break a big thing down into small steps]。比如（For example,…）很多人每天早上先定三件要做的事，晚上再检查[people choose three things to do in the morning and check in the evening]。而且（Also,…）这样每天都能有一点成就感[also, this gives a little sense of achievement every day]。所以（So…）一个月以后就能看到真的进步[so after a month they can see real progress]。",
    "g": "目标",
    "p": ["Yes, definitely.", "because…", "break it down into small steps", "For example,…", "Also,…", "So…"]
  },
  "new-happy-important-decision||What little decisions do people make every day?": {
    "a": "我觉得（I think…）大部分是吃什么、怎么去上班这样的小事[most are small things like what to eat and how to get to work]。因为（because…）大家每天都想省一点钱（save money）[people want to save money every day]。比如（For example,…）很多人平时在家做点简单的饭[people cook something simple at home on weekdays]。而且（Also,…）他们周末才和朋友一起出去吃[also, they eat out with friends only at the weekend]。所以（So…）人们每天都要做很多这样的小决定[so people make a lot of these small decisions every day]。",
    "g": "钱",
    "p": ["I think…", "because…", "save money", "For example,…", "Also,…", "So…"]
  },
  "new-happy-important-decision||What if people in a group have different opinions on a decision?": {
    "a": "我觉得（I think…）大家应该先听每个人把话说完[people should listen to everyone first]。因为（because…）每个人负责的部分不一样，想法当然不同[people are in charge of different parts, so their ideas are different]。比如（For example,…）很多公司开会的时候会让大家一起投票[in company meetings, everyone votes together]。而且（Also,…）每个人可以做自己擅长的那部分（each do what we're good at）[also, each person can do what they are good at]。所以（So…）大家一起决定比一个人快很多[so deciding together is much faster than one person alone]。",
    "g": "关系",
    "p": ["I think…", "because…", "For example,…", "Also,…", "each do what we're good at", "So…"]
  },
  "new-happy-important-decision||Do you think most people's decisions are made in their 20s?": {
    "a": "不一定（Not really.），后面还有很多大决定[there are still a lot of big decisions later]。因为（because…）人们以后还要换工作、买房子[people will change jobs and buy a house later]。比如（For example,…）很多人三十多岁才决定去哪个城市工作[a lot of people decide which city to work in only in their thirties]。而且（Also,…）这些决定都要花很多钱[also, these decisions all cost a lot of money]。所以（So…）人一辈子都在做决定[so people make decisions all their life]。",
    "g": "钱",
    "p": ["Not really.", "because…", "For example,…", "Also,…", "So…"]
  },
  "new-happy-important-decision||Which is better, to make a decision quickly or slowly?": {
    "a": "这个看情况（It depends, but usually…），小事可以很快决定[small things can be decided quickly]。因为（because…）遇到大事的时候不能太急[we cannot rush when we meet big things]。比如（For example,…）很多人很快决定晚上吃什么，但是换工作要想几个月[people decide what to eat quickly but think for months before changing jobs]。而且（Also,…）大事最好先给自己定一个清楚的目标（set myself a clear goal）[also, for big things it is better to set myself a clear goal first]。所以（So…）事情不一样，决定的速度也不一样[so different things need different speeds]。",
    "g": "目标",
    "p": ["It depends, but usually…", "because…", "For example,…", "Also,…", "set myself a clear goal", "So…"]
  },
  "retained-helpful-person||Should children help their parents with household chores?": {
    "a": "我觉得应该（Yes, I think so.）。主要是因为（mainly because…）孩子做一点家务能减少父母的工作[children can do a little housework to help their parents]，也能让全家关系更亲近（make the family closer）。比如（For example,…）很多孩子会洗碗或者倒垃圾[a lot of kids wash the dishes or take out the rubbish]。所以（As a result,…）父母不会那么累[parents don't feel so tired]，而且孩子也能学会负责（learn to be responsible）。",
    "g": "关系",
    "p": ["Yes, I think so.", "mainly because…", "make the family closer", "For example,…", "As a result,…", "learn to be responsible"]
  },
  "retained-helpful-person||What kind of help do people need when looking for a new job?": {
    "a": "我觉得他们需要很多帮助（they need a lot of help）。最主要的原因是（The main reason is that…）找工作很难，一个人做不好[looking for a job is hard, and it is not easy to do it alone]，别人可以帮忙看简历（check their CV）。比如（For example,…）很多年轻人第一次找工作的时候，会请朋友帮忙分享招聘信息[a lot of young people ask friends to share job news when they look for their first job]。所以（As a result,…）他们能更快找到工作[they can find a job faster]，也能有稳定的收入（a stable income）。",
    "g": "钱",
    "p": ["they need a lot of help", "The main reason is that…", "check their CV", "For example,…", "As a result,…", "a stable income"]
  },
  "retained-helpful-person||Who should people ask for help, colleagues or family members?": {
    "a": "我觉得这要看问题（It depends, but usually…）。主要是因为（mainly because…）同事更懂工作上的事，家人更懂生活上的事[workmates know more about work things, and family know more about life things]，所以找对人很重要（ask the right person）。比如（For example,…）很多人工作上有问题就问同事，家里有问题就问家人[a lot of people ask workmates about work and ask family about home]。所以（So…）他们能更快解决问题[they can solve the problem faster]，也能省很多时间（save a lot of time）。",
    "g": "关系",
    "p": ["It depends, but usually…", "mainly because…", "ask the right person", "For example,…", "So…", "save a lot of time"]
  },
  "retained-helpful-person||Why do you think some people are more willing to help others than some?": {
    "a": "我觉得（I think…）有些人天生更喜欢帮人。主要是因为（mainly because…）他们以前也遇到过同样的难处，所以更懂别人的感受[they had the same trouble before, so they understand others' feelings]。比如（For example,…）很多有经验的同事很喜欢帮新人[a lot of workmates with experience like to help new people]。所以（As a result,…）他们更愿意伸手帮忙[they are more ready to help others]，而且帮到人以后自己也觉得很开心、很有用（feel happy and useful）。",
    "g": "情绪",
    "p": ["I think…", "mainly because…", "For example,…", "As a result,…", "feel happy and useful"]
  },
  "retained-helpful-person||Do you think it is important for neighbors to help each other? Why?": {
    "a": "我觉得很重要（Yes, definitely.）。最主要的原因是（The main reason is that…）遇到急事的时候，邻居常常是离我们最近的人[when there is an emergency, neighbors are often the closest people to us]。比如（For example,…）很多家庭会请邻居帮忙收快递或者照看孩子[a lot of families ask neighbors to take their parcels or look after their kids]。所以（As a result,…）大家慢慢就有了信任（build trust between neighbors），而且住起来也更安心（feel safe）。",
    "g": "关系",
    "p": ["Yes, definitely.", "The main reason is that…", "For example,…", "As a result,…", "build trust between neighbors", "feel safe"]
  },
  "retained-helpful-person||How can helping others benefit the person who offers the help?": {
    "a": "我觉得好处很多（There are many benefits.）。主要是因为（mainly because…）帮别人的时候，自己会觉得很有用，心情也会变好（feel useful and happy）。比如（For example,…）很多人帮了别人以后，会交到更多朋友[a lot of people make more friends after they help others]。所以（As a result,…）以后他们自己有困难的时候，也会得到别人的帮助[when they have trouble later, others will help them too]，而且友谊也会越来越深（closer friendships）。",
    "g": "情绪",
    "p": ["There are many benefits.", "mainly because…", "feel useful and happy", "For example,…", "As a result,…", "closer friendships"]
  },
  "retained-smart-problem-solver||Do you think children are born smart or they learn to become smart?": {
    "a": "我觉得两方面都有（I think both matter.）。主要是因为（mainly because…）就算不是天生聪明，孩子也能靠练习变聪明很多[even if they are not born smart, children can become much smarter by practising]。比如（For example,…）很多孩子在父母和老师的支持下，变得更有信心（feel confident）。所以（As a result,…）他们不那么怕犯错[they are not so afraid of making mistakes]，也更愿意再试一次（try again）。",
    "g": "情绪",
    "p": ["I think both matter.", "mainly because…", "For example,…", "feel confident", "As a result,…", "try again"]
  },
  "retained-smart-problem-solver||How do children become smart at school?": {
    "a": "我觉得主要靠练习和提问（by practising and asking questions）。主要是因为（mainly because…）孩子只有多问、多做，才能真正学会[children can really learn only by asking and doing more]。比如（For example,…）很多好老师会一步一步讲解难点[a lot of good teachers explain the hard parts step by step]，孩子就更容易听懂[so kids can understand more easily]。所以（As a result,…）他们对学习越来越有信心（feel more confident），学得也越来越好[and they learn better and better]。",
    "g": "情绪",
    "p": ["by practising and asking questions", "mainly because…", "For example,…", "As a result,…", "feel more confident"]
  },
  "retained-smart-problem-solver||Why are some people well-rounded and others only good at one thing?": {
    "a": "我觉得这要看兴趣和时间（It depends, but usually…）。主要是因为（mainly because…）有些人喜欢尝试很多东西，有些人只想专注一项技能[some people like to try many things, and some only want to focus on one skill]。比如（For example,…）很多年轻人会花很多时间练好一门技能，因为它能帮他们找到好工作[a lot of young people spend a lot of time on one skill because it helps them get a good job]。所以（As a result,…）他们在这方面变得很强[they become very strong in this area]，而且一项很强的技能常常能带来更高的工资（a better salary）。",
    "g": "钱",
    "p": ["It depends, but usually…", "mainly because…", "For example,…", "As a result,…", "a better salary"]
  },
  "retained-smart-problem-solver||Why does modern society need talents of all kinds?": {
    "a": "我觉得肯定需要（Yes, definitely.）。主要是因为（mainly because…）现在的问题太复杂，一种人解决不了[today's problems are too hard, and one kind of person cannot solve them]。比如（For example,…）医生、老师和工程师会解决不同的问题[doctors, teachers and engineers solve different problems]。所以（As a result,…）当不同技能的人一起合作的时候（work together），社会才能运转得更好[society can run better]，而且大家的生活也会更方便（an easier life）。",
    "g": "关系",
    "p": ["Yes, definitely.", "mainly because…", "For example,…", "As a result,…", "work together", "an easier life"]
  },
  "retained-smart-problem-solver||In your opinion, what is more important in solving problems, intelligence or experience?": {
    "a": "我觉得经验通常更重要（I think experience is usually more important.）。主要是因为（mainly because…）有经验的人遇到问题会更冷静，也知道先做什么[people with experience know what to do first when there is a problem]，他们能保持冷静（stay calm）。比如（For example,…）很多老员工遇到麻烦不会慌，会一步一步解决[a lot of old workers don't panic when there is trouble, they solve it step by step]。所以（So…）如果一个团队既有经验又有聪明的想法，结果就最好（the best result）。",
    "g": "情绪",
    "p": ["I think experience is usually more important.", "mainly because…", "stay calm", "For example,…", "So…", "the best result"]
  },
  "retained-smart-problem-solver||Can you give an example of how technology helps people solve problems in a smart way today?": {
    "a": "我觉得科技帮了很大的忙（Yes, definitely.）。主要是因为（mainly because…）科技可以又快又准地处理很多信息[technology can deal with a lot of information quickly and correctly]。比如（For example,…）很多人开车的时候用导航软件，它会比较不同的路，给出更快的路线[a lot of people use map apps when they drive, and the app compares roads and gives a faster way]。所以（As a result,…）大家能省下时间和油钱（save time and fuel），而且开车也变得更轻松（easier）。",
    "g": "钱",
    "p": ["Yes, definitely.", "mainly because…", "For example,…", "As a result,…", "save time and fuel", "easier"]
  },
  "retained-famous-person-to-meet||What are the advantages and disadvantages of being a famous child?": {
    "a": "我觉得有好处也有坏处（I think there are good and bad sides.）。主要是因为（mainly because…）有名的孩子可以更早赚钱，也能得到特别的机会[a famous child can make money early and get special chances]，但是他们也会有很大压力（feel a lot of pressure）。比如（For example,…）很多小明星每天被很多人看着[a lot of child stars are watched by many people every day]，所以他们没有自己的时间[so they have no time for themselves]。所以（As a result,…）他们过得不轻松[their life is not easy]，而且大人应该保护他们正常的生活[and adults should protect their normal life]。",
    "g": "情绪",
    "p": ["I think there are good and bad sides.", "mainly because…", "feel a lot of pressure", "For example,…", "As a result,…"]
  },
  "retained-famous-person-to-meet||What can today's children do to become famous?": {
    "a": "我觉得（I think…）孩子应该先练好一项真正的技能。主要是因为（mainly because…）唱歌、运动或画画这样的技能可以让别人记住他们[skills like singing, sport or drawing can help people remember them]，所以他们要经常练习（practise regularly）。比如（For example,…）很多年轻人每天拍视频放到网上[a lot of young people film videos every day and put them online]，所以慢慢有很多人看[so more and more people watch them]。所以（As a result,…）他们可能会红起来[they may become famous]，而且父母也要看好孩子的学习[and parents should also look after the children's study]。",
    "g": "情绪",
    "p": ["I think…", "mainly because…", "practise regularly", "For example,…", "As a result,…"]
  },
  "retained-famous-person-to-meet||What can children do with their fame?": {
    "a": "我觉得他们可以用名气去帮助别人（use their fame to help others）。主要是因为（mainly because…）很多人会听他们说话[many people will listen to them]，所以他们说的话很有用[so their words are useful]。比如（For example,…）很多小明星请粉丝给需要的孩子捐书[a lot of child stars ask fans to give books to children in need]，所以更多孩子有书读[so more children have books to read]。所以（As a result,…）他们的名气真的帮到了别人[their fame really helps people]，而且这也让他们更受喜欢（help other people）。",
    "g": "关系",
    "p": ["use their fame to help others", "mainly because…", "For example,…", "As a result,…", "help other people"]
  },
  "retained-famous-person-to-meet||Do people become famous because of their talent?": {
    "a": "我觉得不完全是（Not really.）。主要是因为（mainly because…）才华很重要，但钱和运气也很重要[talent is important, but money and luck are also important]，好的宣传可以让人得到更多关注（get more attention）。比如（For example,…）很多歌手有公司花钱帮他们打广告[a lot of singers have companies that spend money on ads for them]，所以更多人认识他们[so more people know them]。所以（As a result,…）才华不是唯一的原因[talent is not the only reason]，而且有才华的人通常红得更久[but talented people usually stay famous longer]。",
    "g": "钱",
    "p": ["Not really.", "mainly because…", "get more attention", "For example,…", "As a result,…"]
  },
  "retained-famous-person-to-meet||Why are some people more interested in the private lives of celebrities?": {
    "a": "我觉得主要是为了好玩和聊天（I think it's mainly for fun and chatting.）。主要是因为（mainly because…）名人新闻很简单，也能给大家一个聊天的话题（something to talk about with friends）。比如（For example,…）很多人喜欢和朋友聊明星的生活[a lot of people like to talk about stars' lives with friends]，所以他们觉得很放松[so they feel relaxed]。所以（As a result,…）他们越来越喜欢看这些新闻[they like reading this news more and more]，而且有时候这对名人不太公平[and sometimes this is not fair to the stars]。",
    "g": "关系",
    "p": ["I think it's mainly for fun and chatting.", "mainly because…", "something to talk about with friends", "For example,…", "As a result,…"]
  },
  "retained-famous-person-to-meet||Do you think the definition of “fame” has changed in the age of social media? How?": {
    "a": "我觉得是的，变了（Yes, it has changed.）。主要是因为（mainly because…）以前名人大多是演员或歌手，现在普通人也能在网上出名（become famous online）。比如（For example,…）很多年轻人因为一个热门视频突然被很多人认识[a lot of young people suddenly become known because of one popular video]，所以出名变得更快[so becoming famous is faster now]。所以（As a result,…）现在名气的意思不一样了[the meaning of fame is different now]，而且网上的名气有时候消失得也很快[but online fame sometimes goes away very fast too]。",
    "g": "情绪",
    "p": ["Yes, it has changed.", "mainly because…", "become famous online", "For example,…", "As a result,…"]
  },
  "retained-proud-family-member||What would children do to make their parents proud?": {
    "a": "我觉得孩子可以努力学习，也对别人友善（work hard and be kind to others）。主要是因为（mainly because…）父母看到孩子真的进步时就会很骄傲[parents feel proud when they see their children really improve]，所以孩子要一步一步做好[so children should do things step by step]。比如（For example,…）很多孩子在家帮忙做家务，也帮助同学[a lot of children help with housework at home and help their classmates]，所以父母很开心[so their parents are very happy]。所以（As a result,…）父母会为他们骄傲[the parents feel proud of them]，而且孩子也会更有责任心（become more responsible）。",
    "g": "关系",
    "p": ["work hard and be kind to others", "mainly because…", "For example,…", "As a result,…", "become more responsible"]
  },
  "retained-proud-family-member||What did you do to make your parents proud when you were young?": {
    "a": "我小时候很努力学习（I studied hard when I was young.）。主要是因为（mainly because…）我想让父母开心，也想做好自己的事[I wanted to make my parents happy and do my own things well]，所以我很认真（work hard）。比如（For example,…）有一次英语考试我考得很好，我也常常在家帮忙做家务[once I got a good mark in an English test, and I often helped with housework at home]，所以父母很高兴[so my parents were very happy]。所以（As a result,…）他们为我骄傲[they felt proud of me]，而且我也变得更有责任心（become more responsible）。",
    "g": "关系",
    "p": ["I studied hard when I was young.", "mainly because…", "work hard", "For example,…", "As a result,…", "become more responsible"]
  },
  "retained-proud-family-member||What advantages of yours make you proud?": {
    "a": "我觉得我最大的优点是有耐心，也很负责（I'm patient and responsible.）。主要是因为（mainly because…）出问题的时候我可以保持冷静（stay calm），所以我不会慌[so I don't panic]。比如（For example,…）很多时候工作出小问题，我会先冷静下来再帮团队[many times when there is a small problem at work, I stay calm first and then help the team]，所以我不会去责怪别人[so I don't blame others]。所以（As a result,…）大家觉得我很有用[people think I'm useful]，而且这也给了我信心（give me confidence）。",
    "g": "情绪",
    "p": ["I'm patient and responsible.", "mainly because…", "stay calm", "For example,…", "As a result,…", "give me confidence"]
  },
  "retained-proud-family-member||When was the last time that you felt proud of yourself?": {
    "a": "我记得是上个月（I think it was last month.）。主要是因为（mainly because…）我的团队解决了一个重要的工作问题，我出了力[my team solved an important problem at work, and I helped]，所以我很有成就感（a real sense of achievement）。比如（For example,…）我保持冷静，一步一步检查，还把方法分享给同事[I stayed calm, checked step by step, and shared the way with my workmates]，所以我们按时完成了工作[so we finished the work on time]。所以（As a result,…）我为自己骄傲[I felt proud of myself]，而且我也更相信自己了[and I also trust myself more now]。",
    "g": "情绪",
    "p": ["I think it was last month.", "mainly because…", "a real sense of achievement", "For example,…", "As a result,…"]
  },
  "retained-proud-family-member||Should parents reward children? Why and how?": {
    "a": "我觉得应该，但奖励要小一点（Yes, but the reward should be small.）。主要是因为（mainly because…）奖励可以让孩子更想努力，但太贵的礼物不好[a reward can make children try harder, but very expensive gifts are not good]，所以最好和努力有关（linked to their effort）。比如（For example,…）很多父母会用表扬、多一点玩的时间，或一次家庭活动来奖励孩子[a lot of parents use praise, more play time, or a family activity to reward their children]，所以孩子很开心[so the children are happy]。所以（As a result,…）孩子学会重视进步，而不是钱（value progress instead of money）。",
    "g": "钱",
    "p": ["Yes, but the reward should be small.", "mainly because…", "linked to their effort", "For example,…", "As a result,…", "value progress instead of money"]
  },
  "retained-proud-family-member||On what occasions would adults be proud of themselves?": {
    "a": "我觉得成年人做成难事的时候会为自己骄傲（I think adults feel proud when they finish hard things.）。主要是因为（mainly because…）完成困难的任务或帮助家人不容易[finishing a hard task or helping the family is not easy]，所以做到了会很开心[so they are happy when they do it]。比如（For example,…）很多人努力工作、改善健康，或者照顾家人[a lot of people work hard, get healthier, or take care of their family]，所以他们觉得自己很棒[so they feel great about themselves]。所以（As a result,…）他们会为自己骄傲[they feel proud of themselves]，而且这也说明他们的努力真的有用（make a real difference）。",
    "g": "情绪",
    "p": ["I think adults feel proud when they finish hard things.", "mainly because…", "For example,…", "As a result,…", "make a real difference"]
  },
  "retained-family-keepsake||What things do families keep for a long time?": {
    "a": "我觉得很多家庭会保留一些老东西（I think…）。主要是因为（mainly because…）这些东西能让人想起以前的美好时光[these things remind people of good old days]。比如（For example,…）很多家庭一直留着老照片、旧信件和爷爷奶奶给的小首饰[a lot of families keep old photos, letters and jewelry from their grandparents]。所以（So…）这些东西虽然不贵，但能让不同年代的人感到有联系（feel connected）。而且它们能把家里的回忆传下去（pass memories down）。",
    "g": "关系",
    "p": ["I think…", "mainly because…", "For example,…", "So…", "feel connected", "pass memories down"]
  },
  "retained-family-keepsake||What's the difference between things valued by people in the past and today?": {
    "a": "我觉得有挺大不同（I think…）。主要是因为（mainly because…）以前东西很难换新，所以人们珍惜结实又贵的物品[in the past things were hard to replace, so people valued strong and expensive things]。比如（For example,…）很多年轻人现在更珍惜照片、消息和小礼物[many young people today value photos, messages and small gifts more]。所以（So…）现在回忆比价钱更重要（memories matter more）。而且很多东西现在都存在手机里[a lot of things are kept on the phone now]。",
    "g": "情绪",
    "p": ["I think…", "mainly because…", "For example,…", "So…", "memories matter more"]
  },
  "retained-family-keepsake||What kinds of things are kept in museums?": {
    "a": "我觉得博物馆里放着很多老东西（I think…）。主要是因为（mainly because…）这些东西能展示过去的人怎么生活[these things show how people lived in the past]。比如（For example,…）很多博物馆保存着老工具、旧衣服、画和名人用过的东西[a lot of museums keep old tools, clothes, paintings and things used by famous people]。所以（So…）很多家庭和学生可以一起学历史（learn history together）。而且看这些真东西比看书更有意思（more fun than books）。",
    "g": "关系",
    "p": ["I think…", "mainly because…", "For example,…", "So…", "learn history together", "more fun than books"]
  },
  "retained-family-keepsake||What's the influence of technology on museums?": {
    "a": "我觉得科技对博物馆帮助很大（I think…）。主要是因为（mainly because…）科技让博物馆更容易参观，也更容易看懂[technology makes museums easier to visit and understand]。比如（For example,…）很多博物馆用屏幕来讲解展品，很多人还能在家网上参观[a lot of museums use screens to explain things, and people can visit online at home]。所以（So…）这样能省下路上的时间和钱（save travel time and money）。而且这对学生特别有用（very useful for students）。",
    "g": "钱",
    "p": ["I think…", "mainly because…", "For example,…", "So…", "save travel time and money", "very useful for students"]
  },
  "retained-family-keepsake||Why is it important for people (especially children) to learn about family history?": {
    "a": "我觉得挺重要的（I think…）。主要是因为（mainly because…）了解家族历史能让孩子知道自己从哪里来，也知道长辈经历过什么[family history helps children know where they come from and what older people went through]。比如（For example,…）很多孩子喜欢问爷爷奶奶以前的事[many children like to ask their grandparents about the past]，这样就能和老人多相处（spend time together）。所以（So…）这能让家里的关系更牢固（make family relationships stronger）。",
    "g": "关系",
    "p": ["I think…", "mainly because…", "For example,…", "spend time together", "So…", "make family relationships stronger"]
  },
  "retained-family-keepsake||Do you think people will keep fewer physical objects in the future as memories? Why?": {
    "a": "会的，我觉得会（I think so.）。主要是因为（mainly because…）照片和消息可以存在网上，不占家里的地方[photos and messages can be kept online and don't take up space at home]。比如（For example,…）很多年轻人现在把回忆都放在手机里[many young people keep their memories on the phone now]。所以（So…）以后人们会少留一些实体东西，但还是会留几样特别的，比如戒指或者手写的信[but people will still keep a few special things, like a ring or a handwritten letter]。而且真东西比文件更能装下感情（carry stronger feelings）。",
    "g": "情绪",
    "p": ["I think so.", "mainly because…", "For example,…", "So…", "carry stronger feelings"]
  },
  "retained-app||What are the differences between old and young people when using apps?": {
    "a": "我觉得他们有明显的不同（I think…）。主要是因为（mainly because…）年轻人从小就用手机长大[young people grew up with phones]。比如（For example,…）很多年轻人用很多应用来学习、玩和聊天，老年人一般只用几个基础的[young people use many apps to study, play and chat, but old people usually use only a few basic ones]。所以（So…）这种不同主要来自习惯和经验（habit and experience）。而且老年人更喜欢简单好用的应用（simple and easy apps）。",
    "g": "关系",
    "p": ["I think…", "mainly because…", "For example,…", "So…", "habit and experience", "simple and easy apps"]
  },
  "retained-app||Why do some people not like using apps?": {
    "a": "我觉得有些人真的不喜欢用应用（I think…）。主要是因为（mainly because…）有些应用很难用，还要太多个人信息[some apps are hard to use and ask for too much personal information]。比如（For example,…）很多人收到太多通知的时候会觉得紧张又分心[many people feel stressed and distracted when they get too many notifications]。所以（So…）他们更喜欢简单的网站，或者和真人面对面办事[so they prefer simple websites or talking to a real person]。而且少用应用能让人更放松（feel more relaxed）。",
    "g": "情绪",
    "p": ["I think…", "mainly because…", "For example,…", "So…", "feel more relaxed"]
  },
  "retained-app||What kinds of apps are most popular among young people in your country?": {
    "a": "我觉得社交媒体和短视频应用最受欢迎（I think…）。主要是因为（mainly because…）年轻人用它们来放松，也用来和朋友保持联系（stay in touch with friends）。比如（For example,…）很多年轻人每天都刷短视频、听音乐、和同学聊天[many young people watch short videos, listen to music and chat with friends every day]。所以（So…）这种免费的应用用的人越来越多[so free apps like these get more and more users]。而且学习类的应用也挺受欢迎（study apps are also popular）。",
    "g": "关系",
    "p": ["I think…", "mainly because…", "stay in touch with friends", "For example,…", "So…", "study apps are also popular"]
  },
  "retained-app||Do you think mobile apps have made our lives easier or more complicated?": {
    "a": "我觉得应用让生活更简单了（I think…）。主要是因为（mainly because…）人们可以很快付款、订票和发消息[people can pay, book tickets and send messages quickly]。比如（For example,…）很多人现在用手机付款，不用带现金[many people pay with their phone instead of cash now]。不过太多应用和通知也会造成压力（create stress）。所以（So…）只有人们能管好自己怎么用，应用才真的有帮助[so apps really help only when people control their own use]。",
    "g": "情绪",
    "p": ["I think…", "mainly because…", "For example,…", "create stress", "So…"]
  },
  "retained-app||What should people pay attention to when downloading a new app?": {
    "a": "我觉得下载新应用的时候要小心一点（I think…）。主要是因为（mainly because…）有些应用要太多信息，还有些有隐藏的费用（hidden costs）。比如（For example,…）很多人下载前会先看用户评价和权限[many people check user reviews and permissions before they download]，而且只从官方商店下载[and only download from the official store]。所以（So…）这样能同时保护个人信息和钱[so this protects both their data and their money]。",
    "g": "钱",
    "p": ["I think…", "mainly because…", "hidden costs", "For example,…", "So…"]
  },
  "retained-app||Do you think we will use more or fewer apps in the future? Why?": {
    "a": "我觉得以后我们会用更少的应用（I think…）。主要是因为（mainly because…）一个应用就能同时做付款、购物、出行和发消息[one app can do payment, shopping, travel and messages together]。比如（For example,…）很多人现在已经用一个大应用来处理很多事[many people already use one big app for many things]。所以（So…）这样能省时间，也能省手机空间（save time and phone space）。而且遇到新需求还是会出现一些新应用[but new needs will still bring some new apps]。",
    "g": "钱",
    "p": ["I think…", "mainly because…", "For example,…", "So…", "save time and phone space"]
  },
  "retained-perfect-job||What jobs do children want to do when they grow up?": {
    "a": "我觉得孩子想做各种各样的工作（I think…）。主要是因为（mainly because…）他们的想法来自身边的人[their ideas come from the people around them]。比如（For example,…）很多孩子想当医生、老师或者运动员[many children want to be doctors, teachers or sports players]，因为他们在学校或者网上看到这些人[they see these people at school or online]。所以（So…）他们通常选看起来有趣或者能帮助别人的工作[they usually choose jobs that look fun or can help others]。而且这些想法很多来自家庭和学校（come from family and school）。",
    "g": "关系",
    "p": ["I think…", "mainly because…", "For example,…", "So…", "come from family and school"]
  },
  "retained-perfect-job||What should people consider when choosing jobs?": {
    "a": "我觉得要考虑很多东西（I think…）。最主要的原因是（The main reason is that…）工作要能付日常开销（cover daily costs），这样生活才安心[so life feels safe]。比如（For example,…）很多人会看工资、工作时间和地点[many people look at the salary, the working hours and the place]，还看自己喜不喜欢[and whether they like the job]。所以（So…）他们应该选一份能赚钱又有个人时间的工作[they should choose a job that makes money and still leaves free time]。而且以后的发展也很重要[and future growth is also important]。",
    "g": "钱",
    "p": ["I think…", "The main reason is that…", "cover daily costs", "For example,…", "So…"]
  },
  "retained-perfect-job||Is salary the main reason people choose a certain job?": {
    "a": "我觉得看情况，但一般来说（It depends, but usually…）工资是一个大原因，但不是唯一的[salary is a big reason, but not the only one]。主要是因为（mainly because…）人们也需要稳定的收入（a stable income），也在乎工作时间和同事[they also care about the hours and their workmates]。比如（For example,…）很多人工资很高，但加班太多或者老板不好，他们还是不开心[many people have a high salary but work too much or have a bad boss, so they are still not happy]。所以（So…）工资是主要原因之一，但不是全部[salary is one main reason, but not everything]。",
    "g": "钱",
    "p": ["It depends, but usually…", "mainly because…", "a stable income", "For example,…", "So…"]
  },
  "retained-perfect-job||How have people’s opinions about the “perfect job” changed compared to the past?": {
    "a": "我觉得变化很大（I think…）。主要是因为（mainly because…）过去人们主要想要稳定和工资[in the past people mainly wanted a stable job and money]，现在他们还想要好心情[now they also want to feel good]。比如（For example,…）很多年轻人现在想要灵活的时间和成长[many young people now want flexible hours and personal growth]，也想要更好的工作生活平衡（a better work-life balance）。所以（So…）人们越来越在乎工作带来的感受[people care more and more about how a job makes them feel]。",
    "g": "情绪",
    "p": ["I think…", "mainly because…", "For example,…", "a better work-life balance", "So…"]
  },
  "retained-perfect-job||Do you think it’s easy for people to find their ideal job? Why or why not?": {
    "a": "我觉得不太容易（Not really.）。最主要的原因是（The main reason is that…）好工作会吸引很多人，而且常常要求经验[good jobs attract many people and often need experience]。比如（For example,…）很多人为了得到理想工作，得先提升技能，或者一开始接受低工资（accept a lower salary at first）。所以（So…）找到理想工作通常需要很多时间[finding an ideal job usually takes a lot of time]。而且你得一直努力[and you have to keep trying]。",
    "g": "钱",
    "p": ["Not really.", "The main reason is that…", "For example,…", "accept a lower salary at first", "So…"]
  },
  "retained-perfect-job||What is more important for job satisfaction: a high salary or good relationships with colleagues?": {
    "a": "我觉得两个都重要，但好的同事关系更重要（I think…）。最主要的原因是（The main reason is that…）好的同事能帮你减少压力（reduce stress），让难做的工作变简单[good workmates make hard work easier]。比如（For example,…）很多人工资很高，但同事关系不好，每天都很累[many people have a high salary but bad workmates, so they feel tired every day]。所以（So…）高工资能付账单，但好的关系让每天更开心[a high salary pays the bills, but good relationships make every day happier]。",
    "g": "关系",
    "p": ["I think…", "The main reason is that…", "reduce stress", "For example,…", "So…"]
  },
  "retained-self-taught-friend||Is it necessary to keep learning after graduating from school?": {
    "a": "我觉得很有必要（Yes, definitely.）。最主要的原因是（The main reason is that…）工作和科技一直在变[jobs and technology keep changing]。比如（For example,…）很多人学新技能以后，有更多工作选择，也能拿到更稳定的收入（a more stable income）。所以（So…）继续学习让人在工作中更有信心[keeping learning makes people more confident at work]。而且他们不容易被淘汰[and they are less likely to be left behind]。",
    "g": "钱",
    "p": ["Yes, definitely.", "The main reason is that…", "For example,…", "a more stable income", "So…"]
  },
  "retained-self-taught-friend||Should teachers make learning in their classes fun?": {
    "a": "我觉得应该（Yes, definitely.）。主要是因为（mainly because…）有趣的课能让学生放松[a fun class helps students relax]。比如（For example,…）很多老师用游戏、故事和小组活动[many teachers use games, stories and group activities]，在有趣的课堂上（an enjoyable class）学生不那么怕犯错[students are less afraid of making mistakes]。所以（So…）学生更愿意开口，也学得更好[students are more willing to speak and learn better]。",
    "g": "情绪",
    "p": ["Yes, definitely.", "mainly because…", "For example,…", "an enjoyable class", "So…"]
  },
  "retained-self-taught-friend||Do you think there are too many subjects for students to learn?": {
    "a": "我觉得在一些学校确实太多了（I think…）。最主要的原因是（The main reason is that…）科目太多会让学生很累（make students tired）。比如（For example,…）很多学生每天有很多作业，几乎没时间睡觉或者玩爱好[many students have a lot of homework every day and have almost no time to sleep or do hobbies]。所以（So…）学校应该保留基础科目，同时给学生一些选择[schools should keep the basic subjects and give students some choices]。",
    "g": "情绪",
    "p": ["I think…", "The main reason is that…", "make students tired", "For example,…", "So…"]
  },
  "retained-self-taught-friend||Is it better to focus on a few subjects or to learn many subjects?": {
    "a": "我觉得看年龄（It depends, but usually…）小孩子应该学很多科目的基础[young children should learn the basics of many subjects]。最主要的原因是（The main reason is that…）基础知识能给他们常识[basic knowledge gives them common sense]。比如（For example,…）很多学生长大以后可以专注于自己喜欢或工作需要的实用科目（focus on useful subjects）。所以（So…）先学广再学专，既有常识又不会压力太大[learn widely first, then focus, so they have common sense without too much stress]。",
    "g": "情绪",
    "p": ["It depends, but usually…", "The main reason is that…", "For example,…", "focus on useful subjects", "So…"]
  },
  "retained-self-taught-friend||Do you think enterprises should provide training for their employees?": {
    "a": "我觉得应该（Yes, definitely.）。最主要的原因是（The main reason is that…）受过培训的员工犯错更少，工作也更快[trained workers make fewer mistakes and work faster]。比如（For example,…）很多公司一开始花一些培训费，但以后能省钱（save money later），员工也学到实用技能[workers also learn useful skills]。所以（So…）培训对公司和员工都好[training is good for both the company and the workers]。",
    "g": "钱",
    "p": ["Yes, definitely.", "The main reason is that…", "For example,…", "save money later", "So…"]
  },
  "retained-self-taught-friend||Do you think it is good for older adults to continue learning?": {
    "a": "我觉得是好事（Yes, definitely.）。主要是因为（mainly because…）学习能让他们头脑保持活跃，也能认识新朋友[learning keeps their mind active and helps them meet new friends]。比如（For example,…）很多老人上手机课以后，能和家人保持联系（stay in touch with their family），也不那么孤单[and they feel less lonely]。所以（So…）继续学习让他们的生活更开心、更充实[keeping learning makes their life happier and fuller]。",
    "g": "关系",
    "p": ["Yes, definitely.", "mainly because…", "For example,…", "stay in touch with their family", "So…"]
  },
  "retained-gave-advice||Should people prepare before giving advice?": {
    "a": "我觉得应该准备（I think…）。主要是因为（mainly because…）如果不了解情况，建议可能是错的[if you don't know the facts, the advice may be wrong]，所以我们先要核实事实（check the facts）。比如（For example,…）很多人会先多问几个问题[a lot of people ask a few questions first]，然后再给建议[and then give advice]，所以（So…）他们的建议更有用[so their advice is more useful]，而且对方也更信任他们[and the other person trusts them more]。",
    "g": "关系",
    "p": ["I think…", "mainly because…", "check the facts", "For example,…", "So…"]
  },
  "retained-gave-advice||Is it good to ask advice from strangers online?": {
    "a": "这个看情况（It depends, but usually…）。主要是因为（mainly because…）网上人很多，你能听到不同的看法[there are many people online, so you can hear different ideas]，但有时他们说的也是错的[but sometimes they are wrong]。比如（For example,…）很多人问一些小问题是可以的[a lot of people ask small questions, and that is fine]，但重要的钱或健康问题，最好问专业的人（check with a professional）。所以（So…）网上的建议只能参考[so online advice is just for reference]，我们自己也要分辨真假，先查一查是不是真的（check if it's true）。",
    "g": "钱",
    "p": ["It depends, but usually…", "mainly because…", "For example,…", "check with a professional", "So…", "check if it's true"]
  },
  "retained-gave-advice||What are the personalities of people whose job is to give advice to others?": {
    "a": "我觉得他们要有耐心（I think…）。主要是因为（mainly because…）他们每天要听很多人的问题[they listen to many people's problems every day]，所以要冷静，也要会倾听[so they need to stay calm and listen well]。比如（For example,…）很多好的顾问会诚实地说真话[a lot of good advisers tell the truth honestly]，而不是只说客户想听的话[not just what the client wants to hear]，所以（So…）他们能和别人建立信任（build trust with people）。而且这样别人也更愿意听他们的[and people are happier to follow them]。",
    "g": "关系",
    "p": ["I think…", "mainly because…", "For example,…", "So…", "build trust with people"]
  },
  "retained-gave-advice||What are the problems if you ask too many people for advice?": {
    "a": "我觉得问题不少（I think…）。主要是因为（mainly because…）不同的人会给相反的建议[different people give opposite advice]，所以你会感到困惑和有压力（feel confused and stressed）。比如（For example,…）很多人问了十个人以后[a lot of people ask ten people]，反而更不知道怎么选[and then they don't know how to choose]，所以（So…）通常问两三个信任的人就够了[so asking two or three people you trust is enough]。而且这样也能省时间[and it also saves time]。",
    "g": "情绪",
    "p": ["I think…", "mainly because…", "feel confused and stressed", "For example,…", "So…"]
  },
  "retained-gave-advice||When is it not appropriate to give advice to others?": {
    "a": "我觉得有些时候不适合（I think…）。主要是因为（mainly because…）如果你不了解情况，或者事情很私密[if you don't know the facts, or the thing is very private]，建议可能会伤害别人[the advice may hurt the person]。比如（For example,…）很多时候对方只是想说说自己的感受[a lot of the time the other person just wants to share their feelings]，所以（So…）这时候倾听比给不想要的建议（unwanted advice）更好[listening is better than giving advice they don't want]。而且这样对方会觉得被理解[and they feel understood]。",
    "g": "关系",
    "p": ["I think…", "mainly because…", "For example,…", "So…", "unwanted advice"]
  },
  "retained-gave-advice||Which do you think is more helpful: advice from older people or advice from friends of the same age? Why?": {
    "a": "这个看情况（It depends, but usually…）。主要是因为（mainly because…）长辈有更多人生经验（more life experience），所以他们能帮我们做重大选择[so they can help us make big choices]。比如（For example,…）很多年轻人问同龄朋友日常的小问题[a lot of young people ask same-age friends about small daily problems]，因为朋友懂现在的压力[because friends understand today's stress]，所以（So…）两种建议都有用[so both kinds of advice are useful]。",
    "g": "关系",
    "p": ["It depends, but usually…", "mainly because…", "more life experience", "For example,…", "So…"]
  },
  "retained-shopping-mall||Why do people buy things they don't need?": {
    "a": "我觉得原因有几个（I think…）。主要是因为（mainly because…）打折和广告让人觉得自己在省钱（save money）[discounts and ads make people feel they are saving money]，所以他们就买了[so they buy it]。比如（For example,…）很多人有压力的时候会去购物[a lot of people go shopping when they feel stressed]，因为买东西能带来短暂的快乐[because buying things brings short happiness]，所以（As a result,…）他们常常后悔这种没必要的花钱[they often regret this unnecessary spending]。",
    "g": "钱",
    "p": ["I think…", "mainly because…", "save money", "For example,…", "As a result,…"]
  },
  "retained-shopping-mall||Do you think shopping malls are popular in your country? Why?": {
    "a": "当然受欢迎（Yes, definitely.）。主要是因为（mainly because…）人们可以在一个地方（in one place）购物、吃饭和看电影[people can shop, eat and watch films in one place]，所以商场对家人和朋友很方便[so malls are easy for families and friends]。比如（For example,…）很多家庭周末去商场一起玩[a lot of families go to the mall together at weekends]，所以（So…）商场很受欢迎[so malls are very popular]，而且天气不好时商场也很舒服[and malls are comfortable when the weather is bad]。",
    "g": "关系",
    "p": ["Yes, definitely.", "mainly because…", "in one place", "For example,…", "So…"]
  },
  "retained-shopping-mall||What are the advantages of shopping in a mall compared to shopping online?": {
    "a": "我觉得商场有一些好处（I think…）。主要是因为（mainly because…）付款前你可以看到、摸到、试用商品[before you pay, you can see, touch and try the things]，所以你能选到合适的尺寸[so you can choose the right size]。比如（For example,…）很多人买衣服喜欢先试穿[a lot of people like to try clothes on first]，还能马上带回家[and take it home right away]，所以（As a result,…）他们能省钱，也能少退货（avoid return costs）[they save money and return fewer things]。",
    "g": "钱",
    "p": ["I think…", "mainly because…", "For example,…", "As a result,…", "avoid return costs"]
  },
  "retained-shopping-mall||Do young people and old people like to go to the same kind of malls? Why?": {
    "a": "我觉得不太一样（Not really.）。主要是因为（mainly because…）年轻人和老人有不同的需求（different needs）[young people and old people have different needs]，所以他们喜欢不同的商场[so they like different malls]。比如（For example,…）很多年轻人喜欢服装店、电影院和游戏区[a lot of young people like clothes shops, cinemas and game areas]，而老人更在意超市、座位和方便的交通[but old people care more about the supermarket, seats and easy transport]，所以（So…）他们常去不同的地方[so they often go to different places]。",
    "g": "关系",
    "p": ["Not really.", "mainly because…", "different needs", "For example,…", "So…"]
  },
  "retained-shopping-mall||How can a shopping mall attract more customers?": {
    "a": "我觉得有几个办法（I think…）。主要是因为（mainly because…）人们喜欢价格合理、环境干净的商场[people like malls with fair prices and a clean place]，所以商场要做好这些[so malls should do these well]。比如（For example,…）很多商场提供免费停车和亲子活动[a lot of malls offer free parking and activities for kids]，还有好餐厅[and good restaurants]，所以（As a result,…）顾客体验好就会再来（come back again）[if the experience is good, customers come back again]，而且他们也会告诉朋友[and they also tell their friends]。",
    "g": "钱",
    "p": ["I think…", "mainly because…", "For example,…", "As a result,…", "come back again"]
  },
  "retained-shopping-mall||Do you think having many malls in a city is a good thing?": {
    "a": "这个有好也有坏（It depends, but usually…）。主要是因为（mainly because…）更多商场能创造工作，也给人们更多选择[more malls can create jobs and give people more choices]，甚至可能带来更低的价格（lower prices）[and even lower prices]。比如（For example,…）很多城市有很多商场，但也带来了交通问题[a lot of cities have many malls, but they also bring traffic problems]，所以（As a result,…）我觉得数量合适最好[so I think the right number is best]。",
    "g": "钱",
    "p": ["It depends, but usually…", "mainly because…", "lower prices", "For example,…", "As a result,…"]
  },
  "retained-recent-movie||What kinds of movies do you think are successful in your country?": {
    "a": "我觉得喜剧和动作片在我们国家最成功（I think…）。主要是因为（mainly because…）这些电影很容易看懂[these films are easy to understand]，所以大家下班以后可以好好放松（relax after work）。比如（For example,…）很多人周末去看一部搞笑的电影[a lot of people watch a funny film at weekends]，然后笑一笑心情就好了[they laugh and feel happy]。所以（As a result,…）这种电影总是很卖座[films like this always do well]，而且家人也可以一起看[and families can watch them together too]。",
    "g": "情绪",
    "p": ["I think…", "mainly because…", "relax after work", "For example,…", "As a result,…"]
  },
  "retained-recent-movie||What are the factors that make a successful movie?": {
    "a": "我觉得一部好电影最需要一个清楚又好看的故事（I think…）。主要是因为（mainly because…）如果故事无聊，大家很快就不想看了[if the story is boring, people stop watching]，所以好的故事和好的表演可以让观众更投入（feel more involved）。比如（For example,…）很多人喜欢有一个好结局（a happy ending）的电影[a lot of people like a film with a happy ending]，看完还会推荐给朋友[they tell their friends about it]。所以（So…）故事、演员和音乐一起做好，电影才会成功[the film only works when the story, actors and music are all good]。",
    "g": "情绪",
    "p": ["I think…", "mainly because…", "feel more involved", "For example,…", "a happy ending", "So…"]
  },
  "retained-recent-movie||Do Chinese people prefer to watch domestic movies or foreign movies?": {
    "a": "我觉得这要看观众，不过很多人更喜欢国产电影（It depends, but usually…）。最主要的原因是（The main reason is that…）国产电影用我们熟悉的语言，也讲我们身边的生活[our own films use a familiar language and show our daily life]，所以大家更容易有共鸣（easier to relate to）。比如（For example,…）很多家庭喜欢看讲中国家庭故事的电影[a lot of families like films about Chinese family life]。所以（So…）国产电影常常很受欢迎[our own films are often very popular]，而且外国电影也能带来不一样的故事[and foreign films bring different stories too].",
    "g": "关系",
    "p": ["It depends, but usually…", "The main reason is that…", "easier to relate to", "For example,…", "So…"]
  },
  "retained-recent-movie||Do you think only well-known directors can create the best movies?": {
    "a": "不完全是这样（Not really.）。最主要的原因是（The main reason is that…）新导演也会有新鲜的想法，还可以和一个很强的团队合作（work with a strong team），所以他们也能拍出好电影。比如（For example,…）很多年轻导演拍出了大家都很喜欢的电影[a lot of young directors have made films that people really love]。所以（So…）名气大不代表每部电影都好看[being famous does not mean every film is good]，重要的是想法和努力[what matters is the idea and the hard work].",
    "g": "关系",
    "p": ["Not really.", "The main reason is that…", "work with a strong team", "For example,…", "So…"]
  },
  "retained-recent-movie||Do you think successful movies should have well-known actors or actresses in leading roles?": {
    "a": "我觉得不一定需要（Not really.）。主要是因为（mainly because…）名气大的演员可以帮电影赚钱（help a film make money），但是他们不一定适合每个角色。最主要的原因是（The main reason is that…）观众最想看的还是好故事和好表演[what people want most is a good story and good acting]。比如（For example,…）很多没有名气的演员也演得很好[a lot of unknown actors act really well]。所以（So…）演员合适、故事好看更重要[it is more important that the actor fits and the story is good].",
    "g": "钱",
    "p": ["Not really.", "mainly because…", "help a film make money", "The main reason is that…", "For example,…", "So…"]
  },
  "retained-recent-movie||Why do people prefer to watch movies in the cinema?": {
    "a": "我觉得大家喜欢去电影院，是因为感觉更好（I think…）。主要是因为（mainly because…）大屏幕和很响的声音让电影更刺激[the big screen and loud sound make the film more exciting]，所以看起来更过瘾。而且去电影院也是一种社交活动，可以和家人朋友一起度过美好时光（spend quality time together）。比如（For example,…）很多年轻人周末约朋友一起看电影[a lot of young people go to the cinema with friends at weekends]。所以（As a result,…）去电影院不只是看电影，也是一起开心[going to the cinema is not just about the film, it is about having fun together].",
    "g": "关系",
    "p": ["I think…", "mainly because…", "spend quality time together", "For example,…", "As a result,…"]
  },
  "feishu-taught-new-skill||Why should children learn new skills?": {
    "a": "我觉得（I think…）孩子应该学一些新技能（learn new skills）[children should learn new skills]。因为（because…）这可以让他们更独立[this makes them more independent]。比如（For example,…）很多孩子学会自己做饭、自己收拾房间[a lot of children learn to cook and tidy their room]。而且（Also,…）学新东西的时候他们也很开心[also, they feel happy when they learn new things]。所以（So…）他们长大以后能照顾好自己[so they can take care of themselves when they grow up]。",
    "g": "目标",
    "p": ["I think…", "learn new skills", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-taught-new-skill||Where can children learn new skills?": {
    "a": "我觉得（I think…）孩子在很多地方都能学新技能（learn new skills）[children can learn new skills in many places]。因为（because…）在家和在学校都能学到东西[they can learn both at home and at school]。比如（For example,…）父母在家教孩子做饭，老师在学校教他们画画[parents teach cooking at home and teachers teach drawing at school]。而且（Also,…）孩子还能从朋友那里学到很多[also, children can learn a lot from their friends]。所以（So…）他们在不同的地方学不同的技能[so they learn different skills in different places]。",
    "g": "关系",
    "p": ["I think…", "learn new skills", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-taught-new-skill||How can parents and teachers teach children new skills?": {
    "a": "我觉得（I think…）最好先做给孩子看，再让他自己试[the best way is to show first and let the child try]。因为（because…）孩子看着学更容易[children learn more easily by watching]。比如（For example,…）很多老师先做一遍，再让学生跟着练[teachers do it once first and let students practise]。而且（Also,…）孩子做得好的时候要多夸夸他[also, we should praise the child when he does well]。所以（So…）孩子学得又快又开心[so children learn quickly and happily]。",
    "g": "情绪",
    "p": ["I think…", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-taught-new-skill||How do adults learn a new skill?": {
    "a": "我觉得（I think…）大人常常自己安排时间学新技能（learn new skills）[adults often plan their own time to learn new skills]。因为（because…）他们空闲时间不多[they do not have much free time]。比如（For example,…）很多上班的人每天练二十分钟英语[working people practise English for twenty minutes every day]。而且（Also,…）他们还常常看手机上的短视频学东西[also, they often learn from short videos on their phone]。所以（So…）他们每天都能进步一点点[so they get a little better every day]。",
    "g": "目标",
    "p": ["I think…", "learn new skills", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-taught-new-skill||What are the differences between learning from a teacher and learning by oneself?": {
    "a": "我觉得（I think…）这两种方法各有各的好处[both ways have their own good points]。因为（because…）自己学更省钱（budget-friendly）[learning alone is more budget-friendly]。比如（For example,…）很多学生难的地方跟老师学，简单的地方自己练[students learn hard parts with a teacher and practise easy parts alone]。而且（Also,…）跟着老师学问题能问得更快[also, with a teacher you can ask questions faster]。所以（So…）我觉得两种一起用最好[so I think using both together is best]。",
    "g": "钱",
    "p": ["I think…", "because…", "budget-friendly", "For example,…", "Also,…", "So…"]
  },
  "feishu-taught-new-skill||Why is self-discipline important when learning a new skill?": {
    "a": "我觉得（I think…）学新技能的时候自律很重要[self-discipline is very important when you learn a new skill]。因为（because…）进步需要每天坚持练[progress needs practice every day]。比如（For example,…）很多人在家练琴，没人管也一直练[people practise the piano at home even when no one watches]。而且（Also,…）自律的人不容易半路放弃[also, people with self-discipline do not give up halfway]。所以（So…）他们最后都能学会[so they can learn it in the end]。",
    "g": "目标",
    "p": ["I think…", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-history-lover||Do you think children should begin learning history from an early age?": {
    "a": "我觉得（I think…）孩子可以早点学历史，但要简单有趣[children can start history early, but it should be simple and fun]。因为（because…）有意思的故事能让孩子喜欢历史[interesting stories make children like history]。比如（For example,…）很多老师会讲老房子和老照片的故事[teachers tell stories about old buildings and old photos]。而且（Also,…）小孩子不用一开始就背很多日期[also, young children do not need to remember many dates at first]。所以（So…）这样孩子会觉得历史很好玩[so children find history fun this way]。",
    "g": "情绪",
    "p": ["I think…", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-history-lover||At what age do you think people should begin to learn history?": {
    "a": "我觉得（I think…）六七岁上小学的时候开始比较好[around six or seven, when they start primary school, is good]。因为（because…）这个年龄的孩子能听懂短故事[at this age children can understand short stories]。比如（For example,…）很多孩子会问以前的人怎么生活、吃什么[children ask how people lived and what they ate in the past]。而且（Also,…）更难的历史可以等他们大一点再学[also, harder history can wait until they are older]。所以（So…）早一点开始对孩子有好处[so starting a bit early is good for children]。",
    "g": "目标",
    "p": ["I think…", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-history-lover||How do children learn history before they attend school?": {
    "a": "我觉得（I think…）孩子上学前主要从家里人那里学历史[before school, children mainly learn history from their family]。因为（because…）家里人讲的老故事孩子容易懂[the old stories family tell are easy for children to understand]。比如（For example,…）很多爷爷奶奶会讲自己小时候的事[grandparents talk about their childhood]。而且（Also,…）一家人一起聊这些事，关系也更近（relationships much closer and warmer）[also, talking about these things makes relationships much closer and warmer]。所以（So…）孩子在上学前就懂了一点过去的事[so children learn a little about the past before school]。",
    "g": "关系",
    "p": ["I think…", "because…", "For example,…", "Also,…", "relationships much closer and warmer", "So…"]
  },
  "feishu-history-lover||Is it important to learn how people in the past lived their lives?": {
    "a": "是的（Yes, definitely.），了解以前的人怎么生活很重要[it is important to learn how people lived in the past]。因为（because…）这能让我们看到生活是怎么一点点变好的[this shows us how life slowly got better]。比如（For example,…）很多年轻人了解以后，更懂爷爷奶奶的习惯[young people understand their grandparents' habits better after they learn this]。而且（Also,…）只学打仗和领导人是不够的[also, learning only about wars and leaders is not enough]。所以（So…）普通人的生活也很值得了解[so ordinary people's lives are also worth learning about]。",
    "g": "关系",
    "p": ["Yes, definitely.", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-history-lover||Do you think people should learn ancient history before learning modern history?": {
    "a": "我觉得（I think…）先了解一点古代历史有好处，但不用严格按顺序[a little ancient history first is good, but you do not have to follow a strict order]。因为（because…）古代历史能解释很多东西是怎么开始的[ancient history explains how many things began]。比如（For example,…）很多老师会把古代和现代的例子放在一起讲[teachers teach ancient and modern examples together]。而且（Also,…）孩子对哪段感兴趣就可以先学哪段[also, children can start with the part they find interesting]。所以（So…）大家可以慢慢学，不用着急[so people can learn slowly and do not need to rush]。",
    "g": "目标",
    "p": ["I think…", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-history-lover||Besides big historical events, what else is important when learning history?": {
    "a": "我觉得（I think…）除了大事件，普通人的生活也很重要[besides big events, ordinary people's lives are also important]。因为（because…）这能让我们看到历史怎么影响普通家庭[this shows how history affected ordinary families]。比如（For example,…）很多人会看老照片和以前的信[people look at old photos and old letters]。而且（Also,…）以前的饭菜和衣服也很有意思[also, the food and clothes of the past are interesting too]。所以（So…）历史会变得更好记、更有意思[so history becomes easier to remember and more interesting]。",
    "g": "关系",
    "p": ["I think…", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-older-admired||What can young and old people learn from each other?": {
    "a": "我觉得（I think…）年轻人和老人能互相学到很多[young and old people can learn a lot from each other]。因为（because…）老人有生活经验，年轻人懂新科技[old people have life experience, and young people know new technology]。比如（For example,…）年轻人帮老人用手机，老人教年轻人做饭[young people help old people use phones, and old people teach cooking]。而且（Also,…）他们在一起的时候，关系也更近（relationships much closer and warmer）[also, when they are together, relationships become closer and warmer]。所以（So…）两边都能有收获[so both sides gain something]。",
    "g": "关系",
    "p": ["I think…", "because…", "For example,…", "Also,…", "relationships much closer and warmer", "So…"]
  },
  "feishu-older-admired||How old people's life quality improved when compared to the past?": {
    "a": "我觉得（I think…）现在老人的生活比以前好多了[old people's lives are much better now than before]。因为（because…）现在的医疗和养老金都更好[healthcare and pensions are both better now]。比如（For example,…）很多老人用智能手机和家人视频聊天[old people use a smartphone to video call their family]。而且（Also,…）小区里也有公园和活动室给他们用[also, there are parks and activity rooms for them in the neighbourhood]。所以（So…）他们的生活更方便、更安全[so their life is more convenient and safer]。",
    "g": "钱",
    "p": ["I think…", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-older-admired||Why is there a generation gap between the young and the old?": {
    "a": "我觉得（I think…）年轻人和老人有代沟很正常[it is normal for young and old people to have a generation gap]。因为（because…）他们长大的时候，科技和想法都不一样[when they grew up, the technology and ideas were different]。比如（For example,…）同一件事，年轻人觉得正常，老人可能觉得没礼貌[for the same thing, young people think it is normal but old people may think it is rude]。而且（Also,…）他们喜欢的音乐和电影也常常不一样[also, they often like different music and films]。所以（So…）他们有时候很难互相理解[so sometimes it is hard for them to understand each other]。",
    "g": "关系",
    "p": ["I think…", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-older-admired||What do old people usually do in their daily life?": {
    "a": "我觉得（I think…）老人每天的生活其实挺丰富的[old people's daily life is actually quite full]。因为（because…）他们有时间做自己喜欢的事[they have time to do what they like]。比如（For example,…）很多老人早上去公园锻炼，下午照顾孙子[old people exercise in the park in the morning and look after grandchildren in the afternoon]。而且（Also,…）他们晚上还会和老朋友一起跳广场舞[also, in the evening they dance in the square with old friends]。所以（So…）他们的生活可以很开心、很充实[so their life can be very happy and full]。",
    "g": "情绪",
    "p": ["I think…", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-photo-lover||Why are some people keen on taking photos?": {
    "a": "我觉得（I think…）有些人特别喜欢拍照是有原因的[some people really like taking photos for a reason]。因为（because…）照片能帮他们留住美好的回忆[photos help them keep good memories]。比如（For example,…）很多人喜欢拍好看的风景和开心的时刻[people like to take photos of nice views and happy moments]。而且（Also,…）以后再看这些照片，心情也会变好（lifts my mood）[also, looking at these photos later lifts my mood]。所以（So…）拍照对他们来说很有意义[so taking photos means a lot to them]。",
    "g": "情绪",
    "p": ["I think…", "because…", "For example,…", "Also,…", "lifts my mood", "So…"]
  },
  "feishu-photo-lover||What kind of photos do people often take?": {
    "a": "我觉得（I think…）人们最常拍和家人朋友有关的照片[people most often take photos of their family and friends]。因为（because…）大家想记住和亲近的人在一起的时刻[people want to remember moments with people they are close to]。比如（For example,…）很多人喜欢拍家庭聚会和朋友的合影[people like to take photos of family gatherings and group photos with friends]。而且（Also,…）出去旅游的时候也会拍很多风景照[also, when they travel, they take a lot of scenery photos]。所以（So…）照片里大部分是他们在乎的人和事[so most photos are about the people and things they care about]。",
    "g": "关系",
    "p": ["I think…", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-photo-lover||Do you think it's OK to take photos everywhere?": {
    "a": "不太行（Not really.），我觉得不是所有地方都能拍照[I don't think you can take photos everywhere]。因为（because…）我们要尊重别人的隐私[we should respect other people's privacy]。比如（For example,…）在医院或别人家里拍照就不合适[in hospitals or in other people's homes, taking photos is not suitable]。而且（Also,…）有些博物馆里也不让拍照[also, some museums do not allow photos either]。所以（So…）拍陌生人之前先问一下更有礼貌[so it is more polite to ask before taking a photo of a stranger]。",
    "g": "规矩",
    "p": ["Not really.", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-photo-lover||Why do tourists like taking photos while they are travelling?": {
    "a": "我觉得（I think…）游客旅行时很喜欢拍照[tourists love taking photos when they travel]。因为（because…）他们想记住那个地方[they want to remember the place]。比如（For example,…）很多游客会拍下自己吃的美食[a lot of tourists take photos of the food they eat]。而且（Also,…）他们也喜欢拍漂亮的风景和老建筑[also, they like taking photos of nice views and old buildings]。所以（So…）照片能帮他们留住开心的时刻[so photos keep the happy moments]。",
    "g": "情绪",
    "p": ["I think…", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-photo-lover||Some people don't mind others walking into their shot when they're taking photos. What do you think?": {
    "a": "我觉得（I think…）在人多的地方，这样想很实际[in a busy place, this is practical]。因为（because…）热门的街道很难没有人[popular streets are hard to keep empty]。比如（For example,…）很多人会等一下，或者礼貌地请别人让一让[a lot of people wait a moment or politely ask others to move]。而且（Also,…）有些人干脆把路人也拍进照片里[also, some people just leave the passers-by in the photo]。所以（So…）我们不该怪只是路过的陌生人[so we should not blame strangers who just walk past]。",
    "g": "规矩",
    "p": ["I think…", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-handcraft-person||Do you think art classes are important for children?": {
    "a": "是的（Yes, definitely.），美术课对孩子很重要[art classes are very important for children]。因为（because…）画画能让孩子说出心里的感受[drawing lets children show their feelings]。比如（For example,…）孩子在美术课上能学到新技能（learn new skills）[children learn new skills in art class]。而且（Also,…）他们也能在画画时放松一下[also, they can relax while they draw]。所以（So…）我觉得学校应该多开美术课[so I think schools should have more art classes]。",
    "g": "情绪",
    "p": ["Yes, definitely.", "because…", "For example,…", "learn new skills", "Also,…", "So…"]
  },
  "feishu-handcraft-person||Why do some children enjoy making things by hand?": {
    "a": "我觉得（I think…）孩子很喜欢做手工[children really enjoy making things by hand]。因为（because…）用手做东西很好玩[making things by hand is a lot of fun]。比如（For example,…）很多孩子喜欢给爸爸妈妈做小卡片[a lot of children like making small cards for their parents]。而且（Also,…）他们也喜欢用彩纸做小动物[also, they like making little animals with coloured paper]。所以（So…）他们做手工时通常很开心[so they are usually happy when they do handwork]。",
    "g": "情绪",
    "p": ["I think…", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-handcraft-person||Do children these days still like doing arts and crafts?": {
    "a": "是的（Yes, definitely.），现在很多孩子还是喜欢画画和手工[many children today still like drawing and crafts]。因为（because…）手工很好玩[handwork is a lot of fun]。比如（For example,…）很多孩子喜欢用材料包做小装饰[a lot of children like making small decorations with craft kits]。而且（Also,…）学校也常常开手工课[also, schools often have craft lessons too]。所以（So…）我觉得孩子还是很爱手工[so I think children still love handwork]。",
    "g": "情绪",
    "p": ["Yes, definitely.", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-handcraft-person||What impact can artistic buildings have on society?": {
    "a": "我觉得（I think…）漂亮的建筑对城市帮助很大[beautiful buildings help a city a lot]。因为（because…）它们能吸引很多游客[they attract a lot of visitors]。比如（For example,…）很多人专门去看漂亮的图书馆或车站[a lot of people go to see a beautiful library or station]。而且（Also,…）这些建筑也让城市看起来更有特色[also, these buildings make the city look more special]。所以（So…）附近的小店能赚更多钱[so the small shops nearby make more money]。",
    "g": "钱",
    "p": ["I think…", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-difficult-success-person||Is it difficult to do business in today's world?": {
    "a": "是的（Yes, definitely.），现在做生意很难[doing business is very hard today]。因为（because…）竞争很强[the competition is very strong]。比如（For example,…）很多小店老板要不停了解顾客想要什么[a lot of small shop owners keep learning what customers want]。而且（Also,…）房租和材料的价格也很高[also, rent and materials are also expensive]。所以（So…）做生意的人压力很大[so people in business are under a lot of pressure]。",
    "g": "钱",
    "p": ["Yes, definitely.", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-difficult-success-person||How can companies help protect the environment?": {
    "a": "我觉得（I think…）公司能为环境做很多事[companies can do a lot for the environment]。因为（because…）它们可以少用包装、省电[they can use less packaging and save energy]。比如（For example,…）很多公司会回收有用的东西[a lot of companies recycle useful things]。而且（Also,…）有些公司也会用纸袋代替塑料袋[also, some companies use paper bags instead of plastic ones]。所以（So…）这样能减少浪费[so this can reduce waste]。",
    "g": "规矩",
    "p": ["I think…", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-difficult-success-person||Does money equal success?": {
    "a": "不（Not really.），钱不等于成功[money is not the same as success]。因为（because…）钱只是成功的一部分[money is only one part of success]。比如（For example,…）有些人工资很高，但没时间陪家人[some people earn a lot but have no time for family]。而且（Also,…）健康和开心也很重要[also, health and happiness are important too]。所以（So…）能和家人（spend quality time）也是一种成功[so spending quality time with family is also success]。",
    "g": "关系",
    "p": ["Not really.", "because…", "For example,…", "Also,…", "So…", "spend quality time"]
  },
  "feishu-crowded-place||Do you think it is a good trend to have more big cities?": {
    "a": "我觉得（I think…）大城市变多有好也有坏[more big cities has good and bad sides]。因为（because…）大城市能给人们更多工作和学校[big cities give people more jobs and schools]。比如（For example,…）很多人去大城市找工作[a lot of people go to big cities to find work]。而且（Also,…）大城市的医院和商场也更多[also, big cities also have more hospitals and shopping malls]。所以（So…）只有城市规划好，这才是好事[so it is only good if cities plan well]。",
    "g": "钱",
    "p": ["I think…", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-crowded-place||Do you think there are some people who enjoy crowded places?": {
    "a": "是的（Yes, definitely.），有些人很喜欢热闹的地方[some people really enjoy crowded places]。因为（because…）人多时气氛很有活力[when there are a lot of people, the atmosphere is lively]。比如（For example,…）很多外向的人喜欢热闹的市场和演唱会[a lot of outgoing people like busy markets and concerts]。而且（Also,…）有些人也喜欢过节时热闹的街道[also, some people like the busy streets during festivals]。所以（So…）这主要看人的性格[so it mainly depends on the person]。",
    "g": "情绪",
    "p": ["Yes, definitely.", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-crowded-place||Which cities are crowded in your country?": {
    "a": "我觉得（I think…）像北京、上海和深圳这样的大城市很挤[big cities like Beijing, Shanghai and Shenzhen are very crowded]。因为（because…）这些城市工作机会很多[these cities have a lot of jobs]。比如（For example,…）很多上班的人和学生都来这些城市[a lot of workers and students come to these cities]。而且（Also,…）这些城市的地铁在早高峰特别挤[also, the underground in these cities is very packed in the morning]。所以（So…）最挤的地方通常是车站和景点[so the most crowded places are usually stations and attractions]。",
    "g": "钱",
    "p": ["I think…", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-crowded-place||Why do people go to crowded places?": {
    "a": "我觉得（I think…）人们去挤的地方通常有原因[people usually go to crowded places for a reason]。因为（because…）他们要上班或买东西[they need to work or shop]。比如（For example,…）很多人挤地铁去上班[a lot of people take the crowded underground to work]。而且（Also,…）周末也有很多人去热闹的商场[also, a lot of people go to busy malls at the weekend]。所以（So…）就算不舒服，值得的话他们还是会去[so even if it is uncomfortable, they still go if it is worth it]。",
    "g": "目标",
    "p": ["I think…", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-crowded-place||Will people use bikes more or less in cities in the future?": {
    "a": "我觉得（It depends, but usually…）如果城市建好安全的车道，人们会骑得更多[if cities build safe bike lanes, people will ride more]。因为（because…）共享单车又便宜（affordable）又方便[shared bikes are affordable and convenient]。比如（For example,…）很多人骑共享单车去地铁站[a lot of people ride shared bikes to the underground station]。而且（Also,…）骑车也能让人锻炼身体[also, riding a bike is also good exercise]。所以（So…）安全的车道很重要[so safe bike lanes are important]。",
    "g": "规矩",
    "p": ["It depends, but usually…", "because…", "affordable", "For example,…", "Also,…", "So…"]
  },
  "feishu-crowded-place||Will there be more or less green space in cities in the future?": {
    "a": "我觉得（It depends, but usually…）城市里的绿地是多是少，要看怎么规划[more or less green space depends on how cities plan]。因为（because…）有些城市发展太快，土地很紧张[some cities grow too fast and land is tight]。比如（For example,…）很多人喜欢在公园里散步，（enjoy a peaceful moment）[a lot of people like walking in the park and enjoy a peaceful moment]。而且（Also,…）孩子们也需要绿地玩耍[also, children also need green space to play]。所以（So…）我希望城市能保护好公园[so I hope cities protect their parks]。",
    "g": "情绪",
    "p": ["It depends, but usually…", "because…", "For example,…", "enjoy a peaceful moment", "Also,…", "So…"]
  },
  "feishu-noisy-place||Do you think it is good for children to make noise?": {
    "a": "我觉得（It depends, but usually…）孩子发出一些声音很正常[it is quite normal for children to make some noise]。因为（because…）孩子玩和唱歌时会很兴奋[children get excited when they play and sing]。比如（For example,…）孩子在操场上又跑又叫，很正常[children run and shout on the playground, which is normal]。而且（Also,…）在家里孩子玩游戏时也会很吵[also, children are also noisy when they play games at home]。所以（So…）但在图书馆里，大人要教他们小声一点[so in libraries, adults should teach them to be quiet]。",
    "g": "规矩",
    "p": ["It depends, but usually…", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-noisy-place||How can people consider others' feelings when chatting in public?": {
    "a": "我觉得（I think…）最好的办法就是小声说话[the best way is to keep their voice down]。因为（because…）在公共场所大声聊天会吵到旁边的人[talking loudly in public can bother the people nearby]。比如（For example,…）在地铁或公交上，很多人都会小声聊，或者等下了车再打电话[on the bus or the underground, a lot of people chat quietly, or wait until they get off to make a call]。而且（Also,…）如果聊的是私人的事，最好别在人多的地方大声说[also, if it is something private, it is better not to say it out loud in a crowded place]。所以（So…）只要大家稍微注意一点，别人就会舒服很多[so if people are just a bit careful, others feel much more comfortable]。",
    "g": "规矩",
    "p": ["I think…", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-noisy-place||How would people usually respond to noises in your country?": {
    "a": "我觉得（It depends, but usually…）大多数人会先忍一忍短时间的噪音[most people put up with short noise first]。因为（because…）白天有点声音很正常[some noise in the daytime is normal]。比如（For example,…）如果噪音一直不停，很多人会关窗或戴耳机[if the noise keeps going, a lot of people close the window or use earphones]。而且（Also,…）有些人会先客气地提醒邻居[also, some people politely remind their neighbours first]。所以（So…）如果很严重，他们才会报告物业[so if it is very serious, they report it to the building staff]。",
    "g": "规矩",
    "p": ["It depends, but usually…", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-noisy-place||Should children not be allowed to make noise under any circumstances?": {
    "a": "不（Not really.），完全不让孩子出声太严格了[not letting children make any noise is too strict]。因为（because…）孩子需要玩和表达情绪[children need to play and show their feelings]。比如（For example,…）在操场上孩子可以大声玩，在医院就要安静[on the playground children can play loudly, but in a hospital they should be quiet]。而且（Also,…）在电影院里孩子也要小声一点[also, in the cinema children should also be quiet]。所以（So…）重要的是看时间和地点合不合适[so the important thing is whether the time and place are right]。",
    "g": "规矩",
    "p": ["Not really.", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-noisy-place||What kinds of noises are there in our lives?": {
    "a": "我觉得（I think…）我们生活里有很多种噪音[there are many kinds of noise in our lives]。因为（because…）车和机器都很吵[cars and machines are noisy]。比如（For example,…）我们白天常听到马路上的车声[we often hear cars on the road in the daytime]。而且（Also,…）晚上邻居装修的声音也很吵[also, the sound of neighbours' building work is noisy at night too]。所以（So…）太吵会让人有压力[so too much noise makes people stressed]。",
    "g": "情绪",
    "p": ["I think…", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-noisy-place||Which area is exposed to noise more, the city or the countryside?": {
    "a": "我觉得（I think…）城市一般比乡村更吵[cities are usually noisier than the countryside]。因为（because…）城市里车更多、人也更多[cities have more cars and more people]。比如（For example,…）很多住在市中心的人晚上还能听到车声[a lot of people in the city centre still hear cars at night]。而且（Also,…）城市里的工地和商场也很吵[also, building sites and malls in the city are noisy too]。所以（So…）城市的噪音更让人有压力[so city noise makes people feel more stressed]。",
    "g": "情绪",
    "p": ["I think…", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-city-natural-place||Do you think there should be many natural places in cities?": {
    "a": "是的（Yes, definitely.），城市里应该有很多自然的地方[cities should have a lot of natural places]。因为（because…）公园和树能让人放松、平静下来（calms my mind）[parks and trees calm my mind]。比如（For example,…）很多人周末带孩子去公园跑步玩耍[a lot of people take their children to the park at the weekend]。而且（Also,…）老人也喜欢在树下坐一坐[also, old people also like to sit under the trees]。所以（So…）自然的地方多了，生活会更健康[so life is healthier with more natural places]。",
    "g": "情绪",
    "p": ["Yes, definitely.", "because…", "calms my mind", "For example,…", "Also,…", "So…"]
  },
  "feishu-city-natural-place||Do you think staying in a natural place would help change people's mood?": {
    "a": "是的（Yes, definitely.），待在自然的地方能让人心情变好[staying in a natural place can make people feel better]。因为（because…）到外面走走能让人放松心情（lifts my mood）[going outside lifts my mood]。比如（For example,…）很多人周末去公园或海边走一走[a lot of people go to the park or the seaside at the weekend]。而且（Also,…）在花园里晒晒太阳也很舒服[also, sitting in the sun in a garden feels nice too]。所以（So…）多接触自然对心情很好[so being close to nature is good for our mood]。",
    "g": "情绪",
    "p": ["Yes, definitely.", "because…", "lifts my mood", "For example,…", "Also,…", "So…"]
  },
  "feishu-revisit-city||What's the difference between the city and the countryside?": {
    "a": "我觉得（I think…）城市和乡村很不一样[cities and the countryside are very different]。因为（because…）城市有更多工作和学校[cities have more jobs and schools]。比如（For example,…）很多人去大城市找工作和上学[a lot of people go to big cities to find jobs and study]。而且（Also,…）乡村的空气更干净、生活更安静[also, the countryside has cleaner air and a quieter life]。所以（So…）哪个更好要看你想要什么生活[so which is better depends on the life you want]。",
    "g": "钱",
    "p": ["I think…", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-revisit-city||Some people say large cities are suitable for old people. What do you think?": {
    "a": "我觉得（I think…）大城市对老人其实挺方便[big cities are quite convenient for old people]。因为（because…）城市里医院和公交都很近[hospitals and buses are close in cities]。比如（For example,…）很多老人看病、坐公交出门都很容易[a lot of old people can see a doctor and take the bus easily]。而且（Also,…）城市里的公园和活动也很多[also, cities also have a lot of parks and activities]。所以（So…）大城市其实很适合老人[so big cities really suit old people]。",
    "g": "情绪",
    "p": ["I think…", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-revisit-city||Do you think it is possible that all of the population move to cities?": {
    "a": "不太可能（Not really.），我觉得不会所有人都搬到城市[I don't think everyone will move to cities]。因为（because…）城市没法给所有人便宜的房子[cities can't give everyone cheap homes]。比如（For example,…）很多人还是喜欢农村安静又便宜的生活[a lot of people still like the quiet, cheap life in the countryside]。而且（Also,…）有些人的工作也在农村，比如种地[also, some people's jobs are in the countryside too, like farming]。所以（So…）城市和农村都会一直有人住[so both cities and the countryside will always have people]。",
    "g": "钱",
    "p": ["Not really.", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-revisit-city||Do you think people in the countryside are friendlier than people in the city?": {
    "a": "要看情况（It depends, but usually…）农村的人常常更友好一些[people in the countryside are often a bit friendlier]。因为（because…）农村社区小，邻居见面多，关系更近更暖（relationships much closer and warmer）[villages are small, so their relationships are much closer and warmer]。比如（For example,…）在很多村子里大家都互相认识、互相帮忙[in a lot of villages everyone knows each other and helps out]。而且（Also,…）邻居也常常互相送点自己种的菜[also, neighbours often share vegetables they grow]。所以（So…）农村的人看起来比城市里更友好[so country people seem friendlier than city people]。",
    "g": "关系",
    "p": ["It depends, but usually…", "because…", "relationships much closer and warmer", "For example,…", "Also,…", "So…"]
  },
  "feishu-revisit-city||Are there any changes in your city?": {
    "a": "是的（Yes, definitely.），这几年我的城市变化很大[my city has changed a lot in recent years]。因为（because…）城市修了新地铁，出门又快又方便（time-saving and efficient）[the new metro is time-saving and efficient]。比如（For example,…）现在很多人坐地铁上班，不用堵车[a lot of people take the metro to work now instead of sitting in traffic]。而且（Also,…）城市里也建了很多新公园[also, the city has also built a lot of new parks]。所以（So…）大家出门方便多了[so it's much easier to go out now]。",
    "g": "钱",
    "p": ["Yes, definitely.", "because…", "time-saving and efficient", "For example,…", "Also,…", "So…"]
  },
  "feishu-revisit-city||What should the government do to improve": {
    "a": "我觉得（I think…）政府可以做很多事让城市更好[the government can do a lot to make the city better]。因为（because…）城市里最大的问题就是房子太贵[the biggest problem in the city is that homes are too expensive]。比如（For example,…）政府可以建更便宜、买得起的房子（affordable）[the government can build cheaper, affordable homes]。而且（Also,…）政府也可以修更多地铁，让大家出行方便[the government can also build more metro lines so people travel easily]。所以（So…）大家的生活会更好也更方便[so people's life will be better and easier]。",
    "g": "钱",
    "p": ["I think…", "because…", "For example,…", "affordable", "Also,…", "So…"]
  },
  "feishu-childhood-skill||What skills should children learn before they go to school?": {
    "a": "我觉得（I think…）孩子上学前应该学一些简单的技能[children should learn some simple skills before school]。因为（because…）这些技能能帮他们更好地和别人相处[these skills help them get on with others]。比如（For example,…）很多孩子学着自己穿衣服、洗手[a lot of children learn to dress and wash their hands]。而且（Also,…）他们也学着和小朋友一起分享玩具[they also learn to share toys with other children]。所以（So…）这些技能让他们上学后更好适应[so these skills help them fit in at school]。",
    "g": "规矩",
    "p": ["I think…", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-childhood-skill||What are the differences between learning in a group and learning by yourself?": {
    "a": "我觉得（I think…）小组学习和自己学很不一样[learning in a group and learning alone are quite different]。因为（because…）在小组里你能和别人面对面交流（face-to-face communication）[in a group you get face-to-face communication]。比如（For example,…）很多学生一起练口语时会互相帮忙[a lot of students help each other when they practise speaking]。而且（Also,…）自己学的时候可以按自己的速度慢慢来[when learning alone you can go at your own pace]。所以（So…）两种方法各有各的好[so both ways have their own good points]。",
    "g": "关系",
    "p": ["I think…", "because…", "face-to-face communication", "For example,…", "Also,…", "So…"]
  },
  "feishu-childhood-skill||What are the differences between the way adults earn and the way children learn?": {
    "a": "我觉得（I think…）大人和小孩学东西的方法很不一样[adults and children learn in very different ways]。因为（because…）大人学东西常常是为了工作，有清楚的目标[adults usually learn for their job, with a clear goal]。比如（For example,…）很多大人下班后学英语，是想找更好的工作[a lot of adults learn English after work for a better job]。而且（Also,…）小孩常常在玩游戏的时候就学会了新东西[children often learn new things while playing games]。所以（So…）大人更有目标，小孩更不怕犯错[so adults are more goal-focused, and children fear mistakes less]。",
    "g": "目标",
    "p": ["I think…", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-childhood-skill||Do you think it is easier for children to learn new skills than for adults?": {
    "a": "要看情况（It depends, but usually…）有些新技能（learn new skills）小孩确实学得更快[children learn some new skills faster]。因为（because…）小孩练习的时间多，也不太怕犯错[children practise more and fear mistakes less]。比如（For example,…）很多小孩学游泳或外语都很快[a lot of children learn swimming or a foreign language very quickly]。而且（Also,…）大人常常太忙，没有那么多时间练[adults are often too busy and have less time to practise]。所以（So…）谁学得更容易，主要看是什么技能[so who learns more easily mainly depends on the skill]。",
    "g": "目标",
    "p": ["It depends, but usually…", "learn new skills", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-childhood-skill||Can a child learn skills from another child?": {
    "a": "是的（Yes, definitely.），孩子可以从别的孩子那里学到东西[a child can learn things from another child]。因为（because…）孩子常常模仿朋友玩游戏、画画[children often copy games and drawing from friends]。比如（For example,…）很多小孩看别人怎么玩，很快就学会了[a lot of children learn quickly by watching others play]。而且（Also,…）年纪大一点的孩子也会教弟弟妹妹[older children also teach their younger brothers and sisters]。所以（So…）孩子之间互相学习很有用[so children learning from each other is very useful]。",
    "g": "关系",
    "p": ["Yes, definitely.", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-childhood-skill||Is it important for everyone to have a specialized skill?": {
    "a": "我觉得（I think…）有一项拿手的技能很有用[having one strong skill is useful]。因为（because…）一项好技能能带来更多工作机会[a good skill brings more job chances]。比如（For example,…）很多有手艺的人更容易找到工作[a lot of people with a skill find jobs more easily]。而且（Also,…）有了拿手的技能，人也会更有自信[with a strong skill, people also feel more confident]。所以（So…）我觉得每个人最好都有一项拿手的技能[so I think everyone had better have one strong skill]。",
    "g": "钱",
    "p": ["I think…", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-waste-time||How do you balance life and work?": {
    "a": "我觉得（I think…）想平衡工作和生活，最好先做个计划[to balance work and life, it's best to make a plan]。因为（because…）有了计划，就能按时下班，留时间给自己[with a plan, you can leave on time and keep time for yourself]。比如（For example,…）很多人下班后去锻炼或陪家人吃饭[a lot of people exercise or eat with family after work]。而且（Also,…）周末也可以放下手机，出去走走[at weekends you can also put down the phone and go out]。所以（So…）这样才是健康平衡的生活（balanced lifestyle）[so this is a healthy, balanced lifestyle]。",
    "g": "目标",
    "p": ["I think…", "because…", "For example,…", "Also,…", "So…", "balanced lifestyle"]
  },
  "feishu-waste-time||Will you continue doing something when you are aware that it's a waste of time?": {
    "a": "要看情况（It depends, but usually…）如果那件事能让人放松，我可能会再做一会儿[if it helps people relax, I may do it a bit longer]。因为（because…）休闲时间不用每件事都有产出[free time doesn't need to be useful all the time]。比如（For example,…）很多人累了会刷一会儿手机[a lot of people scroll on their phone when tired]。而且（Also,…）他们常常会给自己定个时间，时间到就停[they often set themselves a time and stop when it is up]。所以（So…）最好用一种有节制的方式（moderate and rational way）去放松[so it's best to relax in a moderate and rational way]。",
    "g": "情绪",
    "p": ["It depends, but usually…", "because…", "For example,…", "Also,…", "So…", "moderate and rational way"]
  },
  "feishu-waste-time||What kinds of things make people feel pressured?": {
    "a": "我觉得（I think…）很多事情都会让人有压力[a lot of things can make people feel stressed]。因为（because…）钱的问题和考试都让人紧张[money problems and exams make people nervous]。比如（For example,…）很多学生考试前会睡不好[a lot of students can't sleep well before exams]。而且（Also,…）很多上班的人也担心钱不够花[a lot of workers also worry about not having enough money]。所以（So…）压力大的时候，把事情拆成小步做会有帮助[so when stressed, doing things in small steps helps]。",
    "g": "情绪",
    "p": ["I think…", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-waste-time||Why do some people refuse to abide by rules?": {
    "a": "我觉得（I think…）有些人不愿意遵守规矩[some people don't follow the rules]。因为（because…）他们觉得这个规矩不公平[they think the rule is unfair]。比如（For example,…）排队太慢的时候，有人就想插队[when the queue is slow, some people want to cut in line]。而且（Also,…）有的人只是觉得没人管，就不当回事[some people just think no one is watching and ignore it]。所以（So…）管理者最好把原因讲清楚[so managers should explain the reasons clearly]。",
    "g": "规矩",
    "p": ["I think…", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-good-shop-service||Can consumption drive economic growth?": {
    "a": "是的（Yes, definitely.），花钱能帮助经济变好[spending helps the economy]。因为（because…）我们花的钱能让很多店铺有生意[the money we spend gives shops business]。比如（For example,…）我们去餐厅吃饭，这家店就赚到钱了[when we eat at a restaurant, the restaurant earns money]。而且（Also,…）我们坐地铁、看电影，也是在花钱[we also spend money when we take the metro or watch a film]。所以（So…）大家多花钱，经济就会更好[so when people spend more, the economy gets better]。",
    "g": "钱",
    "p": ["Yes, definitely.", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-good-shop-service||What are the advantages and disadvantages of shopping in small shops?": {
    "a": "我觉得（I think…）小店有好处也有坏处[small shops have good and bad sides]。因为（because…）小店店员认识老顾客，能面对面聊天（face-to-face communication）[staff know regular customers and can talk face to face]。比如（For example,…）我们去楼下小店买东西，老板记得我们爱买什么[when we buy at the shop downstairs, the owner remembers what we like]。而且（Also,…）不过小店东西少，价格也贵一点[but small shops have fewer things and higher prices]。所以（So…）买东西方便，但选择没那么多[so it is convenient, but there is less choice]。",
    "g": "关系",
    "p": ["I think…", "because…", "face-to-face communication", "For example,…", "Also,…", "So…"]
  },
  "feishu-good-shop-service||What are the advantages and disadvantages of shopping online?": {
    "a": "我觉得（I think…）网上购物很方便，但也有问题[online shopping is convenient, but it has some problems]。因为（because…）网上买东西很方便，又省时间（time-saving and efficient）[it is easy and saves time]。比如（For example,…）我们在手机上点几下，东西就送到家[we tap a few times on the phone, and things come to our door]。而且（Also,…）不过买之前摸不到东西，有时会买错[but you cannot touch the things first, so sometimes you buy the wrong one]。所以（So…）网购很流行，但也要小心一点[so online shopping is popular, but we should be a bit careful]。",
    "g": "钱",
    "p": ["I think…", "because…", "time-saving and efficient", "For example,…", "Also,…", "So…"]
  },
  "feishu-good-shop-service||What are the differences between online shopping and in-store shopping?": {
    "a": "看情况，不过一般来说（It depends, but usually…）两种买法各有好处[both ways have their own good points]。因为（because…）网购随时能买，很省时间（time-saving and efficient）[online shopping is open any time and saves time]。比如（For example,…）我们买纸巾就网购，方便又快[we buy tissues online, which is fast and easy]。而且（Also,…）买衣服还是去店里试更好[for clothes it is better to try them in the shop]。所以（So…）两种方式可以一起用[so people can use both ways together]。",
    "g": "钱",
    "p": ["It depends, but usually…", "because…", "time-saving and efficient", "For example,…", "Also,…", "So…"]
  },
  "feishu-good-shop-service||Why are shopping malls so popular in China?": {
    "a": "我觉得（I think…）商场在中国很受欢迎[shopping malls are very popular in China]。因为（because…）商场把商店、餐厅和电影院放在一起[a mall puts shops, restaurants and cinemas together]。比如（For example,…）周末很多人去商场吃饭、看电影（spend quality time）[at weekends a lot of people go to the mall to eat and watch films]。而且（Also,…）夏天商场里有空调，很凉快[in summer the mall has air conditioning and is nice and cool]。所以（So…）商场成了大家见面的好地方[so the mall becomes a good place to meet]。",
    "g": "关系",
    "p": ["I think…", "because…", "For example,…", "spend quality time", "Also,…", "So…"]
  },
  "feishu-good-shop-service||Why do some people not like shopping in small shops?": {
    "a": "我觉得（I think…）有些人不喜欢在小店买东西[some people don't like shopping in small shops]。因为（because…）小店东西少，价格也不清楚[small shops have fewer things and unclear prices]。比如（For example,…）我们想买的牌子，小店常常没有[the brand we want is often not in small shops]。而且（Also,…）小店也很少有打折[small shops also rarely have discounts]。所以（So…）这些人更喜欢去大商店[so these people prefer big shops]。",
    "g": "情绪",
    "p": ["I think…", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-saved-money||Should schools teach children how to manage money from a young age?": {
    "a": "是的（Yes, definitely.），学校应该早点教孩子管理钱[schools should teach children to manage money early]。因为（because…）这是很有用的生活技能（learn new skills）[this is a useful life skill]。比如（For example,…）老师可以让孩子用零花钱做一个小预算[teachers can let children make a small budget with pocket money]。而且（Also,…）老师也可以教他们先存钱、再买想要的东西[teachers can also show them to save first and then buy what they want]。所以（So…）这些孩子长大后更会花钱[so these children spend money more wisely when they grow up]。",
    "g": "钱",
    "p": ["Yes, definitely.", "because…", "learn new skills", "For example,…", "Also,…", "So…"]
  },
  "feishu-saved-money||Should parents teach their children to spend money freely or to save money?": {
    "a": "看情况，不过一般来说（It depends, but usually…）父母最好教孩子平衡，不要只选一边[parents should teach a balance, not just one side]。因为（because…）孩子可以存一部分钱，再花一小部分[a child can save part of the money and spend a small part]。比如（For example,…）孩子想买玩具，就自己先存几周的零花钱[when a child wants a toy, they save pocket money for a few weeks]。而且（Also,…）父母也可以让孩子自己决定买什么[parents can also let children decide what to buy]。所以（So…）孩子既有自由，又学会存钱[so children have freedom and also learn to save]。",
    "g": "钱",
    "p": ["It depends, but usually…", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-saved-money||Do you think it is easier to teach teenagers how to manage money when they are around 16 or 17 years old?": {
    "a": "是的（Yes, definitely.），教这个年龄的孩子管理钱更容易[it is easier to teach teenagers of this age to manage money]。因为（because…）他们已经懂价格，也会用手机付钱[they already understand prices and can use phone payment]。比如（For example,…）他们自己去买奶茶、坐地铁，都要花钱[they buy milk tea and take the underground by themselves]。而且（Also,…）他们也开始有自己的零花钱要管[they also start to have their own pocket money to manage]。所以（So…）教他们做预算和存钱更有用[so teaching them budgets and saving is more useful]。",
    "g": "钱",
    "p": ["Yes, definitely.", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-saved-money||Is it easier to spend money or save money?": {
    "a": "我觉得（I think…）花钱通常比存钱容易[spending money is usually easier than saving]。因为（because…）广告和手机支付让买东西很快[adverts and phone payment make buying very fast]。比如（For example,…）我们一看到打折，点一下就买了[as soon as we see a discount, we tap once and buy]。而且（Also,…）存钱要一直忍着不花，比较难[saving means holding back all the time, which is harder]。所以（So…）大部分人觉得存钱更难[so most people think saving is harder]。",
    "g": "钱",
    "p": ["I think…", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-saved-money||What kind of things do people usually save money for?": {
    "a": "我觉得（I think…）人们存钱主要是为了以后的大花费[people mainly save for big costs in the future]。因为（because…）有些东西很贵，要慢慢存[some things are very expensive, so people save little by little]。比如（For example,…）很多人为买房或出去旅行存钱[a lot of people save for a house or a trip]。而且（Also,…）有些人也会存一点钱，以防生病或急用[some people also save a little for illness or an emergency]。所以（So…）存钱让人心里更踏实[so saving makes people feel safer]。",
    "g": "钱",
    "p": ["I think…", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-kept-listening||What kind of topics do young people like to talk about today?": {
    "a": "我觉得（I think…）年轻人喜欢聊很多不同的话题[young people like talking about many different topics]。因为（because…）他们常聊学习、工作和游戏[they often talk about study, work and games]。比如（For example,…）很多年轻人一起吃饭时聊网上的热门视频[a lot of young people talk about popular videos online when they eat together]。而且（Also,…）他们也喜欢聊喜欢的明星和运动[they also like to talk about their favourite stars and sports]。所以（So…）聊天让他们和朋友更亲近（relationships much closer and warmer）[so chatting makes them closer to their friends]。",
    "g": "关系",
    "p": ["I think…", "because…", "For example,…", "Also,…", "So…", "relationships much closer and warmer"]
  },
  "feishu-kept-listening||What would happen if the listener didn't listen carefully?": {
    "a": "我觉得（I think…）如果听的人不认真，会有很多问题[if the listener doesn't listen carefully, there will be problems]。因为（because…）他可能听漏重要的信息[they may miss important information]。比如（For example,…）老师说明天要考试，他没听清就没准备[the teacher says there is a test tomorrow, but they miss it and don't prepare]。而且（Also,…）说话的人也会觉得不被尊重[the speaker also feels they are not respected]。所以（So…）这会造成误会，也浪费时间[so this causes a misunderstanding and wastes time]。",
    "g": "关系",
    "p": ["I think…", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-kept-listening||How can we tell if a listener is listening carefully?": {
    "a": "我觉得（I think…）从一些小动作就能看出来[you can tell from small signs]。因为（because…）认真听的人会看着你，不打断[a careful listener looks at you and does not interrupt]。比如（For example,…）我们说完，他会问一个相关的问题[after we finish, they ask a relevant question]。而且（Also,…）他也会点头，或者回应一两句[they also nod or say a few words back]。所以（So…）我们就知道他真的在听[so we know they are really listening]。",
    "g": "关系",
    "p": ["I think…", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-enjoyable-evening||How do people get along in a big family?": {
    "a": "我觉得（I think…）大家庭要相处好，最重要的是好好沟通[to get along in a big family, good communication is the most important]。因为（because…）家里人多，习惯不一样[there are many people with different habits]。比如（For example,…）一大家人周末一起吃饭聊天（spend quality time）[the whole family eats and chats together at weekends]。而且（Also,…）遇到问题的时候，大家会坐下来商量[when there is a problem, everyone sits down and talks it over]。所以（So…）大家关系更近，家里更温暖[so people get closer and the family feels warmer]。",
    "g": "关系",
    "p": ["I think…", "because…", "For example,…", "spend quality time", "Also,…", "So…"]
  },
  "feishu-changed-decision||When do most children begin to make their own decisions?": {
    "a": "我觉得（I think…）大部分孩子很小就开始做小决定[most children begin to make small decisions when they are very young]。因为（because…）学龄前的孩子已经会选衣服和食物[preschool children can already choose clothes and food]。比如（For example,…）小孩每天早上自己选穿哪件衣服[every morning a small child chooses which clothes to wear]。而且（Also,…）他们也会自己决定先玩哪个玩具[they also decide which toy to play with first]。所以（So…）孩子一步一步学会自己做主[so children learn to make their own choices step by step]。",
    "g": "目标",
    "p": ["I think…", "because…", "For example,…", "Also,…", "So…"]
  },
  "feishu-handcraft-person||Is it good to have creative people in a team?": {
    "a": "好，因为他们能提出不同的解决问题的方法[Yes, because they can suggest a different way to solve a problem.]。比如，团队难以解释一个想法时，有创造力的成员可能会画一幅大家都看得懂的简单图画[For example, when a team struggles to explain an idea, a creative member may draw a simple picture that everyone understands.]。其他成员也能从这种方法中学习[Other members can learn from this approach too.]。不过，团队仍然需要检查这个想法在实际中是否可行[However, the team still needs to check whether the idea will work in practice.]。",
    "g": "目标",
    "p": [
      "a different way",
      "learn from this approach"
    ],
    "reasonExample": {
      "reasonCn": "好，因为他们能提出不同的解决问题的方法",
      "reasonEn": "Yes, because they can suggest a different way to solve a problem.",
      "exCn": "比如，团队难以解释一个想法时，有创造力的成员可能会画一幅大家都看得懂的简单图画",
      "exEn": "For example, when a team struggles to explain an idea, a creative member may draw a simple picture that everyone understands."
    }
  },
  "feishu-handcraft-person||Does art, like music or theater, have an impact on society?": {
    "a": "会，艺术能改善人们的心情，也能让大家聚在一起[Yes, art can improve people's mood and bring them together.]。比如，当地的音乐演出给邻居们提供了共同放松和欣赏表演的机会[For example, a local music show gives neighbours a chance to relax and enjoy something together.]。传统歌曲和戏剧还能让年轻人了解当地习俗[Traditional songs and plays can also teach younger people about local customs.]。因此，艺术既能促进社区关系，也能帮助文化传承[So art can support both community relationships and the passing on of culture.]。",
    "g": "情绪",
    "p": [
      "improve people's mood",
      "local customs"
    ],
    "reasonExample": {
      "reasonCn": "会，艺术能改善人们的心情，也能让大家聚在一起",
      "reasonEn": "Yes, art can improve people's mood and bring them together.",
      "exCn": "比如，当地的音乐演出给邻居们提供了共同放松和欣赏表演的机会",
      "exEn": "For example, a local music show gives neighbours a chance to relax and enjoy something together."
    }
  },
  "feishu-difficult-success-person||Other than making money, what is more important for a company?": {
    "a": "我认为，赢得人们的信任比迅速赚钱更重要[I think earning people's trust is more important than making a quick profit.]。公司应该提供可靠的产品，公平对待员工和顾客[A company should provide reliable products and treat its workers and customers fairly.]。比如，产品出现问题时，公司应该解释清楚并提供帮助[For example, if a product has a problem, the company should explain it clearly and offer help.]。这会让顾客愿意再次购买，也有助于企业长期发展[This gives customers a reason to return and supports the business in the long run.]。",
    "g": "关系",
    "p": [
      "earning people's trust",
      "in the long run"
    ],
    "reasonExample": {
      "reasonCn": "我认为，赢得人们的信任比迅速赚钱更重要",
      "reasonEn": "I think earning people's trust is more important than making a quick profit.",
      "exCn": "比如，产品出现问题时，公司应该解释清楚并提供帮助",
      "exEn": "For example, if a product has a problem, the company should explain it clearly and offer help."
    }
  },
  "feishu-difficult-success-person||Is it easy to start up a company?": {
    "a": "不太容易[Not really.]。即使是一家小企业，也需要资金、计划，以及对顾客需求的清楚了解[Even a small business needs money, planning and a clear idea of what customers want.]。比如，开咖啡馆意味着还不知道会有多少顾客，就得先交房租[For example, opening a cafe means paying rent before knowing how many people will come.]。从小规模开始可以减少压力，但经营者仍然需要耐心，也需要有从错误中学习的能力[Starting on a small scale can reduce the pressure, but the owner still needs patience and the ability to learn from mistakes.]。",
    "g": "钱",
    "p": [
      "money, planning",
      "learn from mistakes"
    ],
    "reasonExample": {
      "reasonCn": "即使是一家小企业，也需要资金、计划，以及对顾客需求的清楚了解",
      "reasonEn": "Even a small business needs money, planning and a clear idea of what customers want.",
      "exCn": "比如，开咖啡馆意味着还不知道会有多少顾客，就得先交房租",
      "exEn": "For example, opening a cafe means paying rent before knowing how many people will come."
    }
  },
  "feishu-difficult-success-person||In which sectors are companies more likely to succeed in China?": {
    "a": "我认为，让日常生活更方便的企业有不错的机会，比如配送服务和实用软件[I think businesses that make daily life easier have a good chance, such as delivery services and useful software.]。比如，帮助小商店管理订单的应用可以节省员工的时间，也能减少错误[For example, an app that helps small shops manage orders can save workers time and reduce mistakes.]。不过，身处热门行业还不够[However, being in a popular industry is not enough.]。公司仍然需要可靠的服务，以及对顾客的清楚了解[A company still needs reliable service and a clear understanding of its customers.]。",
    "g": "目标",
    "p": [
      "make daily life easier",
      "reduce mistakes"
    ],
    "reasonExample": {
      "reasonCn": "我认为，让日常生活更方便的企业有不错的机会，比如配送服务和实用软件",
      "reasonEn": "I think businesses that make daily life easier have a good chance, such as delivery services and useful software.",
      "exCn": "比如，帮助小商店管理订单的应用可以节省员工的时间，也能减少错误",
      "exEn": "For example, an app that helps small shops manage orders can save workers time and reduce mistakes."
    }
  },
  "feishu-least-favorite-movie||What kinds of movies are most popular in China?": {
    "a": "我认为喜剧片和动作片是最受欢迎的类型之一[I think comedies and action films are among the most popular.]。喜剧能帮助人们在忙碌一周后放松，动作片则有适合大银幕观看的刺激场面[Comedies help people relax after a busy week, while action films offer exciting scenes that look good on a big screen.]。比如，一群朋友可能选择喜剧，因为大家容易一起看得开心[For example, a group of friends may choose a comedy because it is easy to enjoy together.]。当然，每个人的喜好不同[Of course, people's tastes are different.]。",
    "g": "情绪",
    "p": [
      "relax after a busy week",
      "enjoy together"
    ],
    "reasonExample": {
      "reasonCn": "喜剧能帮助人们在忙碌一周后放松，动作片则有适合大银幕观看的刺激场面",
      "reasonEn": "Comedies help people relax after a busy week, while action films offer exciting scenes that look good on a big screen.",
      "exCn": "比如，一群朋友可能选择喜剧，因为大家容易一起看得开心",
      "exEn": "For example, a group of friends may choose a comedy because it is easy to enjoy together."
    }
  },
  "feishu-least-favorite-movie||What are the differences between watching movies at home and in a cinema?": {
    "a": "在家看电影通常更便宜、更灵活，因为可以暂停电影，也可以自己选择零食[Watching at home is usually cheaper and more flexible because people can pause the film and choose their own snacks.]。电影院的屏幕更大、音效更好，能让动作片更刺激[A cinema has a bigger screen and better sound, which can make an action film more exciting.]。比如，想安静地度过一个晚上时，我会在家看；想和朋友特别出去玩一次时，我会选择电影院[For example, I would choose home for a quiet evening, but a cinema for a special outing with friends.]。",
    "g": "钱",
    "p": [
      "cheaper and more flexible",
      "a bigger screen"
    ],
    "reasonExample": {
      "reasonCn": "在家看电影通常更便宜、更灵活，因为可以暂停电影，也可以自己选择零食",
      "reasonEn": "Watching at home is usually cheaper and more flexible because people can pause the film and choose their own snacks.",
      "exCn": "比如，想安静地度过一个晚上时，我会在家看；想和朋友特别出去玩一次时，我会选择电影院",
      "exEn": "For example, I would choose home for a quiet evening, but a cinema for a special outing with friends."
    }
  },
  "feishu-least-favorite-movie||Are movies more likely to help people become more creative than books?": {
    "a": "不一定[Not necessarily.]。电影能通过画面、音乐和特别的故事给人新想法[Films can give people new ideas through images, music and unusual stories.]。不过，书籍需要读者自己想象人物和场景，这也能培养创造力[However, books make readers imagine the characters and places for themselves, which also develops creativity.]。比如，两位读者想象中的同一个房间可能完全不同[For example, two readers may picture the same room very differently.]。我认为，尝试不同的书和电影，比认定某一种总是更好更有用[I think trying different books and films is more useful than saying one is always better.]。",
    "g": "目标",
    "p": [
      "new ideas",
      "develops creativity"
    ],
    "reasonExample": {
      "reasonCn": "不过，书籍需要读者自己想象人物和场景，这也能培养创造力",
      "reasonEn": "However, books make readers imagine the characters and places for themselves, which also develops creativity.",
      "exCn": "比如，两位读者想象中的同一个房间可能完全不同",
      "exEn": "For example, two readers may picture the same room very differently."
    }
  },
  "feishu-least-favorite-movie||Can movies help people better understand the cultural background of a country?": {
    "a": "能，电影可以展示日常习惯、家庭关系和当地传统[Yes, films can show everyday habits, family relationships and local traditions.]。比如，一部关于家庭节日的电影，可能会展示人们怎样准备食物、问候年长亲属[For example, a film about a family festival may show how people prepare food and greet older relatives.]。这些细节让另一种文化更容易理解[These details make another culture easier to understand.]。不过，一部电影只是一个故事，所以观众不应该认为那个国家的所有人都过着相同的生活[However, a film is only one story, so viewers should not assume everyone in that country lives in the same way.]。",
    "g": "关系",
    "p": [
      "local traditions",
      "another culture"
    ],
    "reasonExample": {
      "reasonCn": "能，电影可以展示日常习惯、家庭关系和当地传统",
      "reasonEn": "Yes, films can show everyday habits, family relationships and local traditions.",
      "exCn": "比如，一部关于家庭节日的电影，可能会展示人们怎样准备食物、问候年长亲属",
      "exEn": "For example, a film about a family festival may show how people prepare food and greet older relatives."
    }
  },
  "feishu-disliked-short-trip||Do Chinese people like travelling abroad?": {
    "a": "很多人喜欢，因为他们喜欢看陌生的地方、尝试不同的食物[Many do because they enjoy seeing unfamiliar places and trying different food.]。出国旅行也能帮助人们了解别人的生活[A trip abroad can also help people learn how others live.]。比如，逛当地市场的体验就与在网上看照片不同[For example, visiting a local market gives a different experience from seeing pictures online.]。不过，考虑到费用、语言和所需时间，有些人更喜欢在国内旅行[However, the cost, language and time needed mean that some people prefer travelling within China.]。",
    "g": "目标",
    "p": [
      "learn how others live",
      "trying different food"
    ],
    "reasonExample": {
      "reasonCn": "出国旅行也能帮助人们了解别人的生活",
      "reasonEn": "A trip abroad can also help people learn how others live.",
      "exCn": "比如，逛当地市场的体验就与在网上看照片不同",
      "exEn": "For example, visiting a local market gives a different experience from seeing pictures online."
    }
  },
  "feishu-disliked-short-trip||Who prefers travelling abroad? The young or the old?": {
    "a": "我认为年轻人可能更愿意尝试陌生的地方，并自己安排旅行[I think younger people may be more willing to try unfamiliar places and plan a trip by themselves.]。老年人可能更喜欢较慢的节奏，以及能处理交通和语言问题的旅行团[Older people may prefer a slower pace and a tour group that handles transport and language problems.]。比如，年轻游客可能会去几个城市，而年长游客可能在一个地方住得更久[For example, young travellers might try several cities, while older visitors may stay longer in one place.]。不过，健康、金钱和个人兴趣比年龄本身更重要[Still, health, money and personal interests matter more than age alone.]。",
    "g": "情绪",
    "p": [
      "try unfamiliar places",
      "a slower pace"
    ],
    "reasonExample": {
      "reasonCn": "我认为年轻人可能更愿意尝试陌生的地方，并自己安排旅行",
      "reasonEn": "I think younger people may be more willing to try unfamiliar places and plan a trip by themselves.",
      "exCn": "比如，年轻游客可能会去几个城市，而年长游客可能在一个地方住得更久",
      "exEn": "For example, young travellers might try several cities, while older visitors may stay longer in one place."
    }
  },
  "feishu-disliked-short-trip||How much time do you think people should spend on a trip abroad?": {
    "a": "如果时间和费用允许，我认为第一次去某个国家，安排一两周比较合理[For a first visit, I think about one or two weeks is reasonable if people can afford the time and cost.]。这样能有几天时间适应和游览，不必每天早上都赶路[This gives them a few days to settle in and explore without rushing every morning.]。距离近的目的地可能只需要一个长周末[A nearby destination may only need a long weekend.]。关键是留出足够的休息时间，而不是把每个小时都塞满活动[The main thing is to leave enough time to rest instead of filling every hour with activities.]。",
    "g": "情绪",
    "p": [
      "without rushing",
      "enough time to rest"
    ],
    "reasonExample": {
      "reasonCn": "这样能有几天时间适应和游览，不必每天早上都赶路",
      "reasonEn": "This gives them a few days to settle in and explore without rushing every morning.",
      "exCn": "距离近的目的地可能只需要一个长周末",
      "exEn": "A nearby destination may only need a long weekend."
    }
  },
  "feishu-disliked-short-trip||Which is better for knowing more about a country? Travelling or reading books about it?": {
    "a": "我会把两种方式结合起来，因为它们提供不同类型的知识[I would choose both because they provide different kinds of knowledge.]。书籍可以解释一个国家的历史和习俗，旅行则让人直接体验日常生活[Books can explain a country's history and customs, while travel lets people experience daily life directly.]。比如，阅读关于当地市场的介绍很有用，但亲自去逛能看到人们怎样交谈和购物[For example, reading about a local market is useful, but visiting it shows how people talk and shop.]。旅行前先阅读，可以让这段经历更有意义[Reading before a trip can make the experience much more meaningful.]。",
    "g": "目标",
    "p": [
      "history and customs",
      "experience daily life directly"
    ],
    "reasonExample": {
      "reasonCn": "书籍可以解释一个国家的历史和习俗，旅行则让人直接体验日常生活",
      "reasonEn": "Books can explain a country's history and customs, while travel lets people experience daily life directly.",
      "exCn": "比如，阅读关于当地市场的介绍很有用，但亲自去逛能看到人们怎样交谈和购物",
      "exEn": "For example, reading about a local market is useful, but visiting it shows how people talk and shop."
    }
  },
  "feishu-saved-money||Should people spend time on charity, or just money?": {
    "a": "我认为两种方式都有帮助，人们应该根据自己的情况选择[I think both can help, and people should choose according to their situation.]。钱可以用来购买食物和设备，志愿者则可以提供实际帮助和陪伴[Money can pay for food and equipment, while volunteers can offer practical help and company.]。比如，探望一位老人，能让他有个人可以聊天[For example, visiting an older person gives them someone to talk to.]。忙碌的人可以选择捐钱，有空闲时间的人则可以考虑亲自提供帮助[A busy person may donate money instead, but anyone with spare time can consider helping in person.]。",
    "g": "关系",
    "p": [
      "practical help and company",
      "helping in person"
    ],
    "reasonExample": {
      "reasonCn": "钱可以用来购买食物和设备，志愿者则可以提供实际帮助和陪伴",
      "reasonEn": "Money can pay for food and equipment, while volunteers can offer practical help and company.",
      "exCn": "比如，探望一位老人，能让他有个人可以聊天",
      "exEn": "For example, visiting an older person gives them someone to talk to."
    }
  },
  "new-famous-interview||Why do we need to attend interviews when applying for jobs?": {
    "a": "面试能帮助双方判断这份工作是否合适[Interviews help both sides decide whether the job is a good match.]。雇主可以问应聘者如何处理过一个真实问题，这比简历提供的信息更具体[An employer can ask how someone handled a real problem, which gives more detail than a CV.]。应聘者也可以询问团队和日常工作[The applicant can also ask about the team and daily work.]。这能避免误解，不过面试无法展示一个人的全部情况[This can prevent misunderstandings, although an interview cannot show everything about a person.]。",
    "g": "目标",
    "p": [
      "a good match",
      "prevent misunderstandings"
    ],
    "reasonExample": {
      "reasonCn": "面试能帮助双方判断这份工作是否合适",
      "reasonEn": "Interviews help both sides decide whether the job is a good match.",
      "exCn": "雇主可以问应聘者如何处理过一个真实问题，这比简历提供的信息更具体",
      "exEn": "An employer can ask how someone handled a real problem, which gives more detail than a CV."
    }
  },
  "new-famous-interview||What should people wear to a job interview?": {
    "a": "他们应该穿干净、整洁而且适合这份工作的衣服[They should wear something clean, tidy and suitable for the job.]。面试办公室岗位时，素色衬衫和比较正式的长裤通常是合理的选择[For an office role, a plain shirt and smart trousers are often a sensible choice.]。衣服不一定要昂贵，但应该体现对场合的尊重[The clothes do not have to be expensive, but they should show respect for the occasion.]。穿得舒服也能让人专注于交谈，而不是一直担心自己的外表[Feeling comfortable also helps people focus on the conversation instead of worrying about their appearance.]。",
    "g": "规矩",
    "p": [
      "clean, tidy",
      "show respect"
    ],
    "reasonExample": {
      "reasonCn": "衣服不一定要昂贵，但应该体现对场合的尊重",
      "reasonEn": "The clothes do not have to be expensive, but they should show respect for the occasion.",
      "exCn": "面试办公室岗位时，素色衬衫和比较正式的长裤通常是合理的选择",
      "exEn": "For an office role, a plain shirt and smart trousers are often a sensible choice."
    }
  },
  "new-famous-interview||What kind of things do famous people often say in interviews?": {
    "a": "他们经常谈论自己的工作、未来计划以及遇到过的困难[They often talk about their work, future plans and the difficulties they have faced.]。比如，演员可能会解释自己怎样为一个角色做准备，企业经营者可能会讲述早期犯过的一个错误[For example, an actor may explain how they prepared for a role, while a business owner may describe an early mistake.]。这些故事能让听众学到有用的东西[These stories can teach listeners something useful.]。不过，名人可能会回避私人问题，或主要关注新项目的宣传[However, celebrities may avoid private questions or focus mainly on promoting a new project.]。",
    "g": "目标",
    "p": [
      "difficulties they have faced",
      "something useful"
    ],
    "reasonExample": {
      "reasonCn": "这些故事能让听众学到有用的东西",
      "reasonEn": "These stories can teach listeners something useful.",
      "exCn": "比如，演员可能会解释自己怎样为一个角色做准备，企业经营者可能会讲述早期犯过的一个错误",
      "exEn": "For example, an actor may explain how they prepared for a role, while a business owner may describe an early mistake."
    }
  }
};
