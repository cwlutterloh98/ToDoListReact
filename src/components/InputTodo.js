import React, { Component } from "react";
class InputTodo extends Component {
    state = {
        title: ""
       };
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value });
           
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodoProps(this.state.title);
        this.setState({ title: ""
        });
       };
       
    render() {
    return (
        <form  className="form-container" onSubmit={this.handleSubmit}>
        <input name="title"  className="input-text" onChange={this.onChange} type="text" placeholder="Add Todo..." value={this.state.title} />
        <input type="submit" className="input-submit" value="submit" />
        </form>
    );
    }
}
export default InputTodo;