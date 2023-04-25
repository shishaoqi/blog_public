import{_ as n,W as a,X as e,a2 as t}from"./framework-7d1f27fd.js";const s={},c=t(`<h1 id="context" tabindex="-1"><a class="header-anchor" href="#context" aria-hidden="true">#</a> context</h1><h2 id="context-概念" tabindex="-1"><a class="header-anchor" href="#context-概念" aria-hidden="true">#</a> context 概念</h2><p>Go1.7 标准库引入 context，中文译作“上下文”，准确说它是 goroutine 的上下文。主要用来在 goroutine 之间传递上下文信息，包括：取消信号、超时时间、截止时间、存取k-v 等。</p><h3 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h3><ul><li>使用 context 几乎成为并发控制和超时控制的标准做法，与它协作的 API 都可以由外部控制执行“取消”操作。</li></ul><h3 id="协程模型可能带来的问题" tabindex="-1"><a class="header-anchor" href="#协程模型可能带来的问题" aria-hidden="true">#</a> 协程模型可能带来的问题</h3><p>Go 语言中的 server 实际是一个“协程模型”，处理一个请求需要多个协程。</p><blockquote><p>问题：例如在业务的高峰期，某个下游的响应速度变慢，而当前系统的请求又没有超时控制，或者超时时间设置过大，那么等待下游服务返回数据的协程就会越来越多。而协程是要消耗系统资源的，后果就是协程数激增，内存占用太飙涨，Go 调度器和 GC 不堪其重，甚至导致服务不可用。</p></blockquote><blockquote><p>解决方案：通过设置“允许下游最长处理时间”就可以避免。超时还没接收到返回数据，就直接向客户端返回一个默认值或者错误。</p></blockquote><h3 id="采用-context-解决" tabindex="-1"><a class="header-anchor" href="#采用-context-解决" aria-hidden="true">#</a> 采用 context 解决</h3><p>协程的关闭一般采用 channel 和 select 的方式来控制。---- 但是在某些场景下，例如处理一个请求衍生了很多协程，这些协程之间是互相关联的：需要共享一些全局变量、有共同的 deadline 等，而且可以同时被关闭。<code>用 channel 和 select 就会比较麻烦，这时就可以通过 context 来实现</code></p><p>context 能在一组 goroutine 之间传递共享的值、取消信号、deadline 等。从而 context 可以用来解决 goroutine 之间退出通知、元数据传递的功能的问题。</p><h3 id="context-运用" tabindex="-1"><a class="header-anchor" href="#context-运用" aria-hidden="true">#</a> context 运用</h3><ol><li><p>创建根节点 context</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// src/context/context.go</span>
<span class="token keyword">func</span> <span class="token function">Background</span><span class="token punctuation">(</span><span class="token punctuation">)</span> Context
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>创建子节点</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// src/context/context.go</span>

<span class="token keyword">func</span> <span class="token function">WithCancel</span><span class="token punctuation">(</span>parent Context<span class="token punctuation">)</span><span class="token punctuation">(</span>ctx Context<span class="token punctuation">,</span> cancel CancleFunc<span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">WithDeadline</span><span class="token punctuation">(</span>parent Context<span class="token punctuation">)</span><span class="token punctuation">(</span>ctx Context<span class="token punctuation">,</span> cancel CancleFunc<span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">WithTimeout</span><span class="token punctuation">(</span>parent Context<span class="token punctuation">)</span><span class="token punctuation">(</span>ctx Context<span class="token punctuation">,</span> cancel CancleFunc<span class="token punctuation">)</span>
<span class="token keyword">func</span> <span class="token function">WithValue</span><span class="token punctuation">(</span>parent Context<span class="token punctuation">)</span><span class="token punctuation">(</span>ctx Context<span class="token punctuation">,</span> cancel CancleFunc<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>context 会在中间传递，只需要在适当的时间调用 Cancel 函数向 goroutine 发出取消信号或都调用 Value 函数取出 context 中的值。</p><h3 id="官方使用建议" tabindex="-1"><a class="header-anchor" href="#官方使用建议" aria-hidden="true">#</a> 官方使用建议</h3><ol><li></li><li></li><li></li><li></li></ol>`,17),o=[c];function i(l,p){return a(),e("div",null,o)}const d=n(s,[["render",i],["__file","context.html.vue"]]);export{d as default};
