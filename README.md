# redux-hook
开源的使用hooks编写的react-redux方案

## 使用示例：

//引入 Provider 文件 赋值 actions 与 initinalState
示例：
```
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

//在子组件内部使用 state 值与触发 dispatch
```
function Content() {
    let { setTheme }  = useDispatch();

    let state = useState();
  
    return (
    <React.Fragment>
      <ContentSub theme={state.theme} />
      <button onClick={() => {
        setTheme('dark');
    }}> Change Name </button>
  </React.Fragment>
  );
}

function Sidebar() {
    let { setName }  = useDispatch();

    let state = useState();
    
    return (
    <React.Fragment>
      <SidebarSub user={state.user} theme={state.theme} />
      <button onClick={() => {
        setName('Bob');
    }}> Change Theme </button>
    </React.Fragment>
    
  );
}
```

如上所示，即可以完成最简单的redux状态管理
