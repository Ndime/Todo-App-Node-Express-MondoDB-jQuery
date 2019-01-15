/* global jQuery */

jQuery(document).ready(function() {
    //Fetchn All
    jQuery.getJSON("/api/todos/")
        .then(addTodos)


    //Add New item
    jQuery("input#new_item").keypress(function(e) {
        if (e.which === 13) {
            createTodo();
        }
    });

    //Delete Item
    // console.log(jQuery(this).parent().data("id"));

    jQuery(".list_group").on("click", "span.delete_item", function() {
        // console.log(jQuery(this).parent().data("id"));
        console.log("Clickedddddd");

        var item_Tobe_Deleted = jQuery(this).parent();
        deleteTodo(item_Tobe_Deleted);
    });

    //Update Item
    jQuery(".list_group").on("click", "li.list_item", function(e) {
        // console.log(jQuery(this).data("id"));
        console.log(jQuery(this));
        var item_Tobe_Updated = jQuery(this);
        updateTodo(item_Tobe_Updated);
    });

}); // End document ready



function addTodos(res) {

    var all_list = res;
    all_list.forEach(function(current, index, arr) {

        var elem = jQuery('<li class="list_item">' + arr[index].name + '<span class="delete_item fa fa-trash"></span></li>');

        elem.data("id", arr[index]._id);

        if (arr[index].completed === true) {
            elem.addClass("completedItem");
        }

        jQuery("ul.list_group").append(elem);

    })

}

function createTodo() {
    var inputvalue = jQuery("#new_item").val();

    if (inputvalue.length === undefined || inputvalue.length === 0) {
        console.log("No Value Inpur Set");
    }
    else {

        jQuery.ajax({
                url: "/api/todos",
                method: "POST",
                data: { name: inputvalue }
            })
            .then(function(res) {
                console.log(res);
                var elem2 = jQuery('<li class="list_item">' + res.name + '<span class="delete_item fa fa-trash"></span></li>');

                elem2.data("id", res._id);

                jQuery("ul.list_group").append(elem2);
                jQuery("#new_item").val("");

            })
            .catch(function(err) {
                console.log("Something Happended: " + err);
            })
    }
}

function deleteTodo(todo) {
    jQuery.ajax({
            url: "/api/todos/" + todo.data("id") + "/",
            method: "DELETE",
        })
        .then(function(res) {
            console.log(res);
            todo.remove();

        })
        .catch(function() {
            console.log("Something Happended");
        })
}

function updateTodo(todo) {
    if (todo.hasClass("completedItem")) {

        jQuery.ajax({
                url: "/api/todos/" + todo.data("id") + "/",
                method: "PUT",
                data: { completed: false }
            })
            .then(function(res) {
                console.log(res);

                todo.removeClass("completedItem");

            })
            .catch(function() {
                console.log("Something Happended");
            })

    }
    else {
        jQuery.ajax({
                url: "/api/todos/" + todo.data("id") + "/",
                method: "PUT",
                data: { completed: true }
            })
            .then(function(res) {
                console.log(res);

                todo.addClass("completedItem");

            })
            .catch(function() {
                console.log("Something Happended");
            })
    }
}
