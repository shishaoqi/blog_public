const e=JSON.parse('{"key":"v-4e330dd7","path":"/interview/%E5%89%8D%E7%AB%AF/10.JavaScript%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E5%92%8C%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84.html","title":"JavaScript 数据类型和数据结构","lang":"zh-CN","frontmatter":{"description":"JavaScript 数据类型和数据结构 编程语言都具有内建的数据结构，但各种编程语言的数据结构常有不同之处。本文试图列出 JavaScript 语言中内建的数据结构及其属性，它们可以用来构建其他的数据结构；同时尽可能的描述与其他语言的不同之处 动态类型 JavaScript 是一种弱类型或者说动态语言。这意味着你不用提前声明变量的类型，在程序运行过程中，类型会被自动确定。这也意味着你可以使用同一个变量保存不同类型的数据： var foo = 42; // foo is a Number now foo = \\"bar\\"; // foo is a String now foo = true; // foo is a Boolean now","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/article/docs/interview/%E5%89%8D%E7%AB%AF/10.JavaScript%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E5%92%8C%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84.html"}],["meta",{"property":"og:site_name","content":"博客"}],["meta",{"property":"og:title","content":"JavaScript 数据类型和数据结构"}],["meta",{"property":"og:description","content":"JavaScript 数据类型和数据结构 编程语言都具有内建的数据结构，但各种编程语言的数据结构常有不同之处。本文试图列出 JavaScript 语言中内建的数据结构及其属性，它们可以用来构建其他的数据结构；同时尽可能的描述与其他语言的不同之处 动态类型 JavaScript 是一种弱类型或者说动态语言。这意味着你不用提前声明变量的类型，在程序运行过程中，类型会被自动确定。这也意味着你可以使用同一个变量保存不同类型的数据： var foo = 42; // foo is a Number now foo = \\"bar\\"; // foo is a String now foo = true; // foo is a Boolean now"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/article/docs/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"JavaScript 数据类型和数据结构"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JavaScript 数据类型和数据结构\\",\\"image\\":[\\"https://mister-hope.github.io/article/docs/\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"动态类型","slug":"动态类型","link":"#动态类型","children":[]},{"level":2,"title":"数据类型","slug":"数据类型","link":"#数据类型","children":[]},{"level":2,"title":"原始值( primitive values )","slug":"原始值-primitive-values","link":"#原始值-primitive-values","children":[{"level":3,"title":"布尔类型","slug":"布尔类型","link":"#布尔类型","children":[]},{"level":3,"title":"Null 类型节","slug":"null-类型节","link":"#null-类型节","children":[]},{"level":3,"title":"Undefined 类型节","slug":"undefined-类型节","link":"#undefined-类型节","children":[]},{"level":3,"title":"数字类型节","slug":"数字类型节","link":"#数字类型节","children":[]},{"level":3,"title":"字符串类型","slug":"字符串类型","link":"#字符串类型","children":[]},{"level":3,"title":"注意代码中的“字符串类型”！","slug":"注意代码中的-字符串类型","link":"#注意代码中的-字符串类型","children":[]},{"level":3,"title":"符号类型","slug":"符号类型","link":"#符号类型","children":[]}]},{"level":2,"title":"对象","slug":"对象","link":"#对象","children":[{"level":3,"title":"属性","slug":"属性","link":"#属性","children":[]},{"level":3,"title":"\\"标准的\\" 对象, 和函数","slug":"标准的-对象-和函数","link":"#标准的-对象-和函数","children":[]},{"level":3,"title":"日期","slug":"日期","link":"#日期","children":[]},{"level":3,"title":"有序集: 数组和类型数组","slug":"有序集-数组和类型数组","link":"#有序集-数组和类型数组","children":[]},{"level":3,"title":"键控集: Maps, Sets, WeakMaps, WeakSets","slug":"键控集-maps-sets-weakmaps-weaksets","link":"#键控集-maps-sets-weakmaps-weaksets","children":[]},{"level":3,"title":"结构化数据: JSON","slug":"结构化数据-json","link":"#结构化数据-json","children":[]},{"level":3,"title":"标准库中更多的对象","slug":"标准库中更多的对象","link":"#标准库中更多的对象","children":[]}]},{"level":2,"title":"使用 typeof 操作符判断对象类型","slug":"使用-typeof-操作符判断对象类型","link":"#使用-typeof-操作符判断对象类型","children":[]},{"level":2,"title":"规范","slug":"规范","link":"#规范","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":9.31,"words":2793},"filePathRelative":"interview/前端/10.JavaScript数据类型和数据结构.md","excerpt":"<h1> JavaScript 数据类型和数据结构</h1>\\n<p>编程语言都具有内建的数据结构，但各种编程语言的数据结构常有不同之处。本文试图列出 JavaScript 语言中内建的数据结构及其属性，它们可以用来构建其他的数据结构；同时尽可能的描述与其他语言的不同之处</p>\\n<h2> 动态类型</h2>\\n<p>JavaScript 是一种弱类型或者说动态语言。这意味着你不用提前声明变量的类型，在程序运行过程中，类型会被自动确定。这也意味着你可以使用同一个变量保存不同类型的数据：</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">var</span> foo <span class=\\"token operator\\">=</span> <span class=\\"token number\\">42</span><span class=\\"token punctuation\\">;</span>    <span class=\\"token comment\\">// foo is a Number now</span>\\nfoo <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"bar\\"</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// foo is a String now</span>\\nfoo <span class=\\"token operator\\">=</span> <span class=\\"token boolean\\">true</span><span class=\\"token punctuation\\">;</span>  <span class=\\"token comment\\">// foo is a Boolean now</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
