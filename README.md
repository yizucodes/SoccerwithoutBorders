# Soccer Without Borders Design Document
Soccer without Borders is a website aimed for under-represented soccer players who have difficulty showcasing their talent to local soccer clubs due to financial constraints. Players can share their information on video highlights, fitness statistics, contact information and write recommendations to other players.


## Audience

Target audience includes teenagers with a financial constraint that have access to the internet and video-making device. These teenagers are confident in their soccer abilities developed by playing in streets and parks who hope to get scouted and recruited by established local soccer clubs.

## Experience

From the player perspective, the user will have to log-in, fill required information, upload profile picture and highlight videos.
![PaperPrototype](/Users/yizu/Documents/GitHub/SoccerwithoutBorders/public/images/PaperPrototype.jpeg)

# Technical
## Models
- User
- Login
- Comment
- Subreddit (community - collection of threads + users)

## Views
- Home (scrolling webpage)
- User
- Login/Sign Up
- Recommendation Form for other players (V2)

## Routes
- Index/Home
    - GET `www.reddit.com/`
- Login
    - GET `www.reddit.com/auth/login`
    - POST `www.reddit.com/auth/login`
- Sign Up
    - POST  `www.reddit.com/auth/signup`
- User
    - GET  `www.reddit.com/user/:user_id`
    - POST `www.reddit.com/user/:user_id`
    - PUT  `www.reddit.com/user/:user_id`
    - DELETE `www.reddit.com/user/:user_id`
- Recommendation (V2)
    - GET `www.reddit.com/r/:subreddit_id/comments/:comment_id`
    - POST `www.reddit.com/r/:subreddit_id/comments/:comment_id`
    - PUT `www.reddit.com/r/:subreddit_id/comments/:comment_id`
    - DELETE `www.reddit.com/r/:subreddit_id/comments/:comment_id`


# Weekly Milestones

## Week 4 - Usable Build
- Paper prototype
- Basic Server Setup
    - Can view home page
- Text, number and date fields 
- Youtube video uploading feature
- CRUD for User
- User testing of MVP

## Week 5 - Feature Complete
- Login page, password encryption using bcryptjs
- Optimize routes
- Ensure everything works so far
- Style website
- Nice to have: Player recommendation

## Week 6 - Polish + Prepare to Push Live
- CSS / Bootstrap
- Push first build to Heroku
    - This takes time and you will likely run into issues multiple times getting it set up
- Test with multiple users
- Test features
- Stress test (try to break application)
- Final fixes
