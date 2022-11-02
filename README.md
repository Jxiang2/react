# React & Redux & Typescript Notes

### 1. Types provided by React (all accessible by `import React from 'react'`):

**`React.FC<Props> | React.FunctionComponent<Props>`**

**`React.Component<Props, State>`**

**`React.ComponentType<Props>`**: Type representing union of (`React.FC<Props> | React.Component<Props>`) - used in HOC

**`ReactNode`**: Type representing any possible type of React node (basically ReactElement (including Fragments and Portals) + primitive JS types)

**`ReactElement | JSX.Element`**: Type representing a concept of React Element - representation of a native DOM component like `<div/>`, or a user-defined composite component(e.g. `<MyComponent />`)

(

**Relationship**: `ReactElement | JSX.Element` is included in `ReactNode`

**Relationship**: `ComponentType<P>` vs `ReactElement | JSX.Element`

1. `Box` is a react component, it's type is `ComponentType<PropsWithChidlren & {name: string}>`
2. `<Box name="xjy>Hello There</Box>` is a JSX element, it's type is `ReactElement | JSX.Element`

```
</>
  {(<Box name="xjy>Hello There</Box>) as React.ReactElement}
</>
```

)

**`CSSProperties`**: Type representing style object in JSX - for css-in-js styles, for example:

```
const styles: React.CSSProperties = { flexDirection: 'row',}
const element = <div style={styles}
```

**`XXXHTMLAttributes<HTMLXXXELEMENT>`**: Type representing HTML attributes of specified HTML Element - for extending HTML Elements, for example:

```
const Input: React.FC<Props & React.InputHTMLAttributes<HTMLInputElement>> = props => { ... }
<Input onClick={...} onChange={...} alt={...} ... />
```

**`XXXEvent<HTMLXXXElement>`**: Type representing more specific event. Some common event examples: ChangeEvent, FormEvent, FocusEvent, KeyboardEvent, MouseEvent, DragEvent, PointerEvent, WheelEvent, TouchEvent. Thet are all subtypes of SyntheticEvent. For example:

```
const handleChange = (ev: React.MouseEvent<HTMLDivElement>) => { ... }
<div onMouseMove={handleChange} ... />
```

(

**React Event table**:

<img width="630" alt="Screen Shot 2022-10-26 at 8 23 13 PM" src="https://user-images.githubusercontent.com/46456200/198162808-a84807d9-d091-4ba9-8263-55e45d56d72c.png">

)

**`ComponentProps<typeof XXX>`** Note: XXX is a react component

```
type MyComponentProps = React.ComponentProps<typeof MyComponent>;
```

<br/>

### 2. React & Redux:

**Redux**

1. redux is a container used to store the state shared by all components
   of the app, and it provides global actions to manage the state.
2. React <--> React-Redux <--> Redux (RTK)
3. Redux is used of when
   - you have large amounts of state that are needed in many places in the app
   - the app state updates frequently over time

**Core concepts**

1. **Store**: hold state of the app
2. **Action**: describe what happend {type, payload}
3. **Reducer**: ties store and actions togethor, handles the action and decides how to update state

**Core principles**

1. The global state is a single object in a single store
2. The only way to change state is to dispatch an action
3. The state tree is updated based on actions, managed by reducers (prevState, action) -> newState

**React-redux workflow:**
app -> excute bussiness logic -> dispatch action ->
action handled by reducer -> update redux store (state) -> influence the app

**Terminologies**
