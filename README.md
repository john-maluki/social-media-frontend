# **CON-NECT**: Social Media Application(Project)
**Authours**: *John Maluki*, *Martin Nyaga*, *Edmond Wayama*, *Levina Njambi*, *Brian Maina*

## Introduction

This is a social media app designed to [briefly describe the main purpose or unique feature of your app]. It provides users with a platform to connect, share updates, and engage with others in a social networking environments.

## Models

### Post

- **Description**: A `Post` represents a user-generated content item. It includes text-based content and may also contain images or other media.
- **Attributes**:
  - `description`: The main text content of the post.
- **Usage**: Posts are created by users to share updates and engage with other users. They can be liked and commented upon by other users.

### User

- **Description**: A `User` represents a registered user of the app. Users have profiles, can create posts, like posts, and interact with other users.
- **Attributes**:
  - `username`: The unique username chosen by the user for identification.
  - `password`: The user's password (hashed for security).
- **Usage**: Users can sign up, log in, and customize their profiles. They create and manage posts, like other users' posts, and interact with the app's features.

### Like

- **Description**: A `Like` represents the action of a user liking a post. It establishes a connection between the user and the liked post.
- **Attributes**:
  - `user_id`: The ID of the user who performed the like action.
  - `post_id`: The ID of the post that was liked.
- **Usage**: Likes allow users to express appreciation for posts. They enable users to keep track of posts they've liked and help determine post popularity.


## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/john-maluki/social-media-frontend



## Prerequisites

**Technologies Used Within The Creation Of This Project**
    react
    react-dom
    react-loader-spinner
    react-router-dom
    react-scripts
    react-toastify
    web-vitals
    


## Known Bugs

No known bugs at the moment

## Support and contact details 

To make a contribution to the code used or any suggestions you can click on the contact link and email me your suggestions.

- Email: levina.njambi@student.moringaschool.com
- Email: wanyama@student.moringaschool.com
- Email: martin.nyaga@student.moringaschool.com
- Email: brian.maina@student.moringaschool.com
- Email: john.maluki@student.moringaschool.com

#### License
Copyright (c) {{ 2023 }}, {{ CON_NECT.org }}

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND
FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.