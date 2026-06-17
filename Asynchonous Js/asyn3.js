const paymentSuccess = true;
const mark = 90;

function enroll(){

    console.log("Course enrolled is in progress");

    const promise = new Promise(function(resolved, rejected){

        setTimeout(function(){
            if(paymentSuccess){
                resolved();
            }
            else{
                rejected('Payment failed!');
            }
        },2000)
    })
    return promise;
}

function progress(){
    console.log('Course on progress...');

    const promise = new Promise(function(resolved, rejected){

        setTimeout(function(){
            if(mark >= 80){
                resolved();
            }
            else{
                console.log('You could not get enough marks to get the certificate');
            }
        }, 3000);
    })

    return promise;
}

function getCertificate(){
    const promise = new Promise(function(resolved){
        resolved('You got a Certificate!')
    })
    return promise;
}

enroll()
    .then(progress)
    .then(getCertificate)
    .then(function(value){
        console.log(value);
    })
    .catch (function(err){
        console.log(err)
    })