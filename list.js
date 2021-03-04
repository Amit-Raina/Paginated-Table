const page_Display = document.getElementById("display_page");


const List = function(element, listItems){

    this.start = 0;
    this.itWas = 10;
	this.pageSize = 10;
    this.pageCount = Math.ceil(listItems.length/this.pageSize);
	this.currentPage = 1;
	this.render = function(){
        console.log(this.start,this.itWas,this.pageSize,this.currentPage);
        page_Display.innerText = this.currentPage;
        element.innerHTML = `<tr>
            <th style="width: 100px;">Roll No</th>
            <th style="width: 200px;">Name</th>
            <th style="width: 200px;">Email Id</th>
        </tr>`;
        for(let i=this.start;i<this.pageSize && i <= 40 ;i++){
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

	this.navigateFirst = function(){
        this.start = 0;
        this.pageSize = this.itWas;
        this.currentPage = 1;
        this.render();

    };

	this.navigateLast = function(){

        if(this.pageSize == 10){
            this.start = 30;
            this.pageSize = 40;
            this.currentPage = 4;
            this.itWas = 10;
            this.render();
            
        }
        else if (this.pageSize == 20){
            this.start = 20;
            this.pageSize = 40;
            this.currentPage  = 2;
            this.itWas = 20;
            this.render();
            
        }

    };
	
    this.navigatePrev = function(){

        // try{
            if(this.currentPage == 1){
                alert("First Page");
                return;
            }

            if(this.currentPage > 1)
            this.currentPage = this.currentPage - 1;
            
            if(this.itWas == 10){
                this.start = this.start - 10;
                this.pageSize = this.pageSize - 10;
            }
            else if(this.itWas == 20){

                this.start = this.start - 20;
                this.pageSize = this.pageSize - 20;
            }
            
            this.render();
        //}
        // catch(e){
        //     console.log(e.toString());
        //     alert("Accessing values outside the table");
        //     location.reload();
        // }

    };
	
    this.navigateNext = function(){

        // try{
            if(this.currentPage == this.pageCount){
                alert("Last Page");
                return;
            }

            if(this.currentPage < 4)
            this.currentPage = this.currentPage + 1;
            else{
                
            }
            
    
            if(this.itWas == 10){
                this.start = this.start + 10;
                this.pageSize = this.pageSize + 10;
            }
            else if(this.itWas == 20){
            
                this.start = this.start + 20;
                this.pageSize = this.pageSize + 20;
                
            }
            
            this.render();
        //}
        // catch(e){
        //     console.log(e.toString());
        //     alert("Accessing values outside the table");
        //     location.reload();
        // }

    };

    this.pageSizeChange = function(page_size){

        page_size = parseInt(page_size);
        this.pageCount = Math.ceil(listItems.length/page_size);

        if(page_size == 20 && this.start == 30 && this.pageSize == 40){
            this.start = this.start - 10;
            this.currentPage  = 2;
            this.itWas = 20;
            this.render();
            
        }
        else if(page_size == 10 && this.start == 20 && this.pageSize == 40){
            this.start = this.start + 10;
            this.currentPage  = 4;
            this.itWas = 10;
            this.render();

        }
        else{
            this.pageSize = page_size;

            if(page_size == 10)
            this.itWas = 10;
            else if(page_size == 20)
            this.itWas = 20;
            
            this.render();
            
         }   
         

    };
};