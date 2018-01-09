import React from 'react';
import store from './../store/store';
import {connect} from "react-redux";

class BlogForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {name: '', text: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        if (this.state.name.trim()==''){
            return;
        }
        if (this.state.text.trim()==''){
            return;
        }
        this.props.dispatch({
            type: 'ADD_POST',
            post: {
                name: this.state.name.trim(),
                text: this.state.text.trim(),
            }
        });
        this.setState({name: '', text: ''});
    }
    handleNameChange(event){
        this.setState({name: event.target.value});
    }
    handleTextChange(event){
        this.setState({text: event.target.value});
    }
    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <h1 className="form__title">Новый пост</h1>
                <div className="form__group">
                    <input
                        className="form__input"
                        type="text"
                        placeholder="Наименование поста"
                        onChange={this.handleNameChange}
                        value={this.state.name}
                        required
                    />
                </div>
                <div className="form__group">
                    <textarea
                        className="form__textarea"
                        rows="7"
                        placeholder="Содержание поста"
                        onChange={this.handleTextChange}
                        value={this.state.text}
                        required
                    ></textarea>
                </div>
                <div className="form__group">
                    <button className="form__button" type="submit">Создать пост</button>
                </div>
            </form>
        );
    }
}

const mapStateToProps = store => { return {store}; };

export default connect(mapStateToProps)(BlogForm);