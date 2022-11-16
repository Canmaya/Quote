import React from "react";
import "./App.css";
import { useParams } from "react-router-dom";
import { allQuotes } from "./data-quotes ";
import { data } from "autoprefixer";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";

export const QuotePage = () => {
  let params = useParams();
  console.log(params.quoteId);
  const pageQuote = allQuotes.find((quote) => quote.quoteId === params.quoteId);
  console.log(pageQuote);

  return (
    <>
      <div className="m-16 bg-grey bg-gray-25 whitespace-pre-line flex-shrink shadow-md">
        <h1>Quote Details</h1>
      </div>
      <div className="m-16 bg-white whitespace-pre-line flex-shrink shadow-md">
        <Container>
          {"\n"}
          <Row>
            <Col className="p-1 font-bold" lg="4" xs="6">
              Quote Number:
            </Col>
            <Col className="p-1 " lg="6" xs="6">
              {pageQuote.quoteNumber}
            </Col>
          </Row>
          <Row>
            <Col className="p-1 font-bold" lg="4" xs="6">
              QuoteId:{" "}
            </Col>
            <Col className="p-1" lg="6" xs="6">
              {pageQuote.quoteId}
            </Col>
          </Row>
          <Row>
            <Col className="p-1 font-bold" lg="4" xs="6">
              businessDomainType:{" "}
            </Col>
            <Col className="p-1" lg="6" xs="6">
              {pageQuote.businessDomainType}
            </Col>
          </Row>
          <Row>
            <Col className="p-1 font-bold" lg="4" xs="6">
              Status:{" "}
            </Col>
            <Col className="p-1" lg="6" xs="6">
              {pageQuote.status}
            </Col>
          </Row>
          {"\n"}
          {"\n"}
          <Row>
            <Col className="p-1 font-bold" lg="4" xs="6">
              namedInsured:{" "}
            </Col>
            <Col className="p-1" lg="6" xs="6">
              {pageQuote.namedInsured}
            </Col>
          </Row>
          <Row>
            <Col className="p-1 font-bold" lg="4" xs="6">
              InceptionDate:{" "}
            </Col>
            <Col className="p-1" lg="6" xs="6">
              {pageQuote.inceptionDate}
            </Col>
          </Row>
          <Row>
            <Col className="p-1 font-bold" lg="4" xs="6">
              ReviewState:{" "}
            </Col>
            <Col className="p-1" lg="6" xs="6">
              {pageQuote.reviewState}
            </Col>
          </Row>
          <Row>
            <Col className="p-1 font-bold" lg="4" xs="6">
              ExpirationDate:{" "}
            </Col>
            <Col className="p-1" lg="6" xs="6">
              {pageQuote.expirationDate}
            </Col>
          </Row>
          {"\n"}
        </Container>
      </div>
    </>
  );
};

console.log(allQuotes.quoteNumber);

export default QuotePage;
