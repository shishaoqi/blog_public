import{_ as n,W as t,X as i,Y as a,Z as l,$ as r,a2 as e,C as d}from"./framework-7d1f27fd.js";const p="/article/docs/assets/ddos-4612b6aa.png",o={},c=e(`<h1 id="问题与简答" tabindex="-1"><a class="header-anchor" href="#问题与简答" aria-hidden="true">#</a> 问题与简答</h1><h2 id="安全篇" tabindex="-1"><a class="header-anchor" href="#安全篇" aria-hidden="true">#</a> 安全篇</h2><h3 id="跨站脚本攻击-xss" tabindex="-1"><a class="header-anchor" href="#跨站脚本攻击-xss" aria-hidden="true">#</a> 跨站脚本攻击(XSS)</h3><p>跨站脚本攻击(Cross Site Script，简称 XSS)，利用网页开发时留下的漏洞，通过巧妙的方法注入恶意指令代码到网页，使用户加载并执行攻击者恶意制造的网页程序</p><h4 id="xss-示例" tabindex="-1"><a class="header-anchor" href="#xss-示例" aria-hidden="true">#</a> XSS 示例</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$input</span> <span class="token operator">=</span> <span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;param&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;&lt;div&gt;&quot;</span> <span class="token operator">.</span> <span class="token variable">$input</span> <span class="token operator">.</span> <span class="token string double-quoted-string">&quot;&lt;/div&gt;&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://blog.maplemark.cn/test.php?param=这是一个测试!
https://blog.maplemark.cn/test.php?param=&lt;script&gt;alert(/xss/)&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="xss-分类" tabindex="-1"><a class="header-anchor" href="#xss-分类" aria-hidden="true">#</a> XSS 分类</h4><ul><li>反射型 XSS：简单地将用户输入的数据反射给浏览器</li><li>存储型 XSS：把用户输入的数据存储在服务器端</li><li>DOM Based XSS：修改页面 DOM 节点形成的 XSS</li></ul><h4 id="xss-防御" tabindex="-1"><a class="header-anchor" href="#xss-防御" aria-hidden="true">#</a> XSS 防御</h4><ul><li>为 Cookie 设置 HttpOnly，避免 Cookie 被劫持泄露</li><li>对输入/输出进行检查，明确编码方式</li></ul><h3 id="跨站点请求伪造-csrf" tabindex="-1"><a class="header-anchor" href="#跨站点请求伪造-csrf" aria-hidden="true">#</a> 跨站点请求伪造(CSRF)</h3><p>跨站请求伪造(Cross-site request forgery,简称 CSRF)， 是一种挟制用户在当前已登录的 Web 应用程序上执行非本意的操作的攻击方法</p><h4 id="csrf-示例" tabindex="-1"><a class="header-anchor" href="#csrf-示例" aria-hidden="true">#</a> CSRF 示例</h4><ul><li>在私有域构造页面P</li></ul>`,15),h={href:"https://blog.maplemark.cn/csrf.html",target:"_blank",rel:"noopener noreferrer"},u=e('<p>其内容为</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--仅用于演示，假设该点赞为 GET--&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://segmentfault.com/api/article/1190000019050946/like?_=0faa0315ff95872d8b0f8da02e343ac7<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>诱使目标用户访问页面P</li></ul><p>如果你已经访问过 SF 网站，并且已经登录。可以看到在访问页面P之后，已经对 SF 文章进行点赞了</p><h4 id="csrf-防御" tabindex="-1"><a class="header-anchor" href="#csrf-防御" aria-hidden="true">#</a> CSRF 防御</h4><ul><li>增加验证码(简单有效)</li><li>检查请求来源是否合法</li><li>增加随机 token</li></ul><h3 id="sql-注入" tabindex="-1"><a class="header-anchor" href="#sql-注入" aria-hidden="true">#</a> SQL 注入</h3><p>输入的字符串中注入 SQL 指令，若程序当中忽略了字符检查，导致恶意指令被执行而遭到破坏或入侵</p><h4 id="sql-注入示例" tabindex="-1"><a class="header-anchor" href="#sql-注入示例" aria-hidden="true">#</a> SQL 注入示例</h4><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token variable">$id</span> <span class="token operator">=</span> <span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token variable">$sql</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;SELECT * FROM `user` WHERE `id`=<span class="token interpolation"><span class="token punctuation">{</span><span class="token variable">$id</span><span class="token punctuation">}</span></span>&quot;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>将传递参数改为</p><blockquote><p>1;DROP TABLE OrdersTable--</p></blockquote><h4 id="sql-注入防御" tabindex="-1"><a class="header-anchor" href="#sql-注入防御" aria-hidden="true">#</a> SQL 注入防御</h4><ul><li>使用预编译语句绑定变量(最佳方式)</li><li>使用安全的存储过程(也可能存在注入问题)</li><li>检查输入数据的数据类型(可对抗注入)</li><li>数据库最小权限原则</li></ul><h3 id="应用层拒绝服务攻击" tabindex="-1"><a class="header-anchor" href="#应用层拒绝服务攻击" aria-hidden="true">#</a> 应用层拒绝服务攻击</h3><h4 id="ddos-简介" tabindex="-1"><a class="header-anchor" href="#ddos-简介" aria-hidden="true">#</a> DDOS 简介</h4><p>DDOS 又称为分布式拒绝服务，全称是 Distributed Denial of Service。DDOS 本是利用合理的请求造成资源过载，导致服务不可用</p><figure><img src="'+p+`" alt="DDOS" tabindex="0" loading="lazy"><figcaption>DDOS</figcaption></figure><p>网络层 DDOS：伪造大量源 IP 地址，向服务器发送大量 SYN 包，因为源地址是伪造的，不会应答，大量消耗服务器资源(CPU 和内存)</p><h4 id="应用层-ddos" tabindex="-1"><a class="header-anchor" href="#应用层-ddos" aria-hidden="true">#</a> 应用层 DDOS</h4><p>应用层 DDOS，不同于网络层 DDOS，由于发生在应用层，因此 TCP 三次握手已完成，连接已建立，发起攻击的 IP 地址都是真实的</p><ul><li>CC 攻击：对一些消耗资源较大的应用界面不断发起正常的请求，以消耗服务器端资源</li><li>限制请求频率：在应用中针对每个客户端做一个请求频率的限制</li></ul><h3 id="php-安全" tabindex="-1"><a class="header-anchor" href="#php-安全" aria-hidden="true">#</a> PHP 安全</h3><h4 id="文件包含漏洞" tabindex="-1"><a class="header-anchor" href="#文件包含漏洞" aria-hidden="true">#</a> 文件包含漏洞</h4><p>include、require、include_once、require_once，使用这4个函数包含文件，该文件将作为 PHP 代码执行，PHP 内核不会在意该包含的文件是什么类型</p><h4 id="代码执行漏洞" tabindex="-1"><a class="header-anchor" href="#代码执行漏洞" aria-hidden="true">#</a> 代码执行漏洞</h4><p>危险函数<code>exec</code>、<code>shell_exec</code>、<code>system</code>可以直接执行系统命令。<code>eval</code>函数可以执行 PHP 代码</p><h3 id="伪随机数和真随机数" tabindex="-1"><a class="header-anchor" href="#伪随机数和真随机数" aria-hidden="true">#</a> 伪随机数和真随机数</h3><h4 id="伪随机数" tabindex="-1"><a class="header-anchor" href="#伪随机数" aria-hidden="true">#</a> 伪随机数</h4><p>通过一些数学算法生成的随机数，并非真正的随机数</p><h4 id="真随机数" tabindex="-1"><a class="header-anchor" href="#真随机数" aria-hidden="true">#</a> 真随机数</h4><p>通过一些物理系统生成的随机数</p><h4 id="安全随机数" tabindex="-1"><a class="header-anchor" href="#安全随机数" aria-hidden="true">#</a> 安全随机数</h4><ul><li>Linux</li></ul><p>使用 /dev/random 或者 /dev/urandom 来生成随机数，只需读取即可</p><ul><li>PHP</li></ul><p>若是支持 openSSL 扩展，可以直接使用函数来生成随机数</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token function">openssl_random_pseudo_bytes</span> <span class="token punctuation">(</span> <span class="token keyword type-hint">int</span> <span class="token variable">$length</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token keyword type-declaration">bool</span> <span class="token operator">&amp;</span><span class="token variable">$crypto_strong</span> <span class="token punctuation">]</span> <span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,38);function k(b,m){const s=d("ExternalLinkIcon");return t(),i("div",null,[c,a("blockquote",null,[a("p",null,[a("a",h,[l("https://blog.maplemark.cn/csrf.html"),r(s)])])]),u])}const v=n(o,[["render",k],["__file","QA.html.vue"]]);export{v as default};
