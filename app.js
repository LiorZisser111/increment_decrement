
let numberBox= document.querySelector("#numberBox");
const plus= document.querySelector("#plus");
const minus= document.querySelector("#minus");
const reset= document.querySelector("#reset");

plus.addEventListener('click', function() {
    numberBox.value++;
})


minus.addEventListener('click', function() {
    numberBox.value--;
})


reset.addEventListener('click', function() {
    numberBox.value = 0;
})