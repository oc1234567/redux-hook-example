import React from 'react'
import { css } from "emotion";

import Provider from './initReactRedux/initProvider'
import * as Actions from "./example-reducer";
import useState from './initReactRedux/useModal/useState'
import useDispatch from './initReactRedux/useModal/useDispatch'

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

function LayoutCount() {
  let { addCountReducer, reduceCountReducer }  = useDispatch();
  
  return (
    <div>
      <Count />
      <div className={styles.LayoutCount}>
          <button onClick={() => {
                addCountReducer();
            }}> Add Count
          </button>
          <button onClick={() => {
              reduceCountReducer();
          }}> Reduce Count
          </button>
      </div>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <Sidebar />
      <Content />
    </div>
  );
}

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

function Count() {
    let state = useState();
  return (
    <CountItem count={state.count || 0} />
  );
}

function ContentSub(props) {
    let {theme} = props;
    return (
        <div className={styles.contentSub}>
            <span>{theme}</span>
        </div>
    )
}

function SidebarSub(props) {
    let {theme} = props;
    let {name} = props.user
    return (
        <div className={styles.sidebar}>
            <span>{name} </span>
            <span>{theme}</span>
        </div>
    )
}

function CountItem(props) {
    let {count} = props;
    return (
        <div>
        <span>{count}</span>
        </div>
    )
}

const styles = {
  sidebar: css`
  background-color: orange
  `,
  contentSub: css`
  background-color: green
  `,
  LayoutCount: css`
  flex-direction: row
  `
  
}

export default App