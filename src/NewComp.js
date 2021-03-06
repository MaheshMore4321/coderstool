import React, {Component} from 'react';
import { connect } from 'react-redux';

import { messageChange } from './Actions';

class NewComp extends Component {

    styles = {
        fontStyle: 'italic',
        color: 'purple',
    }

    render() {
        return (
          <div className="App">
            <h3 style={this.styles}>
                {this.props.message}
            </h3>
            <button onClick={this.props.ButtonChange}>
                Subscribe
            </button>
          </div>
        )
    }
}

const mapStatetoProps = state => ({
    message: state.messageBox.message
})

const mapDispatchtoProps = dispatch => {
    return {
        ButtonChange: () => dispatch(messageChange("Thanks you to subscribing"))
    }
}

export default connect(
    mapStatetoProps,
    mapDispatchtoProps
)(NewComp);