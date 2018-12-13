import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import { Route, NavLink } from 'react-router-dom';
import NewPost from './NewPost/NewPost';

class Blog extends Component {

    render() {

        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink exact to='/'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink exact to={{
                                    /*the url path after "/"*/
                                    pathname: '/new-post',
                                    /*the #emenetid in url to jump to that element*/
                                    hash: '#submit',
                                    /*the query param "/"*/
                                    search: '?quick-submit=true'
                                }}>New Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <switch>
                    <Route path='/new-post' component={NewPost}></Route>
                    <Route path='/' component={Posts}></Route>
                </switch>
            </div>
        );
    }
}

export default Blog;