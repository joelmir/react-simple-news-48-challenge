import React, { Component } from 'react';
import News from './components/news/News'

class App extends Component {
    constructor() {
        super()
        this.state = {
            news: [
                {'title': "My first news", 'body':"This is the body of my first news"},
                {'title': "My news number too", 'body':"This is the news to check if this list work fine"}
            ]
        }
    }

    render() {
        return (
            <div>
                {this.state.news.map(news_item => <News title={news_item.title} body={news_item.body}/>)} 
            </div>
        );
    }
}

export default App;
