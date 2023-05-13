class parent{

 hello1() {
    console.log("hello 1 function");
}
 hello2() {
    console.log("hello 2 function");
}

}

class child extends parent{

    hello1() {
    console.log("hello 1 function hello 1 function hello 1 function hello 1 function");
}

}

var obj=new child();
obj.hello1();
 