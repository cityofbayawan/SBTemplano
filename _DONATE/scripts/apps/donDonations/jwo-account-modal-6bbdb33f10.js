!function(){function o(){return{restrict:"E",templateUrl:"apps/donDonations/jwo-account-modal.html",controller:"jwoAccountModalController",controllerAs:"ctrl",bindToController:!0,scope:{api:"="}}}function n(o,n,e,t){function r(o){return c.donationType=o,c.recurringDonation=o==e.donationType.WW_RECUR||o==e.donationType.CONG_RECUR,c.deferredAction=n.defer(),c.visible=!0,c.deferredAction.promise}function i(o){c.deferredAction.resolve({donationType:c.donationType,action:o}),c.visible=!1}var c=this;c.returnAction=i,c.deferredAction=null,c.api={getAction:r},function(){o.t=t,o.$watch("ctrl.visible",function(){c.visible||null===c.deferredAction||c.deferredAction.reject()})}()}angular.module("jwoAccountModal",["jwoModal"]).controller("jwoAccountModalController",n).directive("jwoAccountModal",o),n.$inject=["$scope","$q","DATA","LITERALS"]}();
//# sourceMappingURL=../../maps/apps/donDonations/jwo-account-modal.js.map
