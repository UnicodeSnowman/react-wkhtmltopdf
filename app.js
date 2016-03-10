import React from 'react';
import ReactDOM from 'react-dom';
import Form from './form';

const formData = {
    name: '',
    things: ['']
};

// NOTE: This is for example purposes only. You reeeally
// shouldn't be making service calls from your components.
//
// (ideally you shouldn't even be maintaining state at the
// component level. Use https://github.com/reactjs/redux or
// some other state container)

class App extends React.Component {
    constructor() {
        super();
        this.state = formData;
    }

    addField(field) {
        this.setState({
            [field]: this.state[field].concat('')
        });
    }

    updateField(text, fieldName, index) {
        let value;
        if (typeof index === 'number') {
            let list = this.state[fieldName];
            value = [
                ...list.slice(0, index),
                text,
                ...list.slice(index + 1)
            ];
        } else {
            value = text;
        }

        this.setState({
            [fieldName]: value
        });
    }

    submit() {
        fetch('/render', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.state)
        });
    }

    render() {
        return (
            <div>
                <Form
                    data={this.state} 
                    onAddField={this.addField.bind(this)}
                    onUpdateField={this.updateField.bind(this)} />
                <br />
                <div className="container">
                    <button onClick={this.submit.bind(this)}>SUBMIT</button>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('form'));

module.exports = Form;

