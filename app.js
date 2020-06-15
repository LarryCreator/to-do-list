$(".user-input").submit(function (event) {
  event.preventDefault();
});
function hide_parent(self) {
  self.closest(".todo-item").hide();
}
function del(self) {
  if (self.find("del").length == 0) {
    const html = self.html();
    console.log(html);
    self.html("<del>" + html + "</del>");
  } else {
    self.html(self.html().replace("<del>", "").replace("</del>", ""));
  }
}
$(".submit").click(function () {
  const user_input = $(".text");
  let clone = $("template").contents().clone();
  clone.html(
    user_input.val() +
      '<span class="close" onclick="hide_parent($(this))">x</span>'
  );
  clone.appendTo($(".items"));
  user_input.val("");
});
