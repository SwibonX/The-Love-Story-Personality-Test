const questions = [
    // ===== 不对等故事 — 权力型 (5类型 × 4题 = 20题) =====
    { text: "我觉得自己在感情中像老师，喜欢教导和启发对方", dimension: "unequal", type: "teacher", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "我喜欢被伴侣引导，希望对方比我更有见识和阅历", dimension: "unequal", type: "teacher", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "在关系中，知识和思想层面的匹配比经济条件更重要", dimension: "unequal", type: "teacher", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "我希望和对方一起学习新东西，共同成长和进步", dimension: "unequal", type: "teacher", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },

    { text: "即使自己很累，我也会优先满足对方的需求", dimension: "unequal", type: "sacrifice", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "对方做了对不起我的事，我也很难下定决心离开", dimension: "unequal", type: "sacrifice", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "在感情里，我总觉得付出比索取更能让自己安心", dimension: "unequal", type: "sacrifice", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "为了维持关系，我愿意放弃自己的一些原则和底线", dimension: "unequal", type: "sacrifice", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },

    { text: "我认为在一段关系中必须有一个人来做最终决定", dimension: "unequal", type: "tyrant", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "我不喜欢对方未经我同意就独自做出重大决策", dimension: "unequal", type: "tyrant", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "家里的重要事情，最终拍板的人应该是我", dimension: "unequal", type: "tyrant", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "如果对方不按照我的想法来，我会感到很不安", dimension: "unequal", type: "tyrant", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },

    { text: "我想知道对方每天去了哪里、见了什么人", dimension: "unequal", type: "police", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "我控制不住地想要翻看对方的手机或聊天记录", dimension: "unequal", type: "police", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "对方回消息慢了，我会忍不住胡思乱想", dimension: "unequal", type: "police", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "我很难完全信任一个人，总觉得需要保持警觉", dimension: "unequal", type: "police", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },

    { text: "性生活是否和谐，是衡量感情质量的重要指标", dimension: "unequal", type: "porn", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "身体的吸引和激情的火花，是我爱上一个人的前提", dimension: "unequal", type: "porn", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "如果长期缺乏身体亲密，我会重新考虑这段关系", dimension: "unequal", type: "porn", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "我对伴侣有强烈的身体占有欲，讨厌别人靠得太近", dimension: "unequal", type: "porn", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },

    // ===== 客体故事 — 工具型 (7类型 × 4题 = 28题) =====
    { text: "我承认自己是外貌协会，颜值是感情的第一块敲门砖", dimension: "object", type: "art", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "带另一半出门时，我很在意别人对他/她外表的评价", dimension: "object", type: "art", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "如果对方变胖或不再注重打扮，我的热情会明显下降", dimension: "object", type: "art", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "颜值高的人对我有天然的吸引力，我很难抗拒", dimension: "object", type: "art", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },

    { text: "我觉得多谈几次恋爱，才能搞清自己真正想要什么样的人", dimension: "object", type: "collection", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "我会保留和前任有关的照片、信件或纪念品", dimension: "object", type: "collection", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "我不排斥同时和几个人保持暧昧，观察比较后再做选择", dimension: "object", type: "collection", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "每一段感情经历都是独特的收藏，分手了也不后悔", dimension: "object", type: "collection", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },

    { text: "我坚信世界上存在命中注定的那个灵魂伴侣", dimension: "object", type: "scifi", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "我相信缘分和奇迹，会在对的时间遇到对的人", dimension: "object", type: "scifi", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "我经常幻想一个完美恋人会突然出现在我的生活中", dimension: "object", type: "scifi", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "爱情应该像电影里演的一样充满奇遇和逆转", dimension: "object", type: "scifi", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },

    { text: "对我而言，恋爱的终极目标就是结婚组建家庭", dimension: "object", type: "family", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "我在选择伴侣时，会很认真考量对方是否适合当父母", dimension: "object", type: "family", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "对方的家庭背景和经济条件是我决定是否交往的重要因素", dimension: "object", type: "family", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "关系一旦稳定，我就希望尽快见家长、推进婚事", dimension: "object", type: "family", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },

    { text: "我希望找到一个能治愈我过往伤痛的人", dimension: "object", type: "recovery", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "只有沉浸在爱情里，我才能暂时忘记生活的烦恼", dimension: "object", type: "recovery", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "我需要对方帮我走出上一段感情留下的阴影", dimension: "object", type: "recovery", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "没有爱情的日子里，我总觉得自己是残缺不完整的", dimension: "object", type: "recovery", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },

    { text: "我愿意为爱情放弃一切，就像为信仰献身一样", dimension: "object", type: "religion", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "爱情在我心中的分量远高于事业和朋友", dimension: "object", type: "religion", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "只要足够虔诚和坚持，上天一定会给我完美的爱情", dimension: "object", type: "religion", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "分手对我来说像失去信仰一样，整个人都会崩溃", dimension: "object", type: "religion", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },

    { text: "我喜欢在感情里试探对方，看看他/她到底有多在乎我", dimension: "object", type: "game", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "过早暴露自己的真实感情，会让我在关系里失去主动权", dimension: "object", type: "game", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "我在恋爱中习惯保持理性，不会让自己陷得太深", dimension: "object", type: "game", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "感情里的若即若离、欲擒故纵，比一往情深更有意思", dimension: "object", type: "game", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },

    // ===== 协作故事 — 伙伴型 (5类型 × 4题 = 20题) =====
    { text: "我想和伴侣一起去不同的城市生活，体验不同的风土人情", dimension: "collaboration", type: "travel", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "对我来说，最好的约会是两个人一起去探索没去过的地方", dimension: "collaboration", type: "travel", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "我无法忍受每天都过重复、单调、没有变化的生活", dimension: "collaboration", type: "travel", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "一个有趣、有好奇心、愿意尝试的伴侣，比什么都重要", dimension: "collaboration", type: "travel", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },

    { text: "感情出问题的时候，我会第一时间主动找办法修复", dimension: "collaboration", type: "sewing", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "两个人吵完架不可怕，可怕的是吵完谁也不愿意先和好", dimension: "collaboration", type: "sewing", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "我相信任何关系只要双方用心修补，都能重回正轨", dimension: "collaboration", type: "sewing", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "遇到矛盾时逃避没有用，我会拉着对方把话说明白", dimension: "collaboration", type: "sewing", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },

    { text: "好的感情和种花一样，需要日复一日的浇灌和耐心", dimension: "collaboration", type: "garden", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "我不相信一见钟情可以长久，真正的爱是日久生情", dimension: "collaboration", type: "garden", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "感情最初的激情总会褪去，剩下的就是细水长流的守护", dimension: "collaboration", type: "garden", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "我愿意花好几年时间去慢慢了解一个人、栽培一段爱", dimension: "collaboration", type: "garden", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },

    { text: "我在感情里习惯像管公司一样，和对方一起制定年度计划", dimension: "collaboration", type: "business", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "伴侣之间要分工明确、各司其职，关系才能走得远", dimension: "collaboration", type: "business", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "经济上的独立和透明，是感情能够长久的基础", dimension: "collaboration", type: "business", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "我希望和伴侣定期复盘感情状态，及时发现问题并调整", dimension: "collaboration", type: "business", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },

    { text: "一天不和对方联系，我就会坐立不安、焦躁难受", dimension: "collaboration", type: "addiction", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "如果分手了，我会觉得整个世界都崩塌了、没意义了", dimension: "collaboration", type: "addiction", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "对方不在身边的时候，我做什么事情都打不起精神", dimension: "collaboration", type: "addiction", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "我常常觉得，伴侣就是我生活的全部意义所在", dimension: "collaboration", type: "addiction", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },

    // ===== 叙事故事 — 剧本型 (4类型 × 4题 = 16题) =====
    { text: "我经常把小说和影视剧里的浪漫桥段代入自己的感情期待", dimension: "narrative", type: "fantasy", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "别人追我的时候，如果不够浪漫不走心，我根本不会动心", dimension: "narrative", type: "fantasy", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "我喜欢一个人待着的时候，脑补和喜欢的人发生各种故事", dimension: "narrative", type: "fantasy", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "现实的爱情太平淡普通，和我脑子里想象的差距太大了", dimension: "narrative", type: "fantasy", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },

    { text: "我会下意识拿现在的感情和前任做对比，找相似的地方", dimension: "narrative", type: "history", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "上次感情里摔过的跟头，会让我在新关系里格外小心", dimension: "narrative", type: "history", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "我发现自己每一段感情都在重复类似的剧情和结局", dimension: "narrative", type: "history", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "第一次约会的场景和细节，我会反复回味、珍藏很久", dimension: "narrative", type: "history", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },

    { text: "在感情中遇到问题，我习惯列出利弊清单再做决定", dimension: "narrative", type: "science", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "我不觉得爱情是感性的冲动，它本质上是一个理性选择", dimension: "narrative", type: "science", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "如果一段感情对我的生活品质没有提升，我会果断结束", dimension: "narrative", type: "science", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "我会用打分表来评估对方，看综合条件是否值得投入", dimension: "narrative", type: "science", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },

    { text: "恋爱应该按固定流程走：先了解、再表白、再官宣、再见家长", dimension: "narrative", type: "recipe", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "关系进展太快或者太慢，都会让我感到不安和焦虑", dimension: "narrative", type: "recipe", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "我希望对方按照约定俗成的方式来推进两人的关系", dimension: "narrative", type: "recipe", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "看到周围人的恋爱进度，我会忍不住拿来做参考和比较", dimension: "narrative", type: "recipe", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },

    // ===== 类型故事 — 风格型 (4类型 × 4题 = 16题) =====
    { text: "我觉得吵吵闹闹本身就是表达在乎的一种方式", dimension: "style", type: "war", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "吵完架之后的和好瞬间，会让我觉得感情反而更好了", dimension: "style", type: "war", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "如果一段感情从来不吵架，我会怀疑对方是不是真的爱我", dimension: "style", type: "war", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "吵架的时候谁先低头服软，对我来说有很重要的象征意义", dimension: "style", type: "war", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },

    { text: "我喜欢在感情里制造惊喜和戏剧化的浪漫场面", dimension: "style", type: "drama", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "平淡如水的日常会让我觉得感情正在慢慢褪色死去", dimension: "style", type: "drama", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "约会必须要有仪式感和惊喜，普通的吃饭看电影太没意思了", dimension: "style", type: "drama", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "我骨子里渴望那种轰轰烈烈、被所有人记住的爱情", dimension: "style", type: "drama", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },

    { text: "一个不能和我一起开怀大笑的人，我很难真正爱上", dimension: "style", type: "humor", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "我希望对方是个有趣的人，能接得住我的玩笑和烂梗", dimension: "style", type: "humor", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "感情里太严肃、太深沉的时刻，会让我想赶紧逃走", dimension: "style", type: "humor", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "两个人在一起的时光，轻松和快乐比什么深刻道理都重要", dimension: "style", type: "humor", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },

    { text: "我不会把全部的自己摊开给对方看，总要保留一点秘密", dimension: "style", type: "mystery", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "被人一眼看穿、完全摸透的感觉，让我浑身不自在", dimension: "style", type: "mystery", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "我喜欢让对方一层一层慢慢发现我的不同面，像拆礼物", dimension: "style", type: "mystery", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] },
    { text: "若即若离的暧昧期，比确定关系之后的安稳要有趣得多", dimension: "style", type: "mystery", options: ["非常不符合", "不太符合", "一般", "比较符合", "非常符合"] }
];

const personalities = {
    teacher: { name: "师生型", desc: "你把爱情看作一场教学和成长。要么想指导对方，要么希望对方像导师一样指引你。在感情中你高度重视思想、智慧和共同进步。" },
    sacrifice: { name: "牺牲型", desc: "你总是忍不住为对方付出，把对方的需要放在自己头顶。即使委屈自己，也希望对方开心。" },
    tyrant: { name: "专制型", desc: "你喜欢在关系中掌握主导权，希望对方听你的。在你看来，感情里必须有一个掌舵者。" },
    police: { name: "警察型", desc: "你会下意识关注对方的一举一动，想知道他/她究竟在做什么、和谁在一起。" },
    porn: { name: "色情型", desc: "身体吸引和性爱质量，是你感受爱、测量爱的重要标尺。" },
    horror: { name: "恐怖型", desc: "你觉得真正的爱情应该带一点危险的、让人心跳加速的刺激感。" },
    art: { name: "艺术型", desc: "你极度看重对方的外形和颜值，好看的皮囊对你来说是第一道门槛。" },
    collection: { name: "收藏型", desc: "你喜欢收集不同类型的恋爱经历，享受比较、筛选和累积的过程。" },
    scifi: { name: "科幻型", desc: "你深信命中注定、奇迹和奇遇，对完美爱情有一种近乎科幻的期待。" },
    family: { name: "家庭型", desc: "对你来说，恋爱就是为了组建一个安稳的家，结婚生子是终点站。" },
    recovery: { name: "康复型", desc: "你渴望通过爱情来愈合旧伤，爱是你的药、你的避难所。" },
    religion: { name: "宗教型", desc: "你像信仰宗教一般信仰爱情，愿意为其牺牲一切，离开它就活不下去。" },
    game: { name: "游戏型", desc: "你习惯把爱情当作一场博弈，太早认真就输了，最喜欢若即若离。" },
    travel: { name: "旅行型", desc: "你把爱情看作一场结伴旅行，人生是路、爱人是同行者，一起探索才有趣。" },
    sewing: { name: "缝织型", desc: "你坚信任何关系的裂痕都可以修补，出了问题你会第一时间主动修复。" },
    garden: { name: "园艺型", desc: "你觉得好的爱情像种花：需要长期投入、耐心浇灌和日复一日的照料。" },
    business: { name: "商业型", desc: "你把恋爱当项目运营，分工、目标、财务透明和定期复盘一样都不能少。" },
    addiction: { name: "成瘾型", desc: "你极度依赖对方，一天没有他/她的消息就浑身难受，分手像戒断反应。" },
    fantasy: { name: "幻想型", desc: "你脑子里装着一整套爱情童话剧本，看现实总觉得哪里不够完美。" },
    history: { name: "历史型", desc: "你习惯用过去的感情经验来导航现在的关系，总觉得历史会说真话。" },
    science: { name: "科学型", desc: "你用分析取代心动，列出利弊、做评分表，爱情在你看来是一项理性投资。" },
    recipe: { name: "食谱型", desc: "你认为恋爱就得按部就班走流程，什么时候该做什么一步都不能乱。" },
    war: { name: "战争型", desc: "你相信不吵架的感情不真实，吵得越凶、爱得越深，低头是最大的诚意。" },
    drama: { name: "戏剧型", desc: "你要的爱不是平淡过日子，而是舞台中央的演出：有起伏、有掌声、有观众。" },
    humor: { name: "幽默型", desc: "你对一段关系最基本的要求就是好笑——能一起笑的人，才值得爱。" },
    mystery: { name: "神秘型", desc: "你喜欢把自己藏起来一点，让对方猜、让对方追、让对方慢慢揭开你。" }
};

const combinations = {
    "teacher+sacrifice": {
        title: "师生 + 牺牲",
        analysis: "一边想当人生导师，一边习惯性付出。你爱里最典型：我教你、我包容、我成全。",
        pain: "容易变成「我为你好+无限委屈」，付出感强、边界弱。"
    },
    "teacher+tyrant": {
        title: "师生 + 专制",
        analysis: "权威感强，爱里带「我教你+我说了算」。",
        pain: "强势说教、控制感重，容易让人压抑。"
    },
    "teacher+police": {
        title: "师生 + 警察",
        analysis: "既要指导你，又要盯着你：我教你、我查你、我保护你。",
        pain: "过度干涉、疑心病重，信任门槛极高。"
    },
    "sacrifice+tyrant": {
        title: "牺牲 + 专制",
        analysis: "强势付出型：我做主、我兜底、我扛一切。",
        pain: "牺牲感强、控制欲藏在「为你好」里。"
    },
    "sacrifice+police": {
        title: "牺牲 + 警察",
        analysis: "委屈式监控：我付出、我不安、我需要安全感。",
        pain: "敏感多疑、委屈式索取，容易内耗。"
    },
    "tyrant+police": {
        title: "专制 + 警察",
        analysis: "控制型人格：我说了算、我查岗、我掌控一切。",
        pain: "强势多疑、安全感极低、占有欲强。"
    },
    "porn+horror": {
        title: "色情 + 恐怖",
        analysis: "刺激型人格：爱=危险+禁忌+拉扯。",
        pain: "平淡必无聊、越虐越上头、容易陷入拉扯。"
    },
    "art+family": {
        title: "艺术 + 家庭",
        analysis: "颜值+务实：要好看、也要安稳过日子。",
        pain: "现实、颜控、容易权衡条件。"
    },
    "art+fantasy": {
        title: "艺术 + 幻想",
        analysis: "颜值+童话：完美恋人、颜值天花板、一见钟情。",
        pain: "理想化、容易滤镜破碎。"
    },
    "collection+game": {
        title: "收藏 + 游戏",
        analysis: "新鲜感+暧昧：多选项、拉扯、不专一。",
        pain: "难定、享受暧昧、回避承诺。"
    },
    "scifi+mystery": {
        title: "科幻 + 神秘",
        analysis: "独特+猜不透：被特别、难懂、神秘吸引。",
        pain: "喜欢距离、不说透、猜心。"
    },
    "family+business": {
        title: "家庭 + 商业",
        analysis: "现实+责任：结婚优先、条件匹配、长期伙伴。",
        pain: "理性、务实、少心动。"
    },
    "recovery+sacrifice": {
        title: "康复 + 牺牲",
        analysis: "拯救+付出：我治愈你、我成全你。",
        pain: "拯救欲强、容易自我感动。"
    },
    "religion+fantasy": {
        title: "宗教 + 幻想",
        analysis: "宿命+童话：命中注定、灵魂伴侣、完美爱情。",
        pain: "执念高、容易理想化。"
    },
    "travel+sewing": {
        title: "旅行 + 缝织",
        analysis: "成长+专属：一起探索、独一无二。",
        pain: "开放、不按模板、喜欢新鲜。"
    },
    "garden+family": {
        title: "园艺 + 家庭",
        analysis: "经营+安稳：细水长流、过日子。",
        pain: "耐心、务实、平淡稳定。"
    },
    "garden+business": {
        title: "园艺 + 商业",
        analysis: "经营+责任：用心+理性。",
        pain: "务实、重长期、少激情。"
    },
    "addiction+dependency": {
        title: "成瘾 + 依赖",
        analysis: "离不开+高焦虑：黏人、安全感全在对方。",
        pain: "敏感、害怕失去、容易内耗。"
    },
    "travel+humor": {
        title: "旅行 + 幽默",
        analysis: "轻松+成长：一起玩、一起探索。",
        pain: "好玩、讨厌沉重、不较真。"
    },
    "fantasy+drama": {
        title: "幻想 + 戏剧",
        analysis: "童话+浪漫：完美爱情、氛围感、仪式。",
        pain: "理想化、滤镜、爱演戏。"
    },
    "history+family": {
        title: "历史 + 家庭",
        analysis: "回忆+安稳：重经历、过日子。",
        pain: "念旧、务实、重稳定。"
    },
    "science+business": {
        title: "科学 + 商业",
        analysis: "理性+现实：讲道理、条件匹配。",
        pain: "冷静、分析、少心动。"
    },
    "recipe+garden": {
        title: "食谱 + 园艺",
        analysis: "技巧+经营：按方法、用心。",
        pain: "务实、重细节、少冲动。"
    },
    "war+drama": {
        title: "战争 + 戏剧",
        analysis: "相爱相杀+浪漫：吵得凶、爱得烈、氛围感强。",
        pain: "情绪起伏大、越虐越上头。"
    },
    "humor+mystery": {
        title: "幽默 + 神秘",
        analysis: "轻松+猜不透：好玩、不说透、拉扯感。",
        pain: "暧昧、不直白、距离感。"
    }
};

const dimensionNames = {
    unequal: "不对等故事",
    object: "客体故事",
    collaboration: "协作故事",
    narrative: "叙事故事",
    style: "类型故事"
};

const dimensionDescriptions = {
    unequal: {
        title: "不对等故事（权力型）",
        desc: "测量你在爱情里的权力、付出、控制倾向。",
        high: "要么强势控制、要么过度付出，关系容易不对等，爱里带着明显的权力感或牺牲感。",
        low: "追求平等、尊重边界，不爱控制、不愿过度牺牲，要的是双向对等的关系。"
    },
    object: {
        title: "客体故事（工具型）",
        desc: "测量你是否不自觉地把人或关系当作工具、条件、手段。",
        high: "看重颜值、条件、救赎、新鲜感，容易把伴侣当成门面、跳板或疗愈工具。",
        low: "纯粹重感情、重人本身，不看附加条件，不功利、不把爱情当成实现目的的手段。"
    },
    collaboration: {
        title: "协作故事（伙伴型）",
        desc: "测量你把爱情看作并肩经营、共同成长的伙伴关系的程度。",
        high: "重视陪伴、责任、长期稳定，愿意共同规划、一起解决问题，把感情当事业用心经营。",
        low: "更独立、不爱被绑定，更看重个人空间，不喜欢把感情变成一项必须共同负担的责任。"
    },
    narrative: {
        title: "叙事故事（剧本型）",
        desc: "测量你心里那套理想爱情剧本对感情的影响程度。",
        high: "有固定的爱情观，相信宿命、童话、公式，容易用理想对照现实，也容易因此失望。",
        low: "现实灵活、不信模板，不被任何剧本束缚，活在当下、让关系自然地向前走。"
    },
    style: {
        title: "类型故事（风格型）",
        desc: "测量你看重爱情中相处氛围和情绪质感的程度。",
        high: "吃氛围感、重感觉，喜欢浪漫、幽默、神秘或拉扯带来的情绪张力，平淡会让你无聊。",
        low: "务实理性、不看重花哨的氛围，更在意踏实、简单、直接的相处方式，讨厌情绪拉扯。"
    }
};

let currentQuestion = 0;
let answers = [];
let scores = {
    unequal: 0,
    object: 0,
    collaboration: 0,
    narrative: 0,
    style: 0
};
let typeScores = {};

const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');

startBtn.addEventListener('click', startTest);
prevBtn.addEventListener('click', prevQuestion);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartTest);

function startTest() {
    startScreen.classList.remove('active');
    questionScreen.classList.add('active');
    currentQuestion = 0;
    answers = [];
    scores = { unequal: 0, object: 0, collaboration: 0, narrative: 0, style: 0 };
    typeScores = {};
    showQuestion();
}

function showQuestion() {
    const q = questions[currentQuestion];
    document.getElementById('question-number').textContent = '第 ' + (currentQuestion + 1) + ' 题';
    document.getElementById('question-text').textContent = q.text;
    document.getElementById('current-question').textContent = currentQuestion + 1;
    document.getElementById('total-questions').textContent = questions.length;
    document.getElementById('progress-fill').style.width = ((currentQuestion + 1) / questions.length * 100) + '%';

    const container = document.getElementById('options-container');
    container.innerHTML = '';
    q.options.forEach((opt, i) => {
        const el = document.createElement('div');
        el.className = 'option';
        el.textContent = opt;
        el.addEventListener('click', function() { selectOption(i); });
        if (answers[currentQuestion] === i) el.classList.add('selected');
        container.appendChild(el);
    });

    prevBtn.style.display = currentQuestion > 0 ? 'block' : 'none';
    nextBtn.style.display = 'none';
}

function selectOption(index) {
    answers[currentQuestion] = index;
    var opts = document.querySelectorAll('.option');
    opts.forEach(function(o, i) { o.classList.toggle('selected', i === index); });

    setTimeout(function() {
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            showQuestion();
        } else {
            calculateResults();
        }
    }, 300);
}

function nextQuestion() {
    if (answers[currentQuestion] === undefined) return;
    if (currentQuestion < questions.length - 1) { currentQuestion++; showQuestion(); }
    else { calculateResults(); }
}

function prevQuestion() {
    if (currentQuestion > 0) { currentQuestion--; showQuestion(); }
}

function calculateResults() {
    // 1. 计算各类型原始总分和维度总分
    questions.forEach(function(q, i) {
        var sc = answers[i] + 1; // 1-5分
        scores[q.dimension] += sc;
        if (!typeScores[q.type]) {
            typeScores[q.type] = { raw: 0, count: 0, avg: 0 };
        }
        typeScores[q.type].raw += sc;
        typeScores[q.type].count += 1;
    });

    // 2. 计算每个类型的平均分（标准化，消除题目数量差异）
    var typeAvgs = {};
    for (var t in typeScores) {
        typeScores[t].avg = typeScores[t].raw / typeScores[t].count;
        typeAvgs[t] = typeScores[t].avg;
    }

    // 3. 计算每个维度的平均分（用于展示）
    var dimCounts = {};
    questions.forEach(function(q) {
        dimCounts[q.dimension] = (dimCounts[q.dimension] || 0) + 1;
    });
    var dimAvgs = {};
    for (var d in scores) {
        dimAvgs[d] = scores[d] / dimCounts[d];
    }

    // 4. 从所有25个类型中找出主导人格（按平均分排序，公平比较）
    var sortedTypes = Object.keys(typeAvgs).sort(function(a, b) {
        return typeAvgs[b] - typeAvgs[a];
    });
    var maxType = sortedTypes[0];

    // 5. 找出次要人格（排除主导人格后的前2名）
    var secTypes = [];
    for (var i = 1; i < sortedTypes.length && secTypes.length < 2; i++) {
        secTypes.push(sortedTypes[i]);
    }

    // 6. 找出最高维度（用于组合分析参考）
    var sortedDims = Object.keys(dimAvgs).sort(function(a, b) {
        return dimAvgs[b] - dimAvgs[a];
    });

    showResult(maxType, secTypes, dimAvgs, typeAvgs);
}

function showResult(primaryType, secondaryTypes, dimAvgs, typeAvgs) {
    questionScreen.classList.remove('active');
    resultScreen.classList.add('active');

    // 主导人格
    document.getElementById('primary-name').textContent = personalities[primaryType].name;
    document.getElementById('primary-desc').textContent = personalities[primaryType].desc;

    // 组合分析
    var cc = document.getElementById('combination-container');
    cc.innerHTML = '';
    var found = null;
    for (var i = 0; i < secondaryTypes.length; i++) {
        var k1 = primaryType + '+' + secondaryTypes[i];
        var k2 = secondaryTypes[i] + '+' + primaryType;
        if (combinations[k1]) { found = combinations[k1]; break; }
        if (combinations[k2]) { found = combinations[k2]; break; }
    }
    if (found) {
        cc.innerHTML = '<h3>' + found.title + '</h3><div class="analysis-text">' + found.analysis + '</div><div class="pain-point"><div class="pain-point-title">⚠️ 痛点提醒</div><div class="pain-point-text">' + found.pain + '</div></div>';
    } else {
        cc.innerHTML = '<h3>你的爱情故事</h3><div class="analysis-text">你的主导人格是「' + personalities[primaryType].name + '」，辅以「' + personalities[secondaryTypes[0]].name + '」和「' + personalities[secondaryTypes[1]].name + '」。这是一种独特的组合，既有' + personalities[primaryType].name + '的核心特质，又兼具其他维度的色彩。</div>';
    }

    // 次要人格（只显示标准化进度条，不显示具体得分）
    var sc = document.getElementById('secondary-container');
    sc.innerHTML = '';
    secondaryTypes.forEach(function(t) {
        var avg = typeAvgs[t];
        var pct = Math.round((avg / 5) * 100);
        var card = document.createElement('div');
        card.className = 'secondary-card';
        card.innerHTML = '<h4>' + personalities[t].name + '</h4><p>' + personalities[t].desc + '</p><div class="sec-bar-track"><div class="sec-bar-fill" style="width:' + pct + '%"></div></div>';
        sc.appendChild(card);
    });

    // 维度得分（标准化为百分比长度，不显示具体分数）
    var db = document.getElementById('dimension-bars');
    db.innerHTML = '';
    var dimOrder = ['collaboration', 'style', 'narrative', 'unequal', 'object'];
    dimOrder.forEach(function(dim) {
        var avg = dimAvgs[dim];
        var pct = Math.round((avg / 5) * 100);
        var desc = dimensionDescriptions[dim];
        var item = document.createElement('div');
        item.className = 'dimension-item';
        item.innerHTML =
            '<div class="dimension-label"><span>' + desc.title + '</span></div>' +
            '<div class="dimension-track"><div class="dimension-fill" style="width:' + pct + '%"></div></div>' +
            '<div class="dimension-full-tip">' +
                '<div class="tip-row"><span class="tip-tag high">▲ 高分</span><span class="tip-text">' + desc.high + '</span></div>' +
                '<div class="tip-row"><span class="tip-tag low">▼ 低分</span><span class="tip-text">' + desc.low + '</span></div>' +
            '</div>';
        db.appendChild(item);
    });

}

function restartTest() {
    resultScreen.classList.remove('active');
    startScreen.classList.add('active');
}
