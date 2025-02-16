let ctr = 1;
		function deleteTodo(index){
			const element = document.getElementById("todo-"+index);
			element.parentNode.removeChild(element);
		}

		function addTodo(){
		const inputel = document.querySelector("input");
		const value = inputel.value;
		
		

		const newDivEl = document.createElement("div");
		newDivEl.setAttribute("id","todo-"+ctr);
		
		newDivEl.innerHTML = "<div>" + value + '</div><button onclick = "deleteTodo(' + ctr + ')">Delete</button>';
		document.querySelector("body").appendChild(newDivEl);
		ctr = ctr+1;}