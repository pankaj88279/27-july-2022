//console.log('okk')
class MyClass{///PascalCase
    //property

    //consturctor

    //method/function
     //fuction defination 
    myfun(){
        console.log("hello")
    }

}
let object = new MyClass();


object.myfun();


///promis chan

let po = new Promise((resolve,reject)=>{
    let data = {
        name:"pankaj"
    }
    setTimeout(()=>{
        // resolve(data);
        reject(data);
    },5000)

});//promis is  a class 
po.then((data)=>{
    console.log(data);

}).then().catch((error)=>{
    console.log(error)
});