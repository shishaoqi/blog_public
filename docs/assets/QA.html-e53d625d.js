const e=JSON.parse('{"key":"v-3b1474f5","path":"/interview/MySQL/QA.html","title":"问题与简答","lang":"zh-CN","frontmatter":{"description":"问题与简答 MySQL 篇 体系结构 组成部分：SQL 接口，解析器，优化器，缓存，存储引擎 体系结构图 Connectors：不同语言中与 SQL 的交互 Management Serveices &amp; Utilities： 系统管理和控制工具 Connection Pool: 连接池 SQL Interface: SQL 接口 Parser: 解析器 Optimizer: 查询优化器 Cache 和 Buffer：查询缓存 Engine：存储引擎","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/article/docs/interview/MySQL/QA.html"}],["meta",{"property":"og:site_name","content":"博客"}],["meta",{"property":"og:title","content":"问题与简答"}],["meta",{"property":"og:description","content":"问题与简答 MySQL 篇 体系结构 组成部分：SQL 接口，解析器，优化器，缓存，存储引擎 体系结构图 Connectors：不同语言中与 SQL 的交互 Management Serveices &amp; Utilities： 系统管理和控制工具 Connection Pool: 连接池 SQL Interface: SQL 接口 Parser: 解析器 Optimizer: 查询优化器 Cache 和 Buffer：查询缓存 Engine：存储引擎"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/article/docs/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"问题与简答"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"问题与简答\\",\\"image\\":[\\"https://mister-hope.github.io/article/docs/\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"MySQL 篇","slug":"mysql-篇","link":"#mysql-篇","children":[{"level":3,"title":"体系结构","slug":"体系结构","link":"#体系结构","children":[]},{"level":3,"title":"基础操作","slug":"基础操作","link":"#基础操作","children":[]},{"level":3,"title":"数据库设计范式","slug":"数据库设计范式","link":"#数据库设计范式","children":[]},{"level":3,"title":"数据库设计原则","slug":"数据库设计原则","link":"#数据库设计原则","children":[]},{"level":3,"title":"char 和 varchar 数据类型区别","slug":"char-和-varchar-数据类型区别","link":"#char-和-varchar-数据类型区别","children":[]},{"level":3,"title":"LEFT JOIN 、RIGHT JOIN、INNER JOIN","slug":"left-join-、right-join、inner-join","link":"#left-join-、right-join、inner-join","children":[]},{"level":3,"title":"UNION、UNION ALL","slug":"union、union-all","link":"#union、union-all","children":[]},{"level":3,"title":"常用 MySQL 函数","slug":"常用-mysql-函数","link":"#常用-mysql-函数","children":[]},{"level":3,"title":"锁","slug":"锁","link":"#锁","children":[]},{"level":3,"title":"事务","slug":"事务","link":"#事务","children":[]},{"level":3,"title":"常见存储引擎","slug":"常见存储引擎","link":"#常见存储引擎","children":[]},{"level":3,"title":"常见索引","slug":"常见索引","link":"#常见索引","children":[]},{"level":3,"title":"聚族索引与非聚族索引的区别","slug":"聚族索引与非聚族索引的区别","link":"#聚族索引与非聚族索引的区别","children":[]},{"level":3,"title":"BTree 与 BTree-/BTree+ 索引原理","slug":"btree-与-btree-btree-索引原理","link":"#btree-与-btree-btree-索引原理","children":[]},{"level":3,"title":"分表数量级","slug":"分表数量级","link":"#分表数量级","children":[]},{"level":3,"title":"EXPLAIN 输出格式","slug":"explain-输出格式","link":"#explain-输出格式","children":[]},{"level":3,"title":"my.cnf 配置","slug":"my-cnf-配置","link":"#my-cnf-配置","children":[]},{"level":3,"title":"慢查询","slug":"慢查询","link":"#慢查询","children":[]},{"level":3,"title":"优化 MYSQL 的方法","slug":"优化-mysql-的方法","link":"#优化-mysql-的方法","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":9.74,"words":2922},"filePathRelative":"interview/MySQL/QA.md","excerpt":"<h1> 问题与简答</h1>\\n<h2> MySQL 篇</h2>\\n<h3> 体系结构</h3>\\n<p>组成部分：SQL 接口，解析器，优化器，缓存，存储引擎</p>\\n<figure><figcaption>体系结构图</figcaption></figure>\\n<ul>\\n<li>Connectors：不同语言中与 SQL 的交互</li>\\n<li>Management Serveices &amp; Utilities： 系统管理和控制工具</li>\\n<li>Connection Pool: 连接池</li>\\n<li>SQL Interface: SQL 接口</li>\\n<li>Parser: 解析器</li>\\n<li>Optimizer: 查询优化器</li>\\n<li>Cache 和 Buffer：查询缓存</li>\\n<li>Engine：存储引擎</li>\\n</ul>","autoDesc":true}');export{e as data};