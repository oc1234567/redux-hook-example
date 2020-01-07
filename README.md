# redux-hook
开源的使用hooks编写的react-redux方案

## 使用示例：

//引入 Provider 文件
//赋值 actions 与 initinalState
//示例：
```
import {
    View,
    Text,
    Button,
} from 'react-native'
import * as Actions from "./example-reducer";
function App() {
    return (
        <View>
        <Provider actions={Actions} initinalState={{count: 0, user: {name: 'Alice'}, theme: 'light'}}>
            <LayoutCount />
            <Layout />
          </Provider>
        
        </View>
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
      <Button onPress={() => {
        setTheme('dark');
    }} title='Change Name'></Button>
  </React.Fragment>
  );
}

function Sidebar() {
    let { setName }  = useDispatch();

    let state = useState();
  return (
    <React.Fragment>
      <SidebarSub user={state.user} theme={state.theme} />
      <Button onPress={() => {
        setName('Bob');
    }} title='Change Theme'></Button>
    </React.Fragment>
    
  );
}
```

如上所示，即可以完成最简单的redux状态管理~~，另外，本例中使用react-native组件，可替换为react-dom组件使用；有问题，欢迎提issue ~