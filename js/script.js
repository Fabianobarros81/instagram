var i = 0;
var imag = ['img/mob_fundo01.jpg','img/mob_fundo02.jpg','img/mob_fundo03.jpg','img/mob_fundo04.jpg','img/mob_fundo05.jpg'];

function img01 (){

    // var w = 0;
    // while (w > 0) {
       
    	if ( i < imag.length) {
	
    		document.getElementById("trocarimg").src=imag[i];
            i++;
	    }else {
		    i = 0;
		    document.getElementById("trocarimg").src=imag[i];
            i++;
        }
        setTimeout(img01, 10000);
        //w++;
    // };
}
setTimeout(img01, 0);
