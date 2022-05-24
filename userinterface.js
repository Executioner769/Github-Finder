class UserInterface {
    constructor() {
        this.profile = document.getElementById("profile");
        this.repositories = document.getElementById("repos");
    }

    //Display Profile
    displayProfile(user) {
        // console.log(user.message);
        
        let dateJoined = Array.from(user.created_at);
        dateJoined.splice(10,10);
        dateJoined = dateJoined.reduce((a,b) => a + b);

        this.profile.innerHTML = `
        <div class="container">
            <div class="card">
                <div class="card-header">
                    <div class="card-header-title has-text-weight-normal is-size-3 is-centered">
                        ${user.name || user.login}
                    </div>
                </div>
                <div class="card-content">
                    <div class="columns">
                        <div class="box column is-4">
                            <figure class="image">
                                <img style="border-radius: 25px;" src="${
                                    user.avatar_url
                                }" alt="${user.login}'s Avatar">
                            </figure>
                            <br>
                            <a class="button is-dark is-outlined is-fullwidth" href="${
                                user.html_url
                            }" target="_blank">
                                View Profile 
                            </a>
                        </div>
                        <div class="column is-8">
                            <div class="box">
                                <h1 class="title has-text-weight-normal is-size-4">Bio</h1>
                                <p class="subtitle is-size-6 has-text-weight-light">${
                                    user.bio || ""
                                }</p>
                            </div>
                            <div class="box field is-grouped is-grouped-multiline is-grouped-centered">
                                <div class="control">
                                    <div class="tags has-addons">
                                    <span class="tag is-dark is-medium">Public Gists</span>
                                    <span class="tag is-info is-medium">${
                                        user.public_gists
                                    }</span>
                                    </div>
                                </div>

                                <div class="control">
                                    <div class="tags has-addons">
                                    <span class="tag is-dark is-medium">Public Repositories</span>
                                    <span class="tag is-info is-medium">${
                                        user.public_repos
                                    }</span>
                                    </div>
                                </div>

                                <div class="control">
                                    <div class="tags has-addons">
                                    <span class="tag is-dark is-medium">Followers</span>
                                    <span class="tag is-link is-medium">${
                                        user.followers
                                    }</span>
                                    </div>
                                </div>

                                <div class="control">
                                    <div class="tags has-addons">
                                    <span class="tag is-dark is-medium">Following</span>
                                    <span class="tag is-link is-medium">${
                                        user.following
                                    }</span>
                                    </div>
                                </div>
                            </div>
                            <br>
                            <div class="box">
                                <table class="table is-bordered is-striped is-narrow is-fullwidth">
                                    <tbody>
                                        <tr class="is-selected">
                                            <td>User Id</td>
                                            <td>${user.id}</td>
                                        </tr>
                                        <tr>
                                            <td>Location</td>
                                            <td>${user.location || ""}</td>
                                        </tr>
                                        <tr>
                                            <td>Company</td>
                                            <td>${user.company || ""}</td>
                                        </tr>
                                        <tr>
                                            <td>Blog</td>
                                            <td>${user.blog || ""}</td>
                                        </tr>
                                        <tr>
                                            <td>Email</td>
                                            <td>${user.email || ""}</td>
                                        </tr>
                                        <tr>
                                            <td>Member Since</td>
                                            <td>${dateJoined}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <footer class="card-footer">
                    <div class="card-footer-item">

                    </div>
                    <div class="card-footer-item">

                    </div>
                </footer> -->
            </div>
        </div>
        `;
    }

    //Clear Profile
    clearProfile() {
        this.profile.innerHTML = ``;

    }

    //Show Alert
    showAlert(message,className) {
        //Clear Previous Alerts
        this.clearAlert();

        //Create div Element
        const div = document.createElement('div');
        //Add class
        div.className = className;
        //Add text
        div.appendChild(document.createTextNode(message));

        //Get hero-body
        const parent = document.querySelector('.hero-body');
        //get card
        const card = document.querySelector('.card')
        //Add it to the ui
        parent.insertBefore(div,card);

        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    clearAlert() {
        const currentNotification = document.querySelector('.notification');

        if(currentNotification) {
            currentNotification.remove();
        }
    }

    //Show Repos
    showRepos(repos) {
        // console.log(repos);

        let repoDisplay = 5;
        if (repos.length < 5) {
            repoDisplay = repos.length;
        }

        let output = `
        <div class="container>
            <div class="card">
                <div class="card-header">
                    <div class="card-header-title has-text-weight-normal is-size-3 is-centered has-text-white">
                        Latest ${repoDisplay} Created Repositories
                    </div>
                </div>
            <div>    `;
        repos.forEach(repo => {
            output += `
            <div class="card">
            <div class="card-content">
                <div class="columns row">
                    <div class="column is-5">
                        <div class="box">
                            <p class="title">
                                <a class="is-link" href="${repo.html_url}" target="_blank">
                                ${repo.name}
                                </a>
                                <br>
                                <span class="subtitle is-size-4">
                                ${repo.language}
                                </span>
                                </p>
                            <p class="subtitle">
                                ${repo.description || ""}
                            </p>
                        </div>
                    </div>
                    <div class="column is-7">
                        <div class="box field is-grouped is-grouped-multiline is-grouped-centered">
                            <div class="control">
                                <div class="tags has-addons">
                                    <span class="tag is-dark is-medium">Stars</span>
                                    <span class="tag is-warning is-medium">${repo.stargazers_count}</span>
                                </div>
                            </div>

                            <div class="control">
                                <div class="tags has-addons">
                                    <span class="tag is-dark is-medium">Watchers</span>
                                    <span class="tag is-primary is-medium">${repo.watchers_count}</span>
                                </div>
                            </div>

                            <div class="control">
                                <div class="tags has-addons">
                                    <span class="tag is-dark is-medium">Forks</span>
                                    <span class="tag is-info is-medium">${repo.forks_count}</span>
                                </div>
                            </div>

                            <div class="control">
                                <div class="tags has-addons">
                                    <span class="tag is-dark is-medium">Size</span>
                                    <span class="tag is-success is-medium">${repo.size}</span>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
            `;
        });

        output += `</div>`

        //Add to output to repos
        this.repositories.innerHTML = output;
    }

}



//Executioner769
//yash-chintu
//ismarthawk