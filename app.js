//Getting element searchUser
const searchUser = document.getElementById('searchUser');

//Instantiate Github class
const github = new Github();

//Instantiate UserInterface class
const ui = new UserInterface();



//Adding Event Listeners
search.addEventListener('submit', (e) => {

    //Prevent Default
    e.preventDefault();

    //Get input text
    const userText = searchUser.value;

    if(userText !== '') {
        // console.log(userText);
        //Make http call --> Github.js
        github.getUser(userText)
        .then(data => {
            if (data.profile.message === 'Not Found') {
                //Show Alert --> UI
                // console.log('User Not Found');
                ui.showAlert('Error 404: User not Found!','notification is-danger is-light')   //(message,className)
            } else {
                // console.log(data);
                //Display Profile --> UI
                ui.displayProfile(data.profile);
                //Display Repositories
                if(data.repos.message === "Not Found") {
                    ui.showAlert(
                        "Error 404: Unable to Fetch Repositories",
                        "notification is-danger is-light"
                    );
                } else if(data.repos.length === 0){   //No repositories

                } else {
                    ui.showRepos(data.repos);  //1 or more than one repos
                }
            }
        })
        .catch(err => {
            ui.showAlert(
                err,
                "notification is-danger is-light"
            );
        })
    } else {
        //Clear Profile --> UI
        ui.clearProfile();
    }


    //Clear input value
    // searchUser.value = ``
});


//Executioner769
//yash-chintu
//ismarthawk