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
