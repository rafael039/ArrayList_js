// Aluno: Rafael Silveira de Andrade

function ArrayList() {
	
	var arraylist = new Array();
	
	this.add = function(index,elemento){
		if(typeof arguments[1] == 'undefined'){
			elemento = index;
			index = arraylist.length;
		}
		lista.splice(index, 0, JSON.stringify(elemento));
	}
	
	this.clear = function(){
		
		arraylist.splice(0,arraylist.length);
		
		if (ArrayList.length == 0)
			return true;
		else 
			return false;
	}
	
	this.clone = function(){
		return this.arraylist.slice();
	}
	
	this.contains = function(elemento){
		var result = arraylist.indexOf(JSON.stringify(elemento));
		return (result == -1) ? false : true;
	}
	
	this.get = function(posicao){
		if ((posicao > -1) && (posicao < this.arraylist.length))
			return this.arraylist[posicao];
		return "Nso Encontrado";
	}
	
	this.indexOf = function(elemento){
		return this.arraylist.indexOf(elemento);
	}

	this.isEmpty = function(elemento) {
		while (arraylist.length > 0) {
			arraylist.pop();
		}
	}

	this.lastIndexOf = function(elemento){
	
		var posicao = -1;	

		this.arraylist.forEach(function (item, index, array){
			if (item == elemento)
				posicao = index; 
		});
	
		return posicao;
	}	
	
	this.remove = function(elemento){

		if (typeof(elemento) == "number")
			this.arraylist.splice(elemento, 1);
		else {

			var posicao = this.arraylist.indexOf(elemento);
			this.arraylist.splice(posicao, 1);			
		}
	}

	this.set = function(posicao, elemento){
		var auxiliar = new Array();		

		this.arraylist.forEach(function (item, indice, array){
			if (indice != posicao)
				auxiliar.push(item);
			else {
				auxiliar.push(elemento);
			}
		});

		this.arraylist = auxiliar.slice();
	}

	this.size = function(){
		return this.arraylist.length;
	}	
}


