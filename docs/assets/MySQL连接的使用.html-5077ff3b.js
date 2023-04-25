import{_ as l,W as s,X as a,Y as n,Z as i,$ as o,a2 as r,C as d}from"./framework-7d1f27fd.js";const t="/article/docs/assets/mysql-join-01-ac542f50.gif",u="/article/docs/assets/mysql-join-02-b73e7c2f.gif",c="/article/docs/assets/mysql-join-03-a48e554f.gif",b={},v=n("h1",{id:"mysql-连接的使用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mysql-连接的使用","aria-hidden":"true"},"#"),i(" MySQL 连接的使用")],-1),m=n("p",null,"在前几章节中，我们已经学会了如何在一张表中读取数据，这是相对简单的，但是在真正的应用中经常需要从多个数据表中读取数据。",-1),_=n("p",null,"本章节我们将向大家介绍如何使用 MySQL 的 JOIN 在两个或多个表中查询数据。",-1),h=n("p",null,"你可以在 SELECT, UPDATE 和 DELETE 语句中使用 Mysql 的 JOIN 来联合多表查询。",-1),O=n("p",null,"JOIN 按照功能大致分为如下三类：",-1),N=n("li",null,"INNER JOIN（内连接,或等值连接）：获取两个表中字段匹配关系的记录。",-1),g=n("li",null,"LEFT JOIN（左连接）：获取左表所有记录，即使右表没有对应匹配的记录。",-1),p={href:"http://static.runoob.com/download/runoob-mysql-join-test.sql",target:"_blank",rel:"noopener noreferrer"},y=r(`<h2 id="在命令提示符中使用-inner-join" tabindex="-1"><a class="header-anchor" href="#在命令提示符中使用-inner-join" aria-hidden="true">#</a> 在命令提示符中使用 INNER JOIN</h2><p>我们在RUNOOB数据库中有两张表 tcount_tbl 和 runoob_tbl。两张数据表数据如下：</p><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><p>尝试以下实例：</p><ul><li>测试实例数据</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql&gt; use RUNOOB;
Database changed
mysql&gt; SELECT * FROM tcount_tbl;
+---------------+--------------+
| runoob_author | runoob_count |
+---------------+--------------+
| 菜鸟教程  | 10           |
| RUNOOB.COM    | 20           |
| Google        | 22           |
+---------------+--------------+
3 rows in set (0.01 sec)
 
mysql&gt; SELECT * from runoob_tbl;
+-----------+---------------+---------------+-----------------+
| runoob_id | runoob_title  | runoob_author | submission_date |
+-----------+---------------+---------------+-----------------+
| 1         | 学习 PHP    | 菜鸟教程  | 2017-04-12      |
| 2         | 学习 MySQL  | 菜鸟教程  | 2017-04-12      |
| 3         | 学习 Java   | RUNOOB.COM    | 2015-05-01      |
| 4         | 学习 Python | RUNOOB.COM    | 2016-03-06      |
| 5         | 学习 C      | FK            | 2017-04-05      |
+-----------+---------------+---------------+-----------------+
5 rows in set (0.01 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来我们就使用MySQL的INNER JOIN(也可以省略 INNER 使用 JOIN，效果一样)来连接以上两张表来读取runoob_tbl表中所有runoob_author字段在tcount_tbl表对应的runoob_count字段值：</p><ul><li>INNER JOIN</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql&gt; SELECT a.runoob_id, a.runoob_author, b.runoob_count FROM runoob_tbl a INNER JOIN tcount_tbl b ON a.runoob_author = b.runoob_author;
+-------------+-----------------+----------------+
| a.runoob_id | a.runoob_author | b.runoob_count |
+-------------+-----------------+----------------+
| 1           | 菜鸟教程    | 10             |
| 2           | 菜鸟教程    | 10             |
| 3           | RUNOOB.COM      | 20             |
| 4           | RUNOOB.COM      | 20             |
+-------------+-----------------+----------------+
4 rows in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上 SQL 语句等价于：</p><ul><li>WHERE 子句</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql&gt; SELECT a.runoob_id, a.runoob_author, b.runoob_count FROM runoob_tbl a, tcount_tbl b WHERE a.runoob_author = b.runoob_author;
+-------------+-----------------+----------------+
| a.runoob_id | a.runoob_author | b.runoob_count |
+-------------+-----------------+----------------+
| 1           | 菜鸟教程    | 10             |
| 2           | 菜鸟教程    | 10             |
| 3           | RUNOOB.COM      | 20             |
| 4           | RUNOOB.COM      | 20             |
+-------------+-----------------+----------------+
4 rows in set (0.01 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+t+`" alt="mysql-join-图1" tabindex="0" loading="lazy"><figcaption>mysql-join-图1</figcaption></figure><h2 id="mysql-left-join" tabindex="-1"><a class="header-anchor" href="#mysql-left-join" aria-hidden="true">#</a> MySQL LEFT JOIN</h2><p>MySQL left join 与 join 有所不同。 MySQL LEFT JOIN 会读取左边数据表的全部数据，即便右边表无对应数据。</p><h3 id="实例-1" tabindex="-1"><a class="header-anchor" href="#实例-1" aria-hidden="true">#</a> 实例</h3><p>尝试以下实例，以 runoob_tbl 为左表，tcount_tbl 为右表，理解 MySQL LEFT JOIN 的应用：</p><ul><li>LEFT JOIN</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql&gt; SELECT a.runoob_id, a.runoob_author, b.runoob_count FROM runoob_tbl a LEFT JOIN tcount_tbl b ON a.runoob_author = b.runoob_author;
+-------------+-----------------+----------------+
| a.runoob_id | a.runoob_author | b.runoob_count |
+-------------+-----------------+----------------+
| 1           | 菜鸟教程    | 10             |
| 2           | 菜鸟教程    | 10             |
| 3           | RUNOOB.COM      | 20             |
| 4           | RUNOOB.COM      | 20             |
| 5           | FK              | NULL           |
+-------------+-----------------+----------------+
5 rows in set (0.01 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上实例中使用了 LEFT JOIN，该语句会读取左边的数据表 runoob_tbl 的所有选取的字段数据，即便在右侧表 tcount_tbl中 没有对应的 runoob_author 字段值。</p><figure><img src="`+u+`" alt="mysql-join-图2" tabindex="0" loading="lazy"><figcaption>mysql-join-图2</figcaption></figure><h2 id="mysql-right-join" tabindex="-1"><a class="header-anchor" href="#mysql-right-join" aria-hidden="true">#</a> MySQL RIGHT JOIN</h2><p>MySQL RIGHT JOIN 会读取右边数据表的全部数据，即便左边边表无对应数据。</p><h3 id="实例-2" tabindex="-1"><a class="header-anchor" href="#实例-2" aria-hidden="true">#</a> 实例</h3><p>尝试以下实例，以 runoob_tbl 为左表，tcount_tbl 为右表，理解MySQL RIGHT JOIN的应用：</p><ul><li>RIGHT JOIN</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mysql&gt; SELECT a.runoob_id, a.runoob_author, b.runoob_count FROM runoob_tbl a RIGHT JOIN tcount_tbl b ON a.runoob_author = b.runoob_author;
+-------------+-----------------+----------------+
| a.runoob_id | a.runoob_author | b.runoob_count |
+-------------+-----------------+----------------+
| 1           | 菜鸟教程    | 10             |
| 2           | 菜鸟教程    | 10             |
| 3           | RUNOOB.COM      | 20             |
| 4           | RUNOOB.COM      | 20             |
| NULL        | NULL            | 22             |
+-------------+-----------------+----------------+
5 rows in set (0.01 sec)
以上实例中使用了 RIGHT JOIN，该语句会读取右边的数据表 tcount_tbl 的所有选取的字段数据，即便在左侧表 runoob_tbl 中没有对应的runoob_author 字段值。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+c+'" alt="mysql-join-图3" tabindex="0" loading="lazy"><figcaption>mysql-join-图3</figcaption></figure><p><strong>本文转载自 菜鸟教程，<a href="http://www.runoob.com/mysql/mysql-join.html" rel="nofollow">《MySQL 连接的使用》</a></strong></p>',29);function f(E,I){const e=d("ExternalLinkIcon");return s(),a("div",null,[v,m,_,h,O,n("ul",null,[N,g,n("li",null,[i("RIGHT JOIN（右连接）： 与 LEFT JOIN 相反，用于获取右表所有记录，即使左表没有对应匹配的记录。 本章节使用的数据库结构及数据下载："),n("a",p,[i("runoob-mysql-join-test.sql"),o(e)]),i("。")])]),y])}const x=l(b,[["render",f],["__file","MySQL连接的使用.html.vue"]]);export{x as default};
