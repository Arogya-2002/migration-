$(document).ready(function() {
    $('#insert-form').submit(function(event) {
      event.preventDefault();
  
      const name = $('#name').val();
      const email = $('#email').val();
  
      // Replace 'your-table-name' with the name of your Supabase table
      supabase.from('your-table-name').insert({ name, email })
        .then(response => {
          console.log('Data inserted successfully:', response);
          // Clear the form fields
          $('#name').val('');
          $('#email').val('');
        })
        .catch(error => {
          console.error('Error inserting data:', error);
        });
    });
  });
  