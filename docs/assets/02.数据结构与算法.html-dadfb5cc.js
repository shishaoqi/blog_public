import{_ as n,W as t,X as c,Y as h,Z as e,$ as r,a1 as i,a2 as a,C as l}from"./framework-7d1f27fd.js";const p={},o=a('<h1 id="问题与简答" tabindex="-1"><a class="header-anchor" href="#问题与简答" aria-hidden="true">#</a> 问题与简答</h1><h2 id="数据结构与算法篇" tabindex="-1"><a class="header-anchor" href="#数据结构与算法篇" aria-hidden="true">#</a> 数据结构与算法篇</h2><h3 id="_1-概述" tabindex="-1"><a class="header-anchor" href="#_1-概述" aria-hidden="true">#</a> 1. 概述</h3><h4 id="解决问题的效率" tabindex="-1"><a class="header-anchor" href="#解决问题的效率" aria-hidden="true">#</a> 解决问题的效率</h4><p>解决问题方法的效率，跟<code>数据的组织方式</code>有关，跟<code>空间的利用效率</code>有关，也跟<code>算法的巧妙程度</code>有关</p><h4 id="抽象数据类型" tabindex="-1"><a class="header-anchor" href="#抽象数据类型" aria-hidden="true">#</a> 抽象数据类型</h4><p><code>抽象数据类型</code>(Abstract Data Type，ADT)是一种对&quot;数据类型&quot;的描述，这种描述是&quot;抽象&quot;的</p><p>数据类型描述内容：一是<code>数据对象集</code>，二是<code>与数据集合相关联的操作集</code></p><h4 id="算法定义" tabindex="-1"><a class="header-anchor" href="#算法定义" aria-hidden="true">#</a> 算法定义</h4><p>算法是一个<code>有限指令集</code>，它接受一些输入，产生输出，并在一定的有限步骤之后终止</p><h4 id="算法复杂度" tabindex="-1"><a class="header-anchor" href="#算法复杂度" aria-hidden="true">#</a> 算法复杂度</h4><ul><li>空间复杂度 S(n)：根据算法写成的程序在执行时占用存储单元的长度</li><li>时间复杂度 T(n)：根据算法写成的程序在执行时耗时时间的长度</li></ul><h4 id="分析算法效率" tabindex="-1"><a class="header-anchor" href="#分析算法效率" aria-hidden="true">#</a> 分析算法效率</h4><ul><li>最坏情况的复杂度 T<sub>worst</sub>(n)</li><li>平均复杂度 T<sub>avg</sub>(n)</li></ul>',14),s=a('<h3 id="_2-实现基础" tabindex="-1"><a class="header-anchor" href="#_2-实现基础" aria-hidden="true">#</a> 2. 实现基础</h3><p>数据结构的处理方法是从这些具体应用中<code>抽象</code>出共性的数据组织与操作方式，进而采用某种具体的程序设计语言<code>实现</code>相应的数据存储与操作</p><h4 id="数据存储基础" tabindex="-1"><a class="header-anchor" href="#数据存储基础" aria-hidden="true">#</a> 数据存储基础</h4><ul><li>数组</li></ul><p>数组是最基本的构造类型，它是一组相同类型数据的有序集合</p><ul><li>结构</li></ul><p>结构类型是一种允许把一些数据分量聚合成一个整体的数据类型，它能够把有内在联系的不同类型的数据统一成一个整体，使它们相互关联</p><ul><li>链表</li></ul><p>链表是一种常见而重要的基础数据结构，也是实现复杂数据结构的重要手段</p><h4 id="流程控制基础" tabindex="-1"><a class="header-anchor" href="#流程控制基础" aria-hidden="true">#</a> 流程控制基础</h4><p>程序设计语言除了能够表达各种各样的数据外，还必须提供一种手段来表达数据处理的过程，即<code>程序的控制过程</code></p><p>按照结构化程序设计的观点，任何程序都可以将程序模块通过三种基本的控制结构进行组合来实现。这三种基本的控制结构是<code>顺序</code>、<code>分支</code>和<code>循环</code></p>',12),u=a('<h3 id="_3-线性结构" tabindex="-1"><a class="header-anchor" href="#_3-线性结构" aria-hidden="true">#</a> 3. 线性结构</h3><h4 id="线性表" tabindex="-1"><a class="header-anchor" href="#线性表" aria-hidden="true">#</a> 线性表</h4><p>线性表(Linear List)是由同一类型的数据元素构成的有序序列的线性结构</p><p>操作集：初始化、指定查找、查找、插入、删除、求表长</p><p>实现方式：顺序存储、链式存储</p><h4 id="堆栈" tabindex="-1"><a class="header-anchor" href="#堆栈" aria-hidden="true">#</a> 堆栈</h4><p>堆栈(Stack)可以认为是具有一定约束的线性表，插入和删除操作都作用在一个称为栈顶(Top)的端点位置</p><p>操作集：生成栈、判断是否满、压栈、判断是否空、出栈</p><p>实现方式：顺序存储、链式存储</p><h4 id="队列" tabindex="-1"><a class="header-anchor" href="#队列" aria-hidden="true">#</a> 队列</h4><p>队列(Queue)是一个有序线性表，队列的插入和删除操作分别是在线性表的两个不同的端点进行</p><p>操作集：生成队列、判断是否满、压入队列、判断是否为空，移除队列</p><p>实现方式：顺序存储、链式存储</p><h3 id="_4-树" tabindex="-1"><a class="header-anchor" href="#_4-树" aria-hidden="true">#</a> 4. 树</h3><p>树(Tree)是一种十分重要且广泛应用的非线性数据结构</p><h4 id="二叉树" tabindex="-1"><a class="header-anchor" href="#二叉树" aria-hidden="true">#</a> 二叉树</h4><p>五种基本形态：空二叉树、只有根节点的二叉树、只有根节点和左子树T<sub>L</sub>的二叉树、只有根节点和右子树T<sub>R</sub>的二叉树、具有根节点、左子树T<sub>L</sub>和右子树T<sub>R</sub>的二叉树</p><p>其它二叉树：斜二叉树、满二叉树、完美二叉树</p><p>实现方式：顺序存储、链式存储</p><p>操作集：创建二叉树、判断是否为空、遍历(先序遍历、中序遍历、后序遍历、层序遍历)</p><h4 id="二叉搜索树" tabindex="-1"><a class="header-anchor" href="#二叉搜索树" aria-hidden="true">#</a> 二叉搜索树</h4><p>二叉搜索树(Binary Search Tree)是一种对排序和查找都很有用的特殊二叉树</p><p>定义：左子树 &lt; 根节点 &lt; 右子树</p><p>实现方式：一般用链表实现</p><p>操作集：创建二叉树、判断是否为空、遍历、查找、查找最小元素、查找最大元素、插入、删除</p><p>时间复杂度：最好 O(logN) 最差 O(N)</p><h4 id="平衡二叉树" tabindex="-1"><a class="header-anchor" href="#平衡二叉树" aria-hidden="true">#</a> 平衡二叉树</h4><p>平衡二叉树(Balanced Binary Tree)又称为 AVL 树，AVL 树的插入、删除、查找操作均可在O(logN)时间内完成</p><p>定义：任一结点的左、右子树均为 AVL 树；根节点左、右子树高度差的绝对值不超过1</p><p>平衡二叉树的调整：单旋调整、双旋调整</p><h4 id="树的应用" tabindex="-1"><a class="header-anchor" href="#树的应用" aria-hidden="true">#</a> 树的应用</h4><p>堆及其操作、哈夫曼树、集合及其运算</p><h3 id="_5-散列查找" tabindex="-1"><a class="header-anchor" href="#_5-散列查找" aria-hidden="true">#</a> 5. 散列查找</h3><p>符号表(SymbolTable)是名字(Name)-属性(Attribute)对的集合，符号表最核心的操作是查找、插入和删除</p><p>操作集：创建符号表、查找指定名字是否存在、获取指定名字对应属性、更改指定名字对应属性、插入新名字及其属性、删除名字及其属性</p><p>使用散列技术实现符号表的操作集，符号表也叫做<code>散列表</code>(Hash Table，即哈希表)，散列(Hashing)是一种重要的查找方法</p><p>散列函数(哈希函数)：在查找数据时，由函数 h 对给定值 key 计算出地址，将 key 与该地址单元中数据对象关键字进行比较，确定查找是否成功。散列法又称为&quot;关键字-地址转换法&quot;</p><p>关键字分类：一般把关键字分为<code>数字型关键字</code>和<code>字符串型关键字</code></p><h4 id="数字型关键字的散列构造" tabindex="-1"><a class="header-anchor" href="#数字型关键字的散列构造" aria-hidden="true">#</a> 数字型关键字的散列构造</h4><ul><li>直接定址法</li></ul><p>h(key) = a x key + b (a、b为常数)</p><ul><li>除留余数法</li></ul><p>h(key) = key mod p</p><ul><li>数字分析法</li></ul><p>h(key) = atoi(key + 7)</p><h4 id="字符串型关键字的散列构造" tabindex="-1"><a class="header-anchor" href="#字符串型关键字的散列构造" aria-hidden="true">#</a> 字符串型关键字的散列构造</h4><ul><li>ASCII 码加和法</li></ul><p>h(key) = (Σkey[i]) mode TableSize</p><h4 id="冲突处理" tabindex="-1"><a class="header-anchor" href="#冲突处理" aria-hidden="true">#</a> 冲突处理</h4><ul><li>开放地址法</li></ul><p>开放地址法就是一旦产生了冲突，即该地址已经存放了其它数据元素，就去寻找另一个空的散列地址</p><ul><li>链地址法</li></ul><p>链地址法是将所有关键词为同义词的数据对象通过结点链接存储在同一个单链表中</p><ul><li>影响冲突的因素</li></ul><p>散列函数是否均匀、处理冲突的方法、散列表的装填因子 α</p><h3 id="_6-图" tabindex="-1"><a class="header-anchor" href="#_6-图" aria-hidden="true">#</a> 6. 图</h3><p>图的结构是任意两个数据对象之前都可能存在某种特定关系的数据结构</p>',57);function E(b,_){const d=l("RouterLink");return t(),c("div",null,[o,h("p",null,[e("拓展阅读 "),r(d,{to:"/interview/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/02.%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/01.%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95%E6%A6%82%E8%BF%B0.html"},{default:i(()=>[e("《数据结构与算法概述》")]),_:1})]),s,h("p",null,[e("拓展阅读 "),r(d,{to:"/interview/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/02.%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95/02.%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E5%AE%9E%E7%8E%B0%E5%9F%BA%E7%A1%80.html"},{default:i(()=>[e("《数据结构实现基础》")]),_:1})]),u])}const f=n(p,[["render",E],["__file","02.数据结构与算法.html.vue"]]);export{f as default};
