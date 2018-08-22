"use strict";
const alerts = {
  template: `

<nav class="nav">
  <a href="#!/"><i class="material-icons">home</i></a>
  <a href="#!/connections"><i class="material-icons">people_outline</i></a>
  <a href="#!/messages"><i class="material-icons">chat_bubble_outline</i></a>
  <a href="#!/alerts"><i class="material-icons">notifications_none</i></a>
  <a href="#!/resources"><i class="material-icons">local_pharmacy<a href="#!/resources"></i></a>
</nav>

    <h1 class="alert_text">Health Alerts</h1>

     <div class="alert_box">
       <div class="lupus_board">Lupus Board Updates</div>
       <p class="article_title">Coping with Lupus: How Does Lupus Affect Your State of Mind and Body?</p>
       <div class="mom">
          <a href="https://www.kaleidoscopefightinglupus.org/coping-with-lupus-how-does-lupus-affect-your-state-of-mind-and-body/">
          <img class="coping" src="graphics/coping.jpg"/>
          </a>
       </div>

       <div class="dropdown">
       <button class="dropbtn" ng-click="showme = !showme">Dropdown</button>
       <div class="dropdown-content" ng-show="showme">
         <a href="https://www.lupus.org/research-news">New Studies</a>
         <a href="https://www.sciencedaily.com/news/health_medicine/lupus/">Headlines</a>
         <a href="https://www.sciencedaily.com/releases/2018/04/180420122847.htm">New Treatments</a>
       </div>
     </div>


     </div>

  `

}
angular
.module("app")
.component("alerts", alerts);

/* <div class="mom">
  <a href="https://www.kaleidoscopefightinglupus.org/coping-with-lupus-how-does-lupus-affect-your-state-of-mind-and-body/">
  <img class="coping" src="graphics/coping.jpg"/>
  </a>
</div> */
