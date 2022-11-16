import "./App.css";

import { Button, FormControl, InputGroup } from "react-bootstrap";
import {Col, Container, Row} from "react-bootstrap";
import { FloatingLabel, Form, FormSelect } from "react-bootstrap";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Myimg from "./img/search_16px.png";
import { allQuotes } from "./data-quotes ";

export const Quotes = () => {
  const [searchTerm, setSearchTerm] = useState("All Quotes");
  const [searchResults, setSearchResults] = useState([]);
  const [sortedField, setSortedField] = useState(null);
  const [fieldValue, setFieldValue] = useState("");

  const handleChange2 = function (e) {
    console.log(e.target.value);
    setFieldValue(e.target.value);
  };

  useEffect(() => {
    const results = allQuotes.filter(({ namedInsured }) => namedInsured.toLowerCase().includes(fieldValue));
    setSearchResults(results);
  }, [fieldValue]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(event.target.value);
  };
  useEffect(() => {
    if (searchTerm == "All Quotes" || searchTerm == undefined) {
      setSearchResults(allQuotes);
    } else {
      const results = allQuotes.filter(({ reviewState }) => searchTerm === reviewState);
      setSearchResults(results);
    }
  }, [searchTerm]);

  useEffect(() => {
    setSearchResults(allQuotes);
  }, []);

  const handleSorted = (event) => {
    console.log(event.target.value);
    setSortedField(event.target.value);
  };
  useEffect(() => {
    if (sortedField == "ascending") {
      const newSearchResults = [...searchResults].sort((a, b) => {
        return new Date(a.inceptionDate) - new Date(b.inceptionDate);
      });
      setSearchResults(newSearchResults);
    } else if (sortedField == "descending") {
      const newSearchResults = [...searchResults].sort((a, b) => {
        return new Date(b.inceptionDate) - new Date(a.inceptionDate);
      });
      setSearchResults(newSearchResults);
    } else {
      setSearchResults(allQuotes);
    }
  }, [sortedField]);

  return (
    <>
      {" "}
      <Container>
        <Row>
          <Col className="p-2" md="6" lg="3" sm="6" xs="6">
            <FloatingLabel controlId="floatingSelectGrid">
              <Form.Select aria-label="Floating label select example" value={searchTerm} onChange={handleChange}>
                <option>All Quotes</option>
                <option value="In Progress">In Progress</option>
                <option value="Approved">Approved</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col className="p-2" md="6" lg="5" xs="6" sm="6">
            <Form onChange={handleSorted} value={sortedField}>
              <Form.Check type="radio" value="ascending" label="ascending" name="formHorizontalRadios" id="formHorizontalRadios1" />
              <Form.Check type="radio" value="descdending" label="descending" name="formHorizontalRadios" id="formHorizontalRadios2" />
            </Form>
          </Col>
          <Col className="p-2" md="12" lg="4" xs="12" sm="12">
            <InputGroup>
              <InputGroup.Text id="btnGroupAddon">
                <img className="ml-18" src={Myimg} alt="Logo" />
              </InputGroup.Text>
              <FormControl value={fieldValue} size="lg" type="text" placeholder="Search" onChange={(e) => handleChange2(e)} />
            </InputGroup>
          </Col>
        </Row>
      </Container>
      <div className="stock-container">
        <Container>
          <Row>
            {searchResults.map((data, key) => {
              return (
                <Col xl={4} md={6} xs="auto">
                  <Link to={`/quote-page/${data.quoteId}`}>
                    <Quote
                      key={key}
                      quoteNumber={data.quoteNumber}
                      quoteId={data.quoteId}
                      businessDomainType={data.businessDomainType}
                      namedInsured={data.namedInsured}
                      reviewState={data.reviewState}
                    />
                  </Link>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
};

const Quote = ({ quoteNumber, quoteId, businessDomainType, namedInsured, reviewState }) => {
  if (!quoteNumber) return <div />;
  return (
    <table className="m-3">
      <td>
        <div>
          <h3 className="mt-2 mb-1 underline">{quoteNumber}</h3>
          <h5>{quoteId}</h5>
          <h5>{businessDomainType}</h5>
        </div>
        <p>{namedInsured}</p>
        <p>{reviewState}</p>
      </td>
    </table>
  );
};
