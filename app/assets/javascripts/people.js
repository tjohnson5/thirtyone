function updateNewPersonButton(input) {
    var value = input.value;
    var add_button = $('#newperson');
    if (value != "") {
        add_button.removeClass('hide');
        add_button.addClass('button');
        add_button.val('+ Add ' + value);
    } else {
        add_button.addClass('hide');
        add_button.removeClass('button');
        add_button.html('');
    }
}

function updatePersonSearch(input) {
    updateNewPersonButton(input);
    var data = {ajax: true}

    if (input.value.length > 0) {
        var search_key_array = input.value.split(" ");
        var search_keys = JSON.stringify(search_key_array);
        data['search'] = search_keys;
    }

    var request = $.ajax({
        url: "/people/search",
        type: "GET",
        data: data,
        dataType: "html"
    });

    request.done(function (html) {
        $("#results").html(html)
    });

    request.fail(function (jqXHR, textStatus) {
        alert("Search update failed: " + textStatus);
    });
}

function editPerson(button) {
    //alert("Edit Person engaged.");

    var li = $(button).closest("li");
    var editting_div = $(li).find(".editting_div");
    editting_div.show();
    var edit_button = $(li).find(".edit_button");
    edit_button.hide();
    var raw1 = $(li).find(".raw1");
    raw1.hide();
    var raw2 = $(li).find(".raw2");
    raw2.hide();
    var edit_fields1 = $(li).find(".edit_fields1");
    edit_fields1.show();
    var edit_fields2 = $(li).find(".edit_fields2");
    edit_fields2.show();
}

function savePerson(button) {
    alert("You clicked the Save button.  Conglatumations!")
}

function cancelEdit(button) {
    //alert("Cancel Button engaged.");

    var li = $(button).closest("li");
    var editting_div = $(li).find(".editting_div");
    editting_div.hide();
    var edit_button = $(li).find(".edit_button");
    edit_button.show();
    var raw1 = $(li).find(".raw1");
    raw1.show();
    var raw2 = $(li).find(".raw2");
    raw2.show();
    var edit_fields1 = $(li).find(".edit_fields1");
    edit_fields1.hide();
    var edit_fields2 = $(li).find(".edit_fields2");
    edit_fields2.hide();
}