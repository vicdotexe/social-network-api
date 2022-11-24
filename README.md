# Social Network API
![MIT License](https://img.shields.io/badge/License-MIT-brightgreen)

## Description
An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. Users can have many friends and thoughts, thoughts can have many reactions and belong to a user. Users create reactions to thoughts.

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Demo](#demo)
* [License](#license)
* [Questions](#questions)

## Installation
Must have MongoDB installed.

In command line and run:
```
node install
npm run start
```

## Usage
After running the server you can interract with the REST API (through an application like Insomnia) with the following end-points:

### <b>Users -</b>
|Type|Route|Description|
|---|---|---|
| GET | /api/users | returns a list of all users |
| GET | /api/users/{id} | returns a specific user of {id} |
| POST | /api/users | creates and adds a user |
| DELETE | /api/users/{id} | deletes the user of {id} and all of their associated thoughts |
| PUT | /api/users/{id} | update the user of {id} |

### <b>Thoughts -</b>
|Type|Route|Description|
|---|---|---|
| GET | /api/thoughts | returns a list of all thoughts |
| GET | /api/thoughts/{id} | returns a specific thought of {id} |
| POST | /api/thoughts | creates and adds a thought |
| DELETE | /api/thoughts/{id} | deletes the thought of {id} |
| PUT | /api/thoughts/{id} | update the thought of {id} |

### <b>Reactions -</b>
|Type|Route|Description|
|---|---|---|
| POST | /api/thoughts/:thoughtId/reacations | creates a reaction that gets stored in a thought's reactions |
| DELETE | /api/thoughts/{thoughtId}/reactions/{reactionId} | deletes a reaction from a thought|

```
// User Data
{
    "username": "lernantino",
    "email": "lernantino@gmail.com"
}

// Thought Data
{
    "thoughtText": "Here's a cool thought...",
    "username": "lernantino",
    "userId": "5edff358a0fcb779aa7b118b"
}

// Reaction Data
{
	"reactionBody": "I'm reacting to your thought...",
	"username": "lernantino"
}
```

## Demo
[![Watch the video](/assets/screenshot.PNG)](https://drive.google.com/file/d/1h8cxQfD86Pm4qdHcdjCWYdQv7I--0Ktn/view)

## Contributing
Contributions are welcome, contact info is below.

## License
The Social Network API project is under the [MIT License](http://choosealicense.com/licenses/mit/). See the link for more details.

## Questions
GitHub: [vicdotexe](https://www.github.com/vicdotexe)

E-mail: [vicdotexe@gmail.com](mailto:vicdotexe@gmail.com)
