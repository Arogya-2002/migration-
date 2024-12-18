document.getElementById('insertForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent form from submitting the default way

    // Collect Meme Details
    const image = document.getElementById('image').files[0];
    const image_size = document.getElementById('image_size').value.split(',');
    const release_year = document.getElementById('release_year').value;

    // Collect Movie Details
    const genre = [];
    document.querySelectorAll('input[name="genre"]:checked').forEach(checkbox => {
      genre.push(checkbox.value);
    });

    const movie_title = document.getElementById('movie_title').value;
    const director = document.getElementById('director').value;
    const movie_release_year = document.getElementById('movie_release_year').value;

    // Collect Actor Details
    const actors = [];
    const actorNames = document.querySelectorAll('.actor_name');
    actorNames.forEach((actor, index) => {
      const actorName = actor.value;
      const dob = document.getElementById(`actor_dob_${index}`).value;  // Added date of birth field
      const filmography = [];
      document.querySelectorAll(`input[name="actor_filmography_${index}"]:checked`).forEach(checkbox => {
        filmography.push(checkbox.value);
      });
      actors.push({ name: actorName, dob, filmography });
    });

    // Collect Dialog Data
    const dialogs = [];
    const dialogTexts = document.querySelectorAll('.dialog_text');
    dialogTexts.forEach((dialog, index) => {
      const text = dialog.value;
      const actor = document.getElementById(`dialog_actor_${index}`).value;
      dialogs.push({ text, actor });
    });

    // Collect Emotion Details
    const emotion_labels = [];
    const emotion_descriptions = [];
    const emotionElements = document.querySelectorAll('.emotion');
    emotionElements.forEach((emotion, index) => {
      const label = emotion.querySelector('.emotion_label').value;
      const description = emotion.querySelector('.emotion_description').value;
      emotion_labels.push(label);
      emotion_descriptions.push(description);
    });

    // Prepare the data to be sent to the API
    const data = {
      meme: {
        image_path: image, // Image will be uploaded
        image_size: {
          width: parseInt(image_size[0]),
          height: parseInt(image_size[1]),
        },
        release_year: parseInt(release_year),
      },
      movie: {
        genre: genre.join(", "),  // Convert genre array to string
        title: movie_title,
        director: director,
        release_year: parseInt(movie_release_year),
      },
      actors: actors,
      dialogs: dialogs,  // Added dialogs
      emotion: {
        label: emotion_labels.join(", "),  // Joining the labels into a string
        description: emotion_descriptions.join(", "),  // Joining the descriptions into a string
      },
    };

    try {
      // Step 1: Upload the image to Supabase Storage
      const formData = new FormData();
      formData.append('file', image);

      const uploadResponse = await fetch('https://your-project-url.supabase.co/storage/v1/object/public/meta-data/memes/', {
        method: 'POST',
        body: formData,
      });

      if (!uploadResponse.ok) {
        throw new Error('Error uploading the image');
      }

      // Step 2: Insert data into Supabase with the image URL
      const imageUrl = await uploadResponse.json();
      data.meme.image_path = imageUrl.data.Key;

      // Step 3: Insert data into the Supabase database
      const response = await fetch('https://your-project-url.supabase.co/functions/v1/your-function-name', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_SUPABASE_TOKEN',  // Add Authorization header here
        },
      });

      const result = await response.json();

      if (response.ok) {
        alert('Data inserted successfully!');
        document.getElementById('insertForm').reset();
      } else {
        alert('Error inserting data: ' + result.error);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting the form.');
    }
  });

// Function to add more actors dynamically
function addActor() {
    const actorContainer = document.getElementById('actorsContainer');
    const actorDiv = document.createElement('div');
    actorDiv.classList.add('actor');

    actorDiv.innerHTML = `
      <label for="actor_name">Actor Name:</label>
      <select class="actor_name" name="actor_name[]" required>
        <option value="Leonardo DiCaprio">Leonardo DiCaprio</option>
        <option value="Joseph Gordon-Levitt">Joseph Gordon-Levitt</option>
        <!-- Add more actors here -->
      </select><br><br>

      <label for="actor_dob">Date of Birth:</label>
      <input type="date" id="actor_dob_${actorContainer.children.length}" name="actor_dob[]" required><br><br>

      <label>Filmography:</label><br>
      <label><input type="checkbox" name="actor_filmography_${actorContainer.children.length}" value="Inception"> Inception</label><br>
      <label><input type="checkbox" name="actor_filmography_${actorContainer.children.length}" value="Titanic"> Titanic</label><br>
      <label><input type="checkbox" name="actor_filmography_${actorContainer.children.length}" value="The Revenant"> The Revenant</label><br>
      <!-- Add more filmography checkboxes as needed -->
      <br><br>

      <button type="button" class="deleteActor">Delete Actor</button><br><br>
    `;

    actorContainer.appendChild(actorDiv);

    // Add event listener for the Delete button
    const deleteButtons = actorDiv.querySelectorAll('.deleteActor');
    deleteButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        actorDiv.remove(); // Remove the actor div when delete is clicked
      });
    });
}

// Function to add more emotions dynamically with text head for emotion label
function addEmotion() {
    const emotionsContainer = document.getElementById('emotionsContainer');
    const emotionDiv = document.createElement('div');
    emotionDiv.classList.add('emotion');

    emotionDiv.innerHTML = `
      <label for="emotion_label">Emotion Label:</label>
      <input type="text" class="emotion_label" name="emotion_label[]" list="emotionList" required><br><br>
      <datalist id="emotionList">
        <option value="Happy">
        <option value="Sad">
        <option value="Angry">
        <option value="Surprised">
        <option value="Confused">
        <!-- Add more options here as needed -->
      </datalist>

      <label for="emotion_description">Emotion Description:</label>
      <textarea class="emotion_description" name="emotion_description[]" required></textarea><br><br>

      <button type="button" class="deleteEmotion">Delete Emotion</button><br><br>
    `;

    emotionsContainer.appendChild(emotionDiv);

    // Add event listener for the Delete button
    const deleteButtons = emotionDiv.querySelectorAll('.deleteEmotion');
    deleteButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        emotionDiv.remove(); // Remove the emotion div when delete is clicked
      });
    });
}
