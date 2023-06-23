// Ctrl C + V > index.html
cl("Welcome to the Bridging.App");

function cl(tx){console.log(tx);}

// Change 1st & 2nd Cols to Links in table
function namesToLinks(px) {
    let table, tr, i;
    table = document.getElementById(px);
    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
        var makeLink = table.rows[i].cells[1].innerHTML;
        var makeLink2 = table.rows[i].cells[0].innerHTML;
        var web = makeLink.link(table.rows[i].cells[1].innerHTML);
        var web2 = makeLink2.link(table.rows[i].cells[1].innerHTML);
        table.rows[i].cells[0].innerHTML = web2;
        table.rows[i].cells[1].innerHTML = web;
        }
    }


function pLF() {
cl("Page Loaded");
	if(document.getElementById("iDT")){
		cl("Making names Links...");
		namesToLinks("iDT");
		cl("Done with links");
	} else {
	    cl("No iDT (initialDataTable) exists");
	}
cl("Interface on Page Load Done");
}

// -------------------- Index End -------------------- 

function appInterface() {
cl("Doing App Interface");
}

// -------------------- End of file -------------------- 
cl("Version:" + varVer);
cl("Timestamp: " + BATSV);
cl("Reached End of app-interface.js");