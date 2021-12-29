import React from 'react'
import { Row, Col } from 'antd';
import { ButtonGroup, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useState} from 'react';
import { addNotes} from '../redux/noteSlices/noteSlice'
import { nanoid } from '@reduxjs/toolkit';




const AddTextArea = ({ text,setText }) => {
    let colors = ["danger", "secondary", "info", "warning", "success"]
    const [btnColor, setBtnColor] = useState()
    const dispatch = useDispatch()
    const handleAdd = () => {
        if (!text || !btnColor) {return false}
            dispatch(addNotes({
                id: nanoid(),
                text,
                btnColor
            }))
        setText('')
    }

return (
    <Row className="mb-2 mt-5" >
        <Col span={12} offset={1}>
            <ButtonGroup size="sm" aria-label="First group" >
                {colors.map((color, i) => <Button key={i} className="me-2" variant={color} style={{ borderRadius: `50%` }} onClick={() => setBtnColor(color)}> </Button>)}
            </ButtonGroup>
        </Col>
        <Col span={7}></Col>

        <Col span={4} style={{ textAlign: "center" }}>
            <Button size="sm" style={{ borderRadius: 25 }} onClick={handleAdd} >Add</Button>
        </Col>
    </Row>
)
}

export default AddTextArea
