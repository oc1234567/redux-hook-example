# redux-hook
开源的使用hooks编写的react-redux方案

## 使用示例：

引入 Provider 文件 赋值 actions 与 initinalState
示例：
```tsx
import Provider from './initReactRedux/initProvider'
import * as Actions from "./example-reducer";
function App() {
    return (
        <div>
        <Provider actions={Actions} initinalState={{count: 0, user: {name: 'Alice'}, theme: 'light'}}>
            <LayoutCount />
            <Layout />
          </Provider>
        
        </div>
      );
}
```

在子组件内部使用 state 值与触发 dispatch
```tsx
import useState from './initReactRedux/useModal/useState'
import useDispatch from './initReactRedux/useModal/useDispatch'

function Content() {
    let { setTheme }  = useDispatch();

    let state = useSubstate((state) => ({name: state.user.name, theme: state.theme}))
  return (
    <React.Fragment>
      <ContentItem theme={state.theme} />
      <button onClick={() => {
        setTheme(state.theme==='dark' ? 'light' : 'dark');
    }}> Change Name </button>
  </React.Fragment>
  );
}

function Sidebar() {
    let { setName }  = useDispatch();
    let state = useSubstate((state) => ({name: state.user.name, theme: state.theme}))
  return (
    <React.Fragment>
      <SidebarItem name={state.name} theme={state.theme} />
      <button onClick={() => {
        setName(state.name==='Bob' ? 'Alice' : 'Bob');
    }}> Change Theme </button>
    </React.Fragment>
    
  );
}
```

如上所示，即可以完成最简单的redux状态管理
