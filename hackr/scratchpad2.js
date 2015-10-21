

var Employees = [{name: {fn:"shar",ln :"rangs"}, id: 1, salary:100, mid:2},
                  {name: {fn:"shiv",ln:"pers"}, id: 2, salary:109,mid:10},
                {name: {fn:"the", ln:"god"}, id:10,salary:1000,mid:1}]

function format(arr){
  var result = [];
  var result = arr.map(function (obj){
    var fmat = {}
    fmat.name = obj.name.fn;
    fmat.salary = obj.salary;
    var man_id = obj.mid;
    var manager = arr.filter(function (ob){
      return ob.id == man_id;
    });
    //console.log(manager);
    fmat.manager =  manager[0] ? manager[0].name.fn : "null"
    fmat.manager_salary = manager[0] ? manager[0].salary : "null"
    return fmat;
  });
 return result;
}

console.log(format(Employees));
