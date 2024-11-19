function sendMail () {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_1i0tv8c', 'template_qc4jfo', this)
            .then(() => {
                // console.log('SUCCESS!');
                alert('Email sent successfully');
            }, (error) => {
                // console.log('FAILED...', error);
                alert('Failed to send email');
            });
    });
}