var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

//Declarations
var containerEl = $('.container');
var textArea = [];
var divRow = [];
var divCol = [];
var divCol = [];
var divCol = [];
var timeLabel = '';
var saveBtn = [];
var btnImage = [];
var Planner = [];

//for loop to create the planner body organised in 9 hourly rows    
for (var i = 0; i < 9; i++) {
    
    divRow[i] = $('<div>');
    divRow[i].addClass('row');
    
    //blocks to create time labels for each planner row
    if (i < 3){timeLabel = (i+9).toString()+' AM';}
    else if (i == 3){timeLabel = (i+9).toString()+' PM'; }
    else{timeLabel = (i-3).toString()+' PM'; }

    //Creation of an hourly row
    for (var j = 0; j < 3; j++){    
        divCol[j] = $('<div>');
        switch (j){
            case 0: //Row1 with time labels
                divCol[0].addClass('col hour time-block');
                divCol[0].text(timeLabel);
                divCol[0].css('padding','30px 0');            
                break;
            case 1: //Row2 for activity entries
                if (i < today.hour()-9){
                    divCol[1].addClass('col-10 past');
                }else if (i == today.hour()-9){
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
            case 2: //row3 for button to commit the current entry into local storage
                divCol[2].addClass('col saveBtn');
                saveBtn[2] = $('<button>');
                saveBtn[2].attr('id','button');
                saveBtn[2].addClass('saveBtn btn btn-info');
                btnImage[2]= $('<i>');
                btnImage[2].addClass("fa-solid fa-thin fa-calendar-check");
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
       
    //capture the time label for the clicked row and read in the currently store values
    var timeValue = event.target.parentElement.parentElement.previousSibling.previousSibling.firstChild.textContent.trim();
    var planValue = event.target.parentElement.parentElement.previousSibling.firstChild.value.trim();
        
    //Load previous stored values if exist
    var prevStorage = localStorage.getItem("Planner");
    if (prevStorage != null){
        Planner = JSON.parse(prevStorage);
    }
    
    //update planner with new entry
    switch(timeValue) {
        case '9 AM':
            Planner[0]=timeValue+" : "+ planValue;
            break;
        case '10 AM':
            Planner[1]=timeValue+" : "+planValue;
            break;
        case '11 AM':
            Planner[2]=timeValue+" : "+planValue;
            break;
        case '12 PM':
            Planner[3]=timeValue+" : "+planValue;
            break;
        case '1 PM':
            Planner[4]=timeValue+" : "+planValue;
                break;
        case '2 PM':
            Planner[5]=timeValue+" : "+planValue;
            break;
        case '3 PM':
            Planner[6]=timeValue+" : "+planValue;
            break;
        case '4 PM':
            Planner[7]=timeValue+" : "+planValue;
            break;
        case '5 PM':
            Planner[8]=timeValue+" : "+planValue;
            break;
        default:
            // Do nothing
        }
           
       // store updated planner
       localStorage.setItem("Planner", JSON.stringify(Planner));
});    
