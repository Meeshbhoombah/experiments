# Survivejs: React

## What is React?
- Introduces the concept of the **Virtual DOM**
- Components (fits user interfaces)
- State requires **state management**
- Pragmatic:
    + Can use lower level concepts when necessary

### Virtual Dom
- Exists on top of actual DOM (or other render target)
    + Can help manage state
    + Finds best way to batch changes to underlying DOM when state change
    + Propogate changes across virtual tree

#### Performance
- Manipulating DOM this way == increased performance
    + By hand = inefficient/hard to optimize
- Can tune further performance to adjust virtual tree (optional)
- Cost: makes React big
    + `preact` or `react-lite` = smaller bundle size with sacrified functionality

### React Renders
- Decouples it from the web
    - Using `react-dom` for rendering

#### Universal Rendering
- Can use `react-dom`
- Server render intial markup and passes to inital data to client
    + Uncessary round trips
    + SEO optimization 

#### Available React Renderers
- `React Native`
    + iOS/Android
- `react-blessed`
    + Terminal applications with animations
- `gl-react`
    + WebGL bindings (shaders)
- `react-canvas`



