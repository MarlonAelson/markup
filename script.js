var value  	= document.querySelector('#value');
var margin 	= document.querySelector("#margin");
var df 		= document.querySelector("#df");
var dv 		= document.querySelector("#dv");
var price  	= document.querySelector("#price");
var mk 		= document.querySelector('#mk');
var mb 		= document.querySelector('#mb');

function enableDisableInputs(){
	if( mb.checked == true ){
		value.disabled = false;
		margin.disabled = false;
		df.value = '';
		df.disabled = true;
		dv.value = '';
		dv.disabled = true;
	}
	if( mk.checked == true ){
		value.disabled = false;
		margin.disabled = false;
		df.disabled = false;
		dv.disabled = false;
	}
  }

function generatePrice()
{
	if(mk.checked){
 		sum = 100 / (100 - (parseFloat(margin.value) + parseFloat(dv.value) + parseFloat(df.value)));
		resultFinal = parseFloat(value.value) * sum;
 		price.value = resultFinal.toFixed(2);
	}
	if(mb.checked){
		sum = ((parseFloat(value.value) * parseFloat(margin.value)) / 100);
		resultFinal = parseFloat(value.value) + sum;
		price.value = resultFinal.toFixed(2);
	}
}

value.addEventListener("keyup", formatCoin); 
margin.addEventListener("keyup", formatCoin); 
df.addEventListener("keyup", formatCoin); 
dv.addEventListener("keyup", formatCoin); 

function formatCoin(e) {

    var v = e.target.value.replace(/\D/g,"");

    v = (v/100).toFixed(2) + "";

    v = v.replace(".", ",");

    v = v.replace(/(\d{3})(\d{3})(\d{3}),/g, "$1.$2.$3,");

    v = v.replace(/(\d{3})(\d{3}),/g, "$1.$2,");

    e.target.value = v;

}