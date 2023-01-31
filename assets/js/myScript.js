var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

var containerEl = $('.container');
var textArea = [];
var divRow = [];
var divCol = [];
var divCol = [];
var divCol = [];
var timeLabel = '';
var saveBtn = [];
var btnImage = [];
var Planner = []

//initialise planner
for(var i=0;i<9;i++){
    Planner[i]=' ';
}
for (var i = 0; i < 9; i++) {
    
    divRow[i] = $('<div>');
    divRow[i].addClass('row');
    
    //blocks to create time labels for each planner row
    if (i < 3){timeLabel = (i+9).toString()+' AM';}
    else if (i == 3){timeLabel = (i+9).toString()+' PM'; }
    else{timeLabel = (i-3).toString()+' PM'; }


    for (var j = 0; j < 3; j++){    
        divCol[j] = $('<div>');
        switch (j){
            case 0:
                divCol[0].addClass('col hour time-block');
                divCol[0].text(timeLabel);
                divCol[0].css('padding','30px 0');            
                break;
            case 1:
                if (i < today.hour()-9){
                    divCol[1].addClass('col-10 past');
                }else if (i == today.hour()-9){
                    //textArea[1].focus();  
                    divCol[1].addClass('col-10 present');
                }else{
                    divCol[1].addClass('col-10 future')
                }           
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
                btnImage[2]= $('<img>');
                btnImage[2].attr("src","../images/floppy.jpg");
                saveBtn[2].append(btnImage[2]);
                divCol[2].append(saveBtn[2]);
                divCol[2].css('padding-top','20px');
                break;

            default:

        }
        divRow[i].append(divCol[j]);
    }
    containerEl.append(divRow[i]);
}          

//delegated click event listner
containerEl.on('click', '.saveBtn', function (event) {
    event.preventDefault();
    alert('Hello, The click is working');
});    
