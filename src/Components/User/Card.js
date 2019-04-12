import React from 'react';
import { Card } from 'react-bootstrap';
import { MyContext } from '../../App';

import './Style.css'
class UserCard extends React.PureComponent {

    render() {
        return (
            <MyContext.Consumer>

                {value =>
                    (
                        <>
                            <Card className='userCard'>
                                <Card.Body>
                                    <Card.Title><span style={{ color: "#FC4349" }}>Name: </span> {value.state.loggedinUser.name}</Card.Title>
                                    <Card.Text>
                                        <span style={{ color: "#FC4349" }}>Email: </span> {value.state.loggedinUser.email}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </>
                    )
                }
            </MyContext.Consumer>
        )
    }
}
export default UserCard;