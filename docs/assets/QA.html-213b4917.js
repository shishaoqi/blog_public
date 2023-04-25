import{_ as e,W as a,X as d,a2 as i}from"./framework-7d1f27fd.js";const n={},r=i(`<h1 id="问题与简答" tabindex="-1"><a class="header-anchor" href="#问题与简答" aria-hidden="true">#</a> 问题与简答</h1><h2 id="linux-篇" tabindex="-1"><a class="header-anchor" href="#linux-篇" aria-hidden="true">#</a> Linux 篇</h2><h3 id="linux-目录结构" tabindex="-1"><a class="header-anchor" href="#linux-目录结构" aria-hidden="true">#</a> Linux 目录结构</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/
├── bin <span class="token comment">#存放二进制可执行文件，常用命令一般都在这里</span>
├── boot <span class="token comment">#存放用于系统引导时使用的各种文件</span>
├── dev <span class="token comment">#用于存放设备文件</span>
├── etc <span class="token comment">#存放系统管理和配置文件</span>
├── home <span class="token comment">#存放所有用户文件的根目录</span>
├── lib <span class="token comment">#存放着和系统运行相关的库文件</span>
├── media <span class="token comment">#linux 系统会自动识别一些设备，当识别后，linux 会把识别的设备挂载到这个目录下</span>
├── mnt <span class="token comment">#用户临时挂载其他的文件系统</span>
├── opt <span class="token comment">#额外安装的可选应用程序包所放置的位置</span>
├── proc <span class="token comment">#虚拟文件系统目录，是系统内存的映射。可直接访问这个目录来获取系统信息</span>
├── root <span class="token comment">#超级用户的主目录</span>
├── run <span class="token comment">#是一个临时文件系统，存储系统启动以来的信息</span>
├── sbin <span class="token comment">#存放二进制可执行文件，只有 root 才能访问</span>
├── srv <span class="token comment">#该目录存放一些服务启动之后需要提取的数据</span>
├── sys <span class="token comment">#存放内核相关文件</span>
├── tmp <span class="token comment">#用于存放各种临时文件，是公用的临时文件存储点</span>
├── usr <span class="token comment">#用于存放系统应用程序</span>
└── var <span class="token comment">#用于存放运行时需要改变数据的文件，比如服务的日志文件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="linux-基础" tabindex="-1"><a class="header-anchor" href="#linux-基础" aria-hidden="true">#</a> Linux 基础</h3><p>查看系统信息、内存信息、磁盘信息、负载信息、路由信息、端口信息、进程、登录用户、关机、重启、系统时间、用户管理、文件权限、压缩解压</p><h3 id="命令与文件查找" tabindex="-1"><a class="header-anchor" href="#命令与文件查找" aria-hidden="true">#</a> 命令与文件查找</h3><h4 id="which-寻找可执行文件" tabindex="-1"><a class="header-anchor" href="#which-寻找可执行文件" aria-hidden="true">#</a> which-寻找可执行文件</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@localhost ~]# which php
/usr/bin/php
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="whereis-特定目录寻找" tabindex="-1"><a class="header-anchor" href="#whereis-特定目录寻找" aria-hidden="true">#</a> whereis-特定目录寻找</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@localhost ~]# whereis php
php: /usr/bin/php /usr/lib64/php /etc/php.d /etc/php.ini /usr/include/php /usr/share/php /usr/share/man/man1/php.1.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="find-直接搜索硬盘" tabindex="-1"><a class="header-anchor" href="#find-直接搜索硬盘" aria-hidden="true">#</a> find-直接搜索硬盘</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@localhost ~]# find / -name php-fpm
/run/php-fpm
/etc/sysconfig/php-fpm
/etc/logrotate.d/php-fpm
/var/log/php-fpm
/usr/sbin/php-fpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据流重定向" tabindex="-1"><a class="header-anchor" href="#数据流重定向" aria-hidden="true">#</a> 数据流重定向</h3><h4 id="数据流" tabindex="-1"><a class="header-anchor" href="#数据流" aria-hidden="true">#</a> 数据流</h4><p>数据流分为三类：标准输入(stdin)、标准输出(stdout)、标准错误输出(stderr)</p><blockquote><p>/dev/null：是一个特殊的设备文件，这个文件接收到的任何数据都会被丢弃。因此，null 这个设备通常也被成为位桶(bit bucket)或黑洞</p></blockquote><h4 id="管道命令" tabindex="-1"><a class="header-anchor" href="#管道命令" aria-hidden="true">#</a> 管道命令</h4><p>可以处理前一个标准输出信息，对标准错误输出没有处理能力</p><h4 id="截取命令" tabindex="-1"><a class="header-anchor" href="#截取命令" aria-hidden="true">#</a> 截取命令</h4><ul><li>cut：将以行为单位的字符串进行切割</li><li>grep：分析一行字符，截取所需要的特定信息</li></ul><h4 id="排序命令" tabindex="-1"><a class="header-anchor" href="#排序命令" aria-hidden="true">#</a> 排序命令</h4><ul><li>sort：可以依据不同的数据类型进行排序</li><li>uniq：数据去重</li><li>wc：统计行数、字符数</li></ul><h4 id="参数转换" tabindex="-1"><a class="header-anchor" href="#参数转换" aria-hidden="true">#</a> 参数转换</h4><ul><li>xargs：将标准输入转换成命令行参数</li></ul><h3 id="sed" tabindex="-1"><a class="header-anchor" href="#sed" aria-hidden="true">#</a> sed</h3><p>sed 是一个管道命令，用于分析标准输出。支持数据的替换、删除、新增、截取特定行等功能</p><h3 id="awk" tabindex="-1"><a class="header-anchor" href="#awk" aria-hidden="true">#</a> awk</h3><p>awk 是一个数据处理工具，sed 常常用于一整行的数据处理，awk 则倾向于将一行数据分成数据部分来处理。因此，awk 适合小型的数据进行局部处理</p><h3 id="计划任务" tabindex="-1"><a class="header-anchor" href="#计划任务" aria-hidden="true">#</a> 计划任务</h3><table><thead><tr><th>代表意义</th><th>分钟</th><th>小时</th><th>日期</th><th>月份</th><th>星期</th><th>指令</th></tr></thead><tbody><tr><td>数字范围</td><td>0-59</td><td>0-23</td><td>1-31</td><td>1-12</td><td>0-7</td><td>command</td></tr></tbody></table><table><thead><tr><th>特殊符号</th><th>意义</th><th>示例</th></tr></thead><tbody><tr><td>*</td><td>表示任何时刻</td><td>*</td></tr><tr><td>,</td><td>表示分隔时段</td><td>0 3,6 * * * command(3:00与6:00)</td></tr><tr><td>-</td><td>表示一段时间范围</td><td>20 8-12 * * * command(8:20~12:20)</td></tr><tr><td>/n</td><td>每隔 n 段时间</td><td>*/5 * * * * command(每五分钟进行一次)</td></tr></tbody></table><h3 id="vim" tabindex="-1"><a class="header-anchor" href="#vim" aria-hidden="true">#</a> Vim</h3><h4 id="操作模式" tabindex="-1"><a class="header-anchor" href="#操作模式" aria-hidden="true">#</a> 操作模式</h4><p>normal、insert、command、visual、replace</p><h4 id="翻页与移动" tabindex="-1"><a class="header-anchor" href="#翻页与移动" aria-hidden="true">#</a> 翻页与移动</h4><ul><li><code>&lt;c-f&gt;</code>：向下移动一页 (相当于：ctrl + f)</li><li><code>&lt;c-d&gt;</code>：向下移动半页</li><li><code>&lt;c-b&gt;</code>：向上移动一页</li><li><code>&lt;c-u&gt;</code>：向上移动半页</li></ul><p><code>h</code>、<code>j</code>、<code>k</code>、<code>l</code>：<code>←</code>、<code>↓</code>、<code>↑</code>、<code>→</code></p><ul><li><code>nh</code>：向左移动 n 个字符(四个方向均可)</li><li><code>^</code>：移动到行首</li><li><code>$</code>：移动到行尾</li><li><code>nG</code>：移动到指定行数</li><li><code>gg</code>：移动到文档第一行，相当于 1G</li><li><code>G</code>：移动到文档最后一行</li></ul><h4 id="查找与替换" tabindex="-1"><a class="header-anchor" href="#查找与替换" aria-hidden="true">#</a> 查找与替换</h4><ul><li><p><code>/word</code>：输入<code>/</code>会进入 command 模式，在输入关键字回车进行搜索</p></li><li><p><code>?word</code>：<code>/</code>是向光标以后搜索，<code>?</code>是向前搜索</p></li><li><p><code>n</code>：根据搜索方向定位到下一个匹配目标</p></li><li><p><code>N</code>：与<code>n</code>相反方向定位匹配目标</p></li><li><p><code>:n1,n2s/word1/word2/g</code>：n1,n2 表示数字，替换n1行到n2行的单词</p></li><li><p><code>:1,$s/word1/word2/g</code>：全文替换，也可以写成<code>:%s/word1/word2/g</code></p></li><li><p><code>:1,$s/word1/word2/gc</code>：全文替换，并出现确认提示</p></li></ul><h3 id="负载查看" tabindex="-1"><a class="header-anchor" href="#负载查看" aria-hidden="true">#</a> 负载查看</h3><p>使用 uptime、w、top 命令查看</p><p><code>load average: 0.00, 0.01, 0.05</code>，系统的平均负荷，对应 1分钟、5分钟、15分钟</p><p>X 个 CPU 的电脑，可接受的系统负荷最大为 <code>X.0</code> 。将<code>15分钟</code>系统负荷作为服务器正常运行的指标</p><h3 id="linux-内存管理" tabindex="-1"><a class="header-anchor" href="#linux-内存管理" aria-hidden="true">#</a> Linux 内存管理</h3><h3 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h3><p>malloc分配虚拟内存 mmap虚拟内存映射方法 hugepage虚拟内存映射方法，分配2MB或1GB</p><h4 id="虚拟内存" tabindex="-1"><a class="header-anchor" href="#虚拟内存" aria-hidden="true">#</a> 虚拟内存</h4><p>一种实现在计算机软硬件之间的内存管理技术，将程序使用到的内存地址映射到计算机内存中的物理地址 32位虚拟内存大小为0-4g，一个内存也默认大小为4kb</p><h5 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h5><p>提高内存安全性</p><h5 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h5><p>每个进程都有它自己的虚拟内存 虚拟内存的大小取决于系统的体系结构</p><h3 id="进程、线程、协程区别" tabindex="-1"><a class="header-anchor" href="#进程、线程、协程区别" aria-hidden="true">#</a> 进程、线程、协程区别</h3><h4 id="进程" tabindex="-1"><a class="header-anchor" href="#进程" aria-hidden="true">#</a> 进程</h4><p>是一个动态概念；由程序、数据和进程控制块组成。系统进行资源分配、调度和管理的最小单位。</p><h4 id="线程" tabindex="-1"><a class="header-anchor" href="#线程" aria-hidden="true">#</a> 线程</h4><p>是进程的活动成分，是处理器分配资源的最小单位；可以共享进程的资源与地址空间。</p><h4 id="协程" tabindex="-1"><a class="header-anchor" href="#协程" aria-hidden="true">#</a> 协程</h4><p>协程是一种用户态的轻量级线程，又称微线程，英文名 Coroutine，协程的调度完全由用户控制</p><h4 id="并发执行机制" tabindex="-1"><a class="header-anchor" href="#并发执行机制" aria-hidden="true">#</a> 并发执行机制</h4><p>把一个处理器划分为若干个短的时间片，每个时间片依次轮流地执行处理各个应用程序，由于一个时间片很短，相对于一个应用程序来说，就好像是处理器在为自己单独服务一样，从而达到多个应用程序在同时进行的效果。</p><h4 id="多线程原理" tabindex="-1"><a class="header-anchor" href="#多线程原理" aria-hidden="true">#</a> 多线程原理</h4><p>多线程就是把操作系统中的这种并发执行机制原理运用在一个程序中，把一个程序划分为若干个子任务，多个子任务并发执行，每一个任务就是一个线程</p><h3 id="进程间通信与信号机制" tabindex="-1"><a class="header-anchor" href="#进程间通信与信号机制" aria-hidden="true">#</a> 进程间通信与信号机制</h3><h4 id="通信方式" tabindex="-1"><a class="header-anchor" href="#通信方式" aria-hidden="true">#</a> 通信方式</h4><p>信号量、消息队列、共享内存、信号、管道、套接字</p><h4 id="信号机制" tabindex="-1"><a class="header-anchor" href="#信号机制" aria-hidden="true">#</a> 信号机制</h4><p>信号是操作系统中进程间通讯的一种有限制的方式，是一种异步的通知机制，用来提醒进程一个事件已经发送</p><ul><li>SIGHUP：控制台操作</li><li>SIGINT：终止进程，<code>Ctrl + C</code></li><li>SIGKILL：终止进程，<code>kill -9</code></li><li>SIGSTOP：停止进程的执行</li><li>SIGCONT：恢复进程的执行</li></ul>`,71),s=[r];function h(t,c){return a(),d("div",null,s)}const o=e(n,[["render",h],["__file","QA.html.vue"]]);export{o as default};