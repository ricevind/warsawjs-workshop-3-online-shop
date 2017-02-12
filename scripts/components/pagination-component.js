/**
 * Created by ricevind on 11.02.17.
 */

(function () {


  class paginationController {

    selectPage(index) {
      this.onPageSelect({
        $event:
          {
            page: index + 1,
            selectedPage: index
          }
      });
    }

    isSelected(index) {
      return index === this.selectedPage;
    }


  }


  angular
    .module('shop')
    .component('pagination', {

      bindings: {
        pages: '<',
        selectedPage: '<',
        onPageSelect: '&'
      },
      template:`<div>
                 <ul class="pagination">
                  <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
                  <li class="ng-class:{active:$ctrl.isSelected($index)}" 
                      ng-repeat="item in $ctrl.pages track by $index">
                    <a ng-click="$ctrl.selectPage($index)">{{ $index+1}}</a>
                   </li>
                  <li class="disabled"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
                </ul></div>`,
      controller: paginationController

    })
})();