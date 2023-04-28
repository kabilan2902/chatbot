const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;

    script.onload = () => {
      resolve(true);
    };

    script.onerror = () => {
      resolve(false);
    };

    document.body.appendChild(script);
  });
};

const displayRazorpay = async (amount) => {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
  if (!res) {
    alert("You re offline...");
    return;
  }

  const options = {
    key: "rzp_test_aLDxDSv5W707v9",
    currency: "INR",
    amount: 10000,
    name: "Support",
    description: "By accepting the terms, you are willing to support our team",

    handler: function (response) {
      alert(`Transaction ID: ${response.razorpay_payment_id}`);
      alert("Payment Successful");
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};

const Support = () => {
  return (<h1>Hello</h1>), displayRazorpay();
};

export default Support;
