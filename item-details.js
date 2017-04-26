/**
 * Created by Vernon on 4/25/2017.
 */
function itemDetailsController(){
    var ctrl = this;

    ctrl.delItem = function(){
        ctrl.onDelete({item: ctrl.item})
    }
}

angular.module('componentApp').component('itemDetails', {
    templateUrl: 'item-details.html',
    controller: itemDetailsController,
    bindings: {
        item: '<',
        onDelete: '&'
    }
})