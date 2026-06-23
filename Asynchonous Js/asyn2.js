const paymentSuccess = true;
const mark = 70;

function enroll(callback){
    console.log('Course enrolled is in progress');

    setTimeout(function(){
        if(paymentSuccess){
            callback();
        }
        else{
            console.log("Payment failed!");
        }
    },2000)
}

function progress(callback){
    console.log('Course on progress...');
    setTimeout(function(){
        if(mark >= 80){
            callback();
        }
        else{
            console.log('You could not get enough marks to get the certificate')
        }
    },3000)
}

function getCertificate(){
    console.log('You got a Certificate!')
}

enroll(function(){
    progress(getCertificate);
});
// console.log("hello");
