import{_ as n,W as s,X as o,$ as t,a1 as d,Y as e,Z as c,a2 as r,C as a}from"./framework-7d1f27fd.js";const h={},p=r('<h1 id="redis-的过期键删除策略" tabindex="-1"><a class="header-anchor" href="#redis-的过期键删除策略" aria-hidden="true">#</a> Redis 的过期键删除策略</h1><h3 id="过期键删除策略" tabindex="-1"><a class="header-anchor" href="#过期键删除策略" aria-hidden="true">#</a> 过期键删除策略</h3><ul><li><p>如果一个键过期了，那么他什么时候会被删除</p><ul><li>定时删除：在设置键的过期时间的同时，创建一个定时器，让定时器在键的过期时间来 临时，立即执行对键的删除操作。</li><li>惰性删除：放任键过期不管，但是每次从键空间获取键时，都检测获取得的键是否过期，如果过期的话，就删除该键，如果没有过期，就返回该键。</li><li>定期删除：每隔一段时间，程序就对数据库进行一次检查，删除里面的过期键。</li></ul></li><li><p>至于要删除多少过期键，以及要检查多少数据库，由程序算法决定。 这三种策略中，第一种和第三种为<code>主动删除策略</code>，而第二种则为<code>被动删除策略</code>。</p></li></ul><h3 id="redis-的过期键删除策略-1" tabindex="-1"><a class="header-anchor" href="#redis-的过期键删除策略-1" aria-hidden="true">#</a> Redis 的过期键删除策略</h3><p>Redis 服务器实际使用的是<code>惰性删除</code>和<code>定期删除</code>两种策略，通过配合使用者两种策略，服务器可以很好的合理的使用 CPU 和避免浪费内存空间之间取得平衡。</p><h4 id="惰性删除策略的实现" tabindex="-1"><a class="header-anchor" href="#惰性删除策略的实现" aria-hidden="true">#</a> 惰性删除策略的实现</h4><p>过期键的惰性删除策略由 db.c/expireIfNeeded 函数实现，所有的读写数据库的 Redis 命令在执行之前都会调用 expireIfNeeded 函数对输入键进行检查:</p><ul><li>如果输入键已经过期，那么 expireIfNeeded 函数将做输入键从数据库中删除。</li><li>如果键未过期，那么 expiredNeeded 函数不做任何操作。</li></ul>',8),y=e("p",null,"定时删除，用一个定时器来负责监视 key, 过期则自动删除。虽然内存及时释放， 但是十分消耗 CPU 资源。在大并发请求下，CPU 要将时间应用在处理请求，而不 是删除 key, 因此没有采用这一策略.",-1),_=e("ul",null,[e("li",null,"定期删除，redis 默认每个 100ms 检查，是否有过期的 key, 有过期 key 则删除。需 要说明的是，redis 不是每个 100ms 将所有的 key 检查一次，而是随机抽取进行 检查 (如果每隔 100ms, 全部 key 进行检查，redis 岂不是卡死)。因此，如果只采用 定期删除策略，会导致很多 key 到时间没有删除。"),e("li",null,"于是，惰性删除派上用场。也就是说在你获取某个 key 的时候，redis 会检查一 下，这个 key 如果设置了过期时间那么是否过期了？如果过期了此时就会删除。")],-1),u=r('<h3 id="数据淘汰策略" tabindex="-1"><a class="header-anchor" href="#数据淘汰策略" aria-hidden="true">#</a> 数据淘汰策略</h3><p>当内存不足以容纳新写入数据时，会施行数据淘汰策略。</p><p>Redis 具体有 8 种淘汰策略：</p><table><thead><tr><th style="text-align:center;">策略</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">volatile-lru</td><td style="text-align:center;">从已设置过期时间的数据集中挑选最近最少使用的数据淘汰</td></tr><tr><td style="text-align:center;">volatile-ttl</td><td style="text-align:center;">从已设置过期时间的数据集中挑选将要过期的数据淘汰</td></tr><tr><td style="text-align:center;">volatile-random</td><td style="text-align:center;">从已设置过期时间的数据集中任意选择数据淘汰</td></tr><tr><td style="text-align:center;">allkeys-lru</td><td style="text-align:center;">从所有数据集中挑选最近最少使用的数据淘汰</td></tr><tr><td style="text-align:center;">allkeys-random</td><td style="text-align:center;">从所有数据集中任意选择数据进行淘汰</td></tr><tr><td style="text-align:center;">volatile-lfu</td><td style="text-align:center;">在设置了过期时间的key中，移除最少使用的key</td></tr><tr><td style="text-align:center;">allkeys-lfu</td><td style="text-align:center;">从所有数据集中挑选最少使用的数据淘汰</td></tr><tr><td style="text-align:center;">noeviction</td><td style="text-align:center;">禁止驱逐数据</td></tr></tbody></table><p>作为内存数据库，出于对性能和内存消耗的考虑，Redis 的淘汰算法实际实现上并非针对所有 key，而是抽样一小部分并且从中选出被淘汰的 key。</p><p>使用 Redis 缓存数据时，为了提高缓存命中率，需要保证缓存数据都是热点数据。可以将内存最大使用量设置为热点数据占用的内存量，然后启用 allkeys-lru 淘汰策略，将最近最少使用的数据淘汰。</p><p>Redis 4.0 引入了 volatile-lfu 和 allkeys-lfu 淘汰策略，LFU 策略通过统计访问频率，将访问频率最少的键值对淘汰。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>在 redis.conf 中有一行配置 # maxmemory-policy volatile-lru ，该配置就是配内存淘汰策略的</p></div><blockquote><p>如果没有设置 expire 的 key, 不满足先决条件 (prerequisites); 那么 volatile-lru, volatile-random 和 volatile-ttl 策略的行为，和 noeviction (不删除) 基本上一致。</p></blockquote><h3 id="概念介绍" tabindex="-1"><a class="header-anchor" href="#概念介绍" aria-hidden="true">#</a> 概念介绍</h3><p>LRU和LFU都是内存管理的页面置换算法。</p><p>LRU，即：最近最少使用淘汰算法（Least Recently Used）。LRU是淘汰最长时间没有被使用的页面。</p><p>LFU，即：最不经常使用淘汰算法（Least Frequently Used）。LFU是淘汰一段时间内，使用次数最少的页面。</p>',13),x={href:"https://learnku.com/articles/28772#fa8437",target:"_blank",rel:"noopener noreferrer"};function E(k,f){const l=a("CodeDemo"),i=a("ExternalLinkIcon");return s(),o("div",null,[p,t(l,{id:"code-demo-59",type:"normal",title:"%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E7%94%A8%E5%AE%9A%E6%97%B6%E5%88%A0%E9%99%A4%E7%AD%96%E7%95%A5%EF%BC%9F",code:"eJwBAgD9/3t9AXUA+Q=="},{default:d(()=>[y]),_:1}),t(l,{id:"code-demo-64",type:"normal",title:"%E5%AE%9A%E6%9C%9F%E5%88%A0%E9%99%A4%20%2B%20%E6%83%B0%E6%80%A7%E5%88%A0%E9%99%A4%E6%98%AF%E5%A6%82%E4%BD%95%E5%B7%A5%E4%BD%9C%E7%9A%84%E5%91%A2%EF%BC%9F",code:"eJwBAgD9/3t9AXUA+Q=="},{default:d(()=>[_]),_:1}),u,e("p",null,[e("a",x,[c("https://learnku.com/articles/28772#fa8437"),t(i)])])])}const A=n(h,[["render",E],["__file","redis 的过期策略以及内存淘汰机制.html.vue"]]);export{A as default};
