import React from 'react'
import { Row, Col } from 'antd';
import { ButtonGroup, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {addText} from '../redux/noteSlices/noteSlice'

const AddTextArea = ({ text }) => {
    const dispatch = useDispatch()

    const propsText = () => {
       dispatch(addText({text}))
    }



    return (
        <Row className="mb-2 mt-5" >
            <Col span={12} offset={1}>
                <ButtonGroup size="sm" aria-label="First group" >
                    <Button variant="danger" style={{ borderRadius: `50%` }}>1</Button>{' '}
                    <Button className="ms-1" variant="secondary" style={{ borderRadius: `50%` }}>2</Button>{' '}
                    <Button className="ms-1" variant="info" style={{ borderRadius: `50%` }}>3</Button>{' '}
                    <Button className="ms-1" variant="warning" style={{ borderRadius: `50%` }}>4</Button>{' '}
                    <Button className="ms-1" variant="success" style={{ borderRadius: `50%` }}>5</Button>
                </ButtonGroup>
            </Col>
            <Col span={7}></Col>


            {/* addText - Add Button */}
            <Col span={4} style={{ textAlign: "center" }}>
                <Button size="sm" style={{ borderRadius: 25 }} onClick={propsText}>Add</Button>
            </Col>




        </Row>
    )
}

export default AddTextArea
