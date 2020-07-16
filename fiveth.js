let number_1 = 8;
let number_2 = 5;
let number_3 = 14;
let max_num = 0;
if(number_1 >= number_2 && number_1 >= number_3) {
           max_num = number_1;
} else if (number_2 >= number_1 && number_2 >= number_3){
    max_num = number_2;
} else {
    max_num = number_3;
}
alert("the maximum number is : " + max_num );