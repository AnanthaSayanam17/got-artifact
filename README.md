# GOT-ARTIFACT PROJECT

This project is a simple user profile management web application built with React. The app allows users to view and edit their profile details such as name, age, gender, interests, and avatar. It also integrates with external APIs to fetch user location and additional profile data like email, username, and display name.

The key features of the application include:
- Displaying user profile information.
- Storing profile data in local storage.
- Fetching and updating profile details via external APIs.
- Changing user avatar through URL input.

## Features

- **Local Storage**: 
  - User profile data is stored in `localStorage`, so the profile persists across page reloads.
  
- **JSON File Loading**:
  - The app initially loads static profile data from a local JSON file and populates the form fields.

- **API Integration**:
  - **Geolocation API**: Fetches the user’s location based on IP address using the [AbstractAPI IP Geolocation API](https://www.abstractapi.com/api/ip-geolocation-api).
  - **User Info API**: Fetches the user’s email, username, display name, and avatar from the provided API endpoint.

- **Avatar Update**: Users can change their avatar URL, and the new avatar will be displayed once the "Change Avatar" button is clicked.

## Installation and Setup

### Prerequisites

To run this project, you will need:

- [Node.js](https://nodejs.org/) installed on your machine.
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) package manager.

### Steps to Install

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/react-user-profile.git
