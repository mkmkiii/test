//問1
for (var star1 = 1; star1 <= 5; star1++) {
    document.write("★");
}
document.write("<br>");
document.write("<br>");

//問2
for (var star2 = 1; star2 <= 2; star2++) {
    for (var star3 = 1; star3 <= 3; star3++) {
        document.write("★");
    }
    document.write("<br>");
}
document.write("<br>");

//問3
for (var star4 = 1; star4 <= 2; star4++) {
    for (var star5 = 1; star5 <= 5; star5++) {
        document.write("☆");
    }
    document.write("<br>");
}
document.write("<br>");

//問4
for (var star6 = 1; star6 <= 4; star6++) {
    for (var star7 = 1; star7 <= 5; star7++) {
        document.write("★");
    }
    document.write("<br>");
}
document.write("<br>");

//問5
for (var star8 = 1; star8 <= 4; star8++) {
    for (var star9 = 1; star9 <= 3; star9++) {
        document.write("★");
    }
    document.write("<br>");
}
document.write("<br>");

//問6
for (var star10 = 1; star10 < 4; star10++) {
    for (var star11 = 1; star11 <= 3; star11++) {
        if (star11 % 2 == 0) {
            document.write("☆");
        } else {
            document.write("★");
        }
    }
    document.write("<br>");
}
document.write("<br>");

//問7
for (var star12 = 1; star12 < 5; star12++) {
    for (var star13 = 1; star13 <= 5; star13++) {
        if (star13 % 2 == 0) {
            document.write("☆");
        } else {
            document.write("★");
        }
    }
    document.write("<br>");
}
document.write("<br>");

//問8
for (var star14 = 1; star14 < 6; star14++) {
    for (var star15 = 1; star15 <= star14; star15++) {
        document.write("★");
    }
    document.write("<br>");
}
document.write("<br>");
