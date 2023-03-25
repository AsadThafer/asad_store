import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import logo from "../../data/logo.jpg";

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
            src={logo}
            alt="About Us"
            fluid
            width={500}
            height={500}
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
            يتم تحديثها باستمرار مقابل رسوم شهرية منخفضة. في متجرنا، نفخر بتوفير
            خدمة عملاء ممتازة. فريقنا مؤلف من عشاق الألعاب الذين يشاركون شغفهم
            وخبرتهم معك. نحن دائمًا متاحون للإجابة على أسئلتك، ومساعدتك في
            العثور على اللعبة المثالية أو الاشتراك المناسب لاحتياجاتك. نقدم
            أيضًا توصيلًا سريعًا وموثوقًا، حتى تتمكن من البدء في اللعب بألعابك
            الجديدة في أقرب وقت ممكن. بالإضافة إلى أكواد واشتراكات الألعاب، نقدم
            أيضًا حسابات Xbox و PlayStation، والتي تأتي محملة مسبقًا بالألعاب
            والاشتراكات والمكافآت الأخرى، حتى تتمكن من البدء في اللعب على
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
