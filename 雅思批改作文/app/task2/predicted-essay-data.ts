export type PredictedEssay = {
  id: string;
  title: string;
  prompt: string;
  position: string;
  materials: string[];
  frameworkPoints: Array<{
    label: string;
    text: string;
  }>;
  keyPhrases: Array<{
    text: string;
    translation: string;
  }>;
  reasonPhrases?: Array<{
    text: string;
    translation: string;
  }>;
  introPhrases?: Array<{
    text: string;
    translation: string;
  }>;
  paragraphs: string[];
};

export type PredictedEssayCategory = {
  id: string;
  name: string;
  description: string;
  essays: PredictedEssay[];
};

const basePredictedEssayCategories: PredictedEssayCategory[] = [
  {
    id: "stance",
    name: "同侧论证",
    description: "同意 / 不同意、个人观点和正负发展题；两个主体段共同支持一个明确立场。",
    essays: [
      {
        id: "salary-gap",
        title: "高层管理者与普通员工薪资差距",
        prompt: "Some people think it is a good thing for senior management positions to have very high salaries compared to other workers of the same company or organisation. To what extent do you agree?",
        position: "不同意过大的薪资差距",
        materials: ["收入分配和贫困", "就业和失业"],
        frameworkPoints: [
          { label: "第一点原因", text: "过大的薪资差距会打击普通员工积极性，并增加人才流失。" },
          { label: "第二点原因", text: "把利润用于培训和改善工作条件，更有利于公司长期稳定。" },
        ],
        keyPhrases: [
          { text: "a wide income gap", translation: "过大的收入差距" },
          { text: "dissatisfaction and social division", translation: "不满和社会分化" },
          { text: "vocational training", translation: "职业培训" },
          { text: "stable employment", translation: "稳定就业" },
        ],
        paragraphs: [
          `People have different views about whether senior managers should receive salaries that are far higher than those of ordinary workers in the same organisation. I disagree with this practice because a wide income gap can damage staff motivation and create an unfair workplace culture.`,
          `The first reason is that a large pay difference can reduce the motivation of ordinary employees. This is because they do much of the daily work but may feel that the company does not value them. As a result, experienced staff may work less carefully or look for another job. For example, a wide income gap between workers and managers can reduce staff motivation, cause dissatisfaction and social division, and increase employee turnover. Therefore, a smaller and clearer pay difference can help the business keep good workers.`,
          `The second reason is that company money can be used in ways that benefit more people. Managers should earn more for extra responsibility, but rewards should be linked to clear results. The company can then use part of its profit to improve salaries, training and working conditions. For example, vocational training can help ordinary staff learn useful skills, while fair pay can give them stable employment. As a result, workers are more likely to stay and support the company's goals. Therefore, this policy is better for long-term business success.`,
          `In conclusion, senior managers deserve higher salaries, but the gap should not be extreme. Reasonable differences based on responsibility and performance are more likely to motivate employees and support the long-term success of a company.`,
        ],
      },
      {
        id: "leader-intelligence",
        title: "领导的重要品质",
        prompt: "Intelligence is the most important factor for a leader. To what extent do you agree or disagree?",
        position: "不同意：沟通与责任感同样重要",
        materials: ["就业和失业", "语言和交流"],
        frameworkPoints: [
          { label: "第一点原因", text: "领导表达清楚，员工才能明白任务并一起工作。" },
          { label: "第二点原因", text: "领导公平负责，员工才会信任并愿意听从安排。" },
        ],
        keyPhrases: [
          { text: "communication skills", translation: "沟通能力" },
          { text: "avoid misunderstandings", translation: "避免误解" },
          { text: "fair treatment", translation: "公平对待" },
          { text: "build employee trust", translation: "建立员工信任" },
        ],
        paragraphs: [
          `Some people believe that intelligence is the most important quality of a successful leader. Although intelligence helps a person understand difficult information, I disagree that it is the only main factor. In my view, a leader must also communicate clearly and treat employees fairly.`,
          `The first reason is that workers need clear instructions. A clever leader may have a good plan, but the plan is useless if employees do not know what to do. Clear communication also allows workers to ask questions and report problems before they become serious. For example, good communication skills help a manager explain each person's task, avoid misunderstandings and solve problems early. The team can then work towards the same goal and finish the project on time. Therefore, clear communication is a basic leadership skill.`,
          `The second reason is that employees need to trust their leader. A responsible leader listens to workers, uses the same rules for everyone and admits mistakes. This creates a fair working environment, so staff are more willing to accept difficult decisions. For example, fair treatment and open decision-making can build employee trust, keep workers motivated and encourage them to follow clear rules. As a result, people are more likely to stay with the company and support the leader during difficult periods. A leader who only gives clever ideas but treats people badly will soon lose the team's support. Therefore, responsibility is as important as intelligence.`,
          `In conclusion, intelligence is useful because it helps leaders understand problems, but it is not enough by itself. Simple communication helps employees do their work, while fair and responsible behaviour earns their trust. These qualities make leadership more effective.`,
        ],
      },
      {
        id: "company-facilities",
        title: "公司提供运动和社交设施",
        prompt: "All large companies should provide sports and social facilities for the local community. To what extent do you agree or disagree with this statement?",
        position: "部分同意：鼓励但不应强制所有公司",
        materials: ["健康生活方式和习惯", "政府角色和责任"],
        frameworkPoints: [
          { label: "第一点原因", text: "开放运动和社交设施可以改善健康并加强社区联系。" },
          { label: "第二点原因", text: "不同企业条件不同，应灵活支持社区，而不是统一强制建设。" },
        ],
        keyPhrases: [
          { text: "regular exercise", translation: "规律运动" },
          { text: "reduce the risk of disease", translation: "降低患病风险" },
          { text: "safe public spaces", translation: "安全的公共空间" },
          { text: "make healthy choices easier", translation: "让健康选择更容易" },
        ],
        paragraphs: [
          `It is argued that every large company should provide sports and social facilities for people in the local area. I partly agree because such facilities can improve public health and community ties, although making them compulsory for all companies would be unreasonable.`,
          `The first reason is that shared facilities can improve the health of local people. Many communities do not have affordable places for exercise or organised activities. If a company opens a sports ground after working hours, more residents can become active and meet their neighbours. For example, affordable places for exercise can encourage regular exercise, reduce the risk of disease and improve community contact. This support can also reduce loneliness. Therefore, large companies can provide useful support when suitable facilities already exist.`,
          `The second point is that this support should be flexible rather than compulsory. A factory with dangerous equipment cannot safely invite the public inside, and a company losing money may need to protect jobs first. Local government can plan facilities for the whole area and ask businesses for suitable help. For example, public-private cooperation can fund safe public spaces, provide lighting and staff, and make healthy choices easier for residents. Therefore, each business should contribute in a practical way instead of being forced to build the same facilities.`,
          `In conclusion, large companies should support community sport and social life when they can do so safely and affordably. Nevertheless, flexible cooperation with local government is fairer than a rule requiring every company to provide its own facilities.`,
        ],
      },
      {
        id: "congestion-tax",
        title: "交通拥堵税",
        prompt: "In some cities, governments have imposed a congestion tax during rush hour. Do you think this development is positive or negative?",
        position: "总体积极",
        materials: ["交通和通信", "污染控制和环境保护"],
        frameworkPoints: [
          { label: "第一点原因", text: "拥堵税会减少高峰期不必要的驾车出行。" },
          { label: "第二点原因", text: "税收收入可以投入公共交通和更环保的出行方案。" },
        ],
        keyPhrases: [
          { text: "traffic congestion and pollution", translation: "交通拥堵和污染" },
          { text: "improve safety and access to services", translation: "改善安全和公共服务可及性" },
          { text: "greener solutions", translation: "更环保的解决方案" },
          { text: "clean technology and renewable energy", translation: "清洁技术和可再生能源" },
        ],
        paragraphs: [
          `Some city governments charge drivers a congestion tax when they enter busy areas during rush hour. I consider this an overall positive development because it can reduce traffic congestion and provide money for better public transport.`,
          `The first reason is that the charge can reduce the number of cars at the busiest time. When driving becomes more expensive, commuters may share a car, travel earlier or take a bus. As a result, city roads become less crowded and emergency vehicles can move faster. For example, reducing traffic congestion and pollution around a hospital can improve safety and access to services, help emergency vehicles move faster and make essential journeys more reliable. Therefore, the tax can discourage trips that can easily be made at another time.`,
          `The second reason is that the tax provides money for better transport. The government can increase bus services, improve rail stations and build safe cycling routes. These changes give lower-income residents a real alternative to driving. For example, the city can fund better public transport and greener solutions, including electric buses powered by clean technology and renewable energy. This also gives people a dependable choice when fuel prices rise. Some disabled people and workers without a transport choice should receive discounts. With these protections, the long-term transport and health benefits are greater than the extra cost for most drivers.`,
          `In conclusion, a well-designed congestion tax is a positive measure. By discouraging avoidable peak-hour driving and financing affordable alternatives, it can make crowded cities cleaner, safer and easier to travel around.`,
        ],
      },
      {
        id: "remote-work",
        title: "远程工作对雇主无益",
        prompt: "Many employees can now do their work from home using modern technology. However, this change may only benefit workers, not the employers. To what extent do you agree or disagree?",
        position: "不同意：雇主同样受益",
        materials: ["信息技术和互联网", "就业和失业"],
        frameworkPoints: [
          { label: "第一点原因", text: "远程办公可以减少办公场地和日常运营成本。" },
          { label: "第二点原因", text: "远程办公扩大招聘范围，也更容易留住员工。" },
        ],
        keyPhrases: [
          { text: "quick access to information", translation: "快速获取信息" },
          { text: "global communication", translation: "全球沟通" },
          { text: "a supportive working environment", translation: "支持性的工作环境" },
          { text: "a reasonable work-life balance", translation: "合理的工作生活平衡" },
        ],
        paragraphs: [
          `Modern technology allows many employees to work from home, and some people argue that only workers benefit from this change. I disagree because remote work can lower business costs and help employers recruit and retain capable staff.`,
          `The first reason is that remote work can reduce company costs. When fewer people attend every day, the business can rent a smaller office and spend less on electricity, cleaning and equipment. Digital documents can also reduce printing and travel. For example, a shared online system gives workers quick access to information, while video meetings support global communication without expensive business trips. The money saved can be used for training or better technology. Therefore, remote work can directly and significantly improve the employer's financial position as well as helping employees.`,
          `The second reason is that employers can recruit and keep more suitable workers. A company is no longer limited to people who live near the office, and parents or experienced staff may be able to remain in their jobs. Communication can be harder, but clear targets and regular meetings can solve many problems. For example, a supportive working environment with flexible working hours can give employees a reasonable work-life balance and help retain experienced staff. As a result, the company spends less time and money replacing trained staff.`,
          `In conclusion, working from home is not only an employee benefit. Lower costs and a wider, more stable workforce can provide important advantages to employers, provided that they establish clear systems for communication and performance.`,
        ],
      },
      {
        id: "extreme-sports",
        title: "极限运动",
        prompt: "Extreme sports such as skydiving and skiing are very dangerous and should be banned. To what extent do you agree or disagree with this view?",
        position: "不同意全面禁止",
        materials: ["健康政策和公共卫生", "法律和人权"],
        frameworkPoints: [
          { label: "第一点原因", text: "成年人应该有权选择自己的活动。" },
          { label: "第二点原因", text: "安全规定可以降低风险，所以不需要全面禁止。" },
        ],
        keyPhrases: [
          { text: "improve physical health", translation: "改善身体健康" },
          { text: "build confidence", translation: "建立自信" },
          { text: "trained instructors", translation: "受过培训的教练" },
          { text: "safe equipment", translation: "安全的装备" },
        ],
        paragraphs: [
          `Extreme sports such as skydiving and skiing can cause serious injuries, so some people believe they should be banned. I disagree with a complete ban. Adults should be free to choose these activities, and clear safety rules can reduce most of the danger.`,
          `The first reason is that adults should be free to choose their activities. People already make personal decisions about driving, travel and other activities that involve some risk. The government should give clear information, but responsible adults can decide whether the experience is worth the danger. Extreme sports can also provide exercise, enjoyment and a sense of achievement. For example, supervised skiing can improve physical health, build confidence and support local tourism jobs. Participants can enjoy the activity while following professional advice. Therefore, banning every dangerous sport would unnecessarily limit personal choice and remove useful benefits for people and local communities.`,
          `The second reason is that safety rules can reduce the risks. Most accidents are more likely when people have poor training, damaged equipment or bad weather. Governments can require companies to check equipment, employ trained instructors and give beginners a short safety course. For example, a safe sports provider can use trained instructors, provide safe equipment, require protective clothing and cancel activities in bad weather. Companies that break these rules should lose their licence. These simple controls protect participants without stopping careful adults from taking part. Therefore, strict safety rules are more reasonable than a complete ban.`,
          `In conclusion, extreme sports are dangerous, but they should not be completely prohibited. Adults should keep the freedom to choose, while providers must follow clear safety rules. This approach protects people without removing a popular activity.`,
        ],
      },
      {
        id: "university-fees",
        title: "大学生是否应承担全部学费",
        prompt: "Some people believe that university students should pay all the costs of studies because university education only benefits students themselves, not society as a whole. To what extent do you agree or disagree?",
        position: "不同意：社会同样受益",
        materials: ["教育机会和平等", "税收和公共支出"],
        frameworkPoints: [
          { label: "第一点原因", text: "大学毕业生会为社会提供重要服务。" },
          { label: "第二点原因", text: "全额学费会阻止贫困学生上大学。" },
        ],
        keyPhrases: [
          { text: "train future doctors and teachers", translation: "培养未来的医生和教师" },
          { text: "improve public services", translation: "改善公共服务" },
          { text: "avoid large debts", translation: "避免巨额债务" },
          { text: "equal access to education", translation: "平等的受教育机会" },
        ],
        paragraphs: [
          `Some people believe university students should pay the full cost of their education because a degree mainly benefits the individual. I disagree. Higher education also benefits society, and full fees can prevent capable students from poor families from attending university.`,
          `The first reason is that university graduates provide important services. Hospitals need doctors and nurses, schools need teachers, and companies need engineers and other skilled workers. These people use their knowledge to solve public problems and help the economy. For example, university courses can train future doctors and teachers, improve public services and support economic growth. Since the whole community receives these benefits, it is reasonable for the government to pay part of the cost. Students can still pay a smaller amount because they may earn more after graduation. Therefore, the cost should be shared.`,
          `The second reason is that full fees can stop poor students from going to university. Many capable young people cannot ask their families for a large amount of money, and they may fear years of debt. The country could then lose good future workers simply because of their family income. For example, grants for students from low-income families can help them avoid large debts, protect equal access to education and reduce social inequality. This gives ability, rather than wealth, a greater role in university entry. Therefore, charging every student the full cost would be unfair and harmful to society.`,
          `In conclusion, students should make a reasonable contribution to their degree, but they should not pay all the fees. Government funding is justified because graduates serve society and because affordable education gives capable students a fair chance.`,
        ],
      },
      {
        id: "move-companies",
        title: "公司和工厂迁往乡村",
        prompt: "Traffic and housing problems could be solved by moving large companies, factories and their employees to the countryside. To what extent do you agree or disagree?",
        position: "同意",
        materials: ["交通和通信", "就业和失业"],
        frameworkPoints: [
          { label: "第一点原因", text: "搬迁工作地点可以减少进入大城市的日常通勤，缓解交通拥堵。" },
          { label: "第二点原因", text: "乡村和小城镇出现更多就业机会后，城市住房需求会下降。" },
        ],
        keyPhrases: [
          { text: "reduce traffic congestion", translation: "减少交通拥堵" },
          { text: "reduce long daily journeys", translation: "减少长距离日常通勤" },
          { text: "make city roads less crowded", translation: "让城市道路不那么拥挤" },
          { text: "lower the demand for urban housing", translation: "降低城市住房需求" },
          { text: "create regional jobs", translation: "创造地区就业机会" },
          { text: "gain a regular income", translation: "获得稳定收入" },
          { text: "support local businesses", translation: "支持当地企业" },
          { text: "spread population more evenly", translation: "让人口分布更加均衡" },
        ],
        paragraphs: [
          `Some people believe that moving large companies, factories and their employees to the countryside can solve traffic and housing problems in cities. I agree because this policy can reduce daily travel into city centres and lower the demand for urban housing.`,
          `The first reason is that moving workplaces can reduce traffic congestion. At present, many employees travel into large cities every morning because most jobs are located there. If companies move and workers live near their new workplaces, fewer people will make long daily journeys. City roads will become less crowded, and buses can run more reliably. For example, moving a factory with many workers to a small town could reduce long daily journeys and make city roads less crowded during rush hour. Therefore, spreading workplaces across different areas can directly reduce urban traffic.`,
          `The second reason is that relocation can lower the demand for urban housing. People often move to large cities mainly because suitable jobs are available there. When companies create regional jobs, some employees can live in smaller towns, where homes and land are usually cheaper. Local residents may also gain a regular income, and nearby shops can receive more customers. For example, a new business area can create regional jobs, support local businesses and spread population more evenly. As a result, fewer people will need to compete for expensive homes in city centres. Therefore, relocation can reduce housing pressure and support regional development.`,
          `In conclusion, I agree that moving large employers and their workers to the countryside can help solve urban traffic and housing problems. It can reduce daily travel into cities, lower housing demand and create useful opportunities in regional areas.`,
        ],
      },
      {
        id: "live-with-climate-change",
        title: "适应气候变化",
        prompt: "Some people think that instead of preventing climate change, we need to find a way to live with it. To what extent do you agree or disagree?",
        position: "不同意二选一：减缓为主、适应并行",
        materials: ["气候变化和可持续发展", "环境政策和法规"],
        frameworkPoints: [
          { label: "第一点原因", text: "减排可以阻止气候损害继续扩大，是长期重点。" },
          { label: "第二点原因", text: "部分影响已经发生，因此也需要防洪和水资源管理等适应措施。" },
        ],
        keyPhrases: [
          { text: "reduce greenhouse gas emissions", translation: "减少温室气体排放" },
          { text: "clean technology and renewable energy", translation: "清洁技术和可再生能源" },
          { text: "extreme weather", translation: "极端天气" },
          { text: "sustainable development policies", translation: "可持续发展政策" },
        ],
        paragraphs: [
          `Some people believe that society should stop trying to prevent climate change and focus only on adapting to it. I disagree with this approach because unchecked warming would make adaptation increasingly costly, although preparation for unavoidable effects is also essential.`,
          `The first reason is that prevention can stop climate damage from becoming impossible to manage. If countries continue to burn large amounts of fossil fuel, temperatures and sea levels will keep rising. This will damage farms, health and coastal communities. For example, governments can replace fossil fuels, reduce greenhouse gas emissions, invest in clean technology and renewable energy, and improve air quality. This can also make energy supplies more secure. Therefore, reducing the cause of climate change is cheaper and safer than trying to adapt to unlimited future warming.`,
          `The second point is that some adaptation is still necessary because climate effects are already happening. Governments should protect homes from floods, improve water systems and prepare health services for heat waves. Farmers may also need better weather information and different crops. For example, sustainable development policies can require flood-safe housing in places facing extreme weather and provide support for vulnerable families. These measures protect people now, but they will become too expensive if emissions continue to rise. Therefore, adaptation should support prevention rather than replace it.`,
          `In conclusion, learning to live with certain climate effects is necessary, but it is not an alternative to prevention. Cutting emissions and preparing communities at the same time offers the only realistic long-term response.`,
        ],
      },
      {
        id: "communication-relationships",
        title: "交流技术影响社会关系",
        prompt: "Many people think modern communication technology is having some negative effects on social relationships. Do you agree or disagree?",
        position: "部分同意：使用方式决定影响",
        materials: ["信息技术和互联网", "语言和交流"],
        frameworkPoints: [
          { label: "第一点原因", text: "过度使用设备会取代面对面交流并削弱关系质量。" },
          { label: "第二点原因", text: "合理使用通信技术能维系远距离关系并减少孤立。" },
        ],
        keyPhrases: [
          { text: "face-to-face interaction", translation: "面对面交流" },
          { text: "social isolation", translation: "社会孤立" },
          { text: "quick access to information", translation: "快速获取信息" },
          { text: "global communication", translation: "全球沟通" },
        ],
        paragraphs: [
          `Modern communication technology is often blamed for weakening social relationships. I partly agree because excessive online contact can replace meaningful face-to-face interaction, but the same technology can also maintain relationships across distance when it is used sensibly.`,
          `The first reason is that digital contact can replace real attention. People may check messages during meals or use short symbols instead of discussing a problem. Written comments also have no tone, so small disagreements can become serious. For example, replacing face-to-face interaction with phone use can increase social isolation, weaken close relationships and reduce phone-free family time. Without clear limits, small disagreements may become more serious because written messages have no clear tone. Families should therefore set clear limits for meals and important conversations.`,
          `The second point is that technology is useful when people cannot meet regularly. Video calls and group messages allow relatives in different countries to share daily experiences, while online communities help people with limited mobility. For example, quick access to information helps a person find a suitable support group, and global communication allows members to talk across distance. These tools can then lead to real friendships and meetings. This is especially valuable for relatives who live in different countries. Therefore, schools and families should teach balanced use instead of treating every form of online contact as harmful.`,
          `In conclusion, modern technology can weaken relationships when it distracts people from those around them, but it can also keep distant people connected. The overall effect depends mainly on users' choices and boundaries.`,
        ],
      },
      {
        id: "mars-research",
        title: "移居其他星球",
        prompt: "Living on Earth would become difficult in the future. Therefore, more money should be spent on researching other planets to live on, such as Mars. To what extent do you agree or disagree?",
        position: "不同意优先投入移居研究",
        materials: ["技术创新和应用", "政府角色和责任"],
        frameworkPoints: [
          { label: "第一点原因", text: "在火星建立大规模定居点成本极高且目前并不现实。" },
          { label: "第二点原因", text: "把资金投入地球的能源和环保技术能解决更紧迫的问题。" },
        ],
        keyPhrases: [
          { text: "place pressure on public budgets", translation: "给公共预算带来压力" },
          { text: "basic services", translation: "基本公共服务" },
          { text: "renewable energy and energy-saving technology", translation: "可再生能源和节能技术" },
          { text: "reduce emissions and waste", translation: "减少排放和浪费" },
        ],
        paragraphs: [
          `It is argued that governments should spend more money researching planets such as Mars because life on Earth may become difficult in the future. I disagree because making another planet suitable for large populations is unrealistic, while investment on Earth can address more immediate threats today.`,
          `The first reason is that a permanent home on Mars would be extremely expensive. People would need protection from radiation, extreme temperatures and a lack of air, together with a constant supply of food and water. Only a small group could move there for many years. For example, spending a large share of tax income on this plan would place pressure on public budgets and could reduce basic services such as health care, education and disaster protection. Therefore, building a second home for millions of people is not a realistic use of limited public money.`,
          `The second reason is that science can solve more urgent problems on Earth. Governments can improve farming, water systems and buildings that protect people from climate damage. Space research can continue, but it should also support weather forecasts and knowledge about Earth. For example, renewable energy and energy-saving technology can reduce emissions and waste, protect urgent public needs and help the whole population. Therefore, protecting the planet where people already live is cheaper, fairer and more useful.`,
          `In conclusion, research on other planets has scientific value, but funding a future home on Mars should not be a priority. Solving environmental and social problems on Earth offers a more realistic benefit to the whole population.`,
        ],
      },
      {
        id: "punish-parents",
        title: "孩子犯罪父母同罪",
        prompt: "Some people argue that parents of children who break the law should be punished in some way because they are responsible for their children's actions. To what extent do you agree or disagree?",
        position: "大体不同意，仅惩罚明确失职行为",
        materials: ["犯罪和法律", "家庭和儿童抚养"],
        frameworkPoints: [
          { label: "第一点原因", text: "儿童犯罪受同伴、学校和社区等多重因素影响，不能自动归责父母。" },
          { label: "第二点原因", text: "只有父母明确教唆或严重失职时，才应追究具体责任。" },
        ],
        keyPhrases: [
          { text: "education, employment and social support", translation: "教育、就业和社会支持" },
          { text: "maintains social order", translation: "维持社会秩序" },
          { text: "affect the way children are raised", translation: "影响儿童的抚养方式" },
          { text: "a safer and more supportive environment", translation: "更安全、更有支持性的环境" },
        ],
        paragraphs: [
          `Some people believe that parents should be punished when their children break the law because they are responsible for the children's behaviour. I largely disagree, since young offenders make their own choices and automatic punishment would often be unfair, although clear parental neglect should have consequences.`,
          `The first reason is that children's behaviour is shaped by more than their parents. Friends, school, online content and neighbourhood conditions can all affect a young person's choices. Even responsible parents cannot watch a teenager every minute. For example, education, employment and social support can prevent youth crime and give teenagers better choices, while this support maintains social order more effectively than simply fining a parent. Therefore, justice should normally focus on the child and use education or community service.`,
          `The second point is that parents should be punished only when their own serious actions help the crime happen. An adult who gives a child a weapon, encourages theft or repeatedly ignores official warnings has done more than make a small mistake. For example, parenting classes can affect the way children are raised and help a family create a safer and more supportive environment after poor supervision is discovered. If there is clear evidence of deliberate help or serious neglect, the parent can also face a legal penalty.`,
          `In conclusion, parents should not be punished merely because their child has broken the law. They should face consequences only when strong, clear evidence shows that deliberate encouragement or serious neglect directly helped the offence occur.`,
        ],
      },
      {
        id: "life-without-work",
        title: "如果有机会不工作",
        prompt: "If people had a choice between a life without work and spending most of their time working, they would choose not to work. To what extent do you agree or disagree?",
        position: "部分同意：人们更想要平衡而非完全不工作",
        materials: ["就业和失业", "心理健康和社会支持"],
        frameworkPoints: [
          { label: "第一点原因", text: "长时间工作损害健康和家庭生活，因此人们希望减少工时。" },
          { label: "第二点原因", text: "有意义的工作仍能提供收入、社交和目标感。" },
        ],
        keyPhrases: [
          { text: "a good work-life balance", translation: "良好的工作生活平衡" },
          { text: "manage stress", translation: "管理压力" },
          { text: "stable employment", translation: "稳定就业" },
          { text: "quality of life", translation: "生活质量" },
        ],
        paragraphs: [
          `It is claimed that people would choose a life without work if the alternative were spending most of their time working. I partly agree that few people want work to dominate their lives, but most would still prefer meaningful employment with reasonable hours to having no work at all.`,
          `The first reason is that people do not want work to control their whole life. Long hours reduce time for sleep, exercise, family and personal interests, so they can cause poor health. Workers may also feel that they exchange most of their life for income. For example, a good work-life balance can protect family time, help employees manage stress and reduce stress-related health problems. If basic needs were covered, many people would reduce their hours. This shows a desire for balance rather than a wish to do nothing.`,
          `The second reason is that work still gives people more than money. A useful job gives structure to the week, social contact and a chance to develop skills. Without work or responsibility, some people may lose confidence or feel isolated. For example, stable employment provides a regular income and can improve a family's quality of life, while voluntary work can give retired people a clear purpose. Therefore, most people would choose flexible and meaningful work instead of either complete inactivity or a life spent almost entirely at work.`,
          `In conclusion, most people would avoid spending nearly all their time at work, but this does not mean they want a life without it. A good work-life balance is the more attractive choice.`,
        ],
      },
      {
        id: "computer-literacy",
        title: "电脑影响读写能力",
        prompt: "The increasing use of computers and mobile phones has had a negative effect on young people's reading and writing skills. To what extent do you agree or disagree?",
        position: "部分同意：短内容有风险，数字工具也能促进读写",
        materials: ["信息技术和互联网", "学习方式和效果"],
        frameworkPoints: [
          { label: "第一点原因", text: "碎片内容和自动纠错可能削弱专注力与独立读写能力。" },
          { label: "第二点原因", text: "在教师指导下，数字工具能扩大阅读资源并提供及时反馈。" },
        ],
        keyPhrases: [
          { text: "good study habits", translation: "良好的学习习惯" },
          { text: "understand their progress and improve their results", translation: "了解进步并改善学习结果" },
          { text: "quick access to information", translation: "快速获取信息" },
          { text: "regular feedback", translation: "定期反馈" },
        ],
        paragraphs: [
          `The growing use of computers and mobile phones is often said to damage young people's reading and writing skills. I partly agree because frequent use of short, informal content can weaken concentration, but digital tools can also improve literacy when schools and families guide their use.`,
          `The first reason is that short messages and automatic correction can reduce independent practice. Young people may find it hard to follow a long argument, learn vocabulary or notice how ideas are organised. Software can also hide repeated spelling mistakes. For example, good study habits require students to read a full text and write some answers without automatic help, so they can understand their progress and improve their results. Therefore, regular book reading and planned writing are still necessary even when digital tools are available.`,
          `The second point is that digital devices can support literacy when teachers guide their use. Students can borrow electronic books, compare sources and work with classmates on a shared document. These activities can make reading and writing more interesting. For example, quick access to information helps a learner find a text at the right level, while regular feedback from a teacher shows how to improve the next draft. Parents can also set aside reading time without notifications. Therefore, the method of using technology matters more than the device itself.`,
          `In conclusion, careless dependence on short digital content can harm literacy, but the devices themselves are not the main problem. Balanced use, long-form reading and independent writing practice can make technology a support rather than a threat.`,
        ],
      },
    ],
  },
  {
    id: "comparison",
    name: "双面比较",
    description: "Discuss both views 题；两个主体段公平解释双方，并在引言、主体二和结论保持同一判断。",
    essays: [
      {
        id: "technology-crime",
        title: "科技发展对犯罪的影响",
        prompt: "Some people think technology development decreases crime, while others believe it actually encourages crime. Discuss both views and give your own opinion.",
        position: "科技既防罪也催生新犯罪，净影响取决于治理",
        materials: ["犯罪和法律", "信息技术和互联网"],
        frameworkPoints: [
          { label: "观点一", text: "监控、电子门禁和数据分析能够预防并侦破传统犯罪。" },
          { label: "观点二 + 我的判断", text: "科技也催生网络犯罪，但法律、安全系统和公众教育可以控制风险。" },
        ],
        keyPhrases: [
          { text: "maintains social order", translation: "维持社会秩序" },
          { text: "protects citizens", translation: "保护公民" },
          { text: "online privacy and cybercrime", translation: "网络隐私和网络犯罪" },
          { text: "personal data must be protected", translation: "个人数据必须得到保护" },
        ],
        paragraphs: [
          `People have different views about the effect of technological development on crime. Some believe that it helps to reduce offences, while others argue that it creates new opportunities for criminals. In my view, technology can make society safer, but only when laws and public skills develop at the same speed.`,
          `The first view is that technology can reduce crime and help the police find offenders. Cameras, electronic entry systems and bank software make illegal actions easier to record. When offenders know that evidence probably exists, they may avoid taking the risk. For example, cameras in a transport station help a fair legal system protect passengers, which protects citizens and maintains social order by making theft more difficult. Banks can also stop unusual payments quickly. Therefore, modern systems can prevent many traditional crimes and provide stronger evidence after an offence.`,
          `The other view is that the internet creates new opportunities for criminals. Online fraud, stolen information and harmful software can reach thousands of victims at a low cost. Older or inexperienced users may be easy targets. For example, stronger laws are needed for online privacy and cybercrime, and personal data must be protected by banks and shopping websites. Schools should also teach people to recognise suspicious links. In my view, technology can still make society safer if laws, secure systems and public education develop at the same time.`,
          `In conclusion, technology reduces many physical crimes but also enables new online offences. I believe its overall effect can be positive if effective law enforcement, secure systems and public education are developed alongside it.`,
        ],
      },
      {
        id: "advertising-effects",
        title: "广告的影响",
        prompt: "Some people say that advertising has positive economic effects. Others think it has negative social effects because it makes people feel dissatisfied with who they are and what they have. Discuss both views and give your own opinion.",
        position: "负面社会影响更严重",
        materials: ["媒体和信息传播", "经济增长和发展"],
        frameworkPoints: [
          { label: "观点一", text: "广告传播产品信息、促进竞争，并支持就业和经济增长。" },
          { label: "观点二 + 我的判断", text: "广告也会制造不必要的需求，因此需要监管和媒介教育。" },
        ],
        keyPhrases: [
          { text: "economic growth", translation: "经济增长" },
          { text: "create jobs", translation: "创造就业" },
          { text: "consumer choice", translation: "消费者选择" },
          { text: "artificial needs", translation: "人为制造的需求" },
        ],
        paragraphs: [
          `People disagree about the effects of advertising. Some emphasise its contribution to business and economic activity, while others believe it creates dissatisfaction and social harm. I accept that advertising has real economic value, but it should be regulated when it misleads people or deliberately attacks their confidence.`,
          `The first view is that advertising helps customers learn about products and allows businesses to compete. A new company cannot attract buyers if nobody knows its service exists. Advertising also supports designers, writers and media workers. For example, a local restaurant can use a low-cost online advertisement to reach nearby customers, create jobs and support economic growth when sales rise. Clear information about price and quality also increases consumer choice. Therefore, responsible advertising can help both businesses and customers while supporting wider economic activity.`,
          `The other view is that some advertising creates social pressure. Images of perfect bodies, expensive homes and constant success can make ordinary people feel that their lives are not good enough. Children may connect products with popularity. For example, repeated phone advertisements can create artificial needs linked to social acceptance, while clear labels can protect consumer choice from emotional pressure. In my view, false claims and marketing to children need strict rules to protect young people, while consumers also need media education.`,
          `In conclusion, advertising can help businesses, employment and informed choice, yet irresponsible campaigns may damage confidence and encourage unnecessary consumption. Its economic benefits outweigh the harm only when strong standards protect the public from deception and manipulation.`,
        ],
      },
      {
        id: "wildlife-too-late",
        title: "拯救动植物是否为时已晚",
        prompt: "Human activities have negative effects on plant and animal species. Some people think it is too late to do anything about this problem. Others believe effective measures can be taken to improve this situation. Discuss both views and give your opinion.",
        position: "仍可采取有效措施",
        materials: ["野生动植物保护", "自然资源管理和保护"],
        frameworkPoints: [
          { label: "观点一", text: "部分物种和栖息地已经永久消失，恢复过程也非常缓慢。" },
          { label: "观点二 + 我的判断", text: "保护区、执法和可持续生计仍能阻止更多损失并帮助恢复。" },
        ],
        keyPhrases: [
          { text: "habitat loss and illegal trade", translation: "栖息地丧失和非法贸易" },
          { text: "protect biodiversity", translation: "保护生物多样性" },
          { text: "nature reserves", translation: "自然保护区" },
          { text: "stronger laws", translation: "更严格的法律" },
        ],
        paragraphs: [
          `Human activity has seriously damaged many plant and animal species. Some people believe the damage has already gone too far, while others think effective action is still possible. I agree with the second view because many habitats and populations can recover when harmful activity is stopped early enough.`,
          `The first view is understandable because some environmental damage cannot be reversed. Once a species becomes extinct, it cannot return, and forests or coral areas may need many years to recover. Climate change also affects very large areas. For example, habitat loss and illegal trade can reduce a small animal population so quickly that later action cannot protect biodiversity or prevent permanent loss. People may therefore think money should be spent on human needs. However, protecting remaining species can still keep ecosystems useful.`,
          `The second view is that practical action can still improve the situation. Governments can protect habitats, stop hunting and require companies to repair environmental damage. Local people can receive support for farming or tourism that does not destroy wildlife. For example, nature reserves give animals safe areas to feed and reproduce, while stronger laws can stop businesses and hunters from causing further losses. In my view, these measures are worthwhile because every recovered population makes the wider ecosystem more stable and prevents another permanent extinction.`,
          `In conclusion, some losses are permanent and full recovery may be impossible, but this does not make action useless. Protecting habitats, enforcing environmental law and supporting sustainable livelihoods can still prevent further extinction and restore many damaged ecosystems.`,
        ],
      },
      {
        id: "international-cooperation",
        title: "国际合作",
        prompt: "Some people think that the main benefit of international cooperation is the protection of the environment, while others believe that businesses mainly benefit. Discuss both views and give your own opinion.",
        position: "环境保护带来的好处更重要",
        materials: ["国际关系和冲突", "贸易和全球化"],
        frameworkPoints: [
          { label: "观点一", text: "国际合作能减少贸易障碍，帮助企业进入更大的市场。" },
          { label: "观点二 + 我的判断", text: "环境问题跨越国界，因此国际合作在环保方面更不可替代。" },
        ],
        keyPhrases: [
          { text: "enter larger markets", translation: "进入更大的市场" },
          { text: "spread technology and ideas", translation: "传播技术和思想" },
          { text: "international cooperation", translation: "国际合作" },
          { text: "cross national borders", translation: "跨越国界" },
        ],
        paragraphs: [
          `People have different views about who gains most from international cooperation. Some believe its main value is environmental protection, while others think businesses receive the greatest benefit. Both gains are important, but I believe environmental cooperation is more fundamental because many ecological problems cannot be solved by one country alone.`,
          `The first view is that businesses gain most from countries working together. Trade agreements reduce barriers, set shared standards and give firms more customers. Companies can also share investment and specialist knowledge. For example, a shared safety standard may allow a small manufacturer to enter larger markets, while international partners spread technology and ideas that improve production. Consumers then receive more choices and lower prices. Therefore, cooperation clearly supports trade and business growth, especially for firms that could not reach foreign customers on their own.`,
          `The other view is that environmental protection needs cooperation even more. Air pollution, ocean waste, climate change and wildlife movement do not stop at a border. One country's action has limited value if its neighbours continue to pollute. For example, international cooperation is necessary because greenhouse gases and ocean plastic cross national borders, so countries must share targets, information and money. In my view, this environmental benefit is more basic because healthy natural systems also support farming, communities and the businesses that depend on them.`,
          `In conclusion, international cooperation opens markets and improves business efficiency, but its main benefit is the ability to address environmental threats that no country can manage alone. A protected natural system also provides the foundation for sustainable business growth.`,
        ],
      },
    ],
  },
  {
    id: "two-question",
    name: "两问回答",
    description: "原因 / 影响 / 措施及混合评价题；严格按题目顺序，一个主体段完整回答一个任务。",
    essays: [
      {
        id: "species-extinction",
        title: "动植物种类变少",
        prompt: "Many species of animals and plants are in danger of becoming extinct. What are the causes of this problem? What can be done to prevent it from happening?",
        position: "原因：栖息地破坏与过度利用；措施：保护、执法与替代生计",
        materials: ["野生动植物保护", "环境政策和法规"],
        frameworkPoints: [
          { label: "第一问｜原因", text: "城市建设、农业扩张和过度捕猎破坏栖息地并减少种群。" },
          { label: "第二问｜措施", text: "建立保护区、严格执法并提供可持续生计。" },
        ],
        keyPhrases: [
          { text: "habitat loss and illegal trade", translation: "栖息地丧失和非法贸易" },
          { text: "prevent overuse and illegal extraction", translation: "防止过度使用和非法开采" },
          { text: "nature reserves", translation: "自然保护区" },
          { text: "protect endangered animals and plants", translation: "保护濒危动植物" },
        ],
        paragraphs: [
          `A growing number of animal and plant species are at risk of extinction. The main causes are the destruction of natural habitats and the excessive use of wildlife and other resources. This problem can be addressed through protected areas, stronger law enforcement and support for sustainable local livelihoods.`,
          `Regarding the first question, the main causes are habitat destruction and direct overuse of wildlife. Forests and wetlands are cleared for housing, roads and farming, leaving species without enough food or space. Hunting and fishing also continue when local people need income. For example, habitat loss and illegal trade can make a small population fall quickly, while careful laws are needed to prevent overuse and illegal extraction of animals, plants and other resources. As a result, breeding groups become too small to recover and the wider food chain is damaged.`,
          `As for the second question, governments should protect habitats and give local people other ways to earn money. Rangers can enforce hunting and fishing laws, while businesses should control pollution and repair damaged land. For example, nature reserves give threatened species safe places to feed and reproduce, and responsible tourism can provide income while helping to protect endangered animals and plants. International cooperation is also necessary for traded and migratory species. Therefore, protection, enforcement and sustainable local work can reduce the main pressures before more species disappear.`,
          `In conclusion, extinction is mainly driven by habitat destruction and unsustainable use. Effective protection, firm enforcement and alternative sources of income can reduce these pressures and give threatened species a realistic chance to recover.`,
        ],
      },
      {
        id: "subject-gender",
        title: "女生学文、男生学理",
        prompt: "In many schools and universities, girls tend to choose arts subjects and boys choose science subjects. What are the reasons? Do you think that this tendency should be changed?",
        position: "应该改变：学生应按兴趣和能力选科",
        materials: ["教育内容和课程设计", "教育机会和平等"],
        frameworkPoints: [
          { label: "第一问｜原因", text: "社会刻板印象和缺少榜样会影响学生信心和选科。" },
          { label: "第二问｜是否改变", text: "学校应提供平等信息和机会，让学生按兴趣与能力选择。" },
        ],
        keyPhrases: [
          { text: "social expectations", translation: "社会期待" },
          { text: "role models", translation: "榜样" },
          { text: "equal access to education", translation: "平等的受教育机会" },
          { text: "future job opportunities", translation: "未来就业机会" },
        ],
        paragraphs: [
          `In many educational institutions, female students are more likely to choose arts subjects while male students often select science. This pattern is largely caused by social expectations and a lack of visible role models. I believe it should be changed so that each student can choose according to ability and interest rather than gender.`,
          `Regarding the first question, children receive messages about suitable subjects long before university. Parents, media and teachers may describe languages as natural for girls and science as a male field. Gender stereotypes can affect confidence even when ability is the same. For example, social expectations and gender stereotypes may push a capable girl away from physics, while a lack of female scientific role models can reduce confidence. Therefore, later subject choices may reflect the opportunities and examples children receive rather than a fixed difference between boys and girls.`,
          `As for the second question, schools should widen choice without forcing equal numbers in every subject. Teachers can use mixed projects, present different professionals and remove stereotypes from lessons. For example, equal access to education includes giving every student the same laboratory experience, while clear course information shows the future job opportunities connected with science, languages and the arts. Mentoring can also build confidence in a less common choice. The aim is not equal numbers; it is a free and informed decision based on interest and ability.`,
          `In conclusion, gendered subject choices are strongly shaped by expectations and limited examples. Schools should challenge these influences and give every student the confidence and information needed to follow genuine interests.`,
        ],
      },
      {
        id: "science-shortage",
        title: "理科的选择",
        prompt: "Nowadays, not enough students choose science subjects in universities in many countries. Why is this? What are the effects on society?",
        position: "原因：难度、教学与回报认知；影响：人才短缺和创新放缓",
        materials: ["教育内容和课程设计", "技术创新和应用"],
        frameworkPoints: [
          { label: "第一问｜原因", text: "理科被认为难度高，教学缺少实践，职业路径也不够清楚。" },
          { label: "第二问｜影响", text: "专业人才不足会削弱公共服务、科研和技术创新。" },
        ],
        keyPhrases: [
          { text: "a balanced curriculum", translation: "均衡的课程设置" },
          { text: "relevant to students' future lives and careers", translation: "与学生未来生活和职业相关" },
          { text: "skills required by the changing market", translation: "变化中的市场所需技能" },
          { text: "economic and social progress", translation: "经济和社会进步" },
        ],
        paragraphs: [
          `Many countries are concerned that too few university students choose science subjects. This is mainly because science is seen as difficult and its career rewards are not always clear. The shortage may leave society without enough skilled professionals and slow the development of useful technology.`,
          `Regarding the first question, science is often seen as difficult and its career path is not always clear. School lessons may focus on facts instead of experiments and real problems, so students lose interest. Scientific careers can also require long training. For example, a balanced curriculum should include practical projects that are relevant to students' future lives and careers, but many schools lack laboratories or trained teachers. Without this experience and clear information about jobs, a student who enjoys biology may still choose a more familiar degree.`,
          `As for the second question, too few science graduates can create serious problems for society. Hospitals, engineering firms, schools and environmental agencies all need scientific workers. Important projects may be delayed when these people are not available. For example, the skills required by the changing market include data, energy and medical knowledge, and shortages in these areas can slow economic and social progress. A weak science base also reduces research and the ability to respond to disease or climate change. Therefore, governments should support practical lessons, scholarships and clear career information.`,
          `In conclusion, perceived difficulty and uncertain career information discourage many students from science. The resulting skills shortage can weaken essential services and innovation, making this an issue that governments, universities and employers should address together.`,
        ],
      },
      {
        id: "older-parents",
        title: "生育年龄推迟",
        prompt: "Some people choose to have their first child at an older age. What are the reasons? Do the advantages outweigh the disadvantages?",
        position: "职业与经济压力导致推迟；总体利大于弊但需健康支持",
        materials: ["家庭和儿童抚养", "就业和失业"],
        frameworkPoints: [
          { label: "第一问｜原因", text: "更长的教育、职业压力和住房育儿成本使人们推迟生育。" },
          { label: "第二问｜利弊判断", text: "经济和心理准备的长期好处通常大于可管理的健康风险。" },
        ],
        keyPhrases: [
          { text: "a good work-life balance", translation: "良好的工作生活平衡" },
          { text: "parental leave", translation: "育儿假" },
          { text: "affordable childcare", translation: "可负担的托儿服务" },
          { text: "a safer and more supportive environment", translation: "更安全、更有支持性的环境" },
        ],
        paragraphs: [
          `An increasing number of adults have their first child later in life. The main reasons are longer education, career pressure and the cost of raising a family. In my view, the advantages of greater financial and emotional readiness usually outweigh the disadvantages, although health risks should not be ignored.`,
          `Regarding the first question, many adults spend their twenties completing education and building a career. Starting salaries may not cover housing and childcare, so couples wait for a stable income and suitable home. They may also fear that an early career break will limit promotion. For example, a good work-life balance is difficult without control over working hours, while limited parental leave can make early family life financially risky. These work and cost pressures make later parenthood an understandable choice.`,
          `As for the second question, older parents often have more savings, work experience and emotional readiness. They may plan childcare carefully and spend patient time with a child. The disadvantages are lower fertility, higher medical risk and sometimes less energy. For example, affordable childcare helps experienced parents continue working, while greater financial stability can provide a safer and more supportive environment for the child. Regular medical advice can reduce some health risks. Overall, the long-term benefits of readiness are usually greater than the manageable disadvantages of waiting several years.`,
          `In conclusion, people delay parenthood mainly because education, work and living costs make early family life difficult. Despite health concerns, the stability and maturity gained by waiting generally produce greater benefits for parents and children.`,
        ],
      },
      {
        id: "preserve-buildings",
        title: "保护古建筑的利弊",
        prompt: "Some people believe that certain old buildings are more worth preserving than others. What types of old buildings should be preserved? Do the advantages of preserving old buildings outweigh the disadvantages?",
        position: "保留历史、建筑或社区价值高的建筑；总体利大于弊",
        materials: ["文化遗产和身份认同", "税收和公共支出"],
        frameworkPoints: [
          { label: "第一问｜保留类型", text: "优先保留具有历史、建筑或重要社区价值的建筑。" },
          { label: "第二问｜利弊判断", text: "教育、地方认同和旅游就业收益通常大于维护成本。" },
        ],
        keyPhrases: [
          { text: "protecting cultural heritage", translation: "保护文化遗产" },
          { text: "shared history", translation: "共同历史" },
          { text: "community identity", translation: "社区认同" },
          { text: "tourism and local jobs", translation: "旅游业和当地就业" },
        ],
        paragraphs: [
          `Not every old building can or should be kept forever. Priority should be given to buildings with clear historical, architectural or community value. I believe the advantages of preserving these selected places outweigh the costs because they protect identity, education and local economic activity.`,
          `Regarding the first question, priority should go to buildings linked with important events, rare building styles or long community use. Age alone is not enough, because an unsafe ordinary structure may have little value. For example, protecting cultural heritage means keeping a traditional market that shows the area's shared history and clear historical and social value. A school or meeting hall used by several generations may also deserve protection. This careful selection allows limited public money to focus on the most meaningful buildings.`,
          `As for the second question, preservation costs money because old buildings need special repairs and may be difficult to adapt. However, the benefits are longer-lasting. Historic places teach visitors about the past. For example, turning an old station into a museum can strengthen community identity, support tourism and local jobs, and keep its important design. Safety and energy improvements can solve practical problems, and a useful new purpose reduces waste. Therefore, when buildings are selected carefully, the cultural, educational and economic benefits are greater than the maintenance cost.`,
          `In conclusion, buildings with major historical, architectural or community significance should be preserved rather than every old structure. Their educational, social and economic value generally outweighs the cost, especially when they are given a useful modern purpose.`,
        ],
      },
      {
        id: "repeat-offending",
        title: "再犯罪问题",
        prompt: "Many offenders commit more crimes after serving their first punishment. Why is this happening, and what measures can be taken to tackle this problem?",
        position: "原因：刑满后的就业、住房和社会支持不足；措施：改造与持续帮扶",
        materials: ["犯罪和法律", "教育和培训"],
        frameworkPoints: [
          { label: "第一问｜原因", text: "刑罚没有解决技能、成瘾和就业住房障碍，导致再次犯罪。" },
          { label: "第二问｜措施", text: "提供职业培训、心理支持、就业和持续监督。" },
        ],
        keyPhrases: [
          { text: "education, employment and social support", translation: "教育、就业和社会支持" },
          { text: "stable employment", translation: "稳定就业" },
          { text: "useful knowledge and job skills", translation: "实用知识和工作技能" },
          { text: "vocational training", translation: "职业培训" },
        ],
        paragraphs: [
          `Many offenders commit further crimes after completing their first punishment. This often happens because prison does not solve the problems behind the offence and former prisoners face major barriers to a normal life. Rehabilitation, stable employment and social support can reduce the risk of reoffending.`,
          `Regarding the first question, prison may remove a person from society without solving the problems behind the offence. Work habits and family contact can be lost, while employers and landlords may reject a person after release. For example, a lack of education, employment and social support can push a former prisoner back towards old criminal groups, while stable employment would give that person a legal income and a reason to avoid crime. These barriers make another offence more likely even when the person originally wanted to change.`,
          `As for the second question, rehabilitation should begin before release and continue afterwards. Offenders may need education, treatment, housing help and clear supervision based on their needs. For example, prison classes can provide useful knowledge and job skills, while vocational training prepares a person for a real work placement and supervised employment after release. A probation officer should also meet the person regularly. With both practical help and firm conditions, former offenders have a better chance of building a normal life.`,
          `In conclusion, reoffending is driven by unresolved personal problems and exclusion after punishment. Training, treatment, employment and structured support can help former offenders build stable lives after their release and make communities safer in the longer term.`,
        ],
      },
    ],
  },
];

const simpleFrameworkPointsByEssayId: Record<
  string,
  PredictedEssay["frameworkPoints"]
> = {
  "remote-work": [
    { label: "第一点原因", text: "远程工作能降低公司成本。" },
    { label: "第二点原因", text: "远程工作让公司更容易找到和留住员工。" },
  ],
  "salary-gap": [
    { label: "第一点原因", text: "薪资差距太大会让普通员工失去动力。" },
    { label: "第二点原因", text: "公司可以把钱用在更多员工身上。" },
  ],
  "leader-intelligence": [
    { label: "第一点原因", text: "领导表达清楚，员工才能明白任务。" },
    { label: "第二点原因", text: "领导公平负责，员工才会信任他。" },
  ],
  "punish-parents": [
    { label: "第一点原因", text: "孩子犯罪不只受父母影响。" },
    { label: "第二点原因", text: "自动惩罚父母并不公平。" },
  ],
  "communication-relationships": [
    { label: "第一点原因", text: "过度使用手机会减少面对面交流。" },
    { label: "第二点原因", text: "过度使用手机会让人感到孤独。" },
  ],
  "life-without-work": [
    { label: "第一点原因", text: "工作可以提供稳定收入。" },
    { label: "第二点原因", text: "工作能带来生活目标和社交联系。" },
  ],
  "computer-literacy": [
    { label: "第一点原因", text: "网络短内容会减少长篇阅读练习。" },
    { label: "第二点原因", text: "自动纠错会减少独立写作练习。" },
  ],
  "company-facilities": [
    { label: "第一点原因", text: "建设和维护这些设施成本太高。" },
    { label: "第二点原因", text: "公共设施应该由地方政府负责。" },
  ],
  "congestion-tax": [
    { label: "第一点原因", text: "拥堵税可以减少高峰期车辆。" },
    { label: "第二点原因", text: "税收可以改善公共交通。" },
  ],
  "extreme-sports": [
    { label: "第一点原因", text: "成年人应该有权选择自己的活动。" },
    { label: "第二点原因", text: "安全规定可以降低风险。" },
  ],
  "university-fees": [
    { label: "第一点原因", text: "大学毕业生会为社会提供重要服务。" },
    { label: "第二点原因", text: "全额学费会阻止贫困学生上大学。" },
  ],
  "move-companies": [
    { label: "第一点原因", text: "搬迁工作地点可以减少进入城市的日常通勤。" },
    { label: "第二点原因", text: "乡村和小城镇出现就业机会后，城市住房需求会下降。" },
  ],
  "live-with-climate-change": [
    { label: "第一点原因", text: "减少排放可以防止更多气候损害。" },
    { label: "第二点原因", text: "只靠适应气候变化成本太高。" },
  ],
  "mars-research": [
    { label: "第一点原因", text: "在火星生活的成本太高。" },
    { label: "第二点原因", text: "地球上有更紧迫的问题需要解决。" },
  ],
  "advertising-effects": [
    { label: "第一个观点", text: "广告帮助公司卖出产品并创造工作。" },
    { label: "第二个观点 + 我的判断", text: "广告让人乱买东西并对生活不满意。" },
  ],
  "technology-crime": [
    { label: "第一个观点", text: "科技可以帮助预防和侦破犯罪。" },
    { label: "第二个观点", text: "互联网也为犯罪者创造新机会。" },
  ],
  "wildlife-too-late": [
    { label: "第一个观点", text: "有些环境损害已经无法修复。" },
    { label: "第二个观点", text: "现在采取行动仍能保护剩余物种。" },
  ],
  "international-cooperation": [
    { label: "第一个观点", text: "各国合作可以共同解决污染问题。" },
    { label: "第二个观点", text: "企业可以向更多国家销售产品。" },
  ],
  "older-parents": [
    { label: "第一问｜原因", text: "工作和生活成本使人们推迟生育。" },
    { label: "第二问｜利弊判断", text: "年长父母通常准备得更充分。" },
  ],
  "repeat-offending": [
    { label: "第一问｜原因", text: "缺少工作和支持会导致再次犯罪。" },
    { label: "第二问｜措施", text: "培训和持续帮助可以减少再次犯罪。" },
  ],
  "subject-gender": [
    { label: "第一问｜原因", text: "家庭、学校和媒体从小给男女生不同的引导。" },
    { label: "第二问｜态度", text: "这种趋势应该改变，学生应按兴趣和能力选科。" },
  ],
  "preserve-buildings": [
    { label: "第一问｜保留类型", text: "有历史或社区价值的建筑应被保护。" },
    { label: "第二问｜利弊判断", text: "保护带来的好处大于维护成本。" },
  ],
  "species-extinction": [
    { label: "第一问｜原因", text: "栖息地破坏和过度捕猎会减少动物种群。" },
    { label: "第二问｜措施", text: "保护区和严格法律可以保护物种。" },
  ],
  "science-shortage": [
    { label: "第一问｜原因", text: "学生觉得理科难，而且职业选择不清楚。" },
    { label: "第二问｜影响", text: "理科毕业生太少会造成技能短缺。" },
  ],
};

const introPhrasesByEssayId: Record<string, PredictedEssay["keyPhrases"]> = {
  "salary-gap": [
    { text: "a wide income gap can damage staff motivation", translation: "过大的收入差距会打击员工积极性" },
    { text: "create an unfair workplace culture", translation: "造成不公平的职场文化" },
  ],
  "leader-intelligence": [
    { text: "communicate clearly", translation: "清楚地沟通" },
    { text: "treat employees fairly", translation: "公平对待员工" },
  ],
  "company-facilities": [
    { text: "these facilities would create high costs for companies", translation: "这些设施会给公司带来高额成本" },
    { text: "local government should provide public facilities", translation: "公共设施应该由地方政府提供" },
  ],
  "congestion-tax": [
    { text: "reduce traffic congestion", translation: "减少交通拥堵" },
    { text: "provide money for better public transport", translation: "为改善公共交通提供资金" },
  ],
  "remote-work": [
    { text: "lower business costs", translation: "降低企业成本" },
    { text: "recruit and retain capable staff", translation: "招聘并留住有能力的员工" },
  ],
  "extreme-sports": [
    { text: "Adults should be free to choose these activities", translation: "成年人应该自由选择这些活动" },
    { text: "clear safety rules can reduce most of the danger", translation: "明确的安全规定可以减少大部分危险" },
  ],
  "university-fees": [
    { text: "Higher education also benefits society", translation: "高等教育也使社会受益" },
    { text: "full fees can prevent capable students from poor families from attending university", translation: "全额学费会阻止贫困家庭的优秀学生上大学" },
  ],
  "move-companies": [
    { text: "can reduce daily travel into city centres", translation: "可以减少进入市中心的日常通勤" },
    { text: "lower the demand for urban housing", translation: "降低城市住房需求" },
  ],
  "live-with-climate-change": [
    { text: "cutting emissions can prevent further damage", translation: "减少排放可以防止更多损害" },
    { text: "adaptation alone would be too expensive", translation: "只靠适应措施成本会太高" },
  ],
  "communication-relationships": [
    { text: "can reduce face-to-face communication", translation: "会减少面对面交流" },
    { text: "can make people feel lonely", translation: "会让人感到孤独" },
  ],
  "mars-research": [
    { text: "making another planet suitable for large populations is unrealistic", translation: "让另一个星球适合大规模人口生活不现实" },
    { text: "investment on Earth can address more immediate threats", translation: "对地球的投资可以应对更紧迫的威胁" },
  ],
  "punish-parents": [
    { text: "young people are also influenced by friends, schools and neighbourhoods", translation: "年轻人也会受到朋友、学校和社区影响" },
    { text: "punishing parents automatically would be unfair", translation: "自动惩罚父母并不公平" },
  ],
  "life-without-work": [
    { text: "work provides a regular income", translation: "工作提供稳定收入" },
    { text: "work gives people purpose and social contact", translation: "工作带来生活目标和社交联系" },
  ],
  "computer-literacy": [
    { text: "short online content reduces careful reading", translation: "网络短内容会减少认真阅读" },
    { text: "automatic correction reduces independent writing practice", translation: "自动纠错会减少独立写作练习" },
  ],
  "technology-crime": [
    { text: "helps to reduce offences", translation: "帮助减少犯罪" },
    { text: "creates new opportunities for criminals", translation: "为犯罪者创造新机会" },
    { text: "technology can make society safer", translation: "科技可以让社会更安全" },
  ],
  "advertising-effects": [
    { text: "advertising helps companies sell products and create jobs", translation: "广告帮助公司销售产品并创造工作" },
    { text: "advertising can make people feel unhappy with what they have", translation: "广告会让人对自己拥有的东西不满意" },
    { text: "the negative social effects are more serious", translation: "负面的社会影响更严重" },
  ],
  "wildlife-too-late": [
    { text: "effective action is still possible", translation: "有效行动仍然可行" },
    { text: "habitats and populations can recover", translation: "栖息地和种群可以恢复" },
  ],
  "international-cooperation": [
    { text: "countries can solve shared environmental problems together", translation: "各国可以共同解决环境问题" },
    { text: "businesses can sell products in more countries", translation: "企业可以向更多国家销售产品" },
    { text: "environmental protection is the more important benefit", translation: "环境保护是更重要的好处" },
  ],
  "species-extinction": [
    { text: "destruction of natural habitats", translation: "自然栖息地破坏" },
    { text: "excessive use of wildlife and other resources", translation: "过度利用野生动植物和其他资源" },
    { text: "protected areas, stronger law enforcement and support for sustainable local livelihoods", translation: "保护区、更强的执法和对可持续谋生方式的支持" },
  ],
  "subject-gender": [
    { text: "boys and girls receive different messages from childhood", translation: "男生和女生从小接收到不同的信息" },
    { text: "this tendency should be changed", translation: "这种趋势应该改变" },
    { text: "choose subjects according to interest and ability", translation: "根据兴趣和能力选择科目" },
  ],
  "science-shortage": [
    { text: "science is seen as difficult", translation: "理科被视为很难" },
    { text: "career rewards are not always clear", translation: "职业回报不总是很清晰" },
    { text: "without enough skilled professionals", translation: "缺少足够的专业人才" },
  ],
  "older-parents": [
    { text: "longer education, career pressure and the cost of raising a family", translation: "更长的教育、职业压力和育儿成本" },
    { text: "greater financial and emotional readiness", translation: "更充分的经济和心理准备" },
    { text: "health risks should not be ignored", translation: "不应忽视健康风险" },
  ],
  "preserve-buildings": [
    { text: "buildings with clear historical, architectural or community value", translation: "具有明确历史、建筑或社区价值的建筑" },
    { text: "advantages of preserving these selected places outweigh the costs", translation: "保护这些特定场所的好处大于成本" },
    { text: "protect identity, education and local economic activity", translation: "保护身份认同、教育和当地经济活动" },
  ],
  "repeat-offending": [
    { text: "prison does not solve the problems behind the offence", translation: "监狱没有解决犯罪背后的问题" },
    { text: "former prisoners face major barriers to a normal life", translation: "前犯罪者重返正常生活时面临重大障碍" },
    { text: "reduce the risk of reoffending", translation: "降低再犯罪的风险" },
  ],
};

const reasonPhrasesByEssayId: Record<string, PredictedEssay["keyPhrases"]> = {
  "salary-gap": [
    { text: "a large pay gap can reduce worker motivation", translation: "过大的薪资差距会降低员工积极性" },
    { text: "company money can benefit more workers", translation: "公司的钱可以惠及更多员工" },
  ],
  "leader-intelligence": [
    { text: "workers need clear instructions", translation: "员工需要明确的指示" },
    { text: "employees need to trust their leader", translation: "员工需要信任领导" },
  ],
  "company-facilities": [
    { text: "sports and social facilities are expensive to build and maintain", translation: "运动和社交设施的建设与维护费用很高" },
    { text: "public facilities should be provided by local government", translation: "公共设施应该由地方政府提供" },
  ],
  "congestion-tax": [
    { text: "the tax can reduce rush-hour traffic", translation: "该税收可以减少高峰期交通" },
    { text: "the tax can pay for better public transport", translation: "该税收可以支付更好的公共交通" },
  ],
  "remote-work": [
    { text: "remote work can reduce company costs", translation: "远程工作可以降低公司成本" },
    { text: "remote work helps companies find and keep workers", translation: "远程工作帮助公司找到并留住员工" },
  ],
  "extreme-sports": [
    { text: "adults should be free to choose their activities", translation: "成年人应该自由选择自己的活动" },
    { text: "safety rules can reduce the risks", translation: "安全规定可以降低风险" },
  ],
  "university-fees": [
    { text: "university graduates provide important services", translation: "大学毕业生会提供重要服务" },
    { text: "full fees can stop poor students from going to university", translation: "全额学费会阻止贫困学生上大学" },
  ],
  "move-companies": [
    { text: "moving workplaces can reduce traffic congestion", translation: "搬迁工作地点可以减少交通拥堵" },
    { text: "relocation can lower the demand for urban housing", translation: "搬迁可以降低城市住房需求" },
  ],
  "live-with-climate-change": [
    { text: "cutting emissions can prevent more climate damage", translation: "减少排放可以防止更多气候损害" },
    { text: "adaptation alone would be too expensive", translation: "只靠适应措施成本会太高" },
  ],
  "communication-relationships": [
    { text: "too much phone use can reduce face-to-face communication", translation: "过度使用手机会减少面对面交流" },
    { text: "too much phone use can make people feel lonely", translation: "过度使用手机会让人感到孤独" },
  ],
  "mars-research": [
    { text: "living on Mars would be too expensive", translation: "在火星生活的成本太高" },
    { text: "Earth has more urgent problems", translation: "地球上有更紧迫的问题" },
  ],
  "punish-parents": [
    { text: "parents are not the only influence on a child", translation: "父母不是影响孩子的唯一因素" },
    { text: "automatic punishment would be unfair", translation: "自动惩罚并不公平" },
  ],
  "life-without-work": [
    { text: "work provides a regular income", translation: "工作提供稳定收入" },
    { text: "work gives people purpose and social contact", translation: "工作带来生活目标和社交联系" },
  ],
  "computer-literacy": [
    { text: "short online content can reduce long reading practice", translation: "网络短内容会减少长篇阅读练习" },
    { text: "automatic correction can reduce independent writing practice", translation: "自动纠错会减少独立写作练习" },
  ],
  "technology-crime": [
    { text: "technology can help prevent and solve crime", translation: "科技可以帮助预防和侦破犯罪" },
    { text: "the internet creates new opportunities for criminals", translation: "互联网为犯罪者创造了新机会" },
  ],
  "advertising-effects": [
    { text: "advertising helps companies sell more products", translation: "广告帮助公司销售更多产品" },
    { text: "advertising can make people buy things they do not need", translation: "广告会让人购买不需要的东西" },
  ],
  "wildlife-too-late": [
    { text: "some environmental damage cannot be repaired", translation: "某些环境损害无法修复" },
    { text: "action can still protect remaining species", translation: "行动仍然可以保护剩余物种" },
  ],
  "international-cooperation": [
    { text: "countries can work together to solve environmental problems", translation: "各国可以合作解决环境问题" },
    { text: "businesses can sell products in more countries", translation: "企业可以向更多国家销售产品" },
  ],
  "species-extinction": [
    { text: "habitat loss and overhunting reduce animal populations", translation: "栖息地破坏和过度捕猎会减少动物种群" },
    { text: "nature reserves and stronger laws can protect species", translation: "保护区和更严格的法律可以保护物种" },
  ],
  "subject-gender": [
    { text: "boys and girls receive different messages from childhood", translation: "男生和女生从小接收到不同的信息" },
    { text: "students should choose subjects according to interest and ability", translation: "学生应根据兴趣和能力选择科目" },
  ],
  "science-shortage": [
    { text: "students think science is difficult and career choices are unclear", translation: "学生觉得理科难，而且职业选择不清楚" },
    { text: "too few science graduates cause skill shortages", translation: "理科毕业生太少会造成技能短缺" },
  ],
  "older-parents": [
    { text: "work and living costs cause people to delay parenthood", translation: "工作和生活成本使人们推迟生育" },
    { text: "older parents are often better prepared", translation: "年长父母通常准备得更充分" },
  ],
  "preserve-buildings": [
    { text: "buildings with historical or community value should be protected", translation: "有历史或社区价值的建筑应被保护" },
    { text: "the benefits are greater than the maintenance costs", translation: "保护带来的好处大于维护成本" },
  ],
  "repeat-offending": [
    { text: "a lack of work and support can cause reoffending", translation: "缺少工作和支持会导致再次犯罪" },
    { text: "training and continued support can reduce reoffending", translation: "培训和持续帮助可以减少再次犯罪" },
  ],
};

const additionalKeyPhrasesByEssayId: Record<
  string,
  PredictedEssay["keyPhrases"]
> = {
  "salary-gap": [
    { text: "reduce staff motivation", translation: "打击员工积极性" },
    { text: "increase employee turnover", translation: "增加员工流失率" },
    { text: "learn useful skills", translation: "学习实用技能" },
    { text: "fair pay", translation: "公平薪酬" },
  ],
  "leader-intelligence": [
    { text: "explain each person's task", translation: "说清每个人的任务" },
    { text: "solve problems early", translation: "尽早解决问题" },
    { text: "open decision-making", translation: "公开透明的决策" },
    { text: "keep workers motivated", translation: "保持员工积极性" },
    { text: "follow clear rules", translation: "遵守明确的规则" },
  ],
  "company-facilities": [
    { text: "affordable places for exercise", translation: "可负担的锻炼场所" },
    { text: "improve community contact", translation: "加强社区联系" },
    { text: "public-private cooperation", translation: "公私合作" },
    { text: "provide lighting and staff", translation: "提供照明和工作人员" },
  ],
  "congestion-tax": [
    { text: "help emergency vehicles move faster", translation: "让急救车辆更快通行" },
    { text: "make essential journeys more reliable", translation: "让必要出行更加可靠" },
    { text: "better public transport", translation: "更完善的公共交通" },
    { text: "electric buses", translation: "电动公交车" },
  ],
  "remote-work": [
    { text: "a shared online system", translation: "共享在线系统" },
    { text: "expensive business trips", translation: "昂贵的商务出行" },
    { text: "flexible working hours", translation: "灵活的工作时间" },
    { text: "retain experienced staff", translation: "留住有经验的员工" },
  ],
  "extreme-sports": [
    { text: "supervised skiing", translation: "有监督的滑雪活动" },
    { text: "support local tourism jobs", translation: "支持当地旅游业就业" },
    { text: "protective clothing", translation: "防护服装" },
    { text: "cancel activities in bad weather", translation: "在恶劣天气中取消活动" },
  ],
  "university-fees": [
    { text: "support economic growth", translation: "促进经济增长" },
    { text: "students from low-income families", translation: "低收入家庭的学生" },
    { text: "reduce social inequality", translation: "减少社会不平等" },
  ],
  "move-companies": [
    { text: "reduce long daily journeys", translation: "减少长距离日常通勤" },
    { text: "make city roads less crowded", translation: "让城市道路不那么拥挤" },
    { text: "create regional jobs", translation: "创造地区就业机会" },
    { text: "support local businesses", translation: "支持当地企业" },
  ],
  "live-with-climate-change": [
    { text: "replace fossil fuels", translation: "替代化石燃料" },
    { text: "improve air quality", translation: "改善空气质量" },
    { text: "flood-safe housing", translation: "防洪住宅" },
    { text: "vulnerable families", translation: "弱势家庭" },
  ],
  "communication-relationships": [
    { text: "weaken close relationships", translation: "削弱亲密关系" },
    { text: "phone-free family time", translation: "无手机干扰的家庭时间" },
    { text: "a suitable support group", translation: "合适的互助群体" },
    { text: "talk across distance", translation: "跨越距离交流" },
  ],
  "mars-research": [
    { text: "a large share of tax income", translation: "很大一部分税收" },
    { text: "health care, education and disaster protection", translation: "医疗、教育和灾害防护" },
    { text: "protect urgent public needs", translation: "保障迫切的公共需求" },
    { text: "help the whole population", translation: "帮助全体人口" },
  ],
  "punish-parents": [
    { text: "prevent youth crime", translation: "预防青少年犯罪" },
    { text: "better choices", translation: "更好的选择" },
    { text: "parenting classes", translation: "家长教育课程" },
    { text: "poor supervision", translation: "监管不力" },
  ],
  "life-without-work": [
    { text: "protect family time", translation: "保障家庭时间" },
    { text: "stress-related health problems", translation: "压力相关的健康问题" },
    { text: "a regular income", translation: "稳定的定期收入" },
    { text: "a clear purpose", translation: "明确的生活目标" },
  ],
  "computer-literacy": [
    { text: "read a full text", translation: "阅读完整文本" },
    { text: "a text at the right level", translation: "难度合适的文本" },
    { text: "improve the next draft", translation: "改进下一稿" },
  ],
  "technology-crime": [
    { text: "a fair legal system", translation: "公平的法律制度" },
    { text: "making theft more difficult", translation: "增加盗窃难度" },
    { text: "stronger laws", translation: "更严格的法律" },
  ],
  "advertising-effects": [
    { text: "a low-cost online advertisement", translation: "低成本网络广告" },
    { text: "reach nearby customers", translation: "触达附近顾客" },
    { text: "social acceptance", translation: "社会认同" },
    { text: "emotional pressure", translation: "情绪压力" },
  ],
  "wildlife-too-late": [
    { text: "a small animal population", translation: "数量很少的动物种群" },
    { text: "prevent permanent loss", translation: "防止永久性损失" },
    { text: "safe areas to feed and reproduce", translation: "安全的觅食和繁殖区域" },
    { text: "causing further losses", translation: "造成进一步损失" },
  ],
  "international-cooperation": [
    { text: "a shared safety standard", translation: "统一的安全标准" },
    { text: "improve production", translation: "改善生产" },
    { text: "greenhouse gases and ocean plastic", translation: "温室气体和海洋塑料" },
    { text: "share targets, information and money", translation: "共享目标、信息和资金" },
  ],
  "species-extinction": [
    { text: "a small population", translation: "数量很少的种群" },
    { text: "threatened species", translation: "受威胁物种" },
    { text: "responsible tourism", translation: "负责任的旅游业" },
  ],
  "subject-gender": [
    { text: "gender stereotypes", translation: "性别刻板印象" },
    { text: "reduce confidence", translation: "降低自信" },
    { text: "laboratory experience", translation: "实验室实践经验" },
    { text: "clear course information", translation: "清晰的课程信息" },
  ],
  "science-shortage": [
    { text: "practical projects", translation: "实践项目" },
    { text: "laboratories or trained teachers", translation: "实验室或受过培训的教师" },
    { text: "data, energy and medical knowledge", translation: "数据、能源和医学知识" },
    { text: "shortages in these areas", translation: "这些领域的人才短缺" },
  ],
  "older-parents": [
    { text: "control over working hours", translation: "对工作时间的掌控" },
    { text: "early family life financially risky", translation: "使早期家庭生活面临经济风险" },
    { text: "experienced parents", translation: "经验更丰富的父母" },
    { text: "greater financial stability", translation: "更强的经济稳定性" },
  ],
  "preserve-buildings": [
    { text: "a traditional market", translation: "传统市场" },
    { text: "clear historical and social value", translation: "明确的历史和社会价值" },
    { text: "turning an old station into a museum", translation: "把旧车站改造成博物馆" },
    { text: "keep its important design", translation: "保留其重要设计" },
  ],
  "repeat-offending": [
    { text: "old criminal groups", translation: "原有犯罪团伙" },
    { text: "a legal income", translation: "合法收入" },
    { text: "a real work placement", translation: "真实的工作实习机会" },
    { text: "supervised employment", translation: "受监督的就业" },
  ],
};

const generalTrainingEssayOrderByCategory: Record<string, string[]> = {
  stance: [
    "remote-work",
    "salary-gap",
    "leader-intelligence",
    "punish-parents",
    "communication-relationships",
    "life-without-work",
    "computer-literacy",
    "company-facilities",
    "congestion-tax",
    "extreme-sports",
    "university-fees",
    "move-companies",
    "live-with-climate-change",
    "mars-research",
  ],
  comparison: [
    "advertising-effects",
    "technology-crime",
    "wildlife-too-late",
    "international-cooperation",
  ],
  "two-question": [
    "older-parents",
    "repeat-offending",
    "subject-gender",
    "preserve-buildings",
    "species-extinction",
    "science-shortage",
  ],
};

const singleSidePositionByEssayId: Record<string, string> = {
  "remote-work": "不同意",
  "salary-gap": "不同意",
  "leader-intelligence": "不同意",
  "punish-parents": "不同意",
  "communication-relationships": "同意",
  "life-without-work": "不同意",
  "computer-literacy": "同意",
  "company-facilities": "不同意",
  "congestion-tax": "积极发展",
  "extreme-sports": "不同意",
  "university-fees": "不同意",
  "move-companies": "同意",
  "live-with-climate-change": "不同意",
  "mars-research": "不同意",
};

const simplifiedEssayContentByEssayId: Record<
  string,
  Pick<PredictedEssay, "keyPhrases" | "paragraphs">
> = {
  "punish-parents": {
    keyPhrases: [
      { text: "prevent youth crime", translation: "预防青少年犯罪" },
      { text: "give teenagers better choices", translation: "给青少年更好的选择" },
      { text: "provide adult guidance", translation: "提供成年人的引导" },
      { text: "keep them away from criminal groups", translation: "让他们远离犯罪团伙" },
      { text: "reduce the family budget", translation: "减少家庭预算" },
      { text: "increase stress at home", translation: "增加家庭压力" },
      { text: "punish innocent brothers and sisters", translation: "惩罚无辜的兄弟姐妹" },
      { text: "make rehabilitation harder", translation: "使改造更加困难" },
    ],
    paragraphs: [
      `Some people believe that parents should be punished when their children break the law. I disagree because young people are also influenced by friends, schools and neighbourhoods, and punishing parents automatically would be unfair.`,
      `The first reason is that parents are not the only influence on a child. Teenagers spend much time with friends and at school, and they can also see harmful ideas online. Even careful parents cannot watch them every minute. Schools also know what happens outside the home. For example, after-school programmes can prevent youth crime, give teenagers better choices, provide adult guidance and keep them away from criminal groups. These forms of support deal with outside influences directly. Therefore, the law should normally focus on the young offender's actions instead of blaming the parents.`,
      `The second reason is that automatic punishment would be unfair. Some parents follow school advice and set clear rules, but their child may still break the law. A fine would then punish adults who tried to act responsibly and could harm other children in the home. For example, a large fine may reduce the family budget, increase stress at home, punish innocent brothers and sisters and make rehabilitation harder. This does not solve the cause of the crime. Therefore, parents should not receive a penalty simply because their child committed an offence.`,
      `In conclusion, I disagree that parents should automatically be punished for a child's crime. Other people and places also affect young behaviour, and punishing a responsible parent would be unfair and unhelpful.`,
    ],
  },
  "communication-relationships": {
    keyPhrases: [
      { text: "put phones away during meals", translation: "吃饭时把手机收起来" },
      { text: "talk face to face", translation: "面对面交谈" },
      { text: "give each other full attention", translation: "给予彼此充分关注" },
      { text: "strengthen family relationships", translation: "加强家庭关系" },
      { text: "spend time with real friends", translation: "花时间和现实中的朋友相处" },
      { text: "receive real support", translation: "获得真实的支持" },
      { text: "reduce social isolation", translation: "减少社会孤立" },
      { text: "feel part of a community", translation: "感到自己属于一个群体" },
    ],
    paragraphs: [
      `Modern communication technology is used every day, but it can also harm relationships. I agree because too much phone use can reduce face-to-face communication and can make people feel lonely.`,
      `The first reason is that too much phone use can reduce face-to-face communication. Many people check messages while eating or while another person is speaking. Family members and friends then have fewer real conversations and may feel ignored. For example, families can put phones away during meals, talk face to face, give each other full attention and strengthen family relationships. These simple actions help people understand each other better. If everyone continues looking at a screen, small problems may not be discussed. Therefore, frequent phone use can slowly weaken close relationships.`,
      `The second reason is that too much phone use can make people feel lonely. A person may have hundreds of online contacts but nobody nearby to help during a difficult time. Online likes and short messages cannot always provide real care. For example, people who spend time with real friends can receive real support, reduce social isolation and feel part of a community. Meeting others also gives them a chance to share feelings directly. By contrast, someone who spends most free time alone online may become less confident in real conversations. Therefore, online contact should not replace real friendships.`,
      `In conclusion, I agree that modern communication technology can harm social relationships. Real conversations become less common, and users may feel lonely even when they have many online contacts today.`,
    ],
  },
  "life-without-work": {
    keyPhrases: [
      { text: "pay for food and housing", translation: "支付食物和住房费用" },
      { text: "support their families", translation: "养家" },
      { text: "avoid financial stress", translation: "避免经济压力" },
      { text: "remain financially independent", translation: "保持经济独立" },
      { text: "follow a daily routine", translation: "保持日常规律" },
      { text: "develop useful skills", translation: "培养实用技能" },
      { text: "meet other people", translation: "与他人交往" },
      { text: "feel useful to society", translation: "感到自己对社会有用" },
    ],
    paragraphs: [
      `Some people believe that, if the only choices were having no job or spending most of life working, people would choose not to work. I disagree because work provides a regular income and work gives people purpose and social contact.`,
      `The first reason is that work provides a regular income. Most adults need money for rent, food, transport and other basic costs. Without a job, they may depend on family or government support and worry about every payment. For example, regular employment allows people to pay for food and housing, support their families, avoid financial stress and remain financially independent. Even if a job requires long hours, many people would keep it because losing all income could create more serious problems. Therefore, most adults would not freely choose a life without work.`,
      `The second reason is that work gives people purpose and social contact. A job provides a clear reason to get up each morning and allows workers to see colleagues regularly. It also gives them a chance to learn and improve. For example, employment helps people follow a daily routine, develop useful skills, meet other people and feel useful to society. A person with no work or responsibility may become bored, lonely or less confident over time. Therefore, many people would still choose work, although they would prefer shorter and more reasonable hours.`,
      `In conclusion, I disagree that most people would choose a life without work. Despite the difficulty of long hours, income, purpose and regular contact with other people make employment an important part of life.`,
    ],
  },
  "computer-literacy": {
    keyPhrases: [
      { text: "read full books", translation: "阅读完整书籍" },
      { text: "follow a long argument", translation: "理解长篇论述" },
      { text: "learn new vocabulary", translation: "学习新词汇" },
      { text: "improve concentration", translation: "提高专注力" },
      { text: "write without automatic help", translation: "在没有自动帮助的情况下写作" },
      { text: "notice spelling mistakes", translation: "发现拼写错误" },
      { text: "organise ideas clearly", translation: "清楚地组织观点" },
      { text: "build independent writing skills", translation: "培养独立写作能力" },
    ],
    paragraphs: [
      `Computers and mobile phones are used by most young people every day. I agree that their increasing use can harm literacy because short online content reduces careful reading and automatic correction reduces independent writing practice.`,
      `The first reason is that short online content can reduce long reading practice. Many young people move quickly between short posts, pictures and videos instead of reading one text for a longer time. As a result, they may find it difficult to understand detailed ideas or stay focused. For example, students who regularly read full books can follow a long argument, learn new vocabulary and improve concentration. These skills develop slowly and need regular practice. Therefore, spending most free time on short digital content can weaken the reading skills needed at school and at work.`,
      `The second reason is that automatic correction can reduce independent writing practice. Phones and computers can change spelling, grammar and even whole sentences before the writer notices a mistake. Young people may then depend on the software and fail to remember the correct form. For example, students sometimes need to write without automatic help so that they notice spelling mistakes, organise ideas clearly and build independent writing skills. Teachers can use digital tools later to give feedback, but learners should first try by themselves. Therefore, heavy dependence on automatic correction can weaken writing ability.`,
      `In conclusion, I agree that frequent use of computers and phones can negatively affect reading and writing. Short content reduces careful reading, while automatic correction can stop young people from practising writing independently.`,
    ],
  },
  "company-facilities": {
    keyPhrases: [
      { text: "buy sports equipment", translation: "购买运动器材" },
      { text: "pay for cleaning and repairs", translation: "支付清洁和维修费用" },
      { text: "employ extra staff", translation: "雇用额外员工" },
      { text: "cover electricity and insurance costs", translation: "承担电费和保险费用" },
      { text: "build facilities near public transport", translation: "在公共交通附近建设设施" },
      { text: "keep prices affordable", translation: "保持价格可负担" },
      { text: "provide trained staff", translation: "提供受过培训的工作人员" },
      { text: "serve the whole community", translation: "服务整个社区" },
    ],
    paragraphs: [
      `Some people believe that every large company should provide sports and social facilities for local people. I disagree because these facilities would create high costs for companies, and local government should provide public facilities.`,
      `The first reason is that sports and social facilities are expensive to build and maintain. A company would need land, buildings, equipment and money for daily operation. These costs continue every year and may become a problem when business income falls. For example, a sports centre must buy sports equipment, pay for cleaning and repairs, employ extra staff, and cover electricity and insurance costs. The same money could protect jobs, improve wages or train workers. Therefore, even a large company should decide how to spend its money according to its own situation.`,
      `The second reason is that public facilities should be provided by local government. The government can study which areas need a sports centre and choose a location that residents can reach easily. It can also use tax money and make the service available to everyone equally. For example, local government can build facilities near public transport, keep prices affordable, provide trained staff and serve the whole community. Companies can still support these projects through tax or voluntary donations. Therefore, public planning is fairer than forcing each large company to build its own facilities.`,
      `In conclusion, I disagree that every large company should provide sports and social facilities. They are costly to build and run, while local government can plan fairer services for all residents.`,
    ],
  },
  "move-companies": {
    keyPhrases: [
      { text: "reduce traffic congestion", translation: "减少交通拥堵" },
      { text: "reduce long daily journeys", translation: "减少长距离日常通勤" },
      { text: "make city roads less crowded", translation: "让城市道路不那么拥挤" },
      { text: "lower the demand for urban housing", translation: "降低城市住房需求" },
      { text: "create regional jobs", translation: "创造地区就业机会" },
      { text: "gain a regular income", translation: "获得稳定收入" },
      { text: "support local businesses", translation: "支持当地企业" },
      { text: "spread population more evenly", translation: "让人口分布更加均衡" },
    ],
    paragraphs: [
      `Some people believe that moving large companies, factories and their employees to the countryside can solve traffic and housing problems in cities. I agree because this policy can reduce daily travel into city centres and lower the demand for urban housing.`,
      `The first reason is that moving workplaces can reduce traffic congestion. At present, many employees travel into large cities every morning because most jobs are located there. If companies move and workers live near their new workplaces, fewer people will make long daily journeys. City roads will become less crowded, and buses can run more reliably. For example, moving a factory with many workers to a small town could reduce long daily journeys and make city roads less crowded during rush hour. Therefore, spreading workplaces across different areas can directly reduce urban traffic.`,
      `The second reason is that relocation can lower the demand for urban housing. People often move to large cities mainly because suitable jobs are available there. When companies create regional jobs, some employees can live in smaller towns, where homes and land are usually cheaper. Local residents may also gain a regular income, and nearby shops can receive more customers. For example, a new business area can create regional jobs, support local businesses and spread population more evenly. As a result, fewer people will need to compete for expensive homes in city centres. Therefore, relocation can reduce housing pressure and support regional development.`,
      `In conclusion, I agree that moving large employers and their workers to the countryside can help solve urban traffic and housing problems. It can reduce daily travel into cities, lower housing demand and create useful opportunities in regional areas.`,
    ],
  },
  "live-with-climate-change": {
    keyPhrases: [
      { text: "reduce greenhouse gas emissions", translation: "减少温室气体排放" },
      { text: "replace fossil fuels", translation: "替代化石燃料" },
      { text: "use clean technology and renewable energy", translation: "使用清洁技术和可再生能源" },
      { text: "limit future warming", translation: "限制未来变暖" },
      { text: "build flood-safe housing", translation: "建设防洪住宅" },
      { text: "construct stronger sea walls", translation: "修建更坚固的海堤" },
      { text: "place pressure on public budgets", translation: "给公共预算带来压力" },
      { text: "leave vulnerable families unprotected", translation: "让弱势家庭得不到保护" },
    ],
    paragraphs: [
      `Some people believe that society should stop trying to prevent climate change and only learn to live with it. I disagree because cutting emissions can prevent further damage, while adaptation alone would be too expensive.`,
      `The first reason is that cutting emissions can prevent more climate damage. If countries continue to burn large amounts of coal, oil and gas, temperatures and sea levels will keep rising. Farms, homes and public health will then face greater danger. This is safer than paying for larger disasters later. For example, governments can reduce greenhouse gas emissions, replace fossil fuels, use clean technology and renewable energy, and limit future warming. These actions also improve air quality and make energy supplies safer. Therefore, prevention can reduce the size of future problems instead of allowing them to grow without control.`,
      `The second reason is that adaptation alone would be too expensive. Governments would need to protect more homes from floods, provide water during droughts and rebuild after stronger storms. Some poor countries and families could not pay for all these changes. For example, plans to build flood-safe housing and construct stronger sea walls can place pressure on public budgets and leave vulnerable families unprotected. Adaptation is useful for damage that has already happened, but it cannot protect everyone from unlimited warming. Therefore, it should never replace prevention.`,
      `In conclusion, I disagree that people should only learn to live with climate change. Reducing emissions can stop further harm, whereas relying on adaptation alone would be costly, limited and unfair.`,
    ],
  },
  "advertising-effects": {
    keyPhrases: [
      { text: "reach more customers", translation: "触达更多顾客" },
      { text: "increase sales", translation: "提高销量" },
      { text: "create jobs", translation: "创造工作岗位" },
      { text: "support local businesses", translation: "支持当地企业" },
      { text: "buy things they do not need", translation: "购买不需要的东西" },
      { text: "waste money", translation: "浪费金钱" },
      { text: "feel unhappy with what they have", translation: "对自己拥有的东西感到不满" },
      { text: "compare themselves with others", translation: "与他人比较" },
    ],
    paragraphs: [
      `People have different views about advertising. Some believe advertising helps companies sell products and create jobs, while others think advertising can make people feel unhappy with what they have. I believe the negative social effects are more serious.`,
      `The first view is that advertising helps companies sell more products. New or small businesses need to tell customers what they offer and how much it costs. When more people know about a product, sales may rise and the company may need more workers. For example, a local restaurant can use a simple online advertisement to reach more customers, increase sales, create jobs and support local businesses. Advertising can also help buyers compare prices and find a service nearby. Therefore, this side believes advertising is useful because it supports both business income and employment.`,
      `The other view is that advertising can make people buy things they do not need. Advertisements often show perfect homes, bodies and lifestyles, so ordinary people may think their own lives are not good enough. Children and teenagers can be especially easy to influence. For example, repeated advertisements may encourage people to buy things they do not need, waste money, feel unhappy with what they have and compare themselves with others. In my view, this social harm is more serious than the economic benefit because it affects confidence and family spending. Governments should therefore control false claims and advertising aimed at children.`,
      `In conclusion, advertising can help companies sell products and create jobs, but it can also encourage unnecessary spending and dissatisfaction. I believe its negative social effects are more serious, especially for children and families.`,
    ],
  },
  "international-cooperation": {
    keyPhrases: [
      { text: "set the same pollution rules", translation: "制定相同的污染规定" },
      { text: "share environmental information", translation: "共享环境信息" },
      { text: "reduce greenhouse gas emissions", translation: "减少温室气体排放" },
      { text: "protect oceans and wildlife", translation: "保护海洋和野生动物" },
      { text: "reach more customers", translation: "触达更多顾客" },
      { text: "increase sales", translation: "提高销量" },
      { text: "create jobs", translation: "创造工作岗位" },
      { text: "offer lower prices", translation: "提供更低的价格" },
    ],
    paragraphs: [
      `People have different views about the main benefit of international cooperation. Some believe countries can solve shared environmental problems together, while others say businesses can sell products in more countries. I believe environmental protection is the more important benefit.`,
      `The first view is that countries can work together to solve environmental problems. Air pollution, climate change and plastic waste do not stop at national borders. Action by one country may have little effect if nearby countries continue to pollute. For example, governments can set the same pollution rules, share environmental information, reduce greenhouse gas emissions and protect oceans and wildlife. Joint action also allows poorer countries to receive money and technology for cleaner energy. In my view, this is the more important benefit because clean air, water and land are necessary for people's health and future life.`,
      `The second view is that businesses can sell products in more countries. Trade agreements can reduce border costs, create common rules and make it easier for companies to enter foreign markets. Small businesses may then grow faster and employ more people. For example, international trade can help a local company reach more customers, increase sales, create jobs and offer lower prices. Consumers also receive more choice, while businesses can learn useful ideas from overseas partners. This is a real benefit, but business growth depends on a healthy environment and cannot replace it.`,
      `In conclusion, international cooperation can protect the environment and help businesses grow. I believe environmental protection is more important because pollution crosses borders and a healthy natural world supports everyone, including businesses.`,
    ],
  },
  "subject-gender": {
    keyPhrases: [
      { text: "be encouraged to read and communicate", translation: "被鼓励阅读和交流" },
      { text: "be given science toys", translation: "得到科学玩具" },
      { text: "technical subjects suit boys", translation: "技术类科目适合男生" },
      { text: "become less confident in science", translation: "对理科变得不自信" },
      { text: "receive the same course information", translation: "获得相同的课程信息" },
      { text: "try both arts and science subjects", translation: "尝试文科和理科科目" },
      { text: "explore different career choices", translation: "了解不同的职业选择" },
      { text: "make a free and informed choice", translation: "作出自由且知情的选择" },
    ],
    paragraphs: [
      `In many schools and universities, girls often choose arts subjects while boys choose science subjects. This happens mainly because boys and girls receive different messages from childhood. I believe this tendency should be changed so that students can choose subjects according to interest and ability.`,
      `Regarding the first question, boys and girls receive different messages from childhood. Parents, teachers and the media may present reading and languages as suitable for girls, while science and technology are shown as male subjects. Children can accept these ideas before they understand their own abilities. For example, girls may be encouraged to read and communicate, while boys may be given science toys and told that technical subjects suit boys; as a result, girls can become less confident in science. Therefore, later choices may follow early expectations rather than real interest or talent.`,
      `As for the second question, students should choose subjects according to interest and ability. The current tendency should change because fixed gender expectations can stop capable students from entering a suitable subject or future career. Schools should give every student the same experience and clear advice. For example, all students should receive the same course information, try both arts and science subjects, explore different career choices and make a free and informed choice. The goal is not to force equal numbers in every class. It is to make sure that gender does not decide a student's education.`,
      `In conclusion, different messages from adults and the media help create gendered subject choices. This tendency should change so that every student can follow personal interests and abilities instead of gender expectations.`,
    ],
  },
};

const simpleBodyReasonSentencesByEssayId: Record<string, [string, string]> = {
  "remote-work": [
    "The first reason is that remote work can reduce company costs.",
    "The second reason is that remote work helps companies find and keep workers.",
  ],
  "salary-gap": [
    "The first reason is that a large pay gap can reduce worker motivation. This feels unfair.",
    "The second reason is that company money can benefit more workers.",
  ],
  "leader-intelligence": [
    "The first reason is that workers need clear instructions.",
    "The second reason is that employees need to trust their leader.",
  ],
  "punish-parents": [
    "The first reason is that parents are not the only influence on a child.",
    "The second reason is that automatic punishment would be unfair.",
  ],
  "communication-relationships": [
    "The first reason is that too much phone use can reduce face-to-face communication.",
    "The second reason is that too much phone use can make people feel lonely.",
  ],
  "life-without-work": [
    "The first reason is that work provides a regular income.",
    "The second reason is that work gives people purpose and social contact.",
  ],
  "computer-literacy": [
    "The first reason is that short online content can reduce long reading practice.",
    "The second reason is that automatic correction can reduce independent writing practice.",
  ],
  "company-facilities": [
    "The first reason is that sports and social facilities are expensive to build and maintain.",
    "The second reason is that public facilities should be provided by local government.",
  ],
  "congestion-tax": [
    "The first reason is that the tax can reduce rush-hour traffic.",
    "The second reason is that the tax can pay for better public transport.",
  ],
  "extreme-sports": [
    "The first reason is that adults should be free to choose their activities.",
    "The second reason is that safety rules can reduce the risks.",
  ],
  "university-fees": [
    "The first reason is that university graduates provide important services.",
    "The second reason is that full fees can stop poor students from going to university.",
  ],
  "move-companies": [
    "The first reason is that moving workplaces can reduce traffic congestion.",
    "The second reason is that relocation can lower the demand for urban housing.",
  ],
  "live-with-climate-change": [
    "The first reason is that cutting emissions can prevent more climate damage.",
    "The second reason is that adaptation alone would be too expensive.",
  ],
  "mars-research": [
    "The first reason is that living on Mars would be too expensive.",
    "The second reason is that Earth has more urgent problems.",
  ],
  "advertising-effects": [
    "The first view is that advertising helps companies sell more products.",
    "The other view is that advertising can make people buy things they do not need.",
  ],
  "technology-crime": [
    "The first view is that technology can help prevent and solve crime.",
    "The other view is that the internet creates new opportunities for criminals.",
  ],
  "wildlife-too-late": [
    "The first view is that some environmental damage cannot be repaired.",
    "The second view is that action can still protect remaining species.",
  ],
  "international-cooperation": [
    "The first view is that countries can work together to solve environmental problems.",
    "The second view is that businesses can sell products in more countries.",
  ],
  "older-parents": [
    "Regarding the first question, work and living costs cause people to delay parenthood. They first seek stable jobs.",
    "As for the second question, older parents are often better prepared.",
  ],
  "repeat-offending": [
    "Regarding the first question, a lack of work and support can cause reoffending. Without these things, normal life is difficult.",
    "As for the second question, training and continued support can reduce reoffending.",
  ],
  "subject-gender": [
    "Regarding the first question, boys and girls receive different messages from childhood.",
    "As for the second question, students should choose subjects according to interest and ability.",
  ],
  "preserve-buildings": [
    "Regarding the first question, buildings with historical or community value should be protected. These places teach local history and give a town its unique identity.",
    "As for the second question, the benefits are greater than the maintenance costs.",
  ],
  "species-extinction": [
    "Regarding the first question, habitat loss and overhunting reduce animal populations.",
    "As for the second question, nature reserves and stronger laws can protect species.",
  ],
  "science-shortage": [
    "Regarding the first question, students think science is difficult and career choices are unclear.",
    "As for the second question, too few science graduates cause skill shortages.",
  ],
};

function replaceOpeningSentence(paragraph: string, replacement: string) {
  const sentenceEnd = paragraph.indexOf(".");
  return sentenceEnd === -1
    ? replacement
    : `${replacement}${paragraph.slice(sentenceEnd + 1)}`;
}

export const predictedEssayCategories: PredictedEssayCategory[] =
  basePredictedEssayCategories.map((category) => ({
    ...category,
    essays: category.essays
      .map((essay) => ({
        ...essay,
        position: singleSidePositionByEssayId[essay.id] ?? essay.position,
        frameworkPoints:
          simpleFrameworkPointsByEssayId[essay.id] ?? essay.frameworkPoints,
        introPhrases: introPhrasesByEssayId[essay.id] ?? essay.introPhrases,
        reasonPhrases: reasonPhrasesByEssayId[essay.id] ?? essay.reasonPhrases,
        paragraphs: (
          simplifiedEssayContentByEssayId[essay.id]?.paragraphs ??
          essay.paragraphs
        ).map((paragraph, paragraphIndex) => {
            if (paragraphIndex !== 1 && paragraphIndex !== 2) return paragraph;
            const replacement =
              simpleBodyReasonSentencesByEssayId[essay.id]?.[
                paragraphIndex - 1
              ];
            return replacement
              ? replaceOpeningSentence(paragraph, replacement)
              : paragraph;
          }),
        keyPhrases:
          simplifiedEssayContentByEssayId[essay.id]?.keyPhrases ?? [
            ...essay.keyPhrases,
            ...(additionalKeyPhrasesByEssayId[essay.id] ?? []),
          ],
      }))
      .sort((first, second) => {
        const order = generalTrainingEssayOrderByCategory[category.id] ?? [];
        return order.indexOf(first.id) - order.indexOf(second.id);
      }),
  }));
