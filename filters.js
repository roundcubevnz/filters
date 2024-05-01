/**
 * Filters
 *
 * Plugin that adds a new tab to the settings section to create client-side e-mail filtering.
 *
 * @version 2.3.0
 * @author Roberto Zarrelli <zarrelli@unimol.it>
 * @developer Artur Petrov <artur@phpchain.ru>
 */


if (window.rcmail) {
  rcmail.addEventListener('init', function(evt) {
    // register command
    rcmail.register_command('plugin.filters-delete', function(){ rcmail.goto_url('plugin.filters-delete') }, true);    
    rcmail.register_command('plugin.filters-save', function(){ 
      var input_searchstring = rcube_find_object('_searchstring');      
      if (input_searchstring && input_searchstring.value=='') {
          alert(rcmail.gettext('nosearchstring','filters'));          
          input_searchstring.focus();
      }
      else
        rcmail.gui_objects.filtersform.submit();
    }, true);
  })
}







