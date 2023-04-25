const l=JSON.parse('{"key":"v-2fd8622b","path":"/interview/PHP/QA.html","title":"问题与简答","lang":"zh-CN","frontmatter":{"description":"问题与简答 PHP 篇 echo、print、print_r、var_dump 区别 echo和print是语言结构、print_r和var_dump是普通函数 echo：输出一个或多个字符串 print：输出字符串 print_r：打印关于变量的易于理解的信息 var_dump：打印关于变量的易于理解的信息(带类型)","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/article/docs/interview/PHP/QA.html"}],["meta",{"property":"og:site_name","content":"博客"}],["meta",{"property":"og:title","content":"问题与简答"}],["meta",{"property":"og:description","content":"问题与简答 PHP 篇 echo、print、print_r、var_dump 区别 echo和print是语言结构、print_r和var_dump是普通函数 echo：输出一个或多个字符串 print：输出字符串 print_r：打印关于变量的易于理解的信息 var_dump：打印关于变量的易于理解的信息(带类型)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/article/docs/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"问题与简答"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"问题与简答\\",\\"image\\":[\\"https://mister-hope.github.io/article/docs/\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"PHP 篇","slug":"php-篇","link":"#php-篇","children":[{"level":3,"title":"echo、print、print_r、var_dump 区别","slug":"echo、print、print-r、var-dump-区别","link":"#echo、print、print-r、var-dump-区别","children":[]},{"level":3,"title":"单引号和双引号的区别","slug":"单引号和双引号的区别","link":"#单引号和双引号的区别","children":[]},{"level":3,"title":"isset 和 empty 的区别","slug":"isset-和-empty-的区别","link":"#isset-和-empty-的区别","children":[]},{"level":3,"title":"static、self、$this 的区别","slug":"static、self、-this-的区别","link":"#static、self、-this-的区别","children":[]},{"level":3,"title":"include、require、include_once、require_once 的区别","slug":"include、require、include-once、require-once-的区别","link":"#include、require、include-once、require-once-的区别","children":[]},{"level":3,"title":"常见数组函数","slug":"常见数组函数","link":"#常见数组函数","children":[]},{"level":3,"title":"Cookie 和 Session","slug":"cookie-和-session","link":"#cookie-和-session","children":[]},{"level":3,"title":"预定义变量","slug":"预定义变量","link":"#预定义变量","children":[]},{"level":3,"title":"传值和传引用的区别","slug":"传值和传引用的区别","link":"#传值和传引用的区别","children":[]},{"level":3,"title":"构造函数和析构函数","slug":"构造函数和析构函数","link":"#构造函数和析构函数","children":[]},{"level":3,"title":"魔术方法","slug":"魔术方法","link":"#魔术方法","children":[]},{"level":3,"title":"public、protected、private、final 区别","slug":"public、protected、private、final-区别","link":"#public、protected、private、final-区别","children":[]},{"level":3,"title":"客户端/服务端 IP 获取，了解代理透传 实际IP 的概念","slug":"客户端-服务端-ip-获取-了解代理透传-实际ip-的概念","link":"#客户端-服务端-ip-获取-了解代理透传-实际ip-的概念","children":[]},{"level":3,"title":"类的静态调用和实例化调用","slug":"类的静态调用和实例化调用","link":"#类的静态调用和实例化调用","children":[]},{"level":3,"title":"接口和抽象的区别","slug":"接口和抽象的区别","link":"#接口和抽象的区别","children":[]},{"level":3,"title":"PHP 不实例化调用方法","slug":"php-不实例化调用方法","link":"#php-不实例化调用方法","children":[]},{"level":3,"title":"php.ini 配置选项","slug":"php-ini-配置选项","link":"#php-ini-配置选项","children":[]},{"level":3,"title":"php-fpm.conf 配置","slug":"php-fpm-conf-配置","link":"#php-fpm-conf-配置","children":[]},{"level":3,"title":"502、504 错误产生原因及解决方式","slug":"_502、504-错误产生原因及解决方式","link":"#_502、504-错误产生原因及解决方式","children":[]},{"level":3,"title":"如何返回一个301重定向","slug":"如何返回一个301重定向","link":"#如何返回一个301重定向","children":[]},{"level":3,"title":"PHP 与 MySQL 连接方式","slug":"php-与-mysql-连接方式","link":"#php-与-mysql-连接方式","children":[]},{"level":3,"title":"MySQL、MySQLi、PDO 区别","slug":"mysql、mysqli、pdo-区别","link":"#mysql、mysqli、pdo-区别","children":[]},{"level":3,"title":"数据库持久连接","slug":"数据库持久连接","link":"#数据库持久连接","children":[]},{"level":3,"title":"代码执行过程","slug":"代码执行过程","link":"#代码执行过程","children":[]},{"level":3,"title":"base64 编码原理","slug":"base64-编码原理","link":"#base64-编码原理","children":[]},{"level":3,"title":"ip2long 实现","slug":"ip2long-实现","link":"#ip2long-实现","children":[]},{"level":3,"title":"MVC 的理解","slug":"mvc-的理解","link":"#mvc-的理解","children":[]},{"level":3,"title":"主流 PHP 框架特点","slug":"主流-php-框架特点","link":"#主流-php-框架特点","children":[]},{"level":3,"title":"对象关系映射/ORM","slug":"对象关系映射-orm","link":"#对象关系映射-orm","children":[]},{"level":3,"title":"链式调用实现","slug":"链式调用实现","link":"#链式调用实现","children":[]},{"level":3,"title":"异常处理","slug":"异常处理","link":"#异常处理","children":[]},{"level":3,"title":"串行、并行、并发的区别","slug":"串行、并行、并发的区别","link":"#串行、并行、并发的区别","children":[]},{"level":3,"title":"同步与异步的理解","slug":"同步与异步的理解","link":"#同步与异步的理解","children":[]},{"level":3,"title":"阻塞与非阻塞的理解","slug":"阻塞与非阻塞的理解","link":"#阻塞与非阻塞的理解","children":[]},{"level":3,"title":"同步阻塞与非同步阻塞的理解","slug":"同步阻塞与非同步阻塞的理解","link":"#同步阻塞与非同步阻塞的理解","children":[]},{"level":3,"title":"异步阻塞与异步非阻塞的理解","slug":"异步阻塞与异步非阻塞的理解","link":"#异步阻塞与异步非阻塞的理解","children":[]},{"level":3,"title":"如何实现异步调用","slug":"如何实现异步调用","link":"#如何实现异步调用","children":[]},{"level":3,"title":"多进程同时写一个文件","slug":"多进程同时写一个文件","link":"#多进程同时写一个文件","children":[]},{"level":3,"title":"PHP 进程模型，进程通讯方式，进程线程区别","slug":"php-进程模型-进程通讯方式-进程线程区别","link":"#php-进程模型-进程通讯方式-进程线程区别","children":[]},{"level":3,"title":"PHP 支持回调的函数，实现一个","slug":"php-支持回调的函数-实现一个","link":"#php-支持回调的函数-实现一个","children":[]},{"level":3,"title":"发起 HTTP 请求有哪几种方式，它们有何区别","slug":"发起-http-请求有哪几种方式-它们有何区别","link":"#发起-http-请求有哪几种方式-它们有何区别","children":[]},{"level":3,"title":"php for while foreach 迭代数组时候，哪个效率最高","slug":"php-for-while-foreach-迭代数组时候-哪个效率最高","link":"#php-for-while-foreach-迭代数组时候-哪个效率最高","children":[]},{"level":3,"title":"弱类型变量如何实现","slug":"弱类型变量如何实现","link":"#弱类型变量如何实现","children":[]},{"level":3,"title":"PHP 拓展初始化","slug":"php-拓展初始化","link":"#php-拓展初始化","children":[]},{"level":3,"title":"如何获取扩展安装路径","slug":"如何获取扩展安装路径","link":"#如何获取扩展安装路径","children":[]},{"level":3,"title":"垃圾回收机制","slug":"垃圾回收机制","link":"#垃圾回收机制","children":[]},{"level":3,"title":"Trait","slug":"trait","link":"#trait","children":[]},{"level":3,"title":"yield 是什么，说个使用场景 yield、yield 核心原理是什么","slug":"yield-是什么-说个使用场景-yield、yield-核心原理是什么","link":"#yield-是什么-说个使用场景-yield、yield-核心原理是什么","children":[]},{"level":3,"title":"traits 与 interfaces 区别 及 traits 解决了什么痛点","slug":"traits-与-interfaces-区别-及-traits-解决了什么痛点","link":"#traits-与-interfaces-区别-及-traits-解决了什么痛点","children":[]},{"level":3,"title":"如何 foreach 迭代对象、如何数组化操作对象 $obj[key]、如何函数化对象 $obj(123);","slug":"如何-foreach-迭代对象、如何数组化操作对象-obj-key-、如何函数化对象-obj-123","link":"#如何-foreach-迭代对象、如何数组化操作对象-obj-key-、如何函数化对象-obj-123","children":[]},{"level":3,"title":"Swoole 适用场景，协程实现方式","slug":"swoole-适用场景-协程实现方式","link":"#swoole-适用场景-协程实现方式","children":[]},{"level":3,"title":"PHP 数组底层实现 （HashTable + Linked list）","slug":"php-数组底层实现-hashtable-linked-list","link":"#php-数组底层实现-hashtable-linked-list","children":[]},{"level":3,"title":"Copy on write 原理，何时 GC","slug":"copy-on-write-原理-何时-gc","link":"#copy-on-write-原理-何时-gc","children":[]},{"level":3,"title":"如何解决 PHP 内存溢出问题","slug":"如何解决-php-内存溢出问题","link":"#如何解决-php-内存溢出问题","children":[]},{"level":3,"title":"ZVAL","slug":"zval","link":"#zval","children":[]},{"level":3,"title":"HashTable","slug":"hashtable","link":"#hashtable","children":[]},{"level":3,"title":"PHP7 新特性","slug":"php7-新特性","link":"#php7-新特性","children":[]},{"level":3,"title":"PHP7 底层优化","slug":"php7-底层优化","link":"#php7-底层优化","children":[]},{"level":3,"title":"PSR 介绍，PSR-1, 2, 4, 7","slug":"psr-介绍-psr-1-2-4-7","link":"#psr-介绍-psr-1-2-4-7","children":[]},{"level":3,"title":"Xhprof 、Xdebug 性能调试工具使用","slug":"xhprof-、xdebug-性能调试工具使用","link":"#xhprof-、xdebug-性能调试工具使用","children":[]},{"level":3,"title":"字符串、数字比较大小的原理，注意 0 开头的8进制、0x 开头16进制","slug":"字符串、数字比较大小的原理-注意-0-开头的8进制、0x-开头16进制","link":"#字符串、数字比较大小的原理-注意-0-开头的8进制、0x-开头16进制","children":[]},{"level":3,"title":"BOM 头是什么，怎么除去","slug":"bom-头是什么-怎么除去","link":"#bom-头是什么-怎么除去","children":[]},{"level":3,"title":"模板引擎是什么，解决什么问题、实现原理（Smarty、Twig、Blade）","slug":"模板引擎是什么-解决什么问题、实现原理-smarty、twig、blade","link":"#模板引擎是什么-解决什么问题、实现原理-smarty、twig、blade","children":[]},{"level":3,"title":"写一个函数，尽可能高效的从一个标准 URL 中取出文件的扩展名","slug":"写一个函数-尽可能高效的从一个标准-url-中取出文件的扩展名","link":"#写一个函数-尽可能高效的从一个标准-url-中取出文件的扩展名","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":17.31,"words":5194},"filePathRelative":"interview/PHP/QA.md","excerpt":"<h1> 问题与简答</h1>\\n<h2> PHP 篇</h2>\\n<h3> echo、print、print_r、var_dump 区别</h3>\\n<blockquote>\\n<p><code>echo</code>和<code>print</code>是语言结构、<code>print_r</code>和<code>var_dump</code>是普通函数</p>\\n</blockquote>\\n<ul>\\n<li>\\n<p>echo：输出一个或多个字符串</p>\\n</li>\\n<li>\\n<p>print：输出字符串</p>\\n</li>\\n<li>\\n<p>print_r：打印关于变量的易于理解的信息</p>\\n</li>\\n<li>\\n<p>var_dump：打印关于变量的易于理解的信息(带类型)</p>\\n</li>\\n</ul>","autoDesc":true}');export{l as data};