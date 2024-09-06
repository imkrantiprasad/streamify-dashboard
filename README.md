# Streamify Dashboard

This project is a music streaming analytics dashboard built using **React**. The dashboard displays key metrics and data visualizations, allowing the management team to gain insights into user activity, revenue, and content performance on the fictional music streaming platform "Streamify."

## Features

- **Key Metrics**: Displays total users, active users, total streams, revenue, and top artist.
- **Data Visualizations**:
  - User Growth (Line Chart)
  - Revenue Distribution (Pie Chart)
  - Top 5 Streamed Songs (Bar Chart)
- **Data Table**: Lists detailed information about recent streams, including sorting and filtering functionality.
- **Sorting**: Clickable column headers to sort by song name, artist, date streamed, stream count, or user ID.
- **Responsive Design**: Optimized for various screen sizes.

## Technologies Used

- **React**: For building the frontend.
- **Tailwind CSS**: For styling the UI.
- **Recharts**: For creating charts.
- **JSON Server**: For mocking a backend API with real-time data.
- **React Icons**: For displaying icons in the table headers.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)

## Setup Instructions

Follow these steps to get the project up and running:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/streamify-dashboard.git
cd streamify-dashboard
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the JSON Server (mock backend)

JSON Server is used to mock the backend and provide the data for the dashboard.

```bash
npx json-server --watch db.json --port 4000
```

- This command will serve the data from the db.json file at http://localhost:4000.

### 4. Start the React Application

In another terminal window, start the React development server:

```bash
npm start
```

This will start the React application on http://localhost:3000.

### 5. View the Dashboard

Open your browser and visit http://localhost:3000 to view the dashboard.
