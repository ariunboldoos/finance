// User Interface Controller call controller by anynomous function IFII call
var UserInterFaceController =(function(){
    // var x=15; controlleriin
    // y=15; //window or GlobalThis хувьсагч
    var x=100;
    function add(y){
        return x+y;
    }
    
    function names(name)
    {
        return 'Хэрэглэгчийн нэр нь: ' + name;
    }
    return{
        publicAdd:function(a){
            a=add(a);
            console.log('Боловсруулсан утга:' + a);
        },
        publicName:function(name)
        {
            name=names(name);
            console.log(name);
        }
    }
})();

//Finance controller
var FinanceController =(function(){
    
})();

// Event Listner controllor холбож ажиллах зүйлс энд хийгдэнэ
//functionruu damjuulj function dotroos ni handana ansync function-oor huleej avna
var appController =(function(uiController,fnController){
        // uiController.publicAdd(550);
        // uiController.publicName('Ариунболд');
        var ctrlAddItem = function() {
            // 1. Оруулах өгөгдлийг дэлгэцээс олж авна.
            console.log("Дэлгэцээс өгөгдөл авах хэсэг");
            // 2. Олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж хадгална.
            // 3. Олж авсан өгөгдлүүдээ вэб дээрээ тохирох хэсэгт гаргана.
            // 4. Төсвийг тооцно
            // 5. Эцсийн үлдэгдэл тооцоог дэлгэцэнд харуулна.
          };
        
          document.querySelector(".add__btn").addEventListener("click", function() {
            ctrlAddItem();
          });
        
          document.addEventListener("keypress", function(event) {
            if (event.keyCode === 13 || event.which === 13) {
              ctrlAddItem();
            }
          });
})(UserInterFaceController,FinanceController);
