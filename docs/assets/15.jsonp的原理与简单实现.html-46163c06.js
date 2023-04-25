import{_ as n,W as s,X as a,a2 as t}from"./framework-7d1f27fd.js";const p={},e=t(`<h1 id="jsonp的原理与简单实现" tabindex="-1"><a class="header-anchor" href="#jsonp的原理与简单实现" aria-hidden="true">#</a> jsonp的原理与简单实现</h1><h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h2><p>由于同源策略的限制，XmlHttpRequest只允许请求当前源（域名、协议、端口）的资源，为了实现跨域请求，可以通过script标签实现跨域请求，然后在服务端输出JSON数据并执行回调函数，从而解决了跨域的数据请求。</p><p>其本质是利用了&lt; script src=”” &gt;&lt;/ script &gt;标签具有可跨域的特性，由服务端返回一个预先定义好的Javascript函数的调用，并且将服务器数据以该函数参数的形式传递过来，此方法需要前后端配合完成。 它只能以GET方式请求 一般将传递的 key 命名为 callback</p><h2 id="php服务器示例" tabindex="-1"><a class="header-anchor" href="#php服务器示例" aria-hidden="true">#</a> php服务器示例</h2><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token function">header</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Content-Type: text/javascript; charset=utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token comment">// 假设从数据库里取数据了</span>
<span class="token variable">$arr</span> <span class="token operator">=</span> <span class="token keyword">array</span><span class="token punctuation">(</span>
	<span class="token string double-quoted-string">&quot;name&quot;</span><span class="token operator">=&gt;</span><span class="token string double-quoted-string">&quot;js&quot;</span><span class="token punctuation">,</span>
	<span class="token string double-quoted-string">&quot;age&quot;</span><span class="token operator">=&gt;</span><span class="token number">20</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 编码处理</span>
<span class="token variable">$json</span> <span class="token operator">=</span> <span class="token function">json_encode</span><span class="token punctuation">(</span><span class="token variable">$arr</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//获取客户端的callback函数</span>
<span class="token variable">$callback</span> <span class="token operator">=</span> <span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;callback&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">//给接收到的函数传输入据$json作为参数, 输出到html页面运行该函数</span>
<span class="token keyword">echo</span> <span class="token variable">$callback</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;(&#39;</span> <span class="token operator">.</span> <span class="token variable">$json</span> <span class="token operator">.</span> <span class="token string single-quoted-string">&#39;)&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="客户端示例" tabindex="-1"><a class="header-anchor" href="#客户端示例" aria-hidden="true">#</a> 客户端示例</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> jsonp <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">var</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">//1. 创建一个script标签</span>
		<span class="token keyword">var</span> scriptElem <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;script&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//2. 把地址传进去</span>
		<span class="token keyword">var</span> callbackName <span class="token operator">=</span> <span class="token string">&quot;__callback__&quot;</span> <span class="token operator">+</span> count<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token keyword">var</span> jsonpUrl <span class="token operator">=</span> url <span class="token operator">+</span> <span class="token string">&quot;?callback=&quot;</span> <span class="token operator">+</span> callbackName<span class="token punctuation">;</span>
		scriptElem<span class="token punctuation">.</span>src <span class="token operator">=</span> jsonpUrl<span class="token punctuation">;</span>
		<span class="token comment">//3. 创建一个fn函数，用于接收返回的数据</span>
		window<span class="token punctuation">[</span>callbackName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token comment">//把数据传给想要用的人</span>
			<span class="token function">callback</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">//把我们创建的script标签删掉</span>
			window<span class="token punctuation">.</span>document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>scriptElem<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">;</span>
		<span class="token comment">//4.把标签放到body，把请求发出去</span>
		window<span class="token punctuation">.</span>document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>scriptElem<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">jsonp</span><span class="token punctuation">(</span><span class="token string">&#39;./js.php&#39;</span><span class="token punctuation">,</span><span class="token keyword">function</span> <span class="token function">cs</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	data <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>控制台输出:{“name”:”js”,”age”:20} 注: 请在php服务器下运行</p><p><strong>本文转载自 HeartWalker&#39;s Blog，<a href="http://heartwalker.cc/2016/07/06/jsonp的原理与简单实现/" rel="nofollow">《jsonp的原理与简单实现》</a></strong></p>`,10),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","15.jsonp的原理与简单实现.html.vue"]]);export{r as default};
