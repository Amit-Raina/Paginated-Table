const page_Display = document.getElementById("display_page");



const List = function(element, listItems){
	// sample template
    this.start = 0;
	this.pageSize = 10;
	this.currentPage = 1;
	this.render = function(){
        page_Display.innerText = this.currentPage;
        element.innerHTML = `<tr>
            <th style="width: 100px;">Roll No</th>
            <th style="width: 200px;">Name</th>
            <th style="width: 200px;">Email Id</th>
        </tr>`;
        for(let i=start;i<this.pageSize;i++){
            const createRow = document.createElement("tr");

            const roll_No = document.createElement("td");
            roll_No.innerText = listItems[i]["rno"];
            const name = document.createElement("td");
            name.innerText =  listItems[i]["name"];
            const email = document.createElement("td");
            email.innerText = listItems[i]["email"];

            createRow.appendChild(roll_No);
            createRow.appendChild(name);
            createRow.appendChild(email);

            element.appendChild(createRow);
            
        }
                //Empty previous entries
	     //$(element).html('');
               //Code to push page data
               // Here goes your code
	};
	this.navigateFirst = function(){};
	this.navigateLast = function(){};
	this.navigatePrev = function(){};
	this.navigateNext = function(){};

    this.pageSizeChange = function(page_size){
        this.pageSize = page_size;
        this.render();
    };
};