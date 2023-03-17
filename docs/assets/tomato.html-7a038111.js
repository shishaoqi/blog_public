import{_ as e,W as i,X as n,a2 as a}from"./framework-6199cc12.js";const s={},d=a(`<h1 id="tomato" tabindex="-1"><a class="header-anchor" href="#tomato" aria-hidden="true">#</a> Tomato</h1><h2 id="heading-2" tabindex="-1"><a class="header-anchor" href="#heading-2" aria-hidden="true">#</a> Heading 2</h2><p>Here is the content.</p><h3 id="heading-3" tabindex="-1"><a class="header-anchor" href="#heading-3" aria-hidden="true">#</a> Heading 3</h3><p>Here is the content.</p><h3 id="调试工具" tabindex="-1"><a class="header-anchor" href="#调试工具" aria-hidden="true">#</a> 调试工具</h3><p>go 调试可以借助 gdb，但官方建议使用 dlv。如何安装 dlv 请自行搜索相关教程</p><h3 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h3><p>命令行下进入 dlv，输出 help 会有对应命令使用说明</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ dlv
(dlv) help

The following commands are available:

Running the program:
    call ------------------------ Resumes process, injecting a function call (EXPERIMENTAL!!!)
    continue (alias: c) --------- Run until breakpoint or program termination.
    next (alias: n) ------------- Step over to next source line.
    rebuild --------------------- Rebuild the target executable and restarts it. It does not work if the executable was not built by delve.
    restart (alias: r) ---------- Restart process.
    step (alias: s) ------------- Single step through program.
    step-instruction (alias: si)  Single step a single cpu instruction.
    stepout (alias: so) --------- Step out of the current function.
	......
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="调试案例-dlv-调试编译器入口文件" tabindex="-1"><a class="header-anchor" href="#调试案例-dlv-调试编译器入口文件" aria-hidden="true">#</a> 调试案例：dlv 调试编译器入口文件</h3><p>golang 实现了自举，有没有想过深入探究下 go 语言编译实现？应该有许多 gopher 们的回答是当然，什么编译前端与后端、词法分析与语法分析、语义分析、类型检查和中间代码生成都备上了，可就在要开灶时，发现没打火机，起不了火。是的，曾经我也是，就差点火那一下。今天，我们就来学习如何把go编译火打着~~~</p><ol><li><p>调试编译入口文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dlv debug src/cmd/compile/internal/gc/main.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>设置编译器编译目标文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(dlv) r /Users/xxx/Code/go/goByExample/helloWorld.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>设置断点</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>b main.main
Breakpoint 1 set at 0x1c9cc6f for main.main() ./src/cmd/compile/main.go:45

(dlv) b syntax.(*source).init
Breakpoint 2 set at 0x1b03eca for cmd/compile/internal/syntax.(*source).init() ./src/cmd/compile/internal/syntax/source.go:60

(dlv) b syntax.(*scanner).next
Breakpoint 3 set at 0x1aff9f2 for cmd/compile/internal/syntax.(*scanner).next() ./src/cmd/compile/internal/syntax/scanner.go:88
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>执行</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(dlv) c
&gt; main.main() ./src/cmd/compile/main.go:45 (hits goroutine(1):1 total:1) (PC: 0x1c9cc6f)
    40:         &quot;riscv64&quot;:  riscv64.Init,
    41:         &quot;s390x&quot;:    s390x.Init,
    42:         &quot;wasm&quot;:     wasm.Init,
    43: }
    44:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),l=[d];function t(r,c){return i(),n("div",null,l)}const v=e(s,[["render",t],["__file","tomato.html.vue"]]);export{v as default};
