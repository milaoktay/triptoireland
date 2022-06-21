jQuery(function($) {

      // Handle form submit.
      // This won't be necessary unless you want some custom behavior.
      // Here we just cancel the form submission and just display a message for demonstration
      $('#uploadForm').on('submit', function(e) {
        console.log('The form is submitting; preventing event for demonstration');
        e.preventDefault();
      });
    
      // Handle dialog confirm button click.
      $('#confirmUpload').on('click', function(e) {
        // Submit the form and hide the dialog when confirm clicked
        $('#modal1').modal('hide');
        $('#uploadForm').submit();
      });
      
      // When the dialog is about to show, check if the user has selected a file.
      // If they have, update dialog filename element and enabled the confirm button,
      // else message user that there is no file and disable the confirm button
      $('#modal1').on('show.bs.modal', function() {   
        let files = document.getElementById('documentFile').files;
        let fileSelected = files && files[0];
        
        if (fileSelected) {
          $('#modal1 .filename').text(fileSelected.name);
          $('#confirmUpload').prop('disabled', false);
        } else {
          $('#modal1 .filename').text('No file selected');
          $('#confirmUpload').prop('disabled', true);
        }
      });
}