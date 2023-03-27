const WhatsAppButton = (props) => {
  const sendonWhatsApp = () => {
    if (props.product && props.quantity && props.paymentMethod) {
      window.open(
        `https://api.whatsapp.com/send?phone=972595681131&text= رابط المنتج : ${window.location.href}%0A%0A السلام عليكم ورحمة الله وبركاته%0A%0A أريد شراء ${props.product.name} عدد ${props.quantity} وطريقة الدفع ${props.paymentMethod.name} %0A%0A مع تحياتي`
      );
    } else {
      window.open(
        `https://api.whatsapp.com/send?phone=972595681131&text= السلام عليكم ورحمة الله وبركاته%0A%0A أريد أن أطلب منتج من متجركم%0A%0A مع تحياتي`
      );
    }
  };
  const classNames = `btn btn-success flex-shrink-0 ${props.width}`;

  return (
    <>
      <button
        onClick={sendonWhatsApp}
        className={classNames}
        type="button"
        style={{
          margin: "auto",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      >
        <i className="bi bi-whatsapp"> تواصل معنا عبر الواتس اب </i>
      </button>
    </>
  );
};

export default WhatsAppButton;
