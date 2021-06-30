$(document).ready(function(){

	$("#buscar").click(function(){
		var nome = $("#nome").val();
		var photo = 'https://avatars.githubusercontent.com/u/';
		var user_id = '';

		if(nome == '') {
			alert("O nome não pode ficar em Branco!");
		} else {
			$.get('https://api.github.com/users/' + nome, function(data, status){
				console.log(data.login);
				user_id = data.id;
				$("#login").text(data.login);
				$("#username").text(data.name);
				$("#photo").attr({"src": photo + user_id});
				$("#following").text(data.following);
				$("#followers").text(data.followers);

				$.get('https://api.github.com/users/'+ nome +'/repos', function(data){
					$.each(data, function(k,v){
						console.log(k,v)
						$( "#repositorios" ).append('<div class="border rounded mb-3" > <p>Projeto: '+ v.name +'</p> <p>Link do repositorio <a href="'+v.html_url+'">'+ v.name +'</a></p> </div>')
					})
				});
			}).fail(function(){ alert("usuario não encontrado!")});
		}
	});
});

