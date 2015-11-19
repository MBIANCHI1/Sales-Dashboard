var win = Ti.UI.createWindow({
		backgroundColor:'#22376F'
});

var webView = Ti.UI.createWebView({
     //   url : "/html/prova.html"	
    	url: "/html/grafico.html"
    });
    
webView.setScalesPageToFit(true); 

webView.addEventListener("load", function(e) {
        //alert("Caricato");

        var myValues = [['Year', 'Sales', 'Expenses'], ['2004', 1000, 400], ['2005', 1170, 460], ['2006', 660, 1120], ['2007', 1030, 540]];

        var myOptions = {
            title : 'Company Performance',
            hAxis : {
                title : 'Year',
                titleTextStyle : {
                    color : 'red'
                }
            }
        };

        Ti.App.fireEvent('app:drawChart', {
            values : myValues,
            options : myOptions,
        });
    });




win.add(webView);
win.open();
