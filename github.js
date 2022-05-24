class Github{
    constructor() {
        this.client_id = "80f2c2b1532be33850fa";
        this.client_secret = "5af19e43ba00e8c450a05424220706cf800920b9";
        this.repos_count = 5;
        this.repos_sort = 'created';
        this.sort_direction = 'asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(
            `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
        )

        const repoResponse = await fetch(
            `https://api.github.com/users/${user}/repos?sort=${this.repos_sort}&direction=${this.sort_direction}&per_page=${this.repos_count}&client_id=${this.client_id}&client_secret=${this.client_secret}`
        )

        
        const profile = await profileResponse.json();
        const repos = await repoResponse.json(); 

        return {
            profile,
            repos
        }

    }
}
