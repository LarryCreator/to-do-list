$(".user-input").submit(function (event) {
  //it prevents the form from submitting
  event.preventDefault();
});
function hide_parent(self) {
  //it "closes" itself and it's parent when clicked
  self.closest(".todo-item").hide();
}
function del(self) {
  //when a list item is clicked, it gets the same effect that style text-decoration
  //line through does, but with the tag <del>
  if (self.find("del").length == 0) {
    const html = self.html();
    console.log(html);
    self.html("<del>" + html + "</del>");
  } else {
    self.html(self.html().replace("<del>", "").replace("</del>", ""));
  }
}
$(".submit").click(function () {
  //it adds a new item to the list when clicked
  const user_input = $(".text");
  let clone = $("template").contents().clone();
  clone.html(
    user_input.val() +
      '<span class="close" onclick="hide_parent($(this))">x</span>'
  );
  clone.appendTo($(".items"));
  user_input.val("");
});
