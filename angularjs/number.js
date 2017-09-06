// 指令的生命周期开始于 $compile 方法并 结束于 link 方法 自定义指令的全部可设置的属性大致如下
// 指令的选项如下所示，每个键的值说明了可以将这个属性设置为何种类型或者什么样的 函数：
angular
    .module('myApp', [])
    .controller("myController", function ($scope) {
        $scope.number ={
            min:0,
            max:0
        };
        $scope.str = "aaa";
    })
    .directive('paramNumber', function () { //指令名称paramNumber
        return { //返回一个对象
            restrict: "C", 
            

            priority: 0, 
            terminal: false, 
            templateUrl: "number.html", //（字符串或函数）1，外部路径的字符串，2，接受两个参数的函数，参数为 tElement 和 tAttrs ，并返回一个外部HTML文件路径的字符串
            replace: false, //（布尔型）默认为false(模板内容会加载到标签内部)，true(模板内容会替换当前标签)
            scope: {
                param: "=",
                str:"@",
                fuc:"&"
            },

            transclude: false, 
            //如果指令使用了 transclude 参数，那么在控制器（下面马上会介绍）中就无法正常监听数 据模型的变化了。
            controller: function ($scope) {
            },

            link: function (scope, iElement, iAttrs) {
                // alert('link');
            },
            compile: function (tElement, tAttrs, transclude) {
                // alert('compile');
                return {
                    pre: function (scope, iElement, iAttrs, controller) {},
                    post: function (scope, iElement, iAttrs, controller) {}
                }
            }
        };
    }
);