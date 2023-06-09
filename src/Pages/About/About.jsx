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
            مرحبًا بك في متجرنا عبر الإنترنت، حيث يمكنك العثور على آخر وأفضل
            أكواد واشتراكات وحسابات ألعاب Xbox وPlayStation. هدفنا هو توفير
            تجربة لعب ممتعة وسهلة لك، من خلال توفير وصول سهل وبأسعار معقولة إلى
            أفضل الألعاب في السوق. سواء كنت لاعبًا عاديًا أو عاشقًا جدي، لدينا
            كل ما تحتاجه للوصول إلى مستوى لعب جديد. بدءًا من الإصدارات الجديدة
            حتى الألقاب الكلاسيكية، نحن نغطي كل شيء. تشمل مجموعتنا من أكواد
            الألعاب حصريات Xbox وPlayStation، وكذلك ألعاب متعددة المنصات
            الشهيرة. نقدم أيضًا مجموعة متنوعة من الاشتراكات، مثل Xbox Game Pass
            و PlayStation Plus، التي تتيح لك الوصول إلى مكتبة من الألعاب التي
            يتم تحديثها باستمرار مقابل رسوم سنوية منخفضة. في متجرنا، نفخر بتوفير
            خدمة عملاء ممتازة. فريقنا مؤلف من عشاق الألعاب الذين يشاركون شغفهم
            وخبرتهم معك. نحن دائمًا متاحون للإجابة على أسئلتك، ومساعدتك في
            العثور على اللعبة المثالية أو الاشتراك المناسب لاحتياجاتك. نقدم
            أيضًا توصيلًا سريعًا وموثوقًا، حتى تتمكن من البدء في اللعب بألعابك
            الجديدة في أقرب وقت ممكن. لا تتردد في الاتصال بنا في أي وقت، وسنكون
            سعداء بخدمتك.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default About;
