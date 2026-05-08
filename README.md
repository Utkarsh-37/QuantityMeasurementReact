# Quantity Measurement System

The **Quantity Measurement System** is an application designed to perform unit conversions across different measurement categories.

The system provides:

- Real-time unit conversion
- Interactive conversion interface
- Conversion history tracking
- Easy category switching

The application offers a simple and user-friendly experience for handling measurement conversions efficiently.

---

# Features

## Unit Conversion Logic

The application performs conversions between different measurement units.

### Supported Categories

- Length
- Volume
- Mass
- Temperature

### Functionalities

- Convert measurements between units
- Display accurate conversion results
- Perform real-time calculations

---

## Interactive Measurement Cards

The system provides an interactive UI for quick and easy conversions.

### Features

- User-friendly conversion layout
- Easy selection of:
  - From Unit
  - To Unit
- Instant display of converted values

---

## Conversion History

The application maintains a history of performed conversions.

### Functionalities

- Store recent conversion records
- Display scrollable conversion history
- Quick reference for previous calculations

---

## Category Switching

Users can switch between different measurement categories dynamically.

### Supported Categories

- Length
- Volume
- Mass
- Temperature

The modular structure keeps conversions organized and easy to manage.

---

# Technology Stack

| Technology | Purpose |
|---|---|
| HTML | Structure |
| CSS | Styling |
| JavaScript | Conversion Logic |
| JSON Server | Mock Backend / Data Storage |

---

# Core Modules

## Conversion Module

Handles:

- Unit conversions
- Formula calculations
- Result generation

---

## History Module

Handles:

- Saving conversion records
- Displaying recent history
- Managing calculation logs

---

## Category Module

Handles:

- Measurement type switching
- Dynamic unit loading
- UI updates

---

# Conversion Workflow

```text
Select Category
      ↓
Choose From Unit
      ↓
Choose To Unit
      ↓
Enter Value
      ↓
View Converted Result
      ↓
Save to History
```

---

# User Interface Features

- Interactive conversion cards
- Dynamic dropdowns
- Real-time conversion updates
- Scrollable history section
- Responsive and simple UI

---

# Project Structure

```text
QuantityMeasurementSystem
│
├── css
│   └── style.css
│
├── js
│   ├── app.js
│   ├── conversion.js
│   ├── history.js
│   └── ui.js
│
├── data
│   └── db.json
│
├── index.html
│
└── assets
```

---

# How to Run

## 1. Clone the Repository

```bash
git clone <repository-url>
```

---

## 2. Navigate to the Project Directory

```bash
cd QuantityMeasurementSystem
```

---

## 3. Install JSON Server

```bash
npm install -g json-server
```

---

## 4. Start JSON Server

```bash
json-server --watch db.json
```

---

## 5. Run the Application

Open `index.html` in the browser.

---

# Future Enhancements

- Add more measurement categories
- Add dark mode support
- Export conversion history
- Add authentication system
- Add advanced calculation support
- Deploy application online

---

# Advantages

- Fast and accurate conversions
- Easy-to-use interface
- Organized category management
- Real-time conversion tracking
- Lightweight and modular structure

---

# Author

Developed as a Quantity Measurement and Unit Conversion application for handling different measurement operations efficiently.
