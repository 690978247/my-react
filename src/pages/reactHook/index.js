import React, { Component, useState, useEffect, useReducer  } from 'react' 
import { Button } from 'antd'

/* Hook 函数不能在class内使用 */

// function ReactHook() {
//   const [count, setCount] = useState(0)
//   const [todos, setTodos] = useState([{ text: '学习 Hook' }])

//   // 相当于 componentDidMount 和 componentDidUpdate: 
//   // useEffect 第二个参数 跳过对effect的调用，只有当数组内的参数值变化才会调用useEffect函数
//   // useEffect（fn(), []）useEffect函数第二个参数传递一个空数组则 === componentDidMount 钩子，effect 内部的 props 和 state 就会一直拥有其初始值
//   useEffect(() => {
//     // 使用浏览器的API更新页面标题
//     document.title = `You clicked ${count} times`
//   }, [count])

//   return (
//     <div>
//       <p>You Clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)} >
//         Click me
//       </button>
//       <p>{todos[0].text}</p>
//     </div>
//   )
// }

// class ReactHook extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       count: 0
//     }
//   }

//   componentDidMount() {
//     document.title = `You Clicked ${this.state.count} times`
//   }

//   componentDidUpdate() {
//     document.title = `You Clicked ${this.state.count} times`
//   }

//   render() {
//     return (
//       <div>
//        <p>You Clicked {this.state.count} times</p>
//        <button onClick={() => this.setState({ count: this.state.count + 1 })} >
//          Click me
//        </button>
//      </div>
//     )
//   }
// }

// function ReactHook({initialCount = 0}) {
//   const [count, setCount] = useState(initialCount)

//   return (
//     <>
//       Count: {count}
//       <button onClick={() => setCount(initialCount)} >Reset</button>
//       <button onClick={() => setCount(prevCount => prevCount - 1)} > - </button>
//       <button onClick={() => setCount(prevCount => prevCount + 1)}> + </button>
//     </>
//   )

// }

// const initialState = { count: 0 }

// function reducer(state,action) {
//   switch (action.type) {
//     case 'increment': 
//       return { count: state.count + 1 };
//     case 'decrement': 
//       return { count: state.count - 1 };
//     default: 
//       throw new Error()
//   } 
// }

// function ReactHook() {
//   const [state, dispath] = useReducer(reducer, initialState)

//   return(
//     <>
//       Count: {state.count}
//       <button onClick={() => dispath({type: 'decrement'})} >-</button>
//       <button onClick={() => dispath({type: 'increment'})} >+</button>
//     </>
//   )

// }

  // function init(initialCount) {
  //   return { count: initialCount }
  // }

  // function reducer(state, action) {
  //   switch(action.type) {
  //     case 'increment':
  //       return { count: state.count + 1 }
  //     case 'decrement':
  //       return { count: state.count - 1 }
  //     case 'reset':
  //       return init(action.payload)
  //     default: 
  //       throw new Error()
  //   }
  // }

  // function ReactHook({initialCount = 0}) {
  //   const [state, dispatch] = useReducer(reducer, initialCount, init)
  //   return (
  //     <>
  //       Count: {state.count}
  //       <button onClick={() => dispatch({type: 'reset', payload: initialCount})} >Reset</button>
  //       <button onClick={() => dispatch({type: 'decrement'})} >-</button>
  //       <button onClick={() => dispatch({type: 'increment'})}>+</button>
  //     </>
  //   )
  // }

  /* 温度计 */
  // const scaleNames = {
  //   c: 'Celsius',
  //   f: 'Fahrenheit'
  // }

  // function BoilingVerdict(props) {
  //   if (props.celsius >= 100) {
  //     return <p>The water would boil.</p>
  //   } return <p>The water would not boil</p>
  // }

  // function toCelsius(fahrenheit) {
  //   return (fahrenheit - 32) * 5 / 9
  // }

  // function toFahrenheit(celsius) {
  //   return (celsius * 9 / 5) + 32
  // }

  // function tryConvert(temperature, convert) {
  //   const input = parseFloat(temperature)
  //   if (Number.isNaN(input)) {
  //     return ''
  //   }

  //   const output = convert(input)
  //   const rounded = Math.round(output * 1000) / 1000
  //   return rounded.toString()
  // }

  // class TemperatureInput  extends Component {
  //   constructor(props){
  //     super(props)
  //     this.handleChange = this.handleChange.bind(this)
  //     this.state = { temperature: '' }
  //   }

  //   handleChange(e) {
  //     // this.setState({ temperature: e.target.value })
  //     this.props.onTemperatureChange(e.target.value)
  //   }

  //   render() {
  //     const temperature = this.props.temperature
  //     const scale = this.props.scale
  //     return (
  //       <fieldset>
  //         <legend>Enter temperature in {scaleNames[scale]}:</legend>
  //         <input value={temperature} onChange={this.handleChange} />
  //         {/* <BoilingVerdict celsius={parseFloat(temperature)} /> */}
  //       </fieldset>
  //     )
  //   }

  // }

  // class ReactHook extends Component{
  //   constructor(props){
  //     super(props)
  //     this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
  //     this.handleFahrenheitChange  = this.handleFahrenheitChange .bind(this)
  //     this.state = {
  //       temperature: '',
  //       scale: 'c'
  //     }
  //   }

  //   handleCelsiusChange(temperature) {
  //     this.setState({scale: 'c', temperature})
  //   }

  //   handleFahrenheitChange(temperature) {
  //     this.setState({scale: 'f', temperature})
  //   }

  //   render() {
  //     const scale = this.state.scale
  //     const temperature = this.state.temperature
  //     const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
  //     const fahrenheit  = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature

  //     console.log(celsius, fahrenheit)
  //     return (
  //       <div>
  //         <TemperatureInput 
  //           scale="c"
  //           temperature={celsius}
  //           onTemperatureChange={this.handleCelsiusChange}
  //         />
  //         <TemperatureInput 
  //           scale="f" 
  //           temperature={fahrenheit}
  //           onTemperatureChange={this.handleFahrenheitChange}
  //         />
  //         <BoilingVerdict celsius={parseFloat(temperature)} /> 
  //       </div>
  //     )
  //   }
  // }

  function FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color} >
        {props.children}
      </div>
    )
  }

  // function WelcomeDialog() {
  //   return (
  //     <FancyBorder color="blue">
  //       <h1 className="Dialog-title" >
  //         Welcome
  //       </h1>
  //       <p className="DIalog-message" >
  //         Thank you for visiting our spacecraft!
  //       </p>
  //     </FancyBorder>
  //   )
  // }

  /* props (插槽) */
  // function SplitPane(props) {
  //   return (
  //     <div>
  //       <div>{props.left}</div>
  //       <div>{props.right}</div>
  //     </div>
  //   )
  // }

  // function WelcomeDialog() {
  //   return (
  //     <SplitPane left={<span>left</span>} right={<span>right</span>}/>
  //   )
  // }

  // function Dialog(props) {
  //   return (
  //     <FancyBorder color="blue" >
  //       <h1>{props.title}</h1>
  //       <p>{props.message}</p>
  //     </FancyBorder>
  //   )
  // }

  // function WelcomeDialog() {
  //   return (
  //     <Dialog title="Welcome" message="Thank you for visiting our spacecraft!" ></Dialog>
  //   )
  // }

  // function Dialog(props) {
  //   return (
  //     <FancyBorder color="blue" >
  //       <h1>{props.title}</h1>
  //       <p>{props.message}</p>
  //       {props.children}
  //     </FancyBorder>
  //   )
  // }

  // class SignUpDialog extends Component{
  //   constructor(props){
  //     super(props)
  //     this.handleChange = this.handleChange.bind(this)
  //     this.handleSignUp = this.handleSignUp.bind(this)
  //     this.state = { login: '' }
  //   }

  //   handleChange(e) {
  //     this.setState({ login: e.target.value })
  //   }

  //   handleSignUp() {
  //     alert(`Welcome aboard ${this.state.login}`)
  //   }

  //   render() {
  //     return (
  //       <Dialog title="Mars Exploration Program" message="How should we refer to you?" >
  //         <input value={this.state.login} onChange={this.handleChange} ></input>
  //         <button onClick={this.handleSignUp} >Sign Me Up!</button>
  //       </Dialog>
  //     )
  //   }
  // }

  const ThemeContext = React.createContext('light');
  class welcome extends React.Component {
    render() {
      // 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
      // 无论多深，任何组件都能读取这个值。
      // 在这个例子中，我们将 “dark” 作为当前的值传递下去。
      return (
        <ThemeContext.Provider value="dark">
          <Toolbar />
        </ThemeContext.Provider>
      );
    }
  }

  // 中间的组件再也不必指明往下传递 theme 了。
  function Toolbar() {
    return (
      <div>
        <ThemedButton />
      </div>
    );
  }

  class ThemedButton extends React.Component {
    // 指定 contextType 读取当前的 theme context。
    // React 会往上找到最近的 theme Provider，然后使用它的值。
    // 在这个例子中，当前的 theme 值为 “dark”。
    static contextType = ThemeContext;
    render() {
      return <Button theme={this.context} />;
    }
  }



export default welcome