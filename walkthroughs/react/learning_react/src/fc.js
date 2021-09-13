class ClassComponent {
  constructor(props) {
    this.props = props;

    this.state = {
      count: 0,
    };
  }

  setState(obj) {
    this.state = {
      count: obj.count ? obj.count : this.state.count,
    };
    console.log(this.state.count);
    this.render();
  }

  handleClick(unit) {
    this.setState({ count: this.state.count + unit });
  }

  render() {
    console.log("Re-rendering component");
  }
}

let classApp = new ClassComponent();

classApp.handleClick(1);
classApp.handleClick(1);
classApp.handleClick(1);

function app() {
  let count = 0;

  setTimeout(() => {
    count++;
    console.log(count);
  }, 1000);
}

app();
app();
app();
