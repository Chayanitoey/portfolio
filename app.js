   const toolTipBTN = document.querySelectorAll("tooltip-icon");
        
        [].forEach.call(toolTipBTN, (e) => {
        	e.addEventListener("click", tipClick, false);
        });

    function tipClick() {
    	[].forEach.call(toolTipBTN, (e) => {
    		if (e !== this) e.classList.remove("active");
    	});
    	this.classList.toggle("active");
    }