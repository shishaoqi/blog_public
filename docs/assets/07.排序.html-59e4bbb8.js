import{_ as p,W as u,X as r,$ as c,a1 as a,a2 as o,Y as n,Z as s,C as d}from"./framework-7d1f27fd.js";const k={},m=o('<h1 id="排序" tabindex="-1"><a class="header-anchor" href="#排序" aria-hidden="true">#</a> 排序</h1><p>没有一种排序算法在任何情况下都是最优的，必须根据实际情况选择最优的算法来解决问题</p><div class="hint-container tip"><p class="hint-container-title">知识点</p><p>算法稳定性：在一组待排序记录中，如果存在任意两个相等的记录 R 和 S，且在待排序记录中 R 在 S 前，如果在排序后 R 依然在 S 前，即它们的前后位置在排序前后不发生改变，则称为排序算法为稳定的</p></div><p><strong>比较类非线性时间排序</strong>：交换类排序（快速排序、冒泡排序）、插入类排序（简单插入排序、希尔排序）、选择类排序（简单选择排序、堆排序）、归并排序（二路归并排序、多路归并排序）。</p><p><strong>非比较类线性时间排序</strong>：计数排序、基数排序、桶排序</p><h2 id="选择排序" tabindex="-1"><a class="header-anchor" href="#选择排序" aria-hidden="true">#</a> 选择排序</h2><h3 id="简单选择排序" tabindex="-1"><a class="header-anchor" href="#简单选择排序" aria-hidden="true">#</a> 简单选择排序</h3><p>简单选择排序(Simple Selection Sort)是一种直观的排序算法，在未排序的序列中，选出最小的元素和序列的首位元素交换，接下来在剩下的未排序序列中再选出最小元素与序列的第二位元素交换，依次类推，最后形成从小到大的已排序序列</p><p>时间复杂度：O(N<sup>2</sup>)</p>',9),v=n("div",{class:"language-c line-numbers-mode","data-ext":"c"},[n("pre",{class:"language-c"},[n("code",null,[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<stdio.h>")]),s(`

`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"int"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(" j "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"int"),s(" count "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"9"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"int"),s(" arr"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"9"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"int"),s(" swapKey "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"int"),s(" min "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 关键点"),s(`
    `),n("span",{class:"token keyword"},"int"),s(" tmp "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" count"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        min `),n("span",{class:"token operator"},"="),s(" i"),n("span",{class:"token punctuation"},";"),s(`

        `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),s("j "),n("span",{class:"token operator"},"="),s(" i"),n("span",{class:"token operator"},"+"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" j "),n("span",{class:"token operator"},"<"),s(" count"),n("span",{class:"token punctuation"},";"),s(" j"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("arr"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"<"),s(" arr"),n("span",{class:"token punctuation"},"["),s("min"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                min `),n("span",{class:"token operator"},"="),s(" j"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        
        tmp `),n("span",{class:"token operator"},"="),s(" arr"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
        arr`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" arr"),n("span",{class:"token punctuation"},"["),s("min"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
        arr`),n("span",{class:"token punctuation"},"["),s("min"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" tmp"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" count"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token function"},"printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"%d, "'),n("span",{class:"token punctuation"},","),s(" arr"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token function"},"printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"\\n"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"var"),s(" s "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"9"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},"}"),s(`

	fmt`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"Println"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"selectSort"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"func"),s(),n("span",{class:"token function"},"selectSort"),n("span",{class:"token punctuation"},"("),s("s "),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token builtin"},"int"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"for"),s(" i "),n("span",{class:"token operator"},":="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),s(),n("span",{class:"token punctuation"},"{"),s(`
		min `),n("span",{class:"token operator"},":="),s(` i
		`),n("span",{class:"token keyword"},"for"),s(" j "),n("span",{class:"token operator"},":="),s(" i "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" j "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token function"},"len"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(" j"),n("span",{class:"token operator"},"++"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"if"),s(" s"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"<"),s(" s"),n("span",{class:"token punctuation"},"["),s("min"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token punctuation"},"{"),s(`
				min `),n("span",{class:"token operator"},"="),s(` j
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		s`),n("span",{class:"token punctuation"},"["),s("min"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" s"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" s"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" s"),n("span",{class:"token punctuation"},"["),s("min"),n("span",{class:"token punctuation"},"]"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"return"),s(` s
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-php line-numbers-mode","data-ext":"php"},[n("pre",{class:"language-php"},[n("code",null,[n("span",{class:"token php language-php"},[n("span",{class:"token delimiter important"},"<?php"),s(`

`),n("span",{class:"token variable"},"$arr"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"9"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token variable"},"$reArr"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"selectSort"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token function"},"print_r"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$reArr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function-definition function"},"selectSort"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$arr"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$i"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token variable"},"$i"),s(),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token function"},"count"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token variable"},"$i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token variable"},"$min"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token variable"},"$i"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$j"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token variable"},"$i"),n("span",{class:"token operator"},"+"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token variable"},"$j"),s(),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token function"},"count"),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token variable"},"$j"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token variable"},"$arr"),n("span",{class:"token punctuation"},"["),n("span",{class:"token variable"},"$j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token variable"},"$arr"),n("span",{class:"token punctuation"},"["),n("span",{class:"token variable"},"$min"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token variable"},"$min"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token variable"},"$j"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token variable"},"$tmp"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token variable"},"$arr"),n("span",{class:"token punctuation"},"["),n("span",{class:"token variable"},"$i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token variable"},"$arr"),n("span",{class:"token punctuation"},"["),n("span",{class:"token variable"},"$i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token variable"},"$arr"),n("span",{class:"token punctuation"},"["),n("span",{class:"token variable"},"$min"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token variable"},"$arr"),n("span",{class:"token punctuation"},"["),n("span",{class:"token variable"},"$min"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token variable"},"$tmp"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token variable"},"$arr"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token delimiter important"},"?>")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=o('<h3 id="堆排序" tabindex="-1"><a class="header-anchor" href="#堆排序" aria-hidden="true">#</a> 堆排序</h3><p>将无序的序列生成一个最大堆，将堆顶元素与最后一个元素对换位置，将剩下元素生成最大堆，依次进行元素交换并生成最大堆</p><p>时间复杂度：O(NlogN) 空间复杂度：O(1)</p><p>堆排序（Heapsort）是指利用堆这种数据结构所设计的一种排序算法。堆积是一个近似完全二叉树的结构，并同时满足堆积的性质：即子结点的键值或索引总是小于（或者大于）它的父节点。堆排序可以说是一种利用堆的概念来排序的选择排序。分为两种方法：</p><ul><li>大顶堆：每个节点的值都大于或等于其子节点的值，在堆排序算法中用于升序排列；</li><li>小顶堆：每个节点的值都小于或等于其子节点的值，在堆排序算法中用于降序排列；</li></ul><p>堆排序的平均时间复杂度为 Ο(nlogn)。</p><h4 id="小顶堆" tabindex="-1"><a class="header-anchor" href="#小顶堆" aria-hidden="true">#</a> 小顶堆</h4>',7),_=n("div",{class:"language-c line-numbers-mode","data-ext":"c"},[n("pre",{class:"language-c"},[n("code",null,[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<stdio.h>")]),s(`

`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`


`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-php line-numbers-mode","data-ext":"php"},[n("pre",{class:"language-php"},[n("code",null,[n("span",{class:"token php language-php"},[n("span",{class:"token delimiter important"},"<?php"),s(`


`)])])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("h4",{id:"大顶堆",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#大顶堆","aria-hidden":"true"},"#"),s(" 大顶堆")],-1),x=n("div",{class:"language-c line-numbers-mode","data-ext":"c"},[n("pre",{class:"language-c"},[n("code",null,[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<stdio.h>")]),s(`

`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),$=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`


`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("div",{class:"language-php line-numbers-mode","data-ext":"php"},[n("pre",{class:"language-php"},[n("code",null,[n("span",{class:"token php language-php"},[n("span",{class:"token delimiter important"},"<?php"),s(`


`)])])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),N=n("h2",{id:"插入排序",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#插入排序","aria-hidden":"true"},"#"),s(" 插入排序")],-1),P=n("h3",{id:"简单插入排序",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#简单插入排序","aria-hidden":"true"},"#"),s(" 简单插入排序")],-1),j=n("p",null,"将待排序的一组序列分为已排好序和未排序的两个部分，初始状态时，已排序序列仅包含第一个元素，未排序序列中的元素为除了第一个以外N-1个元素；此后将未排序序列中的元素逐一插入到已排序的序列中。如此往复，经过N-1次插入后，未排序序列中元素个数为0，则排序完成",-1),C=n("p",null,[s("时间复杂度：O(N"),n("sup",null,"2"),s(") 稳定排序")],-1),H=n("div",{class:"language-c line-numbers-mode","data-ext":"c"},[n("pre",{class:"language-c"},[n("code",null,[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<stdio.h>")]),s(`

`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`


`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),G=n("div",{class:"language-php line-numbers-mode","data-ext":"php"},[n("pre",{class:"language-php"},[n("code",null,[n("span",{class:"token php language-php"},[n("span",{class:"token delimiter important"},"<?php"),s(`


`)])])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),O=n("h3",{id:"希尔排序",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#希尔排序","aria-hidden":"true"},"#"),s(" 希尔排序")],-1),V=n("p",null,'将待排序的一组元素按一定间隔分为若干个序列，分别进行插入排序。开始时设置的"间隔"较大，在每轮排序中将间隔逐步减小，直到"间隔"为1，也就是最后一步是进行简单插入排序',-1),B=n("p",null,"时间复杂度：和增量序列的选取有关 非稳定排序",-1),M=n("div",{class:"language-c line-numbers-mode","data-ext":"c"},[n("pre",{class:"language-c"},[n("code",null,[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<stdio.h>")]),s(`

`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),R=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`


`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),T=n("div",{class:"language-php line-numbers-mode","data-ext":"php"},[n("pre",{class:"language-php"},[n("code",null,[n("span",{class:"token php language-php"},[n("span",{class:"token delimiter important"},"<?php"),s(`


`)])])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("h2",{id:"交换排序",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#交换排序","aria-hidden":"true"},"#"),s(" 交换排序")],-1),K=n("h3",{id:"冒泡排序",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#冒泡排序","aria-hidden":"true"},"#"),s(" 冒泡排序")],-1),W=n("p",null,"对元素个数为 N 的待排序序列进行排序时，共进行N-1次循环。在第 k 次循环中，对从第1到第N-k个元素从前往后进行比较，每次比较相邻的两个元素，若前一个元素大于后一个元素，则两者互换位置，否则保持位置不变",-1),X=n("p",null,[s("时间复杂度：O(N"),n("sup",null,"2"),s(")")],-1),Y=n("div",{class:"language-c line-numbers-mode","data-ext":"c"},[n("pre",{class:"language-c"},[n("code",null,[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<stdio.h>")]),s(`

`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Z=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`


`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=n("div",{class:"language-php line-numbers-mode","data-ext":"php"},[n("pre",{class:"language-php"},[n("code",null,[n("span",{class:"token php language-php"},[n("span",{class:"token delimiter important"},"<?php"),s(`


`)])])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),z=n("h3",{id:"快速排序",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#快速排序","aria-hidden":"true"},"#"),s(" 快速排序")],-1),D=n("p",null,'将未排序元素根据一个作为基准的"主元"分为两个子序列，其中一个子序列的记录均大于主元，而另一个子序列均小于主元，然后递归地对这两个子序列用类似的方法进行排序',-1),F=n("p",null,[s("时间复杂度：O(Nlog"),n("sub",null,"2"),s("N)")],-1),I=n("div",{class:"language-c line-numbers-mode","data-ext":"c"},[n("pre",{class:"language-c"},[n("code",null,[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<stdio.h>")]),s(`

`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),J=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`


`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),L=n("div",{class:"language-php line-numbers-mode","data-ext":"php"},[n("pre",{class:"language-php"},[n("code",null,[n("span",{class:"token php language-php"},[n("span",{class:"token delimiter important"},"<?php"),s(`


`)])])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Q=n("h2",{id:"归并排序",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#归并排序","aria-hidden":"true"},"#"),s(" 归并排序")],-1),U=n("p",null,"将大小为 N 的序列看成 N 个长度为1的子序列，接下来将相邻子序列两两进行归并操作，形成N/2(+1)个长度为2(或1)的有序子序列；然后再继续进行相邻子序列两两归并操作，如果一直循环，直到剩下1个长度为 N 的序列，则该序列为原序列完成排序后的结果",-1),nn=n("p",null,[s("时间复杂度：O(Nlog"),n("sub",null,"2"),s("N) 空间复杂度：O(N)")],-1),sn=n("div",{class:"language-c line-numbers-mode","data-ext":"c"},[n("pre",{class:"language-c"},[n("code",null,[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<stdio.h>")]),s(`

`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),an=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`


`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),en=n("div",{class:"language-php line-numbers-mode","data-ext":"php"},[n("pre",{class:"language-php"},[n("code",null,[n("span",{class:"token php language-php"},[n("span",{class:"token delimiter important"},"<?php"),s(`


`)])])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),tn=n("h2",{id:"基数排序",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#基数排序","aria-hidden":"true"},"#"),s(" 基数排序")],-1),ln=n("h3",{id:"桶排序",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#桶排序","aria-hidden":"true"},"#"),s(" 桶排序")],-1),cn=n("p",null,'如果已知 N 个关键字的取值范围是在 0 到 M-1 之间，而 M 比 N 小的多，则桶排序算法将关键字的每个取值建立一个"桶"，即建立 M 个桶，在扫描 N 个关键字时，将每个关键字放入相应的桶中，然后按桶的顺序收集一遍就自然有序了',-1),on=n("div",{class:"language-c line-numbers-mode","data-ext":"c"},[n("pre",{class:"language-c"},[n("code",null,[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<stdio.h>")]),s(`

`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),pn=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`


`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),un=n("div",{class:"language-php line-numbers-mode","data-ext":"php"},[n("pre",{class:"language-php"},[n("code",null,[n("span",{class:"token php language-php"},[n("span",{class:"token delimiter important"},"<?php"),s(`


`)])])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),rn=n("h3",{id:"基数排序-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#基数排序-1","aria-hidden":"true"},"#"),s(" 基数排序")],-1),dn=n("p",null,"基数排序是桶排序的一种推广，它所考虑的待排记录包含不止一个关键字",-1),kn=n("div",{class:"language-c line-numbers-mode","data-ext":"c"},[n("pre",{class:"language-c"},[n("code",null,[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),s(),n("span",{class:"token string"},"<stdio.h>")]),s(`

`),n("span",{class:"token keyword"},"int"),s(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),mn=n("div",{class:"language-go line-numbers-mode","data-ext":"go"},[n("pre",{class:"language-go"},[n("code",null,[n("span",{class:"token keyword"},"package"),s(` main

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"("),s(`
	`),n("span",{class:"token string"},'"fmt"'),s(`
`),n("span",{class:"token punctuation"},")"),s(`


`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),vn=n("div",{class:"language-php line-numbers-mode","data-ext":"php"},[n("pre",{class:"language-php"},[n("code",null,[n("span",{class:"token php language-php"},[n("span",{class:"token delimiter important"},"<?php"),s(`


`)])])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function bn(hn,gn){const i=d("CodeTabs");return u(),r("div",null,[m,c(i,{id:"29",data:[{title:"C"},{title:"Go"},{title:"PHP"}],active:0},{tab0:a(({title:e,value:t,isActive:l})=>[v]),tab1:a(({title:e,value:t,isActive:l})=>[b]),tab2:a(({title:e,value:t,isActive:l})=>[h]),_:1}),g,c(i,{id:"70",data:[{title:"C"},{title:"Go"},{title:"PHP"}],active:0},{tab0:a(({title:e,value:t,isActive:l})=>[_]),tab1:a(({title:e,value:t,isActive:l})=>[f]),tab2:a(({title:e,value:t,isActive:l})=>[y]),_:1}),w,c(i,{id:"84",data:[{title:"C"},{title:"Go"},{title:"PHP"}],active:0},{tab0:a(({title:e,value:t,isActive:l})=>[x]),tab1:a(({title:e,value:t,isActive:l})=>[$]),tab2:a(({title:e,value:t,isActive:l})=>[A]),_:1}),N,P,j,C,c(i,{id:"107",data:[{title:"C"},{title:"Go"},{title:"PHP"}],active:0},{tab0:a(({title:e,value:t,isActive:l})=>[H]),tab1:a(({title:e,value:t,isActive:l})=>[S]),tab2:a(({title:e,value:t,isActive:l})=>[G]),_:1}),O,V,B,c(i,{id:"127",data:[{title:"C"},{title:"Go"},{title:"PHP"}],active:0},{tab0:a(({title:e,value:t,isActive:l})=>[M]),tab1:a(({title:e,value:t,isActive:l})=>[R]),tab2:a(({title:e,value:t,isActive:l})=>[T]),_:1}),E,K,W,X,c(i,{id:"150",data:[{title:"C"},{title:"Go"},{title:"PHP"}],active:0},{tab0:a(({title:e,value:t,isActive:l})=>[Y]),tab1:a(({title:e,value:t,isActive:l})=>[Z]),tab2:a(({title:e,value:t,isActive:l})=>[q]),_:1}),z,D,F,c(i,{id:"170",data:[{title:"C"},{title:"Go"},{title:"PHP"}],active:0},{tab0:a(({title:e,value:t,isActive:l})=>[I]),tab1:a(({title:e,value:t,isActive:l})=>[J]),tab2:a(({title:e,value:t,isActive:l})=>[L]),_:1}),Q,U,nn,c(i,{id:"190",data:[{title:"C"},{title:"Go"},{title:"PHP"}],active:0},{tab0:a(({title:e,value:t,isActive:l})=>[sn]),tab1:a(({title:e,value:t,isActive:l})=>[an]),tab2:a(({title:e,value:t,isActive:l})=>[en]),_:1}),tn,ln,cn,c(i,{id:"210",data:[{title:"C"},{title:"Go"},{title:"PHP"}],active:0},{tab0:a(({title:e,value:t,isActive:l})=>[on]),tab1:a(({title:e,value:t,isActive:l})=>[pn]),tab2:a(({title:e,value:t,isActive:l})=>[un]),_:1}),rn,dn,c(i,{id:"227",data:[{title:"C"},{title:"Go"},{title:"PHP"}],active:0},{tab0:a(({title:e,value:t,isActive:l})=>[kn]),tab1:a(({title:e,value:t,isActive:l})=>[mn]),tab2:a(({title:e,value:t,isActive:l})=>[vn]),_:1})])}const fn=p(k,[["render",bn],["__file","07.排序.html.vue"]]);export{fn as default};
