let object = {
    domain: "http://18.158.250.127:3010/v1",
  };
  
  // if (process.env.NODE_ENV === "production") {
  //   object.domain = "http://farah.dubaifuture.gov.ae/v1";
  // } else {
  //   object.domain = "http://farah.dubaifuture.gov.ae/v1";
  // }
  console.log("object", object, "process.env.NODE_ENV", process.env.NODE_ENV);
  module.exports = object;
  