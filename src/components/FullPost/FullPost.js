import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {

    state = {
        post: null
    }

    componentDidUpdate() {
        if ((this.props.postid && !this.state.post) || (this.state.post && this.props.postid !== this.state.post.id)) {
            axios
                .get('posts/' + this.props.postid)
                .then(rspns => this.setState({
                    post: { ...this.state.post },
                    post: rspns.data
                }));
        }
    }

    deleteposthandler = () => {
        axios.delete('posts/' + this.props.postid)
            .then(response => console.log(response));
    }

    render() {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if (this.props.postid) {

            post = this.state.post ? (
                <div className="FullPost">
                    <h1>{this.state.post.title}</h1>
                    <p>{this.state.post.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deleteposthandler}>Delete</button>
                    </div>
                </div>
            ) : 'Loading...';
        }

        return post;
    }
}

export default FullPost;