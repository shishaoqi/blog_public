const e=JSON.parse('{"key":"v-b536e634","path":"/interview/%E5%89%8D%E7%AB%AF/16.vue%E7%9A%84%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A%E5%8E%9F%E7%90%86%E5%8F%8A%E5%AE%9E%E7%8E%B0.html","title":"vue的双向绑定原理及实现","lang":"zh-CN","frontmatter":{"description":"vue的双向绑定原理及实现 前言 使用vue也好有一段时间了，虽然对其双向绑定原理也有了解个大概，但也没好好探究下其原理实现，所以这次特意花了几晚时间查阅资料和阅读相关源码，自己也实现一个简单版vue的双向绑定版本，先上个成果图来吸引各位： vue双向绑定-图1 vue双向绑定-图2 是不是看起来跟vue的使用方式差不多？接下来就来从原理到实现，从简到难一步一步来实现这个SelfVue。由于本文只是为了学习和分享，所以只是简单实现下原理，并没有考虑太多情况和设计，如果大家有什么建议，欢迎提出来。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/article/docs/interview/%E5%89%8D%E7%AB%AF/16.vue%E7%9A%84%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A%E5%8E%9F%E7%90%86%E5%8F%8A%E5%AE%9E%E7%8E%B0.html"}],["meta",{"property":"og:site_name","content":"博客"}],["meta",{"property":"og:title","content":"vue的双向绑定原理及实现"}],["meta",{"property":"og:description","content":"vue的双向绑定原理及实现 前言 使用vue也好有一段时间了，虽然对其双向绑定原理也有了解个大概，但也没好好探究下其原理实现，所以这次特意花了几晚时间查阅资料和阅读相关源码，自己也实现一个简单版vue的双向绑定版本，先上个成果图来吸引各位： vue双向绑定-图1 vue双向绑定-图2 是不是看起来跟vue的使用方式差不多？接下来就来从原理到实现，从简到难一步一步来实现这个SelfVue。由于本文只是为了学习和分享，所以只是简单实现下原理，并没有考虑太多情况和设计，如果大家有什么建议，欢迎提出来。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/article/docs/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"vue的双向绑定原理及实现"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"vue的双向绑定原理及实现\\",\\"image\\":[\\"https://mister-hope.github.io/article/docs/\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"vue数据双向绑定原理","slug":"vue数据双向绑定原理","link":"#vue数据双向绑定原理","children":[]},{"level":2,"title":"思路分析","slug":"思路分析","link":"#思路分析","children":[]},{"level":2,"title":"实现过程","slug":"实现过程","link":"#实现过程","children":[{"level":3,"title":"1.实现一个Observer","slug":"_1-实现一个observer","link":"#_1-实现一个observer","children":[]},{"level":3,"title":"2.实现Watcher","slug":"_2-实现watcher","link":"#_2-实现watcher","children":[]},{"level":3,"title":"3.实现Compile","slug":"_3-实现compile","link":"#_3-实现compile","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":15.32,"words":4595},"filePathRelative":"interview/前端/16.vue的双向绑定原理及实现.md","excerpt":"<h1> vue的双向绑定原理及实现</h1>\\n<h2> 前言</h2>\\n<p>使用vue也好有一段时间了，虽然对其双向绑定原理也有了解个大概，但也没好好探究下其原理实现，所以这次特意花了几晚时间查阅资料和阅读相关源码，自己也实现一个简单版vue的双向绑定版本，先上个成果图来吸引各位：</p>\\n<figure><figcaption>vue双向绑定-图1</figcaption></figure>\\n<figure><figcaption>vue双向绑定-图2</figcaption></figure>\\n<p>是不是看起来跟vue的使用方式差不多？接下来就来从原理到实现，从简到难一步一步来实现这个SelfVue。由于本文只是为了学习和分享，所以只是简单实现下原理，并没有考虑太多情况和设计，如果大家有什么建议，欢迎提出来。</p>","autoDesc":true}');export{e as data};
