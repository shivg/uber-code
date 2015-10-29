var person = {firstname: "Shiva",
              lastname: "Periyasamy",
              birth: "11/28/1982",
              getAge: function (){
              // var myDate = new Date();
               //var year = this.birth.match(/\d+$/)[0]
               //var age = myDate.getFullYear() - Number(year)

                var today = new Date();
                var dobSplit = dob.split('/');
                var dayOfBirth = dobSplit[1];
                var mob = dobSplit[0];
                var yob = dobSplit[2];
                var age = today.getFullYear() - yob;
                var m = today.getMonth()+1 - mob;
                var days = today.getDate() - dayOfBirth;
                if(m<0 || (m==0 && days< 0){
                   age--;
                }

              return age;
            }
          };

    function Person(fn,ln){
                this.firstname = fn,
                this.lastname = ln,
                getFullName = function(){
                return this.firstname + " " + this.lastname
                },
                       getAge: function (){

                var today = new Date();
                var dobSplit = dob.split('/');
                var dayOfBirth = dobSplit[1];
                var mob = dobSplit[0];
                var yob = dobSplit[2];
                var age = today.getFullYear() - yob;
                var m = today.getMonth()+1 - mob;
                var days = today.getDate() - dayOfBirth;
                if(m<0 || (m==0 && days< 0){
                   age--;
                }

              return age;
            }


                }

          var person = new Person("Shar","Rangs");

          console.log(1+2+"3");
