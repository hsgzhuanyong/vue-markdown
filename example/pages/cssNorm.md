# CSS命名规范


> CSS 的命名规范又叫做BEM规范，为的是结束混乱的命名方式，达到一个语义化的CSS命名方式。 BEM是三个单词的缩写：Block（块）代表更高级别的抽象或组件，Element（元素） Block的后代，以及Modifier（修饰） 不同状态的修饰符。

-------------

## 命名方法：
```html
  .block__element--modifier {
      display: flex;
  }
  .block--modifier {
      display: flex;
  }
  .block__element {
      display: flex;
  }
  
  <p class="header">
      <p class="header__body">
          <button class="header__button--primary"></button>
          <button class="header__button--default"></button>
      </p>
  </p>
```

> 通过BEM的命名规范我们可以达到一个什么目的呢？就是有一个清晰的描述，从上面的代码中我们可以看到一层一层的清晰明了，而且有一个清晰的结构。

## 1 block

> block 代表一个更高级别的抽象或者是一个组件，它仅仅作为一个边界。它主要的功能有下面三点：负责描述功能的，不应该包含状态。
```css
  /* 正确的 */
  .header {
  
  }
  
  /* 错误的 */
  .header--select {
  
  }
```

> 不影响自身布局，不包含具体的样式，也就是block里面不应该加样式
```css
  /* 正确的 */
  .header {
  
  }
  
  /* 错误的 */
  .header {
      margin-top: 50px;
  }
```

> 不能使用元素选择器和ID选择器
```css
  /* 正确的 */
  .header {
  
  }
  
  /* 错误的 */
  .header a {
      margin-top: 50px;
  }
```

## 2 Element

> 是用一个双下划线隔开
```css
  /* 正确的 */
  .header__body {
      margin-top: 50px;
  }
  
  /* 错误的 */
  .header .body {
      margin-top: 50px;
  }
```

> 表示的是目的，而不是状态，如下例子：目的是在header下面定义三个区域 body、logo、title，但是并没有指定任何状态。
```css
  .header__body {
      margin-top: 50px;
  }
  
  .header__logo {
      margin-top: 50px;
  }
  
  .header__title {
      margin-top: 50px;
  }
```

> 不能脱离Block父级单独使用
```html
  /* 正确的 */
  <p class="header">
      <p class="header__body">
          <button class="header__button--primary"></button>
          <button class="header__button--default"></button>
      </p>
  </p>
  
  /* 错误的 */
  <p>
      <p class="header__body">
          <button class="header__button--primary"></button>
          <button class="header__button--default"></button>
      </p>
  </p>
```

## 3 Modifier
> 表示的是一个状态，是用双横杠分开的。
```css
  .header__button--default {
      background: none;
  }
  /* Boolean */
  .header__button--select {
      background: none;
  }
  /* 枚举 */
  .header__button--primary {
      background: #329FD9;
  }
```

> 不能单独使用
```html
  /* 正确的 */
  <p class="header">
      <p class="header__body">
          <button class="header__button--primary"></button>
          <button class="header__button--default"></button>
      </p>
  </p>
  
  /* 错误的 */
  <p>
      <p>
          <button class="header__button--primary"></button>
          <button class="header__button--default"></button>
      </p>
  </p>
```

## BEM在预处理器语言中的使用
> 在Sass中的使用
```css
  .header {
      &__body {
          padding: 20px;
      }
  
      &__button {
          &--primary {
              background: #329FD9;
          }
          &--default {
              background: none;
          }
      }
  }
```

> 在Less中的使用
```css
   .@classname: header;
   
   .@{classname} {
     .@{classname}__body {
       padding: 20px;
     }
   
     .@{classname}__button {
       .@{classname}__button--primary {
         background: #329FD9;
       }

       .@{classname}__button--default {
         background: none;
       }
     }
   }
```
