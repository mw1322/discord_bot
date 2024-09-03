# URL Shortener Application

Welcome to the URL Shortener Application! This project provides an industry-standard solution for generating shortened URLs. When a user clicks on the shortened URL, they are seamlessly redirected to the original website.

## Features

- **URL Shortening:** Quickly generate shortened URLs for any website.
- **Discord Integration:** Users can interact with the URL shortener directly from a Discord server. Upon generating a short URL, the user receives the shortened link as a reply in the Discord channel.
- **Seamless Redirection:** Clicking on the shortened URL will redirect the user to the original website.
- **Scalable Backend:** The application is built with a scalable backend to handle high traffic.

## How It Works

1. **Create a Short URL:** Users can submit a long URL through the application's interface or directly through a Discord command.
2. **Get the Shortened Link:** After the long URL is processed, a shortened URL is generated and returned to the user.
3. **Discord Notification:** If the request is made through Discord, the shortened URL is sent as a reply in the server channel.

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (for storing URLs)
- Discord Account & Server (for integration)

### Setup

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/yourusername/url-shortener.git
    cd url-shortener
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    ```

3. **Configure Environment Variables:**

    Create a `.env` file in the root directory and add the following variables:

    ```env
    MONGO_URI=your_mongodb_connection_string
    BASE_URL=http://localhost:5000
    DISCORD_TOKEN=your_discord_bot_token
    DISCORD_CHANNEL_ID=your_discord_channel_id
    ```

4. **Run the Application:**

    ```bash
    npm start
    ```

5. **Set
