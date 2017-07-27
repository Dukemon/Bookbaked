function settings(app){

   this.app = app;
   this.routeTable = [];
   this.init();
}

settings.prototype.init = function () {

   var self = this;

   this.addRoutes();
   this.processRoutes();
};

settings.prototype.processRoutes = function () {

   var self = this;

   self.routeTable.forEach(function(route) {

     if (route.requestType =='get'){

       console.log(route);
       self.app.get(route.requestUrl,route.callbackFunc)
       console.log("working");
     }
     else if (route.requestType =='post'){}
     else if (route.requestType =='delete') {}
   });
};

settings.prototype.addRoutes = function () {

   var self = this;

   self.routeTable.push({

      requestType : 'get',
      requestUrl : '/accountSettings',
      callbackFunc : function(req,res){

        res.render('accountSettings',{title: 'Account settings'});
      }
   });

   self.routeTable.push({

      requestType : 'get',
      requestUrl : '/login',
      callbackFunc : function(req,res){

        res.render('home',{title: 'BookBaked - login'});
      }
   });

};

module.exports = settings;
