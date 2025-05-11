BUILD A CHROME EXTENSION FOR PRODUCTIVITY MANAGEMENT
**Company**: CodTech
**Intern Name:** Deshetti Vinodini
**Intern ID:** CT08WN182
**Domain:** Mern Stack Web Development.  
**Duration:** 8 weeks Internship  
**Mentor:**  Neela Santhosh Kumar 
**TASK DESCRIPTION**
The aim of this project was to build a Real-Time Collaboration Tool using WebSockets, where multiple users can interact with each other live on a shared platform. Based on the instructions, the tool could be either a shared document editor or a whiteboard. For this project, I chose to implement a collaborative whiteboard, as it provides a simple yet effective medium for real-time teamwork, especially in remote learning, brainstorming, or creative sessions.
The core of this application is built using HTML, CSS, and JavaScript for the frontend, and Node.js with Express on the backend. To establish real-time communication between users, Socket.IO was integrated — a library that wraps WebSocket connections and enables bi-directional event-based communication between client and server.
When a user draws on the canvas, the mouse movement and drawing coordinates are captured and sent to the server using a drawing event through Socket.IO. The server then broadcasts this data to all other connected clients, allowing them to see the drawing live on their own canvas. This ensures that all users view the same updates in real-time, fulfilling the core requirement of a synchronized collaboration tool.
Beyond basic drawing, the whiteboard includes several features to enhance the collaborative experience. Users can pick different brush colors using a color picker and adjust the brush size through a slider. A Clear Board button allows any participant to erase the canvas, which also clears it for all other users at the same time through a Socket.IO broadcast. Additionally, the Save as Image feature enables users to download the current canvas as a PNG file, allowing them to keep a record of the session.
The application has been designed for multi-user support and works efficiently even with multiple browser tabs or devices connected to the server simultaneously. Every interaction is broadcasted and updated across all clients without delay, showcasing the power of WebSocket-based synchronization. The canvas automatically adjusts its display and ensures that strokes remain consistent across devices.
This project not only demonstrates real-time syncing but also showcases practical implementation of full-stack development principles. The server-side logic was kept lightweight, focusing purely on broadcasting events. Static files like index.html and script.js are served using Express. All synchronization logic is managed through event listeners on both the client and server.
From a learning perspective, this project deepened my understanding of WebSockets, event-driven programming, and frontend-to-backend communication in real time. It also emphasized the importance of clean project structure, as I encountered a situation where files from a different project were accidentally merged. After careful cleanup, only the relevant files for this whiteboard tool were retained, ensuring the final submission meets the project objectives without unnecessary dependencies.
In conclusion, this collaborative whiteboard successfully meets the internship task requirements — it is a live, synchronized, and multi-user supported tool using WebSocket. The user interface is responsive, the synchronization is smooth, and all features align with the goal of enhancing collaborative work environments. This project is not only a working product but also a solid demonstration of real-time web development and teamwork enablement through technology.
**Tools & Technologies Used**
- **HTML5** – Used to structure the collaborative whiteboard interface.
- **CSS3** – Applied for styling the canvas, buttons, and layout design.
- **JavaScript** – Handles canvas drawing, color picker, brush control, and real-time event emissions.
- **Node.js** – Backend runtime environment for running the server-side application.
- **Express.js** – Lightweight Node.js framework to serve static files and manage HTTP requests.
- **Socket.IO** – Enables real-time, bi-directional communication between clients via WebSocket.
- **Git** – Version control system used for local project tracking.
- **GitHub** – Hosted the project repository and codebase for collaboration and submission.
- **Visual Studio Code** – Primary code editor used for writing and organizing the project files.
- **Google Chrome** – Used for running and testing the application in multiple tabs for real-time sync.
  **Screenshots**
  ![Whiteboard Screenshot](https://github.com/vinodinideshetti/collaborative-whiteboard/blob/main/Whiteboard%20Canvas.png)
  ![Title and Canvas screenshot](https://github.com/vinodinideshetti/collaborative-whiteboard/blob/main/Title%20and%20Canvas.png)
  ![reat-time drawing screenshot](https://github.com/vinodinideshetti/collaborative-whiteboard/blob/main/Real-time%20Drawing.png)
