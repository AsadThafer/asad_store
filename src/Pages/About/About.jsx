import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const About = () => {
  return (
    <Container>
      <Row>
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-black">
            <h1 className="display-4 fw-bolder">Asad's Store</h1>
            <p className="lead fw-normal text-black-50 mb-0">
              {" "}
              We have the best games for you
            </p>
          </div>
        </div>
      </Row>
      <Row>
        <Col md={6}>
          <Image
            src="https://scontent.fjrs26-1.fna.fbcdn.net/v/t39.30808-6/304124944_451655653675917_2151081251938326824_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=MGsO1NtRNfcAX8Mtq3m&_nc_ht=scontent.fjrs26-1.fna&oh=00_AfDNK92V8ieCmweO0GeafIEJSusvVpVareny35fCJ97D3w&oe=6405B199"
            alt="About Us"
            fluid
            width={500}
            height={500}
            rounded
          />
        </Col>
        <Col md={6}>
          <h2>About Us</h2>
          <p>
            Welcome to our online store, where you can find the latest and
            greatest Xbox and PlayStation game codes, subscriptions, and
            accounts. Our mission is to provide you with a hassle-free and
            enjoyable gaming experience, by offering you easy and affordable
            access to the best games on the market. Whether you're a casual
            gamer or a serious enthusiast, we have everything you need to take
            your gaming to the next level. From new releases to classic titles,
            we've got you covered. Our selection of game codes includes Xbox and
            PlayStation exclusives, as well as popular multi-platform games. We
            also offer a variety of subscriptions, such as Xbox Game Pass and
            PlayStation Plus, which give you access to a constantly updated
            library of games for a low monthly fee. At our store, we pride
            ourselves on providing excellent customer service. Our team is made
            up of gaming enthusiasts who are passionate about sharing their
            knowledge and expertise with you. We are always available to answer
            your questions, and to help you find the perfect game or
            subscription for your needs. We also offer fast and reliable
            delivery, so you can start playing your new games as soon as
            possible. In addition to game codes and subscriptions, we also offer
            Xbox and PlayStation accounts. These accounts come pre-loaded with
            games, subscriptions, and other bonuses, so you can start gaming
            right away. We take great care to ensure that our accounts are safe,
            secure, and legitimate, so you can buy with confidence. Thank you
            for choosing our online store for your gaming needs. We hope you
            enjoy your experience with us, and we look forward to serving you
            for many years to come.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
