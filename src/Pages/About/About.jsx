import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import logo from "../../data/logo.png";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div className="container px-4 px-lg-5 my-5">
      <Helmet>
        <title>حول المتجر - Asad's Store</title>
        <meta name="description" content="حول المتجر" />
      </Helmet>
      <Row>
        <div className="container px-4 px-lg-5 my-5 ">
          <div className="text-center text-black">
            <h1 className="display-4 fw-bolder">Asad's Store</h1>
            <p className="lead fw-normal text-black-50 mb-0">
              أفضل مكان لشراء الألعاب والاشتراكات
            </p>
          </div>
        </div>
      </Row>
      <Row>
        <Col md={6}>
          <Image
            src={logo}
            alt="About Us"
            fluid
            width={400}
            height={400}
            rounded
          />
        </Col>
        <Col md={6}>
          <h2>حول المتجر</h2>
          <p>
            مرحبًا بك في متجر Asad's Store، وجهتك المثالية لأحدث أكواد وألعاب
            واشتراكات Xbox وPlayStation. نهدف لتوفير تجربة لعب سلسة وممتعة
            بأسعار منافسة، مع وصول سريع وموثوق لأفضل الألعاب والعروض. سواء كنت
            لاعبًا مبتدئًا أو محترفًا، ستجد لدينا كل ما تحتاجه من ألعاب جديدة
            وكلاسيكية، بالإضافة إلى اشتراكات Xbox Game Pass وPlayStation Plus
            التي تتيح لك الوصول لمكتبة ضخمة من الألعاب المتجددة. نفخر بخدمة
            عملاء مميزة يقدمها فريق من عشاق الألعاب، جاهزون لمساعدتك في اختيار
            الأنسب لك والإجابة على كل استفساراتك. ابدأ رحلتك في عالم الألعاب
            معنا اليوم، وتمتع بسرعة التوصيل وخدمة ما بعد البيع التي تستحقها.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default About;
