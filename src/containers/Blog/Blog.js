import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedpostid: null
    };

    componentDidMount = () => {
        axios
            .get('posts')
            .then(rspns => {
                const postswithauthor = rspns.data.map(post => {
                    return {
                        ...post,
                        author: 'Arnab'
                    };
                });
                this.setState({
                    posts: [...this.state.posts],
                    posts: postswithauthor
                });
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <section className="Posts">
                    {this.state.posts.map(post => (
                        <Post key={post.id} 
                        title={post.title} 
                        author={post.author} 
                        clicked={() => this.setState({
                            selectedpostid: {...this.state.selectedpostid},
                            selectedpostid: post.id
                        })}></Post>
                    ))}
                </section>
                <section>
                    <FullPost postid={this.state.selectedpostid}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;
