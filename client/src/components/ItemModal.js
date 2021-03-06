import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
} from 'reactstrap';

import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';


class ItemModal extends Component {
    state = {
        modal: false,
        name: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.setState.modal
        });
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const newItem = {
            name: this.state.name
        }

        //Add item via addItem action
        this.props.addItem(newItem);

        //close modal
        this.toggle();
    }

    render() {
        return(
            <div>
                <Button
                color = "success"
                style = {{marginBottom: '2rem'}}
                onClick={this.toggle}
                > Add Skill </Button>
                <div>

                     
                <Modal isOpen={this.state.modal} toggle={this.toggle}>  
                    <ModalHeader toggle={this.toggle}> Add to Skill List </ModalHeader>
                    <ModalBody>
                     <Form onSubmit={this.onSubmit}>
                        <FormGroup>
                            <Label for="skill">Skill</Label>
                            <Input
                            type="text"
                            name="name"
                            id="item"
                            placeholder="Add skill item"
                            onChange={this.onChange}
                            />
                            <Button color="dark" style={{marginTop: '2rem'}} block
                            > Add Skill</Button> 
                        </FormGroup>
                    </Form>
                </ModalBody>
                </Modal>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    item:state.item
});

export default connect(mapStateToProps, { addItem })(ItemModal);