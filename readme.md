路由
--
- pages目录下的页面会自动映射为路由，所以pages下面的页面组件推荐用小写字母。
- 由于采用nextjs做同构，路由要使用nextjs；具体配置在根目录下的serverjs中书写。动态参数的路由可以使用以下方式书写：
```
<Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
  <a className={classNames.ani}>{show.name}</a>
</Link>
```

获取数据
--

如果页面要使用后端渲染，且后端渲染的时候需要获取数据；可以定义`static getInitialProps = () => {}`。个人感觉大部分页面应该没必要？

CSS
--

- css的书写方式基本可以按照以前书写css的方式，但在组件中需要引用。等同于`import styles from 'xxx.css'`。具体可参考components下的Header.js

```
import { stylesheet, classNames } from './index.css'

<Head>
  <style dangerouslySetInnerHTML={{ __html:globalStyles.stylesheet + stylesheet }} />
</Head>
```
- reset.css和iconfont的css放在了styles/style.css中了，iconfont的unicode需要写两个'\'。
- 只有当前页面引用的css才会被使用，组件卸载后css会消失；具体可见chrome调试器中的head标签。所以很多时候要注意引用全局的css。
- 由于多个组件可能会引用同一个css，会造成css引用的重复；可以通过chrome调试器中的head标签查看。所以引用多个样式最好使用多个Head组件，不要使用字符串拼接的方式
```
正确：
<Head><style dangerouslySetInnerHTML={{ __html: globalStyles.stylesheet }}/></Head>
<Head><style dangerouslySetInnerHTML={{ __html: stylesheet }} /></Head>
反例：
<Head><style dangerouslySetInnerHTML={{ __html: globalStyles.stylesheet + stylesheet }} /></Head>
```
