import{_ as e,W as t,X as p,Y as n,Z as a,$ as l,a2 as c,C as i}from"./framework-7d1f27fd.js";const o={},u=n("h1",{id:"垃圾回收",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#垃圾回收","aria-hidden":"true"},"#"),a(" 垃圾回收")],-1),d={href:"https://www.laruence.com/2018/04/08/3170.html",target:"_blank",rel:"noopener noreferrer"},r=c(`<h3 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h3><p>php5 和 php7 的垃圾回收机制都是利用引用计数</p><h2 id="php5" tabindex="-1"><a class="header-anchor" href="#php5" aria-hidden="true">#</a> PHP5</h2><h3 id="php5-的-zval结构" tabindex="-1"><a class="header-anchor" href="#php5-的-zval结构" aria-hidden="true">#</a> php5 的 zval结构</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">_zval_struct</span> <span class="token punctuation">{</span>
     <span class="token keyword">union</span> <span class="token punctuation">{</span>
          <span class="token keyword">long</span> lval<span class="token punctuation">;</span>
          <span class="token keyword">double</span> dval<span class="token punctuation">;</span>
          <span class="token keyword">struct</span> <span class="token punctuation">{</span>
               <span class="token keyword">char</span> <span class="token operator">*</span>val<span class="token punctuation">;</span>
               <span class="token keyword">int</span> len<span class="token punctuation">;</span>
          <span class="token punctuation">}</span> str<span class="token punctuation">;</span>
          HashTable <span class="token operator">*</span>ht<span class="token punctuation">;</span>
          zend_object_value obj<span class="token punctuation">;</span>
          zend_ast <span class="token operator">*</span>ast<span class="token punctuation">;</span>
     <span class="token punctuation">}</span> value<span class="token punctuation">;</span>
     zend_uint refcount__gc<span class="token punctuation">;</span>
     zend_uchar type<span class="token punctuation">;</span>
     zend_uchar is_ref__gc<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>type字段, 表示这个zval存储的是什么类型的值, 常见的可能选项是IS_NULL, IS_LONG, IS_STRING, IS_ARRAY, IS_OBJECT等等.</p><p>根据type字段的值不同, 我们就要用不同的方式解读value的值, 这个value是个联合体, 比如对于type是IS_STRING, 那么我们应该用value.str来解读zval.value字段, 而如果type是IS_LONG, 那么我们就要用value.lval来解读.</p></li><li><p>PHP是用引用计数来做基本的垃圾回收的, 所以zval中有一个refcount__gc字段, 表示这个zval的引用数目.</p><p>但这里有一个要说明的, 在5.3以前, 这个字段的名字还叫做refcount, 5.3以后, 在引入新的垃圾回收算法来对付循环引用计数的时候, 作者加入了大量的宏来操作refcount, 为了能让错误更快的显现, 所以改名为refcount__gc, 迫使大家都使用宏来操作refcount.</p></li><li><p>类似的, 还有 is_ref, 这个值表示了PHP中的一个类型是否是引用, 这里我们可以看到是不是引用是一个标志位.</p></li></ul><h3 id="php5-存在的问题" tabindex="-1"><a class="header-anchor" href="#php5-存在的问题" aria-hidden="true">#</a> PHP5 存在的问题</h3><ol><li><p>首先这个结构体的大小是(在64位系统)24个字节, 我们仔细看这个zval.value联合体, 其中zend_object_value是最大的长板, 它导致整个value需要16个字节, 这个应该是很容易可以优化掉的, 比如把它挪出来, 用个指针代替,因为毕竟IS_OBJECT也不是最最常用的类型。</p><blockquote><p>php5 zval.value 这个联合体中最大的诟病是 zend_object_value，导致整个value需要16字节。（用指针优化）</p></blockquote></li><li><p>第二, 这个结构体的每一个字段都有明确的含义定义, 没有预留任何的自定义字段, 导致在PHP5时代做很多的优化的时候, 需要存储一些和zval相关的信息的时候, 不得不采用其他结构体映射, 或者外部包装后打补丁的方式来扩充zval。</p><blockquote><p>php5 zval结构体没有预留自定义字段，无法方便进行优化。</p></blockquote></li></ol><h2 id="php7" tabindex="-1"><a class="header-anchor" href="#php7" aria-hidden="true">#</a> PHP7</h2><h3 id="php7-的-zval结构" tabindex="-1"><a class="header-anchor" href="#php7-的-zval结构" aria-hidden="true">#</a> php7 的 zval结构</h3><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">_zval_struct</span> <span class="token punctuation">{</span>
     <span class="token keyword">union</span> <span class="token punctuation">{</span>
          zend_long         lval<span class="token punctuation">;</span>             <span class="token comment">/* long value */</span>
          <span class="token keyword">double</span>            dval<span class="token punctuation">;</span>             <span class="token comment">/* double value */</span>
          zend_refcounted  <span class="token operator">*</span>counted<span class="token punctuation">;</span>
          zend_string      <span class="token operator">*</span>str<span class="token punctuation">;</span>
          zend_array       <span class="token operator">*</span>arr<span class="token punctuation">;</span>
          zend_object      <span class="token operator">*</span>obj<span class="token punctuation">;</span>
          zend_resource    <span class="token operator">*</span>res<span class="token punctuation">;</span>
          zend_reference   <span class="token operator">*</span>ref<span class="token punctuation">;</span>
          zend_ast_ref     <span class="token operator">*</span>ast<span class="token punctuation">;</span>
          zval             <span class="token operator">*</span>zv<span class="token punctuation">;</span>
          <span class="token keyword">void</span>             <span class="token operator">*</span>ptr<span class="token punctuation">;</span>
          zend_class_entry <span class="token operator">*</span>ce<span class="token punctuation">;</span>
          zend_function    <span class="token operator">*</span>func<span class="token punctuation">;</span>
          <span class="token keyword">struct</span> <span class="token punctuation">{</span>
               <span class="token class-name">uint32_t</span> w1<span class="token punctuation">;</span>
               <span class="token class-name">uint32_t</span> w2<span class="token punctuation">;</span>
          <span class="token punctuation">}</span> ww<span class="token punctuation">;</span>
     <span class="token punctuation">}</span> value<span class="token punctuation">;</span>
    <span class="token keyword">union</span> <span class="token punctuation">{</span>
        <span class="token keyword">struct</span> <span class="token punctuation">{</span>
            <span class="token function">ZEND_ENDIAN_LOHI_4</span><span class="token punctuation">(</span>
                zend_uchar    type<span class="token punctuation">,</span>         <span class="token comment">/* active type */</span>
                zend_uchar    type_flags<span class="token punctuation">,</span>
                zend_uchar    const_flags<span class="token punctuation">,</span>
                zend_uchar    reserved<span class="token punctuation">)</span>     <span class="token comment">/* call info for EX(This) */</span>
        <span class="token punctuation">}</span> v<span class="token punctuation">;</span>
        <span class="token class-name">uint32_t</span> type_info<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> u1<span class="token punctuation">;</span>
    <span class="token keyword">union</span> <span class="token punctuation">{</span>
        <span class="token class-name">uint32_t</span>     var_flags<span class="token punctuation">;</span>
        <span class="token class-name">uint32_t</span>     next<span class="token punctuation">;</span>                 <span class="token comment">/* hash collision chain */</span>
        <span class="token class-name">uint32_t</span>     cache_slot<span class="token punctuation">;</span>           <span class="token comment">/* literal cache slot */</span>
        <span class="token class-name">uint32_t</span>     lineno<span class="token punctuation">;</span>               <span class="token comment">/* line number (for ast nodes) */</span>
        <span class="token class-name">uint32_t</span>     num_args<span class="token punctuation">;</span>             <span class="token comment">/* arguments number for EX(This) */</span>
        <span class="token class-name">uint32_t</span>     fe_pos<span class="token punctuation">;</span>               <span class="token comment">/* foreach position */</span>
        <span class="token class-name">uint32_t</span>     fe_iter_idx<span class="token punctuation">;</span>          <span class="token comment">/* foreach iterator index */</span>
    <span class="token punctuation">}</span> u2<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="php7-做的优化" tabindex="-1"><a class="header-anchor" href="#php7-做的优化" aria-hidden="true">#</a> PHP7 做的优化</h3><ol><li>PHP7开始, 对于在zval的value字段中能保存下的值, 就不再对他们进行引用计数了, 而是在拷贝的时候直接赋值, 这样就省掉了大量的引用计数相关的操作, 这部分类型有:</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>IS_LONG
IS_DOUBLE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>对于那种根本没有值, 只有类型的类型, 也不需要引用计数了:</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>IS_NULL
IS_FALSE
IS_TRUE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><p>改变了php5的zval结构，用三个联合体（value、u1、u2），使用同样的空间大小，设计更合理，并预留自定义字段</p></li><li><p><s>对于复杂类型, 一个size_t保存不下的, 那么我们就用value来保存一个指针, 这个指针指向这个具体的值, 引用计数也随之作用于这个值上, 而不在是作用于zval上了.</s></p></li></ol>`,17);function v(k,m){const s=i("ExternalLinkIcon");return t(),p("div",null,[u,n("p",null,[a("摘自："),n("a",d,[a("https://www.laruence.com/2018/04/08/3170.html"),l(s)])]),r])}const h=e(o,[["render",v],["__file","PHP 垃圾回收.html.vue"]]);export{h as default};
