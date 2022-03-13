function mtfun() {
        function inside_fun() {
                function inside_inside_fun_00(){
                        console.log('hello_00');
                }

                function inside_inside_fun_01(){
                        console.log('hello_01');
                }
                return  {1 : inside_inside_fun_00(),
                         2 : inside_inside_fun_01()};
        }
        return inside_fun();
}

console.log(mtfun());
