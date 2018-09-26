import React, {Component} from 'react';
import PropTypes from 'prop-types';
class Posts extends Component {
    constructor(props){
        super(props)
        this.state = {
            posts : []
        }

    }

    componentWillMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res =>res.json())
            .then(data => this.setState({
                posts: data
            }));
    }
    render() {
        const postItems = this.state.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        return (
            <h1>
                Posts
                {postItems}
            </h1>
        );
    }
}

export default Posts