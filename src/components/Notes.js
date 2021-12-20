import React from 'react'
import { Row, Col } from 'antd';
import { Card, Button } from 'react-bootstrap';

const Notes = () => {
    return (
        <div>
            <h2 style={{ textAlign: 'center', marginTop: 7 }}>Notes</h2>
            <Row>

                <Col span={9} offset={2}>
                    <Card size="sm" className="text-center">
                        <Card.Header>Featured</Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">2 days ago</Card.Footer>
                    </Card>
                </Col>
                <Col span={9} offset={2}>
                    <Card className="text-center">
                        <Card.Header>Featured</Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">2 days ago</Card.Footer>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Notes
