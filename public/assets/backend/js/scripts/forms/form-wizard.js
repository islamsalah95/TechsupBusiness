$(function () {
  'use strict';
  var bsStepper = document.querySelectorAll('.bs-stepper'),
    select = $('.select2'),
    horizontalWizard = document.querySelector('.horizontal-wizard-example'),
    verticalWizard = document.querySelector('.vertical-wizard-example'),
    modernWizard = document.querySelector('.modern-wizard-example'),
    modernVerticalWizard = document.querySelector('.modern-vertical-wizard-example');

  // Adds crossed class
  if (typeof bsStepper !== undefined && bsStepper !== null) {
    for (var el = 0; el < bsStepper.length; ++el) {
      bsStepper[el].addEventListener('show.bs-stepper', function (event) {
        var index = event.detail.indexStep;
        var numberOfSteps = $(event.target).find('.step').length - 1;
        var line = $(event.target).find('.step');

        // The first for loop is for increasing the steps,
        // the second is for turning them off when going back
        // and the third with the if statement because the last line
        // can't seem to turn off when I press the first item. ¯\_(ツ)_/¯

        for (var i = 0; i < index; i++) {
          line[i].classList.add('crossed');

          for (var j = index; j < numberOfSteps; j++) {
            line[j].classList.remove('crossed');
          }
        }
        if (event.detail.to == 0) {
          for (var k = index; k < numberOfSteps; k++) {
            line[k].classList.remove('crossed');
          }
          line[0].classList.remove('crossed');
        }
      });
    }
  }

      // // select2
      select.each(function () {
        var $this = $(this);
        $this.wrap('<div class="position-relative"></div>');
        $this.select2({
          placeholder: 'Select value',
          dropdownParent: $this.parent()
        });
      });


  // Horizontal Wizard
  // --------------------------------------------------------------------
  if (typeof horizontalWizard !== undefined && horizontalWizard !== null) {
    var numberedStepper = new Stepper(horizontalWizard),
      $form = $(horizontalWizard).find('.bs-stepper-content form');
      $.validator.setDefaults({ignore: ":hidden:not(#tags)"});

      $form.each(function () {
      var $this = $(this);

      $this.validate({
        rules: {
          sku: {
            required: true
          },
          'name[]': {
            required: true,
          },
          'tags[]': {
            required: true,
          },
          category: {
            required: true
          },
          brand: {
            required: true
          },
          landmark: {
            required: true
          },
          country: {
            required: true
          },
          language: {
            required: true
          },
          twitter: {
            required: true,
            url: true
          },
          facebook: {
            required: true,
            url: true
          },
          google: {
            required: true,
            url: true
          },
          linkedin: {
            required: true,
            url: true
          }
        }
      });
    });

    $(horizontalWizard)
      .find('.btn-next')
      .each(function () {
        $(this).on('click', function (e) {
          var isValid = $(this).parent().siblings('form').valid();
          if (isValid) {
              numberedStepper.next();
          } else {
              e.preventDefault();
          }
        });
      });

    $(horizontalWizard)
      .find('.btn-prev')
      .on('click', function () {
          numberedStepper.previous();
      });

    $(horizontalWizard)
      .find('.btn-submit')
      .on('click', function () {
        var isValid = $(this).parent().siblings('.bs-stepper-content form').valid();
        if (isValid) {
            $('.bs-stepper-content form input').each(function (index,item){
                if (item.hasAttribute('name')){
                    let newItem = $(item).clone()
                    newItem.appendTo('#mainForm')
                }
            });
            $('.editor').each(function (index,item){
                let newItem = $('<textarea>').attr({
                    'name': $(item).parent().data('name')
                });
                newItem.html($(item).children().first().html());
                $('#mainForm').append(newItem)
            });
            $('.bs-stepper-content form select').each(function (index,item){
                if (item.hasAttribute('name')){
                    const selectedOptions = $(item).select2("data");
                    let newItem = $('<select>').attr({
                        'name': $(item).attr('name')
                    });
                    const selectedTexts = selectedOptions.map(function(option) {
                        console.log(option)
                        let newOption = $('<option>').attr({
                            selected: true
                        }).val(option.id)
                        newItem.append(newOption)
                    });
                    newItem.appendTo('#mainForm')
                }
            });
            $('#mainForm').submit();
        }
      });
  }

  // Vertical Wizard
  // --------------------------------------------------------------------
  if (typeof verticalWizard !== undefined && verticalWizard !== null) {
    var verticalStepper = new Stepper(verticalWizard, {
      linear: false
    });
    $(verticalWizard)
      .find('.btn-next')
      .on('click', function () {
        verticalStepper.next();
      });
    $(verticalWizard)
      .find('.btn-prev')
      .on('click', function () {
        verticalStepper.previous();
      });

    $(verticalWizard)
      .find('.btn-submit')
      .on('click', function () {
        alert('Submitted..!!');
      });
  }

  // Modern Wizard
  // --------------------------------------------------------------------
  if (typeof modernWizard !== undefined && modernWizard !== null) {
    var modernStepper = new Stepper(modernWizard, {
      linear: false
    });
    $(modernWizard)
      .find('.btn-next')
      .on('click', function () {
        modernStepper.next();
      });
    $(modernWizard)
      .find('.btn-prev')
      .on('click', function () {
        modernStepper.previous();
      });

    $(modernWizard)
      .find('.btn-submit')
      .on('click', function () {
        alert('Submitted..!!');
      });
  }

  // Modern Vertical Wizard
  // --------------------------------------------------------------------
  if (typeof modernVerticalWizard !== undefined && modernVerticalWizard !== null) {
    var modernVerticalStepper = new Stepper(modernVerticalWizard, {
      linear: false
    });
    // $(modernVerticalWizard)
    //   .find('.btn-next')
      // .on('click', function () {
        // modernVerticalStepper.next();
      // });
    $(modernVerticalWizard)
      .find('.btn-prev')
      .on('click', function () {
        modernVerticalStepper.previous();
      });

    $(modernVerticalWizard)
      .find('.btn-submit')
      .on('click', function () {
        alert('Submitted..!!');
      });
  }
});
