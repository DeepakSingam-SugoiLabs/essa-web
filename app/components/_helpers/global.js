let object = {
    domain: "",
  };
  
  if (process.env.NODE_ENV === "production") {
    object.domain = "http://farah.dubaifuture.gov.ae/v1";
  } else {
    object.domain = "http://farah.dubaifuture.gov.ae/v1";
  }
  console.log("object", object, "process.env.NODE_ENV", process.env.NODE_ENV);
  module.exports = object;
  