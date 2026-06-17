const paymentSuccess = true;
const mark = 90;

function enroll() {
  console.log("Course enrolled is in progress");

  const promise = new Promise(function (resolved, rejected) {
    setTimeout(function () {
      if (paymentSuccess) {
        resolved();
      } else {
        rejected("Payment failed!");
      }
    }, 2000);
  });
  return promise;
}

function progress() {
  console.log("Course on progress...");

  const promise = new Promise(function (resolved, rejected) {
    setTimeout(function () {
      if (mark >= 80) {
        resolved();
      } else {
        console.log("You could not get enough marks to get the certificate");
      }
    }, 3000);
  });

  return promise;
}

function getCertificate() {
  console.log("You got a Certificate!");
}

async function startCourse(){

    try{
        await enroll();
        await progress();
        getCertificate();
    }
    catch(err){
        console.log(err);
    }
} 

startCourse();
