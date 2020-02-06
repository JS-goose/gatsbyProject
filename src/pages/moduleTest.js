import React from "react"
import Container from "../components/container"
import moduleStyles from "../components/moduleTest.module.css"
import { Link } from "gatsby"

const User = props => (
  <div className={moduleStyles.user}>
    <img src={props.avatar} className={moduleStyles.avatar} alt="" />
    <div className={moduleStyles.description}>
      <h2 className={moduleStyles.username}>{props.username}</h2>
      <p className={moduleStyles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default () => (
  <Container>
    <Link to="/">Home</Link>
    <h1>Container are cool</h1>
    <p>Look at all the styling!</p>
    <User
    username='Jane Smith'
    avatar='https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg'
    excerpt='Hello from Jane!  I love mountain climbing' />
    <User
    username='John Smith'
    avatar='https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg'
    excerpt="Hello I'm John and I love tacos!" />
  </Container>
)
