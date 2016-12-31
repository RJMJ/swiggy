angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('account.html','<ion-view  cache-view="false" title="SWIPE"  ng-init="mySwitch=true" >\r\n     \r\n   <ion-content animation="slide-left-right-ios7"  id="eventPlaceholder" has-bouncing="false" class="profile1  has-header" >\r\n          <div>\r\n            <blockquote>\r\n                <p class="hars">Swipe left-right for more cards.</p>\r\n            </blockquote>\r\n        </div>\r\n\t<div>\r\n        <!--<label>Search: <input ng-model="Card"></label>-->\r\n\t\t<ks-swiper-container initial-slide="1" speed="2000" loop="false" show-nav-buttons="false" slides-per-view="1" space-between="10" pagination-clickable="false" override-parameters="{effect: \'coverflow\',coverflow: {rotate: 50,stretch: 10,depth: 100,modifier: 1,slideShadows : true}}"  on-ready="onReadySwiper(swiper)">\r\n\t\t\t <ks-swiper-slide class="swiper-slide" ng-repeat="item in list | filter : Card" ng-model="Card"  id="{{item.key}}" >\r\n\t\t\t\t <div class="card hars" ng-style="{\'background-color\': colors[$index]}">\r\n     <button mfb-button icon="ion-star"  ng-model="mySwitch" ng-click="favourite(\'{{item.key}}\')" label="Favourite"></button>\r\n         <div class= "row">\r\n           <span class="col col-80 ">\r\n               <label>Holder Name : </label>  \r\n          \r\n         {{ item.item2 }}  {{mySwitch}}\r\n         </span>\r\n         <span   class="col"><button  ng-show="mySwitch"  ng-model="mySwitch" ng-click="favourite(\'{{item.key}}\')" class="button-icon ion-star"></button></span>\r\n        </div>\r\n         <div class= "row"> <label >Card Number :</label>        {{ item.item1  | limitTo:10 }}\r\n         </div>\r\n         <div class= "row">\r\n             <span class="col ">\r\n               <label >Valid Thru :</label>  \r\n         {{ item.item3 }}\r\n             </span>\r\n        <span class="col col-33 ">\r\n               <label >CVV :</label>  \r\n         {{ item.item4 }}\r\n        </span>\r\n         </div>\r\n         <div  class= "row">\r\n               <label>Position :</label>  \r\n         {{ item.item5 }},{{ item.item6 }}\r\n         </div>\r\n           <!--<div  class= "row">\r\n               <label>Card :</label>  \r\n         {{ item.item20 }}\r\n         </div>-->\r\n          \r\n         \r\n         <br/>  <br/>\r\n         <!--<div ng-controller="accountCtrl"  ng-show ="lastEventCalled==\'true\'"  class=" ng-hide-remove actions padding ">\r\n           \r\n            <i class="ion-trash-b icon-actions margin" ng-click="deleteItem(\'{{item.key}}\')"></i>\r\n            <i class="ion-stats-bars icon-actions margin" ng-click="transaction(\'{{item.key}}\')"></i>\r\n         </div>-->\r\n      </div>\r\n       \r\n\t  \r\n\t  \r\n\t  \r\n    </ks-swiper-slide>\r\n\t \r\n\t\r\n\t\t\t\r\n\t\t</ks-swiper-container>\r\n         \r\n     <ks-swiper-container initial-slide="1" speed="2000" loop="false" show-nav-buttons="false" slides-per-view="3" space-between="7" pagination-clickable="false" override-parameters="{effect: \'grabCursor\',coverflow: {rotate: 50,stretch: 10,depth: 100,modifier: 1,slideShadows : true}}"  on-ready="onReadySwiper(swiper)">\r\n\t\t\t <ks-swiper-slide class="swiper-slide" ng-repeat="(country,g) in list1"  >\r\n\t\t\t\t <div class="card hars1 align" ng-style="{\'background-color\': colors[$index + 8]}">\r\n      <button class="button-light button-clear align " ng-click="search()"  >{{g}}</button>\r\n        \r\n      </div>\r\n       \r\n\t  \r\n\t  \r\n\t  \r\n    </ks-swiper-slide>\r\n\t \r\n\t\r\n\t\t\t\r\n\t\t</ks-swiper-container>\r\n    \r\n    \r\n\r\n             <div class="card"   ng-show="noData || incomplete">\r\n      <div class="item item-text-wrap">\r\n         <span ng-show="incomplete">\r\n         You have no favourite cards. Please select favourite cards freom ADD card tab.\r\n         </span>\r\n         <span ng-show="noData">\r\n         No cards in your bucket.\r\n         </span>\r\n      </div>\r\n   </div>\r\n   \r\n   \r\n \r\n   \r\n\t</div>\r\n \r\n       <!--<input type="checkbox" ng-model="mySwitch"/>Button-->\r\n   </ion-content>\r\n    <nav mfb-menu position="br" effect="slidein-spring" \r\n     active-icon="ion-close" resting-icon="ion-plus-round"\r\n     toggling-method="click"  ng-repeat="item in list" id="{{item.key}}">\r\n  <button mfb-button icon="ion-edit" label="Edit"></button>\r\n   <button mfb-button icon="ion-trash-b"  ng-click="deleteItem(\'{{item.key}}\')" label="Delete"></button>\r\n    <button mfb-button icon="ion-stats-bars"  ng-click="transaction(\'{{item.key}}\')" label="Stats"></button>\r\n     \r\n     \r\n</nav>\r\n   \r\n</ion-view>\r\n\r\n\r\n ');
$templateCache.put('auth-signin.html','\n\n\n<ion-view title="Sign In">\n  <ion-content class="main-login-page  overlay-content backgroundimage" >\n\t  <div class="spacer" style=" height:1%;"></div>\n\t   <h2 class="hars">OneSwiggy</h2>\n\t\t <h2 class="hars">A windows client for</h2>\n\t\t <img class="hars" ng-src="templates/img/Swiggy.png"/>\n\t  <h3 class="hars">Log In</h3>\n\t\n  \t\t\t\n\t\t<div class="list">\n\t\t\t  <label class="item item-input username">\n\t\t\t    <input type="text"   placeholder="Phone number" ng-model="user.phone">\n\t\t\t  </label>\n\n\t\t\t  <label class="item item-input lock">\n\t\t\t    <input type="text"  placeholder="password" ng-model="user.pwd">\n\t\t\t  </label>\n\t\t\t</div>\n\t\t\t<button class="button button-full button-blue icon-left ion-log-in"  ng-click="sigin()">\n\t\t\t\tSIGN IN\n\t\t\t</button>\n\n<div class="spacer" style=" height:3%;"></div>\n   <button ng-click="create()" class="button button-clear button-light  icon-left ion-android-person-add ">Or create an account</button>\n  </ion-content>\n</ion-view>\n');
$templateCache.put('auth-signup.html','\n\n<ion-view title="Sign Up">\n\t\n  <ion-content class="signup-page content-bg " >\n\t  \n\t   <div class="spacer" style=" height:1%;"></div>\n\t  <h3 class="hars">Sign Up</h3>\n\t\t  \t<div class="list">\n\t\t\t  <!--<label class="item item-input username">\n\t\t\t    <input type="text" placeholder="Username" ng-model="user.username">\n\t\t\t  </label>-->\n\n\t\t\t  <label class="item item-input email">\n\t\t\t    <input type="text" placeholder="Email" ng-model="user.email">\n\t\t\t  </label>\n\n\t\t\t  <label class="item item-input lock">\n\t\t\t    <input type="password" placeholder="Password" ng-model="user.password">\n\t\t\t  </label>\n\t\t\t</div>\n\t\t\n\t\t\t<button class="button button-blue" ng-click="createUser()">\n\t\t\t\tSIGN UP\n\t\t\t</button>\n\t\t\t\n  </ion-content>\n</ion-view>');
$templateCache.put('card.html','\r\n\r\n<ion-view title="{{restaurant.name}}">\r\n   <ion-nav-bar class="bar-dark">\r\n  <ion-nav-back-button>\r\n  </ion-nav-back-button>\r\n</ion-nav-bar>\r\n    <ion-content  class="overlay-content"  content scroll="true">\r\n\t\t\r\n     \t<tab-slide-box  ng-if="foodmenu">\r\n\t\t\t    \t<div class="tsb-icons ">\r\n\t\t\t    \t\t<div class="tsb-ic-wrp">\r\n\t\t\t\t\t\t\t<ion-scroll direction="x" class="tsb-hscroll">\r\n\t\t\t\t\t\t\t\t<a href="javascript:;" class="{{tab.icon}} menuHeaderFont" ng-repeat="menu in foodmenu" on-finish-render="test()">{{menu.name}}</a>\r\n\t\t\t\t\t\t\t</ion-scroll>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t    \t</div>\r\n\t\t\t        <ion-slide-box show-pager="false"   on-slide-changed="slideHasChanged($index)">\r\n\t\t\t            <ion-slide  ng-repeat="menu in foodmenu" >\r\n\t\t\t               \t\t\t\t\t\t\t\t\r\n\r\n  <ion-list class="scrollList">\r\n        <div ng-repeat="categories in menu.subCategories">\r\n          <ion-item class="activecolor"\r\n                    ng-click="toggleGroup(categories)"\r\n                    ng-class="{active: isGroupShown(categories)}">\r\n\t\t\t\t\t\r\n              <i class="icon" ng-class="isGroupShown(categories) ? \'ion-chevron-down\' : \'ion-chevron-right\'"></i>\r\n            &nbsp;\r\n             {{categories.name}}\r\n\t\t\t\t </ion-item>\r\n          <ion-item class="item-accordion marginzero"\r\n                    ng-repeat="fooditem in categories.menu"\r\n                    ng-show="isGroupShown(categories)">\r\n\t\t\t\t\t <div ng-click="" ng-init="fooditem.quantity = 0">\r\n\t\t\t\t\t\r\n\r\n\r\n  <div class="item item-image imagerest" ng-if = "fooditem.cloudinaryImageId">\r\n    <img src="https://res.cloudinary.com/swiggy/image/upload/c_scale,f_auto,fl_lossy,h_134,q_80,w_269/{{fooditem.cloudinaryImageId}}">\r\n     <span class="restclosedstatus">{{closedrestaurant.nextOpenMessage}}</span>\r\n  </div>\r\n\r\n  <div class="row card marginzero">\r\n <div class="foodDesc">{{fooditem.name}}</div>\r\n  <div><i class="rupeeenabled moneyDesc"> &#8377</i>\r\n  <span class="moneyDesc" ng-bind="fooditem.price/100"></span>\r\n  \r\n   \r\n    \r\n\r\n\t\t<button class="button  marginzero  button-clear icon ion-android-remove-circle button-energized" ng-disabled="fooditem.quantity===0" ng-click="fooditem.quantity= fooditem.quantity -1"></button>\r\n\t\t {{fooditem.quantity}}\r\n\t\t<button class=" button marginzero  button-clear icon ion-android-add-circle button-energized" ng-click="fooditem.quantity= fooditem.quantity +1;cartUpdate(fooditem)"></button>\r\n\t\t\r\n\t\t</div>\r\n\r\n   \r\n  </div>\r\n  \r\n  \r\n          </ion-item>\r\n        </div>\r\n      </ion-list>\r\n\t\t\t            </ion-slide>\r\n\t\t\t            \r\n\t\t\t        </ion-slide-box>\r\n          \t</tab-slide-box>\r\n  \r\n       </div> \r\n\r\n\r\n    </ion-content>\r\n\r\n\t<ion-footer-bar align-title="left" class=" marginzero bar-dark" ng-show="checkout">\r\n <span class="col col-66" ng-click="finalcart()">\r\n\t <span class=" marginzero row">\r\n<span class = "marginzero col col-90">\r\n \r\n  <div>Your Cart</div>\r\n\r\n {{checkout.cart_subtotal}}\r\n\r\n</span>\r\n\r\n {{checkout.cart_total_count}}\r\n\t </span>\r\n </span>\r\n  \r\n    <button class=" col col-33 marginzero button  button-assertive" ng-click="Finalcheckout()">CheckOut</button>\r\n  \r\n\r\n</ion-footer-bar>\r\n</ion-view>');
$templateCache.put('menu.html','<ion-side-menus enable-menu-with-back-views="false">\r\n    <ion-side-menu-content>\r\n        <ion-nav-bar class="bar-dark">\r\n            \r\n            <ion-nav-buttons side="left">\r\n                <button class="button button-icon button-clear ion-navicon" menu-toggle=""></button>\r\n            </ion-nav-buttons>\r\n        </ion-nav-bar>\r\n        <ion-nav-view name="side-menu21"></ion-nav-view>\r\n    </ion-side-menu-content>\r\n    <ion-side-menu side="left">\r\n        <ion-header-bar class="bar-dark">\r\n            <div class="title">Menu</div>\r\n        </ion-header-bar>\r\n        <ion-content padding="false"  ng-controller="AppCtrl" class="side-menu-left   has-header" <="" ion-content="">\r\n            <ion-list>\r\n                <ion-item  class="item item-icon-left" ng-click="sidemenu(\'/menu/restaurant/overview\')"  menu-close="">\r\n               <i class="icon  ion-card"></i>Home</ion-item>\r\n                <!--<ion-item  class="item item-icon-left" ng-click="sidemenu(\'/menu/bucket/list\')"  menu-close="">\r\n                <i class="icon ion-person"></i>Account</ion-item>\r\n                <ion-item class="item item-icon-left" ng-click="sidemenu(\'/menu/settings\')"  menu-close="">\r\n                <i class="icon ion-gear-b"></i>Settings</ion-item>\r\n                <ion-item class="item item-icon-left" ng-click="sidemenu(\'/menu/feedback\')"   menu-close="">\r\n                <i class="icon ion-ios-list"></i>Feedback</ion-item>\r\n                <ion-item class="item item-icon-left" ng-click="sidemenu(\'/menu/map\')"  menu-close="">\r\n                <i class="icon ion-android-map"></i>Map</ion-item>\r\n                 <ion-item  class="item item-icon-left" ng-click="sidemenu(\'/menu/bluetooth\')"  menu-close="">\r\n                 <i class="icon ion-android-sync"></i>Sync</ion-item>\r\n                  <ion-item   class="item item-icon-left" ng-click="sidemenu(\'/menu/account\')"  menu-close="">\r\n                  <i class="icon ion-android-send"></i>SWIPE</ion-item>\r\n                  <ion-item   class="item item-icon-left" ng-click="sidemenu(\'/menu/test\')"  menu-close="">\r\n                  <i class="icon ion-android-send"></i>Profile</ion-item>\r\n                 \r\n                  <ion-item   class="item item-icon-left" ng-click="sidemenu(\'/menu/notification\')"  menu-close="">\r\n                  <i class="icon ion-android-send"></i>notification</ion-item>\r\n                   <ion-item   class="item item-icon-left" ng-click="sidemenu(\'/menu/card\')"  menu-close="">\r\n                  <i class="icon ion-android-send"></i>card</ion-item>-->\r\n                 \r\n                \r\n            \r\n            <div class="spacer" style="width: 268px; height: 76px;"></div>\r\n            <ion-list>\r\n               \r\n                <ion-item class="item item-icon-left" ng-click="logout()">\r\n                    <i class="icon ion-log-out"></i>Logout</ion-item>\r\n            </ion-list>\r\n        </ion-content>\r\n    </ion-side-menu>\r\n</ion-side-menus>');
$templateCache.put('newPass.html','<div class="modal custommodal slide-in-right" style="height: 300px;" ng-controller="newPassCtrl">\r\n   <header class="bar bar-header">\r\n      <h3>YOUR CART</h3>\r\n   </header>\r\n   <ion-content class="marginzero has-header">\r\n     <ion-list ng-repeat="cartmenu in checkout.cart_menu_items" >\r\n    <ion-item >\r\n      {{cartmenu.name}}\r\n\r\n      \r\n\t\t<button class="button button-clear icon ion-android-remove-circle button-energized" ng-disabled="cartmenu.quantity===0" ng-click="cartmenu.quantity= cartmenu.quantity -1"></button>\r\n\t\t {{cartmenu.quantity}}\r\n\t\t<button class=" button button-clear icon ion-android-add-circle button-energized" ng-click="cartmenu.quantity= cartmenu.quantity +1;cartUpdate(cartmenu)"></button>\r\n\t\t{{cartmenu.total}}\r\n      </ion-item> \r\n     </ion-list>\r\n        <span class="marginzero col col-offset-66 col-33">\r\n      <div>Item Total :  {{checkout.cart_subtotal_without_packing}}</div>\r\n      <div>\r\n      Delivery Charges :  {{checkout.delivery_charges}}</div>\r\n      <div>\r\n      Packaging Charges :  {{checkout.total_packing_charges}}</div>\r\n        </span>\r\n     \r\n     <ion-item class=" "> \r\n       Grand Total :  {{checkout.cart_total}}\r\n     </ion-item>\r\n    \r\n   </ion-content>\r\n   <ion-footer-bar class= "checkoutfooter">\r\n       <button class="button marginzero  buttoncheckout button-full button-assertive">CHECKOUT</button>\r\n   </ion-footer-bar>\r\n</div>');
$templateCache.put('newPass1.html','<div class="modal slide-in-right" style="height: 300px;" ng-controller="newPass1Ctrl">\r\n   <header class="bar bar-header">\r\n      <h3 class="col col-90">Filter/Sort</h3>\r\n      <button class="button button-clear icon ion-android-close button-dark" ng-click="sfclose()"></button>\r\n   </header>\r\n   <ion-content class="marginzero has-header">\r\n         Sort By \r\n      <ion-item class="item"> \r\n        <button class="button button-outline button-dark icon icon-left ">Relevance</button>\r\n         <button class="button button-outline button-dark  icon icon-left ">Delivery Time</button>\r\n          <button class="button button-outline button-dark  icon icon-left ">Rating</button>\r\n           <button class="button button-outline button-dark icon icon-left ">Budget</button>\r\n     </ion-item>\r\n     <ion-item class=" "> \r\n       \r\n     </ion-item>\r\n    \r\n   </ion-content>\r\n   <ion-footer-bar class= "checkoutfooter">\r\n       <button class="button marginzero  buttoncheckout button-full button-assertive">Apply</button>\r\n   </ion-footer-bar>\r\n</div>');
$templateCache.put('notification.html','<ion-view title="{{restaurant.name}}" ng-init="locationsearch=false">\r\n   <ion-nav-bar class="bar-dark">\r\n  <ion-nav-back-button>\r\n  </ion-nav-back-button>\r\n    <ion-nav-buttons side="right">\r\n      <span class="marginzero" ng-show="locationsearch">\r\n      <label class="item item-input item-dark borderlocation">\r\n  <i class="icon ion-search placeholder-icon"></i>\r\n      <input class="searchsort" type="search"  ng-autocomplete="result1" details="details1" options="options1" placeholder="Search your location.."></input>\r\n      \r\n</label>\r\n      </span>\r\n      \r\n      <button class="button button-clear button-light icon ion-search" ng-hide="locationsearch" ng-click="locationsearch = !locationsearch">\r\n      </button>\r\n    </ion-nav-buttons>\r\n</ion-nav-bar>\r\n   \r\n   <ion-content class="padding has-header">\r\n     <div class="row">\r\n <div> \r\nDelivery Location\r\n </div>\r\n   <button class="button  button-clear icon-left ion-location button-positive">Locate me</button>\r\n</div>\r\n\r\n  <!--<div class="card">\r\n  <div class="item item-text-wrap">\r\n    Saved Address\r\n  </div>\r\n   <button class="button button-clear icon-left ion-location button-positive">Locate me</button>\r\n</div>\r\n-->\r\n\r\n\r\n\r\n     \r\n      \r\n   </ion-content>\r\n</ion-view>');
$templateCache.put('overview.html','\r\n<ion-view title="Home">\r\n    \r\n    <ion-nav-buttons side="right">\r\n      \r\n      \r\n      <button class="button button-clear button-light icon ion-edit" ng-click="Locationedit()">\r\n      </button>\r\n    </ion-nav-buttons>\r\n       \r\n    <ion-header-bar class="bar-subheader"> \r\n      <span class="marginzero col col-90">\r\n      <label class="item item-input ">\r\n  <i class="icon ion-search placeholder-icon"></i>\r\n      <input class="searchsort" type="search" ng-model="searchString" ng-change="searchRD()" placeholder="Search restaurants,dishes.."></input>\r\n      \r\n</label>\r\n      </span>\r\n      <button class="button button-clear button-dark icon ion-funnel" ng-click="restaurantsort()">\r\n        \r\n      </button>\r\n    \r\n \r\n    </ion-header-bar>\r\n  <ion-content lazy-scroll overflow-scroll="true" padding="true" class="has-header has-footer " ng-controller="overviewCtrl ">\r\n    \r\n   \r\n \r\n     <div  ng-repeat="searchresult in searchquery.items">\r\n       <a ng-click="dishclick(searchresult)"> {{searchresult}}</a>\r\n      </div>\r\n\r\n  \r\n\r\n\r\n      <ion-slides class="carouselheight" >\r\n    <ion-slide-page ng-repeat="carousel in carousels">\r\n    \r\n     <img class="carouselwidth" src="https://res.cloudinary.com/swiggy/image/upload/c_scale,f_auto,fl_lossy,h_134,q_80,w_269/{{carousel.creativeId}}">\r\n    </ion-slide-page>\r\n    \r\n  </ion-slides>\r\n  \r\n         \r\n                    <div  id="restaurantlist" ng-repeat="closedrestaurant in closedrestaurants">\r\n         \r\n     <div class="list card" ng-click="restaurantclick(closedrestaurant)">\r\n\r\n\r\n\r\n  <div class="item item-image">\r\n    <img  class="imagerest" image-lazy-src="https://res.cloudinary.com/swiggy/image/upload/c_scale,f_auto,fl_lossy,h_134,q_80,w_269/{{closedrestaurant.cloudinaryImageId}}" lazy-scroll-resize="true" image-lazy-loader="lines">\r\n     <span class="restclosedstatus">{{closedrestaurant.nextOpenMessage}}</span>\r\n  </div>\r\n\r\n  <div class="item">\r\n    <div class="Restname">{{closedrestaurant.name}}</div>\r\n    {{closedrestaurant.cuisine | cuisineFilter}}\r\n  </div>\r\n  \r\n  <div class="item " href="#">\r\n   \r\n    <span><i class="rupeeenabled" ng-show="closedrestaurant.costForTwoString[0]"> &#8377\r\n    </i>\r\n    <i  class="rupeeenabled" ng-show="closedrestaurant.costForTwoString[1]"> &#8377\r\n </i>\r\n    <i class="rupeeenabled" ng-show ="closedrestaurant.costForTwoString[2]"> &#8377\r\n   </i>\r\n    <i class="rupeeenabled" ng-show ="closedrestaurant.costForTwoString[3]"> &#8377\r\n    </i>\r\n    <i  class="rupeedisabled"  ng-hide="closedrestaurant.costForTwoString[0]"> &#8377\r\n    </i>\r\n    <i  class="rupeedisabled"  ng-hide="closedrestaurant.costForTwoString[1]"> &#8377\r\n </i>\r\n    <i  class="rupeedisabled"  ng-hide ="closedrestaurant.costForTwoString[2]"> &#8377\r\n   </i>\r\n    <i  class="rupeedisabled"  ng-hide ="closedrestaurant.costForTwoString[3]"> &#8377\r\n    </i>\r\n    \r\n    </span>\r\n    <span><i class="icon ion-star energized"></i>\r\n    {{closedrestaurant.avg_rating}}\r\n    </span>\r\n  </div>\r\n\r\n</div>     \r\n                    \r\n                   \r\n                       \r\n                         \r\n </div>\r\n         \r\n    <!--<ion-infinite-scroll\r\n  ng-if={{noMoreItemsAvailable}}\r\n  icon="ion-loading-c"\r\n  on-infinite="loadMoreData()"\r\n  distance="10%">\r\n</ion-infinite-scroll>-->\r\n  \r\n      <!--<ion-infinite-scroll ng-if="noMoreItemsAvailable"\r\n    on-infinite="loadMoreData()"\r\n    distance="2%">\r\n  </ion-infinite-scroll>\r\n    -->\r\n     \r\n    </ion-content>\r\n    <ion-footer-bar align-title="left" class="bar-dark">\r\n  <button class=" col col-33 marginzero button  button-assertive" ui-sref="menu.restaurant.checkout">CheckOut</button>\r\n \r\n \r\n</ion-footer-bar>\r\n</ion-view>');
$templateCache.put('restaurant.html',' <ion-nav-view name="restaurantdetails"></ion-nav-view>');
$templateCache.put('settings.html','<ion-view title="Settings">\r\n    <ion-content overflow-scroll="true"  scroll="false" class="has-header profile1">\r\n    <input type="text" ng-model="color" placeholder="Enter a color" />\r\n    <hello-world/>\r\n    </ion-content>\r\n</ion-view>');}]);