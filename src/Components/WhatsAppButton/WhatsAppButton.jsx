const WhatsAppButton = (props) => {
  const sendonWhatsApp = () => {
    if (props.product && props.quantity && props.paymentMethod) {
      window.open(
        `https://api.whatsapp.com/send?phone=972595681131&text= رابط العنصر : ${window.location.href}%0A%0A السلام عليكم ورحمة الله وبركاته%0A%0A أريد شراء ${props.product.name}  عدد  ${props.quantity}, بسعر ${props.price} ₪ %0A%0A وطريقة الدفع ${props.paymentMethod.name} %0A%0A مع تحياتي`
      );
    } else {
      window.open(
        `https://api.whatsapp.com/send?phone=972595681131&text= السلام عليكم و رحمة الله و بركاته %0A%0A اريد طلب عنصر غير متوفر في الموقع %0A%0A اسم العنصر : %0A%0A المنصة (اكسبوكس / ستيم / .. ): %0A%0A دولة المتجر(امريكي /سعودي / .. ) : %0A%0A سعر العنصر في المتجر (بالدولار): %0A%0A الكمية : %0A%0A طريقة الدفع (بنك فلسطين / جوال باي / كاش / رصيد): %0A%0A مع تحياتي (يرجى تعبئة البيانات لتسهيل الطلب) `
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
