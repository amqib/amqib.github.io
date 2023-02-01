
$('#project-esp').on('show.bs.modal', function(event) {
    var button = $(event.relatedTarget) // Button that triggered the modal 
    var modal = $(this)

    if (button.attr('id') == 'project1') {
        modal.find('.modal-title').text('How In This City');
        modal.find('.modal-body').html('This is the project of an app to take the info about the condition of the city. By entering the city\'s name the app will display several information such as: local times, temperature, and weather.<br><br><img src="public/images/howthiscity-screen.PNG" alt=""><br>The project are made by: <br> <ul><li>Python</li><li>Kivy and KivyMD</li><li>OpenWeatherMap</li><li>timeapi.io</li></ul>For video demo <a class="video-link" href="https://youtube.com/shorts/ZTJx-JgBW5E?feature=share" target="_blank">Click Here</a> and for how i make this project <a class="medium-link" href="https://medium.com/@amqib/make-a-sky-condition-app-13d12f1066e4" target="_blank">Here</a>.');
    }
    if (button.attr('id') == 'project2') {
        modal.find('.modal-title').text('Line Transporter Robot');
        modal.find('.modal-body').html('This is the group project when i was in college, i working on this project with another two friends. The project is to make a transporter robot with the abolity to detect 3 different line color which is Red, Blue, and Black. <br> <br> <img src="https://media.licdn.com/dms/image/C562DAQHkXZBhcWijaA/profile-treasury-image-shrink_1920_1920/0/1636365259931?e=1675854000&v=beta&t=6oX-gibHRkX-hTdqYZTCGLM9MRDlBix85wsgoMQcpfw" alt=""> <br> To detect the color line we using the sensor build by photodioda and led then calculate the value from the sensor. This Project was made using <ul> <li>ATMega16</li><li>Line sensor</li><li>Body Part from acrylic</li> ')
    }
    if (button.attr('id') == 'about-page') {
        modal.find('.modal-title').text('About This Page');
        modal.find('.modal-body').html('This Page designed by Mariyatul Qibthiyah using: <ul><li>HTML5</li><li>CSS3</li><li>Bootstrap</li><li>FontAwesome</li><li>Owl Carousel</li></ul>');
    }

})
