import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'react-uuid';

class Skill_List extends Component {
    state = {
        items: [
            {id: uuid(), name: 'Javascript' },
            {id: uuid(), name: 'Python' }
        ]
    }
    render() {
        const { items } = this.state;
        return(
            <Container>
                <Button
                color="success"
                style={{marginBottom: '2rem'}}
                onClick={() => {
                    const name = prompt('Enter your skill exeh');
                    if(name){
                        this.setState(state => ({
                            items: [...state.items, { id: uuid(), name }]
                        }));
                    }
                }}
                >Add Skill</Button>

                <ListGroup>
                    <TransitionGroup className="skill-list">
                        {items.map(({ id, name }) => (
                            <CSSTransition key={id} timeout={500} classNames="">
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick = {() => {
                                            this.setState(state => ({
                                                items: this.state.items.filter(item => item.id !== id)
                                            }));
                                        }}
                                    >&times;</Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}
export default Skill_List;