// window.addEventListener("load", () => {
  const form = document.querySelector("#new_todo_form");
  const input = document.querySelector("#create_todo_input");
  const list_el = document.querySelector("#tasks");
  $(input).focus();

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;

    if (!task) {
      iziToast.error({
        title: 'Error',
        message: 'please fill out the task',
        titleSize: '31px',
        messageSize: '17px',
        position: 'topRight',
        balloon: 'true',
    });
      return;
    }

    var task_el = $('<div class="task"></div>');
    $(list_el).append(task_el);

    var task_content_el = $('<div class="content"></div>');
    $(task_el).append(task_content_el);

    var task_input_el = $(
      `<input type="text" class="text" value="${task}" readonly />`
    );
    $(task_content_el).append(task_input_el);

    var task_action_el = $('<div class="action"></div>');
    $(task_el).append(task_action_el);

    var task_edit_el = $('<button class="edit"></button>');
    $(task_action_el).append(task_edit_el);
    var task_edit_icon_el = $('<i class="mdi mdi-square-edit-outline"></i>');
    $(task_edit_el).append(task_edit_icon_el);

    var task_delete_el = $('<button class="delete"></button>');
    $(task_action_el).append(task_delete_el);
    var task_delete_icon_el = $('<i class="mdi mdi-close-box-multiple-outline"></i>');
    $(task_delete_el).append(task_delete_icon_el);

    input.value = "";

    $(task_edit_el).on("click", function () {
    var ERTYU = ($(task_edit_icon_el).attr("class"));
    
      if (ERTYU == "mdi mdi-square-edit-outline") {
        $(task_input_el).removeAttr("readonly");

        $(task_edit_icon_el).removeClass("mdi mdi-square-edit-outline");

        $(task_edit_icon_el).toggleClass("mdi mdi-sticker-check-outline");

        $(task_input_el).focus();

        

      } else{
        $(task_input_el).attr("readonly", true);

        $(task_edit_icon_el).removeClass("mdi mdi-sticker-check-outline");

        $(task_edit_icon_el).toggleClass("mdi mdi-square-edit-outline");

            if($(task_input_el).val() == ""){
                $(task_el).remove();
            }

      }

     
    });

    $(task_delete_el).on("click", function () {
        $(task_el).remove();

    });

  });
// });
