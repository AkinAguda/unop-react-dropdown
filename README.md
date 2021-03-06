# unop-react-dropdown

Unopinionated dropdown for react

### Features

- Completely unopinionated (does not enforce any styling whatsoever)
- Lifecycle functions that allow things like animations before the dropdown closes
- Since it's unopinionated, you can turn any element to a dropdown trigger and any element to a drop down menu.
- Includes basic functionality for opening, closing and setting delay before close (for things like a close animation to happen)

### Installation

> `npm install unop-react-dropdown`

### Motivation

I found myself reusing this dropdown logic between projects and just needed a central place to access it

### Usage

`import UnopDropdown from "unop-react-dropdown";`

and use as:

```jsx
<UnopDropdown trigger={<button>Click</button>}>
  <ul>
    <li>List item 1</li>
    <li>List item 2</li>
  </ul>
</UnopDropdown>
```

> **trigger** is the minimum required prop

### Help and Contributions

#### How to help/contribute

- fix issues, pull request are very welcome
- write, improve docs
- write tests
- suggest features and improvements

# API

### Component props

| Prop             | Type        | Default | Description                                                                                                   |
| ---------------- | ----------- | ------- | ------------------------------------------------------------------------------------------------------------- |
| trigger          | Jsx.Element | []      | This will be passed an onClick to handle the toggling when it is rendered. This should prefarably be a button |
| align            | 'RIGHT'     | 'LEFT'  | 'CENTER'                                                                                                      | 'LEFT' | When 'RIGHT', the dropdown will be rendered below the trigger, aligned to the right. When 'CENTER', the dropdown will be aligned to the center |
| onAppear         | function    | null    | This will be called when the dropdown is visible                                                              |
| onDisappear      | function    | null    | This will be called when the dropdown is invisible                                                            |
| onDisappearStart | function    | null    | This will be called when the timeout to diappear(become invisible) starts                                     |
| delay            | number      | 0       | This is the delay in milliseconds before the dropdown goes invisible                                          |
| hover            | boolean     | false   | When true, the dropdown will become visible on hover                                                          |

### License

[MIT](https://github.com/AkinAguda/unop-react-dropdown/blob/master/LICENSE)
