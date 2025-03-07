# webrtc-screen-share

A simple WebRTC application for screen sharing between two or more web browsers.

## Prerequisites

- Node.js and npm installed.
- A modern web browser that supports WebRTC (Chrome, Firefox, Edge, etc.).

## Installation

1.  Clone the repository:

    ```bash
    git clone git@github.com:alexandreprl/webrtc-screen-share.git
    cd webrtc-screen-share
    ```

2.  Install the dependencies:

    ```bash
    npm install
    ```

## Usage

1.  Start the main:

    ```bash
    node main.js
    ```

2.  Open a web browser and go to `http://localhost:3000`.

3.  Click "Start Sharing" to begin sharing your screen.

4.  Open another web browser on another computer/tablet (on the same local network or using a tool like ngrok) and go to the address displayed in the first browser.

5.  Click "Watch Stream" to view the shared screen.

### Sharing across different networks (using ngrok)

If you want to share your screen with someone on a different network, you can use ngrok:

1.  Install ngrok: [https://ngrok.com/download](https://ngrok.com/download)

2.  Run ngrok to expose port 3000:

    ```bash
    ngrok http 3000
    ```

3.  Ngrok will provide a public URL (e.g., `https://<random_string>.ngrok.io`).

4.  Share this ngrok URL with the person you want to share your screen with. They can then access the application using the ngrok URL.

    For example, if ngrok gives you `https://abc123def.ngrok.io`, then your friend would go to `https://abc123def.ngrok.io`

## How it Works

This application uses WebRTC (Web Real-Time Communication) to establish a peer-to-peer connection between browsers.

-   The main acts as a signaling main, facilitating the initial connection setup by exchanging SDP (Session Description Protocol) offers and answers, and ICE (Interactive Connectivity Establishment) candidates.
-   Once the connection is established, the screen sharing data is streamed directly between the browsers.

## Notes

-   Screen sharing requires user permission.
-   WebRTC performance can be affected by network conditions.
-   This is a basic implementation and can be extended with features like audio sharing, chat, and more.
-   For security, ensure you're using HTTPS in production. ngrok uses HTTPS, so it is a good option for testing across networks.
-   Ensure that the devices that are trying to connect are on the same local network, or that they are connecting via a method that allows them to communicate with each other, such as ngrok.

## Contributing

Feel free to contribute to this project by submitting pull requests or opening issues.

## License

[MIT License](LICENSE.txt) (Replace with your actual license if you have one)
