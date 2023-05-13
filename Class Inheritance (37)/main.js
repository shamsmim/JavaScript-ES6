class parent{

 hello1(params) {
    console.log("hello 1 function");
}
 hello2(params) {
    console.log("hello 2 function");
}

}

class child extends parent{


}

var obj=new child();
obj.hello1();
obj.hello2();