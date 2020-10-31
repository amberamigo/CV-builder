import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Card, CardTitle, CardText, CardBody, CardHeader, CardFooter } from 'reactstrap';
import '../../styles.css';


//Configuration for React Spring
const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

//Card Component for Resume List 

const ResumeCard = (prop) => {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  return (
    <animated.div
      class="rescard"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
        <Card style={{height:225, width:225, margin:'auto'}}>
            <CardHeader> </CardHeader>
            <CardBody>
                <strong>
                    <CardTitle>{prop.title}</CardTitle>
                </strong>
                <CardText>{prop.description}</CardText>
            </CardBody>
            <CardFooter>
                {prop.createdAt}
            </CardFooter>
            </Card>
    </animated.div>
  )
}

export default ResumeCard;