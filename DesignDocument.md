# Soccer Without Borders Design Document
Soccer without Borders is a website aimed for under-represented soccer players who have difficulty showcasing their talent to local soccer clubs due to financial constraints. Players can share their information on video highlights, fitness statistics, contact information and write recommendations to other players.


## Audience

Target audience includes teenagers with a financial constraint that have access to the internet and video-making device. These teenagers are confident in their soccer abilities developed by playing in streets and parks who hope to get scouted and recruited by established local soccer clubs.


## Experience

From the player perspective, the user will have to log-in, fill required information, upload profile picture and highlight videos.


# Technical
## Models
- User
- Login
- Comment
- Subreddit (community - collection of threads + users)

## Views
- Home (scrolling webpage)
- Recommendation Form for other players (V2)
- User
- Login/Sign Up

## Routes
- Index/Home
    - GET `www.reddit.com/`
- Login
    - POST `www.reddit.com/auth/login`
- Sign Up
    - POST  `www.reddit.com/auth/signup`
- User
    - GET  `www.reddit.com/user/:user_id`
    - PUT `www.reddit.com/user/:user_id`
- Recommendation (V2)
    - GET `www.reddit.com/r/:subreddit_id/comments/:comment_id`
    - POST `www.reddit.com/r/:subreddit_id/comments/:comment_id`
    - PUT `www.reddit.com/r/:subreddit_id/comments/:comment_id`
    - DELETE `www.reddit.com/r/:subreddit_id/comments/:comment_id`



# Weekly Milestones
## Week 4 - Usable Build
- Paper prototype and first round of user feedback
- Basic Server Setup
    - Can view home page
- Login page
- CRUD for User

## Week 5 - Feature Complete

- Optimize routes
- Ensure everything works, so far
- Style website

## Week 6 - Polish + Prepare to Push Live
- CSS / Bootstrap
- Push first build to Heroku
    - This takes time and you will likely run into issues multiple times getting it set up
- Test with multiple users
- Test features
- Stress test (try to break application)
- Now fix as much as possible
