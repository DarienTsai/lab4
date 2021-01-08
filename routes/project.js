exports.viewProject = function(req, res){
  var name = req.params.name;
  console.log("name: " + name);
  res.render("project", {
    "projectName": name
  });
}