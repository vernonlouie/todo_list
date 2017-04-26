/**
 * Created by Vernon on 4/25/2017.
 */

function listController(){
    var ctrl = this;

    ctrl.list = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel', 'India', 'Juliett', 'Kilo', 'Lima', 'Mike', 'November', 'Oscar', 'Papa', 'Quebec', 'Romeo', 'Sierra', 'Tango', 'Uniform', 'Victor', 'Whiskey', 'X-ray', 'Yankee', 'Zulu'];

    ctrl.delete = function(item){
        var index = ctrl.list.indexOf(item);

        if(index > -1){
            ctrl.list.splice(index, 1);
        }
    }
}

angular.module('componentApp').component('list', {
    templateUrl: 'list.html',
    controller: listController
});