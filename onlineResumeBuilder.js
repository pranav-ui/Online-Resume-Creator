document.getElementById("myHeader").innerHTML = `<div class="headerContainer"><h1 >Online Resume creator</h1><div>`;

openTheme1 = () => {
    window.location = 'theme1.html';
}

openTheme2 = () => {
    window.location = 'theme2.html';
}

openTheme3 = () => {
    window.location = 'theme3.html';
}

telValidator = (event) => {
    return (event.charCode >= 48 && event.charCode <= 57);
}

downloadPdf = () => {
    var fullName = $("#fullName").val();
    fullName=fullName.toUpperCase();
    var email = $("#emailId").val();
    var phone = $("#phone").val();
    var doc = new jsPDF("p", "mm", "a4", true);
    doc.setFont("courier");
    doc.setFontType("normal");
    doc.setFontSize(11);
    //header
    doc.setFont("bold 15px arial, sans-serif")
    doc.text(20, 20, fullName);
    doc.setFont("courier");
    doc.setFontType("normal");
    doc.setFontSize(11);

    doc.text(20, 25, email);
    doc.text(20, 30, phone);
    //line
    doc.setDrawColor(0, 0, 0); // draw red lines
    doc.setLineWidth(0.5);
    doc.line(15, 35, 195, 35);
    //carier objective
    var careerObjective = $("#careerObjective").val();
    doc.setDrawColor(0);
    doc.setFillColor(135, 206, 250);
    doc.rect(20, 38, 170, 5, "F");
    doc.setFont("bold 15px arial, sans-serif")
    doc.text('Career Objective', 22, 42);
    var strArr = doc.splitTextToSize(careerObjective, 170)
    doc.text(22, 48, strArr);
    //education
    doc.setDrawColor(0);
    doc.setFillColor(135, 206, 250);
    doc.rect(20, 62, 170, 5, "F");
    doc.setFont("bold 15px arial, sans-serif")
    doc.text('Education', 22, 66);                                      //education heading
    //table
    var btechBoard = $("#btechBoard").val();
    var btechInstitute = $("#btechInstitute").val();
    var btechYear = $("#btechYear").val();
    var btechGrade = $("#btechGrade").val();
    var hscBoard = $("#hscBoard").val();
    var hscInstitute = $("#hscInstitute").val();
    var hscYear = $("#hscYear").val();
    var hscGrade = $("#hscGrade").val();
    var sscBoard = $("#sscBoard").val();
    var sscInstitute = $("#sscInstitute").val();
    var sscYear = $("#sscYear").val();
    var sscGrade = $("#sscGrade").val();
    var columns = ["Examinations", "University/Board", "Institute", "Year of Passing", "Percentage/CGPA"];
    var rows = [
        ["B.Tech", btechBoard, btechInstitute, btechYear, btechGrade], ["H.S.C", hscBoard, hscInstitute, hscYear, hscGrade], ["S.S.C", sscBoard, sscInstitute, sscYear, sscGrade]
    ];

    // Only pt supported (not mm or in)
    doc.autoTable(columns, rows, { margin: { top: 71, right: 22, left: 22 } });

    //technical skills
    var operatingSystems = $("#operatingSystems").val();
    var languages = $("#languages").val();
    var tools = $("#tools").val();
    var dob = $("#dob").val();
    doc.setFont("courier");
    doc.setFontType("normal");
    doc.setFontSize(11);
    doc.setDrawColor(0);
    doc.setFillColor(135, 206, 250);
    doc.rect(20, 110, 170, 5, "F");
    doc.setFont("bold 15px arial, sans-serif")
    doc.text('Technical skills', 22, 114);
    doc.text('O/S:-', 22, 120);
    var strArr = doc.splitTextToSize(operatingSystems, 170)
    doc.text(32, 120, strArr);
    doc.text('IDE/Tools:-', 22, 130);
    var strArr = doc.splitTextToSize(tools, 170)
    doc.text(42, 130, strArr);
    doc.text('Programming Languages:-', 22, 140);
    var strArr = doc.splitTextToSize(languages, 170)
    doc.text(65, 140, strArr);

    //Employee/Training/Internship
    var Internship = $("#Internship").val();
    doc.setDrawColor(0);
    doc.setFillColor(135, 206, 250);
    doc.rect(20, 160, 170, 5, "F");
    doc.setFont("bold 15px arial, sans-serif")
    doc.text('Employee/Training/Internship', 22, 164);
    var strArr = doc.splitTextToSize(Internship, 170)
    doc.text(22, 170, strArr);

    //certification
    var Certification = $("#Certification").val();
    doc.setDrawColor(0);
    doc.setFillColor(135, 206, 250);
    doc.rect(20, 190, 170, 5, "F");
    doc.setFont("bold 15px arial, sans-serif")
    doc.text('Certification', 22, 194);
    var strArr = doc.splitTextToSize(Certification, 170)
    doc.text(22, 200, strArr);

    //activities
    var activities = $("#Activities").val();
    doc.setDrawColor(0);
    doc.setFillColor(135, 206, 250);
    doc.rect(20, 220, 170, 5, "F");
    doc.setFont("bold 15px arial, sans-serif")
    doc.text('Co-Curricular Achievements and Activities', 22, 224);
    var strArr = doc.splitTextToSize(activities, 170)
    doc.text(22, 230, strArr);

    //projects
    var Projects = $("#Projects").val();
    doc.setDrawColor(0);
    doc.setFillColor(135, 206, 250);
    doc.rect(20, 250, 170, 5, "F");
    doc.setFont("bold 15px arial, sans-serif")
    doc.text('Projects', 22, 254);
    var strArr = doc.splitTextToSize(Projects, 170)
    doc.text(22, 260, strArr);

    doc.save(`${fullName}Resume.pdf`);


}

$(document).ready(function () {
    var next = 1;
    $(".add-more").click(function (e) {
        e.preventDefault();
        var addto = "#Certification" + next;
        var addRemove = "#Certification" + (next);
        next = next + 1;
        var newIn = '<textarea autocomplete="off" class="input form-control" id="Certification' + next + '" name="Certification' + next + '" type="text"></textarea>';
        var newInput = $(newIn);
        var removeBtn = '<button id="remove' + (next - 1) + '" class="btn btn-danger remove-me" >-</button></div><div id="Certification">';
        var removeButton = $(removeBtn);
        $(addto).after(newInput);
        $(addRemove).after(removeButton);
        $("#Certification" + next).attr('data-source', $(addto).attr('data-source'));
        $("#count").val(next);

        $('.remove-me').click(function (e) {
            e.preventDefault();
            var fieldNum = this.id.charAt(this.id.length - 1);
            var fieldID = "#Certification" + fieldNum;
            $(this).remove();
            $(fieldID).remove();
        });
    });
});



