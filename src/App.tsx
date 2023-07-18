import React from "react";
import "./App.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";

function App() {
  const [validated, setValidated] = useState(false);

  // const [word, setWord] = useState();

  const handleSubmit = (event: {
    currentTarget: any;
    preventDefault: () => void;
    stopPropagation: () => void;
  }) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    event.preventDefault();

    console.log("word is " + event.currentTarget.word.value);
    console.log("definition is " + event.currentTarget.definition.value);
    console.log("part of speech is " + event.currentTarget.speech.value);
    console.log("ex sen is " + event.currentTarget.example_sentence.value);
  };

  return (
    <Container>
      <Row></Row>
      <Row></Row>

      <Col xs={5}></Col>
      <Col xs={7}>
        <Container>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>
              <Form.Group as={Row} className="mb-3" controlId="word_word">
                <Form.Label column sm="4">
                  Word
                </Form.Label>
                <Col xs={8}>
                  <InputGroup hasValidation>
                    <Form.Control required type="text" name="word" />
                    <Form.Control.Feedback type="invalid">
                      Please enter in a word.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Col>
              </Form.Group>
            </Row>

            <Row>
              <Form.Label column sm="4">
                Part of Speech
              </Form.Label>
              <Col xs={8}>
                <Form.Check
                  inline
                  label="Noun"
                  name="noun"
                  type="radio"
                  value="noun"
                ></Form.Check>

                <Form.Check
                  inline
                  label="Verb"
                  name="speech"
                  type="radio"
                  value="verb"
                ></Form.Check>

                <Form.Check
                  inline
                  label="Adjective"
                  name="speech"
                  type="radio"
                  value="adjective"
                ></Form.Check>

                <Form.Check
                  inline
                  label="Adverb"
                  name="speech"
                  type="radio"
                  value="adverb"
                ></Form.Check>
              </Col>
            </Row>

            <Row>
              <Form.Group as={Row} className="mb-3" controlId="word_def">
                <Form.Label column sm="4">
                  Definition
                </Form.Label>
                <Col xs={8}>
                  <InputGroup hasValidation>
                    <Form.Control required type="text" name="definition" />
                    <Form.Control.Feedback type="invalid">
                      A word must have a definition!
                    </Form.Control.Feedback>
                  </InputGroup>
                </Col>
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Row} className="mb-3" controlId="word_sentence">
                <Form.Label column sm="4">
                  Example Sentence
                </Form.Label>
                <Col xs={8}>
                  <Form.Control type="text" name="example_sentence" />
                </Col>
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Row} className="mb-3" controlId="word_submit">
                <Col sm={{ span: 10, offset: 4 }}>
                  <Button as="input" type="submit" value="Submit" />
                </Col>
              </Form.Group>
            </Row>
          </Form>
        </Container>
      </Col>
    </Container>
  );
}

export default App;
