

Logical Component ( Stateful component )
  do logic 
  state 
  lifecycle Methods
  class 


Presentational Component ( Stateless component )
  displaying onto the screen  
  const




  


Lifecycle Methods
  Callbacks functions
  Mounting
    - rendering a component / Mounting
  Props change
    props - properties passed down from parent to child 
  State change
    state - storage { key: values }






  Initialization:  (Component is rendered for the first time)
    *componentWillMount()
    render()
    componentDidMount()

  State changes:  (State changes can cause lifecycle hooks to run)
    shouldComponentUpdate()
    *componentWillUpdate()
    render()
    componentDidUpdate()

  Props changes: (A component receiving new props will trigger lifecycle hooks)
    *componentWillReceiveProps()
    shouldComponentUpdate()
    *componentWillUpdate()
    render()
    componentDidUpdate()

  Unmounting
    componentWillUnMount()


  Gone in React 17:
    componentWillMount
    componentWillRecieveProps
    componentWillUpdate


  New in React 17: 
    UNSAFE_componentWillMount
    UNSAFE_componentWillRecieveProps
    UNSAFE_componentWillUpdate
    getDerivedStateFromProps
    getSnapshotBeforeUpdate