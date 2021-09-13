# Review

## React

- **Single Page Application** (SPA), only use one `index.html`, that runs a script that injects JSX components to the DOM
- Class Components need a `render()` method that returns JSX to be rendered to the `ReactDOM`
- Functional Components (sometimes **stateless** components) are functions that return JSX
- **JavaScript XML** (JSX)
- Can only return ONE jsx element, can have nested elements
- Syntax

  Functional Component

  ```jsx
  const App = () => {
    return (
      <div className="container" onClick={someFunc()}>
        <h1>Hello World!</h1>
      </div>
    );
  };
  ```

  Class Component

  ```jsx
  class App {
    render() {
      return (
        <div>
          <h1>Hello World!</h1>
        </div>
      );
    }
  }
  ```

## Creating a React Project

- `npx create-react-app projectName`
- Start the development server with `npm start`
