## 1. What is the difference between Component and PureComponent? give an
example where it might break my app.

When a component is updated it calls the shouldComponentUpdate method. This method returns whether the component should redraw (true/false). Component - deeply checks state and props, and PureComponent - runs a shallow check. This way you can save on renders

The main problem is that PureComponent can block all children from updating. So when we expect the data to be redrawn there may be old data on the screen

## 2. Context + ShouldComponentUpdate might be dangerous. Can think of why is
that?

The context is used to retrieve values in the child components, and shouldComponentUpdate can block this behavior, so the context will not work

## 3. Describe 3 ways to pass information from a component to its PARENT.

- You can pass a callback function and call it in a child, and pass data from the child to that function. Then the data will be in the parent. By the way, I used this approach in my test case

- You can use Redux or similar library to store state, call dispatch(someAction(data)) in the child and useSelector hook in the parent

- you can pass it through context, but I've hardly ever used it.

## 4. Give 2 ways to prevent components from re-rendering.

- Memoization with useCallback and useMemo. The first saves a reference to the function, when passed to a child component, the reference will not change and it will not be re-rendered. The second one stores calculated values, such as arrays after filtering.

- useRef instead of useState 

## 5. What is a fragment and why do we need it? Give an example where it might
break my app.

Each react function must return one ReactNode. When we have multiple nodes on the same level:

`<span>123</span>`
`<div>213</div>`

it breaks the application. To do this, we can do the following

`<React.Fragment>`
`<span>123</span>`
`<div>213</div>`
`</React.Fragment>`

(or just <></>, a shorter entry)

## 6. Give 3 examples of the HOC pattern.

Provider redux, HOC for logging or some third-party library, Keycloak Provider

## 7. what's the difference in handling exceptions in promises, callbacks and
async...await.

## 8. How many arguments does setState take and why is it async.

setState takes two arguments - state (previous data state) and props (next data state).

Asynchronous because it can render a child component twice. Also, inside React there is an algorithm that highlights which data should be updated now and which later.

## 9. List the steps needed to migrate a Class to Function Component.

- Rewrite this.state to useState
- Rewrite lifecycle events to hooks (useEffect useLayoutEffect if needed)
- Rewrite mapStateToProps, mapDispatchToProps functions
- It all depends on the specific component, it's hard to answer the question in a vacuum, but I think I've outlined the basic steps

## 10. List a few ways styles can be used with components.

plain css, css/scss modules, styled-components, inline-css (doesn’t recommend, but sometimes …)

## 11. How to render an HTML string coming from the server.

dangerouslySetInnerHTML
