// class Counter {
//   constructor(value) {
//     this.value = value;
//   }
//
//
//   increment() {
//     this.value++
//     this.getCurrentValue()
//   }
//
//   reset() {
//     this.value = 0;
//     this.getCurrentValue()
//   }
//
//   getCurrentValue() {
//     console.log(this.value);
//   }
// }
//
// const counterOne = new Counter('0')
//
// let value = document.querySelector('#value')
// value.textContent = counterOne.value;
//
//
// let increaseButton = document.querySelector('#increase')
// let resetButton = document.querySelector('#reset')
//
// increaseButton.addEventListener('click', function(e) {
//   counterOne.increment();
//   value.textContent = counterOne.value;
// })
//
// resetButton.addEventListener('click', function(e) {
//   counterOne.reset();
//   value.textContent = counterOne.value;
// })


class MyStatefulComponent extends React.Component {
  constructor(props) {
    super(props); // Det är viktigt att anropa superklassens konstruktor
    this.state = {
      color: 'red'
    };
    this.updateColor = this.updateColor.bind(this);
  }
  updateColor() {
    const color = this.state.color === 'red' ? 'blue' : 'red';
  }
  render() {
    return React.createElement('p', {
      style: {
        color: this.state.color
      },
      onClick: this.updateColor,
    }, 'Click me!');
  }
}

const target = document.getElementById('target');
ReactDOM.render(React.createElement(MyStatefulComponent), target);