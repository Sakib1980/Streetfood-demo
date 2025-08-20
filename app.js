// Seller Form
const sellerForm = document.getElementById("sellerForm");
if (sellerForm) {
  sellerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("sname").value;
    const phone = document.getElementById("sphone").value;
    const location = document.getElementById("slocation").value;

    document.getElementById("seller-status").innerText =
      `✅ ধন্যবাদ ${name}! আপনার সেলার অ্যাকাউন্ট তৈরি হয়েছে।`;
    sellerForm.reset();
  });
}

// Customer Form
const customerForm = document.getElementById("customerForm");
if (customerForm) {
  customerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("cname").value;
    const phone = document.getElementById("cphone").value;
    const location = document.getElementById("clocation").value;

    document.getElementById("customer-status").innerText =
      `🎉 স্বাগতম ${name}! আপনি এখন কাস্টমার হিসেবে নিবন্ধিত।`;
    customerForm.reset();
  });
}

// Login Form
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const phone = document.getElementById("phone").value;
    const role = document.getElementById("role").value;

    document.getElementById("login-status").innerText =
      `🔑 লগইন সফল! (${role} হিসেবে প্রবেশ করেছেন)`;
    loginForm.reset();
  });
}
