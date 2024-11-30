async function callApi(method = 'get', $url, $params = undefined, headers = {}){


  let configurations = {
    method: method.toUpperCase(),
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      "X-CSRF-TOKEN": document.querySelector("meta[name='csrf']").getAttribute("content"),
      "Content-Type": "application/json",
      ...headers},
  };

  if (method.toUpperCase() !== 'GET'){
    $params._method = method;
    configurations.body = JSON.stringify($params);
  }

  let response =  await fetch($url, configurations);

  return response.json();
}


function notify(message = '', duration = 9000, position = 'right', gravity = 'bottom') {
  Toastify({
    duration: duration,
    gravity: gravity,//top
    position: position,//left
    text: message,
    className: "info",
    style: {
      // background: "linear-gradient(to right, #00b09b, #96c93d)",
      background: "linear-gradient(to right, rgb(206 102 27), #ba1718)",
    }

  }).showToast();
}


function success(message) {
  var directionIsRtl = "rtl" === $("html").attr("data-textdirection");
  toastr.success(message, directionIsRtl ? 'نجحت العملية' : 'Success', { closeButton: 0, tapToDismiss: !1, progressBar: !0, rtl: directionIsRtl });
}

function error(message) {
  var directionIsRtl = "rtl" === $("html").attr("data-textdirection");
  toastr.error(message, directionIsRtl ? 'فشلت العملية' : 'Error', { closeButton: 0, tapToDismiss: !1, progressBar: !0, rtl: directionIsRtl });
}

function openEditModel(locale, group, key, value)
{
  $('#language').val(locale).change();
  $('#group').val(group).change();
  $('#translationKey').val(key);
  $('#translationValue').val(value);
  $('#addNewTranslation').modal('show')
}

function deleteKey(locale, group, key, action)
{
  let form = createDeleteForm(action);
  $(form).append(`<input  type="hidden" name="locale" value="${locale}">`);
  $(form).append(`<input  type="hidden" name="group" value="${group}">`);
  $(form).append(`<input  type="hidden" name="key" value="${key}">`);
  form.submit();
}


function createDeleteForm(action) {
  let form = document.createElement('form');
  form.method = 'post';
  form.action = action;
  form.setAttribute('id', 'deleteForm');
  let token = document.querySelector("meta[name='csrf']").getAttribute("content");
  $(form).append(`<input  type="hidden" name="_token" value="${token}">`);
  $(form).append(`<input  type="hidden" name="_method" value="delete">`);
  document.body.append(form);
  return form;
}

$('#translationKey').on('keyup', function () {
  $(this).val($(this).val().toString().toLowerCase())
});


function renderTextAreaEditor(selector) {
    let editor = new Quill(selector, {
        bounds: selector,
        modules: {
            formula: true,
            syntax: true,
            toolbar: [
                [
                    {
                        font: []
                    },
                    {
                        size: []
                    }
                ],
                ['bold', 'italic', 'underline', 'strike'],
                [
                    {
                        color: []
                    },
                    {
                        background: []
                    }
                ],
                [
                    {
                        script: 'super'
                    },
                    {
                        script: 'sub'
                    }
                ],
                [
                    {
                        header: '1'
                    },
                    {
                        header: '2'
                    },
                    'blockquote',
                    'code-block'
                ],
                [
                    {
                        list: 'ordered'
                    },
                    {
                        list: 'bullet'
                    },
                    {
                        indent: '-1'
                    },
                    {
                        indent: '+1'
                    }
                ],
                [
                    {direction:'rtl'},
                    {
                        align: []
                    }
                ],
                ['link', 'image', 'video', 'formula'],
                ['clean']
            ],
        },
        theme: 'snow',
    });

    editor.format('direction', $("html").attr("data-textdirection"));
    editor.format('align', 'left');
}
