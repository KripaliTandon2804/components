import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './commentDetails'
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                author="Sam" 
                timeAgo="Today at 4:45PM" 
                post="Amazing!" 
                img={faker.image.avatar()} 
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail 
                author="Alex" 
                timeAgo="Today at 2:30PM" 
                post="Seriously!" 
                img={faker.image.avatar()} 
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                author="Jane" 
                timeAgo="Yesterday at 1:45PM" 
                post="I don't agree with you" 
                img={faker.image.avatar()} 
                />
            </ApprovalCard>
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'))