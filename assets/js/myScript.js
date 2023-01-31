var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

var containerEl = $('.container');
var textArea = [];
var divRow = [];
var divCol = [];
var divCol = [];
var divCol = [];
var saveBtn = [];
var Planner = []
//initialise planner
for(var i=0;i<9;i++){
    Planner[i]=' ';
}
for (var i = 0; i < 9; i++) {
    
    divRow[i] = $('<div>');
    divRow[i].addClass('row');

    for (var j = 0; j < 3; j++){    
        divCol[j] = $('<div>');
        switch (j){
            case 0:
                divCol[0].addClass('col hour time-block');
                divCol[0].css('padding','30px 0');            
                break;
            case 1:
                divCol[1].addClass('col-10 present');
                //divCol[1].text('AddText');
                textArea[1] = $('<textarea>');
                textArea[1].css('width', '100%');
                textArea[1].attr('row','5');
                divCol[1].append(textArea[1]);
                divCol[1].css('padding-top','15px');
                break;
            case 2:
                divCol[2].addClass('col saveBtn');
                //divCol[2].text('Btn');
                saveBtn[2] = $('<button>');
                saveBtn[2].addClass('saveBtn btn btn-info');
                divCol[2].append(saveBtn[2]);
                divCol[2].css('padding-top','20px');
                break;

            default:

        }
        divRow[i].append(divCol[j]);
    }
    containerEl.append(divRow[i]);
}          

