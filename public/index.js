


function drawProjects(projects) {
	projects.sort(sortByAttribute("name"));
	$("#projects").html("");
	for (var p=0;p<projects.length;p++) {
		var project = $("<div>").addClass("project");
		project.append($("<h4>").html(projects[p].name));
		project.append($("<a>").attr("href", projects[p].url)
			.attr("target", "_blank").html(projects[p].url));
		project.append($("<p>").html(projects[p].description));
		$("#projects").append(project);
	}	
}


function queryProjectsForSkill(skill) {
	$.get("/graphql?query={projectsBySkill(skill:\""+skill+"\"),{name,description,url}}", (x) => {
		drawProjects(x.data.projectsBySkill);
	});
}

function sortByAttribute(att, a, b) {
	return function(a, b) {
		return a[att].localeCompare(b[att]);
	}
}

$(window).on("load", () => {
	console.log("test");
	var o = $("<option>").attr("value","").html("(Select a skill.)");
	$("#skills").append(o);	
	$.get("/graphql?query={skills,{id,name}}", (x) => {
		var skills = x.data.skills;
		skills.sort(sortByAttribute("name"));
		for (var s=0;s<skills.length;s++) {
			var o = $("<option>").attr("value",skills[s].id).html(skills[s].name);
			$("#skills").append(o);
		}
	});
	$("#skills").on("change", function() {
		queryProjectsForSkill(this.value);
	});
	$.get("/graphql?query={projects,{name,description,url}}", (x) => {
		drawProjects(x.data.projects);
	});

})