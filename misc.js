const subscriptionForm = document.querySelector(".subscription-form");
subscriptionForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    subscriptionForm.reset();
} )