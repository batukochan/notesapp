import React from 'react'
import { Row, Col } from 'antd';
import { Card, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { removeNotes, notesSelectors } from '../redux/noteSlices/noteSlice';
import Search from 'antd/lib/transfer/search'

const Notes = () => {
    const [inputText, setInputText] = useState('')
    const items = useSelector(notesSelectors.selectAll)
   

    const dispatch = useDispatch()
    const handleRemove = (id) => {
        dispatch(removeNotes(id))
    }

    const handleText = (e) => { setInputText(e.target.value) }

    let filtered = []

    filtered = items.filter(item => item.text.toLowerCase().includes(inputText.toLowerCase()))


    return (
        <div>

            <Search value={inputText} onChange={handleText}></Search>
            <h2 style={{ textAlign: 'center', marginTop: 7 }}>Notes</h2>
            
            <Row>
                {filtered.map((item, i) =>
                (<Col key={i} span={9} offset={2}>
                    <Card size="sm" className={`text-center bg-${item.btnColor}`}>
                        <Card.Header>
                            {item.day}
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {item.text}
                            </Card.Text>

                        </Card.Body>
                        <Card.Footer className="text-muted">
                            <Button size="sm" variant="danger" onClick={() => handleRemove(item.id)}>Delete Note</Button>
                        </Card.Footer>
                    </Card> <br />
                </Col>)
                )} </Row>

        </div>
    )
}

export default Notes
