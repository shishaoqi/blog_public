import{_ as h}from"./mysql-system-10-323736a5.js";import{_ as s,W as c,X as o,Y as a,Z as e,$ as d,a1 as r,a2 as i,C as t}from"./framework-7d1f27fd.js";const u="/article/docs/assets/Optimistic-Pessimistic-Locks-d6ca6546.jpg",m="/article/docs/assets/index-d7d054de.png",p={},b=i('<h1 id="问题与简答" tabindex="-1"><a class="header-anchor" href="#问题与简答" aria-hidden="true">#</a> 问题与简答</h1><h2 id="mysql-篇" tabindex="-1"><a class="header-anchor" href="#mysql-篇" aria-hidden="true">#</a> MySQL 篇</h2><h3 id="体系结构" tabindex="-1"><a class="header-anchor" href="#体系结构" aria-hidden="true">#</a> 体系结构</h3><p>组成部分：SQL 接口，解析器，优化器，缓存，存储引擎</p><figure><img src="'+h+'" alt="体系结构图" tabindex="0" loading="lazy"><figcaption>体系结构图</figcaption></figure><ul><li>Connectors：不同语言中与 SQL 的交互</li><li>Management Serveices &amp; Utilities： 系统管理和控制工具</li><li>Connection Pool: 连接池</li><li>SQL Interface: SQL 接口</li><li>Parser: 解析器</li><li>Optimizer: 查询优化器</li><li>Cache 和 Buffer：查询缓存</li><li>Engine：存储引擎</li></ul>',6),E=i('<h3 id="基础操作" tabindex="-1"><a class="header-anchor" href="#基础操作" aria-hidden="true">#</a> 基础操作</h3><h4 id="数据库管理" tabindex="-1"><a class="header-anchor" href="#数据库管理" aria-hidden="true">#</a> 数据库管理</h4><p>连接数据库、查看所有库、选择库、创建库、删除库</p><p>查看所有表、查看表结构、创建表、删除表</p><p>添加字段、删除字段、修改字段</p><h4 id="crud" tabindex="-1"><a class="header-anchor" href="#crud" aria-hidden="true">#</a> CRUD</h4><p>INSERT、SELECT、UPDATE、DELETE</p><h4 id="单表查询" tabindex="-1"><a class="header-anchor" href="#单表查询" aria-hidden="true">#</a> 单表查询</h4><p>所有字段、指定字段、WHERE、IN、BETWEEN AND、LIKE、AND、OR、DISTINCT、ORDER BY、GROUP BY、LIMIT</p><h4 id="多表查询" tabindex="-1"><a class="header-anchor" href="#多表查询" aria-hidden="true">#</a> 多表查询</h4><p>连接查询、子查询、合并结果</p><h3 id="数据库设计范式" tabindex="-1"><a class="header-anchor" href="#数据库设计范式" aria-hidden="true">#</a> 数据库设计范式</h3><ul><li>第一范式：属性具有原子性，不可再分解，即不能表中有表</li><li>第二范式：唯一性约束，每条记录有唯一标示，所有的非主键字段均需依赖于主键字段</li><li>第三范式：冗余性约束，非主键字段间不能相互依赖</li></ul><h3 id="数据库设计原则" tabindex="-1"><a class="header-anchor" href="#数据库设计原则" aria-hidden="true">#</a> 数据库设计原则</h3><ul><li>避免冗余属性，冗余属性会带来数据不一致性</li><li>一个表只存储它应该存储的信息，和此表无关的信息放到另一个表去存储，表之间尽量解耦</li><li>一个字段中不要出现分隔符，或者在一个字段中存储多个信息</li></ul><h3 id="char-和-varchar-数据类型区别" tabindex="-1"><a class="header-anchor" href="#char-和-varchar-数据类型区别" aria-hidden="true">#</a> char 和 varchar 数据类型区别</h3><ul><li>char：擅于存储经常改变的值，或者长度相对固定的值。比如 type、ip 地址或 md5 之类的数据，不容易产生碎片</li><li>varchar：善于存储值的长短不一的列，也是用的最多的一种类型，节省磁盘空间，保存可变长度字符串。这也是 innodb 官方推荐的类型</li></ul><h3 id="left-join-、right-join、inner-join" tabindex="-1"><a class="header-anchor" href="#left-join-、right-join、inner-join" aria-hidden="true">#</a> LEFT JOIN 、RIGHT JOIN、INNER JOIN</h3><ul><li>LEFT JOIN(左连接)：获取左表所有记录，即使右表没有对应匹配的记录</li><li>RIGHT JOIN(右连接)： 与 LEFT JOIN 相反，用于获取右表所有记录，即使左表没有对应匹配的记录</li><li>INNER JOIN(内连接)：获取两个表中字段匹配关系的记录</li></ul>',19),f=i(`<h3 id="union、union-all" tabindex="-1"><a class="header-anchor" href="#union、union-all" aria-hidden="true">#</a> UNION、UNION ALL</h3><ul><li>UNION 操作符用于连接两个以上的 SELECT 语句的结果组合到一个结果集合中。多个 SELECT 语句会删除重复的数据</li><li>UNION ALL 操作符重复数据全部显示，不去重</li></ul><h3 id="常用-mysql-函数" tabindex="-1"><a class="header-anchor" href="#常用-mysql-函数" aria-hidden="true">#</a> 常用 MySQL 函数</h3><h4 id="数学函数" tabindex="-1"><a class="header-anchor" href="#数学函数" aria-hidden="true">#</a> 数学函数</h4><ul><li>floor(x) 返回不大于 x 的最大整数值</li><li>ceil/ceiling(x) 返回不小于 x 的最小整数</li><li>round(x) 四舍五入</li><li>rand() 随机函数[0, 1)</li><li>abs(x) 返回 x 的绝对值</li></ul><h4 id="字符串函数" tabindex="-1"><a class="header-anchor" href="#字符串函数" aria-hidden="true">#</a> 字符串函数</h4><ul><li>concat(str1, str2, ...) 将参数连接成字符串返回</li><li>length(str) 返回字符串长度</li></ul><h4 id="日期和时间函数" tabindex="-1"><a class="header-anchor" href="#日期和时间函数" aria-hidden="true">#</a> 日期和时间函数</h4><ul><li>now() 当前时间</li><li>curdate() 当前日期</li></ul><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT UNIX_TIMESTAMP(&#39;2019-05-07 22:55:00&#39;); #1557240900
SELECT FROM_UNIXTIME(1557240900); #2019-05-07 22:55:00
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="系统信息函数" tabindex="-1"><a class="header-anchor" href="#系统信息函数" aria-hidden="true">#</a> 系统信息函数</h4><ul><li>VERSION() 返回数据库的版本号</li><li>LAST_INSERT_ID() 返回最后生成的 AUTO_INCREMENT 值</li></ul><h4 id="加密函数" tabindex="-1"><a class="header-anchor" href="#加密函数" aria-hidden="true">#</a> 加密函数</h4><ul><li>PASSWORD(str) 对字符串 str 进行加密</li><li>MD5(str) 对字符串 str 进行加密</li></ul><h4 id="格式化函数" tabindex="-1"><a class="header-anchor" href="#格式化函数" aria-hidden="true">#</a> 格式化函数</h4><ul><li>FORMAT(x, n) 可以将数字 x 进行格式化，保留到小数点后 n 位，四舍五入</li></ul><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT FORMAT(2.7895, 2); #2.79
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="锁" tabindex="-1"><a class="header-anchor" href="#锁" aria-hidden="true">#</a> 锁</h3><h4 id="用途" tabindex="-1"><a class="header-anchor" href="#用途" aria-hidden="true">#</a> 用途</h4><p>多个查询需要在同一时刻修改数据，会产生并发控制的问题。使用锁可以有效解决这个问题</p><h4 id="乐观锁与悲观锁" tabindex="-1"><a class="header-anchor" href="#乐观锁与悲观锁" aria-hidden="true">#</a> 乐观锁与悲观锁</h4><p>我们都知道锁的种类一般分为乐观锁和悲观锁两种，InnoDB 存储引擎中使用的就是悲观锁，而按照锁的粒度划分，也可以分成行锁和表锁。</p><ul><li>乐观锁是一种思想，它其实并不是一种真正的『锁』，它会先尝试对资源进行修改，在写回时判断资源是否进行了改变，如果没有发生改变就会写回，否则就会进行重试，在整个的执行过程中其实都没有对数据库进行加锁；</li><li>悲观锁就是一种真正的锁了，它会在获取资源前对资源进行加锁，确保同一时刻只有有限的线程能够访问该资源，其他想要尝试获取资源的操作都会进入等待状态，直到该线程完成了对资源的操作并且释放了锁后，其他线程才能重新操作资源；</li></ul><p>虽然乐观锁和悲观锁在本质上并不是同一种东西，一个是一种思想，另一个是一种真正的锁，但是它们都是一种并发控制机制。</p><figure><img src="`+u+'" alt="体系结构图" tabindex="0" loading="lazy"><figcaption>体系结构图</figcaption></figure><p>乐观锁不会存在死锁的问题，但是由于更新后验证，所以当冲突频率和重试成本较高时更推荐使用悲观锁，而需要非常高的响应速度并且并发量非常大的时候使用乐观锁就能较好的解决问题，在这时使用悲观锁就可能出现严重的性能问题；在选择并发控制机制时，需要综合考虑上面的四个方面（冲突频率、重试成本、响应速度和并发量）进行选择。</p><h4 id="读写锁" tabindex="-1"><a class="header-anchor" href="#读写锁" aria-hidden="true">#</a> 读写锁</h4><ul><li>共享锁（读锁）：允许事务对一条行数据进行读取；</li><li>互斥锁（写锁,也叫排他锁）：允许事务对一条行数据进行删除或更新；</li></ul><h4 id="锁粒度" tabindex="-1"><a class="header-anchor" href="#锁粒度" aria-hidden="true">#</a> 锁粒度</h4><ul><li>表锁：开销最小，对表进行写操作，需要获得写锁，会阻塞该表的所有读写操作</li><li>行级锁：最大锁开销，可以最大程度地支持并发处理</li></ul>',30),x={href:"https://draveness.me/mysql-innodb/",target:"_blank",rel:"noopener noreferrer"},y=i('<h3 id="事务" tabindex="-1"><a class="header-anchor" href="#事务" aria-hidden="true">#</a> 事务</h3><p>事务就是一组原子性的 SQL 查询，或者说一个独立的工作单元。事务内的语句，要么全部执行成功，要么全部执行失败</p><p>ACID 特性：原子性(atomicity)、一致性(consistency)、隔离性(isolation)、持久性(durability)</p><h4 id="隔离级别" tabindex="-1"><a class="header-anchor" href="#隔离级别" aria-hidden="true">#</a> 隔离级别</h4><ul><li>未提交读(READ UNCOMMITTED)：事务中的修改，未提交，其他事务也是可见</li></ul><blockquote><p><code>脏读</code>(Dirty Read)：事务读取未提交的数据</p></blockquote><ul><li><p>提交读(READ COMMITTED)：事务未提交，对自己可见，两次同样查询，可能得到不同结果</p></li><li><p>可重复读(REPEATABLE READ)：同一个事务多次读取结果一致。解决脏读问题</p></li></ul><blockquote><p>MySQL 默认事务隔离级别</p></blockquote><ul><li>可串行化(SERIALIZABLE)：强制事务串行执行</li></ul><h4 id="死锁" tabindex="-1"><a class="header-anchor" href="#死锁" aria-hidden="true">#</a> 死锁</h4><p>多个事务在同一资源上相互占用，并请求锁定对方占用资源，从而导致恶性循环的现象</p><p>InnoDB 目前处理方法：将持有最少行级排他锁的事务进行回滚</p><h4 id="事务日志" tabindex="-1"><a class="header-anchor" href="#事务日志" aria-hidden="true">#</a> 事务日志</h4><p>事务日志可以帮助提高事务的效率</p><h4 id="mysql-中的事务" tabindex="-1"><a class="header-anchor" href="#mysql-中的事务" aria-hidden="true">#</a> MySQL 中的事务</h4><p>MySQL 默认采用自动提交(AUTOCOMMIT)模式，每个查询都当作一个事务执行提交操作</p><h3 id="常见存储引擎" tabindex="-1"><a class="header-anchor" href="#常见存储引擎" aria-hidden="true">#</a> 常见存储引擎</h3><h4 id="innodb" tabindex="-1"><a class="header-anchor" href="#innodb" aria-hidden="true">#</a> InnoDB</h4><ul><li>很重要的存储引擎，很多个人和公司都对其贡献代码，而不仅仅是 Oracle 公司的开发团队</li><li>支持事务，行级锁，删除或者增加索引时不需要复制全表数据</li><li>InnoDB 采用 MVCC 来支持高并发，实现了四个标准的隔离级别</li><li>InnoDB 表是基于聚族索引建立的，聚族索引对主键查询有很高的性能</li><li>InnoDB 内部做了很多优化，包括可预测性预读，加速读操作的自适应哈希索引，加速插入操作的插入缓冲区</li><li>作为事务性的存储引擎，InnoDB 通过一些机制和工具支持真正的热备份</li></ul><h4 id="myisam" tabindex="-1"><a class="header-anchor" href="#myisam" aria-hidden="true">#</a> MyISAM</h4><ul><li>不支持事务和行级锁，崩溃后无法安全恢复，表锁非常影响性能</li><li>MyISAM 对整张表加锁，而不是针对行。读取时对需要读到的表加共享锁，写入则加排它锁。在表有读取查询的同时，也可以插入新记录(支持并发插入)</li><li>支持延迟更新索引健，极大的提升写入性能</li><li>支持全文索引，可以支持复杂的查询</li><li>MyISAM 将表存储在两个文件中，数据文件和索引文件</li></ul><h3 id="常见索引" tabindex="-1"><a class="header-anchor" href="#常见索引" aria-hidden="true">#</a> 常见索引</h3><h4 id="索引概念" tabindex="-1"><a class="header-anchor" href="#索引概念" aria-hidden="true">#</a> 索引概念</h4><p>索引是存储引擎用于快速找到记录的一种数据结构</p><h4 id="索引分类" tabindex="-1"><a class="header-anchor" href="#索引分类" aria-hidden="true">#</a> 索引分类</h4><figure><img src="'+m+'" alt="索引分类" tabindex="0" loading="lazy"><figcaption>索引分类</figcaption></figure><h4 id="索引创建" tabindex="-1"><a class="header-anchor" href="#索引创建" aria-hidden="true">#</a> 索引创建</h4><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>ALTER TABLE `table_name` ADD INDEX index_name (`column`); #普通索引\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>ALTER TABLE `table_name` ADD UNIQUE (`column`); #唯一索引\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>ALTER TABLE `table_name` ADD PRIMARY KEY (`column`); #主键索引\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>ALTER TABLE `table_name` ADD FULLTEXT (`column`); #全文索引\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>ALTER TABLE `table_name` ADD INDEX index_name (`column1`, `column2`, `column3`); #组合索引\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="索引区别" tabindex="-1"><a class="header-anchor" href="#索引区别" aria-hidden="true">#</a> 索引区别</h4><ul><li>普通索引：最基本的索引，没有任何限制</li><li>唯一索引：与&quot;普通索引&quot;类似，不同的就是：索引列的值必须唯一，但允许有空值</li><li>主键索引：它是一种特殊的唯一索引，不允许有空值</li><li>全文索引：仅可用于 MyISAM 表，针对较大的数据，生成全文索引很耗时好空间</li><li>组合索引：为了更多的提高 MySQL 效率可建立组合索引，遵循&quot;最左前缀&quot;原则</li></ul><h3 id="聚族索引与非聚族索引的区别" tabindex="-1"><a class="header-anchor" href="#聚族索引与非聚族索引的区别" aria-hidden="true">#</a> 聚族索引与非聚族索引的区别</h3><ul><li>按物理存储分类：聚簇索引(clustered index)、非聚簇索引(non-clustered index)</li><li>聚簇索引的叶子节点就是数据节点，而非聚簇索引的叶子节点仍然是索引节点，只不过有指向对应数据块的指针</li></ul><h3 id="btree-与-btree-btree-索引原理" tabindex="-1"><a class="header-anchor" href="#btree-与-btree-btree-索引原理" aria-hidden="true">#</a> BTree 与 BTree-/BTree+ 索引原理</h3><ul><li>BTree</li></ul><p>二叉树导致树高度非常高，逻辑上很近的节点，物理上非常远，无法利用局部性，IO 次数多，查找效率低</p><ul><li>BTree-</li></ul><p>每个节点都是二元数组[key,data]，所有节点都可以存储数据，key 为索引，data 为索引外的数据。插入删除数据会破坏 BTree 性质，插入数据时候，需要对数据进行分裂、合并、转移等操作保持 BTree 性质，造成 IO 操作频繁</p><ul><li>BTree+</li></ul><p>非叶子节点不存储 data，只存储索引 key，只有叶子节点才存储 data</p><ul><li>MySQL中的 BTree+</li></ul><p>在经典 BTree+ 的基础上进行了优化，增加了顺序访问指针。在 BTree+ 的每个叶子节点增加了一个指向相邻叶子节点的指针，形成了带顺序访问指针的 BTree+，提高了区间访问性能</p><h3 id="分表数量级" tabindex="-1"><a class="header-anchor" href="#分表数量级" aria-hidden="true">#</a> 分表数量级</h3><p>MySQL 单表容量在<code>500万</code>左右，性能处于最佳状态，此时，MySQL 的 BTREE 索引树高在3～5之间</p><h3 id="explain-输出格式" tabindex="-1"><a class="header-anchor" href="#explain-输出格式" aria-hidden="true">#</a> EXPLAIN 输出格式</h3><table><thead><tr><th>Column</th><th>JSON Name</th><th>含义</th></tr></thead><tbody><tr><td>id</td><td>select_id</td><td>SELECT 标识符</td></tr><tr><td>select_type</td><td>None</td><td>SELECT 类型</td></tr><tr><td>table</td><td>table_name</td><td>输出行描述的表的表名</td></tr><tr><td>partitions</td><td>partitions</td><td>匹配的分区</td></tr><tr><td>type</td><td>access_type</td><td>连接类型</td></tr><tr><td>possible_keys</td><td>possible_keys</td><td>可供选择使用的索引</td></tr><tr><td>key</td><td>key</td><td>实际使用的索引</td></tr><tr><td>key_len</td><td>key_length</td><td>实际使用的索引的长度</td></tr><tr><td>ref</td><td>ref</td><td>与索引进行比较的列，也就是关联表使用的列</td></tr><tr><td>rows</td><td>rows</td><td>将要被检查的估算的行数</td></tr><tr><td>filtered</td><td>filtered</td><td>被表条件过滤的行数的百分比</td></tr><tr><td>Extra</td><td>None</td><td>附件信息</td></tr></tbody></table><h3 id="my-cnf-配置" tabindex="-1"><a class="header-anchor" href="#my-cnf-配置" aria-hidden="true">#</a> my.cnf 配置</h3><h3 id="慢查询" tabindex="-1"><a class="header-anchor" href="#慢查询" aria-hidden="true">#</a> 慢查询</h3><h3 id="优化-mysql-的方法" tabindex="-1"><a class="header-anchor" href="#优化-mysql-的方法" aria-hidden="true">#</a> 优化 MYSQL 的方法</h3><ul><li>数据超过一定数量或者体积，请拆分表，垂直或者水平分</li><li>务必有自增主键。通过自增主键来查数据是最快的。</li><li>常用的查询字段建立联合索引，写 SQL 一定要尊从最左原则，用到这个索引。</li><li>不要把逻辑运算放到 sql 里</li></ul>',53);function L(T,I){const l=t("RouterLink"),n=t("ExternalLinkIcon");return c(),o("div",null,[b,a("p",null,[e("拓展阅读 "),d(l,{to:"/interview/MySQL/02.MySQL%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84.html"},{default:r(()=>[e("《MySQL体系结构》")]),_:1})]),E,a("p",null,[e("拓展阅读 "),d(l,{to:"/interview/MySQL/01.MySQL%E8%BF%9E%E6%8E%A5%E7%9A%84%E4%BD%BF%E7%94%A8.html"},{default:r(()=>[e("《MySQL 连接的使用》")]),_:1})]),f,a("p",null,[e("拓展阅读 "),a("a",x,[e("《『浅入浅出』MySQL 和 InnoDB》"),d(n)])]),y])}const v=s(p,[["render",L],["__file","QA.html.vue"]]);export{v as default};