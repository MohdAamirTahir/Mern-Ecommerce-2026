const paypal = require("paypal-rest-sdk");

// AamirApi
// paypal.configure({
//   mode: "sandbox",   // ✅ temporary
//   client_id: "AVZITXV81Vdyk4VOmedznU3e2I39YdniuymO3V5HoPIdGyYgWyWhuxTe8Xc5pVMVQSpMA0Cb2nO7vDwk",
//   client_secret: "EKTpmoEpe1GhfWxykimd7_kQEC4wV99OVkJbE1jvhnd97t_jZK_KW85X3_SovamolZuYozuM5i7Ntxbb",
// });

//MERN-Ecommerce-Test
paypal.configure({
  mode: "sandbox",   // ✅ temporary
  client_id: "AfZDCo0vkJVUM_VcSzr7CW_PSriub6Fsxk6gjMygIyqPlQw-ZdBllKTN9a0q4pwz1U1UGPMDIHib6uzf",
  client_secret: "EG8wj40BQtIG8c-gYmrD2Y1P0p_GeE-E90y6h9em5U5HwpOqTZNkxF6mra_V4OsIaLwU2CR2XFemn9ZT",
});

module.exports = paypal;

