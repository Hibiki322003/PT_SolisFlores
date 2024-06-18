document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (username === 'admin' && password === 'password') {
        var modal = document.getElementById("verificationModal");
        modal.style.display = "block";
        
        var span = document.getElementsByClassName("close")[0];
        var confirmBtn = document.getElementById("confirmBtn");

        span.onclick = function() {
            modal.style.display = "none";
        }

        confirmBtn.onclick = function() {
            modal.style.display = "none";
            if (checkAge()) {
                alert('Welcome, User!');
            }
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    } else {
        alert('Invalid username or password.');
    }
});
