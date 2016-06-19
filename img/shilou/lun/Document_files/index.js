$(function(){
  var localdata = localStorage.todos;
  var todos = localdata ?  $.parseJSON(localdata):[];
  if(!todos.length){
    $.get({
         url:'php/getTodo.php',
         dataType:'json'
    }).done(function(data){
        todos=data;
        render();
    })
  }
  var state = localStorage.state || 'all';

  var saveData = function () {
       localStorage.todos = JSON.stringify(todos);
  }
  var render = function(){
    var ftodos = $.grep(todos,function(v){
        if( state === 'all'){
          return v;
        }else if(state === 'active'){
          return !v.isDone;
        }else if( state === 'completed'){
          return v.isDone;
        }
    })
    $('#todo-list').empty().append(function(){
        return $.map(ftodos, function(v){
            var tmp = v.isDone==='1' ? 'checked':'';
            return '<li class="'+(v.isDone==='1'?'completed':'')+'" data-id="'+v.id+'"><div class="view"> <input '+tmp+' type="checkbox" class="toggle"> <label for="">'+v.content+'</label> <button class="destroy"></button> </div> <input class="edit" type="text" value="'+v.content+'"> </li>';
        })
    });
    $('#footer .selected').removeClass('selected');
    $('#footer a[data-role='+state+']').addClass('selected');
    $('#todo-count strong').text(ftodos.length);
  };
  render();

  var addTodo = function (e) {
    var zhi = $.trim( $(this).val() );
    if( e.keyCode === 13 && zhi !== ''){
      var todo = {
        id: todos.length ? (Math.max.apply(null,$.map(todos,function(v){
          return v.id;
        })) + 1) : '1001',
        content: zhi,
        isDone:0
      }
      $.get({
        url:'php/addTodo.php',
        data:{id:todos.length ? (Math.max.apply(null,$.map(todos,function(v){
          return v.id;
        })) + 1) : '1001',content:zhi,isDone:0}
      }).done(function(data){
        return data;
      }).fail(function(data){
        return data
      })
      $(this).val('');
      todos.push(todo);
      saveData();
      render();
    }
  }
  $('#new-todo').on('keyup',addTodo);

  var deleteTodo = function () {
    var id = parseInt($(this).closest('li').attr('data-id'));
    todos = $.grep(todos,function(v){
        return v.id !== id;
    })
    saveData();
    render();
  }
  $('#todo-list').on('click','.destroy',deleteTodo);

  var gaizhuangtai = function () {
      var state = $(this).prop('checked');
      var id = parseInt( $(this).closest('li').attr('data-id'));
      $.each(todos,function(i,v){
          if( v.id === id){
            v.isDone = state;
          }
      })
      saveData();
      $.get({
        url:'php/deleteTodo.php',
        data:{id:id}
      }).done(function(data){
        return data;
      }).fail(function(data){
        return data;
      })

      render();
  };
  $('#todo-list').on('click','.toggle',gaizhuangtai);

  var xiugaineirong = function(){
    $(this).addClass('editing');
    $(this).find('.edit').focus();
  }
  $('#todo-list').on('dblclick','li',xiugaineirong);

  $('#todo-list').on('focusout','.edit',function(){
    $(this).closest('li').removeClass('editing');
    var id = parseInt($(this).closest('li').attr('data-id'));
    var self = this;
    $.each(todos,function(i,v){
      if( v.id === id){
          v.content = $(self).val();
      }
    })
    saveData();
    render();
  })

  $('#filters a').on('click',function(){
    $('#filters .selected').removeClass('selected');
    $(this).addClass('selected');
    state  = localStorage.state = $(this).attr('data-role');
    render();
    return false;
  })

})




